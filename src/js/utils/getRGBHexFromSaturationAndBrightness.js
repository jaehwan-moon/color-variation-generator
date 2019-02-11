import { prependZeroIfOneDigitHex } from './prependZeroIfOneDigitHex';
import { getRGBValueFromHue } from './getRGBFromHue';

function getRGBHexFromSaturationAndBrightness(brightness, saturation, hueDegree) {
  const { red, green, blue } = getRGBValueFromHue(hueDegree);
  
  const redValue = getAdjustedColorValue(red);
  const greenValue = getAdjustedColorValue(green);
  const blueValue = getAdjustedColorValue(blue);

  let redHexString = prependZeroIfOneDigitHex(redValue.toString(16));
  let greenHexString = prependZeroIfOneDigitHex(greenValue.toString(16));
  let blueHexString = prependZeroIfOneDigitHex(blueValue.toString(16));

  return `#${redHexString}${greenHexString}${blueHexString}`;

  function getAdjustedColorValue(colorValue) {
    const valueAdjustedByBrightness = ( 255 - colorValue ) / 100 * brightness + colorValue;
    const finalValue =  valueAdjustedByBrightness * ( saturation / 100 - 1 );
    return Math.round(finalValue);
  }
}

export { getRGBHexFromSaturationAndBrightness };
