try {
    $(document).ready(function () {
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


$('.cta__photo').on('click', function () {
    $(".cta__content").css('display', 'block');
});

$('.cta__content').on('click', function () {
    $(".cta__content").css('display', 'none');
});


$(document).on('click', '.hamburger-menu', function () {
    $('.navigation-drawer').addClass('active');
    $('.backdrop').css('display', 'block');

});


$(document).on('click', '.backdrop', function () {
    $('.navigation-drawer').removeClass('active');
    $(this).css('display', 'none');
});


// ***************************


// Mobile menu

try {
    $(function () {
        var Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables
            var link = this.el.find('.link');
            // Eventos
            link.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        }

        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            // Desencadena evento de apertura en los elementos siguientes a la clase link = ul.submenu
            $next.slideToggle();
            // Agregar clase open a elemento padre del elemento con clase link = li
            $this.parent().toggleClass('open');

            //Parametro inicial que permite ver 1 solo submenu abierto
            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            }

        }
        // Elegir submenus multiples (true) submenus uno a la vez (false)
        var accordion = new Accordion($('#accordion'), false);
    });
} catch (e) {

}

// Menu accordion

// Mobile menu

try {
    $(document).ready(function () {
        // Settings:
        var drawer = '[data-swipe-drawer]';
        var panel = '[data-swipe-panel]';
        var overlay = '[data-swipe-overlay]';
        var noScrollClass = 'no-scroll';
        var flickThreshold = 20;

        // Initialise variables
        var openClass = $(drawer).data('swipe-open-class');
        var width = 0;
        var posStart = 0;
        var translateStart = 0;
        var diff = 0;
        var xPos = 0;
        var longTouch = true;

        $(drawer).on('touchstart', function (ts) {
            xPos = 0;
            width = $(this).children(panel).width();
            posStart = ts.originalEvent.touches[0].pageX;

            // get the current translate value of the panel based on it's open-state
            translateStart = -width;
            if ($(this).hasClass(openClass)) {
                translateStart = 0;
            }
            ;

            // set timer for "flicking"
            longTouch = false;
            setTimeout(function () {
                longTouch = true;
            }, 250);

            // Make drawer visible while interacting
            $(this).css('visibility', 'visible');
        });

        $(drawer).on('touchmove', function (tm) {
            xPos = tm.originalEvent.touches[0].pageX - posStart;
            diff = translateStart + xPos;

            // Set styles depending on how far the touchmove moves
            if (diff >= -width && diff <= 0) {
                $(this).children(panel).css({
                    'transform': 'translate3d(' + diff + 'px,0,0)',
                    'transition-duration': '0s'
                });
                $(this).children(overlay).css({
                    'opacity': 1 - (-1 / width * diff),
                    'transition-duration': '0s'
                });
            }
        });

        $(drawer).on('touchend', function () {
            // Determine flick
            var flickClose = false;
            var flickOpen = false;
            if (!longTouch) {
                if (xPos > flickThreshold) {
                    flickOpen = true;
                } else if (xPos < -flickThreshold) {
                    flickClose = true;
                }
            }

            // Determine if drawer should be open
            if (flickOpen || xPos >= width / 2) {
                $(this).addClass(openClass);
                $('body').addClass(noScrollClass);
            } else if (flickClose || xPos < -width / 2) {
                $(this).removeClass(openClass);
                $('body').removeClass(noScrollClass);
            }

            // Remove inline css from js animation
            $(this).removeAttr('style');
            $(this).children(panel).removeAttr('style');
            $(this).children(overlay).removeAttr('style');
        });

        $('[data-swipe-overlay], [data-swipe-close]').on('click', function (e) {
            e.preventDefault();
            $(drawer).removeClass(openClass);
            $('body').removeClass(noScrollClass);
        });

        $('[data-swipe-open]').on('click', function (e) {
            e.preventDefault();
            $(drawer).addClass(openClass);
            $('body').addClass(noScrollClass);
        });
    });
} catch (e) {

}


try {
    AOS.init();
} catch (e) {

}