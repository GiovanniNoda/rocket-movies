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
        width: 100%;
        height: 100vh;
        max-width: 111.3rem;
        margin: 0 auto;
        overflow-y: auto;

        display: grid;
        grid-template-rows: 11.6rem auto;
        grid-template-areas: 
        "header"
        "content";
    }
`