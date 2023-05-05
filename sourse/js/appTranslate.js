'use strict';
// vars 
const btnText = document.querySelectorAll(".btn-translate");



function changeParentClass (button){
    const parent = button.parentNode;
    parent.classList.toggle("article-text__active");
}  

btnText.forEach(button => {
    button.addEventListener('click', function(i) {
        changeParentClass(i.target);
    });
});