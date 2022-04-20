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
/* background-color:#153147; */
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`
export const Placeholder = styled.div`
width: 80%;
height: 80%;
background: linear-gradient(to top, orange, #153147);
`

export const ColumnContainer = styled.div`
width: 100%;
display: flex;
`
export const Img = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
/* background-image: url(${myImage}); */
`

export const Links = styled.a`
color: red;
`

export const LinkButton = styled.button`
width: 100px;
padding: 20px;
background-color: white;
color: black;
`