// inports
import * as gameArea from "./modules/play-area.js";
import * as fillBox from "./modules/fill-box.js";
import * as highlightPlayer from "./modules/highlight-player.js";
import * as checkWinner from "./modules/check-winner.js";
import * as winnerBanner from "./modules/winner-banner.js";
import * as score from "./modules/score.js";
import * as restart from "./modules/restart.js";
import * as color from "./modules/color.js";

function playingNotPossible() {
  if (window.innerWidth < 1200) {
    document.body.innerHTML = `
    <div id="not-available">
      <h2>Notice! <br> This game is a demo of JavaScript code and does not focus on CSS. To play it, please, open it on a pc or mac.</h2>
    </div>`;
    return;
  }
}

function init() {
  if (window.innerWidth < 1200) {
    playingNotPossible();
    return;
  }
  // 'true' means that it's the playerX turn to play
  let playerX = true;

  // create the squared of the playing area
  gameArea.createGameArea();

  // hightlight playerX when game starts
  (() => {
    document.querySelector("#player-x > h3").style.background = "lightpink";
  })();

  // highlight the next player when playing area is clicked
  highlightPlayer.highlightCurrentPlayer(playerX);

  // fill the playing area with X/O on click
  fillBox.fillBoxes(playerX);

  color.changeLetterColor();
  color.changeBoxColorOnHover();

  // check winner
  checkWinner.checkWinner(
    // check wether player wins
    winnerBanner.displayWinnerBanner,
    // add score
    score.addScore,
    // restart game
    restart.restartGame
  );
}

init();
