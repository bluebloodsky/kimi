$(function(){
	var g_url = window.location.toString();
	var g_ss = g_url.split("?");
	var g_la = g_ss[1];
	if (g_la == "cn" || g_la == "en"){
		spn.lang.setLanguage(g_la);
		window.location.href = g_ss[0];
	}else{
		spn.init(function(mainDiv){
		    var language = spn.lang.getLanguage();
		    spn.lang.init();
		    var percent = 15 ; //每个图片最小宽度比
		    var main = $("<div class='home-wrapper'></div>").appendTo(mainDiv);
		    $.getJSON(root + "/json/json_home.js").done(function(json){
			    $.each(json,function(index,item){
			        var new_div = $("<div class='home-content'></div>").appendTo(main);
			        new_div.css("right" , index * percent + "%");
			        $("<img src='" + root + "/img/home/" + item.name + "/banner.jpg'>").appendTo(new_div);

			        var desc = item[language + "_name"];
			        $("<span class='home-hor'>"+desc+"</span>").appendTo(new_div);
			        if(index == json.length-1){
			            new_div.addClass("active");
				        $("<span class='home-ver'>"+desc+"</span>").appendTo(new_div).hide();
			        }
			        else{
			        	$("<span class='home-ver'>"+desc+"</span>").appendTo(new_div);
			        }
			        new_div.hover(function(){
			            var active_index = $(".home-content").index($(".home-content.active")[0]);
			            var num = active_index - index ;
			            if(num == 0){
			            	return ;
			            }else{			  
			                var offset = 100 - percent*json.length;          	
			            	if(num < 0){ //右移
				            	$(".home-content:gt("+active_index+"):lt("+(-num)+")").animate({right:"-="+offset+"%"});
				            }else{
				            	$(".home-content:gt("+index+"):lt("+num+")").animate({right:"+="+offset+"%"});
				            }

				            $(".home-content.active .home-ver").show();
			            	$(".home-content.active").removeClass("active");
				            new_div.addClass("active");  
				            $(".home-content.active .home-ver").hide(); 
			            }
       
			        });
			        new_div.click(function(){
			            window.location.href = root + item.url;			            
			        })
			    });
		    });

	    });
	}
 });

 $.ajaxSetup ({
	cache: false //close AJAX cache
});