import { Observable } from './Observable';

class HueBar extends Observable {
  /**
   * Create HueBarPointer controller
   * @param {HTMLElement} pointerElement 
   */
  constructor(element) {
    super();

    this.element = element;
    this.pointer = document.getElementById('hue-selector');
    
    this.element.addEventListener('mouseup', this.handleOnPointerUp);
    this.element.addEventListener('mousedown', this.handleOnPointerDown);
    this.element.addEventListener('mouseleave', this.handleOnPointerUp);
  }

  handleOnPointerDown = (e) => {
    const hueBarRect = this.element.getBoundingClientRect()
    let offsetY = e.clientY - hueBarRect.top;
    if (offsetY > hueBarRect.height - this.pointer.getBoundingClientRect().height) offsetY = hueBarRect.height - this.pointer.getBoundingClientRect().height;
    this.pointer.style.top = `${offsetY}px`;
    this.element.addEventListener('mousemove', this.handleOnPointerMove);  
  };

  handleOnPointerUp = () => {
    this.element.removeEventListener('mousemove', this.handleOnPointerMove);
  }

  handleOnPointerMove = (e) => {
    const hueBarRect = this.element.getBoundingClientRect()
    let offsetY = e.clientY - hueBarRect.top;
    if (offsetY > hueBarRect.height - this.pointer.getBoundingClientRect().height) offsetY = hueBarRect.height - this.pointer.getBoundingClientRect().height;
    this.pointer.style.top = `${offsetY}px`;
  }  
}

export { HueBar };
