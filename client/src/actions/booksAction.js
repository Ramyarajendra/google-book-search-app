import Axios from 'axios'
import { set } from 'mongoose'
import { SEARCH_BOOKS, SET_ERROR, SET_LOADING ,REMOVE_ERROR} from './types'

export const searchBooks = query => async dispatch => {
    try {
        dispatch(setLoading())
        const res = await Axios.get(`/api/books?q=${query}`)
        console.log(res.data.response,'res')
        dispatch({
            type: SEARCH_BOOKS,
            payload: res.data.response
        })
    } catch (error) {
        console.error(error)
        dispatch({
            type: SET_ERROR,
            payload: error.message
        })
        setTimeout(()=> dispatch({
            type: REMOVE_ERROR,

        }), 5000)
    }
}

export const setLoading = () => dispatch => {
    dispatch({
        type: SET_LOADING
    })
}