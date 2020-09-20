function restartGame() {
  let boxes = document.querySelectorAll("#game-area > .box");

  boxes.forEach((box) => (box.innerHTML = ""));
}

export { restartGame };
