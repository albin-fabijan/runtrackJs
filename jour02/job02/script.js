
function showhide() {
    var article = document.getElementById("article");
    if (article.style.display === "block") {
        article.style.display = "none";
    } else {
        article.innerHTML = "<p>L'important n'est pas la chute, mais l'atterrissage.</p>";
        article.style.display = "block";
    }
}
