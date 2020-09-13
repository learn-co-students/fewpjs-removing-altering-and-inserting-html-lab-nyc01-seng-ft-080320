main.remove();

const newHeader = document.createElement('h1');
newHeader.innerHTML = "Roy is the champion!";
newHeader.id = 'victory';

const body = document.getElementsByTagName('body');

body[0].appendChild(newHeader);