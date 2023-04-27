import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.image`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: #5bb4ff;
`;


export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const Title = styled.h1`
  font-family: 'Quicksand ', sans-serif;
  font-weight: 700;
  text-align: center;
  margin-bottom: 18px;
`;

export const SubTitle = styled.h2`
  font-family: 'Quicksand ', sans-serif;
  text-align: center;
  margin-top: 32px;
`;

export const Form = styled.form`
  font-family: 'Quicksand', sans-serif;
  width: 330px;
  display: flex;
  flex-direction: column ;
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

export const Content2 = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const Content3 = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
`;

export const Remember = styled.div`
  display: flex;
  font-size: 14px;
  width: 35%;
  justify-content: space-between;
  
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
`;

export const Link = styled.a`
  display: flex;
  font-size: 14px;
  justify-content: center;
`;