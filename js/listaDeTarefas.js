( () => {
    const novaTarefa = document.querySelector('[data-form-button]')
    const inputTarefa = document.querySelector('[data-form-input]')

    function criarBotaoDelete(){
        const botaoDelete = document.createElement('span')
        botaoDelete.classList = "close"
        botaoDelete.innerText = "x"

        botaoDelete.addEventListener('click', deletarTarefa)

        return botaoDelete;
    }

    function criarCheckbox(){
        const checkBox = document.createElement('input')
        checkBox.setAttribute("type", "checkbox");
        checkBox.classList = "checkbox"

        checkBox.addEventListener('click', concluirTarefa)

        return checkBox;
    }

    function criarTarefa(evento){
        evento.preventDefault()

        const valorTarefa = " - " + inputTarefa.value
        const listaDeTarefas = document.querySelector('[data-task]')

        novaLabel = document.createElement('label')
        novaLabel.innerText = valorTarefa
        novaLabel.className = "form-check-label"

        novoItem = document.createElement('li')
        novoItem.appendChild(criarCheckbox())
        novoItem.appendChild(novaLabel)
        novoItem.appendChild(criarBotaoDelete())

        listaDeTarefas.appendChild(novoItem)

        inputTarefa.value = ""

    }

    function deletarTarefa(evento){
        const BotaoDeletarClicado = evento.target
        const TarefaDeletar = BotaoDeletarClicado.parentElement
        TarefaDeletar.remove()
    }

    function concluirTarefa(evento){
        const checkboxClicado = evento.target
        const TarefaConcluida = checkboxClicado.parentElement
        TarefaConcluida.classList.toggle('done')
    }

    novaTarefa.addEventListener('click', criarTarefa)
})()