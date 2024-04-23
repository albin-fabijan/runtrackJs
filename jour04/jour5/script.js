const fs = require('fs');

// Charger le fichier JSON
const filePath = 'data.json';
const rawData = fs.readFileSync(filePath);
let data = JSON.parse(rawData);

// Modifier les données
data.key = 'nouvelle valeur';

// Écrire les modifications dans le fichier JSON
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
