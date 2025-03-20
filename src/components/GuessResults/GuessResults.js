import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';


function GuessResults({ validatedGuesses }) {
  return (
    <div className="guess-results">
      {
        range(NUM_OF_GUESSES_ALLOWED).map((number) => (
          <Guess
            key={`${number}-${Math.random()}`}
            value={validatedGuesses[number]}
          />
        )) 
      }
    </div>
  );
}

export default GuessResults;
