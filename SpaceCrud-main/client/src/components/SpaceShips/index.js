import React, {useEffect, useState} from 'react';
import Icon3 from '../../images/rocket.gif';
import Video from '../../videos/3.mp4';
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



  return (
    <ServicesContainer id="services">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
    <ServicesH1>SpaceShips</ServicesH1>
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
      </ServicesWrapper >
    </ServicesContainer>
  )
}

export default SpaceShip