$(document).ready(function (){
    /*for sticky navigation*/
    $('.js--section-features').waypoint(function(direction) {
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
           $('nav').removeClass('sticky');
      }  
    }, {
        offset: '60px;'
    });
    /* scroll on buttons */
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);        
    });
    $('.js--scroll-to-features').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);        
    });    
    /*navigation scroll*/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    /*animation on scroll*/
    $('.js--wp-fadein').waypoint(function(direction) {
        $('.js--wp-fadein').addClass('animated fadeIn');  
    }, {
        offset: "50%"
    });
    $('.js--wp-fadeinup').waypoint(function(direction) {
        $('.js--wp-fadeinup').addClass('animated fadeInUp');  
    }, {
        offset: "50%"
    });
    $('.js--wp-fadeinfeature').waypoint(function(direction) {
        $('.js--wp-fadeinfeature').addClass('animated fadeIn');  
    }, {
        offset: "50%"
    });
    $('.js--wp-fadeilcity').waypoint(function(direction) {
        $('.js--wp-fadeilcity').addClass('animated fadeInLeft');  
    }, {
        offset: "50%"
    });
    $('.js--wp-fadeir').waypoint(function(direction) {
        $('.js--wp-fadeir').addClass('animated fadeInRight');  
    }, {
        offset: "50%"
    });
    $('.js--wp-rollin').waypoint(function(direction) {
        $('.js--wp-rollin').addClass('animated rollIn');  
    }, {
        offset: "50%"
    });
    $('.js--wp-pulsecity').waypoint(function(direction) {
        $('.js--wp-pulsecity').addClass('animated pulse');  
    }, {
        offset: "50%"
    });
    $('.js--wp-swing').waypoint(function(direction) {
        $('.js--wp-swing').addClass('animated swing');  
    }, {
        offset: "50%"
    });
    $('.js--wp-rb').waypoint(function(direction) {
        $('.js--wp-rb').addClass('animated hinge');  
    }, {
        offset: "50%"
    });
    /*mobile navigation*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i')
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            
        }
    });
                                
});