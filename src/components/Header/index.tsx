import { HeaderContainer } from "./style";

import LogoNetflix from '../../assets/Netflix-Logo.wine.svg'

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
                    <li>Lupa</li>
                    <li>Infantil</li>
                    <li>Sino</li>
                    <li>Perfil</li>
                </div>
            </div>
        </HeaderContainer>
    )
}