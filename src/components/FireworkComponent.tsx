import React from 'react';

// Import Fireworks
import { Fireworks } from 'fireworks/lib/react';

// Import Styles
import { EndGameWrapper } from './Firework.styles';

const fireworkProps = {
  count: 3,
  interval: 500,
  colors: [
    '#1E792C',
    '#B11E31',
    '#1e81b0',
    '#302a0a',
    '#c56a81',
    '#9a3148',
    '#621622',
    '#9f0f0e',
    '#9a854c',
    '#192d24',
    '#b4b6a9',
    '#727562',
    '#375839',
    '#e3e3e3',
    '#c3c8cc',
    '#7b9031',
    '#205121',
    '#c9281e',
    '#6e320d',
    '#252616',
    '#484c02',
    '#83a043',
    '#6b8850',
    '#a2bfa9',
    '#1d4431',
    '#d6b798',
    '#b36f40',
    '#f7dca3',
    '#dbad3e',
    '#bb6d22',
    '#896e2d',
  ],
  calc: (props: any, i: number) => ({
    ...props,
    x: (i + 1) * (window.innerWidth / 4),
    y: 300 + Math.random() * 100 + (i === 2 ? -80 : 0),
  }),
  bubbleSizeMinimum: 1,
  bubbleSizeMaximum: 15,
};

type Props = {
  score: number;
};

const FireworkComponent: React.FC<Props> = ({ score }) => {
  return (
    <>
      <Fireworks {...fireworkProps} />
      <EndGameWrapper>
        <p>Felicidades. Puntuación: {score}</p>
      </EndGameWrapper>
    </>
  );
};

export default FireworkComponent;
