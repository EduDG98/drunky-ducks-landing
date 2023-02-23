let quotesArray = [
  '"Después de tragos y fiesta, mira bien con quien te acuestas." Anónimo',
  '"Bebo para olvidar que soy un borracho.” Antonine de Saint-Exupery',
  '"Yo no tengo problemas con la bebida, excepto cuando no puedo servirme una". Tom Waits',
];

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
const btnE1 = document.getElementById("btn");
btnE1.addEventListener("mouseover", (event)=> {
    const x = event.pageX - btnE1.offsetLeft;
    const y = event.pageY - btnE1.offsetTop;
    btnE1.style.setProperty ("--xPos", x + "px");
    btnE1.style.setProperty ("--yPos", y + "px");
})
