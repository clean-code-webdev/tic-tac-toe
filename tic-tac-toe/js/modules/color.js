function changeLetterColor() {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.innerHTML === "X") box.style.color = "red";
      if (box.innerHTML === "O") box.style.color = "blue";
    });
  });
}

function changeBoxColorOnHover() {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      if (box.innerHTML === "") box.style.background = "lightpink";
    });
    box.addEventListener("mouseleave", () => {
      box.style.background = "#f1f1f1";
    });
  });
}

export { changeLetterColor, changeBoxColorOnHover };
