const box = document.createElement("div")
box.classList.add("carre")

const board = document.querySelector("#board")

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    // ne pas oublier le retrun
    return bgColor
}

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
        newbox.style.backgroundColor = random_bg_color()
        newbox.addEventListener("click", function(){
            newbox.style.backgroundColor = "black"
        })
        break;

    // remove a block
    case "Up": // IE/Edge specific value
    case "ArrowUp":
    case "Left": // IE/Edge specific value
    case "ArrowLeft":

    // remove the last div
        board.lastChild.remove()
        break;

    default:
        return; // Quit when this doesn't handle the key event.
  }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);
