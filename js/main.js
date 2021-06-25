$(document).ready(function(){
    $(".section1").addClass("active");
    setTimeout(function() {
        $(".section1 .txt").addClass("active");
    }, 600)

    $(window).on("scroll", function(){
        var scr = $(this).scrollTop();
        $(".banner img").css({
            "transform" : `translate(-50%, ${scr / 2}px)`
        })

        
    });

    $("nav .nav_track").slick({
        variableWidth : true,
        slidesToShow: 5,
        centerPadding: 0,
        arrows: false,
        centerMode: true
    });

    $("nav .nav_track li").on("click", function() {
        $(this).toggleClass("flip").siblings().removeClass("flip");
        var currentIdx = $(this).attr("data-slick-index");
        $("nav .nav_track").slick('slickGoTo', currentIdx, false);
    })//slick focusing

    $("nav a").on("click", function(e){
        e.preventDefault();
    })

    //indicator animation
    
    $("nav .menu-navigation .nav_gnb li").on("click", function() {
        var i = $(this).attr("data-focus-index");
        var w = $(this).width();
        var h =$(this).height();
        var pos = $(this).offset().left;

        $("nav .nav_track").slick('slickGoTo', i, false);

        var slide = $("nav .indicator").is(":animated");
        if(!slide){
            $("nav .indicator").stop().animate({
                "width" : w,
                "height" : h,
                "left" : pos
            },600,"easeInOutQuint")
        }
    });
    
    $("nav .indicator").css({
        "width" : 130.521,
        "height" : 41.3333,
        "left" : 832.208
    })

    
})