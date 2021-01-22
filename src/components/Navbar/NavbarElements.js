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
`

export const NavbarUnOrderedList = styled.ul `
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const NavbarListItem = styled.li `

`

export const NavbarLink = styled(Link) `
    text-decoration: none;
    padding: 12px 20px;
`