const novaTarefa = document.querySelector('[data-form-button]')
const inputTarefa = document.querySelector('[data-form-input]')

function criarTarefa(evento){
    evento.preventDefault()
    //console.log(inputTarefa.value)
    const tarefa = document.querySelector('[data-task]')
    const conteudo = `<label class="form-check-label">${inputTarefa.value}</label>`
    tarefa.innerHTML = conteudo

    inputTarefa.value = " "

}

novaTarefa.addEventListener('click', criarTarefa)

