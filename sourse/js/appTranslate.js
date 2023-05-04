'use strict';
// vars 
const btnText = document.querySelectorAll(".btn-translate");
const textSk = document.querySelectorAll(".article-sk");
const textUA = document.querySelectorAll(".article-ua");


function changeParentClass (button, className){
    const parent = button.parentNode;
    parent.classList.toggle("article-text__active");
}  

btnText.forEach(button => {
    button.addEventListener('click', function(i) {
        changeParentClass(i.target);
    });
});