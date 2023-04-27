import styled, { css } from "styled-components";

interface InputProps {
  isError: boolean;
}

export const Label = styled.label`
  font-family: 'Quicksand', sans-serif;
  margin-top: 14px;
  font-size: 16px;
`;

export const Input = styled.input<InputProps>`
  font-family: 'Quicksand', sans-serif;
  background-color: #e5f5fa;
  height: 36px;
  border: 0;
  padding: 8px;
  border-radius: 2px;

  ${(props) => props.isError && css`
    border-color: red;
    outline: 2px solid red;
  `}

  &::placeholder {
    opacity: 0.7;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 4px;
`;