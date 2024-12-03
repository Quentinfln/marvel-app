import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CompareCharactersPage from './CompareCharactersPage';
import charactersData from '../data/characters.json';

jest.mock('../data/characters.json', () => [
    {
        name: 'Character 1',
        capacities: {
            force: 10,
            intelligence: 8,
            durability: 7,
            energy: 6,
            speed: 5,
            fighting: 9,
        },
    },
    {
        name: 'Character 2',
        capacities: {
            force: 7,
            intelligence: 9,
            durability: 6,
            energy: 8,
            speed: 7,
            fighting: 6,
        },
    },
]);

describe('CompareCharactersPage', () => {
    test('renders loading state initially', () => {
        const { getByText } = render(<CompareCharactersPage />);
        expect(screen.getByText('Compare characters')).toBeInTheDocument();
    });

    test('renders compare characters page', async () => {
        render(<CompareCharactersPage />);
        expect(await screen.findByText(/Compare characters/i)).toBeInTheDocument();
    });

    test('renders character options in select elements', async () => {
        render(<CompareCharactersPage />);
        const select1 = await screen.findByTestId('select-character-1');
        const select2 = await screen.findByTestId('select-character-2');

        expect(select1).toBeInTheDocument();
        expect(select2).toBeInTheDocument();

        expect(select1.children.length).toBe(charactersData.length);
        expect(select2.children.length).toBe(charactersData.length);
    });

    test('updates radar chart on character selection change', async () => {
        render(<CompareCharactersPage />);
        const select1 = await screen.findByTestId('select-character-1');
        const select2 = await screen.findByTestId('select-character-2');

        fireEvent.change(select1, { target: { value: '1' } });
        fireEvent.change(select2, { target: { value: '0' } });

        expect(select1.value).toBe('1');
        expect(select2.value).toBe('0');

        const radarChart = screen.getByTestId('radar-chart');
        expect(radarChart).toBeInTheDocument();
    });
});