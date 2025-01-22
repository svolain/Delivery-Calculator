import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GetLocationButton from '../components/GetLocationButton';

describe("GetLocationButton component", () => {

    test('Renders the "Get location"-button', () => {
        let testFormData = {
            venueSlug: '',
            cartValue: '',
            userLatitude: '',
            userLongitude: '',
        };

        let testSetFormData = ()=>{};

        render(<GetLocationButton
            formData={testFormData}
            setFormData={testSetFormData}
        />)

        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});