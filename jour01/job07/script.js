// script.js

function jourTravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth()+1;
    var annee = date.getFullYear();

    var joursFeries = [
        new Date(annee, 0, 1),  
        new Date(annee, 3, 8),  
        new Date(annee, 3, 10), 
        new Date(annee, 4, 1),  
        new Date(annee, 4, 8),  
        new Date(annee, 4, 30), 
        new Date(annee, 5, 10), 
        new Date(annee, 6, 14), 
        new Date(annee, 7, 15), 
        new Date(annee, 10, 1), 
        new Date(annee, 10, 11),
        new Date(annee, 11, 25) 
    ];

    for (var i = 0; i < joursFeries.length; i++) {
        if (joursFeries[i].getDate() === jour && joursFeries[i].getMonth() === mois) {
            console.log("Le " + jour + "/" + (mois + 1) + "/" + annee + " est un jour férié.");
            return; 
        }
    }

    if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, le " + jour + "/" + (mois + 1) + "/" + annee + " est un week-end.");
    } else {
        console.log("Oui, le " + jour + "/" + (mois + 1) + "/" + annee + " est un jour travaillé.");
    }
}

var dateTest = new Date(2024, 1, 1); //1 janvier 2024
jourTravaille(dateTest);
