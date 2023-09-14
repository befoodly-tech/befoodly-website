export const isValidPinCode = (pinCode: string) => {
  const regex = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);

  return regex.test(pinCode);
};

export const isValidPhoneNumber = (phoneNumber: string) => {
  const regex = new RegExp(/^\d{10}$/);

  return regex.test(phoneNumber);
};

export const isValidEmail = (email: string) => {
  const regex = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/);

  return regex.test(email);
};

export const isValueNotChanged = (oldValue: string, newValue: string) => {
  return newValue == oldValue;
};
