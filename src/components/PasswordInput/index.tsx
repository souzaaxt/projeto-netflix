import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import React from "react"

export function PasswordInput() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md' bg={'gray.900'}>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Senha'
        bg={'gray.900'}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='s' onClick={handleClick} bg={'red.900'} fontSize='10px' padding={'10px'}>
          {show ? 'OCULTAR' : 'MOSTRAR'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}