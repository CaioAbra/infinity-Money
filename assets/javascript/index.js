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