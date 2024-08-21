import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;

    height: 11.6rem;
    width: 100%;

    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.4rem;
    }
`

export const Profile = styled(Link)`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    > div {
        display: flex;
        flex-flow: column nowrap;
        margin-right: 1.6rem;

        > strong {
            font-size: 1.4rem;
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > a {
            font-size: 1.4rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    > img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }
`