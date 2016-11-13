 $(function(){
   spn.init(function(mainDiv){
        mainDiv.load(root + "/content/about/about.htm" ,function(){
		    spn.lang.init();
        });
   });
 });

 $.ajaxSetup ({
	cache: false //close AJAX cache
});