import React from 'react'
import { SectionContainer,CvContainer, AlignItems, IconResume, ParagraphColored } from './ResumeSectionElements'
import Fade from 'react-reveal/Fade';
import { AboutMeDescrBlue, AboutMeTitleBlue, DescContainerOrange, TitleContainerOrange } from '../../TitleContainersElements';
import { IoMdSchool } from 'react-icons/io';
import { GiSkills } from 'react-icons/gi';
import { MdWork, MdContacts } from 'react-icons/md';

const ResumeSection = () => {
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
          <IconResume> <MdContacts /> </IconResume>
            I am a <span style={{ color: "#1A476B" }}> front end </span>software developer who previously worked as Architect and wants to change profession and become excellent coder.
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
          <IconResume> <GiSkills /> </IconResume>
           HTML, CSS , SCSS, JavaScript, <span style={{ color: "#1A476B" }}> React </span>, Php basics, Git, Bootstrap, Tailwind, Adobe Photoshop, Adobe Lightroom
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
          <IconResume> <MdWork /> </IconResume>
          <p>Jul 2018 - present</p>
          <ParagraphColored>Senior architect in architecture office fully remote - "A+Sh"</ParagraphColored>
<p>Jun 2017 - Apr 2018 </p>
<ParagraphColored>Internship in an architecture office - "Muud". </ParagraphColored>
<p>Jun 2014 - Apr 2017 </p>
<ParagraphColored>Freelancer 3D CGI artist </ParagraphColored>
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
          <IconResume> <IoMdSchool /> </IconResume> 
          <p>2022</p>
         <ParagraphColored>University of Latvia - professional improvement education program</ParagraphColored> 
         <em>Front-End Development</em>
          <p>2015-2018</p>
         <ParagraphColored>Riga Building Collage</ParagraphColored> 
         <em>Architect</em>
         <p>2010 – 2014</p> 
          <ParagraphColored>Liepaja Music, Art and Design Secondary School </ParagraphColored>
          <em>Wood products design</em>
          </AboutMeDescrBlue>
          </Fade>
          </DescContainerOrange>
          </AlignItems>


        </CvContainer>
       
    </SectionContainer>
    </Fade>
  )
}

export default ResumeSection