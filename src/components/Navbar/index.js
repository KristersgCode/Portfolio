import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa"
import { IconsContainer, InlineBlock, MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from "./NavBarElements"
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY > 150) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
        
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    {/* <IconsContainer >
                        <h1>KristersG</h1>
                    </IconsContainer> */}
                    <NavLogo to="/" onClick={toggleHome}>
                        KristersG
                    </NavLogo>


                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"  smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true">
                                Home
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="resume" smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true" offset={-80}>Resume
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="portfolio"  smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true">Portfolio
                            </NavLinks>
                        </NavItem>
                    </NavMenu>


                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar