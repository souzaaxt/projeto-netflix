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
                /* max-width: 100rem; */
            display: flex;
            gap: 2rem;

            justify-content: space-between;
            align-items: center;
            
            ul {
                display: flex;
                flex-direction: row;

                gap: 1.5rem;

                > img {
                    height: 100px;
                }
            }
        }
        .menu-perfil {
            display: flex;
            gap: 1.5rem;
            margin-right: 1rem;

            li {
                display: flex;
                align-items: center;
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

            .menu-perfil {
                
                li:last-child {
                    display: none;
                }
            }
        }
    }
`;