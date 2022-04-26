import React from 'react'
import { BgContainer, ColumnContainer, DescriptionApp, HeadingApp, Img, Img1, Img2, LinkButton, Links, Placeholder, ProjectContainer } from './PortfolioElements'
import Fade from 'react-reveal/Fade';
import { AboutMeTitleOrange, AboutMeTitleOrangeCenter, TitleContainerBlue, TitleContainerBlueCenter } from '../../TitleContainersElements';
import { Link } from 'react-router-dom';
import PorfolioCards from '../PorfolioCards';
import { objFour, objOne, objThree, objTwo, objFive } from '../InfoSection/Data';

const PortfolioSection = () => {
  return (
    <Fade left>
    <BgContainer >
<TitleContainerBlue>
  <AboutMeTitleOrange>
  MY PROJECTS 
  </AboutMeTitleOrange>
</TitleContainerBlue>

<ColumnContainer>
    <PorfolioCards {...objOne}/>
    <PorfolioCards {...objTwo}/>
    <PorfolioCards {...objThree}/>
    <PorfolioCards {...objFour}/>
    <PorfolioCards {...objFive}/>
</ColumnContainer>
    </BgContainer>
    </Fade>
  )
}

export default PortfolioSection