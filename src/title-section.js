function obtainRandomPhrase() {
    let quotesArray = [
        'Después de tragos y fiesta, mira bien con quien te acuestas.',
        'El borracho valiente, se pasa del vino al aguardiente.',
        'Yo no tengo problemas con la bebida, excepto cuando no puedo servirme una'
    ]

    let phraseContainer = document.getElementsByClassName('random-quotes')[0]
    
    phraseContainer.innerHTML = quotesArray[Math.floor(Math.random()*quotesArray.length)];
}

export { obtainRandomPhrase }