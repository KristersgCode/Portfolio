import React from 'react'
import { BgContainer, ColumnContainer, Img, LinkButton, Links, Placeholder, ProjectContainer } from './PortfolioElements'
import Fade from 'react-reveal/Fade';
import { AboutMeTitleOrange, AboutMeTitleOrangeCenter, TitleContainerBlue, TitleContainerBlueCenter } from '../../TitleContainersElements';
import { Link } from 'react-router-dom';

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
    <LinkButton>
    <Links href="https://kristersgcode.github.io/Percentage-Calculator/"  target="_blank" rel="noreferrer noopener">Live Site</Links>
    </LinkButton>
  </Img> 
  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>
  <Img>
  <LinkButton>
    <Links href="https://kristersgcode.github.io/Tipcalculator/"  target="_blank" rel="noreferrer noopener">Live Site</Links>
    </LinkButton>
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