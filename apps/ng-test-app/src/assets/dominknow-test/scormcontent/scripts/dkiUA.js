/*! -- File: dkiUA.js ( Input 0 ) -- */
var dkiUA=function(){var x=!1,g=!1,h=0,k=!1,d,y=!1,z=0,c=!1,e=!1,A=!1,B=!1,l=0,m=0,n=!1,p=0,b=!1,C=!1,q=0,r=!1,t=!1,u=0,v=!1,D=!1,E=!1,w=0,N=/webOS/i,O=/iphone|ipad|ipod/i,P=/OS (\d\_?\d)/i,Q=/iPad/i,R=/BlackBerry/i,F=/Version\/(\d\.?\d)/i,S=/Android/i,G=/Android (\d\.?\d)/i,T=/Android (\d)/i,U=/Android[\/|\d|\.]* *\((\d+\.*\d+)/i,V=/CellCast[^|]*\|([\d.?]*)\|([^|]*)\|([^|]*)/,W=/Mobile/i,H=/Windows Phone OS|Windows Phone/i,X=/NT (\d\.?\d)/i,Y=/OS X (\d\.?\d)/i,I=/Chrome/i,Z=/Chrome\/([0-9\.]*)\s/,
J=/Version\/([0-9]+)/,K=/Edge\/([0-9]+)/,L=/(MSIE |rv:)([0-9]+)/,M=/Firefox\/([0-9]+)/,f=null,aa=/CrOs/i,ba=location.protocol,a={os:"",osVersion:"",browser:"",browserVersion:"",platform:"",userAgent:navigator.userAgent};/CellCast/i.test(navigator.userAgent)&&(b=v=!0);H.test(navigator.userAgent)?b=c=!0:N.test(navigator.userAgent)?(b=e=x=!0,a.browser="webkit",browserPoperties.os="webOS"):O.test(navigator.userAgent)?(g=!0,h=parseFloat(P.exec(navigator.userAgent)[1]),b=e=!0,a.browser="safari",a.os="ios",
a.osVersion=h,a.platform=Q.test(navigator.userAgent)?"tablet":""):R.test(navigator.userAgent)?(y=!0,F.test(navigator.userAgent)&&(z=parseFloat(F.exec(navigator.userAgent)[1])),b=!0):H.test(navigator.userAgent)?(b=c=!0,a.browser="ie",a.os="windowsPhone"):S.test(navigator.userAgent)&&(k=!0,a.browser="android",a.os="android",v?(f=U.exec(navigator.userAgent))?d=parseFloat(f[1]):(f=V.exec(navigator.userAgent),d=parseFloat(f[3])):d=G.exec(navigator.userAgent)?parseFloat(G.exec(navigator.userAgent)[1]):
parseFloat(T.exec(navigator.userAgent)),a.osVersion=d,a.platform=W.test(navigator.userAgent)?"":"tablet",b=!0);/Windows/i.test(navigator.userAgent)&&!c&&(A=!0,l=parseFloat(X.exec(navigator.userAgent)[1]),a.os="windows",a.osVersion=l,a.platform="desktop");!/Mac OS X/i.test(navigator.userAgent)||g||c||(B=!0,m=parseFloat(Y.exec(navigator.userAgent)[1]),a.os="mac",a.osVersion=m,a.platform="desktop");!/Safari/i.test(navigator.userAgent)||I.test(navigator.userAgent)||k||c||(n=!0,a.browser="safari",J.test(navigator.userAgent)&&
(p=parseInt(J.exec(navigator.userAgent)[1],"10"),a.browserVersion=p));I.test(navigator.userAgent)&&(r=!0,a.browser="chrome",aa.test(navigator.userAgent)&&(D=!0),a.browserVersion=parseInt(Z.exec(navigator.userAgent)[1],"10"));/Internet Explorer|ie|IE|Trident/i.test(navigator.userAgent)&&!c&&(C=!0,a.browser="ie",L.test(navigator.userAgent)&&(q=parseInt(L.exec(navigator.userAgent)[2],"10"),a.browserVersion=q));/WebKit/i.test(navigator.userAgent)&&(e=!0);/Firefox/i.test(navigator.userAgent)&&(t=!0,a.browser=
"firefox",M.test(navigator.userAgent)&&(u=parseInt(M.exec(navigator.userAgent)[1],"10"),a.browserVersion=u));/Edge/i.test(navigator.userAgent)&&(E=!0,n=t=r=!1,a.browser="edge",K.test(navigator.userAgent)&&(w=parseInt(K.exec(navigator.userAgent)[1],"10"),a.browserVersion=w));a.platform=b&&"tablet"!=a.platform&&"desktop"!=!a.platform?"smartphone":a.platform;ba.match(/file:/)&&!b&&alert("You are attempting to open a package locally that was meant to be hosted on a web server. Please contact your local server administrator to host the package and make it available to you.");
return{cellcast:v,webOS:x,iOS:g,iOSVersion:h,blackberry:y,blackberryVersion:z,android:k,androidVersion:d,winPhone:c,windows:A,windowsVersion:l,mac:B,macVersion:m,safari:n,safariVersion:p,ie:C,chrome:r,chromeBook:D,ieVersion:q,firefox:t,firefoxVersion:u,mobile:b,webKit:e,edge:E,edgeVersion:w,touchEnabled:"ontouchstart"in document.documentElement,isIE:function(){return-1!==navigator.appVersion.indexOf("MSIE")||-1!==navigator.appVersion.indexOf("Trident/")},isIE8:function(){return-1!==navigator.appVersion.indexOf("MSIE 8")},
isIE7:function(){return-1!==navigator.appVersion.indexOf("MSIE 7")},isIE6:function(){return-1!==navigator.appVersion.indexOf("MSIE 6")},isIE9:function(){return-1!==navigator.appVersion.indexOf("MSIE 9")},isIE10:function(){return-1!==navigator.appVersion.indexOf("MSIE 10")},isIE11:function(){return-1==navigator.appVersion.indexOf("MSIE")&&0<navigator.appVersion.indexOf("Trident/")},getUAProperties:function(){return a}}}();