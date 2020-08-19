var ingles = document.getElementsByClassName("ingles")[0];
var espanhol = document.getElementsByClassName("espanhol")[0];
var frances = document.getElementsByClassName("frances")[0];
var button = document.querySelector(".button");
var link = document.querySelector(".linguaselecionada");

ingles.addEventListener("click", function() {
    if (ingles.getAttribute("class") === "ingles" && button.getAttribute("class") == "button botao") {
        espanhol.classList.remove("pais");
        frances.classList.remove("pais");
        ingles.classList.add("pais");
    } else {
        button.classList.add("botao");
        link.setAttribute("href", "ingles.html");
        espanhol.classList.remove("pais");
        frances.classList.remove("pais");
        ingles.classList.add("pais");
    }
})

espanhol.addEventListener("click", function() {
    if (espanhol.getAttribute("class") === "espanhol" && button.getAttribute("class") == "button botao") {
        ingles.classList.remove("pais");
        frances.classList.remove("pais");
        espanhol.classList.add("pais");
    } else {
        button.classList.add("botao");
        link.setAttribute("href", "espanhol.html");
        ingles.classList.remove("pais");
        frances.classList.remove("pais");
        espanhol.classList.add("pais");
    }
})

frances.addEventListener("click", function() {
    if (frances.getAttribute("class") === "frances" && button.getAttribute("class") == "button botao") {
        espanhol.classList.remove("pais");
        ingles.classList.remove("pais");
        frances.classList.add("pais");
    } else {
        button.classList.add("botao");
        link.setAttribute("href", "frances.html");
        espanhol.classList.remove("pais");
        ingles.classList.remove("pais");
        frances.classList.add("pais");
    }
})