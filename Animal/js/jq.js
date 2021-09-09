$(function() {

    /* HEADER FIXED */
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();;
    let scrollPos = $(window).scrollTop();
    let nav = $('.nav')
    let span = $('.burger .span')
    checkScroll(scrollPos, introH);

    $(window).on('scroll resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH)
    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    /* SMOOTH SCROLL */
    $("[data-go]").on('click', function(event){
        event.preventDefault();
        let elementId = $(this).data('go')
        let elementOffset = $(elementId).offset().top;
        nav.removeClass('animate');
        span.removeClass('active');
        $('html, body').animate({
           scrollTop: elementOffset - 75
        }, 800);
    });


    /* TOGGLE */
    span.on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        nav.toggleClass("animate");
    });


    let slider = $('#slider');
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });





});
