import React from 'react';
import Video from '../../videos/3.mp4';
import { 
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  } from './HeroElements';

const HeroSection = () => {


  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome Aboard</HeroH1>
        <HeroP>
          Join us on a space adventure while administering your own ships and crew.
        </HeroP>
        <HeroBtnWrapper>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
