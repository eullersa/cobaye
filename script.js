var ingles = document.getElementsByClassName("ingles")[0];
var espanhol = document.getElementsByClassName("espanhol")[0];
var frances = document.getElementsByClassName("frances")[0];
var button = document.querySelector(".button");
var link = document.querySelector(".linguaselecionada");

ingles.addEventListener("click", function() {
        ingles.classList.add("pais");
        frances.classList.remove("pais");
        espanhol.classList.remove("pais");
        button.classList.add("botao");
        link.setAttribute("href", "ingles.html");
})

espanhol.addEventListener("click", function() {
        ingles.classList.remove("pais");
        frances.classList.remove("pais");
        espanhol.classList.add("pais");
        button.classList.add("botao");
        link.setAttribute("href", "espanhol.html");
})

frances.addEventListener("click", function() {
        ingles.classList.remove("pais");
        frances.classList.add("pais");
        espanhol.classList.remove("pais");
        button.classList.add("botao");
        link.setAttribute("href", "frances.html");
})
