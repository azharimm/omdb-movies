import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Image } from '@chakra-ui/react'

function ModalImage({ isOpen, onClose, posterUrl }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Image src={posterUrl} cursor="pointer" width="100%" mr={3} alt="itlt" />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalImage
