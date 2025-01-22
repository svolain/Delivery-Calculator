import { useState } from 'react'
import Button from './Button'
import { LocationProps } from '../types/types'

const GetLocationButton = ({ setFormData, }: LocationProps) => {
    
  const [error, setError] = useState<string | null>(null);

    const getLocation = () => { 

        setError('');

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
            
            const latitude: string = Number(position.coords.latitude).toFixed(5);
            const longitude: string = Number(position.coords.longitude).toFixed(5);
            
            setFormData(prevState => ({
              ...prevState,
              userLatitude: latitude,
              userLongitude: longitude
            }));
          }, 
          (error: GeolocationPositionError) => {
            setError('Error getting location, please enter latitude and longitude manually');
            console.log(error);
          });
        }
    };

    return (
      <div>
        <Button 
                label='Get Location'
                onClick={getLocation}
                dataTestId='getLocation'
        />
        {error && <p className="error-message">{error}</p>}
      </div>
    )
}

export default GetLocationButton;