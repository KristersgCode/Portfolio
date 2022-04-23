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
backdrop-filter: blur(11.1px);
-webkit-backdrop-filter: blur(11.1px);
`

export const Links = styled.a`
color: red;
`

export const LinkButton = styled.button`
width: 100px;
height: 30px;
background-color: #153147;
color: orange;
border: none;
margin-bottom: 5px;
`
export const HeadingApp = styled.h1`
font-size: 2rem;
color: white;
width: 100%;
text-align: center;
`