jQuery(document).ready(function(e){function n(t){var n=e(".menu").height();htmlbody.animate({scrollTop:e('.slide[data-slide="'+t+'"]').offset().top-n},2e3,"easeInOutQuint")}var t=e(".navigation").find("li");slide=e(".slide");button=e(".button");mywindow=e(window);htmlbody=e("html,body");slide.waypoint(function(t,n){dataslide=e(this).attr("data-slide");n==="down"?e('.navigation li[data-slide="'+dataslide+'"]').addClass("active").prev().removeClass("active"):e('.navigation li[data-slide="'+dataslide+'"]').addClass("active").next().removeClass("active")});mywindow.scroll(function(){if(mywindow.scrollTop()==0){e('.navigation li[data-slide="1"]').addClass("active");e('.navigation li[data-slide="2"]').removeClass("active")}});t.click(function(t){t.preventDefault();dataslide=e(this).attr("data-slide");n(dataslide)});button.click(function(t){t.preventDefault();dataslide=e(this).attr("data-slide");n(dataslide)})});