import { prependZeroIfOneDigitHex } from './prependZeroIfOneDigitHex';

function getRGBValueFromHue(percentage) {
  const red = getRedValue(percentage);
  const green = getGreenValue(percentage);
  const blue = getBlueValue(percentage);

  return {
    red,
    green,
    blue,
  };
}

function getRGBHexFromHue(percentage) {
  const { red, green, blue } = getRGBValueFromHue(percentage);

  let redHexString = prependZeroIfOneDigitHex(red.toString(16));
  let greenHexString = prependZeroIfOneDigitHex(green.toString(16));
  let blueHexString = prependZeroIfOneDigitHex(blue.toString(16));

  return `#${redHexString}${greenHexString}${blueHexString}`;
}

function getRedValue(percentage) {
  let calculatedValue;
  switch(true) {
    case percentage <= 17:
      return 255;
    case percentage > 17 && percentage < 33:
      calculatedValue = (33 - percentage) / (33 - 17) * 255;
      return Math.round(calculatedValue);
    case percentage >= 33 && percentage <= 66:
      return 0;
    case percentage > 66 && percentage < 83:
      calculatedValue = (percentage - 66) / (83 - 66) * 255;
      return Math.round(calculatedValue);
    case percentage >= 83:
      return 255;
  }
}

function getGreenValue(percentage) {
  let calculatedValue;
  switch(true) {
    case percentage == 0:
      return 0;
    case percentage > 0 && percentage < 17:
      calculatedValue = percentage / 17 * 255;
      return Math.round(calculatedValue);
    case percentage >= 17 && percentage <= 50:
      return 255;
    case percentage > 50 && percentage < 66:
      calculatedValue = (66 - percentage) / (66 - 50) * 255;
      return Math.round(calculatedValue);
    case percentage >= 66:
      return 0;
  }
}

function getBlueValue(percentage) {
  let calculatedValue;
  switch(true) {
    case percentage <= 33:
      return 0;
    case percentage > 33 && percentage < 50:
      calculatedValue = (percentage - 33) / (50 -33) * 255;
      return Math.round(calculatedValue);
    case percentage >= 50 && percentage <= 83:
      return 255;
    case percentage > 83 && percentage < 100:
      calculatedValue = (100 - percentage) / (100 - 83) * 255;
      return Math.round(calculatedValue);
    case percentage == 100:
      return 0;
  }
}

export { getRGBHexFromHue, getRGBValueFromHue };
