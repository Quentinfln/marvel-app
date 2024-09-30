import React from 'react';

function NumberOfCharacters({ characters }) {
  const count = characters.length;

  if (count === 0) {
    return <p>There is no character</p>;
  }

  return <p>There {count === 1 ? 'is' : 'are'} {count} {count === 1 ? 'character' : 'characters'}</p>;
}

export default NumberOfCharacters;
