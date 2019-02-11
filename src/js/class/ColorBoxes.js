import { getRGBHexStringFromHSB } from '../utils/getRGBHexStringFromHSB';
import { getHSBofLighterColor, getHSBofDarkerColor } from '../utils/adjustHSB';

class ColorBoxes {
  constructor() {
    this.mainColorElement = document.getElementById('main-color');
    this.lighterColorElement = document.getElementById('lighter');
    this.lightestColorElement = document.getElementById('lightest');
    this.darkerColorElement = document.getElementById('darker');
    this.darkestColorElement = document.getElementById('darkest');

    this.HSBValue = {
      hueDegree: 0,
      brightness: 100,
      saturation: 100,
    };
  }
  
  subscribeOnHueChange(hueDegree) {
    this.HSBValue.hueDegree = hueDegree;
    this.setColorAndText();
  }

  subscribeOnSaturationAndBrightnessChange({ saturation, brightness }) {
    this.HSBValue.saturation = saturation;
    this.HSBValue.brightness = brightness;
    this.setColorAndText();
  }

  setColorAndText() {    
    const mainColor = this.HSBValue;
    const lighterColor = getHSBofLighterColor(mainColor);
    const darkerColor = getHSBofDarkerColor(mainColor);
    const lightestColor = getHSBofLighterColor(lighterColor);
    const darkestColor = getHSBofDarkerColor(darkerColor);

    updateElementWithRGBHexString(this.mainColorElement, mainColor);
    updateElementWithRGBHexString(this.lighterColorElement, lighterColor);
    updateElementWithRGBHexString(this.darkerColorElement, darkerColor);
    updateElementWithRGBHexString(this.lightestColorElement, lightestColor);
    updateElementWithRGBHexString(this.darkestColorElement, darkestColor);
  }
}

function updateElementWithRGBHexString(element, HSBValue) {
  const RGBHexString = getRGBHexStringFromHSB(HSBValue);
  element.style.background = RGBHexString;
  element.innerHTML = RGBHexString;
}

export { ColorBoxes };
