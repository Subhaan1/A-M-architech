// JavaScript Document
$(document).ready(function(){
	$(".collageA, .collageB, .collageC, .collageD, .simpleFade").mouseover(function(){
		$(this).children(".collageIMG").fadeTo( "fast", 0.33 );
		$(this).children(".collageCaption").animate({
			opacity: 1,
		}, "fast");
	});		
	$(".collageA, .collageB, .collageC, .collageD, .simpleFade").mouseleave(function(){
		$(this).children(".collageIMG").fadeTo( "fast", 1 );
		$(this).children(".collageCaption").animate({
			opacity: 0,
		}, "fast");
	});
	                                                                                                                                                                                                                                                   
});