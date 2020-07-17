/*! -- File: jquery.videoPlaylist.js ( Input 0 ) -- */
!function(c){var b=function(a,e){this.completion=e.completion||{};this.options=e;this.parent=this.options.parentSelector?c(c(a).closest(this.options.parentSelector)):c(a).parent();this.container=c(a);this.outline=e.outline;this.state={runningVideo:null};this.lookup=this.outline.elements.reduce(function(a,e){a[e.id]=e;return a},{});c(a).addClass("dki-videoplaylist");this.sizeVideo=DKI.func.debounce(c.proxy(function(){if(!this.options.responsive)return!1;var a=this.container.find(".vidWrapper"),e=.5625*
a.width(),b=this;this.container.height("auto");this.container.find(".menu").height(0);setTimeout(function(){b.container.height(b.container.height());b.container.find(".menu").css("height","")},1);a.height(e-30)},this),50,!1);switch(e.type){case "youtubeEmbed":this.interface=b.youtubeVideo;break;case "vimeoEmbed":this.interface=b.vimeoVideo;break;case "videoAsset":this.interface=b.assetVideo}this.initHandlers();this.render();this.initCompletion();this.sizeVideo();return this};b.DEFAULTS={completion:!1,
autoPlay:!0,showTime:!0,responsive:!1,collapsed:!1,dragInteract:!1,listeners:{start:function(){},play:function(){},pause:function(){},end:function(){},videoLoaded:function(){}}};b.prototype={render:function(){c.fn.RadialGauge&&this.options.showTime&&(this.container.find(".gauge").RadialGauge({parentSelector:".completion",ringSize:.33,current:function(){return 0}}),this.container.find(".gauge").RadialGauge("resize",20).RadialGauge("setRotation",100))},initHandlers:function(){var a=this;if(this.options.dragInteract)this.container.on("dragenter.dkivp",
function(e){a.container.addClass("drop");a.container.find(".dragD").one("dragleave drop",function(e){a.container.removeClass("drop")});return!1});this.container.on("click.dkivp",".menu li:not(.active)",function(e,b){a.loadVideo(c(this).index(),"undefined"!==typeof b?b:!0);c(this).siblings().removeClass("active");c(this).addClass("active");return!1});this.container.on("click.dkivp",".menu li.active",function(b,f){b=a.outline.elements[c(this).index()];if(a.videoInterface&&a.videoInterface.outline.id==
b.id)a.videoInterface[a.videoInterface.isPlaying?"pause":"play"]();return!1});this.container.on("change.dkivp",".tgl-light",function(b,f){a.options.autoPlay=c(this).checked();return!0});this.container.on("click.dvkivp",".vp-collapse",function(){a.toggleMenu()});this.container.on("click.dkivp",".menu li .skipToContent",function(b,c){a.videoInterface&&a.videoInterface.focusVideo();return!1});this.container.on("click.dkivp",".skipToMenu",function(b,c){b=a.container.find(".menu li.active");b[0]&&b[0].focus();
return!1});if(this.options.responsive)c(window).on("resize",this.sizeVideo)},loadVideo:function(a,b){a=this.outline.elements[a];var f=this;this.videoInterface||(this.videoInterface=new this.interface(a,this.container,{listeners:{start:c.proxy(this.started,this),end:c.proxy(this.ended,this),play:c.proxy(this.played,this),pause:c.proxy(this.paused,this),timeUpdate:c.proxy(this.timeUpdate,this)}}));this.videoInterface.load(a,b,function(){f.options.listeners.videoLoaded.call(f)},this.completion[a.id]);
this.container.find(".videoContainer h3 .vidTitle").html(a.title).attr("title",a.title);this.container.find(".skipToMenu").attr("tabindex",1);this.sizeVideo()},setCompletion:function(a,b,c){var d=b.find(".progress .progress-bar");d&&d.css("width",a+"%");b.find(".gauge")&&(b.find(".gauge").removeClass("notSeen").RadialGauge("setRotation",a),(100===a||c)&&b.find(".gauge").addClass("complete").find(".fa").attr("class","fa fa-check"))},selectFirst:function(){c(this.container.find(".menu li").first()).trigger("click",
this.options.autoPlay)},selectLast:function(){c(this.container.find(".menu li").last()).trigger("click",!1)},setOption:function(a,b){this.options[a]=b},destroy:function(){c(window).off("resize",this.sizeVideo);this.videoInterface&&this.videoInterface.destroy();this.container.off("dkivp");this.container.data("dki.VideoPlaylist",null)},ended:function(a){a=this.container.find(".menu li.active");this.options.listeners.end.call(this);this.completion[a.data("id")].complete=!0;this.options.autoPlay&&(a=
a.next(),a[0]&&a.trigger("click"))},started:function(a){this.options.listeners.start.call(this)},timeUpdate:function(a,b){a=this.container.find(".menu li.active");a.data("completion");this.setCompletion(b.current/b.duration*100,a);this.completion[a.data("id")]=this.completion[a.data("id")]||{time:0,complete:!1};this.completion[a.data("id")].time=b.current},played:function(){this.options.listeners.play.call(this);this.container.trigger("play")},paused:function(a){this.options.listeners.pause.call(this)},
toggleMenu:function(){this.options.collapsed=!this.options.collapsed;this.container.find(".menu").css("display",this.options.collapsed?"none":"");this.container.find(".vp-collapse.h").removeClass("fa-chevron-right fa-chevron-left").addClass("fa-chevron-"+(this.options.collapsed?"left":"right"));this.container.find(".vp-collapse.v").removeClass("fa-chevron-up fa-chevron-down").addClass("fa-chevron-"+(this.options.collapsed?"down":"up"));this.sizeVideo()},getCompletion:function(){return this.completion},
initCompletion:function(){var a=this.container.find(".menu li"),b=this;c.each(this.completion,function(c,d){d=a.filter("*[data-id\x3d'"+c+"']");(c=b.lookup[c])&&b.setCompletion(this.time/(c.parameters.config.duration||0)*100,d,this.complete)})}};c.fn.VideoPlaylist=function(a){var e=a,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=c(this),g=c(this).data("dki.VideoPlaylist");options=c.extend(!0,{},b.DEFAULTS,"object"===typeof e&&e);if("string"===typeof a&&!g)return!1;g?
"string"===typeof a&&(d=c(this).data("dki.VideoPlaylist"))&&d[a]&&d[a].apply(c(this).data("dki.VideoPlaylist"),f):d.data("dki.VideoPlaylist",new b(this,options))})};c.fn.VideoPlaylist.Constructor=b;var h=function(){return Error("Not Implemented")};b.videoInterface=function(){};b.videoInterface.prototype="render load destroy onReady play pause stop getTime getURL focusVideo".split(" ").reduce(function(a,b){a[b]=h;return a},{});b.videoInterface.prototype.setVideoAccessible=function(a){c(a).attr("tabindex",
1).attr("aria-label",this.outline.title)};b.youtubeVideo=function(a,b,c){this.options=DKI.applyIf(c,{listeners:{start:function(){},pause:function(){},play:function(){},end:function(){},timeUpdate:function(){}}});this.container=b.find(".vidWrapper");this.outline=a;this.isPlaying=!1;this.render();return this};b.youtubeVideo.prototype=Object.create(b.videoInterface.prototype);b.youtubeVideo.prototype.render=function(){var a=this,b="APIFrame_"+this.outline.parent_element_id;this.container.html("\x3cdiv id\x3d'"+
b+"'\x3e\x3c/div\x3e");youtubePlayerReady(function(){var c=new YT.Player(b,{height:"100%",width:"100%",playerVars:{playsinline:1,rel:0},events:{onReady:function(b){a.setVideoAccessible(c.a);a.API=c;a.container.trigger("youtubeReady")},onStateChange:function(b){YT.PlayerState.ENDED===b.data?a.ended.call(a):YT.PlayerState.PLAYING===b.data?(a.API.started||(a.started.call(a),a.API.started=!0,a.loaded()),a.playing.call(a)):YT.PlayerState.PAUSED===b.data?a.paused.call(a):YT.PlayerState.CUED===b.data&&a.loaded()},
onError:function(a){}}})})};b.youtubeVideo.prototype.onReady=function(a){if(this.API)a.call(this);else this.container.on("youtubeReady",c.proxy(a,this))};b.youtubeVideo.prototype.load=function(a,b,f,d){this.outline=a;this.loaded=f||function(){};this.clearTimer();this.onReady(c.proxy(function(){this.API.started=!1;(b?this.API.loadVideoById:this.API.cueVideoById).call(this.API,a.parameters.config.videoId,d?d.time/1E3:0)},this))};b.youtubeVideo.prototype.destroy=function(){if(this.API)try{this.API.destroy()}catch(a){}this.clearTimer()};
b.youtubeVideo.prototype.startTimer=function(){var a=1E3*this.API.getCurrentTime()%1E3,b=this;this.clearTimer();this.timer=setTimeout(function(){b.timeUpdated();b.interval=setInterval(function(){b.timeUpdated()},1E3)},a)};b.youtubeVideo.prototype.clearTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null)};b.youtubeVideo.prototype.started=function(){this.isPlaying=!0;this.startTimer();this.options.listeners.start.call(this)};b.youtubeVideo.prototype.playing=function(){this.isPlaying=
!0;this.startTimer();this.options.listeners.play.call(this)};b.youtubeVideo.prototype.ended=function(){this.isPlaying=!1;clearInterval(this.interval);this.timeUpdated();this.options.listeners.end.call(this)};b.youtubeVideo.prototype.paused=function(){this.isPlaying=!1;clearInterval(this.interval);this.timeUpdated();this.options.listeners.pause.call(this)};b.youtubeVideo.prototype.timeUpdated=function(){this.options.listeners.timeUpdate(this,{current:Math.round(1E3*this.API.getCurrentTime())/1E3*1E3,
duration:Math.round(1E3*this.API.getDuration())/1E3*1E3})};b.youtubeVideo.prototype.getTime=function(){return this.API.getCurrentTime()};b.youtubeVideo.prototype.getDuration=function(){return 1E3*this.API.getDuration()};b.youtubeVideo.prototype.getUrl=function(a){a(this.API.getVideoUrl())};b.youtubeVideo.prototype.play=function(){this.API&&this.API.playVideo()};b.youtubeVideo.prototype.pause=function(){this.API&&this.API.pauseVideo()};b.youtubeVideo.prototype.focusVideo=function(){this.API&&this.API.a.focus()};
b.vimeoVideo=function(a,b,c){this.options=DKI.applyIf(c,{listeners:{pause:function(){},play:function(){},end:function(){},timeUpdate:function(){}}});this.container=b.find(".vidWrapper");this.outline=a;this.runTimeUpdate=!0;this.isPlaying=!1;this.render();return this};b.vimeoVideo.prototype=Object.create(b.videoInterface.prototype);b.vimeoVideo.prototype.render=function(){var a=this,b="APIFrame_"+this.outline.parent_element_id;this.frame=c("\x3cdiv id\x3d'"+b+"' style\x3d'width:100%;height:100%;transition:opacity 100ms linear; opacity : 0'\x3e\x3c/div\x3e").appendTo(this.container);
vimeoSDKReady(function(f){f=f||Vimeo.Player;a.API=new f(c("#"+b)[0],{height:100,width:100,id:a.outline.parameters.config.videoId});a.setVideoAccessible(a.frame);a.API.on("play",function(){a.playing.call(a)});a.API.on("pause",function(){a.paused.call(a)});a.API.on("ended",function(){a.ended.call(a)});a.API.on("timeupdate",function(b){a.runTimeUpdate&&a.timeUpdated.call(a,b)});a.container.trigger("vimeoReady")})};b.vimeoVideo.prototype.onReady=function(a){if(this.API)a.call(this);else this.container.on("vimeoReady",
c.proxy(a,this))};b.vimeoVideo.prototype.load=function(a,b,f,d){this.outline=a;this.runTimeUpdate=!1;this.onReady(c.proxy(function(){var g=this;this.API.loadVideo({id:a.parameters.config.videoId}).then(function(a){c(g.API.element).css({width:"100%",height:"100%"});g.frame.css("opacity",1);a=function(){f();g.runTimeUpdate=!0;if(b)return g.API.play()};d?g.API.setCurrentTime(d.time/1E3).then(a):a()})},this))};b.vimeoVideo.prototype.destroy=function(){if(this.API)try{this.API.destroy()}catch(a){}};b.vimeoVideo.prototype.playing=
function(){this.isPlaying=!0;this.options.listeners.play.call(this)};b.vimeoVideo.prototype.ended=function(){this.isPlaying=!1;this.options.listeners.end.call(this)};b.vimeoVideo.prototype.paused=function(){this.isPlaying=!1;this.options.listeners.pause.call(this)};b.vimeoVideo.prototype.timeUpdated=function(a){this.options.listeners.timeUpdate(this,{current:Math.round(1E3*a.seconds)/1E3*1E3,duration:Math.round(1E3*a.duration)/1E3*1E3})};b.vimeoVideo.prototype.getUrl=function(a){this.API.getVideoUrl().then(function(b){a(b)})};
b.vimeoVideo.prototype.play=function(){this.API&&this.API.play()};b.vimeoVideo.prototype.pause=function(){this.API&&this.API.pause()};b.vimeoVideo.prototype.focusVideo=function(){this.frame&&this.frame.focus()};b.assetVideo=function(){};b.assetVideo.prototype=Object.create(b.videoInterface.prototype)}(window.jQuery);var youtubeReadyCallback=[];
function youtubePlayerReady(c){if("undefined"===typeof YT){var b=document.createElement("script");b.src="https://www.youtube.com/iframe_api";var h=document.getElementsByTagName("script")[0];h.parentNode.insertBefore(b,h);youtubeReadyCallback.push(c)}else c()}function onYouTubeIframeAPIReady(){for(;0<youtubeReadyCallback.length;)youtubeReadyCallback.pop()()}var vimeoCallbacks=[];
function vimeoSDKReady(c){if("undefined"!==typeof requirejs)requirejs(["https://player.vimeo.com/api/player.js"],c);else if("undefined"===typeof Vimeo){var b=document.createElement("script");b.src="https://player.vimeo.com/api/player.js";var h=document.getElementsByTagName("script")[0];b.onload=function(){for(;0<vimeoCallbacks.length;)vimeoCallbacks.pop()()};h.parentNode.insertBefore(b,h);vimeoCallbacks.push(c)}else c()};