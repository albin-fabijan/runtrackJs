function jsonValueKey(jsonString, key) {
        var json = JSON.parse(jsonString); 
        if (key in json) {
            return json[key];
        }
}

function fetchJSONData(callback) {
    fetch('list.json')
        .then(response => response.text())
        .then(data => callback(data))
}

function afficherValeurCity() {
    fetchJSONData(function(jsonString) {
        var key = "city";
        var value = jsonValueKey(jsonString, key);
        console.log(value);
    });
}

document.getElementById('button').addEventListener('click', afficherValeurCity);
