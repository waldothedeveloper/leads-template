export const zipCodeRegex = /^\d{5,6}(?:[-\s]\d{4})?$/;
const phoneNumberRegex = /^[2-9]{3}-[0-9]{3}-[0-9]{4}$/;

export const verifyZipcode = (zip) => {
  return fetch(`/api/verify-zipcode?query=${zip}`)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    })
    .catch((err) => {
      return err;
    });
};

// TODO: TAKE THIS FN SOME WHERE ELSE PLEASE
export const formatPhoneNumber = (value) => {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber = value.includes("+1")
    ? value.replace(/^\+[1]/, "")
    : value.replace(/[^\d]/g, "");

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length;

  // we need to return the value with no formatting if its less then four digits
  // this is to avoid weird behavior that occurs if you  format the area code to early

  if (phoneNumberLength < 4) return phoneNumber;

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 7) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

export const validatePhoneNumber = (phone) => {
  return phoneNumberRegex.test(phone) ?? false;
};
