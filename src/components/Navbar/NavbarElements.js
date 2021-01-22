import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const NavbarSection = styled.nav `
    width: 100%;
`

export const NavbarContainer = styled.div `
    width: 1200px;
    margin: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }

    padding: 20px;
`

export const NavbarLogo = styled(Link) `
    text-decoration: none;
    margin-right: auto; 
    font-size: 38px;
    color: #FF6363;
`

export const NavbarUnOrderedList = styled.ul `
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        display: none;
    }
`

export const NavbarListItem = styled.li `

`

export const NavbarLink = styled(Link) `
    text-decoration: none;
    padding: 12px 20px;
`
export const MobileIcon = styled.div `
    display:none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: black;
    }
`