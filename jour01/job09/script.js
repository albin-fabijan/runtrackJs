
function tri(numbers, order) {
    if (order === "asc") {
        for (var i = 0; i < numbers.length - 1; i++) {
            var minIndex = i;
            for (var j = i + 1; j < numbers.length; j++) {
                if (numbers[j] < numbers[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                var temp = numbers[i];
                numbers[i] = numbers[minIndex];
                numbers[minIndex] = temp;
            }
        }
    } else if (order === "desc") {
        for (var i = 0; i < numbers.length - 1; i++) {
            var maxIndex = i;
            for (var j = i + 1; j < numbers.length; j++) {
                if (numbers[j] > numbers[maxIndex]) {
                    maxIndex = j;
                }
            }
            if (maxIndex !== i) {
                var temp = numbers[i];
                numbers[i] = numbers[maxIndex];
                numbers[maxIndex] = temp;
            }
        }
    }
    return numbers;
}

var numbers = [5, 3, 8, 1, 2];
var order = "asc";
console.log("Tableau trié (ordre ascendant) : " + tri(numbers.slice(), order));

order = "desc";
console.log("Tableau trié (ordre décroissant) : " + tri(numbers.slice(), order));
