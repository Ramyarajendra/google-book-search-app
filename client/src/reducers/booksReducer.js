import { REMOVE_ERROR, SEARCH_BOOKS, SET_ERROR, SET_LOADING } from "../actions/types";

const initialState = {
    books: [],
    loading: false,
    error: null
}
const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BOOKS:
            const allbooks = Object.values(
                action.payload.concat(state.books).reduce((r, o) => {
                    r[o.id] = o;
                    return r;
                }, {})
            )
            return {
                ...state,
                books: allbooks,
                loading: false
            }

        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case REMOVE_ERROR:
            return{
                ...state,
                error:null
            }
        default:
            return state
    }
}

export default booksReducer