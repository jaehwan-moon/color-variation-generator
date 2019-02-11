import { Observable } from './Observable';
import { getRGBHexFromHue } from '../utils/getRGBFromHue';

class HueBar extends Observable {
  /**
   * Create HueBarPointer controller
   * @param {HTMLElement} pointerElement 
   */
  constructor(element) {
    super();

    this.element = element;
    this.pointer = document.getElementById('hue-selector');

    const hueBarRect = this.element.getBoundingClientRect();
    this.maxPointerY = hueBarRect.height - this.pointer.getBoundingClientRect().height;

    this.pointerY = 0;
    this.pointer.style.top = `${this.pointerY}px`;
    
    this.element.addEventListener('mousedown', this.handleOnPointerDown);
    this.element.addEventListener('mouseup', this.handleOnPointerUp);
    this.element.addEventListener('mouseleave', this.handleOnPointerUp);
  }

  handleOnPointerDown = (e) => {
    this.updateOnHueChange(e);
    this.element.addEventListener('mousemove', this.handleOnPointerMove);  
  };

  handleOnPointerUp = () => {
    this.element.removeEventListener('mousemove', this.handleOnPointerMove);
  }

  handleOnPointerMove = (e) => {
    this.updateOnHueChange(e);
  }

  updateOnHueChange(e) {
    const hueBarRect = this.element.getBoundingClientRect();
    this.pointerY = e.clientY - hueBarRect.top;
    if (this.pointerY > this.maxPointerY) this.pointerY = this.maxPointerY;
    this.pointer.style.top = `${this.pointerY}px`;

    const RGBHexString = this.getRGBHexString();
    this.update(RGBHexString); // Observable.update()
  }

  getRGBHexString() {
    const RGBHexString = getRGBHexFromHue(this.pointerY / this.maxPointerY * 100);
    return RGBHexString;
  }
}

export { HueBar };
