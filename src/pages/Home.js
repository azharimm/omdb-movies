import React, { useState } from 'react';
import { Container, Center, useDisclosure } from '@chakra-ui/react';
import useLoadmore from '../hooks/useLoadmore';
import MovieItem from '../components/MovieItem';
import Search from '../components/Search';
import Empty from '../components/display/Empty';
import Error from '../components/display/Error';
import MovieItemLoading from '../components/display/MovieItemLoading';
import ModalImage from '../components/display/ModalImage';

function Home() {
    const [posterUrl, setPosterUrl] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [items, total, isLoading, isError] = useLoadmore();

    const onClickImage = (poster) => {
        setPosterUrl(poster);
        onOpen();
    }

    return (
        <>
            <Search />
            {items && <Container maxW="container.lg" mb={5}>
                {items.length > 0 && <Center id="total" mt={5}>Found: {total} total</Center>}
                {items.map(movie => (<MovieItem movie={movie} key={movie.imdbID} onClickImage={onClickImage} />))}
            </Container>}
            {!isLoading && total === 0 && items.length === 0 && <Empty />}
            {isLoading && !isError && <MovieItemLoading />}
            {isError && <Error />}
            {isOpen && <ModalImage isOpen={isOpen} onClose={onClose} posterUrl={posterUrl} />}
        </>
    )
}

export default Home
