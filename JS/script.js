function createBox(stampHtml) {
  let box = document.createElement("div");
  box.classList.add("box-style");
  stampHtml.append(box);
  return box;
}

hookHtml = document.querySelector(".hook-js");

let n = 6;

// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    createBox(hookHtml);
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    createBox(hookHtml).classList.add("colored");
  }
}
