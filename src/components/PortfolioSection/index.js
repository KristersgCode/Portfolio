import React from 'react'
import { BgContainer, ColumnContainer, Img, Placeholder, ProjectContainer } from './PortfolioElements'
import Fade from 'react-reveal/Fade';
import { AboutMeTitleOrange, AboutMeTitleOrangeCenter, TitleContainerBlue, TitleContainerBlueCenter } from '../../TitleContainersElements';

const PortfolioSection = ({img, alt}) => {
  return (
    <Fade left>
    <BgContainer>
<TitleContainerBlue>
  <AboutMeTitleOrange>
  MY PROJECTS
  </AboutMeTitleOrange>
</TitleContainerBlue>

<ColumnContainer>
<ProjectContainer>
  <Placeholder>
    <Img>
  </Img> 
  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>
  <Img>
  </Img> 
  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>
  <Img>
  </Img> 
  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>
  <Img>
  </Img> 
  </Placeholder>
</ProjectContainer>

</ColumnContainer>

<ColumnContainer>
<ProjectContainer>
  <Placeholder>

  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>

  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>

  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>

  </Placeholder>
</ProjectContainer>

</ColumnContainer>


    </BgContainer>
    </Fade>
  )
}

export default PortfolioSection