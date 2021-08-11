import React, { useState } from "react";
import { Box, Container, Flex, Spacer, Input, Button, UnorderedList, ListItem } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { apiKey } from '../config';
import Logo from "./Logo";
import { SET_QUERY } from "../actions/types";
import { fetchMovies } from "../actions";

function Search() {
    const size = useBreakpointValue(["md", "lg"]);
    const query = useSelector((state) => state.movies.query);
    const [lists, setLists] = useState([]);
    const dispatch = useDispatch();
    const search = (e) => {
        e.preventDefault();
        dispatch(fetchMovies(query, 1, false));
        setLists([]);
    };
    const change = (e) => {
        if(e.target.value.length === 0) setLists([])
        if (e.target.value.length >= 3) {
            axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${e.target.value}&page=1`)
                .then(response => {
                    if (response.data.Response === 'True') {
                        setLists(response.data.Search);
                    } else {
                        setLists([]);
                    }
                });
        }
        dispatch({
            type: SET_QUERY,
            payload: e.target.value,
        })
    }
    const selectAutoComplete = (title) => {
        dispatch({
            type: SET_QUERY,
            payload: title,
        });
        setLists([]);
        dispatch(fetchMovies(title, 1, false));
    }
    return (
        <Container maxW="container.lg">
            <Box mt={10} p={4} borderWidth="1px" borderRadius="lg">
                <Flex direction="column">
                    <Logo />
                    <form onSubmit={search}>
                        <Flex>
                            <Box width="87%">
                                <Input
                                    placeholder="Search Movies"
                                    size={size}
                                    required={true}
                                    onChange={change}
                                    value={query}
                                />
                                <Box>
                                    <UnorderedList style={{listStyle: 'none'}}>
                                        {lists.map(list => (<ListItem cursor="pointer" onClick={() => selectAutoComplete(list.Title)}>{list.Title}</ListItem>))}
                                    </UnorderedList>
                                </Box>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button
                                    type="submit"
                                    colorScheme="teal"
                                    mr="4"
                                    size={size}
                                >
                                    Search
                                </Button>
                            </Box>
                        </Flex>
                    </form>
                </Flex>
            </Box>
        </Container>
    );
}

export default Search;
