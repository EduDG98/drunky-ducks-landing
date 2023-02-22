let quotesArray = [
    'Después de tragos y fiesta, mira bien con quien te acuestas.',
    'El borracho valiente, se pasa del vino al aguardiente.',
    'Yo no tengo problemas con la bebida, excepto cuando no puedo servirme una'
]

let phraseContainer = document.getElementsByClassName('random-quotes')[0]

phraseContainer.innerHTML = quotesArray[Math.floor(Math.random()*quotesArray.length)];


let buttons = document.querySelectorAll('.button')

for (let button of buttons) {
    button.addEventListener('click', (event) => {
        let choose = event.target.classList[1]
        let modal = document.querySelector('.modal')

        if (choose === 'overage') {
            modal.style.display = 'none'
        } else {
            location.replace('https://www.google.com/')
        }
    })
}