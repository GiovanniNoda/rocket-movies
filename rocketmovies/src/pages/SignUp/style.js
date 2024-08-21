import styled from "styled-components"
import backgroundImg from '../../assets/movie.png'

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 45% 55%;
    grid-area: "login" "backgroundImg";

`

export const Form = styled.form`
    max-width: 34.0rem;
    margin: auto;
    grid-area: "login";
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    > h1 {
        font-size: 4.8rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin-bottom: 4.8rem;
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 4.8rem;
    }

    > .button-wrapper {
        margin: 4.2rem auto;
    }
`

export const Background = styled.div`
    grid-area: "backgroundImg";
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.5;
`