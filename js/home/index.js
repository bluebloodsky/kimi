$(function(){
	var g_url = window.location.toString();
	var g_ss = g_url.split("?");
	var g_la = g_ss[1];
	if (g_la == "cn" || g_la == "en"){
		spn.lang.setLanguage(g_la);
		window.location.href = g_ss[0];
	}else{
		spn.init(function(mainDiv){
	        mainDiv.load(root + "/content/home/home.htm" ,function(){
	        	$("<img src='"+ root + "/api/index.php/img/1'>").appendTo(mainDiv);
	        	$("<video src='"+ root + "/api/index.php/video/1'  controls='controls' height='270' width='480px'></video>").appendTo(mainDiv);
			    spn.lang.init();
	        });
	    });
	}
 });

 $.ajaxSetup ({
	cache: false //close AJAX cache
});