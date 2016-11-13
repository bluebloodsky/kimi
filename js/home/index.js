 $(function(){
   spn.init(function(mainDiv){
        mainDiv.load(root + "/content/home/home.htm" ,function(){
        	$("<img src='"+ root + "/api/index.php/img/1'>").appendTo(mainDiv);
        	$("<video src='"+ root + "/api/index.php/video/1'  controls='controls' height='270' width='480px'></video>").appendTo(mainDiv);
		    spn.lang.init();
        });
   });
 });

 $.ajaxSetup ({
	cache: false //close AJAX cache
});