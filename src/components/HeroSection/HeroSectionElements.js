import styled from "styled-components";


export const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background-color: #153147;
position: relative;
`

export const HeroBg = styled.div`

`

export const HeroContent = styled.div`
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
align-items: center;
`

export const HeroH1 = styled.h1`
color: #fff;
font-size: 5.5rem;
text-align: center;
`


export const HeroP = styled.p`
color: white;
font-size: 3rem;
text-align: center;
max-width: 600px;

`
export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`

export const Button = styled.button`
border-radius: 50px;
background: orange;
white-space: nowrap;
outline: none;
border: none;
font-size: 1rem;
padding: 15px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: white;
}
`

export const Line = styled.div`

   height:2px;
   width:100%;
   background-color:orange;
   border-radius:5px;
  
`


export const Symbol2 = styled.h1`
font-size: 70vw;
color: orange;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Updock', cursive;
opacity: 0.2;


animation-name: floating;
animation-duration: 3s;
animation-iteration-count: infinite;
animation-timing-function: ease-in-out;

@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 30px); }
    100%   { transform: translate(0, -0px); }   
}

@media screen and (max-width: 500px) {
    font-size: 36px;
}
`
