$(".right").click(function(){
	$(".last").css("display","none")
})
$(".btn").click(function(e){
		clearInterval(timer2)
		console.log()
		if($(e.target).attr("id")=="rt"){
			let fir=$(".homes>.small-box:first-child");
			fir.css("margin-left","-228px");
			setTimeout(function(){
				fir.appendTo($(".homes")).css("margin-left","0");
			},1000)
		}else if($(e.target).attr("id")=="lt"){
			let las=$(".homes>.small-box:last-child");
			las.insertBefore($(".homes>.small-box:first-child")).css("margin-left","-228px");
			las.animate({
				"margin-left":"0px"
			},1)
		}
	})
	
	timer2=setInterval(function(){
		let fir=$(".peoples>.small-boxx:first-child");
			fir.css("margin-left","-228px");
			setTimeout(function(){
				fir.appendTo($(".peoples")).css("margin-left","0");
			},1000)
	},3000)
	$(".btns").click(function(e){
		clearInterval(timer2)
		console.log()
		if($(e.target).attr("id")=="rts"){
			let fir=$(".peoples>.small-boxx:first-child");
			fir.css("margin-left","-228px");
			setTimeout(function(){
				fir.appendTo($(".peoples")).css("margin-left","0");
			},1000)
		}else if($(e.target).attr("id")=="lts"){
			let las=$(".peoples>.small-boxx:last-child");
			las.insertBefore($(".peoples>.small-boxx:first-child")).css("margin-left","-228px");
			las.animate({
				"margin-left":"0px"
			},1)
		}
	})
	
	timer2=setInterval(function(){
		let fir=$(".peoples>.small-box:first-child");
			fir.css("margin-left","-228px");
			setTimeout(function(){
				fir.appendTo($(".peoples")).css("margin-left","0");
			},1000)
	},3000)
