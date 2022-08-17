import { ProfilesContainer } from "./style";
import backgroundImg from '../../assets/background_login.jpg'
import { PasswordInput } from "../../components/PasswordInput";
import { Button, Input } from "@chakra-ui/react";

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "../../Global/thema";
import { BackdropExample } from "../../components/Modal";
import { FormEvent } from "react";
import { Link } from "react-router-dom";

export function Profiles () {

    return (
        <ChakraProvider theme={ theme }>
        <ProfilesContainer>
            <div className="background">
                <img src={ backgroundImg } alt="" />
            </div>
            <div className="user">
                <form 
                >
                    <header>
                        <h2>Entrar</h2>
                    </header>
                    <main>
                        <Input variant='outline' placeholder='Email ou número de telefone' bg={'gray.900'} />
                        <PasswordInput />
                        <Link to={'/'}>
                            <Button type="submit">Entrar</Button>
                        </Link>
                    </main>
                </form>
            </div>
        </ProfilesContainer>

        </ChakraProvider>
    )
}