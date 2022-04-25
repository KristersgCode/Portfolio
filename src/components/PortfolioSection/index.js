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
{/* <ProjectContainer>
  <Placeholder>
  <Img>
  <DescriptionApp>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</DescriptionApp>
  <HeadingApp>
    Todo app
  </HeadingApp>
  <LinkButton>
    <Links href="https://kristersgcode.github.io/CrudApp/"  target="_blank" rel="noreferrer noopener">Live Site</Links>
    </LinkButton>
    <LinkButton>
    <Links href="https://github.com/KristersgCode/CrudApp.git"  target="_blank" rel="noreferrer noopener">Code</Links>
    </LinkButton>
  </Img> 
  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>
    <Img2>
    <DescriptionApp>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</DescriptionApp>
    <HeadingApp>
    Precent calculator
  </HeadingApp>
    <LinkButton>
    <Links href="https://kristersgcode.github.io/Percentage-Calculator/"  target="_blank" rel="noreferrer noopener">Live Site</Links>
    </LinkButton>
    <LinkButton>
    <Links href="https://github.com/KristersgCode/Percentage-Calculator.git"  target="_blank" rel="noreferrer noopener">Code</Links>
    </LinkButton>
  </Img2> 
  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>
  <Img>
  <DescriptionApp>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</DescriptionApp>
  <HeadingApp>
    Tip calculator
  </HeadingApp>
  <LinkButton>
    <Links href="https://kristersgcode.github.io/Tipcalculator/"  target="_blank" rel="noreferrer noopener">Live Site</Links>
    </LinkButton>
    <LinkButton>
    <Links href="https://github.com/KristersgCode/Tipcalculator.git"  target="_blank" rel="noreferrer noopener">Code</Links>
    </LinkButton>
  </Img> 
  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>
    <Img>
    <DescriptionApp>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</DescriptionApp>
    <HeadingApp>
    Math teachers website
  </HeadingApp>
    <LinkButton>
    <Links href="https://kristersgcode.github.io/Percentage-Calculator/"  target="_blank" rel="noreferrer noopener">Live Site</Links>
    </LinkButton>
    <LinkButton>
    <Links href="https://github.com/KristersgCode/CrudApp.git"  target="_blank" rel="noreferrer noopener">Code</Links>
    </LinkButton>
  </Img> 
  </Placeholder>
</ProjectContainer>

<ProjectContainer>
  <Placeholder>
  <Img>
  <DescriptionApp>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</DescriptionApp>
  <HeadingApp>
    API currency app
  </HeadingApp>
  <LinkButton>
    <Links href="https://kristersgcode.github.io/currency/" target="_blank" rel="noreferrer noopener">Live Site</Links>
    </LinkButton>
    <LinkButton>
    <Links href="https://github.com/KristersgCode/currency.git" target="_blank" rel="noreferrer noopener">Code</Links>
    </LinkButton> 
  </Img> 
  </Placeholder>
</ProjectContainer>  */}

</ColumnContainer>
    </BgContainer>
    </Fade>
  )
}

export default PortfolioSection