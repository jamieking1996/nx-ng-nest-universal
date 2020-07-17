/*! -- File: tryMe.js ( Input 0 ) -- */
function tryMe(X){function Y(){e.on(k.CORRECT,function(){q+=1;var b;b=0!=d?d-2:f.length-1;l.overallStep=b;l.currentSection=r(b);l.currentStep=t(b);l.steps[b].clicks=q-P;l.steps[b].elapsedTime=u-Q;l.total.elapsedTime=u;P=l.total.clicks=q;Q=u;e.trigger(k.ASSESSMENT_CHANGED,l)});e.on(k.INCORRECT,function(){0<=d&&d<=f.length-1&&(q+=1,l.total.clicks=q,l.total.elapsedTime=u,e.trigger(k.ASSESSMENT_CHANGED,l))});e.on(k.RESTART_BUTTON,function(){v=!1;d=0;a.sideContainer.find(".active .arrow-hint").removeClass("arrow-hint-active");
F()})}function Z(){$(window).on("resize."+e.attr("id"),function(){G();m==h.TYPED&&H(!0)});a.carousel.click(function(){m==h.TYPED?c.flashTypedStepHint():c.flashHint(!a.hintButton.prop("disabled"));e.trigger(k.INCORRECT,c);n=0});a.hotspot.on("mousedown touchstart",function(b){m==h.DRAG_START&&(a.dragOverlay.stop(),c.nextStep(),I(b),w=!0,a.dragOverlay.show(),a.dragOverlay.css("opacity",1))});a.hotspot.on("mouseup touchend",function(b){if(m==h.DRAG_FINISH&&x==h.DRAG_START){if("touchend"==b.type){var g=
b.originalEvent.changedTouches[0],d;d=g.pageX;var g=g.pageY,f=a.hotspot[0].getBoundingClientRect();d=f.left<=d&&d<=f.right&&f.top+window.scrollY<=g&&g<=f.bottom+window.scrollY?!0:!1;d&&(b.stopPropagation(),c.nextStep(),y(!0))}else b.stopPropagation(),y(!0);e.trigger(k.CORRECT,c)}});a.carousel.on("mouseup touchend",function(){m==h.DRAG_FINISH&&x==h.DRAG_START&&c.prevStep();y(!1)});a.carousel.on("mousemove touchmove",function(b){w&&("touchmove"==b.type&&(b=b.originalEvent.touches[0]),I(b))});a.carousel.on("mouseleave touchleave",
function(){a.carousel.mouseup()});a.carousel.find("img").on("dragstart",function(b){b.preventDefault()});a.hotspot.click(function(b){b.preventDefault();b.stopPropagation();b=a.carousel.find(".active");var g=$(b).data("click-count");n++;if(n===parseInt(g)|!g){n=0;if(m!==h.DRAG_START&&m!=h.TYPED||m==h.DRAG_FINISH&&x!=h.DRAG_START&&m!=h.TYPED)w?y(!0):(c.nextStep(),e.trigger(k.CORRECT,c));null!==z&&clearTimeout(z)}else 1<n&&1<parseInt(g)|!g&&clearTimeout(z),z=setTimeout(function(){n!=parseInt(g)|!g&&
(c.flashHint(!a.hintButton.prop("disabled")),e.trigger(k.INCORRECT,c),n=0)},1500)});a.startScreen.find(".btn").click(function(){c.nextStep();e.trigger(k.START,c)});a.carouselContainer.find(".try-me-restart-btn").click(function(){$(this).blur();e.trigger(k.RESTART_BUTTON,c);c.nextStep();e.trigger(k.START,c)});a.continueScreen.find(".info-continue .btn-step-continue").click(function(b){b.stopPropagation();a.sideContainer.find(".active .arrow-hint").removeClass("arrow-hint-active");c.nextStep()});e.find("#fullScreen").click(function(){c.toggleFullscreen()});
a.hintButton.click(function(){c.showHint()})}function r(b){var g,d=!1;for(g=1;!d;g++){var c=a.sectionInfo.find("#section-"+g).data("section-size");null!=c&&(c>=b?d=!0:b-=c)}return g-1}function t(b){var g=1,d,c=!1;for(d=1;!c;d++){var e=a.sectionInfo.find("#section-"+d).data("section-size");null!=e&&(e>=b?c=!0:(g++,b-=e))}return b}function A(b){var g=t(b);b=r(b);var c=a.carousel.find("[data-step-count\x3d'"+g+"'][data-section-count\x3d'"+b+"']");b=B();var e=Math.max(0,d-1),f=c.data("hotspotMinx"),h=
c.data("hotspotMiny"),g=c.data("hotspotWidth")*b,c=c.data("hotspotHeight")*b,e=a.carousel.find("img")[e].width,f=f*b;b*=h;a.carousel.width()>e&&(f=parseFloat(f,10)+(a.carousel.width()-e)/2);return{left:f,top:b,width:g,height:c}}function J(b){return a.carousel.find("[data-step-count\x3d'"+b+"']").data("eventType")}function C(){var b=A(d);a.hotspot.css({top:b.top+"px",left:b.left+"px",width:b.width+"px",height:b.height+"px"});J(d)==h.TYPED&&(0>b.width&&K(),$("#typedStepInput").css({width:b.width+"px",
height:b.height+"px"}))}function L(b){p=!1;b?($("#typedStepInput").prop("disabled",!0),setTimeout(function(){c.nextStep();$("#typedStepInput").prop("disabled",!1)},1E3)):c.nextStep()}function R(b){1==p&&(13==b&&"ENTER_PRESSED"==f[d-1].reasonTypingEnded?L(!1):9==b&&"TAB_PRESSED"==f[d-1].reasonTypingEnded?L(!1):"MOUSE_MOVED"!=f[d-1].reasonTypingEnded&&"CAPTURE_ENDED"!=f[d-1].reasonTypingEnded||L(!0))}function aa(){$("#typedStepInput").unbind();a.hotspot.css({visibility:""});$("#typedStepInput").removeClass("hidden");
$("#typedStepInput").on("keydown",function(b){9==b.keyCode||13==b.keyCode?b.preventDefault():p=!1;R(b.keyCode)});$("#typedStepInput").on("keyup",function(b){p=!1;b.preventDefault();$("#typedStepInput").val().replace(/^\s+|\s+$/g,"")==f[d-1].stringTyped&&(p=!0);"MOUSE_MOVED"==f[d-1].reasonTypingEnded&&R(b.keyCode)})}function K(){$("#typedStepInput").attr("placeholder","");$("#typedStepInput").val("");$("#typedStepInput").hasClass("hidden")||$("#typedStepInput").addClass("hidden")}function S(){a.hotspot.hasClass("tooltipstered")&&
a.hotspot.tooltipster("destroy")}function ba(){a.infoScreen.find(".info-text").text(f[d-1].instructionalText);a.infoScreen.removeClass("modal-faded");a.infoScreen.find(".centered-element").show();a.infoScreen.find(".info-restart").show();a.infoScreen.fadeIn(500).prop("disable",!1);setTimeout(function(){a.infoScreen.addClass("modal-faded");a.infoScreen.fadeOut(500)},2500)}function D(){var b=t(d),g=r(d),c=a.carousel.find("[data-step-count\x3d'"+b+"'][data-section-count\x3d'"+g+"']"),e=c.data("hotspotwidth"),
k=c.data("hotspotHeight");x=m;m=c.data("eventType");a.sideContainer.find(".list-group").children().each(function(){var a=$(this).data("step-count"),c=$(this).data("section-count");c<g||c==g&&a<b?($(this).children(".try-me-done-overlay").show(),$(this).find(".step-checkmark").show(),$(this).find(".step-number").hide(),$(this).removeClass("active"),$(this).find(".continue-container").addClass("hidden"),$(this).addClass("disabled")):(c==g&&a==b?($(this).addClass("active"),$(this).removeClass("disabled"),
0>k&&d<f.length&&$(this).find(".continue-container").removeClass("hidden")):($(this).removeClass("active"),$(this).addClass("disabled")),$(this).children(".try-me-done-overlay").hide(),d==f.length?($(this).find(".step-checkmark").show(),$(this).find(".step-number").hide()):($(this).find(".step-checkmark").hide(),$(this).find(".step-number").show()))});(0>=e||0>=k)&&d==f.length?ba():0>=e||0>=k?(a.infoScreen.find(".info-restart").hide(),a.continueScreen.fadeIn(500).prop("disable",!1)):(a.continueScreen.prop("disabled",
!0).fadeOut(),a.infoScreen.prop("disabled",!0).fadeOut(500));0==d||0==a.infoScreen.prop("disabled")?(a.hotspot.css("visibility","hidden"),a.hintButton.hide()):m==h.TYPED?(a.hotspot.css("visibility","hidden"),H(!0),null!=f[d-1].stringTyped&&a.hotspot.css("visibility",""),a.hintButton.prop("disabled",!1),a.hintButton.show()):(a.hotspot.css("visibility",""),H(!1),a.hintButton.show(),a.hintButton.prop("disabled",!1));a.hotspot.removeClass("hotspotHint")}function ca(){if(T(d)){var b=da(),c=0,e=!0;"right"===
b&&(c=a.carousel.height()/2,e=!1);a.hotspot.tooltipster({content:T(d),position:b,contentAsHTML:!0,maxWidth:a.carousel.width()/2,maxHeight:a.carousel.height()/2,functionPosition:function(b,a,d){d.coord.top+=c;return d},trigger:"hover",arrow:e}).tooltipster("show")}}function da(){var b=A(d);return 0>b.width?"right":(b.top+(b.top+b.height))/2>a.carousel.height()/2?"top":"bottom"}function T(b){var a=f[b-1].hintText;J(b)!=h.TYPED||a||(a=f[b-1].instructionalText);return a}function ea(){p||($("#typedStepInput").val(""),
$("#typedStepInput").focus());$("#typedStepInput").addClass("inputHotSpotHint");setTimeout(function(){$("#typedStepInput").removeClass("inputHotSpotHint")},4E3)}function H(b){b?null==f[d-1].stringTyped?(a.hotspot.attr("data-original-title","\x3cp\x3e"+f[d-1].instructionalText+"\x3c/p\x3e"+a.tooltipTemplate.prop("innerHTML")).tooltip({html:!0,trigger:"manual",container:a.carousel,placement:"auto bottom"}).tooltip("show"),a.carousel.find(".tooltip .btn-continue").click(function(){c.nextStep()})):(aa(),
$("#typedStepInput").focus()):(a.hotspot.tooltip("hide"),a.carousel.find(".tooltip .btn-continue").unbind())}function M(){var b=a.sideContainer.find(".panel"),c=a.sideContainer.find(".active");b.stop();c=c[0]?c.position().top:0;b.animate({scrollTop:c-b.position().top+b.scrollTop()})}function F(){$restartBTN=a.carouselContainer.find(".try-me-restart-btn");v?$restartBTN.removeClass("disabled"):$restartBTN.addClass("disabled")}function N(){$hintButton=a.hintButton;E?$hintButton.removeClass("disabled"):
$hintButton.addClass("disabled")}function G(){a.sideContainer.find(".panel").css("max-height",a.carouselContainer.height()+"px");C()}function I(b){B();var c=A(d);a.dragOverlay.width(c.width);a.dragOverlay.height(c.height);b?(a.dragOverlay.css("left",b.pageX-a.carousel.offset().left-c.width/2),a.dragOverlay.css("top",b.pageY-a.carousel.offset().top-c.height/2)):(a.dragOverlay.css("left",c.left),a.dragOverlay.css("top",c.top))}function y(b){w=!1;b?a.dragOverlay.fadeOut("fast"):a.dragOverlay.animate({top:a.hotspot.css("top"),
left:a.hotspot.css("left"),opacity:0},"fast")}function B(){var b=c.getOverallStep?c.getOverallStep()-1:0;return captureProjectUtils.getScale(a,U,b)}var c={},h={TYPED:"TYPED",DRAG_START:"START_MOUSE_DRAGGED",DRAG_FINISH:"FINISH_MOUSE_DRAGGED",CLICK:"MOUSE_CLICKED"},k={START:"tryMe.play",RESTART:"tryMe.pause",STEP_CHANGED:"tryMe.stepChanged",CORRECT:"tryMe.actionCorrect",INCORRECT:"tryMe.actionIncorrect",HINT:"tryMe.showHint",ASSESSMENT_CHANGED:"tryMe.assessmentChanged",RESTART_BUTTON:"tryMe.restart"},
m,x,e,a,V,W,p=!1,w=!1,U=!1,d=0,q=0,u=0,P=0,Q=0,n=0,z=null,v=!1,E=!1,f=[],O=[],l={steps:[],total:{clicks:0,elapsedTime:0},currentStep:0,currentSection:0,overallStep:0};(function(b){e=b.container;for(var c=0;c<b.sections.length;c++)f=f.concat(b.sections[c].steps);for(c=0;c<f.length;c++)l.steps.push({clicks:0,elapsedTime:0});a={sectionInfo:e.find("#sectionInfo"),carousel:e.find("#softwareSimCarousel"),carouselContainer:e.find("#tryMeContainer"),hotspot:e.find("#targetHotspot"),dragOverlay:e.find("#tryMeDragOverlay"),
hintButton:e.find("#hintButton"),sideContainer:e.find("#tryMeSideContainer"),infoScreen:e.find("#tryMeInfoScreen"),startScreen:e.find("#startScreen"),continueScreen:e.find(".continue"),tooltipTemplate:e.find("#tooltipTemplate")};a.carousel.find(".item:first").addClass("active");G();D();V=setInterval(G,1E3);a.dragOverlay.hide();Z();Y();W=setInterval(function(){u+=1},1E3)})(X);c.destroy=function(){$(window).off("resize."+e.attr("id"));a.carousel.off();a.hotspot.off();a.carousel.off();a.carousel.find("img").off();
a.startScreen.find(".btn").off();a.continueScreen.find(".btn").off();a.hintButton.off();a=null;clearInterval(V);clearInterval(W)};c.getOverallStep=function(){return d};c.getAssessment=function(){return l};c.goToStep=function(b){var g=a.sideContainer.find(".list-group"),h=$(b).closest("li").attr("data-step-count");b=$(b).closest("li").attr("data-section-count");h=parseInt(h);b=parseInt(b);if(1!=b){var m=0,l;for(l=1;l<b;l++){var n=a.sectionInfo.find("#section-"+l).data("section-size");null!=n&&(m+=
n)}h=m+h}O.length>=h&&h<f.length&&(S(),K(),d=h,b=d-1,h=t(b),b=r(b),h=a.carousel.find("[data-step-count\x3d'"+h+"'][data-section-count\x3d'"+b+"']"),g.find(".continue-container").addClass("hidden"),a.sideContainer.find(".active .arrow-hint").removeClass("arrow-hint-active"),d==f.length-1&&a.continueScreen.find(".info-continue").show(),1==d&&(v=!1,F()),0<d&&(E=!0,N()),h.length?(a.startScreen.fadeOut(500).find("button").prop("disabled",!0),a.carousel.carousel(d-1)):a.carousel.carousel(0),C(),D(),M(),
e.trigger(k.STEP_CHANGED,c))};a.sideContainer.find("li").on("click",function(a){c.goToStep(a.target)});c.nextStep=function(){S();K();0<d?v=!0:!1;E=!0;F();N();var b=d+1,g=t(b),b=r(b),g=a.carousel.find("[data-step-count\x3d'"+g+"'][data-section-count\x3d'"+b+"']");d==f.length-1?(E=!1,N()):a.continueScreen.find(".info-continue").show();g.length?(a.startScreen.fadeOut(500).find("button").prop("disabled",!0),a.carousel.carousel(Math.max(0,d)),d++):(d=0,a.carousel.carousel(0),a.startScreen.fadeIn(500).find("button").prop("disabled",
!1));0>O.indexOf(d)&&O.push(d);C();D();M();e.trigger(k.STEP_CHANGED,c)};c.prevStep=function(){a.carousel.carousel(Math.max(0,d-2));d--;D();C();M()};c.flashTypedStepHint=function(){var b=a.sideContainer.find(".active");b.addClass("stepHint");setTimeout(function(){b.removeClass("stepHint")},400)};c.flashHint=function(b){var c=a.sideContainer.find(".active");b&&a.hintButton.addClass("stepHint");c.addClass("stepHint");setTimeout(function(){a.hintButton.removeClass("stepHint");c.removeClass("stepHint")},
400)};c.flashContinue=function(){a.sideContainer.find(".active .arrow-hint").addClass("arrow-hint-active")};c.showTypedStepHint=function(){ea()};c.showHintText=function(){ca()};c.showHint=function(){a.hintButton.prop("disabled",!0);var b=J(d+1);m==h.DRAG_START&&b==h.DRAG_FINISH?(B(),b=A(d+1),I(),a.dragOverlay.show(),a.dragOverlay.css("opacity",1),a.dragOverlay.stop(),a.dragOverlay.animate({left:b.left+b.width/2-a.hotspot.width()/2,top:b.top+b.height/2-a.hotspot.height()/2},1E3,function(){a.dragOverlay.fadeOut("fast");
a.hintButton.prop("disabled",!1)})):m==h.TYPED?c.showTypedStepHint():0<a.hotspot.height()?a.hotspot.addClass("hotspotHint"):c.flashContinue();c.showHintText();e.trigger(k.HINT,c)};c.toggleFullscreen=function(){captureProjectUtils.toggleFullscreen(e,a,B(),function(a){U=a})};return c};