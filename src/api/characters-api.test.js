import { getCharacters, getCharacterById, fetchCharacters } from './characters-api';
import characters from '../data/characters.json';

describe('getCharacters', () => {
    const sortTests = [
        { field: 'name', order: 'asc', compareFn: (a, b) => a.name.localeCompare(b.name) },
        { field: 'name', order: 'desc', compareFn: (a, b) => b.name.localeCompare(a.name) },
        { field: 'modified', order: 'asc', compareFn: (a, b) => new Date(a.modified) - new Date(b.modified) },
        { field: 'modified', order: 'desc', compareFn: (a, b) => new Date(b.modified) - new Date(a.modified) },
    ];

    sortTests.forEach(({ field, order, compareFn }) => {
        it(`should return characters sorted by ${field} in ${order} order`, () => {
            const sortedCharacters = getCharacters(field, order);
            expect(sortedCharacters).toEqual([...characters].sort(compareFn));
        });
    });
});

describe('getCharacterById', () => {
    it('should return the character with the given id', () => {
        const character = characters[0];
        expect(getCharacterById(character.id)).toEqual(character);
    });

    it('should throw an error if the character with the given id is not found', () => {
        expect(() => getCharacterById(999)).toThrow('Character with id 999 not found');
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

    const fetchTests = [
        { field: 'name', order: 'asc' },
        { field: 'name', order: 'desc' },
        { field: 'modified', order: 'asc' },
        { field: 'modified', order: 'desc' },
    ];

    fetchTests.forEach(({ field, order }) => {
        it(`should fetch characters sorted by ${field} in ${order} order`, async () => {
            const data = await fetchCharacters(field, order);
            expect(data).toEqual(characters);
            expect(global.fetch).toHaveBeenCalledWith(`/api/characters?sort=${field}&order=${order}`);
        });
    });
});
