import React, {useEffect, useState} from 'react';
import Icon3 from '../../images/rocket.gif';
import AliceCarousel from 'react-alice-carousel';
import Video from '../../videos/3.mp4';
import { HeroBg,VideoBg } from '../HeroSection/HeroElements';
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
import  {Button}  from '.././ButtonElements';

const SpaceShip = () => {

  const [spaceShips, setSpaceShips] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/spaceships')
    .then(res => {
      setSpaceShips(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  
const items = [
  <ServicesWrapper >
  {spaceShips.map((spaceShip, index) => (
    <ServicesCard key={index}>
      <ServicesIcon src={Icon3}/>
      <ServicesH2>{spaceShip.spaceship}</ServicesH2>
      <ServicesH2>Captain:</ServicesH2>
      <ServicesP>{spaceShip.name}</ServicesP>
      <ServicesH2>Rank:</ServicesH2>
      <ServicesP>{spaceShip.rank}</ServicesP>
    </ServicesCard>
  ))}
  </ServicesWrapper>
];

const responsive = {
0: { items: 1 },
568: { items: 2 },
1000: { items: 3 }
};



  return (
    <ServicesContainer id="spaceships">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
    <ServicesH1>SpaceShips</ServicesH1>
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

export default SpaceShip