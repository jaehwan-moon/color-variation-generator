import { setColorAndText } from './setColor';

import '../sass/main.scss';

const mainColor = document.getElementById('main-color');
const lighter = document.getElementById('lighter');
const lightest = document.getElementById('lightest');
const darker = document.getElementById('darker');
const darkest = document.getElementById('darkest');

setColorAndText(mainColor, '#2578fc');
setColorAndText(lighter, '#3381ff');
setColorAndText(lightest, '#4dA6ff');
setColorAndText(darker, '#186AED');
setColorAndText(darkest, '#0B2FE0');
