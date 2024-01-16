$(document).ready(function() {
    // Adicionei este script para exibir/ocultar o menu mobile
    $('[data-toggle="collapse"]').on('click', function() {
        $('.navbar-nav').toggleClass('navbar-nav-mobile');
    });

    // Ativar o Slick Carousel para telas menores que 768px
    $('.tipos-vidro-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // Fecha a navbar ao clicar em um link no modo mobile
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Verifica o tamanho da janela ao carregar a página e redimensionar
    checkWindowSize();

    $(window).resize(checkWindowSize);

    function checkWindowSize() {
        // Adiciona ou remove a classe navbar-nav-mobile com base na largura da janela
        if ($(window).width() < 1400) {
            $('.navbar-nav').addClass('navbar-nav-mobile');
        } else {
            $('.navbar-nav').removeClass('navbar-nav-mobile');
        }
    }
});
$(document).ready(function() {
    $('.navbar-toggler').on('click', function() {
        $(this).find('.navbar-toggler-icon').toggleClass('collapsed');
    });
});