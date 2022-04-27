import React from 'react'
import { SectionContainer,CvContainer, AlignItems } from './CvSectionElements'
import Fade from 'react-reveal/Fade';
import { AboutMeDescrBlue, AboutMeTitleBlue, DescContainerOrange, TitleContainerOrange } from '../../TitleContainersElements';

const CvSection = () => {
  return (
    <Fade right>
    <SectionContainer id='resume'>
      
        <CvContainer>
          <Fade>
        
        <Fade right>
          <TitleContainerOrange>
          <AboutMeTitleBlue>
            ABOUT ME
          </AboutMeTitleBlue>
          </TitleContainerOrange>
          </Fade>


  <AlignItems>
<DescContainerOrange>
<Fade right>
          <AboutMeDescrBlue>
            I am a front end software developer who previously worked as a Senior Architect and wants to change profession and become excellent coder.
          </AboutMeDescrBlue>
          </Fade>
          </DescContainerOrange>
          </AlignItems>
          </Fade>
          
          <TitleContainerOrange>
          <AboutMeTitleBlue>
            MY SKILLS
          </AboutMeTitleBlue>
          </TitleContainerOrange>
     
          <AlignItems>
<DescContainerOrange>
<Fade right>
          <AboutMeDescrBlue>
           HTML, CSS , SCSS, JAVASCRIPT, REACT, PHP BASICS, GIT, BOOTSTRAP, TAILWIND AND OTHER LIBRARIES, Adobe Photoshop
          </AboutMeDescrBlue>
          </Fade>
          </DescContainerOrange>
          </AlignItems>
       
          <TitleContainerOrange>
          <AboutMeTitleBlue>
            WORK EXPERIENCE
          </AboutMeTitleBlue>
          </TitleContainerOrange>
     
          <AlignItems>
<DescContainerOrange>
<Fade right>
          <AboutMeDescrBlue>
            No work experience right now in this industry but looking forward to a good one.
          </AboutMeDescrBlue>
          </Fade>
          </DescContainerOrange>
          </AlignItems>

          <TitleContainerOrange>
          <AboutMeTitleBlue>
            EDUCATION
          </AboutMeTitleBlue>
          </TitleContainerOrange>
     
          <AlignItems>
<DescContainerOrange>
<Fade right>
          <AboutMeDescrBlue>
            ARCHITECTURE COLLAGE 
          </AboutMeDescrBlue>
          </Fade>
          </DescContainerOrange>
          </AlignItems>


        </CvContainer>
       
    </SectionContainer>
    </Fade>
  )
}

export default CvSection