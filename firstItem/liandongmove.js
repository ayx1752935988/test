function startMove (obj, attr, iTarget, fn) {
	clearInterval(obj.time);
	obj.time = setInterval(function() {2

		var cur=0;
//		console.log(attr)
		if(attr == 'opacity'){
			cur = parseFloat(getStyle(obj,attr))*100;
//			console.log(cur)
		}else{
			cur = parseInt(getStyle(obj,attr));
		}
//		console.log(cur);
		var speed =  (iTarget - cur)/ 8;
		speed = speed >0? Math.ceil(speed):Math.floor(speed);
		if(cur == iTarget){
			clearInterval(obj.time);
		    if(fn){
		    	fn();
		    }
		}else{
			if(attr == 'opacity'){
//				console.log(cur);
//				console.log(speed);
				obj.style.filter = 'alpha(opacity)' + (cur + speed) ;
				obj.style.opacity = (cur + speed)/ 100;
			}else{
				
				obj.style[attr] = cur +speed +"px";
			}
		}
	}, 30)
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
