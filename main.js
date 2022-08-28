// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const getColor = (color) => {
  let currentColor = color.getAttribute("style");
  console.log(currentColor);
  document.querySelector("#current-color").setAttribute("style", currentColor);
  return currentColor;
};

document.querySelectorAll(".color").forEach((color) =>
  color.addEventListener("click", () => {
    console.log(color);
    getColor(color);
  })
);

let currentColor = getColor(document.querySelector("#current-color"));

document.querySelectorAll(".cell").forEach((div) =>
  div.addEventListener("click", () => {
    let currentColor = document
      .querySelector("#current-color")
      .getAttribute("style");
    div.setAttribute("style", currentColor);
  })
);
