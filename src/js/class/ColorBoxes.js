import { getRGBHexStringFromHSB } from '../utils/getRGBHexStringFromHSB';

class ColorBoxes {
  constructor() {
    this.mainColorElement = document.getElementById('main-color');
    this.lighterElement = document.getElementById('lighter');
    this.lightestElement = document.getElementById('lightest');
    this.darkerElement = document.getElementById('darker');
    this.darkestElement = document.getElementById('darkest');

    this.setColorAndText(this.mainColorElement, '#2578fc');
    this.setColorAndText(this.lighterElement, '#3381ff');
    this.setColorAndText(this.lightestElement, '#4dA6ff');
    this.setColorAndText(this.darkerElement, '#186AED');
    this.setColorAndText(this.darkestElement, '#0B2FE0');

    this.hueDegree = 0;
    this.brightness = 100;
    this.saturation = 100;
  }
  
  subscribeOnHueChange(hueDegree) {
    this.hueDegree = hueDegree;
    this.setColorAndText();
  }

  subscribeOnSaturationAndBrightnessChange({ saturation, brightness }) {
    this.saturation = saturation;
    this.brightness = brightness;
    this.setColorAndText();
  }

  setColorAndText() {
    const RGBHexString = getRGBHexStringFromHSB(this.hueDegree, this.saturation, this.brightness);

    this.mainColorElement.style.background = RGBHexString;
    this.mainColorElement.innerHTML = RGBHexString;
  }
}

export { ColorBoxes };
