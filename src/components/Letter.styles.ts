// Import Utilities
import styled from 'styled-components';

export const LetterStyle = styled.div`
  margin: 100px;

  .container {
    background: hsl(49 37% 94%);
    margin-top: 40%;
    padding: 5px;
    width: 500px;
    height: 250px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px rgba(170, 178, 177, 0.4);
  }

  .Typewriter__wrapper {
    font-family: 'Licorice', cursive;
    padding-left: 10px;
    font-size: 12px;
    line-height: 10px;
    font-weight: 600;
  }

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container button {
    background-color: rgba(158, 10, 26, 255);
    color: #f8acaf;
    font-size: 10px;
    font-family: 'Open Sans', Verdana;
    padding: 0;
    width: 15%;
    height: 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 300ms;
  }

  .container button:hover {
    transform: scale(1.1, 1.1);
  }
`;
