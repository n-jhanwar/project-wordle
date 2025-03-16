import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  };

  function handleGuessChange(event) {
    const nextGuess = event.target.value.toUpperCase();
    setTentativeGuess(nextGuess);
  }

  return (
    <>
      <form 
        className="guess-input-wrapper"
        onSubmit={handleSubmit}
      >
        <label htmlFor="guess-input"> Enter Guess: </label>
        <input
          required
          disabled={gameStatus !== 'playing'}
          type='text'
          id='guess-input'
          pattern='[A-Za-z]{5}'
          title='Please enter a 5-letter word.'
          value={tentativeGuess}
          onChange={handleGuessChange}
        />
      </form>
    </>
  );
}

export default GuessInput;
