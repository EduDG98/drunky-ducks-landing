import getAllCocktails from "./js/cocktails";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

/*    Introduce JSON data in carrousel */
const datos = await getAllCocktails();

console.log(datos);

/*    Function Swiper   */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  modules: [Navigation, Pagination, Autoplay],
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
