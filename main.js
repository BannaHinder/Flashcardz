const cards = [];

const form = document.getElementById('form');
const inputFieldFront = document.getElementById('inputfield-front');
const inputFieldBack = document.getElementById('inputfield-back');
const buttonSave = document.getElementById('button-save');
const containerCards = document.getElementById('container-cards');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    drawCard();
})

function drawCard(){
    const article = `<article class="card">
    <p>${inputFieldFront.value}</p>
    <p>${inputFieldBack.value}</p>
    <button>Vänd kort</button>
    </article>`
    containerCards.innerHTML += article;
}