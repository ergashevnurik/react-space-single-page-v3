import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeroSection = styled.section `
    width: 100%;
    background: ${({bg}) => (bg ? '#3f3d56' : '#fff')};
    color: ${({bg}) => (bg ? '#fff' : '#000')};
`

export const HeroContainer = styled.div `
    width: 1200px;
    margin: auto;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }

    padding: 20px;
`

export const HeroRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    
`

export const HeroColumnLeft = styled.div `
    width: 550px;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const HeroSpan = styled.p `
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 5px;
    color: #FF6363
`

export const HeroH1 = styled.h1 `
    font-size: clamp(2.8rem, 100vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 10px;
`

export const HeroP = styled.p `
    margin-bottom: 20px;
`

export const HeroButton = styled(Link) `
    text-decoration: none;
    padding: 12px 20px;

    border: 2px solid #FF6363;
    color: #FF6363;
`

export const HeroColumnRight = styled.div `
    width: 550px;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const HeroImage = styled.img `
    width: 100%;
    height: 100%;
`