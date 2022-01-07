// Aggancio con il DOM
hookHtml = document.querySelector(".hook-js");

let starIndex = 5;
for (let k = 0; k < 1; k++) {
  for (let j = 0; j < 11; j++) {
    let box = document.createElement("div");
    box.classList.add("box-style");
    hookHtml.append(box);
    if (j === starIndex) {
      // Dichiaro boxInside, creando un elemento
      let boxInside = document.createElement("div");
      boxInside.classList.add("star-box");
      // Lo stampo dentro il box principale
      box.append(boxInside);
    }
  }
}

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
      // Dichiaro boxInside, creando un elemento
      let boxInside = document.createElement("div");
      boxInside.classList.add("balls-box"); 
      // Lo stampo dentro il box principale
      box.append(boxInside);
    }
  }
  // Decrementa l'indice startIndex
  startIndex--;
  // Incrementa l'indice endIndex
  endIndex++;
}
// Ciclo per generare il tronco
// Dichiaro brownIndex = 5
let brownIndex = 5;
for (let k = 0; k < 2; k++) {
  for (let j = 0; j < 11; j++) {
    let box = document.createElement("div");
    box.classList.add("box-style");
    hookHtml.append(box);
    if (j === brownIndex) {
      box.classList.add("trunk");
    }
  }
}
