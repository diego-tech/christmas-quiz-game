import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: hsl(49 37% 94%);
  border-radius: 10px;
  padding: 20px;
  border: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    font-size: 0.9rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? '#1E792C' : !correct && userClicked ? '#B11E31' : '#1e81b0'};
    border-radius: 10px;
    border: none;
    color: #fff;
  }
`;
