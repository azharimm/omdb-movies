import React, { useState, useEffect, useCallback } from 'react';
import { Container, Center, useDisclosure } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../actions/index'
import MovieItem from '../components/MovieItem';
import Search from '../components/Search';
import Empty from '../components/Empty';
import MovieItemLoading from '../components/MovieItemLoading';
import ModalImage from '../components/ModalImage';

function Home() {
    const { items, total, isLoading, query } = useSelector(state => state.movies);
    const [posterUrl, setPosterUrl] = useState(null);
    const [page, setPage] = useState(1);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    const onClickImage = (poster) => {
        setPosterUrl(poster);
        onOpen();
    }

    const handleScroll = useCallback(() => {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
        if (bottom) setPage(val => val + 1)
    }, [setPage])

    const loadMore = async (page) => {
        if(total > 5 && total > items.length) {
            await dispatch(fetchMovies(query, page, true))
        }
    }

    useEffect(() => {
        if(page > 1) {
            loadMore(page)
        }
    }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setPage(1);
    }, [query])

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <>
            <Search />
            {items && <Container maxW="container.lg" mb={5}>
                {items.length > 0 && <Center id="total" mt={5}>Found: {total} total</Center>}
                {items.map(movie => (<MovieItem movie={movie} key={movie.imdbID} onClickImage={onClickImage} />))}
            </Container>}
            {!isLoading && total === 0 && items.length === 0 && <Empty />}
            {isLoading && <MovieItemLoading />}
            <ModalImage isOpen={isOpen} onClose={onClose} posterUrl={posterUrl} />
        </>
    )
}

export default Home
