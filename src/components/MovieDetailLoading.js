import React from 'react'
import {
    Box,
    Flex,
    Stack,
    Skeleton
} from '@chakra-ui/react'
function MovieDetailLoading() {
    return (
        <>
            <Box mt={10} p={4} borderWidth="1px" borderRadius="lg">
                <Stack>
                    <Skeleton height="30px" />
                </Stack>
            </Box>
            <Flex mt={5}>
                <Box p={4} borderWidth="1px" borderRadius="lg" mr={2} flex={.5} height="100%">
                    <Stack>
                        <Skeleton height="250px" />
                    </Stack>
                </Box>
                <Box p={4} borderWidth="1px" borderRadius="lg" flex={1}>
                    <Stack>
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                    </Stack>
                </Box>
            </Flex>
        </>
    )
}

export default MovieDetailLoading
