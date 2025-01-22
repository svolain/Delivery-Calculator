import { FormData, NumericForm } from '../types/types'

export function formIsEmpty(formData: FormData): boolean {

    if (formData.venueSlug == '' || !parseFloat(formData.userLatitude) || 
    !parseFloat(formData.userLongitude) || !parseFloat(formData.cartValue) ) {
        return true;
    }
    return false;
}

export function convertForm(formData: FormData): NumericForm | null {

    const cartValue = parseFloat(formData.cartValue);
    const latitude = parseFloat(formData.userLatitude);
    const longitude = parseFloat(formData.userLongitude);

    if (Number.isNaN(cartValue) || Number.isNaN(latitude) || Number.isNaN(longitude)) {
        return null;
    }
   
    //cartValue is multiplied by 100 and rounded to whole number to present it in
    //cent values for making correct calculations and for data-raw-value attribute  
    const form: NumericForm = {
         cartValue: Math.round(cartValue * 100), 
         userLatitude: latitude, 
         userLongitude: longitude  
    }
    return form; 
}

export function getSurcharge(cartValue: number, orderMin: number): number {

    if (orderMin > cartValue) {
        return (orderMin - cartValue);
    }

    return 0;
}

function getRange( distanceRanges: any, distance: number ): any {

    for (const range of distanceRanges) {
        if (distance >= range.min && distance < range.max) {         
            return range;
        }
      }

      return null;
}


export function getDeliveryFee(basePrice: number, distanceRanges: any, distance: number): number | null {

    const range = getRange(distanceRanges, distance);
   
    if (!range) {
        return null;
    }

    const deliveryFee: number = basePrice + range.a + (range.b * distance / 10);
    return Math.round(deliveryFee);
}