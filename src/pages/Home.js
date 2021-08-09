import React from 'react'
import { Container } from '@chakra-ui/react'
import MovieItem from '../components/MovieItem'
import Search from '../components/Search'
import MovieItemLoading from '../components/MovieItemLoading'

function Home() {

    return (
        <>
            <Search />
            <Container maxW="container.lg">
                <MovieItem />
            </Container>
            <MovieItemLoading />
        </>
    )
}

export default Home
