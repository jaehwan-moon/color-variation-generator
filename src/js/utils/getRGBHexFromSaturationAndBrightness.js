import { prependZeroIfOneDigitHex } from './prependZeroIfOneDigitHex';

function getRGBHexFromSaturationAndBrightness(percentageX, percentageY, RGBValue) {
  const redValue = getAdjustedColorValue(RGBValue.red);
  const greenValue = getAdjustedColorValue(RGBValue.green);
  const blueValue = getAdjustedColorValue(RGBValue.blue);

  let redHexString = prependZeroIfOneDigitHex(redValue.toString(16));
  let greenHexString = prependZeroIfOneDigitHex(greenValue.toString(16));
  let blueHexString = prependZeroIfOneDigitHex(blueValue.toString(16));

  return `#${redHexString}${greenHexString}${blueHexString}`;

  function getAdjustedColorValue(colorValue) {
    const valueAdjustedByX = (colorValue - 255) / 100 * percentageX + 255;
    const finalValue =  valueAdjustedByX * ( 1 - percentageY / 100);
    return Math.round(finalValue);
  }
}

export { getRGBHexFromSaturationAndBrightness };
