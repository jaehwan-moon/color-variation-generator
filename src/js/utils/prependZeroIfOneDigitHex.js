function prependZeroIfOneDigitHex(hexString) {
  if (hexString.length === 1) return `0${hexString}`;
  return hexString;
}

export { prependZeroIfOneDigitHex };
