import React from 'react';
import Video from '../../videos/3.mp4';
import mars from '../../images/mars.gif';
import galloway from '../../images/galloway.gif';
import saturn from '../../images/saturn.gif';
import earth from '../../images/earth.gif';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HeroBg,VideoBg } from '../HeroSection/HeroElements';
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2
} from './PlanetsElements';


const Planets = () => {

const items = [
        <ServicesCard>
            <ServicesIcon src={mars} />
            <ServicesH2>Mars</ServicesH2>
        </ServicesCard>,
        <ServicesCard>
            <ServicesIcon src={galloway} />
            <ServicesH2>Galloway</ServicesH2>
        </ServicesCard>,   
        <ServicesCard>
            <ServicesIcon src={earth} />
            <ServicesH2>Earth</ServicesH2>
        </ServicesCard>,
        <ServicesCard>
            <ServicesIcon src={saturn} />
            <ServicesH2>Saturn</ServicesH2>
        </ServicesCard>
    
    ];

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1000: { items: 3 }
};

return (
    <ServicesContainer id="planets">
    <HeroBg>
        <VideoBg 
            autoPlay={true} 
            loop={true}
            controls={false} 
            playsInline
            muted={true} 
            src={Video}
            type="video/mp4" />
    </HeroBg>
    <ServicesH1>Planets with our Services</ServicesH1>
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            autoPlay
            infinite
            autoPlayInterval={2500}
            animationDuration={1700}
            disableButtonsControls
            disableDotsControls
            disableSlideInfo
        />
    <ServicesWrapper >
    </ServicesWrapper >
    </ServicesContainer>
)
}

export default Planets