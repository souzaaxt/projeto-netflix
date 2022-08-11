import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 8rem;
    padding: 0 2rem;


   .mainContainer {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    overflow-x: scroll;

    
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
    
   }
`;
