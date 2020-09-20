function createGameArea() {
  let gameArea = document.querySelector("#game-area");

  for (let i = 1; i <= 9; i++) {
    gameArea.innerHTML += `<div class="box" id="box-${i}"></div>`;
  }
}

export { createGameArea };
