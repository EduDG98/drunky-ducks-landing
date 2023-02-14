window.onload = () => {
  const scrollButtons = document.getElementsByClassName("button");
  for (let i = 0; i < scrollButtons.length; i++) {
    scrollButtons[i].addEventListener("click", scrollWindow); // listen the click event of all button classes
  }
};

/**
 * It retrieves the current focus item, then scrolls to the next or previous item depending on the
 * button clicked
 * @param e - the event object
 */
function scrollWindow(e) {
  const actualElement = document.getElementsByClassName("focus")[0]; // retrieve the current focus item
  const totalSections = document.getElementsByClassName("section").length;
  let id = parseInt(actualElement.id);

  e.target.classList.contains("next") ? ++id : --id; // if the event element has "next" in its class increment id, otherwise decrement the id

  if (id === 1) {
    changeVisibilityComponent({
      className: "previous",
      value: "hidden"
    });
  } else if (id > 1 && id < totalSections) {
    changeVisibilityComponent({
      className: "previous",
    }, {
      className: "next",
    });
  } else {
    changeVisibilityComponent({
      className: "next",
      value: "hidden"
    });
  }

  const newFocus = document.getElementById(id);

  newFocus.scrollIntoView({
    behavior: "smooth"
  });

  changeFocusElement(actualElement, newFocus);
}

function changeFocusElement(beforeElem, afterElem) {
  beforeElem.classList.remove("focus");
  afterElem.classList.add("focus");
}

function changeVisibilityComponent(...args) {
  for (const arg of args) {
    arg.value = arg.value || "visible";
    document.getElementsByClassName(arg.className)[0].style.visibility = arg.value;
  }
}
