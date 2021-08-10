import axios from 'axios';
import { FETCH_MOVIES, SET_LOADING, FETCH_DETAIL_MOVIE, RESET_ITEMS } from './types'
import { apiKey } from '../config';

export const fetchMovies = (query, page, append) => async dispatch => {
    try {
        dispatch({ type: SET_LOADING, payload: true })
        !append && dispatch({ type: RESET_ITEMS })
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&page=${page}`)
        if(response.data.Response === 'True') {
            dispatch({ type: FETCH_MOVIES, payload: {...response.data, query, append} })
            dispatch({ type: SET_LOADING, payload: false })
        }else {
            dispatch({ type: FETCH_MOVIES, payload: { Search: [], totalResults: 0, query, append} })
            dispatch({ type: SET_LOADING, payload: false })
        }
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_MOVIES, payload: { Search: [], totalResults: 0, query, append}})
        dispatch({ type: SET_LOADING, payload: true })
    }
}

export const fetchDetailMovie = (id) => async dispatch => {
    try {
        dispatch({ type: SET_LOADING, payload: true })
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`)
        dispatch({ type: FETCH_DETAIL_MOVIE, payload: response.data })
        dispatch({ type: SET_LOADING, payload: false })
    } catch (error) {
        console.log(error)
        dispatch({ type: SET_LOADING, payload: true })
    }
}