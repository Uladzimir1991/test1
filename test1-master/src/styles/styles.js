import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: antiquewhite;
`;

export const StartButtonStyled = styled.button`
  position: relative;
  top: calc(50% - 50px);
  left: calc(50% - 100px);
  font-size: 24px;
  padding: 20px 30px;
  background-color: rgba(45, 75, 165, 0.7);
  color: #fff;
  text-shadow: 0.1em 0.1em 1em #000;
  border: none;
  box-shadow: 4px 4px 17px #333;
  border-radius: 3px;
  transition: all .1s linear;
  
  &:hover {
    color: gold;
    cursor: pointer;
    background-color: rgba(45, 85, 145, 0.8);
    transition: all .1s linear;
  }
  
  &:active {
    box-shadow: 1px 1px 8px #333;
  }
`
