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
            startAtomFall();
        }
    } else 
    {
        konamiIndex = 0;
    }
}

document.addEventListener("keydown", checkKonami);

function startAtomFall() 
{
    setInterval(createAtom, 1000);
}

function createAtom() {
    var atom = document.createElement("img");
    atom.src = "atome.png";
    atom.style.position = "absolute";
    atom.style.left = Math.random() * window.innerWidth + "px";
    atom.style.top = -100 + "px";
    atom.style.transform = "rotate(" + Math.random() * 360 + "deg)";

    document.body.appendChild(atom);

    var speed = 2 + Math.random() * 3;
    var interval = setInterval(
        function () 
    {
        var currentTop = parseFloat(atom.style.top);
        atom.style.top = currentTop + speed + "px";

        if (currentTop > window.innerHeight) 
        {
            clearInterval(interval);
            atom.remove();
        }
    }
    , 50);
}
