import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Credits from '../components/Credits';
import SpaceShip from '../components/SpaceShips';
import Astronauts from '../components/Astronauts';
import Planets from '../components/Planets';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Planets />
      <SpaceShip />
      <Astronauts />
      <Credits />
      <Footer />
    </>
  )
}

export default Home