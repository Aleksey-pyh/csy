// $('a[href="#"]').click(e=>{e.preventDefault();});
// $('.burgerButt').click(()=>{
//     $('.hiddenMenu').toggleClass('activeMenu');
//     $('.burgerButt').toggleClass('activeBurger');
//     $('.hiddenNav').toggleClass('activeHidNav');
// });
$('.firstSlider__track').slick({
    nextArrow: $('#next1'),
    prevArrow: $('#prev1'),
});
$('#nav-contact .advantages__slider').slick({
    nextArrow: $('#activeN'),
    prevArrow: $('#activeP'),
});
$('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var activeTab = $(e.target).attr('href');// активная вкладка
    var curSlide = $(activeTab).find('.advantages__slider');
    var next = curSlide.parent('.advantages__sliderContainer').find('.next');
    var prev = curSlide.parent('.advantages__sliderContainer').find('.prev');
    curSlide.slick({
        nextArrow: next,
        prevArrow: prev,
    });
});
$('.play').click(()=>{
    if($('.play').hasClass('stop')){
        $('.play').removeClass('stop');
        $('.firstScreenVideo').get(0).load();
    }else {
        $('.firstScreenVideo').get(0).play();
        $('.play').addClass('stop');
    }
});

