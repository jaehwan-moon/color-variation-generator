import { Observable } from './Observable';
import { getRGBHexFromSaturationAndBrightness } from '../utils/getRGBHexFromSaturationAndBrightness';
import { convertRGBHexStringToValue } from '../utils/convertRGBHexStringToValue';

class ColorPicker extends Observable {
  constructor(element) {
    super();
   
    this.element = element;
    this.pointer = document.getElementById('color-picker-pointer');
    this.baseColorElement = document.getElementsByClassName('base-color')[0];
    this.RGBValue = {
      red: 255,
      green: 0,
      blue: 0,
    };

    const colorPickerRect = this.element.getBoundingClientRect();
    this.maxPointerX = colorPickerRect.width - this.pointer.getBoundingClientRect().width;
    this.maxPointerY = colorPickerRect.height - this.pointer.getBoundingClientRect().height;

    this.pointerX = this.maxPointerX;
    this.pointerY = 0;
    this.pointer.style.left = `${this.pointerX}px`;
    this.pointer.style.top = `${this.pointerY}px`;
    
    this.element.addEventListener('mousedown', this.handleOnPointerDown);
    this.element.addEventListener('mouseup', this.handleOnPointerUp);
    this.element.addEventListener('mouseleave', this.handleOnPointerUp);
  }

  handleOnPointerDown = (e) => {
    this.updateOnSaturationAndBrightnessChange(e);
    this.element.addEventListener('mousemove', this.handleOnPointerMove);  
  };

  handleOnPointerUp = () => {
    this.element.removeEventListener('mousemove', this.handleOnPointerMove);
  }

  handleOnPointerMove = (e) => {
    this.updateOnSaturationAndBrightnessChange(e);
  }

  updateOnSaturationAndBrightnessChange(e) {
    const colorPickerRect = this.element.getBoundingClientRect();
    this.pointerY = e.clientY - colorPickerRect.top;
    this.pointerX = e.clientX - colorPickerRect.left;
    if (this.pointerX > this.maxPointerX) this.pointerX = this.maxPointerX;
    if (this.pointerY > this.maxPointerY) this.pointerY = this.maxPointerY;
    this.pointer.style.left = `${this.pointerX}px`;
    this.pointer.style.top = `${this.pointerY}px`;

    const updatedRGBHexString = this.getRGBHexString();
    this.update(updatedRGBHexString); // Observable.update()
  }

  subscribeOnHueChange(RGBHexString) {
    this.baseColorElement.style.background = RGBHexString;
    this.RGBValue = convertRGBHexStringToValue(RGBHexString);
    const updatedRGBHexString = this.getRGBHexString();
    this.update(updatedRGBHexString); // Observable.update()
  }

  getRGBHexString() {
    const RGBHexString = getRGBHexFromSaturationAndBrightness(this.pointerX / this.maxPointerX * 100, this.pointerY / this.maxPointerY * 100, this.RGBValue);
    return RGBHexString;
  }
}

export { ColorPicker };
