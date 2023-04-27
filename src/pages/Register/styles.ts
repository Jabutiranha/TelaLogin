import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

export const LogIn = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background-color: #5bb4ff;

  & > form > a > button {
    & > a {
      text-decoration: none;
    }
    
    display: flex;
    width: 100%;
    justify-content: center;
    text-decoration: none;
  }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
`;

export const Form = styled.form`
  width: 330px;
  display: flex;
  flex-direction: column ;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-align: center;
  margin-bottom: 18px;
`;

export const Button = styled.button`
  font-family: 'Quicksand', sans-serif;
  background-color: #4baeff;
  font-size: 22px;
  margin-top: 12px;
  margin-bottom: 12px;
  height: 36px;
  border: 0;
  color: #fff;
  border-radius: 4px;

  &:hover {
    opacity: 0.7;
  }
`;

export const SingInButton = styled.button`
  font-family: 'Quicksand', sans-serif;
  background-color: #fff;
  font-size: 22px;
  margin-top: 12px;
  margin-bottom: 12px;
  height: 36px;
  border: 0;
  color: #4baeff;
  border-radius: 4px;

  &:hover {
    opacity: 0.7;
  }
`;


