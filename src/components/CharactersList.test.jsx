
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CharactersList } from './CharactersList';

describe('CharactersList', () => {
    it('renders without crashing', () => {
        render(
            <MemoryRouter>
                <CharactersList />
            </MemoryRouter>
        );
    });

    it('renders a list of characters', () => {
        const characters = [
            { id: 1, name: 'Iron Man' },
            { id: 2, name: 'Thor' },
        ];

        const { getByText } = render(
            <MemoryRouter>
                <CharactersList characters={characters} />
            </MemoryRouter>
        );

        expect(getByText('Iron Man')).toBeInTheDocument();
        expect(getByText('Thor')).toBeInTheDocument();
    });

    it('renders links to character details', () => {
        const characters = [
            { id: 1, name: 'Iron Man' },
            { id: 2, name: 'Thor' },
        ];

        const { getByText } = render(
            <MemoryRouter>
                <CharactersList characters={characters} />
            </MemoryRouter>
        );

        expect(getByText('Iron Man').closest('a')).toHaveAttribute('href', '/characters/1');
        expect(getByText('Thor').closest('a')).toHaveAttribute('href', '/characters/2');
    });
});