const ColorShade = {
  DARKER: 0,
  LIGHTER: 1,
};

function getHSBofLighterColor ({ hueDegree, saturation, brightness }) {
  const updatedSaturation = saturation - 5;
  const updatedBrightness = brightness + 5;

  return {
    saturation: updatedSaturation < 0 ? 0 : updatedSaturation,
    brightness: updatedBrightness > 100 ? 100 : updatedBrightness,
    hueDegree: getUpdatedHue(hueDegree, ColorShade.LIGHTER),
  };
}

function getHSBofDarkerColor ({ hueDegree, saturation, brightness }) {
  const updatedSaturation = saturation + 5;
  const updatedBrightness = brightness - 5;

  return {
    saturation: updatedSaturation > 100 ? 100 : updatedSaturation,
    brightness: updatedBrightness < 0 ? 0 : updatedBrightness,
    hueDegree: getUpdatedHue(hueDegree, ColorShade.DARKER),
  };
}

function getUpdatedHue(hueDegree, direction) {
  if (hueDegree === 360) hueDegree = 0;
  
  switch(Math.floor( hueDegree / 60 )) {
    case 0:
    case 2:
    case 4:
    case 6:
      if (direction === ColorShade.DARKER) {
        return ( hueDegree % 60 ) > 5 ? hueDegree - 5 : hueDegree - ( hueDegree % 60 );
      }
      return ( hueDegree % 60 ) < 55 ? hueDegree + 5 : hueDegree + ( 60 - hueDegree % 60 );
    case 1:
    case 3:
    case 5:
      if (direction === ColorShade.DARKER) {
        return ( hueDegree % 60 ) < 55 ? hueDegree + 5 : hueDegree + ( 60 - hueDegree % 60 );
      }
      return ( hueDegree % 60 ) > 5 ? hueDegree - 5 : hueDegree - ( hueDegree % 60 );
  }
}

export {
  getHSBofLighterColor,
  getHSBofDarkerColor,
};
