import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeliveryCalculator from '../components/DeliveryCalculator';

describe("DeliveryCalculator component", () => {
    
    let testFormData = {
        venueSlug: '',
        cartValue: '',
        userLatitude: '',
        userLongitude: '',
    };

    test('Renders the calculator button', () => {
        render(<DeliveryCalculator
            formData={testFormData}
        />)

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('Renders the price breakdown', () => {
        render(<DeliveryCalculator
            formData={testFormData}
        />)

        expect(screen.getByText(/Cart value/i)).toBeInTheDocument();
        expect(screen.getByText(/Delivery fee/i)).toBeInTheDocument();
        expect(screen.getByText(/Delivery distance/i)).toBeInTheDocument();
        expect(screen.getByText(/Small order surcharge/i)).toBeInTheDocument();
        expect(screen.getByText(/Total price/i)).toBeInTheDocument();
    });
});