;
(function() {
    'use strict';
    var isMobile = { Android: function() { return navigator.userAgent.match(/Android/i); }, BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
    var fullHeight = function() {
        if (!isMobile.any()) {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function() { $('.js-fullheight').css('height', $(window).height()); });
        }
    };
    var counter = function() { $('.js-counter').countTo({ formatter: function(value, options) { return value.toFixed(options.decimals); }, }); };
    var counterWayPoint = function() {
        if ($('#colorlib-counter').length > 0) {
            $('#colorlib-counter').waypoint(function(direction) {
                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(counter, 400);
                    $(this.element).addClass('animated');
                }
            }, { offset: '90%' });
        }
    };
    var contentWayPoint = function() {
        var i = 0;
        $('.animate-box').waypoint(function(direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function() {
                    $('body .animate-box.item-animate').each(function(k) {
                        var el = $(this);
                        setTimeout(function() {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') { el.addClass('fadeIn animated'); } else if (effect === 'fadeInLeft') { el.addClass('fadeInLeft animated'); } else if (effect === 'fadeInRight') { el.addClass('fadeInRight animated'); } else { el.addClass('fadeInUp animated'); }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, { offset: '85%' });
    };
    var burgerMenu = function() {
        $('.js-colorlib-nav-toggle').on('click', function(event) {
            event.preventDefault();
            var $this = $(this);
            if ($('body').hasClass('offcanvas')) {
                $this.removeClass('active');
                $('body').removeClass('offcanvas');
            } else {
                $this.addClass('active');
                $('body').addClass('offcanvas');
            }
        });
    };
    var mobileMenuOutsideClick = function() {
        $(document).click(function(e) {
            var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas')) {
                }
            }
        });
        $(window).scroll(function() {
            if ($('body').hasClass('offcanvas')) {
                $('body').removeClass('offcanvas');
                $('.js-colorlib-nav-toggle').removeClass('active');
                $('.colorlib-nav-toggle').removeClass('left-class')
            }
        });
    };
    var clickMenu = function() {
        $('#navbar a:not([class="external"])').click(function(event) {
            var section = $(this).data('nav-section'),
                navbar = $('#navbar');
            if ($('[data-section="' + section + '"]').length) { $('html, body').animate({ scrollTop: $('[data-section="' + section + '"]').offset().top - 55 }, 500); }
            if (navbar.is(':visible')) {
                navbar.removeClass('in');
                navbar.attr('aria-expanded', 'false');
                $('.js-colorlib-nav-toggle').removeClass('active');
            }
            event.preventDefault();
            return false;
        });
    };
    var navActive = function(section) {
        var $el = $('#navbar > ul');
        $el.find('li').removeClass('active');
        $el.each(function() { $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active'); });
    };
    var navigationSection = function() {
        var $section = $('section[data-section]');
        $section.waypoint(function(direction) { if (direction === 'down') { navActive($(this.element).data('section')); } }, { offset: '150px' });
        $section.waypoint(function(direction) { if (direction === 'up') { navActive($(this.element).data('section')); } }, { offset: function() { return -$(this.element).height() + 155; } });
    };
    var sliderMain = function() {
        $('#colorlib-hero .flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 4000,
            directionNav: true,
            start: function() {
                setTimeout(function() {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            },
            before: function() {
                setTimeout(function() {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }
        });
    };
    var stickyFunction = function() {
        var h = $('.image-content').outerHeight();
        if ($(window).width() <= 992) { $("#sticky_item").trigger("sticky_kit:detach"); } else {
            $('.sticky-parent').removeClass('stick-detach');
            $("#sticky_item").trigger("sticky_kit:detach");
            $("#sticky_item").trigger("sticky_kit:unstick");
        }
        $(window).resize(function() {
            var h = $('.image-content').outerHeight();
            $('.sticky-parent').css('height', h);
            if ($(window).width() <= 992) { $("#sticky_item").trigger("sticky_kit:detach"); } else {
                $('.sticky-parent').removeClass('stick-detach');
                $("#sticky_item").trigger("sticky_kit:detach");
                $("#sticky_item").trigger("sticky_kit:unstick");

            }
        });
        $('.sticky-parent').css('height', h);
    };
    var owlCrouselFeatureSlide = function() { $('.owl-carousel').owlCarousel({ animateOut: 'fadeOut', animateIn: 'fadeIn', autoplay: true, loop: true, margin: 0, nav: true, dots: false, autoHeight: true, items: 1, navText: ["<i class='icon-arrow-left3 owl-direction'></i>", "<i class='icon-arrow-right3 owl-direction'></i>"] }) };
    $(function() {
        fullHeight();
        counter();
        counterWayPoint();
        contentWayPoint();
        burgerMenu();
        clickMenu();
        navigationSection();
        mobileMenuOutsideClick();
        sliderMain();
        stickyFunction();
        owlCrouselFeatureSlide();
    });
   $('.colorlib-nav-toggle').on('click' , function(){
       $('.colorlib-nav-toggle').toggleClass('left-class')
   });
   $('.fix-left').on('click' , function(){
    $('.colorlib-nav-toggle').toggleClass('left-class')
   });
  







   $ = jQuery.noConflict();

   // scrollTo plugin
   $.fn.scrollTo = function( target, options, callback ){
     if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
     var settings = $.extend({
       scrollTarget  : target,
       offsetTop     : 185,
       duration      : 0,
       easing        : 'linear'
     }, options);
     return this.each(function(){
       var scrollPane = $(this);
       var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
       var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
       scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
         if (typeof callback == 'function') { callback.call(this); }
       });
     });
   }
   
   
   //My code
   //The function that is listing the the mouse
   jQuery(".selector .selector__list li").mouseover(function() {
           console.log('mousie')
           jQuery(".selector .selector__list li").removeClass('selected');
           jQuery(this).addClass('selected');
   })
   
   
   // if the li item is clicked display the value inside the button
   jQuery('.selector__list li ').click(function() {
   
           //select the span where we want the place te value
           console.log(jQuery(this).parent().parent().parent() );
           jQuery(this).parent().parent().parent().find('.valueOfButton')
   
           //get the html we want to place in the span and fill the div .valueOfButton
           .html(jQuery(this).text());
   
           //populate the hidden form input element
    jQuery(this).parent().parent().parent().find('input').val(jQuery(this).data('key'));
   
   });
   
   
   //What to do when the keyboard is pressed
   jQuery(".selector").keydown(function(e) {
       if (e.keyCode == 38) { // up
           console.log('keyup pressed');
           var selected = jQuery('.selected');
           jQuery(".selector .selector__list li").removeClass('selected');
           if (selected.prev().length == 0) {
               selected.siblings().last().addClass('selected');
           } else {
               selected.prev().addClass('selected');
               jQuery('.selector .selector__list').scrollTo('.selected');
           }
       }
       if (e.keyCode == 40) { // down
           console.log('keydown');
           var selected = jQuery('.selected');
           jQuery(".selector .selector__list li").removeClass('selected');
           if (selected.next().length == 0) {
               selected.siblings().first().addClass('selected');
           } else {
               selected.next().addClass('selected');
               jQuery('.selector .selector__list').scrollTo('.selected');
           }
       }
   
       //if we press enter display choise in button
       if (e.keyCode == 13) { // enter
   
               console.log('enter pressed');
               console.log(jQuery('.selected').parent().parent().parent() )
               jQuery('.selected').parent().parent().find('.valueOfButton')
               //get the html we want to place in the span and fill the div   .valueOfButton
               .html(jQuery('.selected').text());
               //populate the hidden form input element
                          jQuery('.selected').parent().parent().parent().find('input').val(jQuery(this).data('key'));
   
           }
   
   });
   
   var pathname = window.location.pathname;
   var language_links = $('.selector__list a').get();
   
   
   
   $.each(language_links, function( index, value) {
       var link_href = value['className'];
       console.log(value['className']);
       var blog_path = link_href.replace('http://www.speaklike.com/', '');
       
       if( pathname.indexOf(blog_path) ){
       } else {
           $('.valueOfButton').html($(this).text());
       }
   });
   
   //console.log(is_language);
   
   var selector_open = false;
   
   $('.selector__toggle').on('click', function(){
       if(selector_open == false){
           selector_open = open;
           $(this).parent().removeClass('closed').addClass('open');  
       } else {
           selector_open = false;
           $(this).parent().removeClass('open').addClass('closed');
       }
   });
   
   $('.selector__list a').on('click', function(){
       selector_open = false;
       $(this).parents('.selector').removeClass('open').addClass('closed');
   });




  



$('.language__active').click(function (e) { 
    $('.language__items').fadeIn();
 $(document).click( function(e){
if ( $(e.target).closest('.language__active').length ) {
    return
    
}
else{

$('.language__items').fadeOut();
}

});
});
 









}());






