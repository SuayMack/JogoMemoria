//constante referente a todas as cartas
const cards = document.querySelectorAll('.card')

function flipCard() {
    //adiciona e tira a classe flip ao elemento clicado
    this.classList.toggle('flip')
}

//para cada carta do nosso forEach, 
cards.forEach((card) => {
    //para cada card clicado acionar a função flipCard

})