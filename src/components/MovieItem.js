import React from 'react'
import { Box, Container, Flex, Text, Tag, Image } from '@chakra-ui/react'

function MovieItem() {
    return (

        <Box borderWidth="1px" borderRadius="lg" mt={5} p={3}>
            <Flex justify="flex-start" align="center">
                <Image src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" cursor="pointer" width={50} mr={3} />
                <Text fontSize="lg" cursor="pointer">Batman Begins (2005)</Text>
                <Tag size="sm" variant="solid" colorScheme="teal" ml={3}>
                    Movie
                </Tag>
            </Flex>
        </Box>
    )
}

export default MovieItem
