import React, { useEffect } from 'react'
import { Box, Container, Button, Flex, Heading } from '@chakra-ui/react'
import { useParams, Link } from "react-router-dom";
import { fetchDetailMovie } from '../actions/index'
import { useDispatch, useSelector } from 'react-redux';
import { useBreakpointValue } from '@chakra-ui/react'
import { FaArrowLeft } from "react-icons/fa"
import MovieDetail from '../components/MovieDetail'
import MovieDetailLoading from '../components/MovieDetailLoading'

function Detail() {
    const size = useBreakpointValue(['md', 'lg'])
    const params = useParams();
    let {isLoading, item } = useSelector(state => state.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetailMovie(params.id))
    }, [dispatch, params.id])
    return (
        <>
            <Container maxW="container.lg" mb={5}>
                {!isLoading && (<><Box mt={10} p={4} borderWidth="1px" borderRadius="lg">
                    <Flex>
                        <Link to="/">
                            <Button leftIcon={<FaArrowLeft />} colorScheme="teal" mr="4" size={size}>
                                Back
                            </Button>
                        </Link>
                        <Heading size={size}>{item.Title} ({item.Year})</Heading>
                    </Flex>
                </Box>
                <MovieDetail movie={item} /></>)}
                {isLoading && <MovieDetailLoading />}
            </Container>
        </>
    )
}

export default Detail
