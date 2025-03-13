(function ($) {
    'use strict';

    // navbarDropdown
    if ($(window).width() < 992) {
        $('.navigation .dropdown-toggle').on('click', function () {
            $(this).siblings('.dropdown-menu').animate({
                height: 'toggle'
            }, 300);
        });
  }

    // scroll to top button
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.backtop').addClass('reveal');
        } else {
            $('.backtop').removeClass('reveal');
        }

        // Fade In effect for features section
        var featuresSection = $('.features');
        var featuresOffset = featuresSection.offset().top;
        var windowHeight = $(window).height();

        // Check if features section is in the viewport
        if ($(window).scrollTop() + windowHeight > featuresOffset) {
            featuresSection.fadeIn(1000); // Fade-in effect when the section is visible
        } else {
            featuresSection.fadeOut(500); // Fade-out effect when the section is out of view
        }
    });
    
    // scroll-to-top
  $('.scroll-top-to').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

    $('.portfolio-single-slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.clients-logo').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplaySpeed: 6000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }

        ]
    });

    $('.testimonial-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 6000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.testimonial-wrap-2').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });


    // counter
    function counter() {
        var oTop;
        if ($('.counter').length !== 0) {
            oTop = $('.counter').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 500,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
  }
  $(window).on('scroll', function () {
        counter();
    });


    // Shuffle js filter and masonry
    if ($('.shuffle-wrapper').length !== 0) {
        var Shuffle = window.Shuffle;
        var jQuery = window.jQuery;

        var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
            itemSelector: '.shuffle-item',
            buffer: 1
        });
        jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
            var input = evt.currentTarget;
            if (input.checked) {
                myShuffle.filter(input.value);
            }
        });
    }

})(jQuery);

// <script src="https://cdnjs.cloudflare.com/ajax/libs/Shuffle/5.4.1/shuffle.min.js"></script>
// <script>
document.addEventListener("DOMContentLoaded", function() {
    var Shuffle = window.Shuffle;
    var container = document.querySelector('.shuffle-wrapper');
    
    var shuffleInstance = new Shuffle(container, {
      itemSelector: '.shuffle-item',
      sizer: null
    });

    // Filter event listeners
    var filters = document.querySelectorAll('input[name="shuffle-filter"]');
    filters.forEach(function(filter) {
      filter.addEventListener("change", function() {
        var filterValue = this.value === 'all' ? Shuffle.ALL_ITEMS : this.value;
        shuffleInstance.filter(filterValue);
      });
    });
});


// Gallery Image Click Effect
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", function () {
            alert("You clicked on " + this.querySelector(".card-title").innerText);
        });
    });
});

    // FancyBox Video
    if ($('[data-fancybox]').length) {
        $('[data-fancybox]').fancybox({
            youtube: {
                controls: 0,
                showinfo: 0
            },
            vimeo: {
                color: 'f00'
            }
        });
    }




