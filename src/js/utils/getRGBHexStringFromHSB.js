import { prependZeroIfOneDigitHex } from './prependZeroIfOneDigitHex';
import { getRGBValueFromHue } from './getRGBFromHue';

function getRGBHexStringFromHSB({ hueDegree, saturation, brightness }) {
  const { red, green, blue } = getRGBValueFromHue(hueDegree);
  
  const redValue = getAdjustedColorValue(red);
  const greenValue = getAdjustedColorValue(green);
  const blueValue = getAdjustedColorValue(blue);

  let redHexString = prependZeroIfOneDigitHex(redValue.toString(16));
  let greenHexString = prependZeroIfOneDigitHex(greenValue.toString(16));
  let blueHexString = prependZeroIfOneDigitHex(blueValue.toString(16));

  return `#${redHexString}${greenHexString}${blueHexString}`;

  function getAdjustedColorValue(colorValue) {
    const valueAdjustedBySaturation = ( colorValue - 255 ) / 100 * saturation + 255;
    const finalValue =  valueAdjustedBySaturation * brightness / 100;
    return Math.round(finalValue);
  }
}

export { getRGBHexStringFromHSB };
