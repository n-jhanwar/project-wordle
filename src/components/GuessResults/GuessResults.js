import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';
import GameResult from '../GameResultBanner';


function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {
        range(NUM_OF_GUESSES_ALLOWED).map((number) => (
          <Guess
            key={`${number}-${Math.random()}`}
            word={guesses[number]}
            answer={answer}
          />
        )) 
      }
    </div>
  );
}

export default GuessResults;
