window.addEventListener("scroll", function() 

{
    var footer = document.getElementById("footer");
    var scrollPercentage = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight;
    var color = "rgb(" + Math.floor(scrollPercentage * 255) + ", 100, 100)";
    footer.style.backgroundColor = color;
});
