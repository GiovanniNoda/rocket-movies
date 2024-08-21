import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 14.4rem auto;
    grid-template-areas: 
    "header"
    "content";

    > header {
        grid-area: header;
        height: 14.4rem;
        width: 100%;

        display: flex;
        align-items: center;

        padding-left: 14.4rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    }
`

export const Form = styled.form`
    max-width: 34.0rem;
    margin: -9rem auto;

    > :nth-child(3) {
        margin-bottom: 1.6rem;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 6.4rem;

    width: 18.6rem;
    height: 18.6rem;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;

        background-color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        position: absolute;
        bottom: 7px;
        right: 7px;

        input {
            display: none;
        }

        svg {
            width: 2.0rem;
            height: 2.0rem;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`