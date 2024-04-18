$(document).ready(function() {
    var pieces = [];

    // Générer un tableau d'index pour mélanger les pièces
    var indexes = [];
    for (var i = 1; i <= 8; i++) {
        indexes.push(i);
    }
    shuffleArray(indexes);

    // Créer les pièces du puzzle et les ajouter au conteneur
    for (var i = 0; i < 8; i++) {
        var index = indexes[i];
        var $piece = $('<div class="puzzle-piece"></div>');
        $piece.css('background-image', 'url("logo' + index + '.png")');
        pieces.push($piece);
        $('#puzzle-container').append($piece);
    }

    // Mélanger les pièces du puzzle
    shuffleArray(pieces);

    // Ajouter les pièces mélangées au conteneur
    for (var i = 0; i < 8; i++) {
        $('#puzzle-container').append(pieces[i]);
    }

    // Mélanger un tableau
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
});
