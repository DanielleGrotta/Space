import React, {useEffect, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import Icon1 from '../../images/user.gif';
import Video from '../../videos/3.mp4';
import { HeroBg,VideoBg } from '../HeroSection/HeroElements';
import {Button} from '.././ButtonElements';
import { 
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  WrappButton,
} from './ServicesElements';
import axios from 'axios';

const Astronauts = () => {

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


  const items = [
    <ServicesWrapper >
    {crew.map((crew, id) => (
      <ServicesCard key={id}>
        <ServicesIcon src={Icon1}/>
        <ServicesH2>{crew.name}</ServicesH2>
        <ServicesH2>Captain:</ServicesH2>
        <ServicesP>{crew.leader}</ServicesP>
        <ServicesH2>duties:</ServicesH2>
        <ServicesP>{crew.duties}</ServicesP>
        <ServicesH2>age:</ServicesH2>
        <ServicesP>{crew.age}</ServicesP>
      </ServicesCard>
    ))}
    </ServicesWrapper >
];

const responsive = {
0: { items: 1 },
568: { items: 2 },
1000: { items: 3 }
};


  return (
    <ServicesContainer id="crew">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <ServicesH1>The Crew</ServicesH1>
      <WrappButton>
        <Button>ADD NEW</Button>
      </WrappButton>
      <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            autoPlay
            infinite
            autoPlayInterval={3500}
            animationDuration={4000}
            disableButtonsControls
            disableDotsControls
            disableSlideInfo
            disableAutoPlayOnAction
        />
    </ServicesContainer>
  )
}

export default Astronauts