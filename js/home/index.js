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
		    mainDiv.css("width" , "1250px");
		    $.getJSON(root + "/json/json_home.js").done(function(json){
			    $.each(json,function(index,item){
			        var new_div = $("<div class='content'></div>").appendTo(mainDiv);
			        if(index == 0){
			            new_div.addClass("active");
			        }
			        $("<img style='float:right' src='" + root + "/img/home/" + item.name + "/banner.jpg'>").appendTo(new_div);
			        
			        new_div.hover(function(){
			            var ac = $(".active").removeClass("active");
			            new_div.addClass("active");          
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