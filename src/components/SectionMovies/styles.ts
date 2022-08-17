import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2rem;
    margin-left: 2rem;


   .mainContainer {
    display: flex;
    flex-direction: row;

    gap: 0.5rem;
    overflow-x: scroll;

    margin-bottom: 2rem;

    ::-webkit-scrollbar-thumb {
        display: none;
        background: crimson;
        border-radius: 10px;
    }

    ::-webkit-scrollbar {
        display: none;
        background: #1d1d1d;
        width: 5px;
        border-radius: 10px;
    }

    .moviesList {
        display: flex;
        flex-direction: row;
        
        main {
            display: flex;
            flex-direction: row;
            
            position: relative;
            section {
                display: flex;
                flex-direction: row;
                
                position: relative;
                overflow: hidden;
                transition: 200ms all ease;

                .card-large {
                    display: flex;
                    flex-direction: row;
                    
                    position: relative;
                    overflow: hidden;
                    transition: 200ms all ease;

                    height: 450px;
                    gap: 0.5rem;
                    cursor: pointer;

                }

                .card {
                    display: flex;
                    flex-direction: row;
                    
                    position: relative;
                    overflow: hidden;
                    transition: 200ms all ease;

                    height: 300px;
                    gap: 0.5rem;
                    cursor: pointer;

                    img {
                        display: flex;
                        flex-direction: row;
                        
                        overflow: hidden;
                        
                        transition: 200ms all ease;

                }

            }
        }
    }
    }
   }

   @media (max-width: 768px) {
    margin-left: 1rem;
    .mainContainer {

        .moviesList {

            main {


                section {

                    .card-large {
                        height: 180px;
                        object-fit: contain;
                    }

                    .card {
                        height: 220px;
                    }
                }
            }
        }
    }
   }
`;
