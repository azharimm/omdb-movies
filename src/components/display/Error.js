import React from 'react';
import error from '../../assets/error.svg';
import {Box, Flex, Image, Heading} from '@chakra-ui/react';

function Empty() {
    return (
        <Box mb={5} mt={20}>
            <Flex direction="column" justify="center" align="center">
                <Image src={error} width={250} mb={5} />
                <Heading>Oops! something went wrong! try again later...</Heading>
            </Flex>
        </Box>
    )
}

export default Empty
