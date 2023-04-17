import styled from 'styled-components';



export const LoginBg = styled.div`
  background: #000;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const VideoBg = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
`;

export const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  margin-left: 68px;
`;


export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 4px 5px 14px 0 rgb(0 0 0 / 27%);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  margin: 5px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #fff;
    text-shadow: 1px 1px 2px #b9abe0;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const StyledButton = styled.button`
  background: linear-gradient(to right, transparent 0%, #7e4e37 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

export const StyledIcon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgb(32 23 11 / 17%);
  box-shadow: 0 8px 32px 0 rgb(0 0 0 / 32%);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  margin-right: 6rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWith = styled.h5`
  cursor: pointer;
`;

export const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, transparent 0%, #7e4e37  79%);
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

`;

export const ForgotPassword = styled.h4`
  cursor: pointer;
`;