import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe("Button component", () => {
    test('Button handles click', () => {
        const handleClick = jest.fn();
        render(<Button
            label='Test Button'
            onClick={handleClick} 
            dataTestId="testButton"          
        />);
    
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});