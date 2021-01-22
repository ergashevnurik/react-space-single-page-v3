import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeroSection = styled.section `
    width: 100%;
    background: ${({bg}) => (bg ? '#3f3d56' : '#fff')};
    color: ${({color}) => (color ? '#fff' : '#000')};
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

export const HeroSpan = styled.span `
    text-transform: uppercase;
    font-size: 12px;
    color: ${({color}) => (color ? '#fff' : '#000')};
    letter-spacing: 5px;
`

export const HeroH1 = styled.h1 `
    font-size: clamp(2.8rem, 100vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 10px;
    color: white;
    text-shadow: 3px 3px #FF6363;
    color: ${({color}) => (color ? '#fff' : '#000')};
`

export const HeroP = styled.p `
    margin-bottom: 20px;
    color: ${({color}) => (color ? '#fff' : '#000')};
`

export const HeroButton = styled(Link) `
    text-decoration: none;
    padding: 12px 20px;

    color: ${({color}) => (color ? '#fff' : '#000')};
    border: ${({color}) => (color ? '2px solid white' : '2px solid black')};
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