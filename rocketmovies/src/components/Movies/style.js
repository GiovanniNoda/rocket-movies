import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    width: 100%;
    height: 22.2rem;
    display: flex;
    flex-flow: column nowrap;
    gap: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    border-radius: 1.6rem;
    margin-bottom: 2.4rem;
    padding: 3.2rem;

    > .title-container {
        display: flex;
        flex-flow: column nowrap;
        gap: 0.8rem;

        > h3 {
            font-size: 2.4rem;
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        svg {
            font-size: 1.2rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > p {
        color: ${({ theme }) => theme.COLORS.TEXT_MOVIE};
        font-size: 1.6rem;
        font-family: "Roboto", sans-serif;
        overflow-y: hidden;
    }

    > .tags-container {
        display: flex;
        flex-flow: row nowrap;
    }
`