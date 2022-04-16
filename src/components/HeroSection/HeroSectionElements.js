import styled from "styled-components";


export const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background-color: #153147;
`

export const HeroBg = styled.div`
width: 800px;
height: 400px;

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
font-size: 3.5rem;
text-align: center;
`


export const HeroP = styled.p`
color: white;
font-size: 2rem;
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

export const Symbol = styled.h1`
font-size: 25rem;
color: orange;
position: absolute;
margin-left: 500px;
margin-top: 500px;
font-family: 'Updock', cursive;
opacity: 0.3;

animation-name: floating;
animation-duration: 3s;
animation-iteration-count: infinite;
animation-timing-function: ease-in-out;

@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
}
`

export const Symbol2 = styled.h1`
font-size: 42rem;
color: orange;
position: absolute;
margin-top: -20px;
margin-left: -500px;
font-family: 'Updock', cursive;
opacity: 0.3;

animation-name: floating;
animation-duration: 3s;
animation-iteration-count: infinite;
animation-timing-function: ease-in-out;

@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
}
`
