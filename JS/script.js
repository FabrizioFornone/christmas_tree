// Aggancio con il DOM
hookHtml = document.querySelector(".hook-js");

// Dichiaro un indice startIndex = 5
let startIndex = 5;

// Dichiaro un indice endIndex = 5
let endIndex = 5;

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 11; j++) {
    // Dichiaro box, creando un elemento
    let box = document.createElement("div");
    // Aggiungo una classe con le caratteritiche base del box
    box.classList.add("box-style");
    //stampo il box nella pagina
    hookHtml.append(box);

    if (j >= startIndex && j <= endIndex) {
      // Aggiungo una classe box colorato
      box.classList.add("colored");
    }
  }
  // Decrementa l'indice startIndex
  startIndex--;
  // Incrementa l'indice endIndex
  endIndex++;
}
