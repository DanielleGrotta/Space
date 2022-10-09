import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
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
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  position: relative;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 32%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 40px;
    position: relative;
    margin: 1rem;
    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  border-radius: 100%;
`;

export const ServicesH1 = styled.h1`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 20px;
  cursor: pointer;
  color: #0000;
  text-shadow: 0 0 #fff, 0 0 #0000;
  overflow: hidden;
  transition: 0.3s;
  position: relative;
  &.active {
    border-bottom: 2px solid #d77e54;
    box-shadow: 0px -8px 8px -7px #d77e54 inset;
    color: #d77e54;
    text-shadow: 0 0 black;
  }
  &:hover {
    text-shadow: 0 -1.2em #0000, 0 0 #d77e54;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  position: relative;
  color: #d77e54;
    text-shadow: 0px 0px 6px #ff6700;
`;