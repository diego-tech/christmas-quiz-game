// Import Utilities
import styled from 'styled-components';

export const EndGameWrapper = styled.div`
  width: 1000px;
  background: hsl(49, 37%, 94%);
  border-radius: 10px;
  border: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  padding: 20px;
  text-align: center;

  p {
    font-family: 'Moon Dance', cursive;
    font-size: 2rem;
    font-weight: 900;
  }

  button {
    margin: 3%;
    background-color: rgba(169, 26, 28, 1);
    color: rgba(249, 245, 243, 1);
    font-size: 1.5rem;
    font-family: 'Open Sans', cursive;
    padding: 0;
    width: 20%;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 300ms;
  }

  button:hover {
    transform: scale(1.1, 1.1);
  }
`;
