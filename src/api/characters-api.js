import characters from '../data/characters.json';

/**
 * List of characters
 * @returns {Array} characters
 */
// Fonction pour retourner la liste des personnages avec tri et ordre
export function getCharacters(sortBy = 'name', order = 'asc') {
    return characters.sort((a, b) => {
        let comparison = 0;
        if (sortBy === 'name') {
            comparison = a.name.localeCompare(b.name);
        } else if (sortBy === 'modified') {
            comparison = new Date(a.modified) - new Date(b.modified);
        }
        return order === 'asc' ? comparison : -comparison;
    });
}

/**
 * get character by id
 * @param {number} id
 * @returns {Object} character
 */

export const getCharacterById = (id) => {
    const character = characters.find(character => character.id === id);
    if (!character) {
        throw new Error(`Character with id ${id} not found`);
    }
    return character;
}

export async function fetchCharacters(sort = 'name', order = 'asc') {
    const response = await fetch(`/api/characters?sort=${sort}&order=${order}`);
    const data = await response.json();
    return data;
}