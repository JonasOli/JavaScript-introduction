//variável que recebe todo o conteudo da tag table do index.html
var table = document.querySelector("table");

//adiciona um escutador de evento de duplo click
table.addEventListener("dblclick", function (event) {
    //se o evento de duplo click for identificado adiona a classe fadeout
    event.target.parentNode.classList.add("fadeOut");

    //'seta' um tempo para apagar o conteudo para ficar melhor visualmente para o usuário
    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);
});
