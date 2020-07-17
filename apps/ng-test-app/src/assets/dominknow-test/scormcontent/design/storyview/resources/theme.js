!function() {
	var platform = dkiUA.getUAProperties().platform;
	var dom = {};
	
	var current = {
		page: null,
		section: null
	};
	
	var config = {};
	var templates = {
		"page_header": 
		"<div class=\"page_header\">" +
			"<div id=\"navbar_menu_wrapper\">" +
				"<a id=\"navbar_menu\" href=\"javascript:$(this).trigger('click'); void(0);\" class=\"navbar-link\" data-toggle=\"offcanvas\" data-target=\"#left_menu\" aria-label=\"{{strings.index.menuButtonLabel}}\" tabindex=\"1\"><i class=\"fa fa-navicon\"></i></a>" +
			"</div>" +
			"<div id=\"screenCount_wrapper\">" +
				"<p id=\"screenCount\" tabindex=\"1\"><span class=\"currentPageCount\">0</span> / <span class=\"totalPageCount\">0</span></p>" +
			"</div>" +
			"<div id=\"header_course_time\" class=\"course_time reading-time\" tabindex=\"1\"></div>" +
			"<div id=\"search_wrapper\">" + 
				"<i class=\"fa fa-search\" tabindex=\"1\" aria-label=\"{{strings.courseSearch.title}}\"></i>" + 
			"</div>" + 
			"<div id=\"page_title_wrapper\">" +
				"<h1 id=\"page_title\" tabindex=\"1\">{{{title}}}</h1>" +
			"</div>" +
			"<div id=\"current_page_time\" class=\"text-warning reading-time\" tabindex=\"1\"></div>" +
			"<div id=\"regular-progress\" class=\"progress-wrapper\">" +
				"<div class=\"progress clearfix dki-course-max-width\">" +
					"<div class=\"progress-bar\" aria-role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" tabindex=\"1\" aria-live=\"off\">" +
						"<div class=\"sr-only\">0%</div>" +
					"</div>" +
				"</div>" +
			"</div>" +
			"<div id=\"sticky-progress\" class=\"progress-wrapper\">" +
				"<div class=\"progress clearfix dki-course-max-width\">" +
					"<div class=\"progress-bar\" aria-role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" tabindex=\"-1\" aria-live=\"off\">" +
						"<div class=\"sr-only\">0%</div>" +
					"</div>" +
				"</div>" +
			"</div>" +
		"</div>",
		"menu": 
		"<nav id=\"left_menu\" class=\"navmenu navmenu-default navmenu-fixed-left offcanvas\">" +
			"<div id=\"menu_top\" class=\"bg-primary\">" +
				"<div id=\"menu_top_content\">" +
					"<div id=\"branding\">" +
						"<span id=\"navbar_logo_wrapper\"><span id=\"navbar_logo\"></span></span>" +
						//"<span class=\"h4\">Company Branding</span>" +
					"</div>" +
					"<h3 id=\"menu_course_title\" tabindex=\"1\" aria-label=\"{{{courseTitle}}}\">{{{courseTitle}}}</h3>" +
					"<div id=\"start_course_button\">" +
						"<button class=\"btn btn-default\" tabindex=\"1\"></button>" +
					"</div>" +
					"<div id=\"navbar_progress_wrapper\" class=\"progress\">" +
						"<div class=\"progress-bar learning-completion-progress\" aria-role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" tabindex=\"-1\" aria-live=\"off\">" +
							"<span class=\"sr-only\">{{strings.endCourse.LearningStatusLabel}} <span class=\"learning-completion-value\">0</span>%</span>" +
						"</div>" +
					"</div>" +	
					"<div id=\"menu_course_time\" class=\"course_time reading-time\" tabindex=\"1\"></div>" +
				"</div>" +
				"<div class=\"hero_image menu_bg bg-primary\{{#if heroImageURL}} hero\" style=\"background-image: url('{{heroImageURL}}');{{/if}}\"></div>" + 
				"<div class=\"background menu_bg bg-primary\"></div>" +
			"</div>" +			
			"<div id=\"menu_outline\">" +
				"<div id=\"course_description\">" +
					"{{{courseDescription}}}" +
				"</div>" +
				"{{{dki_course_outline className=\"navmenu-submenu\" showPages=true}}}" +
			"</div>" +
		"</nav>",
		"next_button":
			"<div id=\"forwardButton\" class=\"dki-course-max-width\" style=\"margin: auto;\" tabindex=\"1\" aria-role=\"button\">" +
				"<div class=\"button-text\">{{strings.index.nextButtonLabel}}</div>" +
				"<div><h4 id=\"next_page_title\"></h4></div>" +
				"<div id=\"next_page_time\" class=\" text-warning reading-time\"></div>" +
				"<div><i class=\"fa fa-chevron-down\"></i></div>" +
			"</div>",
		"back_button":
			"<div id=\"backButton\" class=\"dki-course-max-width\" style=\"margin: auto;\" tabindex=\"1\" aria-role=\"button\">" +
				"<div class=\"button-text\">{{strings.index.previousButtonLabel}}</div>" +
				"<div id=\"previous_page_time\" class=\" text-warning reading-time\"></div>" +
				"<div><i class=\"fa fa-chevron-up\"></i></div>" +
			"</div>"
	};

	
	var buildDom = function(){
		var hero = false;
		var courseMeta = contentApi.getCourseMetadata();
		if(!player.isSinglePage && dataStorage.courseStructure.hero_image_id != ""){
			if (settings.inPreview) {
				hero = dataStorage.store.assets[dataStorage.courseStructure.hero_image_id].assetURL;
			} else {
				hero = "./" + dataStorage.store.assets[dataStorage.courseStructure.hero_image_id].filePath;
			}
		}
		dom.menu = $(Handlebars.compile(templates.menu)({			
			strings: DKI.strings,
			courseTitle: courseMeta ? courseMeta.title : "",
			courseDescription: courseMeta ? courseMeta.description : "",
			heroImageURL: hero
		}));
		dom.next = $(Handlebars.compile(templates.next_button)({			
			strings: DKI.strings
		}));

		dom.back = $(Handlebars.compile(templates.back_button)({			
			strings: DKI.strings
		}));
		
		$(".bgRepeater").prepend([dom.back, dom.nav]);
		$(".bgRepeater").append([dom.next]);
		$("body").prepend(dom.menu);

		setTimeout(function(){
			$("#start_course_button .btn").attr("aria-label", getComputedStyle($("#start_course_button .btn")[0], ':before').getPropertyValue('content').replace(/\"/g, ""));
		}, 197);	
		if($("#previous_page_time").css("display") == "none"){
			$("#previous_page_time").attr("aria-hidden", true);
		}
		if($("#next_page_time").css("display") == "none"){
			$("#next_page_time").attr("aria-hidden", true);
		}

		if(!player.isSinglePage){
			populateCourseTime();
		}

		if($("html").hasClass("fullmenu")){
			$("$menu_course_title")[0].focus();
		}
	};

	var populateCourseTime = function(){
		var time = 0;
		var currpage = contentApi.getCurrentPage();
		$.each(dataStorage.courseStructure.modules, function(){
			$.each(this.objects, function(){					
				$.each(this.subeos, function(){
					if(!this.complete || currpage.id == this.page.id){
						time += this.page.readingtime;
					}
				});
			});
		});
		$(".course_time").html(Math.round(time / 1000 / 60) + " <span class='readingtime-mins-left'></span>");
		$(".course_time .readingtime-mins-left").attr("aria-label", getComputedStyle($(".course_time .readingtime-mins-left")[0], ':after').getPropertyValue('content').replace(/\"/g, ""));
	}

	var hideFullMenu = function(){
		$("html").removeClass("firstrun").removeClass("fullmenu");	
		$(".learning-completion-progress").attr("tabindex", "1");		
		if($(window).width() >= 992){
			dom.menu.offcanvas("show");	
		}
	}

	var initEvents = function(){				
		//when the menu hides, need to hide all submenus
		dom.menu.on("hidden.bs.offcanvas", function(){
			dom.menu.find(".navmenu").velocity({
				translateX: 0
			}, 0);
			dom.menu.css("z-index", "");
		});

		dom.menu.on("show.bs.offcanvas", function(){
			dom.menu.css("z-index", "1030");
			$(theme).trigger(theme.events.menuOpened);
			$(theme).trigger(theme.events.outlineOpened);
		});
		dom.menu.on("shown.bs.offcanvas", function(){
			dom.menu.find("*[tabindex][tabindex!='-1']")[0].focus();
		});			

		dom.menu.on(settings.clickEvent, "#menu_course_title", function(){
			if(!player.inAssessment){
				$("html").addClass("fullmenu");
				$(".learning-completion-progress").attr("tabindex", "-1");
			}
		});

		dom.menu.on(settings.clickEvent, "#start_course_button", function(){
			hideFullMenu();
			player.resumeBookmark();
		});		

		dom.menu.on(settings.clickEvent, ".dki_course_outline-subeo a", function(){
			if($(this).hasClass('disabled-element')){
				return;
			}

			if($("html").hasClass("firstrun")){
				dataStorage.bookmark = $(this).data("pageid");
				player.resumeBookmark();
			}			
			else{
				contentApi.jumpToSubeo($(this).data("subeoid"), false, true);
			}
			hideFullMenu();
			return false;
		});
		
		dom.menu.on(settings.clickEvent, ".dki_course_outline-object > a", hideFullMenu);
		$(document).on("click", "#search_wrapper",function(){
			if(DKI.search && DKI.search.Window){
				DKI.search.Window.toggle();
			}
		});

		//when any fixed left menu shows, move the content over.
		if(platform != "smartphone"){
			$(".navmenu.offcanvas.navmenu-fixed-left").on("show.bs.offcanvas", function(){		
				$(".bgRepeater").velocity({
					marginLeft: $(this).outerWidth()
				}, 350);
			});
			$(".navmenu.offcanvas.navmenu-fixed-left").on("hide.bs.offcanvas", function(){
				$(".bgRepeater").velocity({
					marginLeft: 0
				}, 350);
			});
		}

		$(document).on(DKI.ContentPage.events.ready, function(e, page){		
			if((page.pagetype == "page" || page.pagetype == "question")
				&& courseStructure.header_primary_page_id != page.pageid
				&& courseStructure.header_secondary_page_id != page.pageid
				&& courseStructure.footer_primary_page_id != page.pageid
				&& courseStructure.footer_secondary_page_id != page.pageid){
				
				var parent = $("#page_" + page.pageid).parent();
				//we dont want to do this for lightbox pages.
				if(!parent.hasClass("page-standalone")){
					var header = $(Handlebars.compile(templates.page_header)({	
						strings: DKI.strings,
						title: page.title
					}));				
					if(parent.find(".page_header").length == 0){
						parent.prepend(header);
						header.find("#regular-progress").waypoint(DKI.apply(DKI.ContentPage.waypointDefaults, {
							handler: function(direction){
								if(direction == "down"){
									header.addClass("sticky-progress");
								}
								else{
									header.removeClass("sticky-progress");
								}
							},
							offset: 0
						}));
					}
					$("#page_" + page.pageid).velocity({
						opacity: 0
					});
				}
			}
		});

		$(document).on(DKI.ContentPage.events.started, function(e, page){								
			$(".currentPageCount").text(contentApi.getData("sys.currentpage.objectindex"));
			$(".totalPageCount").text(contentApi.getData("sys.currentobject.pagecount"));

			current.page = page;			
			var next = contentApi.getNextPage();
			if(!player.inAssessment && next){
				$("#next_page_title").html(next.title);
				$("#next_page_time").html(Math.round(next.readingtime / 1000 / 60) + " <span class='readingtime-min-read'></span>");
				$("#next_page_time .readingtime-min-read").attr("aria-label", getComputedStyle($("#next_page_time .readingtime-min-read")[0], ':after').getPropertyValue('content').replace(/\"/g, ""));
			}
			else{
				$("#next_page_title").html("");
				$("#next_page_time").html("");
			}
			//set progress bar
			var value = config.contentAPI.getCourseCompletion();
			$(".learning-completion-progress").css('width', value+'%').attr("aria-label", DKI.strings.endCourse.LearningStatusLabel + value + "%");
			$(".learning-completion-value").html(value);


			if($(window).width() < 992){
				dom.menu.offcanvas("hide");	
			}
			setTimeout(function(){
				var scrollEl = $(".headerPage:visible").length ? $(".headerPage:visible").first() : $(".dkiContentFrame.current");
				scrollEl.velocity("scroll", {
					complete: function(){
						var wrapper = $(".dkiContentFrame.current .pageElementsWrapper.page");
						wrapper.css("top", -15);
						$(".dkiContentFrame.current .pageElementsWrapper").velocity({
							opacity: 1,
							top: 0
						});
					}
				});
			}, 150);
			//set progress bar
			var value = config.contentAPI.getCourseCompletion();
			$(".learning-completion-progress").css('width', value+'%');
			$(".learning-completion-value").html(value);	
			var total = 0;
			var sections = $(".dki-authoring-section", page.pageContainer);
			total = sections.length;
			sections.each(function(index){
				var section = $(this);
				section.data("section-index", (index + 1));
				section.waypoint(DKI.apply(DKI.ContentPage.waypointDefaults, {
					handler: function(direction, o){
						var el = $(this.element);
						var percentage = ((el.data("section-index") / total) * 100);
						$(page.pageContainer).find(".page_header .progress-bar").css("width", percentage + "%").find(".sr-only").html((Math.floor(percentage * 100) / 100) + "%");
					},
					offset: "bottom-in-view"
				}));				
			});


			$("#current_page_time").html(Math.round(page.page.readingtime / 1000 / 60) + " <span class='readingtime-min-read'></span>");
			var previous = contentApi.getPreviousPage();
			if(!player.inAssessment && previous){
				$("#previous_page_title").html(previous.title);
				$("#previous_page_time").html(Math.round(previous.readingtime / 1000 / 60) + " <span class='readingtime-min-read'></span>");
				$("#previous_page_time .readingtime-min-read").attr("aria-label", getComputedStyle($("#previous_page_time .readingtime-min-read")[0], ':after').getPropertyValue('content').replace(/\"/g, ""));				
			}
			else{
				$("#previous_page_title").html("");
				$("#previous_page_time").html("");
			}
			if(!player.isSinglePage){
				populateCourseTime();
			}
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
				canvas: platform=="smartphone"? "body": "",
				toggle: false			
			});		
		});	
		
		//adding KB focus handling
		$("html").on("keyup", "*", function(e){			
			setTimeout(function(){
				if(typeof document.activeElement.tabIndex != "undefined" && document.activeElement.tabIndex != -1){
					$(document.activeElement).addClass("keyboard-focused").on("blur", function(){$(this).removeClass("keyboard-focused")});	
				}
			}, 50);
		});	
		$(document).on("dki_theme_ready", function(){	
			if(!player.isSinglePage){
				dom.menu.offcanvas({
					toggle: false,
					autohide: false,
					canvas: platform == "smartphone" ? "body" : ""
				});
				$("html").addClass("firstrun");

				var homePageFlag = $("#homePageFlag");
				if(homePageFlag.is(':visible')){
					$("html").addClass("fullmenu");	
					$(".learning-completion-progress").attr("tabindex", "-1");	
				}
				else if($(window).width() >= 768){ //Only show if we're viewing on a device larger than extra small
					dom.menu.offcanvas("show");	
				}

				$(".dki_course_outline-subeo a").each(function(){
					if(!$(this).find("i.fa").length){
							$(this).prepend($("<i class=\"fa fa-check\" />"));
					}
				});
			}
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

$('body').append("<div id='homePageFlag'/>");
if($("#homePageFlag").is(':visible')){
	settings.preventResume = true;
}