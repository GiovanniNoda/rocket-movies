import styled from 'styled-components'

export const Contanier = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    padding: 0.5rem 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-right: 0.8rem;
    border-radius: 0.8rem;
`