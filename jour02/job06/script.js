var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
var konamiIndex = 0;

function checkKonami(event) 
{
    if (event.key === konamiCode[konamiIndex]) 
    {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) 
        {
            document.body.style.backgroundColor = "#2ea3f2";
            konamiIndex = 0;
            var logo = document.createElement("img");
    
            // Spécification de la source de l'image (URL du logo)
            logo.src = "logo_laplateforme_bleu3.png"; // Remplacez "url_du_logo.png" par l'URL de votre logo
            
            // Style pour positionner l'image au milieu de la page
            logo.style.position = "fixed";
            logo.style.top = "50%";
            logo.style.left = "50%";
            logo.style.transform = "translate(-50%, -50%)";
            
            // Ajout de l'image au corps (body) du document
            document.body.appendChild(logo);
        }
    } 
    else 
    {
        konamiIndex = 0; 
    }
}

document.addEventListener("keydown", checkKonami);
