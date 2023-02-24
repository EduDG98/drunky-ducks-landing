import getAllCocktails from "./js/cocktails";

import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const quotesArray = [
  "\"Después de tragos y fiesta, mira bien con quien te acuestas.\" <br>Anónimo",
  "\"Bebo para olvidar que soy un borracho.” <br>Antonine de Saint-Exupery",
  "\"Yo no tengo problemas con la bebida, excepto cuando no puedo servirme una\". <br>Tom Waits",
];

const phraseContainer = document.getElementsByClassName("random-quotes")[0];

phraseContainer.innerHTML =
  quotesArray[Math.floor(Math.random() * quotesArray.length)];
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

/*    Introduce JSON data cocktails in carrousel */
const putCoctailksSwiper = async() => {
  const cocktails = await getAllCocktails();

  for (const cocktail of cocktails.drinks) {
    const swiperWrapper = document.querySelector(".swiper-wrapper");

    //  Slider
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

    // Content container
    const swiperSlideContent = document.createElement("div");
    swiperSlideContent.classList.add("swiper-slide-content");

    //  Image div
    const imageCocktail = document.createElement("img");
    imageCocktail.classList.add("cocktail-img");
    imageCocktail.src = cocktail.strDrinkThumb;

    //  Details div
    const detailCocktail = document.createElement("div");
    detailCocktail.classList.add("details-cocktail");

    const cocktailName = document.createElement("h1");
    cocktailName.textContent = cocktail.strDrink;

    const cocktailCategory = document.createElement("h3");
    cocktailCategory.textContent = cocktail.strAlcoholic;

    const cocktailIngredients = document.createElement("ul");

    for (const props in cocktail.strIngredients) {
      const ingredient = document.createElement("li");

      if (cocktail.strMeasures[props]) {
        ingredient.textContent = `${cocktail.strIngredients[props]} - ${cocktail.strMeasures[props]}`;
      } else {
        ingredient.textContent = cocktail.strIngredients[props];
      }

      cocktailIngredients.appendChild(ingredient);
    }

    detailCocktail.appendChild(cocktailName);
    detailCocktail.appendChild(cocktailCategory);
    detailCocktail.appendChild(cocktailIngredients);

    // Introduce elements in slider
    swiperSlideContent.appendChild(detailCocktail);
    swiperSlideContent.appendChild(imageCocktail);

    //  Introduce content in slide
    swiperSlide.appendChild(swiperSlideContent);

    // Introduce slide in wrapper
    swiperWrapper.appendChild(swiperSlide);
  }
};

putCoctailksSwiper();

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
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.on();

const btnE1 = document.getElementById("btn");
btnE1.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnE1.offsetLeft;
  const y = event.pageY - btnE1.offsetTop;
  btnE1.style.setProperty("--x-pos", x + "px");
  btnE1.style.setProperty("--y-pos", y + "px");
});
