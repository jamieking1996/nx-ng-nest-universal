!function() {
	var platform = dkiUA.getUAProperties().platform;
	var useFixedMenu = function(){
		return true;
	};
	var dom = {
		nav: null,
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
		section: null,
		narration: null
	};
	
	var config = {};
	var templates = {
		navigation: 
			"<nav id=\"navbar_header\" class=\"navbar navbar-default navbar-fixed-top\">" + 
				"<div class=\"container-fluid\">" +
					"<ul class=\"nav navbar-nav navbar-left\">" +
						"<li id=\"navbar_logo_wrapper\" class=\"navbar-header\">" +
							"<a class=\"navbar-brand\" href=\"#\">" +
								"<div id=\"navbar_logo\"></div>" +
							"</a>" +
						"</li>" +					
					"</ul>" +
					"<ul class=\"hidden-sm hidden-xs nav navbar-nav\">" +
						"<li id=\"navbar_course_title_wrapper\">" +
							"<h4 class=\"navbar-text\">{{contentApi \"getCourseName\"}}</h4>" +
						"</li>" +
					"</ul>" +
					"<ul class=\"nav navbar-nav navbar-right\">" +						
						"<li id=\"navbar_transcript_wrapper\">" +
							"<a id=\"navbar_transcript\" href=\"#\" class=\"navbar-link\">" +
								"<i class=\"fa fa-file-text-o\"></i>" +
							"</a>" +
						"</li>" +
						"<li id=\"navbar_narration_wrapper\"><a id=\"navbar_narration\" href=\"#\" class=\"navbar-link\"><i class=\"fa fa-pause\"></i><i class=\"fa fa-play\"></i></a></li>" +						
						"<li id=\"navbar_menu_wrapper\">" +
							"<a id=\"navbar_menu\" href=\"#\" class=\"navbar-link\" data-toggle=\"offcanvas\" data-target=\"#right_menu\">" +
								"<i class=\"fa fa-navicon\"></i>" +
							"</a>" +
						"</li>" +
					"</ul>" +					
				"</div>" +
				"<div id=\"navbar_progress_wrapper\" class=\"progress\">" +
					"<div class=\"progress-bar learning-completion-progress\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"><span class=\"sr-only\">{{strings.endCourse.LearningStatusLabel}} <span class=\"learning-completion-value\">0</span>%</span></div>" +
				"</div>" + 
			"</nav>",
		menu: 
		'<nav id="right_menu" class=\"navmenu navmenu-default navmenu-fixed-right offcanvas\">' +
			'<ul class=\"nav navmenu-nav\">' +	
				'<li id="navmenu_search_wrapper">' +
					'<div class="input-group menuSearch">' +
						'<div class="input-group-addon"><i class="fa fa-search"></i></div>' +
						'<input id="navmenu_search" type="text" class="form-control" placeholder="{{strings.courseSearch.inputPlaceholder}}" />' +
					'</div>' +
				'</li>' +
				'<li id="navmenu_outline_wrapper">' +
					'<a id="navmenu_outline" href=\"#\" class="navmenu-link navmenu-submenu-link" data-target="#dki_course_outline">' +
						'<i class=\"fa fa-sitemap menu-icon\"></i>{{strings.index.outlineTabLabel}}<i class=\"fa fa-chevron-right pull-right\"></i>' +
					'</a>' +
				'</li>' +
				'<li id="navmenu_glossary_wrapper">' +
					'<a id="navmenu_glossary" href=\"#\" class="navmenu-link navmenu-submenu-link" data-target="#dki_glossary_list">' +
						'<i class=\"fa fa-list-ul menu-icon\"></i>{{strings.index.glossaryButtonLabel}}<i class=\"fa fa-chevron-right pull-right\"></i>' +
					'</a>' +
				'</li>' +
				'<li id="navmenu_resource_wrapper">' +
					'<a id="navmenu_resource" href=\"#\" class="navmenu-link navmenu-submenu-link" data-target="#dki_resource_list">' +
						'<i class=\"fa fa-file-o menu-icon\"></i>{{strings.index.resourcesButtonLabel}}<i class=\"fa fa-chevron-right pull-right\"></i>' +
					'</a>' +
				'</li>' +
				'<li id="navmenu_replay_wrapper"><a id=\"replayButton\" href=\"#\" class="navmenu-link"><i class=\"fa fa-refresh menu-icon\"></i>{{strings.index.replayButtonLabel}}</a></li>' +
				'<li id="navmenu_exit_wrapper"><a id=\"exitButton\" href=\"#\" class="navmenu-link"><i class=\"fa fa-close menu-icon\"></i>{{strings.index.exitButtonLabel}}</a></li>' +
			'</ul>' +	
		'</nav>',
		"menu_outline":
		'<nav id="dki_course_outline" class="navmenu navmenu-default navmenu-submenu-container">' +					
			'<ul class="nav navmenu-nav navmenu-submenu-back">' +				
				'<li>' +			
					'<a href="#" class="navmenu-link"><i class=\"fa fa-chevron-left pull-left\"></i>{{@root.strings.courseSearch.back}}</a>' +
				'</li>'	+				
			'</ul>' +
			'{{{dki_course_outline className="navmenu-submenu"}}}' +
		'</nav>',
		"menu_glossary":
		'<nav id="dki_glossary_list" class="navmenu navmenu-default navmenu-submenu-container">' +					
			'<ul class="nav navmenu-nav navmenu-submenu-back">' +				
				'<li>' +			
					'<a href="#" class="navmenu-link"><i class=\"fa fa-chevron-left pull-left\"></i>{{@root.strings.courseSearch.back}}</a>' +
				'</li>'	+				
			'</ul>' +
			'{{{DKI_templates_glossary_list className="navmenu-submenu"}}}' +
		'</nav>',
		menu_resource:
		'<nav id="dki_resource_list" class="navmenu navmenu-default navmenu-submenu-container">' +					
			'<ul class="nav navmenu-nav navmenu-submenu-back">' +				
				'<li>' +			
					'<a href="#" class="navmenu-link"><i class=\"fa fa-chevron-left pull-left\"></i>{{@root.strings.courseSearch.back}}</a>' +
				'</li>'	+				
			'</ul>' +
			'{{{DKI_templates_resource_list className="navmenu-submenu"}}}' +
		'</nav>',
		transcript: 
		'<nav id="transcript_menu" class=\"navmenu navmenu-default navmenu-fixed-right\">' +
			'<div>' +	
				'<div class=\"navmenu-header\">' +
					'<p class=\"navmenu-brand\" href=\"#\">{{strings.index.transcriptButtonLabel}}</p>' +
				'</div>' +
				'<div class=\"container-fluid\">' +
					'<ul class=\"nav navmenu-nav\">' +	
						'<li>' +
							'<p id="transcript_body" class="navmenu-text">' +								
							'</p>' +
						'</li>' +						
					'</ul>' +									
				'</div>' +
			'</div>' +				
		'</nav>',
		leftRightNav: 
		"<a id=\"backButton\" href=\"#\"><i class=\"fa\"></i></a>" +
		"<a id=\"forwardButton\" href=\"#\"><i class=\"fa\"></i></a>"
	};

	
	var buildDom = function(){
		dom.nav = $(Handlebars.compile(templates.navigation)({
			strings: DKI.strings
		}));
		dom.menu = $(Handlebars.compile(templates.menu)({			
			strings: DKI.strings
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
		dom.leftRightNav = $(Handlebars.compile(templates.leftRightNav)({			
			strings: DKI.strings
		}));
		var a = config;
		dom.menu.offcanvas({
			canvas: !useFixedMenu() ? "body": "",
			toggle: false,
			placement : "right"	
		});

		dom.outline = dom.menu.find("#dki_course_outline");
		dom.search = dom.menu.find("#navmenu_search");		
		dom.narration = dom.nav.find("#navbar_narration");
		dom.transcript = dom.nav.find("#navbar_transcript");
		dom.menu_button = dom.nav.find("#navbar_menu");
		dom.transcript_body = dom.transcript_menu.find("#transcript_body");
		if(!$("html").hasClass("noNav")){
			$("body").prepend([dom.nav, dom.transcript_menu, dom.menu, dom.leftRightNav]);
		}		
		
		//setup offcanvas defaults to push or overlay depending on device or not.
		if(useFixedMenu()){		
			$(".navmenu.navmenu-fixed-right").css("top", dom.nav.outerHeight());
		}

		//push body down as navbar in this theme is fixed.
		$("body").css("margin-top", dom.nav.outerHeight());	
		
		if(DKI.resourcBrowser && !DKI.resourceBrowser.hasResources()){
			dom.menu.find("#navmenu_resource").disable();
		}
		if(DKI.glossaryBrowse && DKI.glossaryBrowse.getTerms().length == 0){
			dom.menu.find("#navmenu_glossary").disable();
		}

		$(".learning-completion-progress").removeAttr('aria-valuenow').removeAttr('aria-valuemin').removeAttr('aria-valuemax');
	};

	var initEvents = function(){		
		dom.narration.on(config.settings.clickEvent, function(){
			if(!dom.narration.isDisabled() && dom.narration.hasClass("toggled")){
				$(".dkiContentFrame.current .dki-authoring-element[data-narration=1] .dki-element-content").jPlayer("pause");
			}
			else{
				$(".dkiContentFrame.current .dki-authoring-element[data-narration=1] .dki-element-content").jPlayer("play");	
			}
		});
		

		dom.transcript.on(config.settings.clickEvent, function(){
			if(!dom.transcript.isDisabled()){
				if(!dom.transcript.hasClass("toggled") || dom.menu.hasClass("in")){
					$("#transcript_menu").css("right", (dom.transcript_menu.outerWidth() * -1));
					var bgRepeaterX = dom.transcript_menu.outerWidth() - $("#contentFrame").css("margin-right").split("px")[0];
					dom.menu.css("z-index", "");
					$("#transcript_menu").css("z-index", 1030).velocity({
						right: $("body").css("margin-right")
					}, {
						duration: 350,
						complete: function(){
							dom.menu.offcanvas('hide');
						}
					});

					if(bgRepeaterX > 0){
						$(".bgRepeater").velocity({
							right: bgRepeaterX
						}, 350);
					}

					dom.transcript.addClass("toggled");
					$(theme).trigger(theme.events.themeTranscriptShown);
				}
				else{					
					$("#transcript_menu").velocity({
						right: (dom.transcript_menu.outerWidth() * -1)
					}, {
						duration: 350, 
						complete: function(){
							$("#transcript_menu").css("z-index", "");
						}
					});

					$(".bgRepeater").velocity({
						right: 0
					}, 350);

					
					dom.transcript.removeClass("toggled");
				}
			}
		});

		

		//when the menu hides, need to hide all submenus
		dom.menu.on("hidden.bs.offcanvas", function(){
			dom.menu.find(".navmenu").velocity({
				translateX: 0
			}, 0);
			dom.search.val("");
			dom.menu.css("z-index", "");
		});
		dom.menu.on("show.bs.offcanvas", function(){
			dom.menu.css("z-index", "1030");
			$("#transcript_menu").css("z-index", "");
		});
		//when any fixed right menu shows, move the content over.
		if(useFixedMenu()){
			$(".navmenu.offcanvas.navmenu-fixed-right").on("show.bs.offcanvas", function(){				
				if(!dom.transcript.hasClass("toggled")){
					var bgRepeaterX = $(this).outerWidth() - $("#contentFrame").css("margin-right").split("px")[0];
					if(bgRepeaterX > 0){
						$(".bgRepeater").velocity({
							right: bgRepeaterX
						}, 350);
					}
					$(theme).trigger(theme.events.menuOpened);
				}
			});
			$(".navmenu.offcanvas.navmenu-fixed-right").on("hide.bs.offcanvas", function(){
				if(!dom.transcript.hasClass("toggled")){
					$(".bgRepeater").velocity({
						right: 0
					}, 350);
				}
			});
		}

		//when you click a submenu link, show the target
		dom.menu.on(config.settings.clickEvent, ".navmenu-submenu-link", function(){
			var target = $($(this).data("target"));
			var current = target.find(".current");
			var scrollParent = current.scrollParent();
			//if it has a back link, offset it.
			target.find(".navmenu-submenu").css("top", target.find(".navmenu-submenu-back").outerHeight());
			target.velocity({
				translateX: "-100%"
			}, function(){
				current.focus();
			});
		});		
		dom.menu.on(config.settings.clickEvent, ".navmenu-submenu-back a", function(){
			dom.menu.find(".navmenu").velocity({
				translateX: 0
			});
		});

		dom.search.on("keypress", function(e){
			if(e.which == 13){
				config.contentAPI.showCourseSearch(this.value);
			}
		});	

		var onNarrationPlay = function(event){					
			current.narration = event.target.id;
			dom.narration.addClass("toggled");
		};
		var onNarrationPause = function(event){
			if(current.narration == event.target.id){
				dom.narration.removeClass("toggled");
				current.narration = null;
			}
		};

		$(document).on(DKI.ContentPage.events.started, function(e, page){			
			current.page = page;			

			// use setTimeout to ensure the current page has a chance to get marked as complete
			setTimeout(function(){
				//set progress bar
				var value = config.contentAPI.getCourseCompletion();
				$(".learning-completion-progress").css('width', value+'%');
				$(".learning-completion-value").html(value);
			}, 10);

			dom.menu.offcanvas("hide");

			var narrationElements = $(".dkiContentFrame.current .dki-authoring-element[data-narration=1]");
			if(narrationElements.length > 0){
				dom.narration.enable();
				
				$(narrationElements).off($.jPlayer.event.play, onNarrationPlay);
				$(narrationElements).off($.jPlayer.event.pause, onNarrationPause);

				$(narrationElements).on($.jPlayer.event.play, onNarrationPlay);
				$(narrationElements).on($.jPlayer.event.pause, onNarrationPause);
			}
			else{
				dom.narration.disable();
				dom.narration.removeClass("toggled");
				current.narration = null;
			}

			if(current.page.page.transcript){
				dom.transcript.enable();
				dom.transcript_body.html(current.page.page.transcript.body);
			}
			else{
				dom.transcript.disable();
				dom.transcript_body.html("");				
			}
			dom.transcript_menu.scrollTop(0);
			
			$(page.pageContainer).on(DKI.Events.TestQuestion.submitted, function(){
				contentApi.showForward();
			});


			/*
			var elementWrapper = $(".pageElementsWrapper", page.pageContainer);
			$(".bgRepeater").css({
				"background-image": "url('" + elementWrapper.data("background-url") + "')",
				"background-repeat": elementWrapper.css("background-repeat"),
				"background-attachment": elementWrapper.css("background-attachment"),
				"background-position": elementWrapper.css("background-position"),
				"background-size": elementWrapper.css("background-size")
			}).removeClass($(".bgRepeater").data("currentAnimation")).addClass(page.page.parameters.background.animation).data("currentAnimation", page.page.parameters.background.animation);
			*/
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
			dom.menu.offcanvas({
				canvas: !useFixedMenu() ? "body": "",
				toggle: false,
				placement: "right"			
			});

			var leftWidth = $("#navbar_header .navbar-nav.navbar-left").width();
			var rightWidth = $("#navbar_header .navbar-nav.navbar-right").width();
			var navBarMid = $("#navbar_header ul.navbar-nav:not(.navbar-left):not(.navbar-right)");
			var navBarMidWidth = navBarMid.parent().width() - leftWidth - rightWidth;
			navBarMid.css("max-width", navBarMidWidth);
			
			var navHeight = dom.nav.outerHeight();
			dom.transcript_menu.css("top", navHeight);
			dom.menu.css("top", navHeight);			
			$("body").css("margin-top", navHeight);
			$("#searchBrowserContainer").css("top", navHeight);		
			//$(".bgRepeater").css("padding-top", dom.page_navigator.outerHeight());	

			if(dom.transcript.hasClass("toggled")){
				$("#transcript_menu").css({
					"right": $("body").css("margin-right")
				});	
			}
		});	

		$("#navmenu_outline").on(config.settings.clickEvent, function(){
			$(theme).trigger(theme.events.outlineOpened);
		});
		
		//adding KB focus handling
		$("html").on("keyup", "*", function(e){			
			setTimeout(function(){
				if(typeof document.activeElement.tabIndex != "undefined" && document.activeElement.tabIndex != -1){
					$(document.activeElement).addClass("keyboard-focused").on("blur", function(){$(this).removeClass("keyboard-focused")});	
				}
			}, 50);
		});	
	};
	
	/*
		cfg: {
			settings
			contentAPI
			themeRoot - url to theme.
		}
	*/
	var init = function(cfg) {
		config = cfg;
		buildDom();
		initEvents();		
		this.events = {
			themeTranscriptShown: "themeTranscriptShown",
			menuOpened: "themeMenuOpened",
			outlineOpened: "themeOutlineOpened"
		};	
		return this;
	};
	window.Theme = init;
}()
