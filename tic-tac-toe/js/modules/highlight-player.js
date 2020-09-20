function highlightCurrentPlayer(playerX) {
  let boxes = document.querySelectorAll(".box");
  let xPlayer = document.querySelector("#player-x > h3");
  let oPlayer = document.querySelector("#player-o > h3");

  boxes.forEach((box) =>
    box.addEventListener("click", () => {
      if (playerX) {
        if (box.innerText === "") {
          highlightPlayer(false, oPlayer, xPlayer);
          return;
        }
      }
      if (box.innerHTML === "") {
        highlightPlayer(true, xPlayer, oPlayer);
      }

      // highlight next player when boxes are clicked
      function highlightPlayer(a, b, c) {
        playerX = a;
        b.style.background = "lightpink";
        c.style.background = "none";
      }
    })
  );
}

export { highlightCurrentPlayer };

// editting starts here .....................
