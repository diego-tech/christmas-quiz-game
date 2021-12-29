import React, { useState } from 'react';

// Import Utilities
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

// Import Styles
import { LetterStyle } from './Letter.styles';

const letter = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat at eros quis gravida. Etiam dapibus scelerisque nunc at varius. Quisque vitae ultricies purus. Nullam sit amet quam pellentesque, efficitur lorem eu, porttitor lorem. Duis facilisis tellus nec nulla dapibus, eget faucibus neque consectetur. Cras in turpis sit amet magna fringilla tincidunt. Nunc sit amet lacus quis nisi laoreet lobortis. Nunc mollis dolor felis, sit amet scelerisque elit fermentum non. Suspendisse sit amet nisi iaculis, auctor nibh nec, accumsan risus.

Nullam feugiat nisi vel tortor iaculis, eget lobortis metus pellentesque. Nunc ut sodales orci, eget tincidunt dolor. Integer gravida nulla orci, vitae molestie neque vestibulum non. Pellentesque sodales vestibulum iaculis. Integer aliquet quam id rhoncus pellentesque. In aliquam ipsum vitae mauris dapibus, vel iaculis sem viverra. Vestibulum ut dui ut sem condimentum convallis. Maecenas posuere sapien odio, et euismod diam gravida vitae. Maecenas volutpat, eros quis rhoncus fermentum, enim lacus egestas elit, mollis sodales mi neque at eros.`;

type Props = {
  callback: any;
};

const LetterComponent: React.FC<Props> = ({ callback }) => {
  const [finishTyping, setFinishTyping] = useState(false);

  return (
    <LetterStyle>
      <motion.div
        className="container"
        animate={{ scale: 3 }}
        transition={{ duration: 0.5 }}
      >
        <Typewriter
          options={{
            autoStart: false,
            delay: 0.1,
            cursor: '',
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString(letter)
              .start()
              .callFunction(() => {
                setFinishTyping(true);
              });
          }}
        />

        <div className="btn-container">
          {finishTyping ? <button onClick={callback}>Comenzar</button> : null}
        </div>
      </motion.div>
    </LetterStyle>
  );
};

export default LetterComponent;
