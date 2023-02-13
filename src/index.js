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
  let id = parseInt(actualElement.id);

  if (e.target.classList.contains("next")) {
    id++;
  } else {
    id--;
  }

  const newFocus = document.getElementById(id);
  newFocus.scrollIntoView({
    behavior: "smooth"
  });
  changeFocusElement(actualElement, newFocus);
}

/**
 * "When the user presses the left or right arrow key, change the focus element to the previous or next
 * element in the list."
 *
 * Now, let's add the event listener to the `<ul>` element
 * @param beforeElem - The element that currently has the focus.
 * @param afterElem - The element that will be focused after the function is called.
 */
function changeFocusElement(beforeElem, afterElem) {
  beforeElem.classList.remove("focus");
  afterElem.classList.add("focus");
}
