import React from 'react'
import { Container } from '@chakra-ui/react'
import MovieItem from '../components/MovieItem'
import Search from '../components/Search'
import Empty from '../components/Empty'
import MovieItemLoading from '../components/MovieItemLoading'
import { useSelector } from 'react-redux';

function Home() {
    let movies = useSelector(state => state.movies.items);
    let total = useSelector(state => state.movies.total);
    let isLoading = useSelector(state => state.movies.isLoading);
    return (
        <>
            <Search />
            {!isLoading && movies && <Container maxW="container.lg" mb={5}>
                {movies.map(movie => (<MovieItem movie={movie} key={movie.imdbID} />))}
            </Container>}
            {!isLoading && total === 0 && <Empty />}
            {isLoading && <MovieItemLoading />}
        </>
    )
}

export default Home
