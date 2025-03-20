import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameResultBanner from '../GameResultBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Keyboard from '../Keyboard';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('playing');

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  function handleRestartGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus('playing');
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));
  return (
    <>
      <GuessResults
        validatedGuesses={validatedGuesses}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      {
        gameStatus !== 'playing' && (
          <>
            <GameResultBanner
              gameStatus={gameStatus}
              guesseslength={guesses.length}
              answer={answer}
              handleRestartGame={handleRestartGame}
            />
          </>
        )
      }
    </>
  );
}

export default Game;
