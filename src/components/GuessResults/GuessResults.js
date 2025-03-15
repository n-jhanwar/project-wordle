import React from 'react';

function GuessResults({ guesses }) {

  return (
    <div className="guess-results">
      <h2>Guess Results</h2>
      {
        guesses.map((guess, index) => (
          <p key={index} className="guess">
            {guess}
          </p>
        ))
      }
    </div>
  );
}

export default GuessResults;
