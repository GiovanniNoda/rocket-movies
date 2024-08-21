import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

   > main {
        grid-area: content;
        width: 100%;
        max-width: 105.6rem;
        margin: 4.0rem auto;
        display: flex;
        flex-flow: column nowrap;

        h1 {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 3.6rem;
            margin-top: 2.4rem;
        }

        .input-wrapper {
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            gap: 4.0rem;
            margin-top: 4.0rem;
        }

        textarea {
            width: 100%;
            height: 27.4rem;
            padding: 1.9rem 1.6rem;
            margin-top: 4.0rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
            border: none;
            border-radius: 1.0rem;
            color: ${({ theme }) => theme.COLORS.WHITE};

            &::placeholder {
                color: ${({ theme }) => theme.COLORS.GRAY_200};
            }
        }

        h2 {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
            font-size: 2.0rem;
            font-weight: 400;
            margin-top: 4.0rem;
        }

        .markers-wrapper {
            width: 100%;
            background-color: ${({ theme }) => theme.COLORS.GRAY_500};

            display: flex;
            flex-flow: row nowrap;
            gap: 2.4rem;

            padding: 1.6rem;
            margin-top: 4.0rem;

            border-radius: 0.8rem;
        }

        .button-wrapper {
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            gap: 4.0rem;
            margin-top: 1.6rem;
            margin-bottom: 4.0rem;
        }
   }
`