import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
    it('should render the ContactPage component', () => {
        const { getByText } = render(<ContactPage />);
        expect(getByText('Contact Us')).toBeInTheDocument();
    });

    it('should set the document title to "Contact | Marvel App"', () => {
        render(<ContactPage />);
        expect(document.title).toBe('Contact | Marvel App');
    });

    it('should contain a mailto link with the correct email address', () => {
        const { getByText } = render(<ContactPage />);
        const linkElement = getByText('marvelApp@gmail.com');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.closest('a')).toHaveAttribute('href', 'mailto:marvelApp@gmail.com');
    });
});