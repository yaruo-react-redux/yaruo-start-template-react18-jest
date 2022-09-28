import _ from 'lodash';
import './style.css';
import './style.scss';

import Yaruo from './assets/images/yaruo.png';

function component() {
  const element = document.createElement('div');

  // Lodash, now inported by this script
  element.innerHTML = _.join(['webpack', 'is working'], ' ');
  return element;
}

document.body.appendChild(component());

const image = new Image();
image.src = Yaruo;

document.body.appendChild(image);
