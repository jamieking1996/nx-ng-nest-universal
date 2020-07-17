!function() {
	var dom = {};
	
	var current = {};
	var state = {
		design     : settings.design
	};
	var config = {};
	var templates = {
		landing : Handlebars.compile("<div class='tutorial_landing'>" + 
			"<div class='tutorial_topbar'>" + 
				"<div id='navbar_logo'></div>" +
			"</div>" + 
			"<div class='landing_content_container'>" + 
				"<h1 tabindex='1' >{{title}}</h1>" + 
				"<p tabindex='{{#if description}}1{{else}}-1{{/if}}'>{{description}}</p>" +
				"<div class='landing_content'>" + 
					"<div class='landing_cards'>" + 
					"</div>" + 
				"</div>" +
			"</div>" +
		"</div>"),
		menu   : Handlebars.compile("<div class='tutorial_menu'>" +
			"<div class='tutorial_topbar'>" +
				"<button class='fa fa-arrow-left' tabindex='1' aria-label='{{close}}'></button>" + 
				"<button class='fa fa-th-large' tabindex='1' aria-label='{{outline}}'></button>" + 
			"</div>" +
			"<div class='menu_lo'>" + 
			"</div>" +
		"</div>"),
		menuPages  : Handlebars.compile("<h3 tabindex='1'class='menu_lo_title' title='{{title}}' aria-label='{{title}}'>{{{title}}}</h3>" + 
			"<div class='menu_pages'>" + 
				"{{#each pages}}" + 
					"<div class='menu_page{{#if this.complete}} visited{{/if}}' data-id='{{id}}'>" + 
						"{{#unless @first}}" + 
							"<div class='menu_page_tail top'></div>" +
						"{{/unless}}" +
						"<span tabindex='-1' class='page_num'>{{arith @index '+' 1}}</span>" + 
						"<span tabindex='1' class='page_title' aria-label='{{this.title}}' title='{{this.title}}'>{{{this.title}}}</span>" +
						"{{#unless @last}}" +
							"<div class='menu_page_tail'></div>" +
						"{{/unless}}" +
					"</div>" +		
				"{{/each}}" +
			"</div>"),
		time   : ""
	};
	Handlebars.registerPartial("tutorialTheme_card","<div class='tutorial_card {{cls}}' data-id='{{id}}'>" + 
		"<img tabindex='-1' aria-hidden='true' src='{{imgUrl}}'/>" +
		"<div class='card_details'>" + 
			"<h3 id='tutorial_lo_title' tabindex='1' class='card-title' title='{{title}}'>{{{title}}}</h3>" +
			"<p id='tutorial_lo_description' tabindex='{{#if description}}1{{else}}-1{{/if}}'>{{description}}</p>" +
			"<div class='card_footer'>" + 
				"<div tabindex='1' aria-label='{{readTime}} read time' class='btn read_time'>{{{content}}}</div>" + 
				"<div tabindex='1' role='button' class='btn btn-primary view'>{{viewStr}}</div>" + 
			"</div>" + 
		"</div>" + 
	"</div>");
	var buildDom = function(){
		var landing = templates.landing({
				title       : config.settings.course.coursename, 
				description : config.settings.course.metadata.description
			}),
			menu = templates.menu({
				close : DKI.strings.index.icloseButtonLabel,
				outline : DKI.strings.index.outlineTabLabel

			});
		$("body").prepend([landing]);
		$("body").prepend([menu]);
		$("body").prepend("<div class='page_read_time btn btn-primary'><i class='fa fa-clock-o'></i><span class='time'></span></div>");
		$(".bgRepeater").prepend("<div class='tutorial_mobile_bar'><span class='fa fa-bars' tabindex='1' aria-label='Menu'></span><span tabindex='1' class='mobile_bar_title'></span>");
		dom = {
			landing   : {
				container : $(".tutorial_landing"),
				cards     : $(".tutorial_landing .landing_cards")
			},
			menu      : {
				container     : $(".tutorial_menu"),
				pageContainer : $(".tutorial_menu .menu_lo")
			},
			next      : $("<div id='forwardButton' class='tutorial_nav next' tabindex='1' aria-label='" + DKI.strings.index.nextButtonLabel + "'><i class='fa fa-chevron-right'></i></div>").appendTo($(".bgRepeater")),
			prev      : $("<div id='backButton' class='tutorial_nav prev' tabindex='1'  aria-label='" + DKI.strings.index.previousButtonLabel + "'><i class='fa fa-chevron-left'></i></div>").appendTo($(".bgRepeater")),
			gotoMenu  : $("<div class='tutorial_nav menu' tabindex='1' aria-label='" + DKI.strings.index.outlineTabLabel + "'><i class='fa fa-th-large'></i></div>").appendTo($(".bgRepeater")),
			mobileBar : {
				title : $(".mobile_bar_title")
			},
			pageTime : $(".page_read_time")
		};
		buildLandingCards();

	};
	var openLanding = function(){
		$("html").addClass("landing");
		setAccessibility();
		var focus = $(".landing_content_container [tabindex='1']").first();
		if(focus[0]){
			focus[0].focus();
		}
		var stc = $("#skipToContent");
		if(stc[0]){
			//Override skip to content to jump to the first thing in the landing page
			stc.on("click.tutorial",function(){
				if(focus[0]){
					focus[0].focus();
				}
				return false;
			});
		}
	};
	var closeLanding = function(){
		$("html").removeClass("landing");
		setAccessibility();
		var stc = $("#skipToContent");
		//Remove the skip to content override after closing the tutorial landing page
		if(stc[0]){
			stc.off("click.tutorial");
		}
	};
	var getReadTime = function(ms, verbose){
		var measure = "min", time = Math.max(Math.round(ms / 60000),1);
		if(time > 60){
			measure = "hour";
			time /= 60;
			time = time % 1 === 0 ? time : time.toFixed(1);
			measure += time > 1 ? "s" : "";
		}
		if(verbose){
			switch(measure){
				case "s" : 
					measure = " second" + (time > 1 ? "s" : "")
					break;
				case "min" :
					measure = " minute" + (time > 1 ? "s" : "")
					break;
			}
		}
		return "" + time + measure;
	}
	var renderMenuForObject = function(object, selectPage){
		if(dom.menu.pageContainer.data("for-object") != object.objectid){
			dom.menu.pageContainer.data("for-object", object.objectid);
			var cfg = {
				title : object.name,
				pages : object.subeos.map(function(s){
					return {
						title : s.page.title,
						id    : s.page.pageid
					}
				})
			};
			dom.menu.pageContainer.html(templates.menuPages(cfg));
		}

		if(selectPage){
			//Select current page
			var pages = dom.menu.pageContainer.find(".menu_page");
			pages.filter(".selected").addClass("visited");
			pages.removeClass("selected").filter("[data-id='" + selectPage.pageid + "']").addClass("selected");
		}
		dom.mobileBar.title.html(object.name).attr("title",object.name);
	};
	var buildLandingCards = function(){
		var cfg = { 
				cards : typeof dataStorage !== "undefined" ? dataStorage.courseStructure.modules.reduce(function(a,c){
					$.each(c.objects,function(){
						var readTime = 0, partial = false;
						$.each(this.subeos,function(){
							if(!this.complete){
								readTime += this.page.readingtime;
							}else {
								partial = true;
							}
						});
						var imgUrl = "";
						if(this.hero_image_id){
							if(DKI.renderService.state.renderEnvironment.export){
								imgUrl = "assets/" + this.hero_image_id + "." + this.hero_image_extension;
							}else{
								imgUrl = config.settings.baseUrl + "admin/editor2/AssetManager/asset.cfm/" + this.hero_image_id;
							}	
						}
						var cls = [];
						if(!imgUrl){
							cls.push("noImg");
						}
						if(this.complete){
							cls.push("read");
						}else if(partial){
							cls = cls.concat(["read","partial"]);
						}
						var viewStr = partial ? DKI.strings.endTest.learningLinkLabel : "View";
						if(!config.settings.course.language.cultureCode.match(/en\-/)){
							viewStr = "<span class='fa fa-arrow-down'></span>";
						}
						a.push({
							title       : this.name,
							description : this.description,
							id          : this.objectid,
							imgUrl      : imgUrl,
							content     : this.complete ? "<i class='fa fa-check'></i>"  : "<i class='fa fa-clock-o'></i><span>" + getReadTime(readTime) + "</span>",
							readTime    : getReadTime(readTime,true),
							cls         : cls.join(" "),
							viewStr     : viewStr

						});
					});
					return a;
				},[]) : []
		};
		dom.landing.cards.html(Handlebars.compile("{{#each cards}}{{>tutorialTheme_card this}}{{/each}}")(cfg));
		if(typeof dataStorage !== "undefined"){
			if(cfg.cards.length < 2){
				$("html").addClass("oneLo");
				closeLanding();
			}else{
				openLanding();
			}
		}
	}

	var setSRState = function(el,hidden){
		if(hidden){
			el.addClass("aria-hidden").attr("aria-hidden",true);
		}else{
			el.removeClass("aria-hidden").attr("aria-hidden",false);
		}
	};
	var setAccessibility = function(){
		if($("html").hasClass("landing")){
			setSRState($(".dkiContentFrame",".bgRepeater"),true);
			setSRState($(".tutorial_menu"),true);
			setSRState($(".tutorial_landing"),false);
		}else{
			setSRState($(".dkiContentFrame",".bgRepeater"),false);
			if($("html").hasClass("menu")){
				setSRState($(".tutorial_menu"),false);
			}else {
				setSRState($(".tutorial_menu"),true);
			}
			setSRState($(".tutorial_landing"),true);
		}
	};
	var onWindowResize = function(){
		if($(window).width() < 1000){
			$("html").removeClass("menu");
		}else{
			$("html").addClass("menu");
		}
		setAccessibility();
	};
	var initEvents = function(){
		$(window).on("resize",onWindowResize);
		if(typeof dataStorage !== "undefined"){
			$(document).on("click",".tutorial_landing .btn.view",function(){
				var object = dataStorage.findObject($(this).closest(".tutorial_card").data("id"));
				if(object && object.subeos[0]){
					player.jumpToSubeo(object.subeos[0].subeoid,false);
					closeLanding();
					
				}
			});
			$(document).on("click",".menu_page", function(){
				var subeo = dataStorage.getSubeoFromPage($(this).data("id"));
				if($(window).width() < 1000){
					$("html").removeClass("menu");
				}

				if(subeo){
					player.jumpToSubeo(subeo.subeoid,false);
				}
				return false;
			});
			$(document).on("click",".tutorial_menu .fa-arrow-left, .tutorial_mobile_bar .fa-bars",function(){
				$("html").toggleClass("menu");
				setAccessibility();
				var f = $("html").hasClass("menu") ? $(".tutorial_menu *[tabindex='1']").first() : $("#skipToContent");
				if($("html").hasClass("menu")){
					$(".tutorial_menu").data("returnFocus",this);
				}else if($(".tutorial_menu").data("returnFocus")){
					f = $($(".tutorial_menu").data("returnFocus"));
					$(".tutorial_menu").data("returnFocus","");
				}
				if(f[0]){
					f[0].focus();
				}
			});
			$(document).on("click",".tutorial_nav.menu, .tutorial_menu .fa-th-large",function(){
				buildLandingCards();
				openLanding();

			});
			$(document).on("click",".tutorial_nav.prev",function(){
				player.contentBack();
			});
			$(document).on("click",".tutorial_nav.next",function(){
				player.contentForward();
			});
			var first = true;
			$(player).on(player.events.pageLoaded,function(){
				var page = dataStorage.currentPage;
				if(first){
					//In this theme, the first page will show in the background, but that cannot count as complete as it has not been officially visited yet
					page.complete = false;
					first = false;
				}
				$(".tutorial_nav.next, .tutorial_nav.prev").hide();
				dom.next.hide();
				dom.gotoMenu.show();
				if(page.subeoid){
					var object = dataStorage.currentObject;
					dom.next.add(dom.prev).hide();
					if(page.page.pageid !== object.subeos[0].page.pageid){
						dom.prev.show();
					}
					if(page.page.pageid !== object.subeos[object.subeos.length - 1].page.pageid){
						dom.gotoMenu.hide();
						dom.next.show().enable();
					}
					dom.pageTime.find(".time").html(getReadTime(page.page.readingtime));
					renderMenuForObject(object,page.page);
				}
			});

			//adding KB focus handling
			document.addEventListener('keydown', function(e) {
				if (e.keyCode === 9) {
					$('body').addClass('show-focus-outlines');
				}
			});
		}
	};

	var init = function(cfg) {
		config = cfg;
		buildDom();
		initEvents();
		onWindowResize();	
		this.events = {};
		return this;
	};
	window.Theme = init;
}()
