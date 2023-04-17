import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 2) 0%, rgba(0, 0, 0, 6) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 2) 0%, rgba(0, 0, 0, 6) 100%);
  }
  @media screen and (max-width: 768px) {
    height: 2000px;
  }

  @media screen and (max-width: 480px) {
    height: 2000px;
  }
`;

export const ServicesWrapper = styled.div`
  padding: 0 50px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;

  }
`;

export const ServicesCard = styled.div`
  background: #00000045;
  box-shadow: 0 8px 32px 0 rgb(0 0 0 / 32%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  padding: 10px;
  backdrop-filter: blur(3px);
  position: relative;
  height:10rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 20rem;
  }

  @media screen and (max-width: 480px) {
    width: 20rem;
  }
`;

export const ServicesIcon = styled.img`
  width: 800px;
  height: 800px;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    width: 389px;
    height: 389px;
  }
`;


export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  position: relative;
  color: #d77e54;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  position: relative;
  color: #fff;
`;