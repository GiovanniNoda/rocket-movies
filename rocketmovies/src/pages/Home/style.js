import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        overflow-y: auto;
        grid-area: content;
        max-width: 105.6rem;
        margin: 4.8rem auto;

        > .title-movie {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3.6rem;

            > .button-container {
                width: 20rem;
            }
        }
    }
`