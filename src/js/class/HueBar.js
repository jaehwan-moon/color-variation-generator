import { Observable } from './Observable';
import { getRGBHexFromHue } from '../utils/getRGBHexFromHue';

class HueBar extends Observable {
  /**
   * Create HueBarPointer controller
   * @param {HTMLElement} pointerElement 
   */
  constructor(element) {
    super();

    this.element = element;
    this.pointer = document.getElementById('hue-selector');
    
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
    const maxOffsetY = hueBarRect.height - this.pointer.getBoundingClientRect().height;
    
    let offsetY = e.clientY - hueBarRect.top;
    if (offsetY > maxOffsetY) offsetY = maxOffsetY;
    this.pointer.style.top = `${offsetY}px`;

    const RGBHexString = this.getRGBHexString(offsetY);
    this.update(RGBHexString); // Observable.update()
  }

  getRGBHexString(pointerY) {
    const hueBarRect = this.element.getBoundingClientRect();
    const totalY = hueBarRect.height;

    const RGBHexString = getRGBHexFromHue(pointerY / totalY * 100);
    return RGBHexString;
  }
}

export { HueBar };
