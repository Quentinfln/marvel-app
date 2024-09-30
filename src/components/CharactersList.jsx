import React from 'react';

function CharactersList({ characters }) {
  return (
    <ul id="characters">
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
}

export default CharactersList;