//cria uma variável para selecionar o campo com id = filtra-tabela do index.html
var campoFiltro = document.querySelector("#filtrar-tabela");

//cria um escutador que escuta o evento de digitação
campoFiltro.addEventListener("input", function () {
    //teste
    console.log(this.value);

    //array com todos os elementos do index.html com class paciente
    var pacientes = document.querySelectorAll(".paciente");

    //se o valor do input for maior que 0
    if (this.value.length > 0) {
        //para cada caracter digitado verifica cada posição na String pacientes
       for(var i = 0; i < pacientes.length; i++) {
           var paciente = pacientes[i];
           var TdNome = paciente.querySelector(".info-nome");
           var nome = TdNome.textContent;
           //variável que recebe a função de expressão regular
           var expressao = new RegExp(this.value, "i");

           if (!expressao.test(nome)) {
               //se o nome do paciente não estiver na tabela adiciona a classe invisivel que esconde os valores da tabela
               paciente.classList.add("invisivel");
           } else {
               //se não remove essa classe e deixa tudo visivel
               paciente.classList.remove("invisivel");
           }
       }
    } else {
        //se o valor do input for menor que 0 remove a classe invisivel para não deixar a tabela apagada quando der backspace
       for (var i = 0; i < pacientes.length; i++) {
           var paciente = pacientes[i];
           paciente.classList.remove("invisivel");
       }
    }
});