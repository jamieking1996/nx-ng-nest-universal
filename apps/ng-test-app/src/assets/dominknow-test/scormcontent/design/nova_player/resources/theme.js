!function() {

	// add `responsive` class to body for popup modals
	if(dkiUA.mobile) {
		$('body').addClass('responsive');
	}

	var state = {
		audio: true
	};

	var isXsScreen = false;

	var ds = ''; // dataStorage

	var isMenuPinned = false;
	var skipMenuFocus = true;

	var platform = dkiUA.getUAProperties().platform;
	var useFixedMenu = function(){
		return true;
	};
	var dom = {
		nav: null,
		bottomNav: null,
		menu: null,
		outline: null,
		search: null,
		narration: null,
		transcript: null,
		transcript_menu: null,
		transcript_body: null,
		submit: null
	};
	
	var current = {
		page: null,
		section: null
	};
	
	var config = {};
	var getMaxWidth = function(){
		return config.design.parameters.config ? config.design.parameters.config.constrainCourseWidth : false;
	};
	var GetMaxWidthVal = function(){
		return config.settings.course ? config.settings.course.parameters.maxWidth : false;
	}
	var templates = {
		navigation: "",
		bottomBar: "",
		menu: 
		'<nav id="left_menu" class=\"navmenu navmenu-default navmenu-fixed-left offcanvas canvas-slid in\">' +
			'<ul class=\"nav navmenu-nav\">' +	
				'<li id="navmenu_x_wrapper" class=\"clearfix\">' +
					'<a id="navmenu_x" aria-label=\"{{strings.runtime.buttonLabelClose}}\" href=\"javascript:;\" style=\"display:inline-block\" class="navmenu-link navmenu-submenu-link pull-right" tabindex="-1">' +
						'<i class=\"fa fa-times menu-icon\"></i>' +
					'</a>' +
				'</li>' +
				'<li id="navmenu_search_wrapper">' +
					'<a tabindex="-1">' +
						'<div class="input-group">' +
							'<div class="input-group-addon"><i class="fa fa-search"></i></div>' +
							'<input id="navmenu_search" type="text" class="form-control" placeholder="{{strings.courseSearch.inputPlaceholder}}" tabindex="-1" aria-label="{{strings.courseSearch.inputPlaceholder}}" />' +
						'</div>' +
					'</a>' +
				'</li>' +
				"{{#each custom}}" + 
					'<li id="navmenu_outline_wrapper">' +
					'<a id="{{this.id}}" {{#if this.url}}target=\"_customMenu\"{{/if}} class="navmenu-link navmenu-submenu-link custom ignore_enter" href="{{#if this.url}}{{this.url}}{{else}}javascript:;{{/if}}" data-target="" tabindex="-1" aria-label="{{this.label}}">' +
						'<i class=\"fa {{this.icon}} menu-icon\"></i>{{this.label}}</i>' +
					'</a>' +
				'</li>' +
				"{{/each}}" +
				'<li id="navmenu_outline_wrapper">' +
					'<a id="navmenu_outline" href=\"#\" class="navmenu-link navmenu-submenu-link" data-target="#dki_course_outline" tabindex="-1" aria-label="{{strings.index.outlineTabLabel}}">' +
						'<i class=\"fa fa-sitemap menu-icon\"></i>{{strings.index.outlineTabLabel}}<i class=\"fa fa-chevron-right pull-right\"></i>' +
					'</a>' +
				'</li>' +
				'<li id="navmenu_glossary_wrapper">' +
					'<a id="navmenu_glossary" href=\"#\" class="navmenu-link navmenu-submenu-link" data-target="#dki_glossary_list" tabindex="-1" aria-label="{{strings.index.glossaryButtonLabel}}">' +
						'<i class=\"fa fa-list-ul menu-icon\"></i>{{strings.index.glossaryButtonLabel}}<i class=\"fa fa-chevron-right pull-right\"></i>' +
					'</a>' +
				'</li>' +
				'<li id="navmenu_resource_wrapper">' +
					'<a id="navmenu_resource" href=\"#\" class="navmenu-link navmenu-submenu-link" data-target="#dki_resource_list" tabindex="-1" aria-label="{{strings.index.resourcesButtonLabel}}">' +
						'<i class=\"fa fa-file-o menu-icon\"></i>{{strings.index.resourcesButtonLabel}}<i class=\"fa fa-chevron-right pull-right\"></i>' +
					'</a>' +
				'</li>' +
				'<li id="navmenu_replay_wrapper"><a id=\"replayButton\" href=\"#\" class="navmenu-link" tabindex="-1" aria-label="{{strings.index.replayButtonLabel}}"><i class=\"fa fa-refresh menu-icon\"></i>{{strings.index.replayButtonLabel}}</a></li>' +
				'<li id="navmenu_exit_wrapper"><a id=\"exitButton\" href=\"#\" class="navmenu-link" tabindex="-1" aria-label="{{strings.index.exitButtonLabel}}"><i class=\"fa fa-close menu-icon\"></i>{{strings.index.exitButtonLabel}}</a></li>' +
			'</ul>' +	
		'</nav>',
		"menu_outline":
		'<nav id="dki_course_outline" class="navmenu navmenu-default navmenu-submenu-container">' +					
			'<ul class="nav navmenu-nav navmenu-submenu-back">' +				
				'<li>' +			
					'<a href="#" class="navmenu-link" tabindex="1"><i class=\"fa fa-chevron-left pull-left\"></i>{{@root.strings.courseSearch.back}}</a>' +
				'</li>'	+				
			'</ul>' +
			'{{{dki_course_outline className="navmenu-submenu"}}}' +
		'</nav>',
		"menu_glossary":
		'<nav id="dki_glossary_list" class="navmenu navmenu-default navmenu-submenu-container">' +					
			'<ul class="nav navmenu-nav navmenu-submenu-back">' +				
				'<li>' +			
					'<a href="#" class="navmenu-link" tabindex="1"><i class=\"fa fa-chevron-left pull-left\"></i>{{@root.strings.courseSearch.back}}</a>' +
				'</li>'	+				
			'</ul>' +
			'{{{DKI_templates_glossary_list className="navmenu-submenu"}}}' +
		'</nav>',
		menu_resource:
		'<nav id="dki_resource_list" class="navmenu navmenu-default navmenu-submenu-container">' +					
			'<ul class="nav navmenu-nav navmenu-submenu-back">' +				
				'<li>' +			
					'<a href="#" class="navmenu-link" tabindex="1"><i class=\"fa fa-chevron-left pull-left\"></i>{{@root.strings.courseSearch.back}}</a>' +
				'</li>'	+				
			'</ul>' +
			'{{{DKI_templates_resource_list className="navmenu-submenu"}}}' +
		'</nav>',
		transcript: 
		'<div id="transcript_menu" class=\"navmenu navmenu-default navmenu-fixed-left\">' +
			'<div>' +	
				'<div class=\"navmenu-header\">' +
					'<p class=\"navmenu-brand\" href=\"#\">{{strings.index.transcriptButtonLabel}}<a tabindex=\"1\" class=\"xbutton pull-right navmenu-text\" aria-label=\"{{strings.runtime.buttonLabelClose}}\" href=\"javascript:;\"><i class=\"fa fa-times\"></i></a></p>' +
				'</div>' +
				'<div class=\"container-fluid\">' +
					'<ul class=\"nav navmenu-nav\">' +	
						'<li>' +
							'<p id="transcript_body" class="navmenu-text" tabindex="1">' +								
							'</p>' +
						'</li>' +						
					'</ul>' +									
				'</div>' +
			'</div>' +				
		'</div>'
	};

	var apply = function(dest, src) {
		for (var prop in src) {
			dest[prop] = src[prop];
		}
		return dest;
	};

	var applyIf = function(dest, src) {
		for (var prop in src) {
			if (typeof dest[prop] === 'undefined') {
				dest[prop] = src[prop];
			}
		}
		return dest;
	};
	var menuWidth = 300;
	var toggleMenu = function(toShow){
		var show = typeof toShow === "undefined" ? !dom.menu.hasClass("toggled") : toShow;
		var width = show ? menuWidth : 0,
			cfg = {};
		cfg.width = width;

		show ? dom.menu.show().trigger("show.bs.offcanvas") : dom.menu.trigger("hide.bs.offcanvas");
		dom.menu.velocity(DKI.clone(cfg), {
			duration: 350,
			complete: function(){
				if(show) {
					dom.menu.trigger("shown.bs.offcanvas").addClass("toggled");
				}else{
					dom.menu.hide().trigger("hidden.bs.offcanvas").removeClass("toggled");
					skipMenuFocus = true;
				}	
			}
		});
	}

	var buildDom = function(){
		templates.navigation = config.design.parameters.editor.templates.top_nav_bar;
		dom.nav = $(Handlebars.compile(templates.navigation)({
			strings: DKI.strings,
			course : typeof dataStorage != "undefined" ? dataStorage.courseStructure : {}
		}));
		templates.bottomBar = config.design.parameters.editor.templates.bottom_nav_bar;
		dom.bottomNav = $(Handlebars.compile(templates.bottomBar)({
			strings: DKI.strings,
			course : typeof dataStorage != "undefined" ? dataStorage.courseStructure : {}
		}));
		templates.landscape_nav_bar = config.design.parameters.editor.templates.landscape_nav_bar;
		dom.landscapeNav = $(Handlebars.compile(templates.landscape_nav_bar)({
			strings: DKI.strings,
			course : typeof dataStorage != "undefined" ? dataStorage.courseStructure : {}
		}));
		var maxWidth = getMaxWidth();
		if(maxWidth){
			dom.nav.addClass("dki-course-max-width").css("margin","0 auto");
		}
		var custom = [];
		if(config.design.parameters.config){
			var items = config.design.parameters.config.menuItems,
				keys = [];
			for (k in items) {
			  if (items.hasOwnProperty(k)) {
			    keys.push(k);
			  }
			}
			keys.sort();
			$.each(keys,function(o,i){
				if(!items[this].disabled){
					var item = items[this];
					//If it's not a good link, then we'll set it to empty so it'll be ignored in rendering
					item.url = item.url && (/(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/).test(item.url) ? item.url : ""; 
					custom.push(item);
				}
			});
		}
		dom.menu = $(Handlebars.compile(templates.menu)({			
			strings: DKI.strings,
			custom : custom
		}));
		dom.menu.append($(Handlebars.compile(templates.menu_outline)({			
			strings: DKI.strings
		})));
		dom.menu.append($(Handlebars.compile(templates.menu_glossary)({			
			strings: DKI.strings
		})));
		dom.menu.append($(Handlebars.compile(templates.menu_resource)({			
			strings: DKI.strings
		})));
		dom.transcript_menu = $(Handlebars.compile(templates.transcript)({			
			strings: DKI.strings
		}));		
		var a = config;

		dom.outline = dom.menu.find("#dki_course_outline");
		dom.search = dom.menu.find("#navmenu_search");		
		dom.narration = dom.nav.find("#navbar_narration");
		dom.transcript = dom.nav.find("#navbar_transcript");
		dom.menu_button = dom.nav.find("#navbar_menu");
		dom.transcript_body = dom.transcript_menu.find("#transcript_body");
		dom.submit = dom.nav.find("#navbar_submit");
		dom.x = dom.menu.find("#navmenu_x");
		dom.transcriptX = dom.transcript_menu.find("a.xbutton");
		if(!$("html").hasClass("noNav")){
			$("body").prepend([dom.nav, dom.transcript_menu, dom.menu]);
			$("body").append(dom.bottomNav);
			$("body").append(dom.landscapeNav);

			$("body").style("padding-top", dom.nav.outerHeight() + "px");
		}
		//if(dom.menu_button.data("orientation") == "right"){
			dom.menu.addClass("navmenu-fixed-right").removeClass("navmenu-fixed-left");
			dom.transcript_menu.addClass("navmenu-fixed-right").removeClass("navmenu-fixed-left");
		//}
		dom.menu_button.on(settings.clickEvent,function(){
			toggleMenu();
		});
		
		//setup offcanvas defaults to push or overlay depending on device or not.
		if(useFixedMenu()){		
			$(".navmenu.navmenu-fixed-left,.navmenu.navmenu-fixed-right").css({"top": dom.nav.outerHeight(), "height": $(".bgRepeater").height()});
		}

		
		if(DKI.resources && DKI.resources.length == 0){
			dom.menu.find("#navmenu_resource").disable();
		}
		if(DKI.glossaryBrowse && DKI.glossaryBrowse.getTerms().length == 0){
			dom.menu.find("#navmenu_glossary").disable();
		}
		$("#headerContainer, #footerContainer").addClass("dki-course-max-width");
	};

	var Init = {
		restructureButtons: function() {
			var courseName = '';
			if(ds) {
				courseName = ds.courseStructure.coursename;
			}

			// Detach menu and exit
			var	navButtons = $('#forwardButton,#backButton'),
				courseTitle = $("#courseTitle"),
				moduleInfo = $('#info')


			courseTitle.html(courseName);

		},

		bindEvents: function() {
			
			// Player Events
			var firstLoadFlag = true;
			var hideOriginalNarrartor = function (el) {
				el = el ||  $('#contentFrame .dkiContentFrame.current .dki-authoring-element.dki-audio-element[data-narration=1]');
				el.css("visibility", "hidden");
			};
			var applyNarratorPlayer = function () {
				var narratorWrapper = null;
				var narratorElement = null;
				var allNarratorWrappers = null;

				var narrationTimeUpdate =  function (event) {
					var status = event.jPlayer.status;
					updateTime(status.currentTime, status.duration);
					$(".ticks").css("width", status.currentPercentAbsolute + "%");
					updateRadialProgress(status.currentPercentAbsolute);
				};

				$(".player-status").off(settings.clickEvent);
				$("#progressBar .tickContainer").off();

				narratorWrapper = $('#contentFrame .dkiContentFrame.current .dki-authoring-element.dki-audio-element[data-narration=1]');
				allNarratorWrappers = $('#contentFrame .dki-authoring-element.dki-audio-element[data-narration=1]');
				allNarratorWrappers.each(function () {
					$(this).find('.dki-element-content').unbind($.jPlayer.event.timeupdate, narrationTimeUpdate);
				});

				if(narratorWrapper && narratorWrapper.length > 0) {
					narratorElement = narratorWrapper.find(".dki-element-content");
				}
				if(narratorElement && narratorElement.length > 0) {
					$(".progressBar").show();
					var audio = narratorElement.find("audio");
					if(audio.length){
						audio[0].onloadedmetadata = function() {
							updateTime(0, this.duration);
						}
					}

					$("#replayButton").on('resetNarrator', function (e, el) {
						$(el).jPlayer("playHead", 0);
						return false;
					});

					$("#replayButton").on(settings.clickEvent, function () {
						$(this).trigger('resetNarrator', narratorElement);
					});

					$(".player-status, #progressBar .tickContainer").removeClass("disabled");

					if(!narratorElement.data("autoplay")) {
						$(".player-status").removeClass("pause");
					}
					else{
						$(".player-status").addClass("pause");
					}

					$(".player-status").on(settings.clickEvent, function (e) {
						if($(this).hasClass('disabled')){
							return false;
						}
						var el = $(".player-status");
						el.toggleClass("pause");
						if(el.is(".pause")){
							narratorElement.jPlayer("play");
						}
						else {
							narratorElement.jPlayer("pause");
						}
						return false;
					});

					var updateProgress = function (x, el) {
						var offset = x - $(el).offset().left;
						var percentage = (offset / $(el).width()) * 100;
						if(percentage > 100) {
							percentage = 100;
						}
						if(percentage < 0) {
							percentage = 0;
						}
						narratorElement.jPlayer("playHead", percentage);
						$(el).find(".ticks").css("width", percentage + "%");
						updateRadialProgress(percentage);
					};

					$("#progressBar .tickContainer").on(settings.clickEvent, function (e) {
						updateProgress(e.pageX, e.currentTarget);
						return false;
					});

					narratorElement.bind($.jPlayer.event.play, function (event) {
						$(".player-status").addClass("pause");
					});

					narratorElement.bind($.jPlayer.event.timeupdate, narrationTimeUpdate);

					narratorElement.bind($.jPlayer.event.ended, function (event) {
						var status = event.jPlayer.status;
						updateTime(status.duration, status.duration);
						$(".ticks").css("width", "100%");
						updateRadialProgress(100);
						$(".player-status").removeClass("pause");
					});

					var updateTime = function(current, duration){
						$(".player-time").text($.jPlayer.convertTime(current) + ' / ' +$.jPlayer.convertTime(duration));
					}

					var updateRadialProgress = function(percent){
						var rotation = (percent / 100) * 360;
						
						rotation /= 2;
						$("#narrationProgressGauge .radial").css("clip","rect(0px 400px 200px 0px");
						
						$("#narrationProgressGauge .fill").css("transform", "rotate(" +  rotation +  "deg)");
						$("#narrationProgressGauge .mask.full").css("transform", "rotate(" +  rotation +  "deg)");
						$("#narrationProgressGauge .fill.fix").css("transform", "rotate(" +  (rotation * 2) + "deg)");
						
					}
				}
				else {
					$(".progressBar").hide();
					ProgressBar.disable();
					$(".player-status").removeClass("pause");
				}
			};

			// when page is ready
			$(document).on(DKI.ContentPage.events.ready, function () {
				ProgressBar.render();
				
				var contentFrame = $("#contentFrame");
				var currentPage = contentFrame.find(".dkiContentFrame.current");
				if(currentPage.find(".endScreen").length > 0){
					ProgressBar.disable();
					if(isXsScreen) {
						$('#contentFrame').find('.endScreenWrapper').css('width', screen.availWidth + 'px');
					}
				}
				else if(currentPage.find(".page").length > 0){
					applyNarratorPlayer();
				}
				else {
					if(!firstLoadFlag){
						applyNarratorPlayer();
					}
				}
				firstLoadFlag = false;
			});

			contentApi.playerEvent.on("pageLoaded", function () {
				hideOriginalNarrartor();
			});

			// when question page is ready
			contentApi.playerEvent.on("questionPageLoaded", function () {
				firstLoadFlag = false;
				applyNarratorPlayer();
			});

			$('#courseSearchButton').on(settings.clickEvent, function(e){
				contentApi.toggleCourseSearch();
				e.preventDefault();
				return false;
			});

			$('#bibliographyButton').on(settings.clickEvent, function(e){
				contentApi.toggleBibliography();
				e.preventDefault();
				return false;
			});


			$(window).resize(function () {
				windowResized();
			});
			
			var zoomCheck = $("<div/>", {"class": "zoomToFitChecker"});
			$("body").append(zoomCheck);
			var zoomToFit = zoomCheck.css("display") != "none";
			zoomCheck.remove();
			
			if(zoomToFit){
				$(window).on("resize", function(){
					var ratio;
					if((courseStructure.width / ($("#headerContainer").height() + $("#footerContainer").height() + courseStructure.height)) < $(window).width() / $(window).height()){
						ratio = $(window).height() / ($("#headerContainer").height() + $("#footerContainer").height() + courseStructure.height);
					}
					else{
						ratio = $(window).width() / courseStructure.width;
					}
					var bg = $("body");
					settings.scale = ratio;
					
					if(ratio < 1){ //nova only gets bigger, not smaller.. it handles smaller itself.
						bg.css({
							"transform": "",
							"transform-origin": ""
						});
						return;
					}
					

					

					bg.css({
						"transform": "scale(" + ratio + ")",
						"transform-origin": function(){
							var origin = "top";
							if(ratio < 1){
								origin = "left top";
							}
							return origin;					
						}()
					});

				});
			}
		},

		adjustContentHeight: function () {
			var contentFrameHeight = $(window).height() - ($("#headerContainer").height() + ($("#footerContainer").is(':visible') ? $("#footerContainer").height() : 0));
			$('#contentFrame').css({
				'min-height': contentFrameHeight + 'px'
			});
			$('.dkiContentFrame.current').css({
				'min-height': contentFrameHeight + 'px'
			});
		}
	};

	var ProgressBar = {
		maxWidth : null,
		current  : null,
		total    : null,
		init: function() {
			
			//Progress bar width is percentage based... get the int value the long way and make sure to subtract the sizes of the left and right spans	
			$(window).resize(ProgressBar.resize);

			//Hide Progress Bar for end screens
			$(document).on(DKI.EndModule.events.started, ProgressBar.hide);
			$(document).on(DKI.EndTest.events.started, ProgressBar.hide);
			$(document).on(DKI.EndCourse.events.started, ProgressBar.hide);

		},
		render: function() {
			ProgressBar.current = parseFloat($('#screenCount #currentScreen').text());
			ProgressBar.total = parseFloat($('#screenCount #totalScreens').text());
			var replacedText = $('#screenCount').html();
			$('#screenCount').html(replacedText);

			var container = $("#progressBar");
			container.find(".tickContainer, .player-time").remove();

			var tickContainer = $("<div class='tickContainer'></div>");
			if(isXsScreen) {
				var tickContainerWidth = (window.innerWidth - 164) + 'px';
				tickContainer.css('width', tickContainerWidth);
			}
			var ticks = $('<div class="ticks"></div>');
			tickContainer.append(ticks);
			container.append(tickContainer);

			var playerTime = $('<div class="player-time"></div>');
			container.append(playerTime);

			ProgressBar.setWidths();
			$("#progressBar").css("visibility", "visible");
			$("#progressBar *").css("visibility", "visible");

		},
		resize : function(e) {
			ProgressBar.setWidths();
		},
		setWidths : function() {
			ProgressBar.maxWidth = $("#progressBar").width();
			var barWidth = (ProgressBar.current/ProgressBar.total) * ProgressBar.maxWidth,
				tickWidth  = barWidth/ProgressBar.current - 1
			$("#progressBar div.tick").width(tickWidth);
		},
		hide : function() {
			$(".progressBar").hide();
			ProgressBar.disable();
			$(".player-status").removeClass("pause");
		},
		disable: function () {
			$(".player-status, #progressBar .tickContainer, .replayButton").addClass("disabled");
		},
		enable: function () {
			$(".player-status, #progressBar .tickContainer, .replayButton").removeClass("disabled");
		}
	};


	var initEvents = function(){		
			

		dom.transcript.on(config.settings.clickEvent, function(){
			if(!dom.transcript.isDisabled()){
				var o = $("#transcript_menu").hasClass("navmenu-fixed-left") ? "left" : "right";
				if(!dom.transcript.hasClass("toggled") || dom.menu.hasClass("toggled")){
					
					$("#transcript_menu").css("display", "block");
					$("#transcript_menu").css(o, (dom.transcript_menu.outerWidth() * -1));
					var bgRepeaterX = getMaxWidth() && $(window).width() > GetMaxWidthVal() ? 0 : dom.transcript_menu.outerWidth() - $("#contentFrame").css("margin-left").split("px")[0];
					dom.menu.css("z-index", "");
					$("#transcript_menu").css("display", "block");
					dom.transcript_body.focus();
					var cfg = {};
					cfg[o] = 0;
					var cfMargin = $("#contentFrame").css("margin-left");
					var props = {
						"z-index": "1200"
					};
					if(getMaxWidth()){
						if(dom.menu.hasClass("navmenu-fixed-left")){
							props["margin-left"] = cfMargin;
						}
						else{
							props["margin-right"] = cfMargin;
						}
					}
					$("#transcript_menu").css(props).velocity(DKI.clone(cfg), {
						duration: 350,
						complete: function(){
							toggleMenu(false);						
						}
					});


					dom.transcript.addClass("toggled");
				}
				else{
					var cfg = {};
					cfg[o] = (dom.transcript_menu.outerWidth() * -1);
					$("#transcript_menu").velocity(DKI.clone(cfg), {
						duration: 350, 
						complete: function(){
							$("#transcript_menu").css("z-index", "");
							$("#transcript_menu").css("display", "");
						}
					});

					
					dom.transcript.removeClass("toggled");
				}
			}
		});
		dom.transcriptX.on(config.settings.clickEvent,function(){
			dom.transcript.trigger(settings.clickEvent);
			dom.transcript[0].focus();
		})

		

		//when the menu hides, need to hide all submenus
		dom.menu.on("hidden.bs.offcanvas", function(){
			dom.menu.find(".navmenu").velocity({
				translateX: 0
			}, 0).css("display", "");
			dom.search.val("");
			dom.menu.css("z-index", "");
			if(!skipMenuFocus){
				dom.menu_button[0].focus();
			}
			dom.menu.removeClass("toggled");
		});
		dom.menu.on("show.bs.offcanvas", function(){
			var margin = $("#contentFrame").css("margin-left");
			var props = {
				"z-index": "1200"
			};
			if(getMaxWidth()){
				if(dom.menu.hasClass("navmenu-fixed-left")){
					props["margin-left"] = margin;
				}
				else{
					props["margin-right"] = margin;
				}
			}
			dom.menu.css(props);
			$("#transcript_menu").css("z-index", "");
		});
		/*When the menu is opened, focus is shifted to the search input. 
		* When it is closed, focus is given to the element that was interacted with to close the menu.
		* On focusin/out the input has css transitions that run and will fire this event. 
		* It will bubble up to the menu and mess offcanvas widget, so we stop propagation right here.
		*/
		dom.menu.on("webkitTransitionEnd","input",function(){
			return false;
		});
		dom.menu.on("shown.bs.offcanvas", function(){
			// bit of a hack: need to set the tabindex for menu items to 0 befofe they get shown the first time so that we can't tab to them while they're hidden
			dom.menu.find("a.navmenu-link[tabindex='-1'],input[tabindex='-1']").attr('tabindex', '1');

			dom.menu.find("*[tabindex][tabindex!='-1']").each(function(){
				if($(this).is(":visible") && !$(this).hasClass("disabled-element")){
					this.focus();
					return false;
				}
			});

			dom.menu.addClass("toggled");
		});

		//when you click a submenu link, show the target
		dom.menu.on(config.settings.clickEvent, ".navmenu-submenu-link", function(e){
			var target = $($(this).data("target"));
			var current = target.find(".current");
			var scrollParent = current.scrollParent();
			target.css("display", "block");
			//if it has a back link, offset it.
			target.find(".navmenu-submenu").css("top", target.find(".navmenu-submenu-back").outerHeight());			
			target.velocity({
				translateX: "-100%"
			}, function(){
				if(current.length > 0){
					current.focus();
				}
				else{
					var possibleTabTargets = target.find("*[tabindex][tabindex!='-1']:not(.navmenu-link)");
					if(possibleTabTargets.length == 0){
						possibleTabTargets = target.find("*[tabindex][tabindex!='-1']");
					}
					possibleTabTargets.each(function(){
						if($(this).is(":visible") && !$(this).hasClass("disabled-element")){
							this.focus();
							return false;
						}
					});
				}
			});
		});		
		dom.menu.on(config.settings.clickEvent, ".navmenu-submenu-back a", function(e){
			var target = $(this);
			dom.menu.find(".navmenu").velocity({
				translateX: 0
			}, function(){			
				dom.menu.find(".navmenu").css("display", "");				
				$("*[data-target='#" + target.closest(".navmenu-submenu-container").attr("id") + "']").focus();
			});
		});

		dom.search.on("change", function(){
			config.contentAPI.showCourseSearch(this.value);
		});

		dom.submit.on(config.settings.clickEvent, function(){
			contentApi.submitQuestion();
		});

		
		dom.x.on(settings.clickEvent,function(){
			skipMenuFocus = false;
			toggleMenu(false);
		});
		if(DKI.outline){
			$(document).on(DKI.outline.events.pageSelected,function(){
				skipMenuFocus = false;
			});
		}
		$(document).on(DKI.ContentPage.events.started, function(e, page){			
			current.page = page;

			$("#pageName").html(page.page.title);

			//set progress bar
			var value = config.contentAPI.getCourseCompletion();
			$(".learning-completion-progress").css('width', value+'%').attr('aria-valuenow', value);
			$(".learning-completion-value").html(value);

			toggleMenu(false);

			var narrationElements = $(".dkiContentFrame.current .dki-authoring-element[data-narration=1]");

			if(current.page.page.transcript){
				dom.transcript.enable();
				dom.transcript_body.html(current.page.page.transcript.body);
			}
			else{
				if(dom.transcript.hasClass("toggled")){
					dom.transcript.trigger(settings.clickEvent);
				}
				dom.transcript.disable();
				dom.transcript_body.html("");				
			}

			dom.transcript_menu.scrollTop(0);

		});

		//using win resize here as the height of the nav changes across BPs
		$(window).on("resize", function(){
			var width = $(window).width();
			if(width < 768){
				platform = "smartphone";				
			}
			else{
				platform = "desktop";
			}			

			if(getMaxWidth()){
				setTimeout(function(){
					var orientation = dom.menu_button.data("orientation") == "right" ? "right" : "left";
					var margin = $("#contentFrame").css("margin-" + orientation);
					if(dom.transcript.hasClass("toggled")){
						dom.transcript_menu.css("margin-" + orientation, margin);
					}
					if(dom.menu.hasClass("toggled")){
						dom.menu.css("margin-" + orientation, margin);
					}
				}, 100);
				
			}	
		});	

		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				var attr = mutation.attributeName
				var value = $(mutation.target).attr(attr);
				if(mutation.target.id == "forwardButton"){
					var newTarget = "#landscapeFooterContainer_forwardButton";
				}
				else if(mutation.target.id == "backButton"){
					var newTarget = "#landscapeFooterContainer_backButton";
				}
				$(newTarget).attr(attr, value);
			});
		});
		if($("#forwardButton").length){
			observer.observe($("#forwardButton")[0], {attributes: true});
		}
		if($("#backButton").length){
			observer.observe($("#backButton")[0], {attributes: true});
		}

		$("#landscapeFooterContainer_forwardButton").click(function(){
			$("#forwardButton").trigger('click');
		})
		$("#landscapeFooterContainer_backButton").click(function(){
			$("#backButton").trigger('click');
		})
		
		
		//adding KB focus handling
		document.addEventListener('keydown', function(e) {
			if (e.keyCode === 9) {
				$('body').addClass('show-focus-outlines');
			}
		});

		$(".navmenu-link:not(.custom)").on("keydown", function(e){
			if(e.which == 13 || e.which == 32){
				$(this).trigger(config.settings.clickEvent);
				e.stopPropagation();
				e.preventDefault();
				return false;
			}
		});

		$('body').on(config.settings.clickEvent, "#skipToContent", function(e){
			$('body').addClass('show-focus-outlines');
		});
	};

	var init = function(cfg) {
		config = cfg;
		buildDom();
		initEvents();

		themeRoot = cfg.themeRoot;
		
		if(!(typeof dataStorage === 'undefined')) {
			ds = dataStorage;
		}

		if(dkiUA.mobile || screen.availWidth < 768 ) {
			isXsScreen = true;
			$('head').append('<meta name="viewport" content="width=1010">');
		}

		ProgressBar.init();
		Init.restructureButtons();
		Init.bindEvents();

		if ($.browser.msie && $.browser.version <= 8) {
			contentApi.playerEvent.on('questionPageLoaded', function() {
				$('.submitButton').css('background-image', 'url(' + themeRoot + '/resources/testing/submitButton.gif)');
			});
		}

		if(isXsScreen) {
			Init.adjustContentHeight();
		}

		windowResized();

		return this;
	}


	var windowResized = function(){
		if(isXsScreen) {
			var tickContainerWidth = ($("#footerContainer .progressBar").width() - $("#footerContainer .player-time").outerWidth(true) - $("#footerContainer .player-status").outerWidth(true) - $("#footerContainer .replayButton").outerWidth(true) - $("#footerContainer #audioButton").outerWidth(true) - 16) + 'px';
			$('.tickContainer').css('width', tickContainerWidth);
			Init.adjustContentHeight();
		}
		var calculatedHeight = $(window).height() - $("#headerContainer").height() - ($("#footerContainer").is(':visible') ? $("#footerContainer").height() : 0);
		var courseHeight = typeof dataStorage != "undefined" ? dataStorage.courseStructure.height : 600;
		if(calculatedHeight < courseHeight){
			$(".bgRepeater").css({
				height: calculatedHeight,
				overflow: "auto"
			});
		}
		else{
			$(".bgRepeater").css({	
				height: "",			
				overflow: "visible"
			});
		}

		var side = dom.menu.hasClass("navmenu-fixed-left") ? "left" : "right";
		var offset = dom.nav.css('margin-' + side);
		dom.menu.css(side, offset);
	};

	window.Theme = init;
}()
