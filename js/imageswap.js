jQuery(function(){
     $(".rollover").hover(
          function(){
			$(this).fadeIn("fast");
			this.src = this.src.replace("_off","_on");
			
		},
          function(){
			$(this).fadeIn("fast");
			this.src = this.src.replace("_on","_off");
     });
});