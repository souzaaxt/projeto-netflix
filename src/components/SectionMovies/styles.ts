import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 8rem;
    padding: 0 2rem;


   .mainContainer {
    display: flex;
    flex-direction: row;

    gap: 0.5rem;
    overflow-x: scroll;

    margin-bottom: 2rem;

    ::-webkit-scrollbar-thumb {
        background: crimson;
        border-radius: 10px;
    }

    ::-webkit-scrollbar {
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
                
                .card {
                    display: flex;
                    flex-direction: row;
                    
                    position: relative;
                    
                    
                    img {
                    display: flex;
                    flex-direction: row;
                    width: 200px;
                }
            }
        }
    }
    }
   }

   @media (max-width: 768px) {
    padding: 0 1rem;
    .mainContainer {

        .moviesList {

            main {


                section {


                    .card {
                        
                        img {
                            width: 150px;
                        }
                    }
                }
            }
        }
    }
   }
`;
