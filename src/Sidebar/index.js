import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from './SideBarElements'
export const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true" >
                        Home
                    </SidebarLink>

                    <SidebarLink to="resume" onClick={toggle} smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true" offset={-80}>
                        Resume
                    </SidebarLink>

                    <SidebarLink to="portfolio" onClick={toggle} smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true" >
                        Porfolio
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar