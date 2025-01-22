import { useState } from 'react'
import { formIsEmpty, getSurcharge, getDeliveryFee, convertForm } from '../utils/deliveryFeeUtils'
import { fetchStaticData, fetchDynamicData } from '../utils/apiUtils'
import { getDistance } from 'geolib'
import Button from './Button'
import Output from './Output'
import { CalculatorProps,  NumericForm } from '../types/types'

const DeliveryCalculator = ({ formData }: CalculatorProps ) => {

    const [output, setOutput] = useState({
        cartValue: '0',
        smallOrderSurcharge: '0',
        deliveryFee: '0',
        Distance: '0',
        totalPrice: '0',
    });

    const [rawValues, setRawValues] = useState ({
        rawCart: 0,
        rawSurcharge: 0,
        rawDeliveryFee: 0,
        rawDistance: 0,
        rawTotal: 0,
    })

    const [error, setError] = useState<string | null>(null);

    const cleanOutput = () => {

        setOutput({
            cartValue: '0',
            smallOrderSurcharge: '0',
            deliveryFee: '0',
            Distance: '0',
            totalPrice: '0',
        });
    }

    const calculateDeliveryPrice = async () => {

        setError('');

        if (formIsEmpty(formData)) {
            setError('Fill all the fields before submitting');
            cleanOutput();
            return;
        }

        const form: NumericForm | null = convertForm(formData);
        
        if (!form) {
            setError('Enter numbers only to cart value and location');
            cleanOutput();
            return;
        }

        const venueLocation: any = await fetchStaticData(formData.venueSlug);
        const dynamicData: any = await fetchDynamicData(formData.venueSlug);
            
        if ( !venueLocation || !dynamicData ) {
            setError('No venue found with entered slug');
            cleanOutput();
            return;
        }

        const surchargeRaw: number = getSurcharge(form.cartValue, dynamicData.orderMin);

        //the API returns location data as [longitude, latitude], so they can be accessed
        //with venueLocation[1] for latitude and venueLocation[0] for longitude
        const distance: number = getDistance(
                                    { latitude: form.userLatitude, longitude: form.userLongitude},
                                    { latitude: venueLocation[1], longitude: venueLocation[0] }
                                );
       
        const deliveryFeeRaw: number | null = getDeliveryFee(
                                                        dynamicData.basePrice, 
                                                        dynamicData.distanceRanges, 
                                                        distance
                                                    );
        
        if (!deliveryFeeRaw) {
            setError('Delivery not available, distance is too long');
            cleanOutput();
            return;
        }

        const totalPriceRaw = form.cartValue + surchargeRaw + Number(deliveryFeeRaw);
    
          setRawValues({
            rawCart: form.cartValue,
            rawSurcharge: surchargeRaw,
            rawDeliveryFee: deliveryFeeRaw,
            rawDistance: distance,
            rawTotal: totalPriceRaw,
          })

          //The money related values are divided by 100 and set to 2 decimals 
          //to present them in euros instead of cents, distance converted to string
          setOutput({
            cartValue: (form.cartValue / 100).toFixed(2),
            smallOrderSurcharge: (surchargeRaw / 100).toFixed(2),
            deliveryFee: (deliveryFeeRaw / 100).toFixed(2),
            Distance: distance.toString(),
            totalPrice: (totalPriceRaw / 100).toFixed(2),
          });
    };

    return (
        <div className='calculator'>
            <Button 
                label='Calculate delivery price'
                onClick={calculateDeliveryPrice}
            />
            {error && <p className="error-message">{error}</p>}
            <h2>Price Breakdown</h2>
            <Output
                label='Cart value'
                value={output.cartValue}
                dataRawValue={rawValues.rawCart}
                unit={'€'}
            />
            <Output
                label='Delivery fee'
                value={output.deliveryFee}
                dataRawValue={rawValues.rawDeliveryFee}
                unit={'€'}
            />
            <Output
                label='Delivery distance'
                value={output.Distance}
                dataRawValue={rawValues.rawDistance}
                unit={'𝚖'}
            />
            <Output
                label='Small order surcharge'
                value={output.smallOrderSurcharge}
                dataRawValue={rawValues.rawSurcharge}
                unit={'€'}
            />
            <hr/>
            <Output
                label='Total price'
                value={output.totalPrice}
                dataRawValue={rawValues.rawTotal}
                unit={'€'}
            />
        </div>
    );
}

export default DeliveryCalculator;