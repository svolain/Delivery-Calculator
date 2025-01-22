export type FormData = {
    venueSlug: string;
    cartValue: string;
    userLatitude: string;
    userLongitude: string;
};

export type NumericForm = {
    cartValue: number;
    userLatitude: number;
    userLongitude: number;
};

export type FormErrors = {
    venueSlug?: string;
    cartValue?: string;
    userLatitude?: string;
    userLongitude?: string;
};

export type InputFormProps = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export type InputProps = {
    label: string;
    type : 'text';
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | any;
    dataTestId: string;
};

export type LocationProps = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export type CalculatorProps = {
    formData: FormData;
}

export type OutputProps = {
    label: string;
    value: number | string;
    dataRawValue: number;
    unit: string;
}