import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = letter
    ? `cell ${status}`
    : 'cell';

  return <span className={className}>{letter}</span>
}

function Guess({ value }) {
  const numberOfLetters = value?.length || 5;

  return (
    <p className="guess">
      {
        range(numberOfLetters).map((index) => (
          <Cell
            key={index}
            letter={value?.length > 0 && value[index].letter}
            status={value?.length > 0 && value[index].status}
          />
        ))
      }
    </p>
  );
}

export default Guess;
