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
const btnDel = document.querySelector("#btn-del");


// dictionary
let dictionaryList = [];

if(localStorage.getItem('word')){
    dictionaryList = JSON.parse(localStorage.getItem('word'));
    displayMessageWord();
};

function addWordInPage (){
    let newWord = {        //  cоздаєм масив який буде зберігати дані останього ввода
        word: inputWord.value,
        translate: inputTranslate.value,
        delete: false, // удалять слово (доробить)
        checked: false,
    }; 
    dictionaryList.push(newWord); // додаєм обєкт методом push в масив
    displayMessageWord(); // визиваєм функцію кожен раз коли добавляєм нове слово 

    localStorage.setItem('word', JSON.stringify(dictionaryList)); // сохраняєм все на сторінкі
    // localStorage використовується для зберігання данних але тільки строкових
    // setItem властивість localStorage яка створює нове значення в ньому з заданним іменем
    // JSON.stringify  цей метод верне строку в JSON форматі


};

function displayMessageWord(){ // виводим верстку на екран

    dictionaryList.forEach(function(item, index){
        displayMessage += `
        <div class="card-result">
            <div class="card-word">${item.word}</div>
            <div class="card-translate">${item.translate}</div>

            <button class="btn btn-del">Delete</button>
        </div>`
        output.innerHTML = displayMessage;
        console.log(output)
    })
};
function deleteMessage(event){
    const target = event.target;


};


output.addEventListener('change',  function(event){
    let idInput = event.target.getAttribute('id');
    let forWord =  output.querySelector('[for = ' + idInput +']')
})

// сохраняєм все на сторінкі

btnSend.addEventListener('click', addWordInPage);

