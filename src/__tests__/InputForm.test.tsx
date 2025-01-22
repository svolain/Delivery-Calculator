import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputForm from '../components/InputForm';

describe("InputForm component", () => {
    test('Renders the Input form', () => {
        let testFormData = {
            venueSlug: '',
            cartValue: '',
            userLatitude: '',
            userLongitude: '',
        };

        let testSetFormData = ()=>{};

        render(<InputForm
            formData={testFormData}
            setFormData={testSetFormData}
        />)

        expect(screen.getByLabelText(/Venue slug/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Cart value \(EUR\)/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/User latitude/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/User longitude/i)).toBeInTheDocument();
    });
});