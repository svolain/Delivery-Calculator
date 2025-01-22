import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../components/Input';

describe("Input component", () => {
    
    test('Renders the input field', () => {
        render(<Input
            label="Test input"
            name="testInput"
            type="text"
            value={''}
            onChange={() => {}}
            error={''}
            dataTestId="testInput"
        />);
        
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue('');
    });

});

