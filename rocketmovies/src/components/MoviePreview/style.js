import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    margin-top: -1.5rem;

    > .title-wrapper {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
        gap: 2.0rem;
        margin-bottom: 2.4rem;

        h1 {
            font-size: 3.6rem;
            font-weight: 500;
        }

        span {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            gap: 0.8rem;
            
            svg {
                font-size: 1.8rem;
                color: ${({ theme }) => theme.COLORS.PINK};
            }
        }
    }

    > .info-date {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
        gap: 0.8rem;
        margin-bottom: 4.0rem;

        > :nth-child(1) {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: flex-start;
            gap: 0.4rem;

            img {
                width: 1.6rem;
                height: 1.6rem;
                
                border-radius: 50%;
                border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
            }

            span {
               font-family: "Roboto", sans-serif;
               color: ${({ theme }) => theme.COLORS.WHITE};
            }
        }

        > :nth-child(2) {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: flex-start;
            gap: 0.4rem;

            svg {
                font-size: 1.6rem;
                color: ${({ theme }) => theme.COLORS.PINK};
            }

            span {
                font-family: "Roboto", sans-serif;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
        }
    }

    > .tags-wrapper {
        display: flex;
        flex-flow: row nowrap;
        margin-bottom: 4.0rem;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`