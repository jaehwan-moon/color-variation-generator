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

function getRGBHexStringFromHue(hueDegree) {
  return convertRGBValueToRGBHexString(getRGBValueFromHue(hueDegree));  
}

function convertRGBValueToRGBHexString({ red, green, blue }) {
  let redHexString = prependZeroIfOneDigitHex(red.toString(16));
  let greenHexString = prependZeroIfOneDigitHex(green.toString(16));
  let blueHexString = prependZeroIfOneDigitHex(blue.toString(16));

  return `#${redHexString}${greenHexString}${blueHexString}`;
}

function getRedValue(hueDegree) {
  let calculatedValue;
  switch(true) {
    case hueDegree <= 60:
      return 255;
    case hueDegree > 60 && hueDegree < 120:
      calculatedValue = (120 - hueDegree) / 60 * 255;
      return Math.round(calculatedValue);
    case hueDegree >= 120 && hueDegree <= 240:
      return 0;
    case hueDegree > 240 && hueDegree < 300:
      calculatedValue = (hueDegree - 240) / 60 * 255;
      return Math.round(calculatedValue);
    case hueDegree >= 300:
      return 255;
  }
}

function getGreenValue(hueDegree) {
  let calculatedValue;
  switch(true) {
    case hueDegree == 0:
      return 0;
    case hueDegree > 0 && hueDegree < 60:
      calculatedValue = hueDegree / 60 * 255;
      return Math.round(calculatedValue);
    case hueDegree >= 60 && hueDegree <= 180:
      return 255;
    case hueDegree > 180 && hueDegree < 240:
      calculatedValue = (240 - hueDegree) / 60 * 255;
      return Math.round(calculatedValue);
    case hueDegree >= 240:
      return 0;
  }
}

function getBlueValue(hueDegree) {
  let calculatedValue;
  switch(true) {
    case hueDegree <= 120:
      return 0;
    case hueDegree > 120 && hueDegree < 180:
      calculatedValue = (hueDegree - 120) / 60 * 255;
      return Math.round(calculatedValue);
    case hueDegree >= 180 && hueDegree <= 300:
      return 255;
    case hueDegree > 300 && hueDegree < 360:
      calculatedValue = (360 - hueDegree) / 60 * 255;
      return Math.round(calculatedValue);
    case hueDegree == 360:
      return 0;
  }
}

export {
  getRGBHexStringFromHue,
  getRGBValueFromHue,
  convertRGBValueToRGBHexString
};
