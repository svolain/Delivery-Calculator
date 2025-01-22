//regex patterns are used for input validation to assure
//consistent input field behavior across different browsers

export function removeLeadingZero(value: string): string {

  //regex ^0: catch 0 if it is the first character of string, 
  //+(?!\.|$): allowed to be followed only by '.'

  return value.replace(/^0+(?!\.|$)/, '');
};

function validateCartValue(value: string): string {

  //regex ^\d+: catch one or more digits, (\.\d{0,2})?: allowed
  //to be followed by '.' and 2 digits

  const pattern = /^\d+(\.\d{0,2})?$/;

  if (!pattern.test(value) || value === '') {
    return 'Please enter positive numbers, with no more than 2 decimals';
  } else if (value.length > 10) {
    return 'Too big value'
  }
  return '';
};

function validateLatitude(value: string): string {

  const numericValue = parseFloat(value);

  if (numericValue < -90 || numericValue > 90) {
    return 'Latitude must be between -90 and 90';
  }
  return '';
};

function validateLongitude(value: string): string {

  const numericValue = parseFloat(value);
  
  if (numericValue < -180 || numericValue > 180) {
      return 'Longitude must be between -180 and 180';
  }
  return '';
}

function validateCoordinates(name: string, value: string): string {

  //regex ^[-]?\d: catch digits and can optionally begin with '-', {0,3}: 
  //allowed to have 3 digits, (\.\d{0,5}): can be followed by '.' and 5 digits

  const pattern = /^[-]?\d{0,3}(\.\d{0,5})?$/;

  if (!pattern.test(value)) {
    if (name === 'userLatitude') {
      return 'Please enter a number between -90 and 90, with no more than 5 decimals';
    } else {
      return 'Please enter a number between -180 and 180, with no more than 5 decimals';
    }

  }

  if (name === 'userLatitude') {
    return validateLatitude(value);
  } else {
    return validateLongitude(value);
  }
};

function validateVenue(value: string): string {

  // regex ^[a-z-]: allow only lower case letters and '-', 
  // {0,50}:  max number of characters 50

  const pattern = /^[a-z-]{0,50}$/;
  if (!pattern.test(value)) {
    return 'Please enter only alphabetical characters with \'-\', max 50 characters';
  }
  return '';
}

export function validateInput(name: string, value: string): string {
  if (name === 'cartValue') {
    return (validateCartValue(value));
  } else if (name === 'userLatitude' || name === 'userLongitude') {
    return validateCoordinates(name, value);
  } else if (name == 'venueSlug') {
    return validateVenue(value);
  }
  return '';
}
