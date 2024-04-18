// script.js

const gameboard = document.getElementById("gameboard");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");
const tiles = document.querySelectorAll(".tile");
const emptyTile = { x: 2, y: 2 }; // Position de la case vide
let isGameWon = false;

// Initialiser la grille de jeu
function initializeGameboard() {
    tiles.forEach((tile, index) => {
        tile.style.backgroundImage = `url(logo${index + 1}.png)`;
        tile.dataset.index = index;
        tile.addEventListener("click", moveTile);
    });
}

// Déplacer une tuile lorsqu'elle est cliquée
function moveTile(event) {
    if (!isGameWon) {
        const clickedTile = event.target;
        const clickedIndex = parseInt(clickedTile.dataset.index);
        const emptyX = emptyTile.x;
        const emptyY = emptyTile.y;
        const clickedX = clickedIndex % 3;
        const clickedY = Math.floor(clickedIndex / 3);

        if ((Math.abs(emptyX - clickedX) === 1 && emptyY === clickedY) || 
            (Math.abs(emptyY - clickedY) === 1 && emptyX === clickedX)) {
            swapTiles(clickedTile, emptyTile);
            checkWinCondition();
            location.reload(); // Rafraîchir la page

        }
    }
}

// Échanger les positions de deux tuiles
function swapTiles(tile, emptyTile) {
  const tempStyle = tile.style.cssText;
  const tempIndex = tile.dataset.index;
  const emptyIndex = emptyTile.y * 3 + emptyTile.x;
  const emptyStyle = tiles[emptyIndex].style.cssText;
  
  // Supprimer toutes les tuiles de la grille
  gameboard.innerHTML = "";

  // Échanger les styles et les index des tuiles
  tile.style.cssText = emptyStyle;
  tile.dataset.index = emptyIndex;
  tiles[emptyIndex].style.cssText = tempStyle;
  tiles[emptyIndex].dataset.index = tempIndex;

  // Réinitialiser la position de la tuile vide
  emptyTile.x = parseInt(tempIndex) % 3;
  emptyTile.y = Math.floor(parseInt(tempIndex) / 3);

  // Redessiner toutes les tuiles sur la grille
  tiles.forEach((tile, index) => {
      gameboard.appendChild(tile);
  });
  
  console.log("Position de la tuile vide : ", emptyTile.x, emptyTile.y);

}


// Vérifier si le jeu est gagné
function checkWinCondition() {
    const currentTiles = Array.from(tiles).map(tile => parseInt(tile.dataset.index));
    const sortedTiles = [...currentTiles].sort((a, b) => a - b);
    const isSorted = currentTiles.every((value, index) => value === sortedTiles[index]);
    if (isSorted) {
        isGameWon = true;
        message.textContent = "Vous avez gagné!";
        restartBtn.style.display = "block";
    }
}
// Redémarrer la partie
function restartGame() {
    isGameWon = false;
    message.textContent = "";
    restartBtn.style.display = "none";
    initializeGameboard();
}

// Initialiser la grille de jeu au chargement de la page
window.addEventListener("load", initializeGameboard);
// Ajouter un écouteur d'événement sur le bouton "Recommencer"
restartBtn.addEventListener("click", restartGame);
