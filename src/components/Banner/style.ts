import styled from "styled-components"

export const BannerContainer = styled.header`
    .banner-content {
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start; */

        color: white;
        object-fit: contain;
        height: 70vh;
    }

    .banner-content {
        display: flex;
        flex-direction: column;
        padding-top: 140px;
    }
    
    .banner-title {
        margin-left: 30px;

        font-size: 3rem;
        font-weight: 800;
        padding-bottom: 0.3rem;
    }

    .banner-description {
        margin-left: 30px;

        width: 45rem;
        line-height: 1.3;
        padding-top: 1rem;
        font-size: 0.8rem;;
        max-width: 360px;
        height: 80px;
    }

    .banner-button-container {
        /* display: flex; */
    }

    .banner-button {
        cursor: pointer;

        color: #fff;
        outline: none;
        border: none;
        font-weight: 700;
        border-radius: 0.2vw;

        padding: 0.5rem 2rem;
        margin-left: 2rem;

        background: rgba(51, 51, 51, 0.5);

        transition: all 200ms ease; 

        &:hover {
            color: #000;
            background: #e6e6e6;
        }
    }

    @media (max-width: 768px) {
        .banner-content {
            display: flex;

            justify-content: center;
            object-fit: fill;
            height: 80vh;

            padding-top: 0px;

        }

        .banner-description {
            max-width: 80vw;
        }
    }
`;