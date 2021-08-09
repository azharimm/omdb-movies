import { combineReducers } from 'redux';
import MoviesReducer from './movies';

const reducers = combineReducers({
    movies: MoviesReducer,
});

export default reducers;