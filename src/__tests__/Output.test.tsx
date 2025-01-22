import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Output from '../components/Output';

describe("Output component", () => {
    test("Renders the output field", () => {
        render( <Output
            label='test output'
            value={'100'}
            dataRawValue={10000}
            unit={'€'}
        />)

        expect(screen.getByText(/test output/i)).toBeInTheDocument();
    });
});
