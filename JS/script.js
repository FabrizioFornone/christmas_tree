function createBox(stampHtml) {
  let box = document.createElement("div");
  box.classList.add("box-style");
  stampHtml.append(box);
  return box;
}

hookHtml = document.querySelector(".hook-js");

function drawTree(h) {
  for (let i = 0; i < h; i++) {
    let coloredSquare = "";
    //Cambiato in coloredSquared alto poi diminuisci
    for (let k = 1; k <= h-i; k++) {
      //shortened to one space
      coloredSquare = createBox(hookHtml);
    }
    for (let j = 0; j <= i; j++) {
      /*Spazio aggiunto quindi c'è un numero dispari
      di simboli e il colloredsquared sopra si adatta
      lo spazio*/
      coloredSquare = createBox(hookHtml);
      coloredSquare.classList.add("colored");
    }
    //Moved into the loop
    console.log(coloredSquare);
  }
}

drawTree(6);
