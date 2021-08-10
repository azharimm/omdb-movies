import React, { useState } from 'react';
import { Container, useDisclosure } from '@chakra-ui/react';
import MovieItem from '../components/MovieItem';
import Search from '../components/Search';
import Empty from '../components/Empty';
import MovieItemLoading from '../components/MovieItemLoading';
import ModalImage from '../components/ModalImage';
import { useSelector } from 'react-redux';

function Home() {
    const { items, total, isLoading } = useSelector(state => state.movies);
    const [posterUrl, setPosterUrl] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const onClickImage = (poster) => {
        setPosterUrl(poster);
        onOpen();
    }
    return (
        <>
            <Search />
            {!isLoading && items && <Container maxW="container.lg" mb={5}>
                {items.map(movie => (<MovieItem movie={movie} key={movie.imdbID} onClickImage={onClickImage} />))}
            </Container>}
            {!isLoading && total === 0 && <Empty />}
            {isLoading && <MovieItemLoading />}
            <ModalImage isOpen={isOpen} onClose={onClose} posterUrl={posterUrl} />
        </>
    )
}

export default Home
