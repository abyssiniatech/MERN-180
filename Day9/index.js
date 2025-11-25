// // 1. getElementbyId
// const list1=document.getElementById('li1')
//  console.log(list1);
// // 2.getElementByTagname
// const list2=document.getElementsByTagName('li')
// console.log(list2)

// // 3. getElementbyClassname
// const list3=document.getElementsByClassName('item[1]')
//   console.log(list3)
// // 4. querySelector
// const list4=document.querySelector('.item')
// console.log(list4)
// // 5. querySelectorAll
// const list5=document.querySelectorAll('.item')
// console.log(list5);


// // the second topic is 


// traversal 
const main=document.querySelector('#traversal');
const header=document.querySelector('#header');
const ul=document.querySelector('#ul');
const temp =document.querySelector('#temp');
temp.textContent ="Welcome" // 
temp.style.color='red'
// changing text content
// temp.remove(); // removing element
// styling through traversal
// in traversal we can access parent ,child and sibling elements
// in js dom you can access parent element by parentElement property
header.style.color='blue';
main.style.backgroundColor='lightgrey';
console.log(main.parentElement); // parent
console.log(main.parentElement.parentElement); // grandparent
console.log(header.nextElementSibling); // next 
console.log(header.parentElement); // header's parent
console.log(header.children) // header's children
console.log(ul.firstChild) // ul first child



// ul 
// console.log(ul).lastElementChild.style.color='red' // last element child
// console.log(ul).firstElementChild.style.color='green' // first element child
const firstChild = ul.firstElementChild;
const lastChild = ul.lastElementChild;
const secondElement = firstChild.nextElementSibling;
const thirdElement = secondElement.nextElementSibling;
const fourthElement = thirdElement.nextElementSibling;
const parentElement = ul.parentElement;
parentElement.style.backgroundColor = "skyblue";
firstChild.style.color = "green";
lastChild.style.color = "violet";
secondElement.style.color = "blue";
thirdElement.style.color = "orange";
fourthElement.style.color = "red";



// reading and updating content
const ul2 =document.querySelector('#ul2');
const firstEl=ul2.firstElementChild;
const secondEl=firstEl.nextElementSibling;
const thirdEl=secondEl.nextElementSibling;
thirdEl.innerText='Changed content'; // updating content
firstEl.textContent='Updated content'; // updating constcontent
secondEl.innerHTML='<b>new content</b> '; // updating content
console.log(ul2.innerHTML); // reading content



// set and get attributes
const mains=document.querySelector('#attributes');
const ul3=document.querySelector('#ul3');
const title=document.querySelector('#title');
title.setAttribute('class','bg-teal-100'); // setting attribute
title.setAttribute('style','color:purple; font-size:20px;'); // setting style attribute
   

// getting attribute
const ulClass=ul3.getAttribute('class');
console.log(ulClass); 





// checking attribute
const hasClass=ul3.hasAttribute('class');
console.log(hasClass); // true
const hasId=ul3.hasAttribute('id');
console.log(hasId); // true
const hasStyle=ul3.hasAttribute('style');
console.log(hasStyle); // false
// removing attribute
ul3.removeAttribute('class'); // removing class attribute


// verifying removal
const hasClassAfterRemoval=ul3.hasAttribute('class');
console.log(hasClassAfterRemoval); // false
title.removeAttribute('style'); // removing style attribute
const hasStyleAfterRemoval=title.hasAttribute('style');
console.log(hasStyleAfterRemoval); // false
title.style.color='black'; // changing color after removing style attribute
title.style.fontSize='16px'; // changing font size after removing style attribute
// const ulClassAfterRemoval=ul3.hasAttribute()
// console.log(ulClassAfterRemoval); // false


// creating and appending elements
    const header1=document.querySelector("#header1");
    const ul4 =document.querySelector("#ul4");
    const nodes =document.querySelector("#nodes");
    console.log(nodes);
    // creating elements
const newDiv=document.createElement('div');
newDiv.setAttribute('class','m-5 p-5 bg-green-100 rounded shadow-lg');
const newH2=document.createElement('h2');
newH2.setAttribute('class','text-2xl text-center text-green-700');
newH2.textContent='Dynamically Created Section';
const newUl=document.createElement('ul');
newUl.setAttribute('class','list-disc m-5 p-5 text-left');
const newLi1=document.createElement('li');
newLi1.setAttribute('class','item');
newUl.append( newLi1)
newLi1.textContent='Dynamically Created Item 1';
const newLi2=document.createElement('li');
newLi2.setAttribute('class','item');
newLi2.textContent='Dynamically Created Item 2';
newUl.append(newLi2);
const newLi3=document.createElement('li');
newLi3.setAttribute('class','item');
newLi3.textContent='Dynamically Created Item 3';
newUl.append(newLi3);
// appending elements
newDiv.append(newH2);
newDiv.append(newUl);
nodes.append(newDiv);



// creating another element to demonstrate removeChild and replaceChild
const newDiv1=document.createElement("div");
newDiv1.setAttribute("class", "m-5 p-5 bg-purple-100 rounded shadow-lg");
const header3=document.createElement("h2");
header3.setAttribute("class", "text-2xl text-center text-purple-700");
header3.textContent = "Another Dynamically Created Section";
const para=document.createElement("p");
para.setAttribute("class", "m-5 p-5 text-left");
para.textContent = "these is daynamic contents";
const ul5=document.createElement("ul");
ul5.setAttribute("class", "list-disc m-5 p-5 text-left");
const liA=document.createElement("li");
liA.setAttribute("class", "item");
liA.textContent = "Dynamic Item A";
const liB=document.createElement("li");
liB.setAttribute("class", "item");
liB.textContent = "Dynamic Item B";
ul5.append(liA);
ul5.append(liB);
newDiv1.append(header3);
newDiv1.append(para);
newDiv1.append(ul5);
nodes.append(newDiv1);



// removing child element
newDiv1.removeChild(para); // removing paragraph element
// newDiv1.removeChild(ul5); // removing ul element




// event handling
const eventHandling =document.querySelector('#eventHandling');
const btn=document.querySelector('#btn');
const ul6 =document.querySelector('#ul6');
const item=document.querySelectorAll('.item');

// click event

function handleClick(){
btn.addEventListener('click',function(){
    const newLi=document.createElement('li');
    newLi.setAttribute('class','item');
    newLi.textContent='New Item Added';
    ul6.append(newLi);
});


}
handleClick();

// mouseover event
btn.addEventListener('mouseover',function(){

    btn.style.backgroundColor='lightblue';
});
// mouseout event
btn.addEventListener('mouseout',function(){
    btn.style.backgroundColor='white';
});
// keydown event
document.addEventListener('keydown',function(event){
    console.log('Key pressed:',event.key);
});
// keyup event
document.addEventListener('keyup',function(event){
    console.log('Key released:',event.key);
});
// input event
