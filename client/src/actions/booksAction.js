import Axios from 'axios'
import { SEARCH_BOOKS, SET_ERROR, SET_LOADING ,REMOVE_ERROR} from './types'

export const searchBooks = query => async dispatch => {
    try {
        dispatch(setLoading())
        const res = await Axios.get(`/api/books?q=${query}`)
        dispatch({
            type: SEARCH_BOOKS,
            payload: res.data.response
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.response.data.msg
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