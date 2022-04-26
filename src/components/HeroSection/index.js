import React from 'react'
import { Button, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, Symbol2 } from './HeroSectionElements'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const HeroSection = () => {
    return (
        <>
        <HeroContainer>
                <Symbol2> &lt;/&gt;</Symbol2>
            <HeroContent>
            <Fade left>
                <HeroH1>
                    Welcome to my <span style={{ color: 'orange' }}> portfolio</span> page
                </HeroH1>
                </Fade>
                
                <Fade left>
                <HeroP>
                    I am a <span style={{ color: 'orange' }}> Front-End</span> Developer
                </HeroP>
                </Fade>
                <HeroBtnWrapper>
                <Fade right>
                    <Button to="CV">
                        Read my resume
                    </Button>
                    </Fade>
                    
                </HeroBtnWrapper>
                
                
                
            </HeroContent>
            
           
        </HeroContainer>
       
        </>
        
    )
}

export default HeroSection