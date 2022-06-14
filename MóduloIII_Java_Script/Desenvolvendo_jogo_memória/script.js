const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return; // se o tabuleiro está fechado, ele não deixa prosseguir com o resto do código
    if(this === firstCard) return; // para garantir que nada acontecerá se clilcarmos duas vezes na mesma carta.

    this.classList.add('flip'); // o "this" vai ser a carta que eu estou clicando naquele momento
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards(){ // vai tirar o evento listener daquela carta e desabilitar, ou seja, não conseguiremos mexer naquela carta.
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 16);  // math.floor arredonda os números quebrados de 1 a 16 do math.random
        card.style.order = randomPosition;
    })
})(); // função auto-invocável

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})

