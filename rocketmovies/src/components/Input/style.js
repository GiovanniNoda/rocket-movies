import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 63rem;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    margin-bottom: 0.8rem;
    border-radius: 1.0rem;

    > input {
        width: 100%;
        height: 5.2rem;

        padding: 1.2rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_200};

            font-size: 1.4rem;
        }
    }

    > svg {
        margin-left: 1.6rem;
    }
`