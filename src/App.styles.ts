import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/xmaspattern.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-repeat: repeat;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    background-size: contain;
  }

  * {
    font-family: sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  .next {
    cursor: pointer;
    background: hsl(49 37% 94%);
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 0.9rem;
  }
`;
