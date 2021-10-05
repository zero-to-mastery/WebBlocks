const CountryCode = require('./country-code.json');

const phoneNumberFormatter = input => {
  let phoneNumber = input.replace(/[^\d]/g, '');

  if (input[0] === '+') {
    return autoFormatNonNANPNumber(phoneNumber);
  } else {
    return autoFormatNANPNumber(phoneNumber);
  }
};

const checkCountryCodeExists = phoneNumber => {
  let countryCode = [];
  for (const i in CountryCode) {
    countryCode.push(CountryCode[i]['Country Code']);
  }

  if (countryCode.includes(phoneNumber.slice(0, 3))) {
    return phoneNumber.slice(0, 3);
  } else if (countryCode.includes(phoneNumber.slice(0, 2))) {
    return phoneNumber.slice(0, 2);
  } else if (countryCode.includes(phoneNumber.slice(0, 1))) {
    return phoneNumber.slice(0, 1);
  } else {
    return null;
  }
};

const autoFormatNANPNumber = phoneNumber => {
  const numberLength = phoneNumber.length;

  if (numberLength < 4) {
    return phoneNumber;
  }

  if (numberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`;
};

const autoFormatNonNANPNumber = phoneNumber => {
  const countryCode = checkCountryCodeExists(phoneNumber);
  const phoneNumberWithoutCountryCode = phoneNumber.slice(countryCode.length);
  const numberLength = phoneNumberWithoutCountryCode.length;

  if (countryCode === null) {
    return `+${phoneNumber}`;
  }

  let formattedPhoneNumber = `+${countryCode}`;
  for (let i = 0; i < numberLength; i++) {
    if (i % 3 == 0) {
      formattedPhoneNumber += `-${phoneNumberWithoutCountryCode.slice(i, i + 3)}`;
    }
  }
  return formattedPhoneNumber;
};
