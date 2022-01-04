import React, { useState } from 'react';

// Import Utilities
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

// Import Styles
import { LetterStyle } from './Letter.styles';

const letter = `Querida Verónica: <br/>

Tras un 2021 un poco atípico, como el 2020 y más o menos como se presentá el 2022, que no es por ser pesimista eeee pero pinta feo, te has portado muy bien o eso nos consta en acta, tras ver tu carta de este año lo tuvimos claro a la primera, y es que este año no la hemos hecho ni puñetero caso, no te enfades eeeeeee pero vamos ni leerla.<br/>

Bueno, te estarás preguntando que que es esto y basicamente, hemos contactado con Diego para que no te de los regalos hasta que no resuelvas las preguntas, son preguntas de Navidad y bueno alguna un poco más personal.<br/>

- Una vez pulsada una respuesta se chequea automáticamente.<br/>
- Deberás acertar la mitad o más de las preguntas si quieres tener tus regalos.<br/><br/>

Buena suerte Verónica y esperemos que te gusten los regalos de este año<br/>
Feliz Día de Reyes y Feliz Navidad.<br/>
Los Tres Reyes Magos de Oriente, Melchor, Gaspar y Baltasar<br/>`;

const letterHidden = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat at eros quis gravida. Etiam dapibus scelerisque nunc at varius. Quisque vitae ultricies purus. Nullam sit amet quam pellentesque, efficitur lorem eu, porttitor lorem. Duis facilisis tellus nec nulla dapibus, eget faucibus neque consectetur. Cras in turpis sit amet magna fringilla tincidunt. Nunc sit amet lacus quis nisi laoreet lobortis.`;

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
        transition={{ duration: 0.7 }}
      >
        <Typewriter
          options={{
            autoStart: false,
            delay: 0.3,
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

        {!finishTyping ? (
          <span className="spanHidden">{letterHidden}</span>
        ) : null}

        <div className="btn-container">
          {finishTyping ? <button onClick={callback}>Comenzar</button> : null}
        </div>
      </motion.div>
    </LetterStyle>
  );
};

export default LetterComponent;
