let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaTarefa');
let contador = 0;

function addTarefa(){
    let valorInput = input.value;
    if (valorInput !== "" && valorInput !== null && valorInput !== undefined){
        ++contador;
        let novaTarefa = `<div id="${contador}" class="item">
        <div class="item-icone" onclick="marcarTarefa(${contador})">
            <span class="material-icons">radio_button_unchecked</span>
        </div>
        <div class="item-nome" onclick="marcarTarefa(${contador})">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="deletar" onclick="deletar(${contador})">Deletar</button>
        </div>
    </div>`;
        main.innerHTML += novaTarefa;
        input.value = "";
        input.focus();
    }
}

function deletar(id){
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if (classe == "item"){
        item.classList.add('clicado');
    }else{
        item.classList.remove('clicado');
    }
}

//Acionar a função com a tecla enter
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})