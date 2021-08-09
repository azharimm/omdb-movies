import React from 'react'
import { Box, Flex, Text, Tag, Image } from '@chakra-ui/react'

function MovieItem({ movie }) {
    return (
        <Box borderWidth="1px" borderRadius="lg" mt={5} p={3}>
            <Flex justify="flex-start" align="center">
                <Image src={movie.Poster} cursor="pointer" width={50} mr={3} alt={movie.title} />
                <Text fontSize="lg" cursor="pointer">{movie.Title} ({movie.Year})</Text>
                <Tag size="sm" variant="solid" colorScheme={`${movie.Type === 'movie' ? 'teal' : 'red'}`} ml={3}>
                    {movie.Type}
                </Tag>
            </Flex>
        </Box>
    )
}

export default MovieItem
