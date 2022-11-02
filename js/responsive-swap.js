// JavaScript Document
$(document).ready(function(){
//Responsive code to replace images
		
		var windowCheck = function(){
			var W = $(window).width();
			if (W <= 568) {
				$("#banner1").replaceWith('<img id="banner1-mobile" src="images/slide1-mobile.jpg" alt="banner1" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">');
				$("#banner2").replaceWith('<img id="banner2-mobile" src="images/slide2-mobile.jpg" alt="banner2" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">');
				$("#banner3").replaceWith('<img id="banner3-mobile" src="images/slide3-mobile.jpg" alt="banner3" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">');
				$("#banner4").replaceWith('<img id="banner4-mobile" src="images/slide4-mobile.jpg" alt="banner1" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">')
			} else if (W >= 569) {
				$("#banner1-mobile").replaceWith('<img id="banner1" src="images/slide1.jpg" alt="banner1" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">');
				$("#banner2-mobile").replaceWith('<img id="banner2" src="images/slide2.jpg" alt="banner2" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">');
				$("#banner3-mobile").replaceWith('<img id="banner3" src="images/slide3.jpg" alt="banner3" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">');
				$("#banner4-mobile").replaceWith('<img id="banner4" src="images/slide4.jpg" alt="banner1" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">')	
			}
		}
		
		windowCheck();
		
		jQuery(window).bind('resize',function(){
		    window.location.href = window.location.href;
		});
		
});