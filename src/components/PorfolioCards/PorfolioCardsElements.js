import styled from "styled-components";

export const ProjectContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 400px;
flex:10%;
margin-left: 20px;
`
export const Placeholder = styled.div`
display: flex;
align-items: center;
width: 250px;
height: 330px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
border-radius: 8px;
margin-right: 20px;

@media only screen 
  and (min-device-width: 390px) 
  and (max-device-width: 1000px)
  and (orientation: landscape) {
    width: 250px;
height: 300px; };
`

export const Picture = styled.img`
height: 330px;
width: 250px;
position: absolute;
border-radius: 8px;
opacity: 0.1;

@media only screen 
  and (min-device-width: 390px) 
  and (max-device-width: 1000px)
  and (orientation: landscape) {
    width: 250px;
height: 300px; };
`

export const Img = styled.div`
width: 100%;
height: 100%;
display: flex;
position: relative;
flex-direction: column;
border-radius: 8px;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-color: #ffbc5e;



&:hover {
    cursor: pointer;
    box-shadow: none;
    transition: .5s ease-in-out;
    transform: scale(1.05);
    background-color: blue;
    background-color: #153147;
    
    h1 {
    opacity: 0;}
    button {
        z-index: 1;
    transition: .7s ease-in-out;
    background-color: #ffbc5e;

    &:hover
    {
        transition: .2s ease-in-out;
        transform: scale(1.1);
    }
    }

    a {
        color: #153147;
    }
    h2 {
        display: inline;
        position: absolute;
        font-size: 1rem;
padding-bottom: 180px;
color: white;
width: 230px;
font-weight: bold;
    } 
}
`

export const Links = styled.a`
color: #ffbc5e;
text-decoration: none;
`

export const LinkButton = styled.button`
width: 100px;
height: 30px;
background-color: #153147;
border: none;
margin-bottom: 5px;
z-index: 1;
border-radius: 5px;
`
export const HeadingApp = styled.h1`
font-size: 2rem;
color: #153147;
width: 100%;
text-align: center;
z-index: 1;
`

export const DescriptionApp = styled.h2`
font-size: 1rem;
color: #153147;
width: 230px;
display: none;
/* text-align: center; */
/* display: none; */

`