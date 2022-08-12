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

        form {
            background: rgba( 0,0,0, 0.7);
            padding: 5rem;
            border-radius: 4px;

            main {

                input {
                    display: flex;
                    position: relative;

                    width: 100%;
                    height: 100%;

                    align-items: center;
                    justify-content: space-between;

                    background: #212121;
                    padding:10px;
                }
            }
        }

    }
`;