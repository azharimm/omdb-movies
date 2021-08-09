import React from 'react'
import { Box, Container, Flex, Spacer, Input, Button, Heading, Image } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import logo from '../assets/logo.svg'

function Search() {
    const size = useBreakpointValue(['md', 'lg'])
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
                    <Flex>
                        <Box width="87%">
                            <Input placeholder="Find Movies" size={size} />
                        </Box>
                        <Spacer />
                        <Box>
                            <Button colorScheme="teal" mr="4" size={size}>
                                Search
                            </Button>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Container>
    )
}

export default Search
