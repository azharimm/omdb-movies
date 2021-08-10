import React from 'react'
import logo from '../assets/logo.svg'
import {Box, Flex, Image, Heading} from '@chakra-ui/react'

function Logo() {
    return (
        <Box mb={5}>
            <Flex direction="column" justify="center" align="center">
                <Image src={logo} width={250} mb={5} />
                <Heading>OMDB Movies</Heading>
            </Flex>
        </Box>
    )
}

export default Logo
