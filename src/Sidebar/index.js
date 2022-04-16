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
                    <SidebarLink to="Home" onClick={toggle}>
                        Home
                    </SidebarLink>

                    <SidebarLink to="CV" onClick={toggle}>
                        CV
                    </SidebarLink>

                    <SidebarLink to="Portfolio" onClick={toggle}>
                        Porfolio
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar