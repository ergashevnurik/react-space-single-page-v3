import React from 'react'
import { NavbarData } from '../../Data/NavbarData'
import { 
    NavbarContainer, 
    NavbarLink, 
    NavbarListItem, 
    NavbarLogo, 
    NavbarSection, 
    NavbarUnOrderedList,
    MobileIcon,
} from './NavbarElements'

import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {
    return (
        <NavbarSection>
            <NavbarContainer>
                <NavbarLogo to="/">MENZ</NavbarLogo>
                <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                <NavbarUnOrderedList>
                    {NavbarData.map((navbar,index) => (
                        <NavbarListItem key={index}>
                            <NavbarLink to={navbar.link}>{navbar.title}</NavbarLink>
                        </NavbarListItem>
                    ))}
                </NavbarUnOrderedList>
            </NavbarContainer>
        </NavbarSection>
    )
}

export default Navbar
