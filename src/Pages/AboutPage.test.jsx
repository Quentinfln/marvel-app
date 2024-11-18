import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
    it('should render the AboutPage component', () => {
        const { getByText } = render(<AboutPage />);
        expect(getByText('About Us')).toBeInTheDocument();
        expect(getByText('We are a team of Marvel fans who love to create awesome apps !')).toBeInTheDocument();
    });

    it('should set the document title to "About | Marvel App"', () => {
        render(<AboutPage />);
        expect(document.title).toBe('About | Marvel App');
    });
});