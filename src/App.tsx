import { useState } from 'react'
import './styles/App.css'
import { FormData } from './types/types'
import InputForm from './components/InputForm'
import GetLocationButton from './components/GetLocationButton'
import DeliveryCalculator  from './components/DeliveryCalculator'

const App = () => {
  const [inputData, setInputData] = useState<FormData>({
    venueSlug: '',
    cartValue: '',
    userLatitude: '',
    userLongitude: '',
  });

  return (
    <div className='dopc-container'>
      <header>
        <h1>Delivery Order Price Calculator</h1>
      </header>
      <InputForm
        formData={inputData}
        setFormData={setInputData}
      />
      <GetLocationButton
        formData={inputData}
        setFormData={setInputData}
      />
      <DeliveryCalculator 
        formData={inputData}
      />
    </div>
  )
}

export default App
