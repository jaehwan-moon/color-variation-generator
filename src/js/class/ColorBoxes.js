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
  }

  setColorAndText(element, color) {
    element.style.background = color;
    element.innerHTML = color;
  }

  subscribeOnColorChange(RGBHexString) {
    this.setColorAndText(this.mainColorElement, RGBHexString);
  }
}

export { ColorBoxes };
