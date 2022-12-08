const box = document.createElement("div")
box.classList.add("carre")




// add event when you press a key
window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
// define the case
switch (event.key) {
    // create a block
    case "Down": // IE/Edge specific value
    case "ArrowDown":
    case "Right": // IE/Edge specific value
    case "ArrowRight":
        const newbox = box.cloneNode()
        board.appendChild(newbox)
        this.
        break;

    // remove a block
    case "Up": // IE/Edge specific value
    case "ArrowUp":
    case "Left": // IE/Edge specific value
    case "ArrowLeft":

    //ça marche pas pour l'instant
        const rembox = box.remove()
        board.removeChild(rembox)
        break;

    default:
        return; // Quit when this doesn't handle the key event.
  }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);