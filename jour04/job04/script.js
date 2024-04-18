function fetchUserData(callback) {
    fetch('utilisateurs.json')
        .then(response => response.json())
        .then(data => callback(data))
}

function updateTable() {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    fetchUserData(function(data) {
        data.forEach(function(user) {
            var row = tableBody.insertRow();
            row.insertCell(0).textContent = user.id;
            row.insertCell(1).textContent = user.nom;
            row.insertCell(2).textContent = user.prenom;
            row.insertCell(3).textContent = user.email;
        });
    });
}

document.getElementById('update').addEventListener('click', updateTable);
