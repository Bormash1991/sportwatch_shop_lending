$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1500, 
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true, 
                    arrows: false
                }
            }, 
            
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    
    function toggleClass(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })  
    };
    toggleClass ('.catalog-item__link');
    toggleClass ('.catalog-item__block');

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });

    
    
    $('.button__mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation , #order , #thanks').fadeOut('slow');
    });
    
    function valideForms(forms) {
        $(forms).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true, 
                    email: true
                }
            }, 
            messages: {
                name: "Пожалуйста введите ваше имя",
                phone: "Пожалуйста введите номер телефона",
                email: {
                  required: "Введите свою почту",
                  email: "Неправильнно введен адрес почты"
                }
            }
        });
    };
    valideForms ('#consultation-form');
    valideForms ('#consultation form');
    valideForms ('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});