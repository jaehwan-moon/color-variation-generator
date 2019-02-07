function getRGBHexFromHue(percentage) {
  const redValue = getRedValue(percentage);
  const greenValue = getGreenValue(percentage);
  const blueValue = getBlueValue(percentage);

  return `#${redValue.toString(16)}${greenValue.toString(16)}${blueValue.toString(16)}`;
}

function getRedValue(percentage) {
  let calculatedValue;
  switch(true) {
    case percentage <= 17:
      return 255;
    case percentage > 17 && percentage < 33:
      calculatedValue = (33 - percentage) / (33 - 17) * 255;
      return Math.round(calculatedValue)
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
    case percentage = 0:
      return 0;
    case percentage > 0 && percentage < 17:
      calculatedValue = percentage / 17 * 255;
      return Math.round(calculatedValue)
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
      return Math.round(calculatedValue)
    case percentage >= 50 && percentage <= 83:
      return 255;
    case percentage > 83 && percentage < 100:
      calculatedValue = (100 - percentage) / (100 - 83) * 255;
      return Math.round();
    case percentage = 100:
      return 0;
  }
}

export { getRGBHexFromHue };
