$(function(){
    spn.init(function(mainDiv){
        mainDiv.load(root + "/content/contact/index.htm" ,function(){
        	spn.lang.init();
        });
    });
 });

 $.ajaxSetup ({
	cache: false //close AJAX cache
});