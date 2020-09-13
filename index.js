// Write your code here!
const main = document.querySelector('main#main');
main.parentNode.removeChild(main);
const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);