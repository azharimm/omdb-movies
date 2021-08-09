import React from 'react'
import {
    Box,
    Container,
    Button,
    Flex,
    Heading,
} from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import { FaArrowLeft } from "react-icons/fa"
import { Link } from 'react-router-dom'
import MovieDetail from '../components/MovieDetail'
import MovieDetailLoading from '../components/MovieDetailLoading'

function Detail() {
    const size = useBreakpointValue(['md', 'lg'])
    return (
        <>
            <Container maxW="container.lg" mb={5}>
                <Box mt={10} p={4} borderWidth="1px" borderRadius="lg">
                    <Flex>
                        <Link to="/">
                            <Button leftIcon={<FaArrowLeft />} colorScheme="teal" mr="4" size={size}>
                                Back
                            </Button>
                        </Link>
                        <Heading size={size}>Game of Thrones (2011-2019)</Heading>
                    </Flex>
                </Box>
                <MovieDetail />
                <MovieDetailLoading />
            </Container>
        </>
    )
}

export default Detail
