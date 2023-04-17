import React from 'react';
import Video from '../../videos/ground.mp4';
import me from '../../images/eu.png';
import { HeroBg,VideoBg } from '../HeroSection/HeroElements';
import { 
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP 
} from './ServicesElements';

const Credits = () => {


  return (
    <ServicesContainer id="me">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <ServicesWrapper >
          <ServicesIcon src={me}/>
          <ServicesCard >
            <ServicesH2>conheça a chefia</ServicesH2>
            <ServicesP>Nossa cientista que criou o programa espacial aqui apresentado</ServicesP>
          </ServicesCard>
      </ServicesWrapper >
    </ServicesContainer>
  )
}

export default Credits