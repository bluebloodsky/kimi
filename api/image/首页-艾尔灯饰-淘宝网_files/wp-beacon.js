/*pub-1|2013-10-17 10:05:15*/(function(){var g=window,z=document;if(!g.goldlog){setTimeout(arguments.callee,200);return}var k=g.goldlog,e=[["sw",g.screen.width],["sh",g.screen.height]],n=location,p=n.protocol,w="https:"==p,b=w?p:"http:",t=b+(w?"//log":"//ga")+".mmstat.com/",a=b+(w?"//log":"//go")+".mmstat.com/",c=t+"ued.1.1.1?logtype=6",r=a+"ued.1.1.5?logtype=5",i=k._microscope_data||{},d=i.prototypeId||"",q=true,m=false,f=0,v=(new Date()).getTime(),u=v;if(d!="1"&&d!="2"&&d!="4"){return}function o(B){var A;while(B&&B.tagName!="BODY"){A=k.tryToGetAttribute(B,"microscope-data");if(A){break}B=B.parentNode}return A||""}function l(E){var G=z.getElementsByTagName("*"),B,D,C,H,F,A;for(B=[];E&&E.nodeType==1;E=E.parentNode){A=E.getAttribute("id");if(A){H=0;for(D=0;D<G.length;D++){F=G[D];if(F.id==A){H++;break}}B.unshift(E.tagName.toLowerCase()+'[@id="'+A+'"]');if(H==1){B.unshift("/");return B.join("/")}}else{for(D=1,C=E.previousSibling;C;C=C.previousSibling){if(C.tagName==E.tagName){D++}}B.unshift(E.tagName.toLowerCase()+"["+D+"]")}}return B.length?"/"+B.join("/"):null}function h(){var C=z.compatMode=="BackCompat"?z.body:z.documentElement,A=Math.max(C.scrollWidth,C.clientWidth),B=Math.max(C.scrollHeight,C.clientHeight);return[A,B,C.scrollTop,C.scrollLeft]}function x(B,I){var D=h(),E=D[0],M=D[1],K=D[2],F=D[3];var N=I.pageX,L=I.pageY;if(!k.isNumber(N)){N=I.clientX+F;L=I.clientY+K}var J=-1,H,A;if(B){if(B.getBoundingClientRect){A=B.getBoundingClientRect();J=A.left+F;H=A.top+K}else{}}var C=E>>1,G;N-=C;J-=C;G=k.isNumber(H)?[["elx",J],["ely",H],["elw",B.offsetWidth],["elh",B.offsetHeight]]:[];G.concat([["docw",E],["doch",M],["x",N],["y",L]]);return G}function y(A){while(A){if(!A.tagName||A.tagName=="BODY"){break}if(k.tryToGetAttribute(A,"data-componentid")=="4111"){return q}A=A.parentNode}return m}function s(E,K){var B,G,C,L,N,D,J=0,H,O,A=y(E),M=o(E),F=0,I=[];if(!M){return}if(!A&&d!="1"&&d!="4"){return}I.push(["xpath",l(E)]);while(E&&E!=z){D=E.tagName;if(D&&D!="HTML"){J=1}if(!L&&(D=="A"||D=="AREA"||D=="IMG"||D=="BUTTON"||D=="INPUT"||D=="TEXTAREA")){L=E;F=1}if(D=="A"||D=="AREA"){N=E;B=k.tryToGetHref(E)}if(O=k.tryToGetAttribute(E,"data-widgetid")){I.push(["widgetid",O])}if(O=k.tryToGetAttribute(E,"data-componentid")){I.push(["componentid",O])}if(!(G=E.parentNode)){break}E=G}if(!J||!F){return}if(B){I.push(["href",B])}if(F){I.push(["udp_wm_valid_hit",1])}else{return}H=x(L,K);I.concat(H);f++;I.push(["cc",f]);C=(new Date()).getTime();I.push(["t",C-v]);I.push(["t2",C-u]);u=C;I.push(["udp_wm_type",1]);I.push(["page_id",i.pageId||""]);I.push(["shop_id",i.shopId||""]);I.push(["site_instance_id",i.siteInstanceId||""]);I.push(["page_prototypeId",d]);I.push(["siteCategory",i.siteCategory||""]);I.push(["moduleId",M]);if(d!="2"){j(c,I)}if(A){j(r,I)}}function j(B,C){var A=C.concat(e);k.send(B,A)}k.on(z,"mousedown",function(B,A){if(A){s(A,B)}})})();