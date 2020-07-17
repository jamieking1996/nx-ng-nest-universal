!function() {
	var platform = dkiUA.getUAProperties().platform;
	var dom = {
		nav: null,
		menu: null,
		outline: null,
		search: null,
		narration: null,
		transcript: null,
		transcript_menu: null,
		transcript_body: null,
		submit: null,
		sequentialSectionsFlag: null
	};
	
	var current = {
		page: null,
		headers : [],
		headerIndex : -1,
		lastIndex : -1,
		sections: [],
		sectionIndex: -1,
		lastSectionSeen: -1
	};
	var config = {};
	var templates = {
		navigation: "",
		menu: 
		'<nav id="left_menu" class=\"navmenu navmenu-default navmenu-fixed-left offcanvas\">' +
			'<ul class=\"nav navmenu-nav\">' +	
				'<li id="navmenu_search_wrapper">' +
					'<a>' +
						'<div class="input-group">' +
							'<div class="input-group-addon"><i class="fa fa-search"></i></div>' +
							'<input id="navmenu_search" type="text" class="form-control" placeholder="{{strings.courseSearch.inputPlaceholder}}" />' +
						'</div>' +
					'</a>' +
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
		'<nav id="transcript_menu" class=\"navmenu navmenu-default navmenu-fixed-left\">' +
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
		page_navigator: 		
			''
	};

	
	var buildDom = function(){

		templates.page_navigator = config.design.parameters.editor.templates.page_navigator;
		dom.page_navigator = $(Handlebars.compile(templates.page_navigator)({			
			strings: DKI.strings
		}))
		if(!$("body").hasClass("navHidden") && !$("html").hasClass("noNav")){
			$("body").prepend([dom.page_navigator]);
		}
		//push body down as navbar in this theme is fixed.
		$("body").css("margin-top", dom.page_navigator.outerHeight());	
		dom.page_navigator.css("top", 0);
		//$(".bgRepeater").css("padding-top", dom.page_navigator.outerHeight());	

		templates.page_sections_continue = config.design.parameters.editor.templates.page_sections_continue;
		dom.page_sections_continue = $(Handlebars.compile(templates.page_sections_continue)({			
			strings: DKI.strings
		})).addClass("bottom").addClass("dki-course-max-width");

		$("body").append(dom.page_sections_continue);
		
		
		dom.headerDropdown = dom.page_navigator.find("#headerDropdown");
		dom.currentHeader = dom.page_navigator.find("#currentHeader");
		dom.totalHeaders = dom.page_navigator.find("#totalHeaders");
		dom.headerText = dom.page_navigator.find(".header-title a");
		dom.courseTitle = dom.page_navigator.find(".course-title a");
		
		dom.courseTitle.text(config.settings.course.coursename);
		dom.courseTitle.attr("title", config.settings.course.coursename);


		dom.sequentialSectionsFlag = $("<div id='sequentialSectionsFlag' />");
		$("body").append(dom.sequentialSectionsFlag);
		
	};

	var initEvents = function(){		

		dom.page_navigator.on(settings.clickEvent, ".back-to-top a", function(){
			contentApi.backToTop();
			return false;
		});

		dom.page_navigator.on(settings.clickEvent, "#upHeader", function(){
			findLastVisibleSection();
			if(current.lastVisibleSectionIndex > 0){
				scrollToSection(current.sections[current.lastVisibleSectionIndex - 1]);
			}
			else if(current.lastVisibleSectionIndex == 0){
				scrollToSection(current.sections[0]);	
			}
			return false;
		});
		dom.page_navigator.on(settings.clickEvent, "#downHeader", function(){
			findLastVisibleSection();
			if((current.lastVisibleSectionIndex + 1) < current.sections.length){
				scrollToSection(current.sections[current.lastVisibleSectionIndex + 1]);
			}
			return false;
		});
		dom.headerDropdown.on(settings.clickEvent, "a:not([disabled])", function(){
			scrollToSection(current.sections[$(this).data("index")]);
			dom.headerDropdown.closest("li").removeClass("open");
		});
		dom.page_sections_continue.on(settings.clickEvent, function(){
			var nextSection = $(current.page.pageContainer).find(".dki-authoring-section:not(.shown):first");
			scrollToSection(nextSection);
		});
		var sectionWaypoints = [];
		$(document).on(DKI.ContentPage.events.started, function(e, page){		
			current.page = page;	
			current.sectionIndex = 0;			
			current.lastIndex = 0;
			current.lastVisibleSectionIndex	= 0;
			current.lastSectionSeen = -1;
			$.each(sectionWaypoints, function(){
				this[0].destroy();
			});
			sectionWaypoints = [];
			var sections = $(".dki-authoring-section", page.pageContainer);
			var total = sections.length;
			dom.headerDropdown.empty();

			if(dom.sequentialSectionsFlag.is(':visible')){
				sections.addClass("dki-section-height").data("section-height", "100");
			}
			

			current.sections = [];

			// need to iterate over the sections twice since current.sections needs to be entirely populated before anything else can happen with the sections
			sections.each(function(index, object){
				current.sections[index] = $(this);
			});
			sections.each(function(index, object){
				
				var title = "Section " + (index + 1);					
				var headerClass = "";
				if(total == 1){
					headerClass = "active";
				}
				var headers = $(this).find("h1,h2,h3,h4,h5,h6,.header-text,.title-text");
				if(headers.length > 0){
					title = $(headers[0]).text();
				}
				$(this).data("section-index", index).attr('data-section-index', index);
				$(this).data("section-title", title);
				var disabled = "",
					tabindex = 1;
				if($(this).css("display") == "none"){
					disabled = "disabled";
					tabindex = -1;
				}
			
				dom.headerDropdown.append("<li class='" + headerClass + "'><a tabindex=\"" + tabindex + "\" title=\"" + title + "\" href='#' data-index=\"" + index + "\" " + disabled + " class=\"" + disabled + "\">" + title + "</a></li>");
				
				//set up waypoints
				sectionWaypoints.push($(this).waypoint(DKI.apply(DKI.ContentPage.waypointDefaults, {
					handler: function(direction){
						var section = $(this.element);
						if(section.css('display') == 'none' || section.height() == 0){
							return;
						}
						current.lastIndex = current.sectionIndex;
						if(direction == "down"){
							current.sectionIndex = section.data("section-index");
						}
						else{
							current.sectionIndex = section.data("section-index") - 1;
							if(current.sectionIndex < 0){
								current.sectionIndex = 0;
							}
						}
						var currentSection = current.sections[current.sectionIndex];
						checkEnableNavButtons(currentSection);
						
					},
					offset: function(){
						return $("#contentFrame").offset().top + 5;
					}
				})));

				sectionWaypoints.push($(this).waypoint(DKI.apply(DKI.ContentPage.waypointDefaults, {
					handler: function(direction){
						var section = $(this.element);
						if(section.height() > 0 && direction == "down"){
							var sectionIndex = section.data("section-index");
						
						
							if(sectionIndex >= current.lastSectionSeen){
								current.lastSectionSeen = sectionIndex;
								updateHeaderVals(sectionIndex);
							}
						}
						
					},
					offset: '100%'
				})));
			});
			dom.headerText.text($('.dki-authoring-section:first', page.pageContainer).data("section-title"));			
			dom.totalHeaders.html(total);			

			if(dom.transcript_body){
				if(current.page.page.transcript){
					dom.transcript_body.html(current.page.page.transcript.body);
				}else{
					dom.transcript_body.html("");
				}
			}


			$(window).scroll(function(){
				findLastVisibleSection();
				if(($(this).scrollTop() + $(this).height()) >= (window.document.body.scrollHeight || window.document.documentElement.scrollHeight)){
					if((current.lastVisibleSectionIndex + 1) < current.sections.length){		
						dom.page_sections_continue.show("fade");
					}
				}
				else{
					dom.page_sections_continue.hide("fade");
				}
			});


			scrollToSection(current.sections[0],true, true);
			findLastVisibleSection();

			showContinueButton();
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
			
			
			var navHeight =0;
			
			$("body").css("margin-top", dom.page_navigator.outerHeight());
			dom.page_navigator.css("top", navHeight);
			$("#searchBrowserContainer").css("top", navHeight);		
			//$(".bgRepeater").css("padding-top", dom.page_navigator.outerHeight());		

			showContinueButton();
		});	
		
		//adding KB focus handling
		document.addEventListener('keydown', function(e) {
			if (e.keyCode === 9) {
				$('body').addClass('show-focus-outlines');
			}
		});


		
		$("li.navigator_menu ").on("shown.bs.dropdown", function(){
			$(theme).trigger(theme.events.outlineOpened);
		});
	};

	$(window).scroll(function(){
		// if the page is scrolled to the top and the first section doesn't overflow the page then the section might not update that it's in view
		if(window.scrollY == 0){
			current.sectionIndex = 0;
			checkEnableNavButtons(current.sections[current.sectionIndex]);
		}
	});


	var updateHeaderVals = function(sectionIndex){
		var p = ((sectionIndex +1) / current.sections.length) * 100; 
		$(".learning-completion-progress").css('width', p+'%').attr('aria-valuenow', p);
		$(".learning-completion-value").html(p);

		dom.currentHeader.html(sectionIndex + 1);
	}
	

	var scrollToSection = function(section,ignoreFirstSelect, skipScrolling){		
		var initialBodyHeight = $('body').height();
		var sectionIndex = section.data('sectionIndex');
		if(!section.hasClass('shown')){
			section.addClass('shown');
			if(sectionIndex >= current.lastSectionSeen){
				current.lastSectionSeen = sectionIndex;
				updateHeaderVals(sectionIndex);
			}

			dom.headerDropdown.find('a[data-index=' + sectionIndex + ']').removeAttr("disabled").removeClass("disabled").attr("tabindex","1");

			$(".dki-tabset-element .dki-element-content .tabbable", section).each(function(){
				$(this).data('dki.responsiveTabs').checkResize();
			});


			if(player.contentPage.current){
				// full course
				player.contentPage.current.resizeSections();
			}
			else{
				//single page
				player.contentPage.resizeSections();
			};
		}
		
		$("iframe", section).each(function(){
			if ($(this).is(':visible') && $(this).attr("data-src")) {
				this.src = $(this).attr("data-src");
			}
		});

		if(!skipScrolling){
			section.velocity("scroll", {
				offset: -$("#contentFrame").offset().top
			});
		}

		//if showing the section changed the height of the body then hide the continue button, otherwise just leave it as-is
		if($('body').height() != initialBodyHeight){
			dom.page_sections_continue.hide("fade");
		}
		dom.headerDropdown.find(".active").removeClass("active");
		dom.headerDropdown.find("a[data-index=" + section.data("section-index") + "]").enable().closest("li").addClass("active");		
		Waypoint.refreshAll();

		findLastVisibleSection();


		if((current.lastVisibleSectionIndex + 1) >= current.sections.length){
			dom.page_sections_continue.hide("fade");
		}
		var toSelect = section.find("*[tabindex='1']").first();
		if(toSelect[0] &&  !ignoreFirstSelect){
			toSelect[0].focus();
		}
	};

	var findLastVisibleSection = function(){
		current.lastVisibleSectionIndex = 0;

		var lastVisible = -1;
		var lastBottomInView = -1;

		var pageTopOffset = (player.contentFrame.current || player.contentFrame).offset().top;
		var pageBottomOffset = dom.page_sections_continue.height();

		var winScroll = $(window).scrollTop();
		var winHeight = $(window).height();
		
		var container = (player.pageFrames ? player.pageFrames.current : "#contentFrame");
		var shownSections = $(".dki-authoring-section", container);
		shownSections.each(function(){
			if($(this).height() > 0 && $(this).isInViewport()){
				lastVisible = $(this).data("section-index");
			}
			else if(lastVisible >= 0){
				return false;
			}
			var bottomPos = Math.floor($(this).offset().top + $(this).height());
			if(bottomPos <= (winHeight + winScroll - pageBottomOffset) && (bottomPos - pageTopOffset) > winScroll){
				lastBottomInView = $(this).data("section-index");
			}
		});
		//add lastBottomInView >= lastVisible for bug 58858	
		if(lastBottomInView >= 0 && lastBottomInView >= lastVisible){
			current.lastVisibleSectionIndex = lastBottomInView;
		}
		else{
			current.lastVisibleSectionIndex = lastVisible;
		}

		dom.headerText.text(current.sections[current.lastVisibleSectionIndex].data("section-title")).attr("title",current.sections[current.lastVisibleSectionIndex].data("section-title"));
	}

	var checkEnableNavButtons = function(){
		if(current.sectionIndex == 0){
			dom.page_navigator.find("#upHeader").disable().attr("tabindex","-1");
		}
		else{
			dom.page_navigator.find("#upHeader").enable().attr("tabindex","1");
		}
		if((current.sectionIndex + 1) == current.sections.length){
			dom.page_navigator.find("#downHeader").disable().attr("tabindex","-1");
		}
		else{
			dom.page_navigator.find("#downHeader").enable().attr("tabindex","1");	
		}
	}

	var showContinueButton = function(){
		if(current.page 
			&& $(current.page.pageContainer).height() + $(current.page.pageContainer).offset().top <= $(window).height() 
			&& current.sections.length > 1 
			&& current.lastVisibleSectionIndex+1 < current.sections.length
		){			
			dom.page_sections_continue.show("fade");
		}
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
