//efecto scroll
$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('solid-color');
    }
    else{
        $('nav').removeClass('solid-color');
    }
})