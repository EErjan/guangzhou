
try {
    $(document).ready(function() {
        $(".fancybox").fancybox();
    });
} catch (e) {

}

try {
    $('.phone-musk').inputmask("+\\9\\9\\ (89)9 999-99-99");
    $('.date-musk').inputmask("99/99/9999");
} catch (e) {

}


let Header = document.querySelector('header');
let headroom = new Headroom(Header, {
    "offset": 205,
    "tolerance": 5
});
headroom.init();


$('.cta__photo').on('click', function(){
    $(".cta__content").css('display','block');
});

$('.cta__content').on('click', function(){
    $(".cta__content").css('display','none');
});