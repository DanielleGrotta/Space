import React, {useState} from 'react';
import video from '../../videos/mars.mp4';
import logo from '../../images/logo-space-y.svg';
import {
  LoginBg,
  VideoBg,
  Logo,
  MainContainer,
  LoginContent,
  WelcomeText,
  InputContainer,
  LoginWith,
  ButtonContainer,
  SignUpContent,
  ForgotPassword,
  HorizontalRule,
  StyledInput,
  StyledButton
} from './LoginElements'


const LoginSignUpForm = () => {

  const [toggle, setToggle] = useState(false);

  const toggleForm = () => {
    setToggle(!toggle);
  }

  const Gotohome = () => {
    window.location.href = '/home';
  }




  return (
    <>
      <LoginBg>
        <VideoBg  
          autoPlay
          loop
          muted
          src={video}
          type='video/mp4'
        ></VideoBg>
        <Logo src={logo}></Logo>
        <MainContainer>
          <LoginContent style={{display: toggle ?  'none' : 'flex' }}>
            <WelcomeText>Welcome</WelcomeText>
            <InputContainer >
              <StyledInput type="text" placeholder="Email" />
              <StyledInput type="password" placeholder="Password" />
            </InputContainer>
            <ButtonContainer>
              <StyledButton  onClick={Gotohome} >
                Login
              </StyledButton>
            </ButtonContainer>
            <LoginWith onClick={toggleForm}>OR SIGN UP</LoginWith>
            <HorizontalRule />
            <ForgotPassword>Forgot Password ?</ForgotPassword>
        </LoginContent>
        <SignUpContent style={{display: toggle ?  'flex' : 'none' }}>
          <WelcomeText>Welcome</WelcomeText>
          <InputContainer>
            <StyledInput type="text" placeholder="Email" />
            <StyledInput type="password" placeholder="Password" />
          </InputContainer>
          <ButtonContainer>
            <StyledButton  >
              Sign Up
            </StyledButton>
          </ButtonContainer>
          <LoginWith onClick={toggleForm} >OR LOGIN</LoginWith>
        </SignUpContent>
      </MainContainer>
      </LoginBg>
    </>
  )
}

export default LoginSignUpForm