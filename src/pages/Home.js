import React from 'react'
import { Container } from '@chakra-ui/react'
import MovieItem from '../components/MovieItem'
import Search from '../components/Search'
import MovieItemLoading from '../components/MovieItemLoading'
import { useSelector } from 'react-redux';

function Home() {
    let movies = useSelector(state => state.movies.items);
    let isLoading = useSelector(state => state.movies.isLoading);
    return (
        <>
            <Search />
            {!isLoading && movies && <Container maxW="container.lg">
                {movies.map(movie => (<MovieItem movie={movie} key={movie.imdbID} />))}
            </Container>}
            {isLoading && <MovieItemLoading />}
        </>
    )
}

export default Home
