var textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    if (event.key.match(/^[a-z]$/i)) {
        var letter = event.key.toLowerCase();
        if (document.activeElement === textarea) 
        {
            textarea.value += letter;
        } 
        else 
        {
            textarea.value += letter;
        }
    }
}
);
