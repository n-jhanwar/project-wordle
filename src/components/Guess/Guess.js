import React from 'react';
import { range } from '../../utils';

function Guess({ word }) {
  let numberOfLetters = (word && word.length) || 5;

  return (
    <p className="guess">
      {
        range(numberOfLetters).map((index) => (
          <span key={index} className="cell">
            { word && word[index] }
          </span>
        ))
      }
    </p>
  );
}

export default Guess;
