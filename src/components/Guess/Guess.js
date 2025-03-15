import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = letter
    ? `cell ${status}`
    : 'cell';

  return <span className={className}>{letter}</span>
}

function Guess({ word, answer }) {
  let numberOfLetters = 5;
  let letterStatuses = [];

  if (word) {
    letterStatuses = checkGuess(word, answer);
    numberOfLetters = word.length;
  }

  return (
    <p className="guess">
      {
        range(numberOfLetters).map((index) => (
          <Cell
            key={index}
            letter={letterStatuses.length > 0 && letterStatuses[index].letter}
            status={letterStatuses.length > 0 && letterStatuses[index].status}
          />
        ))
      }
    </p>
  );
}

export default Guess;
