import styled, { css } from "styled-components";

export const ButtonStyle = css`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  border: 0;
  padding: 8px 15px;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;

  svg {
    height: 20px;
    margin-left: 3px;
  }
  ${(props) =>
    props.$white &&
    !props.$outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.$white &&
    props.$outline &&
    css`
      background-color: rgba(37, 30, 34, 0.6);
      color: #fff;
      border: 1px solid white;
    `}
  ${(props) =>
    props.$primary &&
    !props.$outline &&
    css`
      background-color: #5542f6;
      border: 1px solid #5542f6;
      color: #fff;
      padding: 8px 20px;
    `}
  ${(props) =>
    props.$primary &&
    props.$outline &&
    css`
      background-color: transparent;
      border: 2px solid #5542f6;
      color: #5542f6;
      padding: 8px 20px;
    `};
  ${(props) =>
    props.$primary &&
    props.$block &&
    css`
      display: block;
      width: 100%;
    `};

  &:hover {
    ${(props) =>
      props.$white &&
      props.$outline &&
      css`
        background-color: #fff;
        color: #000;
      `};

    ${(props) =>
      props.$primary &&
      !props.$outline &&
      css`
        background-color: #fff;
        border: 1px solid #fff;
        color: #5542f6;
      `}
    ${(props) =>
      props.$primary &&
      props.$outline &&
      css`
        background-color: #5542e6;
        color: #fff;
        padding: 8px 20px;
        box-shadow: 0 0 5px #5542e6;
      `};
    ${(props) =>
      props.$primary &&
      props.$block &&
      css`
        background-color: rgba(13, 13, 13, 0.8);
        color: white;
      `};
  }
`;

const StyledBtn = styled.button`
  ${ButtonStyle}
`;
export default function Button({ children, ...rest }) {
  return <StyledBtn {...rest}>{children}</StyledBtn>;
}
