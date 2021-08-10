import React from 'react'
import {
    Box,
    Flex,
    Image,
    Table,
    Tbody,
    Tr,
    Td,
} from '@chakra-ui/react'

function MovieDetail({ movie }) {
    return (
        <Flex mt={5}>
            <Box p={4} borderWidth="1px" borderRadius="lg" mr={2} flex={.5} height="100%">
            {movie.Poster === 'N/A' ? <Image src="https://via.placeholder.com/500" /> : <Image src={movie.Poster} />}
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg" flex={1}>
                <Table variant="simple">
                    <Tbody>
                        <Tr>
                            <Td>Rating</Td>
                            <Td>{movie.imdbRating}</Td>
                        </Tr>
                        <Tr>
                            <Td>Released</Td>
                            <Td>{movie.Released}</Td>
                        </Tr>
                        <Tr>
                            <Td>Runtime</Td>
                            <Td>{movie.Runtime}</Td>
                        </Tr>
                        <Tr>
                            <Td>Genre</Td>
                            <Td>{movie.Genre}</Td>
                        </Tr>
                        <Tr>
                            <Td>Director</Td>
                            <Td>{movie.Director}</Td>
                        </Tr>
                        <Tr>
                            <Td>Writer</Td>
                            <Td>{movie.Writer}</Td>
                        </Tr>
                        <Tr>
                            <Td>Actors</Td>
                            <Td>{movie.Actors}</Td>
                        </Tr>
                        <Tr>
                            <Td>Plot</Td>
                            <Td>{movie.Plot}</Td>
                        </Tr>
                        <Tr>
                            <Td>Language</Td>
                            <Td>{movie.Language}</Td>
                        </Tr>
                        <Tr>
                            <Td>Country</Td>
                            <Td>{movie.Country}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Flex>
    )
}

export default MovieDetail
