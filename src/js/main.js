
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


var Header = document.querySelector('header');
var headroom = new Headroom(Header, {
    "offset": 205,
    "tolerance": 5
});
headroom.init();