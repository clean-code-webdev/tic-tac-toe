function displayWinnerBanner(player) {
  let winnerDisplay = document.createElement("div");
  winnerDisplay.id = "winner-display";

  if (player === "X" || player === "O") {
    winnerDisplay.innerHTML = `
    <h3>player <br> <span id="player">${player}</span> <br> wins!</h3>
    `;
  } else {
    winnerDisplay.innerHTML = `
    <h3>it's a draw!</h3>
    `;
  }

  document.body.append(winnerDisplay);
}

export { displayWinnerBanner };
