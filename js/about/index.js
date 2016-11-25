 $(function(){
   spn.init(function(mainDiv){
    	$.getJSON(root + "/json/json_about.js").done(function(json){
    		var wrapperDiv = $('<div id="about-wrapper"></div>').appendTo(mainDiv);
    		var padDiv = $('<div id="about-pd"></div>').appendTo(wrapperDiv);
    		var baseWidth = wrapperDiv.width();
    		var size = json.length ; 
    		var pdWidth = baseWidth * size;
    		padDiv.width(pdWidth);
    		$.each(json,function(index,item){
    			var itemDiv=$('<div class="about-item"></div>').css({"left" : baseWidth * index ,
    		                                                         "width" : baseWidth}).appendTo(padDiv);
    			$('<div class="about-title"><h2>'+ item["cn_name"] + '</h2></div>').appendTo(itemDiv);
    			var preIndex = index > 0 ? (index-1):(size - 1);
    			var nxtIndex = index < ( size - 1 ) ? (index+1):0;
    			$('<div class="about-main"><img src = "' + root + item.src + '" ><a class="previous"><span>'
    				+json[preIndex]["cn_name"]+'</span></a><a class="next"><span>'+json[nxtIndex]["cn_name"]+'</span></a></div>').appendTo(itemDiv);
    		});

    		$("a.previous").click(function(){
    			var pdLeft = parseInt(padDiv.css("left")) + baseWidth ;
    		    if( pdLeft > 0){
    		    	$('#about-pd > div:last').css("left",-baseWidth);
    		    	padDiv.animate({left: pdLeft}, 500 ,function(){													
						$('#about-pd > div:last').css("left",pdWidth-baseWidth);	
						padDiv.css("left",-(pdWidth-baseWidth));
					});
    		    }else{
    			    padDiv.animate({left: pdLeft});
    		    }
    		});

    		$("a.next").click(function(){
    			var pdLeft = parseInt(padDiv.css("left")) - baseWidth ;
    			if(pdLeft < -(pdWidth-baseWidth) ){
    				 $('#about-pd > div:first').css("left",pdWidth);
    				 padDiv.animate({left: pdLeft}, 500 ,function(){													
						$('#about-pd > div:first').css("left",0);	
						padDiv.css("left",0);
					});

    			}else{
	    			padDiv.animate({left:"-=" + baseWidth});
    			}
    		});
    	});
	    spn.lang.init();
   });
 });

 $.ajaxSetup ({
	cache: false //close AJAX cache
});