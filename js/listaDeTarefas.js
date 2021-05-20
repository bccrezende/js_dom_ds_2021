const novaTarefa = document.querySelector('[data-form-button]')



function criarTarefa(evento){
    evento.preventDefault()
    //console.log(inputTarefa.value)
    const lista = document.querySelector('[data-list]')
    const inputTarefa = document.querySelector('[data-form-input]')
    const valor = inputTarefa.value
    
    const tarefa = document.createElement('li')
    const conteudo = `<label class="form-check-label"> ${valor}</label>`
    
    tarefa.innerHTML = conteudo

    tarefa.appendChild(botaoConclui())
    lista.appendChild(tarefa)

    inputTarefa.value = " "
}

function botaoConclui(){
    const botaoConclui = document.createElement('button')
    botaoConclui.classList = 'remove mdi mdi-close-circle-outline'

    botaoConclui.addEventListener('click', concluirEvento)

    return botaoConclui;
}

function concluirEvento(evento){
    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement
    console.log(tarefaCompleta)
    tarefaCompleta.classList.toggle('done')

}


novaTarefa.addEventListener('click', criarTarefa)


