import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleGuessChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  return (
    <>
      <form 
        class="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();  
          setGuess('');

          // To make the debugging easier, we'll log the guess in the console.
          console.info({ guess });
        }}
      >
        <label htmlFor="guess-input"> Enter Guess: </label>
        <input
          required
          type='text'
          id='guess-input'
          pattern='[A-Za-z]{5}'
          title='Please enter a 5-letter word.'
          value={guess}
          onChange={handleGuessChange}
        />
      </form>
    </>
  );
}

export default GuessInput;
