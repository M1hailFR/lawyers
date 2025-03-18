const PHONE_LENGTH = 11;

export const getFormattedPhone = (phone) => {
  const req = {
    raw: '',
    pretty: ''
  };

  if (!phone) {
    return req;
  }
  if (typeof phone === 'number') {
    phone = String(phone);
  }

  let onlyNumbers = phone.replace(/\D/g, '');

  if (onlyNumbers.startsWith('+7') && onlyNumbers.length === PHONE_LENGTH) {
    onlyNumbers = onlyNumbers.replace(/^\+7/, '8');
  }
  req.raw = onlyNumbers;
  req.pretty = getPrettyPhone(onlyNumbers);

  return req;
};

const getPrettyPhone = (raw) => {
  const match = raw.match(/^(8|)?(\d{3})(\d{3})(\d{2})(\d{2})/);
  if (!match) {
    return raw;
  }

  return `${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`;
};
