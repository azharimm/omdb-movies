import { FETCH_MOVIES, FETCH_DETAIL_MOVIE, SET_LOADING, SET_QUERY, RESET_ITEMS, SET_ERROR } from '../actions/types';

const initialState = {
    isLoading: false,
    query: '',
    items: [],
    total: null,
    item: {},
    isError: false,
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            let items = [];
            if (action.payload.append) {
                items = [...state.items, ...action.payload.Search]
            } else {
                items = action.payload.Search
            }
            return {
                ...state,
                items: items,
                total: parseInt(action.payload.totalResults),
            };
        case FETCH_DETAIL_MOVIE:
            return {
                ...state,
                item: action.payload
            };
        case RESET_ITEMS:
            return {
                ...state,
                items: []
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                isError: action.payload
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