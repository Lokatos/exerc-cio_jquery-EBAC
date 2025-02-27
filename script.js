$(document).ready(function () {
    // Captura o evento de envio do formulário
    $('form').on('submit', function (e) {
        e.preventDefault(); // Evita que a página recarregue ao enviar

        const novaTarefa = $('#add-tarefa').val().trim(); // Pega o valor do input e remove espaços extras
        
        if (novaTarefa === '') { 
            $('#add-tarefa').addClass('erro'); // Se estiver vazio, adiciona classe de erro (deixa a borda vermelha)
            return;
        }

        $('#add-tarefa').removeClass('erro'); // Remove a borda vermelha caso o campo esteja preenchido

        const novoItem = $('<li></li>'); // Cria um <li> para armazenar a tarefa
        const novoInput = $('<input type="radio">'); // Cria um <input> do tipo radio
        const novaLabel = $('<label></label>').text(novaTarefa); // Cria uma <label> com o nome da tarefa

        const idUnico = 'tarefa-' + Math.random().toString(36).slice(2, 9); // Gera um ID único para cada tarefa
        novoInput.attr('id', idUnico);
        novaLabel.attr('for', idUnico);

        novoItem.append(novoInput, novaLabel);
        $('#lista-tarefas').append(novoItem);
        $('#add-tarefa').val('');
    });

    $('form').on('reset', function () {
        $('#add-tarefa').removeClass('erro'); 
    });

    $(document).on('change', 'input[type="radio"]', function () {
        $(this).next('label').toggleClass('tarefa-concluida'); 
    });
});