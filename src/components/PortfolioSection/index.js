import React from 'react'
import { BgContainer, ColumnContainer, HeadingApp, Img, LinkButton, Links, Placeholder, ProjectContainer } from './PortfolioElements'
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
    <HeadingApp>
    Precent calculator
  </HeadingApp>
    <LinkButton>
    <Links href="https://kristersgcode.github.io/Percentage-Calculator/"  target="_blank" rel="noreferrer noopener">Live Site</Links>
    </LinkButton>
    <LinkButton>
    Code
    </LinkButton>
  </Img> 
  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>
  <Img>
  <HeadingApp>
    Tip calculator
  </HeadingApp>
  <LinkButton>
    <Links href="https://kristersgcode.github.io/Tipcalculator/"  target="_blank" rel="noreferrer noopener">Live Site</Links>
    </LinkButton>
    <LinkButton>
    Code
    </LinkButton>
  </Img> 
  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>
  <Img>
  <HeadingApp>
    Todo app
  </HeadingApp>
  <LinkButton>
    <Links href="https://kristersgcode.github.io/CrudApp/"  target="_blank" rel="noreferrer noopener">Live Site</Links>
    </LinkButton>
    <LinkButton>
    Code
    </LinkButton>
  </Img> 
  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>
  <Img>
  <HeadingApp>
    Math teachers website
  </HeadingApp>
  <LinkButton>
    <Links href="https://kristersgcode.github.io/currency/" target="_blank" rel="noreferrer noopener">Live Site</Links>
    </LinkButton>
    <LinkButton>
    Code
    </LinkButton>
  </Img> 
  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>
  <Img>
  <HeadingApp>
    API currency app
  </HeadingApp>
  <LinkButton>
    <Links href="https://kristersgcode.github.io/currency/" target="_blank" rel="noreferrer noopener">Live Site</Links>
    </LinkButton>
    <LinkButton>
    Code
    </LinkButton>
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