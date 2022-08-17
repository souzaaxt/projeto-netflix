import { Spinner } from '@chakra-ui/react';
import React from 'react'
import { LoadingContainer } from './style';
import LogoNetflix from '../../assets/netflix-seeklogo.com.svg'

function Loading() {
  return (
    <LoadingContainer>

    <img src={ LogoNetflix } alt="Logo" />

    </LoadingContainer>
  )
}

export default Loading;