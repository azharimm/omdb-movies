import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { Box, Container, Flex, Spacer, Input, Button, Heading, Image } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { SET_QUERY } from '../actions/types'
import { fetchMovies } from '../actions'

function Search() {
    const size = useBreakpointValue(['md', 'lg']);
    const query = useSelector(state => state.movies.query);
    const dispatch = useDispatch();
    const search = (e) => {
        e.preventDefault();
        dispatch(fetchMovies(query));
    }
    return (
        <Container maxW="container.lg">
            <Box mt={10} p={4} borderWidth="1px" borderRadius="lg">
                <Flex direction="column">
                    <Box mb={5}>
                        <Flex direction="column" justify="center" align="center">
                            <Image src={logo} width={250} mb={5} />
                            <Heading>Find Movies</Heading>
                        </Flex>
                    </Box>
                    <form onSubmit={search}>
                        <Flex>

                            <Box width="87%">
                                <Input placeholder="Find Movies" size={size} required={true} onChange={(e) => dispatch({ type: SET_QUERY, payload: e.target.value})} value={query} />
                            </Box>
                            <Spacer />
                            <Box>
                                <Button type="submit" colorScheme="teal" mr="4" size={size}>
                                    Search
                                </Button>
                            </Box>
                        </Flex>
                    </form>
                </Flex>
            </Box>
        </Container>
    )
}

export default Search
