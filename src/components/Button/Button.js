import React from 'react';

function Button({action, actionText}) {
  return (
    <button
      className="button"
      onClick={action}
    >
      {actionText}
    </button>
  );
}

export default Button;
