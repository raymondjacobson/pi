jQuery(document).ready(function ($) {

   // if (!Modernizr.touch) { //if not touch
        // Detecting IE
   // var oldIE;
   // if ($('html').is('.lt-ie9')) {
    //    oldIE = true;
   // }
//
  //  if (oldIE) {
    //    $(document.body).addClass('test');
   // } else {
   //     $(window).stellar();
   //     $(document.body).addClass('parallax');
   // }


           
       
   // }
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        //get height of menu. it is fixed at top so the sections should be be below the menu, which is different heights, responsively
       var menuheight = $( ".menu" ).height();
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - menuheight,
        }, 2000, 'easeInOutQuint');
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


});