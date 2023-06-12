// =============== multi countdown=======
$('[data-countdown]').each(function() {
    var $this = $(this),
        finalDate = $(this).data('countdown');

    var day = $this.find('.day');
    var hour = $this.find('.hour');
    var min = $this.find('.min');
    var sec = $this.find('.sec');

    $this.countdown(finalDate, function(event) {
        $(day).html(event.strftime('%D'))
        $(hour).html(event.strftime('%H'))
        $(min).html(event.strftime('%M'))
        $(sec).html(event.strftime('%S'))
    });
});

// =============== multi countdown end=======
// ======================Newest Items========
var swiper = new Swiper(".slider-wrapper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        '500': {
            slidesPerView: 2,
        },

        '768': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 4,
        },
        '1300': {
            slidesPerView: 5,
        },
    },
});


// ======================Newest Items========
var swiper = new Swiper(".collection-wrapper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        '500': {
            slidesPerView: 2,
        },

        '768': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 4,
        },
        '1300': {
            slidesPerView: 5,
        },
    },
});

// ======================Newest Items========
var swiper = new Swiper(".feature", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        '550': {
            slidesPerView: 2,
        },

        '768': {
            slidesPerView: 2,
        },
        '992': {
            slidesPerView: 3,
        },
        '1300': {
            slidesPerView: 4,
        },
    },
});

// ======================Newest Items========
var swiper = new Swiper(".team-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        '550': {
            slidesPerView: 2,
        },

        '768': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 4,
        },
        '1300': {
            slidesPerView: 5,
        },
    },
});

// FOR NAVBAR FIXED WHEN SCROLL
$(window).on("scroll", function() {
    var scrolling = $(this).scrollTop();
    if (scrolling > 50) {
        $(".header").addClass("navbar-fixed");
    } else {
        $(".header").removeClass("navbar-fixed");
    }
});


/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;
(function($, window, document, undefined) {
    $('.inputfile').each(function() {
        var $input = $(this),
            $label = $input.next('label'),
            labelVal = $label.html();

        $input.on('change', function(e) {
            var fileName = '';

            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else if (e.target.value)
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                $label.find('.archive-name').html(fileName);
            else
                $label.html(labelVal);
        });

        // Firefox bug fix
        $input
            .on('focus', function() { $input.addClass('has-focus'); })
            .on('blur', function() { $input.removeClass('has-focus'); });
    });
})(jQuery, window, document);

// =======================faq ==========
// FOR FAQ SECTION ACCORDION
jQuery(document).ready(function($) {
    var panels = $(".faq-ans").hide();
    panels.first().show();

    $(".faq-que").click(function() {
        var $this = $(this);
        panels.slideUp();
        $this.next().slideDown();
    });
});