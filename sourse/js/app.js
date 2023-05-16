"use strict";
// Input
const inputWord = document.querySelector("#input-word");
const inputTranslate = document.querySelector("#input-translate");

//output
const output = document.querySelector(".card-inner");
const outputWord = document.querySelector(".card-word");
const outputTranslation = document.querySelector(".card-translate");
let displayMessage = '';  // перемінна для вивода

// button 
const btnSend = document.querySelector("#button-send");

// dictionary
let dictionaryList = [];

function addWordInPage (){
    let newWord = {    
        word: inputWord.value,
        translate: inputTranslate.value,
        delete: false, 
        checked: false,
    }; 
    dictionaryList.push(newWord); 
    displayMessageWord(); 

    localStorage.setItem('dictionaryList', JSON.stringify(dictionaryList));  
    inputWord.value = "";
    inputTranslate.value = "";
};

// Перевіряємо, чи є збережені дані у локальному сховищі, та завантажуємо їх
if (localStorage.getItem('dictionaryList')) {
    dictionaryList = JSON.parse(localStorage.getItem('dictionaryList'));
    displayMessageWord(); // виводимо на сторінку збережені дані
}
// зроблено за допомого ChatGPT
function deleteElement() {
    let card = this.parentNode;
    let index = Array.prototype.indexOf.call(card.parentNode.children, card);
    dictionaryList.splice(index, 1);
    localStorage.setItem("dictionaryList", JSON.stringify(dictionaryList));
    card.remove();
}

let btnDelList = document.querySelectorAll(".btn-del");

btnDelList.forEach(function(btnDel) {
    btnDel.addEventListener("click", deleteElement);
});

function displayMessageWord(){ // виводим верстку на екран
  let displayMessage = '';
  
  dictionaryList.slice(-3).forEach(function(item){
    displayMessage += `
      <div class="card-result">
        <div class="card-word">${item.word}</div>
        <div class="card-translate">${item.translate}</div>
        <button class="btn btn-del" id="btn-del">Delete</button>
      </div>
    `;
  });
  output.innerHTML = displayMessage;
}
// сохраняєм все на сторінкі

btnSend.addEventListener('click', addWordInPage);



