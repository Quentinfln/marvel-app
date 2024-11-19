import { getCharacters, getCharacterById, fetchCharacters } from './characters-api';
import characters from '../data/characters.json';

jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Iron Man', modified: '2023-01-01' },
    { id: 2, name: 'Thor', modified: '2023-01-02' },
    { id: 3, name: 'Hulk', modified: '2023-01-03' }
]);

describe('getCharacters', () => {
    it('should return characters sorted by name in ascending order', () => {
        const result = getCharacters('name', 'asc');
        expect(result).toEqual([
            { id: 3, name: 'Hulk', modified: '2023-01-03' },
            { id: 1, name: 'Iron Man', modified: '2023-01-01' },
            { id: 2, name: 'Thor', modified: '2023-01-02' }
        ]);
    });

    it('should return characters sorted by name in descending order', () => {
        const result = getCharacters('name', 'desc');
        expect(result).toEqual([
            { id: 2, name: 'Thor', modified: '2023-01-02' },
            { id: 1, name: 'Iron Man', modified: '2023-01-01' },
            { id: 3, name: 'Hulk', modified: '2023-01-03' }
        ]);
    });

    it('should return characters sorted by modified date in ascending order', () => {
        const result = getCharacters('modified', 'asc');
        expect(result).toEqual([
            { id: 1, name: 'Iron Man', modified: '2023-01-01' },
            { id: 2, name: 'Thor', modified: '2023-01-02' },
            { id: 3, name: 'Hulk', modified: '2023-01-03' }
        ]);
    });

    it('should return characters sorted by modified date in descending order', () => {
        const result = getCharacters('modified', 'desc');
        expect(result).toEqual([
            { id: 3, name: 'Hulk', modified: '2023-01-03' },
            { id: 2, name: 'Thor', modified: '2023-01-02' },
            { id: 1, name: 'Iron Man', modified: '2023-01-01' }
        ]);
    });
});

describe('getCharacterById', () => {
    it('should return the character with the given id', () => {
        const result = getCharacterById(1);
        expect(result).toEqual({ id: 1, name: 'Iron Man', modified: '2023-01-01' });
    });

    it('should throw an error if the character with the given id is not found', () => {
        expect(() => getCharacterById(4)).toThrow('Character with id 4 not found');
    });
});

describe('fetchCharacters', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(characters),
            })
        );
    });

    it('should fetch characters sorted by name in ascending order', async () => {
        const result = await fetchCharacters('name', 'asc');
        expect(result).toEqual(characters);
        expect(global.fetch).toHaveBeenCalledWith('/api/characters?sort=name&order=asc');
    });

    it('should fetch characters sorted by name in descending order', async () => {
        const result = await fetchCharacters('name', 'desc');
        expect(result).toEqual(characters);
        expect(global.fetch).toHaveBeenCalledWith('/api/characters?sort=name&order=desc');
    });

    it('should fetch characters sorted by modified date in ascending order', async () => {
        const result = await fetchCharacters('modified', 'asc');
        expect(result).toEqual(characters);
        expect(global.fetch).toHaveBeenCalledWith('/api/characters?sort=modified&order=asc');
    });

    it('should fetch characters sorted by modified date in descending order', async () => {
        const result = await fetchCharacters('modified', 'desc');
        expect(result).toEqual(characters);
        expect(global.fetch).toHaveBeenCalledWith('/api/characters?sort=modified&order=desc');
    });
});