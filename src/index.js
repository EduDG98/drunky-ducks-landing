import getAllCocktails from "./js/cocktails";

const quotesArray = [
  "Después de tragos y fiesta, mira bien con quien te acuestas.",
  "El borracho valiente, se pasa del vino al aguardiente.",
  "Yo no tengo problemas con la bebida, excepto cuando no puedo servirme una"
];

const phraseContainer = document.getElementsByClassName("random-quotes")[0];

phraseContainer.innerHTML = quotesArray[Math.floor(Math.random() * quotesArray.length)];

const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
  button.addEventListener("click", (event) => {
    const choose = event.target.classList[1];
    const modal = document.querySelector(".modal");

    if (choose === "overage") {
      modal.style.display = "none";
    } else {
      location.replace("https://www.google.com/");
    }
  });
}

const datos = await getAllCocktails();

console.log(datos);
