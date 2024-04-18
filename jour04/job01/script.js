
function afficherExpression() {
    fetch('expression.txt')
        .then(response => response.text())
        .then(data => {
            var paragraph = document.createElement('p');
            paragraph.textContent = data;

            var expressionContainer = document.getElementById('expression-container');
            expressionContainer.innerHTML = '';
            expressionContainer.appendChild(paragraph);
        })
}

document.getElementById('button').addEventListener('click', afficherExpression);
