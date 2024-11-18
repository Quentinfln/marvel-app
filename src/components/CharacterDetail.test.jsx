import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail', () => {
    it('renders character details correctly', () => {
        const character = {
            name: 'Spider-Man',
            description: 'Friendly neighborhood Spider-Man.',
            thumbnail: {
                path: 'http://example.com/spiderman',
                extension: 'jpg'
            },
            modified: '2023-01-01'
        };

        const { getByText, getByAltText } = render(<CharacterDetail character={character} />);

        expect(getByAltText('Spider-Man')).toBeInTheDocument();
        expect(getByText('Friendly neighborhood Spider-Man.')).toBeInTheDocument();
        expect(getByText('2023-01-01')).toBeInTheDocument();
    });

    it('renders default text when description is missing', () => {
        const character = {
            name: 'Spider-Man',
            thumbnail: {
                path: 'http://example.com/spiderman',
                extension: 'jpg'
            },
            modified: '2023-01-01'
        };

        const { getByText } = render(<CharacterDetail character={character} />);

        expect(getByText('No description available.')).toBeInTheDocument();
    });

    it('renders default text when modified date is missing', () => {
        const character = {
            name: 'Spider-Man',
            description: 'Friendly neighborhood Spider-Man.',
            thumbnail: {
                path: 'http://example.com/spiderman',
                extension: 'jpg'
            }
        };

        const { getByText } = render(<CharacterDetail character={character} />);

        expect(getByText('No modification date available.')).toBeInTheDocument();
    });

    it('renders correctly when thumbnail is missing', () => {
        const character = {
            name: 'Spider-Man',
            description: 'Friendly neighborhood Spider-Man.',
            modified: '2023-01-01'
        };

        const { getByText, queryByAltText } = render(<CharacterDetail character={character} />);

        expect(queryByAltText('Spider-Man')).toBeNull();
        expect(getByText('Friendly neighborhood Spider-Man.')).toBeInTheDocument();
        expect(getByText('2023-01-01')).toBeInTheDocument();
    });
});