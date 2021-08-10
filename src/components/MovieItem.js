import React from 'react';
import { Box, Flex, Text, Tag, Image, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function MovieItem({ movie, onClickImage }) {
    return (
        <Box borderWidth="1px" borderRadius="lg" mt={5} p={3}>
            <Flex justify="flex-start" align="center">
                {movie.Poster === 'N/A' ? <Image onClick={() => onClickImage('https://via.placeholder.com/500')} src='https://via.placeholder.com/150' cursor="pointer" width={50} mr={3} alt={movie.title} /> : <Image onClick={() => onClickImage(movie.Poster)} src={movie.Poster} cursor="pointer" width={50} mr={3} alt={movie.title} />}
                <Link to={`/${movie.imdbID}`}><Text fontSize="lg" cursor="pointer">{movie.Title} ({movie.Year})</Text></Link>
                <Tag size="sm" variant="solid" colorScheme={`${movie.Type === 'movie' ? 'teal' : 'red'}`} ml={3}>
                    {movie.Type}
                </Tag>
            </Flex>
        </Box>
    )
}

export default MovieItem
