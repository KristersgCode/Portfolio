import React from 'react'
import { DescriptionApp, HeadingApp, Img, LinkButton, Links, Placeholder, ProjectContainer, Test } from './PorfolioCardsElements'

const PorfolioCards = ({ id, headLine, img, alt, liveCode, gitRepo, description  }) => {
  return (
    <ProjectContainer id={id}>
  <Placeholder>
  <Img> 
  <Test src={img} alt={alt} />
  <DescriptionApp>{description}</DescriptionApp>
  <HeadingApp>
   {headLine}
  </HeadingApp>
  <LinkButton>
    <Links href={liveCode} target="_blank" rel="noreferrer noopener" >Live Site</Links>
    </LinkButton>
    <LinkButton>
    <Links href={gitRepo}  target="_blank" rel="noreferrer noopener">Code</Links>
    </LinkButton>
  </Img> 
  </Placeholder>
</ProjectContainer>
  )
}

export default PorfolioCards