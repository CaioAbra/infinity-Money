// jQuery para controlar a exibição da sidebar e alternar os ícones
$('#sidebarToggle').on('click', function () {
    $('#sidebar').toggleClass('active');
    $(this).css('opacity', '0');  // Alterna os ícones
    $('.navbar-brand').css('opacity', '0');  // Alterna os ícones
});

$('#sidebarClose').on('click', function () {
    $('#sidebar').removeClass('active');
    $('#sidebarToggle').find('i').removeClass('fa-times').addClass('fa-th-large');  // Volta o ícone de toggle

    $('#sidebarToggle').css('opacity', '1');
    $('.navbar-brand').css('opacity', '1');
});


// Função para alternar entre as fases com temporizadores
function iniciarFases() {
    // Exibir fase 1
    $('#fase1').show();
    setTimeout(function () {
        $('#fase1').hide(); // Esconde fase 1
        $('#fase2').show(); // Exibe fase 2
    }, 3000); // Fica 3 segundos na fase 1

    setTimeout(function () {
        $('#fase2').hide(); // Esconde fase 2
        $('#fase3').show(); // Exibe fase 3
    }, 6000); // 3 segundos depois da fase 2

    // setTimeout(function () {
    //     $('#fase3').hide(); // Esconde fase 3
    //     $('#fase4').show(); // Exibe fase 4
    // }, 9000); // 3 segundos depois da fase 3
}

// Iniciar fases assim que a página carregar
$(document).ready(function () {
    iniciarFases();
});

$(document).ready(function () {
    $('.btn-open').on('click', function () {
        var atlasContainer = $('#atlasContainer');
        var isHidden = atlasContainer.is(':hidden');

        // Alternar entre abrir e fechar
        if (isHidden) {
            atlasContainer.slideDown(); // Exibe a imagem do gráfico
            $(this).text('Fechar'); // Muda o texto do botão para "Fechar"
        } else {
            atlasContainer.slideUp(); // Esconde a imagem do gráfico
            $(this).text('Abrir Atlas'); // Muda o texto do botão de volta para "Abrir Atlas"
        }
    });
});
