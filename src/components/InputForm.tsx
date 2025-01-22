import React, { useState } from 'react'
import Input from './Input'
import { InputFormProps, FormErrors } from '../types/types'
import { removeLeadingZero , validateInput } from '../utils/inputValidation'

const InputForm = ({ formData, setFormData }: InputFormProps) => {

    const [errors, setErrors] = useState<FormErrors>({
        venueSlug: '',
        cartValue: '',
        userLatitude: '',
        userLongitude: '',
      })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;
        
        if (value === '') {
            setFormData(prevState => ({ ...prevState, [name]: '' }));
            setErrors(prevState => ({ ...prevState, [name]: '' }));
        } else {
            const parsedValue: string = removeLeadingZero(value);
            const errorMessage: string = validateInput(name, parsedValue);

            setErrors(prevState => ({ ...prevState, [name]: errorMessage })); 

            if (!errorMessage) {
                setFormData(prevState => ({ ...prevState, [name]: parsedValue }));
            }
        }
    };

    return (
        <form className="input-form">
            <h2>Details</h2>
            <Input
                label="Venue slug"
                name="venueSlug"
                type="text"
                value={formData.venueSlug}
                onChange={handleChange}
                error={errors.venueSlug}
                dataTestId="venueSlug"
            />
            <Input
                label="Cart value (EUR)"
                name="cartValue"
                type="text"
                value={formData.cartValue}
                onChange={handleChange}
                error={errors.cartValue}
                dataTestId="cartValue"
            />
            <Input
                label="User latitude"
                name="userLatitude"
                type="text"
                value={formData.userLatitude}
                onChange={handleChange}
                error={errors.userLatitude}
                dataTestId="userLatitude"
            />
            <Input
                label="User longitude"
                name="userLongitude"
                type="text"
                value={formData.userLongitude}
                onChange={handleChange}
                error={errors.userLongitude}
                dataTestId="userLongitude"
            />
        </form>
    );
}

export default InputForm;
