import styled from "styled-components";
import myImage from "../../images/PercentCalc.png"

export const BgContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background-color:#153147;
`
export const ProjectContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 400px;
`
export const Placeholder = styled.div`
width: 250px;
height: 330px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
border-radius: 8px;


`

  
export const ColumnContainer = styled.div`
width: 100%;
display: flex;
`
export const Img = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
border-radius: 8px;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-image: url(${myImage});
box-shadow: inset 120px 120px 350px #F5B041, inset -120px -120px 350px #111;


&:hover {
    cursor: pointer;
    box-shadow: none;
    transition: .5s ease-in-out;
    transform: scale(1.05);
    background-color: blue;
    background-color: #153147;
    background-image: none;

   :after {
    content: "";
    background: url(${myImage}); 
    border-radius: 8px;
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
   }
    h1 {
    opacity: 0;}
    button {
    transition: .7s ease-in-out;
    background-color: orange;}
    a {
        color: #153147;
    }
    h2 {
        display: inline;
        color: white;
    }
}
`

export const Links = styled.a`
color: orange;
text-decoration: none;
`

export const LinkButton = styled.button`
width: 100px;
height: 30px;
background-color: #153147;
border: none;
margin-bottom: 5px;
`
export const HeadingApp = styled.h1`
font-size: 2rem;
color: #153147;
width: 100%;
text-align: center;
`

export const DescriptionApp = styled.h2`
font-size: 1rem;
margin-bottom: 180px;
position: absolute;
color: #153147;
width: 230px;
font-weight: bold;
/* text-align: center; */
display: none;

`