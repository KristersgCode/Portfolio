import styled from "styled-components"



export const Nav = styled.nav`
height: 80px;
margin-top: -80px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
background-color: #153147;
box-shadow: 0px 1px 10px #222;
@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 100px;
z-index: 1;
width: 100%;
padding: 0 24px;
`
export const InlineBlock = styled.div`
  padding: 10px 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconsContainer = styled.div`
padding-left: 30px;
display: flex;
align-items: center;
color: white;
`

export const NavItem = styled.li`
height: 80px;
display: flex;
align-items: center;

`
export const NavLinks = styled.a`
text-decoration: none;
list-style: none;
padding: 0 1rem;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover {
    color: orange;
    transition: 0.2 ease-in-out;
}
`;

export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style: none;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`