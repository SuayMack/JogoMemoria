//constante referente a todas as cartas
const cards = document.querySelectorAll('.card')
let hasFlipedCard = false
let firstCard, secondCard
let lockBoard = false//travar o tabuleiro

function flipCard() {
    if (lockBoard)return
    //Se clicarmos duas vezes na nossa propria carta, não acontece nada
    if(this === firstCard) return
    //adiciona e tira a classe flip ao elemento clicado
    this.classList.add('flip')
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
    hasFlipedCard = false
    checkForMatch()
}

//verifica se as cartas são iguais
function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards()//deixa as cartas viradas
        return
    }
    unflipCards()
}

//desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    //resetar o tabuleiro
    resetBoard()
}

//Fazer as cartas virarem novamente
function unflipCards() {
    lockBoard = true

    //função de intervalo
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        //resetamos o tabuleiro
        resetBoard()
    }, 1000)//tempo para a carta errada virar
}

//Função para resetar o tabuleiro
function resetBoard() {
    //pego os arrays hasFlipedCard e lockBoard e transformo o primeiro(0),
    // índice do array de cada um falso
    [hasFlipedCard, lockBoard] = [false, false]
    //o mesmo para a firstCard e secondCard só que null
    [firstCard, secondCard] = [null, null]

}

// o atributo order do css é referente ao numero por ordem de cada div,
//aqui no caso elas são flex, ela pode mudar  a ordem das divs
//vamos mexer com a ordem dessas divis
//função para embaralhar as cartas
(function shuffle() {
    //Para cada carta
    cards.forEach((card) => {
        //variavel para a função random com Math.floor para arredondar(deixar inteiro)
        let randomPosition = Math.floor(Math.random() * 12)
        //pegamos a propriedade order do css e mudamos sempre que começar a posição
        card.style.order =  randomPosition
    })
})()//Immediately invoked Function expression

//para cada carta do nosso forEach, 
cards.forEach((card) => {
    //para cada card clicado acionar a função flipCard
    card.addEventListener('click', flipCard)
})