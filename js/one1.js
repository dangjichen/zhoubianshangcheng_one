$(function(){
		$("#middle img").mousemove(function(){
			$(this).css({"height":"160","width":"377"})
		});
		$("#middle img").mouseout(function(){
			$(this).css({"height":"150","width":"377"})
		});
		
		$("#middle1 img").mouseover(function(){
			$(this).css({"box-shadow":"0px 10px 2px #ccc"})
		});
		$("#middle1 img").mouseout(function(){
			$(this).css({"box-shadow":"none"})
		});
		$("#middle2 img").mouseenter(function(){
			$(this).animate({opacity:'0.5'},"slow")
		});
		$("#middle2 img").mouseleave(function(){
			$(this).animate({opacity:'1'},"slow")
		});
		$("#dl1 img").mouseover(function(){
			$(this).css({width:"280",height:"300"})
		});
		$("#dl1 img").mouseout(function(){
			$(this).css({width:"280",height:"280"})
		})
		
		$("#shang").click(function() {
      $("html,body").animate({scrollTop:0}, 500);
  	}); 
  	
  	$("#tiao li").css({"width":"50","height":"30","border":"solid 1px #ccc","background":" orangered","line-height":"2"});
});