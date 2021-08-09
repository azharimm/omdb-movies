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

function MovieDetail() {
    return (
        <Flex mt={5}>
            <Box p={4} borderWidth="1px" borderRadius="lg" mr={2} flex={.5} height="100%">
                <Image src="https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg" />
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg" flex={1}>
                <Table variant="simple">
                    <Tbody>
                        <Tr>
                            <Td>Rating</Td>
                            <Td>9.2</Td>
                        </Tr>
                        <Tr>
                            <Td>Released</Td>
                            <Td>17 Apr 2011</Td>
                        </Tr>
                        <Tr>
                            <Td>Runtime</Td>
                            <Td>57 min</Td>
                        </Tr>
                        <Tr>
                            <Td>Genre</Td>
                            <Td>Action, Adventure, Drama</Td>
                        </Tr>
                        <Tr>
                            <Td>Director</Td>
                            <Td>N/A</Td>
                        </Tr>
                        <Tr>
                            <Td>Writer</Td>
                            <Td>David Benioff, D.B. Weiss</Td>
                        </Tr>
                        <Tr>
                            <Td>Actors</Td>
                            <Td>Emilia Clarke, Peter Dinklage, Kit Harington</Td>
                        </Tr>
                        <Tr>
                            <Td>Plot</Td>
                            <Td>In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.</Td>
                        </Tr>
                        <Tr>
                            <Td>Language</Td>
                            <Td>English</Td>
                        </Tr>
                        <Tr>
                            <Td>Country</Td>
                            <Td>United States, United Kingdom</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Flex>
    )
}

export default MovieDetail
