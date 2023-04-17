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

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;

  }
`;

export const ServicesCard = styled.div`
    background: #1c1c1c36;
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 1000px;
    align-items: center;
    border-radius: 10px;
    max-height: 331px;
    width: 101%;
    padding: 23px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
    position: relative;
    backdrop-filter: blur(1.5px);
    margin-right: 2rem;
    justify-items: end;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      max-height: 500px;
      margin-right: 0;
      margin-bottom: 2rem;
      justify-items: center;
    }

    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      max-height: 500px;
      margin-right: 0;
      margin-bottom: 2rem;
      justify-items: center;
    }

`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 30%;
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
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  position: relative;
  color: #fff;
`;

export const WrappButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 2rem;
`;
