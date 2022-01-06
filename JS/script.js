function createBox(stampHtml) {
  let box = document.createElement("div");
  box.className = "box-style";
  stampHtml.append(box);
  return box;
}

hookHtml = document.querySelector(".hook-js");

let emptyArray = [];

for (let i = 0; i < 8; i++) {
  for (let i = 0; i < 11; i++) {
    emptyArray.push(createBox(hookHtml));
  }
}

console.log(emptyArray);
