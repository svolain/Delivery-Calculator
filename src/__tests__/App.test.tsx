import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe("App component", () => {
    test('Renders the title in header', () => {
        render(<App/>);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Delivery Order Price Calculator');
    });

    test('Renders the child components', () => {
        render(<App/>);

        expect(screen.getByRole('textbox', {name: /venue slug/i })).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Get Location/i })).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Get Location/i })).toBeInTheDocument();      
    });
});