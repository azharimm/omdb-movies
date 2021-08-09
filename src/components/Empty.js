import React from 'react';
import empty from '../assets/empty.svg';
import {Box, Flex, Image, Heading} from '@chakra-ui/react';

function Empty() {
    return (
        <Box mb={5} mt={20}>
            <Flex direction="column" justify="center" align="center">
                <Image src={empty} width={250} mb={5} />
                <Heading>No Movie Found</Heading>
            </Flex>
        </Box>
    )
}

export default Empty
