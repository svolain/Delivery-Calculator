import '../styles/App.css'
import { InputProps } from '../types/types'

const Input = ({ label, type, name, value, onChange, error, dataTestId }: InputProps) => {
    return (
        <div className='input-field'>
            <label>
                {label}
                <br/>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    data-test-id={dataTestId}
                />
            </label>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Input;