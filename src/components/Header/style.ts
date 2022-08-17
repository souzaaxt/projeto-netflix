import styled from "styled-components";

export const HeaderContainer = styled.header`
    .header {
        display: flex;
        flex-direction: row;
        
            justify-content: space-between;
            align-items: center;
            
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            
            margin: 0 auto;
            
            width: 100vw;
            background-image: linear-gradient(180deg, black, rgba(0,0,0, 0.4));

            z-index: 1000;

            .menu-fix {
                display: flex;
                gap: 2rem;

                justify-content: space-between;
                align-items: center;
                
                ul {
                    display: flex;
                    flex-direction: row;

                    gap: 1.5rem;

                    .logo-desktop {
                        height: 100px;
                    }
                    .logo-mobile {
                        display: none;
                    }
                }
        }
        .menu-perfil {
            display: flex;
            gap: 1.5rem;
            margin-right: 1rem;

            align-items: center;

            li {
                display: flex;
                img {
                    height: 25px;
                }
            }

            li:last-child {
                margin-right: 1.5rem;
            }
        }
    }

    @media (max-width: 768px) {
        .header {

            ul {
                display: none;

                li {
                    display: none;
                }
            }

            .menu-fix {
                ul {
                    display: flex;
                    padding: 1rem;

                    align-items: center;

                    .logo-desktop {
                        display: none;
                    }
                    .logo-mobile {
                        width: 20px;
                        display: flex;
                    }
                }
            }

            .menu-perfil {
                
                li:last-child {
                    display: none;
                }
            }
        }
    }
`;