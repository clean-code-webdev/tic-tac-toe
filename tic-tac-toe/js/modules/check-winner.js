function checkWinner(displayWinnerBanner, addScore, restart) {
  const box1 = document.querySelector("#box-1"),
    box2 = document.querySelector("#box-2"),
    box3 = document.querySelector("#box-3"),
    box4 = document.querySelector("#box-4"),
    box5 = document.querySelector("#box-5"),
    box6 = document.querySelector("#box-6"),
    box7 = document.querySelector("#box-7"),
    box8 = document.querySelector("#box-8"),
    box9 = document.querySelector("#box-9");

  let boxes = document.querySelectorAll(".box");

  // check winner when boxes are clicked
  boxes.forEach((box) =>
    box.addEventListener("click", () => {
      // draw game
      drawGame("none");

      // horizontal X
      checkWinner(box1, box2, box3, "X");
      checkWinner(box4, box5, box6, "X");
      checkWinner(box7, box8, box9, "X");
      // vertical X
      checkWinner(box1, box4, box7, "X");
      checkWinner(box2, box5, box8, "X");
      checkWinner(box3, box6, box9, "X");
      // diagonal X
      checkWinner(box1, box5, box9, "X");
      checkWinner(box3, box5, box7, "X");
      // horizontal O
      checkWinner(box1, box2, box3, "O");
      checkWinner(box4, box5, box6, "O");
      checkWinner(box7, box8, box9, "O");
      // vertical O
      checkWinner(box1, box4, box7, "O");
      checkWinner(box2, box5, box8, "O");
      checkWinner(box3, box6, box9, "O");
      // diagonal O
      checkWinner(box1, box5, box9, "O");
      checkWinner(box3, box5, box7, "O");
    })
  );

  // set a winner
  function checkWinner(a, b, c, player) {
    if (
      a.innerHTML === player &&
      b.innerHTML === player &&
      c.innerHTML === player
    ) {
      // add score to winner
      addScore(player);
      // restart game
      setTimeout(() => {
        document.querySelector("#winner-display").remove();
        restart();
      }, 1000);

      // display banner informing who won
      displayWinnerBanner(player);
    }
  }

  // set a draw game
  function drawGame(player) {
    let boxes = document.querySelectorAll(".box");
    let counter = 0;

    boxes.forEach((box) => {
      if (box.innerHTML !== "") {
        counter++;
        if (counter === 9) {
          // restart game
          setTimeout(() => {
            document.querySelector("#winner-display").remove();
            restart();
          }, 1000);

          // display banner informing who won
          displayWinnerBanner(player);
        }
      }
    });
  }
}

export { checkWinner };
