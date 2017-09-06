'use strict';

function Debug() {

}

Debug.prototype.log = function() {
  const paragraphElement = document.createElement('p');
  paragraphElement.textContent = Array.prototype.join.call(arguments, '');
  document.querySelector('.js-log').appendChild(paragraphElement);
};

window.addEventListener('load', function() {
  const logDiv = document.querySelector('.js-log');
  const heading = document.createElement('h2');

  heading.textContent = 'Log';
  logDiv.appendChild(heading);

  window.Demo = window.Demo || {};
  window.Demo.debug = window.Demo.debug || new Debug();
});