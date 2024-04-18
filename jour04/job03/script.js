
function fetchJSONData(callback) 
{
    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => callback(data));
}

function filtrerDonnees() 
{
    var filterForm = document.getElementById('filter-form');
    var formData = new FormData(filterForm);

    fetchJSONData(function(data) 
    {
        var id = formData.get('id');
        var nom = formData.get('nom');
        var type = formData.get('type');

        var resultats = data.filter(function(element) 
        {
            return (!id || element.id == id) &&
                   (!nom || (element.name.english.toLowerCase().includes(nom.toLowerCase()) || element.name.french.toLowerCase().includes(nom.toLowerCase()))) &&
                   (!type || element.type.includes(type));
        }
        );

        afficherResultats(resultats);
    }
    );
}

function afficherResultats(resultats) {
    var container = document.getElementById('resultats');
    container.innerHTML = '';

    if (resultats.length === 0) {
        container.textContent = "Aucun résultat trouvé.";
    } else {
        resultats.forEach(function(element) {
            var p = document.createElement('p');
            p.textContent = "ID: " + element.id + ", Nom: " + element.name.french + ", Type: " + element.type.join(", ");
            container.appendChild(p);

            var stats = document.createElement('ul');
            for (var key in element.base) {
                var li = document.createElement('li');
                li.textContent = key + ": " + element.base[key];
                stats.appendChild(li);
            }
            container.appendChild(stats);
        });
    }
}

document.getElementById('filtrer').addEventListener('click', filtrerDonnees);