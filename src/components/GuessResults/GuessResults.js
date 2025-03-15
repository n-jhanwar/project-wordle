import React from 'react';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';


function GuessResults({ guesses }) {
  if (guesses.length > NUM_OF_GUESSES_ALLOWED) {
    window.alert('You have exceeded the number of guesses allowed!');
    window.location.reload();
  }

  return (
    <div className="guess-results">
      {
        range(NUM_OF_GUESSES_ALLOWED).map((number) => (
          <Guess
            key={`${number}-${Math.random()}`}
            word={guesses[number]} 
          />
        )) 
      }
    </div>
  );
}

export default GuessResults;
