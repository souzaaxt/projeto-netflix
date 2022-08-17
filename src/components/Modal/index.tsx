import { Button, color, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"

export function BackdropExample() {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        Entrar
      </Button>
      
      <Modal isCentered isOpen={isOpen} onClose={onClose} colorScheme='black'>
        {overlay}
        <ModalContent>
          <ModalHeader color={'black'}>Atenção</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color={'black'}>Verifique seus dados!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} color={'white'} background='crimson'>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}