import React from 'react';
import { FaBars } from "react-icons/fa"
import { IconsContainer, InlineBlock, MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavMenu } from "./NavBarElements"


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <IconsContainer>
                        <h1>KristersG</h1>
                    </IconsContainer>



                    <NavMenu>
                        <NavItem>
                            <NavLinks>Home
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks>Resume
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks>Portfolio
                            </NavLinks>
                        </NavItem>
                    </NavMenu>


                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar