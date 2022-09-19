import React, {useEffect, useState} from 'react';
import Icon1 from '../../images/crud2.svg';
import Video from '../../videos/ground.mp4';
import { HeroBg,VideoBg } from '../HeroSection/HeroElements';
import { 
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP 
} from './ServicesElements';
import axios from 'axios';

const Services = () => {

  const [crew, setcrew] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/crew')
    .then(res => {
      setcrew(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <ServicesContainer id="services">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
    <ServicesH1>Astronautas</ServicesH1>
      <ServicesWrapper >
        {crew.map((crew, index) => (
          <ServicesCard key={index}>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>{crew.name}</ServicesH2>
            <ServicesH2>duties:</ServicesH2>
            <ServicesP>{crew.duties}</ServicesP>
          </ServicesCard>
        ))}
      </ServicesWrapper >
    </ServicesContainer>
  )
}

export default Services