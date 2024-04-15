
function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estPremier(nombre1) && estPremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

var nombre1 = 20;
var nombre2 = 11;
var resultat = sommeNombresPremiers(nombre1, nombre2);
if (resultat !== false) {
    console.log("La somme des nombres premiers " + nombre1 + " et " + nombre2 + " est : " + resultat);
} else {
    console.log("Au moins l'un des nombres n'est pas premier.");
    return false;
}
