 $(function(){
   spn.init(function(mainDiv){
     mainDiv.load(root + "/content/product/product.htm");
   });
 });
 $.ajaxSetup ({
	cache: false //close AJAX cache
});