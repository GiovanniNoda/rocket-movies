import styled from 'styled-components'

export const Container = styled.button`
    all: unset;
    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;

    > svg {
        width: 1.4rem;
    }
`