import { OutputProps } from '../types/types'

const Output = ({ label, value, dataRawValue, unit }: OutputProps) => {
    return (
        <div className='output-container'>
            <p className='output-values'>
                <span className='output-label'>{label}</span>
                <span data-raw-value={dataRawValue}>{value}</span>
            </p>
            <p className='output-unit'>{unit}</p>
        </div>
        
    )
}

export default Output;