function convertRGBHexStringToValue(hexString) {
  const redHex = hexString.substring(1, 3);
  const greenHex = hexString.substring(3, 5);
  const blueHex = hexString.substring(5);

  return {
    red: parseInt(redHex, 16),
    green: parseInt(greenHex, 16),
    blue: parseInt(blueHex, 16),
  };
}

export { convertRGBHexStringToValue };
