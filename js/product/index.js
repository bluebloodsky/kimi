
var prdt = {
    init : function(param){
        prdt.autoClick = param ;
        spn.init(function(mainDiv){
            mainDiv.load(root + "/content/product/index.htm" ,function(){
                prdt.language = spn.lang.getLanguage();
                prdt.menuBox =  $("#product-menu > ul") ;
                prdt.bigDiv = $(".slide-left .slides");
                prdt.smallDiv = $(".slide-right .pager .pager-inner");
                prdt.pageHeight = $(".pager").height();

                $.each(spn.json_menu,function(index,item){
                    if(item.name == "product"){
                        prdt.buildMenu(item.items);                     
                    }
                });
                spn.lang.init();

                $(".slide-left > .prev").click(function(){
                    var index = prdt.smallDiv.children("a").index(prdt.smallDiv.children("a.active")[0]);
                    var nxtIndex = index > 0 ? (index -1) : (prdt.product_num-1);
                    prdt.switchItem(index,nxtIndex);

                });
                $(".slide-left > .next").click(function(){
                    var index = prdt.smallDiv.children("a").index(prdt.smallDiv.children("a.active")[0]);
                    var nxtIndex = (index < prdt.product_num-1)? (index +1) : 0;                 
                    prdt.switchItem(index,nxtIndex);
                });

                $(".slide-right > .up").click(function(){
                    if( prdt.smallDiv.position().top < 0 ){
                        prdt.smallDiv.css("top" , "+=" + (prdt.pageHeight + 6));
                        //smallDiv.animate({"top" : "+=" + ($(".pager").height() + 6)});
                    }
                });

                $(".slide-right > .down").click(function(){
                    if( prdt.smallDiv.position().top + prdt.smallDiv.height() > prdt.pageHeight){
                        prdt.smallDiv.css("top" , "-=" + ( prdt.pageHeight+ 6));
                        // smallDiv.animate({"top" : "-=" + ($(".pager").height() + 6)});
                    }
                });

                $(document).keydown(function(event){ 
                    switch(event.keyCode){
                        case 37:
                    　　　　$(".slide-left > .prev").click();
                            break;   
                        case 38:
                    　　　　 $(".slide-right > .up").click();
                            break;                        
                        case 39:
                            $(".slide-left > .next").click();
                            break;                     
                        case 40:
                            $(".slide-right > .down").click();
                            break;
                    }
                });              
            });
        });
    } ,
    buildMenu : function(items){
        prdt.menuBox.empty();
        $.each(items,function(index,itm){
            var sub_li = $('<li></li>').appendTo(prdt.menuBox);
            var sub_item = $('<a href="JavaScript:void(0)">'+ itm[prdt.language + "_name"] + '</a>').data("name" , itm.name).appendTo(sub_li);
            sub_item.on("click" , prdt.switchMenu);
            if(itm.name == prdt.autoClick){
                sub_item.click();
            }
        });

    } ,
    switchMenu : function(){
        prdt.menuBox.find(".active").removeClass("active");
        $(this).addClass("active");

        prdt.bigDiv.empty();
        prdt.smallDiv.empty();

        $.getJSON(root + "/json/json_product_" + $(this).data("name") + ".js").done(function(json){
            prdt.product_num = json.length ;
            $.each(json,function(index,item){
                var bigLink = $('<div class="jqzoom"><img src="' + root + item.src + '" jqimg="'+  root + item.big_src +'"></div>').appendTo(prdt.bigDiv);

                var smallLink = $('<a href="javascript:void(0)"><img src="'+ root + item.small_src +'"><span>'+ (index+1) + '/' + json.length + '</span></a>').appendTo(prdt.smallDiv);
                smallLink.click(function(){
                    var pre_index = prdt.smallDiv.children("a").index(prdt.smallDiv.children("a.active")[0]);
                    if(pre_index != index){
                        prdt.switchItem(pre_index,index);
                    }
                });
                prdt.smallDiv.css("top" , 0);
                if (index == 0) {
                    bigLink.addClass("active");
                    smallLink.addClass("active");
                };
            });

            $('.jqzoom').jqueryzoom({
                xzoom: 165, //放大图的宽度(默认是 200)
                yzoom: 165, //放大图的高度(默认是 200)
                offset: 6, //离原图的距离(默认是 10)
                position: "right", //放大图的定位(默认是 "right")
                preload: 0
            });

            prdt.smallDiv.children("a:odd").addClass("right");

        });

    },

    switchItem : function(index ,nxtIndex){

        var page = parseInt(nxtIndex / 12) ;

        prdt.smallDiv.css("top" , - page * ($(".pager").height() + 6));

        prdt.smallDiv.children("a:eq(" + index + ")").removeClass("active");
        prdt.smallDiv.children("a:eq(" + nxtIndex + ")").addClass("active");

        prdt.bigDiv.children("div:eq(" + index + ")").removeClass("active");
        prdt.bigDiv.children("div:eq(" + nxtIndex + ")").addClass("active");
    }
};

$(function(){
	var g_url = window.location.toString();
	var g_ss = g_url.split("?");
	var autoClick = g_ss[1] || "home";
    prdt.init(autoClick);
    
 });

 $.ajaxSetup ({
	cache: false //close AJAX cache
});