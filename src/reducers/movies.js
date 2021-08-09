import { FETCH_MOVIES, SET_LOADING } from '../actions/types';

const initialState = {
    isLoading: false,
    items: [],
    total: 0,
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
        case SET_LOADING: 
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}


export default postReducer;