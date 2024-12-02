import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils';

export function CharactersList({ characters = [] }) {
  return (
    <ul id="characters">
      {characters.map((character) => {
        
        return (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
            <strong>{character.name}</strong> <small>- {formatDate(character.modified)}</small>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}