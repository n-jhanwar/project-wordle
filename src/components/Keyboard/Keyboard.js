import React from 'react';

const KEYS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

const STATUS_RANKS = {
  correct: 1,
  misplaced: 2,
  incorrect: 3,
}

function Keyboard({ validatedGuesses }) {
  const getStatusByLetter = () => {
    const statusObject = {};
    allLetters = validatedGuesses.flat();

    allLetters.forEach(({ letter, status }) => {
      const currentStatus = statusObject[letter];

      if (currentStatus === undefined) {
        statusObject[letter] = status;
        return;
      }

      const currentStatusRank = STATUS_RANKS[currentStatus];
      const newStatusRank = STATUS_RANKS[status];

      if (newStatusRank < currentStatusRank) {
        statusObject[letter] = status;
      }
    })

    return statusObject;
  };

  const statusByLetter = getStatusByLetter();

  return (
    <div className="keyboard-container">
      {
        KEYS.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {
              row.map((letter) => (
                <div
                  key={letter}
                  className={`keyboard-cell ${statusByLetter[letter] || ''}`}
                >
                  {letter}
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default Keyboard;
