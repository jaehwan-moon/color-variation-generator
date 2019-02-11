import { prependZeroIfOneDigitHex } from './prependZeroIfOneDigitHex';

function getRGBValueFromHue(hueDegree) {
  const red = getRedValue(hueDegree);
  const green = getGreenValue(hueDegree);
  const blue = getBlueValue(hueDegree);

  return {
    red,
    green,
    blue,
  };
}

function getRGBHexFromHue(hueDegree) {
  const { red, green, blue } = getRGBValueFromHue(hueDegree);

  let redHexString = prependZeroIfOneDigitHex(red.toString(16));
  let greenHexString = prependZeroIfOneDigitHex(green.toString(16));
  let blueHexString = prependZeroIfOneDigitHex(blue.toString(16));

  return `#${redHexString}${greenHexString}${blueHexString}`;
}

function getRedValue(hueDegree) {
  let calculatedValue;
  switch(true) {
    case hueDegree <= 17:
      return 255;
    case hueDegree > 17 && hueDegree < 33:
      calculatedValue = (33 - hueDegree) / (33 - 17) * 255;
      return Math.round(calculatedValue);
    case hueDegree >= 33 && hueDegree <= 66:
      return 0;
    case hueDegree > 66 && hueDegree < 83:
      calculatedValue = (hueDegree - 66) / (83 - 66) * 255;
      return Math.round(calculatedValue);
    case hueDegree >= 83:
      return 255;
  }
}

function getGreenValue(hueDegree) {
  let calculatedValue;
  switch(true) {
    case hueDegree == 0:
      return 0;
    case hueDegree > 0 && hueDegree < 17:
      calculatedValue = hueDegree / 17 * 255;
      return Math.round(calculatedValue);
    case hueDegree >= 17 && hueDegree <= 50:
      return 255;
    case hueDegree > 50 && hueDegree < 66:
      calculatedValue = (66 - hueDegree) / (66 - 50) * 255;
      return Math.round(calculatedValue);
    case hueDegree >= 66:
      return 0;
  }
}

function getBlueValue(hueDegree) {
  let calculatedValue;
  switch(true) {
    case hueDegree <= 33:
      return 0;
    case hueDegree > 33 && hueDegree < 50:
      calculatedValue = (hueDegree - 33) / (50 -33) * 255;
      return Math.round(calculatedValue);
    case hueDegree >= 50 && hueDegree <= 83:
      return 255;
    case hueDegree > 83 && hueDegree < 100:
      calculatedValue = (100 - hueDegree) / (100 - 83) * 255;
      return Math.round(calculatedValue);
    case hueDegree == 100:
      return 0;
  }
}

export { getRGBHexFromHue, getRGBValueFromHue };
