import { HueBar } from './class/HueBar';
import { ColorPicker } from './class/ColorPicker';
import { ColorBoxes } from './class/ColorBoxes';

import '../sass/main.scss';

const hueBarElement = document.getElementById('hue-bar');
const colorPickerElement = document.getElementById('color-picker');

const hueBar = new HueBar(hueBarElement);
const colorPicker = new ColorPicker(colorPickerElement);
const colorBoxes = new ColorBoxes();

hueBar.subscribe(colorPicker.subscribeOnHueChange.bind(colorPicker));
hueBar.subscribe(colorBoxes.subscribeOnHueChange.bind(colorBoxes));
colorPicker.subscribe(colorBoxes.subscribeOnSaturationAndBrightnessChange.bind(colorBoxes));

hueBar.update(0);
