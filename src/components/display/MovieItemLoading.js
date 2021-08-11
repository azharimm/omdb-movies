import React from 'react'
import { Container, Stack, Skeleton } from '@chakra-ui/react'

function MovieItemLoading() {
    return (
        <Container maxW="container.lg" mt={5}>
            <Stack>
                <Skeleton height="50px" />
                <Skeleton height="50px" />
                <Skeleton height="50px" />
                <Skeleton height="50px" />
                <Skeleton height="50px" />
            </Stack>
        </Container>
    )
}

export default MovieItemLoading
