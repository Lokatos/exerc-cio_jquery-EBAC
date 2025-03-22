$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        const novaTarefa = $('#add-tarefa').val().trim();
        
        if (novaTarefa === '') { 
            $('#add-tarefa').addClass('erro');
            return;
        }

        $('#add-tarefa').removeClass('erro');

        const novoItem = $('<li></li>');
        const novoInput = $('<input type="radio">');
        const novaLabel = $('<label></label>').text(novaTarefa);
        const botaoDeletar = $('<button class="botao-deletar">X</button>');

        const idUnico = 'tarefa-' + Math.random().toString(36).slice(2, 9);
        novoInput.attr('id', idUnico);
        novaLabel.attr('for', idUnico);

        novoItem.append(novoInput, novaLabel, botaoDeletar);
        $('#lista-tarefas').append(novoItem);
        $('#add-tarefa').val('');

        // Evento para remover a tarefa ao clicar no botão de deletar
        botaoDeletar.on('click', function () {
            $(this).parent().remove();
        });

        // Evento para riscar a tarefa ao clicar no nome ou na bolinha
        novaLabel.on('click', function () {
            $(this).toggleClass('tarefa-concluida');
        });

        // Permitir que o clique no input também risque o texto
        novoInput.on('change', function () {
            $(this).next('label').toggleClass('tarefa-concluida');
        });
    });

    $('form').on('reset', function () {
        $('#add-tarefa').removeClass('erro');
    });
});
