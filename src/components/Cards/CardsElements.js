import styled from 'styled-components'

export const CardsSection = styled.section `
    width: 100%;
`

export const CardsContainer = styled.div `
    width: 1200px;
    margin: auto;
    padding: 20px;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const CardsRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const CardsColumn = styled.div `
    margin: 15px;
    width: 300px;

    box-shadow: 5px 5px 5px 5px #FF6363;
    padding: 15px;

    height: 250px;

    @media screen and (max-width: 1200px) {
        width: 100%;
        height: 100%;
    }
`

export const CardsCardHead = styled.div `

`

export const CardsCardImage = styled.img `
    width: 150px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const CardsCardBody = styled.div `
    text-align: center;
`

export const CardsCardH1 = styled.h1 `

`

export const CardHeading = styled.h1 `
    font-size: 40px;
    text-align: center;
    color: white;
    text-shadow: 3px 3px #FF6363; 
`