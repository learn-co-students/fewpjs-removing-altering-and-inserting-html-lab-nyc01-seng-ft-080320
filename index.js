// Write your code here!

main.remove()
let newHeader = document.createElement('h1'); // creates a new h1 element 
document.body.appendChild(newHeader);   // Appends the element to the body 
newHeader.setAttribute("id", "victory")  // giving the h1 an id of victory
newHeader.innerHTML = "YOUR-NAME is the champion"  // Inserting string into that h1 HMTL element 