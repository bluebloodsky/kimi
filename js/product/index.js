 $(function(){
   spn.init(function(mainDiv){
     mainDiv.load(root + "/content/about/about.htm");
   });
 });
 $.ajaxSetup ({
	cache: false //close AJAX cache
});