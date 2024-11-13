import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { useLoaderData } from 'react-router-dom';
import CharacterDetailPage from './CharacterDetailPage';
import CharacterDetail from '../components/CharacterDetail';

jest.mock('react-router-dom', () => ({
    useLoaderData: jest.fn(),
}));

jest.mock('../components/CharacterDetail', () => () => <div>Character Detail Mock</div>);

describe('CharacterDetailPage', () => {
    it('should render character name and CharacterDetail component', () => {
        const mockCharacter = { name: 'Spider-Man' };
        useLoaderData.mockReturnValue(mockCharacter);

        const { getByText } = render(<CharacterDetailPage />);

        expect(getByText('Spider-Man')).toBeInTheDocument();
        expect(getByText('Character Detail Mock')).toBeInTheDocument();
    });
});