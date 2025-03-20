import Button from '../Button';

function GameResultBanner({ gameStatus, guesseslength, answer, handleRestartGame }) {
  const isWon = gameStatus === 'won';
  
  return (
    <div className={`${isWon ? 'happy' : 'sad'} banner`}>
      <p>
        {isWon ? (
          <>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesseslength} {guesseslength === 1 ? 'guess' : 'guesses'}</strong>
          </>
        ) : (
          <>Sorry, the correct answer is <strong>{answer}</strong></>
        )}
      </p>
      <Button
        action={handleRestartGame}
        actionText="Restart Game"
      />
    </div>
  );
}

export default GameResultBanner;
