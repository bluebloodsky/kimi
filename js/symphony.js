//spn(symphony) - 20160117
window.spn = {
	v : "beta 1.0" ,
	init : function(loadContent){
		$(document).bind("contextmenu", function() { return false; });
		$("#symphony").load(root + "/content/sym_html.htm",function(){	
	        var head = $("#header-top");
	        var tb_link = $('<a href="https://aierlamp.taobao.com/" target="_blank" style="margin-right:150px;"></a>').appendTo(head);
	        tb_link.append($('<img align="absmiddle" alt="艾尔照明旗舰店" border="0" src="'+ root + '/img/taobao.jpg">'));
	        $('<a href="JavaScript:void(0)">中文</a>').appendTo(head).click(function(){
	        	spn.lang.setLanguage("cn");
	        	window.location.reload();
	        });
	        $('<span> | </sapn>').appendTo(head);
	        $('<a href="JavaScript:void(0)">English</a>').appendTo(head).click(function(){
	        	spn.lang.setLanguage("en");
	        	window.location.reload();
	        });
			spn.menuBox = $("#header-nav");	
			spn.building();	   
			loadContent($("#sym-main"));
		});
	},
	building : function(){
		$.getJSON(root + "/json/json_menu.js").done(function(json){
		   var lang = ($.cookie("zl_lang") || "cn");  
	       $.each(json,function(index,item){
		        var new_li = $("<li></li>").appendTo(spn.menuBox);
		        /*添加二级菜单*/
		        if(item.url){
			        $("<a href='" + root + item.url +"'>" + item[lang+"_name"] + "</a>").appendTo(new_li);
		        }else{
			      $("<a href='JavaScript:void(0)'>" + item[lang+"_name"] + "</a>").appendTo(new_li);
		        }		
		        if(item.items){
		          var sec_ul = $("<ul></ul>").appendTo(new_li);
		          $.each(item.items ,function(sec_index,sec_item){
		              $("<li><a href='" + root + sec_item.url +"'>" + sec_item[lang+"_name"] + "</a></li>").appendTo(sec_ul);			           
		          });
		        }
	        })
		}).fail(function(){
		 	alert("nav JSON error!");
		});
	},
	lang : {
		init : function(){
		   spn.lang.registerWords();
		   spn.lang.translate();
		} ,
		setLanguage: function(language){
			var allcookies = document.cookie;
		    $.cookie("zl_lang" , language , { expires: 9999 , path: '/'});
		} ,
		getLanguage:function(){
		    return ($.cookie("zl_lang") || "cn");
		} ,
		translate : function(){
			var language = spn.lang.getLanguage();  
			$.getJSON(root + "/json/json_" + language + ".js").done(function(json){	
		        $("[lang]").each(function() {  
		        	var lang_attr = $(this).attr("lang") ;
		        	switch (this.tagName.toLowerCase()) {  
			            case "input":  
			                $(this).val(json[lang_attr] || lang_attr);  
			                break;  
			            default:  
			                $(this).text(json[lang_attr] || lang_attr);
			                break;			        
			        }  
			    });  
		    }).fail(function(){
			 	alert("lang JSON error!");
			}); 

		} ,
		registerWords : function(){
			$("[lang]").each(function() {  
		        switch (this.tagName.toLowerCase()) {  
		            case "input":  
		                $(this).attr("lang", $(this).val());  
		                break;  
		            default:  
		                $(this).attr("lang", $(this).text());  
		        }  
		    });  
		}
	}
}

$.ajaxSetup ({
	cache: false //close AJAX cache
});