function fillBoxes(playerX) {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (playerX) {
        if (box.innerText === "") {
          box.innerHTML = "X";
          playerX = false;
          return;
        }
      }
      if (box.innerHTML === "") {
        box.innerHTML = "O";
        playerX = true;
      }
    });
  });
}

export { fillBoxes };
