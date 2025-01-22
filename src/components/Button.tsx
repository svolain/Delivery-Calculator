type ButtonProps = {
    label: string;
    onClick: () => void;
    dataTestId?: string;
}

const Button = ({ label, onClick, dataTestId }: ButtonProps) => {
    return (
        <button 
            onClick={onClick} 
            data-test-id={dataTestId}
            className="dopc-button" 
            type="button"
        >
            {label}
        </button>
    )
}

export default Button;