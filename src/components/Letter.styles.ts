// Import Utilities
import styled from 'styled-components';

export const LetterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;

  .container {
    margin-bottom: 350px;
    background: hsl(49 37% 94%);
    padding: 5px;
    width: 35%;
    height: 10%;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }

  .spanHidden {
    visibility: hidden;
  }

  .Typewritter {
    position: absolute;
  }

  .spanHidden,
  .Typewriter__wrapper {
    font-family: 'Licorice', cursive;
    font-size: 0.7rem;
    line-height: 10px;
    font-weight: 600;
  }

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    margin: 2%;
    background-color: rgba(169, 26, 28, 1);
    color: rgba(249, 245, 243, 1);
    font-size: 0.625rem;
    font-family: 'Open Sans', cursive;
    padding: 0;
    width: 20%;
    height: 16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 300ms;
  }

  button:hover {
    transform: scale(1.1, 1.1);
  }
`;
