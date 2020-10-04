//constante referente a todas as cartas
const cards = document.querySelectorAll('.card')
let hasFlipedCard = false
let firstCard, secondCard

function flipCard() {
    //adiciona e tira a classe flip ao elemento clicado
    this.classList.addEventListener('flip')
    //se o hasFlipedCard for false
    if(!hasFlipedCard) {
        //setar o hasFlipedCard para true
        hasFlipedCard = true
        //esta é a a primeira carta
        firstCard = this
        return 
    }
    //esta é a segunda
    secondCard = this
    check
}

//para cada carta do nosso forEach, 
cards.forEach((card) => {
    //para cada card clicado acionar a função flipCard
    card.addEventListener('click', flipCard)
})