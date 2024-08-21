import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.6rem;
    
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_INPUT};
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"};

    border-radius: 1.0rem;

    > input {
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: transparent;
        border: none;
        font-family: "Roboto", sans-serif;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
            font-family: "Roboto", sans-serif;
        }
    }

    > button {
        all: unset;
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.2rem;
        cursor: pointer;
    }
`