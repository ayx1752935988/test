$(function($){
	$.fn.slider = function(){
		return this.each(function(){
			var me = $(this),
			
			     Ul = me.find("ul"),
			     oneWidth  = me.find("li").eq(0).width(),
			     oLi = me.find(".numer a"),
			      
			     timer = null,
			     iNow = 0;
			     
			      me.hover(function(){
			     	clearInterval(time);
			     },function(){
			     	autoPlay();
			     });
			     autoPlay();
			    
			     oLi.on("click",function(){
			     	var me  = $(this),
			     	index = me.index();
			     	iNow = index;
			     	bannerImg.animate({
			     		"left": -oneWidth*iNow
			     	});
			     	oLi.removeClass("on");
			     	me.addClass("on")
			     })
			     function autoPlay(){
			     	time = setInterval(function(){
			     	iNow++;
			     	if(iNow == me.find("li").length-1){
			     		iNow=0;
			     	}
			     	oLi.eq(iNow).trigger("click")
			     },2000)
			     }
		})
	}
}(jQuery))

$(function(){
			 
			     
			    
			     
		});