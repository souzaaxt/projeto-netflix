import styled from "styled-components";

export const ProfilesContainer = styled.div`
    .background {

        img {
            filter: brightness(0.4);
            display: flex;
            position: fixed;
            width: 100%;
        }
    }

    .user {
        display: flex;
        position: relative;

        margin: 0 auto;
        height: 100vh;

        justify-content: center;
        align-items: center;

        header {
            margin-bottom: 2rem;
        }

        form {
            background: rgba( 0,0,0, 0.7);
            padding: 5rem;
            border-radius: 4px;

            main {
                display: flex;
                flex-direction: column;
                width: 100%;
                flex: 1;

                gap: 2rem;

                button {
                    background: crimson;
                    color: white;
                    width: 100%;
                }
                
            }
        }

    }

    @media (max-width: 768px) {
        .background {
            position: absolute;

            width: 100vw;
            height: 100vh;
            background: rgba( 0,0,0, 0.7);

                img {
                    display: none;
                }
        }

        .user {

            form {
                padding: 0;
            }
        }
    }
`;