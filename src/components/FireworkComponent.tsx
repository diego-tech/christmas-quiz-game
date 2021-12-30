// Import Fireworks
import { Fireworks } from 'fireworks/lib/react';

const fireworkProps = {
  count: 3,
  interval: 500,
  colors: ['#cc3333', '#4CAF50', '#81C784'],
  calc: (props: any, i: number) => ({
    ...props,
    x: (i + 1) * (window.innerWidth / 4),
    y: 300 + Math.random() * 100 + (i === 2 ? -80 : 0),
  }),
  bubbleSizeMinimum: 1,
  bubbleSizeMaximum: 15,
};

const FireworkComponent = () => {
  return <Fireworks {...fireworkProps} />;
};

export default FireworkComponent;
