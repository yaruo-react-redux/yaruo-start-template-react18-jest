import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, now inported by this script
  element.innerHTML = _.join(['webpack', 'is working'], ' ');
  return element;
}

document.body.appendChild(component());
