import React from "react";
import { BgContainer, ColumnContainer } from "./PortfolioElements";
import Fade from "react-reveal/Fade";
import {
  AboutMeTitleOrange,
  TitleContainerBlue,
} from "../../TitleContainersElements";
import PorfolioCards from "../PorfolioCards";
import {
  objFour,
  objOne,
  objThree,
  objTwo,
  objFive,
  objSix,
  objSeven,
  objEight,
  objNine,
  objTen,
  objEleven,
  objTwelve,
} from "../InfoSection/Data";

const PortfolioSection = () => {
  return (
    <BgContainer id="portfolio">
      <TitleContainerBlue>
        <Fade left>
          <AboutMeTitleOrange>MY PROJECTS</AboutMeTitleOrange>
        </Fade>
      </TitleContainerBlue>

      <ColumnContainer>
        <PorfolioCards {...objOne} />
        <PorfolioCards {...objTwo} />
        <PorfolioCards {...objThree} />
        <PorfolioCards {...objFour} />
        <PorfolioCards {...objFive} />
        <PorfolioCards {...objSix} />
        <PorfolioCards {...objSeven} />
        <PorfolioCards {...objEight} />
        <PorfolioCards {...objNine} />
        <PorfolioCards {...objTen} />
        <PorfolioCards {...objEleven} />
        <PorfolioCards {...objTwelve} />
      </ColumnContainer>
    </BgContainer>
  );
};

export default PortfolioSection;
