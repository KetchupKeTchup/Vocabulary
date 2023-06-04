let dictionaryList = [];
const output = document.querySelector(".card-inner");
let displayMessage = '';  // перемінна для вивода

if (localStorage.getItem('dictionaryList')) {
    dictionaryList = JSON.parse(localStorage.getItem('dictionaryList'));
    displayMessageWord(); // виводимо на сторінку збережені дані
};

function displayMessageWord(){ // виводим верстку на екран
    let displayMessage = '';
    
    dictionaryList.forEach(function(item){
      displayMessage += `
        <div class="card-result">
          <div class="card-word">${item.word}</div>
          <div class="card-translate">${item.translate}</div>
          <button class="btn btn-del" id="btn-del">Delete</button>
        </div>
      `;
    });
    output.innerHTML = displayMessage;
};


