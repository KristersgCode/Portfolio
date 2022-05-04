import React from 'react'
import { BgContainer, ColumnContainer} from './PortfolioElements'
import Fade from 'react-reveal/Fade';
import { AboutMeTitleOrange,TitleContainerBlue, } from '../../TitleContainersElements';
import PorfolioCards from '../PorfolioCards';
import { objFour, objOne, objThree, objTwo, objFive } from '../InfoSection/Data';

const PortfolioSection = () => {
  return (
    <Fade left>
    <BgContainer id='portfolio'>
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