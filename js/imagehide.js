$(document).ready(function() {
    $('.textItem').mouseenter(function(){
        $(this).fadeTo('fast', 1);
    });
    $('.textItem').mouseleave(function(){
        $(this).fadeTo('fast', 0);
    });
});
