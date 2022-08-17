import { HeaderContainer } from "./style";

import LogoNetflix from '../../assets/Netflix-Logo.wine.svg'
import { Bell, MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header () {
    return (
        <HeaderContainer>
            <div className="header">
                <div className="menu-fix">
                    <ul>
                        <img src={ LogoNetflix } alt="Logo" />
                    </ul>
                    <ul>
                        <li>Inicio</li>
                        <li>Series</li>
                        <li>Filmes</li>
                        <li>Bombando</li>
                        <li>Minha lista</li>
                        <li>Idiomas e legendas</li>
                    </ul>
                </div>
                <div className="menu-perfil">
                    <li><MagnifyingGlass size={20} color="#f7f7f7" /></li>
                    <li>
                        <Link to='/profile'>
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU" alt="account" />
                        </Link>
                    </li>
                    <li><Bell size={20} color="#f7f7f7" /></li>
                    <li>Perfil</li>
                </div>
            </div>
        </HeaderContainer>
    )
}