import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CompareCharactersPage from './CompareCharactersPage';
import charactersData from '../data/characters.json';

jest.mock('../data/characters.json', () => [
    { name: 'Character 1', capacities: { force: 10, intelligence: 8, durability: 7, energy: 6, speed: 5, fighting: 4 } },
    { name: 'Character 2', capacities: { force: 9, intelligence: 7, durability: 6, energy: 5, speed: 4, fighting: 3 } },
]);

describe('CompareCharactersPage', () => {
    test('renders loading state initially', () => {
        render(<CompareCharactersPage />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders character comparison page', async () => {
        render(<CompareCharactersPage />);
        expect(await screen.findByText('Compare characters')).toBeInTheDocument();
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

    test('changes selected character in first select', async () => {
        render(<CompareCharactersPage />);
        const select1 = await screen.findByTestId('select-character-1');
        fireEvent.change(select1, { target: { value: '1' } });
        expect(select1.value).toBe('1');
    });

    test('changes selected character in second select', async () => {
        render(<CompareCharactersPage />);
        const select2 = await screen.findByTestId('select-character-2');
        fireEvent.change(select2, { target: { value: '0' } });
        expect(select2.value).toBe('0');
    });

    test('renders radar chart with correct data', async () => {
        render(<CompareCharactersPage />);
        expect(await screen.findByText('Compare characters')).toBeInTheDocument();
        // Assuming RadarChartCompare component renders a chart with character names
        expect(screen.getByText('Character 1')).toBeInTheDocument();
        expect(screen.getByText('Character 2')).toBeInTheDocument();
    });
});