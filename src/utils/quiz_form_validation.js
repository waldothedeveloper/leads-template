export const zipCodeRegex = /^\d{5,6}(?:[-\s]\d{4})?$/;
// const phoneNumberRegex =
//   /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

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

export const formatPhoneNumber = (value) => {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber = value.includes("+1")
    ? value.replace(/^\+[1]/, "")
    : value.replace(/[^\d]/g, "");

  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

export const validatePhoneNumber = async (phone) => {
  const result = await fetch(`/api/validate_phone_number`, {
    method: `POST`,
    body: phone,
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.status !== 200) {
        return false;
      } else if (data.type === "mobile") {
        return data;
      } else {
        return false;
      }
    })
    .catch((err) => {
      return err;
    });

  return result;
};
