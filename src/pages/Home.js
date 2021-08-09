import React from 'react'
import { Box, Container, Flex, Spacer, Input, Button, Heading, Center, Text, Tag, Image, Stack, Skeleton } from '@chakra-ui/react'
import logo from '../assets/logo.svg'
import { useBreakpointValue } from '@chakra-ui/react'

function Home() {
    const size = useBreakpointValue(['md', 'lg'])
    return (
        <div>
            <Container maxW="container.lg">
                <Box mt={10} p={4} borderWidth="1px" borderRadius="lg">
                    <Flex direction="column">
                        <Box mb={5}>
                            <Flex direction="column" justify="center" align="center">
                                <Image src={logo} width={150} />
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
            <Container maxW="container.lg">
                <Box borderWidth="1px" borderRadius="lg" mt={5} p={3}>
                    <Flex justify="flex-start" align="center">
                        <Image src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" cursor="pointer" width={50} mr={3} />
                        <Text fontSize="lg" cursor="pointer">Batman Begins (2005)</Text>
                        <Tag size="sm" variant="solid" colorScheme="teal" ml={3}>
                            Movie
                        </Tag>
                    </Flex>
                </Box>
                <Box borderWidth="1px" borderRadius="lg" mt={5} p={3}>
                    <Flex justify="flex-start" align="center">
                        <Image src="https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" cursor="pointer" width={50} mr={3} />
                        <Text fontSize="lg" cursor="pointer">Batman v Superman: Dawn of Justice</Text>
                        <Tag size="sm" variant="solid" colorScheme="teal" ml={3}>
                            Movie
                        </Tag>
                    </Flex>
                </Box>
            </Container>
            <Container maxW="container.lg" mt={5}>
                <Stack>
                    <Skeleton height="50px" />
                    <Skeleton height="50px" />
                    <Skeleton height="50px" />
                </Stack>
            </Container>
        </div>
    )
}

export default Home
