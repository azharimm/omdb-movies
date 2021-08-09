import { FETCH_MOVIES, FETCH_DETAIL_MOVIE, SET_LOADING, SET_QUERY } from '../actions/types';

const initialState = {
    isLoading: false,
    query: '',
    items: null,
    total: null,
    item: {}
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                items: action.payload.Search,
                total: parseInt(action.payload.totalResults)
            };
        case FETCH_DETAIL_MOVIE:
            return {
                ...state,
                item: action.payload
            };
        case SET_LOADING: 
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            }
        default:
            return state;
    }
}


export default postReducer;