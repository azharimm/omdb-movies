import axios from 'axios';
import { FETCH_MOVIES, SET_LOADING } from './types'

export const fetchMovies = (query) => async dispatch => {
    try {
        dispatch({type: SET_LOADING, payload: true})
        const response = await axios.get(`https://www.omdbapi.com/?apikey=faf7e5bb&s=${query}&page=1`)
        dispatch({ type: FETCH_MOVIES, payload: response.data })
        dispatch({type: SET_LOADING, payload: false})
    } catch (error) {
        console.log(error)
        dispatch({type: SET_LOADING, payload: true})
    }
}