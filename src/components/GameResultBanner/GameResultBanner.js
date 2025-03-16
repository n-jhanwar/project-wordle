import React from 'react';

function GameResultBanner({ gameStatus, guesseslength, answer}) {  
  return (
    <>
      {
        gameStatus === 'won' && (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              {' '}
              <strong>{guesseslength} {`${guesseslength === 1 ? 'guess' : 'guesses'}`}</strong>
            </p>
          </div>
        )
      }
      {
        gameStatus === 'lost' && (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>
            </p>
          </div>
        )
      }
    </>
  );
}

export default GameResultBanner;
