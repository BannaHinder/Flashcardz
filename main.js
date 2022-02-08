let cards = [];
console.log(cards)
const form = document.getElementById("form");
const inputFieldFront = document.getElementById("inputfield-front");
const inputFieldBack = document.getElementById("inputfield-back");
const buttonSave = document.getElementById("button-save");
const containerCards = document.getElementById("container-cards");

loadSavedData();

function loadSavedData() {
  let savedCards = JSON.parse(localStorage.getItem("cards"));
  if (savedCards) {
    savedCards.forEach((card) => {
      drawCard(card.frontText, card.backText);

      cards.push(card);
    });
  }
}

containerCards.addEventListener("click", (e) => {
  if (e.target.classList.contains("button-flip")) {
    let parent = e.target.parentElement;
    parent.classList.toggle("card-back");
    let childrens = parent.querySelectorAll("p");
    childrens.forEach((child) => {
      child.classList.toggle("hide");
    });
  }

  if (e.target.classList.contains("button-delete")) {
    let parent = e.target.parentElement;

    cards.forEach((card, i) => {
      if (parent.firstChild.nextElementSibling.innerText === card.frontText) {
        let deletedCards = cards.splice(i, 1);
        console.log(deletedCards)
        console.log(cards)
        parent.remove();
      }
    });
    saveToLocalStorage(cards);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createCardObj();
  drawCard(inputFieldFront.value, inputFieldBack.value);
  inputFieldBack.value = "";
  inputFieldFront.value = "";
});

function createCardObj() {
  const cardObj = {
    frontText: inputFieldFront.value,
    backText: inputFieldBack.value,
    front: true,
  };
  cards.push(cardObj);
  saveToLocalStorage(cards);
}

function saveToLocalStorage(arr) {
  localStorage.setItem(`cards`, JSON.stringify(arr));
}

function drawCard(front, back) {
  const article = `<article class="card card-front" >
    <p id="text-front">${front}</p>
    <p id="text-back" class="hide">${back}</p>
    
    <button class="button-flip">Vänd kort</button>
    <button class="button-delete">Ta bort</button>
  
    </article>`;
  containerCards.innerHTML += article;
}
