function addScore(player) {
  let score = document.querySelector(`#player-${player.toLowerCase()}-score`);

  score.innerHTML = parseInt(score.innerHTML) + 1;
}

export { addScore };
