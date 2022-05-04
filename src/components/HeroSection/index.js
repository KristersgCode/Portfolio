import React from 'react'
import { Button, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, SocialIconLink, Symbol } from './HeroSectionElements'
import Fade from 'react-reveal/Fade';
import { SiLinkedin } from 'react-icons/si';


const HeroSection = () => {
    
    return (
        <>
        <HeroContainer id="about">
                <Symbol> &lt;/&gt;</Symbol>
            <HeroContent>
            <Fade left>
                <HeroH1>
                    Welcome to my <span> portfolio</span> page
                </HeroH1>
                </Fade>
                
                <Fade left>
                <HeroP>
                    I am a <span> Front-End</span> Developer
                </HeroP>
                <HeroP>
                <span> Contact me</span> <a href="mailto:kristersgutmanis@gmail.com">kristersgutmanis<span>@</span>gmail.com</a>
                </HeroP>
                </Fade>
                <Fade right>
                <SocialIconLink href="https://www.linkedin.com/in/kristers-gutmanis-66395995/" target="_blank" aria-label="Linkedin">
                                <SiLinkedin />
                            </SocialIconLink>
                                    </Fade>
                    
                
                
                
            </HeroContent>
            
           
        </HeroContainer>
       
        </>
        
    )
}

export default HeroSection