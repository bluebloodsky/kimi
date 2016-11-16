$(function(){
    spn.init(function(mainDiv){
        mainDiv.load(root + "/content/product/product.htm" ,function(){

        	 spn.lang.init();
	     	var bigDiv = $(".slide-left .slides");
	     	var smallDiv = $(".slide-right .pager .pager-inner");
	     	bigDiv.empty();
	     	smallDiv.empty();
	     	$.getJSON(root + "/json/json_product.js").done(function(json){
	     		$.each(json,function(index,item){
		     		var bigImg = $('<img src="' + root + item.src + '">').appendTo(bigDiv);
		     		var smallLink = $('<a href="javascript:void(0)"><img src="'+ root + item.small_src +'"><span>'+ (index+1) + '/' + json.length + '</span></a>').appendTo(smallDiv);
		     		smallLink.click(function(){
		     			var pre_index = $(".slides > img").index($(".slides > img.active")[0]);
		     			if(pre_index != index){
		     				switchItem(pre_index,index);
		     			}
		     		});
		     		if (index == 0) {
		     			bigImg.addClass("active");
		     			smallLink.addClass("active");
		     		};
	     		});

	     		$(".pager-inner > a:odd").addClass("right");

	     		var switchItem = function(index ,nxtIndex){

	     			var page = parseInt(nxtIndex / 12) ;

	     			$(".pager-inner").css("top" , - page * ($(".pager").height() + 6));

	     			$(".pager-inner > a:eq(" + index + ")").removeClass("active");
	     			$(".pager-inner > a:eq(" + nxtIndex + ")").addClass("active");

	     			$(".slides > img:eq(" + index + ")").removeClass("active");
	     			$(".slides > img:eq(" + nxtIndex + ")").addClass("active");

	     		};

	     		$(".slide-left .prev").click(function(){
	     			var index = $(".slides > img").index($(".slides > img.active")[0]);
	     			var nxtIndex = index > 0 ? (index -1) : (json.length-1);
	     			switchItem(index,nxtIndex);

	     		});
	     		$(".slide-left .next").click(function(){
	     			var index = $(".slides > img").index($(".slides > img.active")[0]);
	     			var nxtIndex = (index < json.length-1)? (index +1) : 0;					
					switchItem(index,nxtIndex);
	     		});

	     		$(".slide-right > .up").click(function(){
	     			if(smallDiv.position().top < 0 ){
		     			$(".pager-inner").css("top" , "+=" + ($(".pager").height() + 6));
		     			//smallDiv.animate({"top" : "+=" + ($(".pager").height() + 6)});
	     			}
	     		});

	     		$(".slide-right > .down").click(function(){
	     			if(smallDiv.position().top + smallDiv.height() > $(".pager").height()){
		     			$(".pager-inner").css("top" , "-=" + ($(".pager").height() + 6));
		     			// smallDiv.animate({"top" : "-=" + ($(".pager").height() + 6)});
	     			}
	     		});

	     	});
        });
    });
 });

 $.ajaxSetup ({
	cache: false //close AJAX cache
});