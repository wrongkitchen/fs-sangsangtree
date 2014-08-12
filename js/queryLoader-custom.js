var imgLoader = function(selector){
	var imgArray = [];
	var imgLoaded = 0;
	var loaded = 0;
	var totalLoaded = 0;
	var interval;
	var isIE = false;
	
	$('body').addClass('nowrap').append('<div class="loading-holder"><div class="txt"><p>0%</p></div></div>');
	
	init();
	
	
	function init(){
		//var everything = $(selector).each(function() {
		var everything = $(selector).find("*:not(script)").each(function() {
			var url = "";
			
			if ($(this).css("background-image") != "none") {
				var url = $(this).css("background-image");
			} else if (typeof($(this).attr("src")) != "undefined" && $(this).is("img")){
				var url = $(this).attr("src");
			}
			
			url = url.replace("url(\"", "");
			url = url.replace("url(", "");
			url = url.replace("\")", "");
			url = url.replace(")", "");
			
			if (url.length > 0) {
				imgArray.push(url);
				//console.log(url)
			}
		});
		
		for(var i =0;i<imgArray.length;i++){
			var img = new Image();
			
			$(img).load(function(){
				imgLoaded++;
				totalLoaded = (100/imgArray.length)*imgLoaded;
			}).attr('src',imgArray[i]);
		}
		
		interval = setInterval(loadedPercent,40);
	}
	
	function loadedPercent(){
		if(loaded < totalLoaded && loaded <100){
			loaded++;
			$('.loading-holder .txt p').text(loaded+"%");
		}else{
			clearInterval(interval);
			loadComplete();
		}
	}
	
}