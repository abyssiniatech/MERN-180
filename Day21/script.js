const container=document.getElementById("con");
// create element
const newElement=document.createElement("h1");
newElement.setAttribute("id","header")
newElement.style.color="teal"
newElement.style.fontSize="3em"
newElement.style.fontStyle="bold"
newElement.textContent="My website";
container.appendChild(
  newElement);
console.dir(container)


// text content in js
const title=document.createElement("hi")
title.setAttribute("id","title")
title.style.color="pink"
title.style.fontSize="2em"
 title.textContent="Welcome to channel"
container.appendChild(title)