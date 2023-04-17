import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 50px;
  background: #7e4e37;
  white-space: nowrap;
  padding: 14px 48px;
  color: #fff;
  font-size: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  height: 50px;
  width: 200px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.4rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d77e54;
  }
`;