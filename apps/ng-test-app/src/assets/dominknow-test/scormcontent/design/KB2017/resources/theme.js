if(settings && !settings.themeHideNav){
	var kbSearch = function(){
		var term = $(".kb-search-input").val();
		DKI.search.Window.show(term);
		$("body").removeClass("kb-landing-show");
	};
	!function() {
		var state = {
			design     : settings.design,
			glossaries : [],
			index      : {},
			config     : {}

		},
			dom = {},
			templates = {
				card : Handlebars.compile("{{>kbCard}}"),
				glossary : Handlebars.compile("<div class=\"kb-glossary\">" + 
					"<h4>{{term.term}}</h4>" + 
					"<div class=\"kb-glossary-definition\">{{{term.definition}}}</div>" + 
					"{{#if subeos}}" + 
						"<div class=\"kb-related-pages\">"  + 
							"<h5>Related Pages</h5>" + 
							"<ul>" + 
								"{{#each subeos}}" + 
									"<li class=\"kb-related-item page\" title=\"{{{this.page.title}}}\" data-id=\"{{this.subeoid}}\"><span class=\"fa fa-file-text-o\"></span><span>{{this.page.title}}</span></li>" + 
								"{{/each}}" + 
							"</ul>" + 
						"</div>" + 
					"{{/if}}" +
				"</div>"),
				index : Handlebars.compile("<ul class=\"nav nav-stacked kb-index-list\">" +
				 "{{#each indices}}" +
				 	"<li class=\"panel\">" + 
				 		"<a data-toggle=\"collapse\" href=\"#dki-index-{{this.baseTitle}}\">{{{this.title}}}</a>"+ 
				 		"<ul id=\"dki-index-{{this.baseTitle}}\" class=\"collapse\">" + 
				 			"{{#each this.pages}}" +
				 				"<li data-id=\"{{this.subeoid}}\"><span class=\"fa fa-file-text-o\"></span><span>{{{this.title}}}</span></li>" +
				 			"{{/each}}" + 
				 		"</ul>" +
				 	"</li>" +
				 "{{/each}}" +
				"</ul>" ),
				landing : Handlebars.compile("<div class=\"kb-landing\">" + 
					"<div class=\"kb-landing-heading-container\">" +
						"<div class=\"kb-landing-heading container\">" + 
							"<div class=\"row kb-courseTitle\">" + 
								"<div class=\"col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1\"><h1>{{{title}}}</h1></div>" + 
							"</div>" + 
							"<div class=\"row kb-courseDescription\">" + 
								"<div class=\"col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1\"><h5>{{description}}</h5></div>" + 
							"</div>" + 
							"<div class=\"row\" style=\"padding-top:25px\">" +
								"<form action=\"javascript:kbSearch();\">" + 
									"<div class=\"kb-landing-search col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 input-group\">" + 
										"<input type=\"text\" class=\"form-control kb-search-input input-lg\" placeholder=\"Search\">" + 
										"<span class=\"input-group-btn\">" + 
											"<button type=\"submit\" class=\"btn btn-default btn-lg\"><span class=\"fa fa-search\"></span></button>" + 
										"</span>" +
									"</div>" + 
								"</form>" +
							"</div>" + 
						"</div>" + 
					"</div>" + 
					"<div class=\"kb-landing-cards\">" + 
						"<div class=\"kb-landing-cards-cont\">" +  
							"{{#each cards}}" + 
								"<div class=\"col-xs-10 col-xs-offset-1 col-sm-4 {{this.classes}}\">" + 
									"{{>kbCard this}}" + 
								"</div>" + 
							"{{/each}}" +
						"</div>" + 
					"</div>" + 
				"</div>")
			};
		Handlebars.registerPartial("kbCard","<div class=\"kb-card {{#if active}}active{{/if}}\" data-id=\"{{object.eoid}}\">" + 
			"<h4>{{{object.title}}}</h4>" + 
			"<ul class=\"kb-card-items\">" + 
				"{{#each items}}" + 
					"<li data-id=\"{{this.id}}\" title=\"{{{this.title}}}\"><span class=\"kb-card-item-icon {{this.icon}}\"></span><span class=\"kb-card-item-title\">{{{this.title}}}</span></li>" + 
				"{{/each}}" +
			"</ul>" + 
		"</div>");
		Handlebars.registerPartial("link","<div class='kb-link'><a href='{{this.url}}' target='_link'><span class='fa {{this.icon}}'></span><span>{{this.label}}</span></a></div>");
		$("body").prepend($(Handlebars.compile(state.design.parameters.editor.templates.top_nav_bar)({
			strings: DKI.strings
		})));
		$("body").prepend($(Handlebars.compile(state.design.parameters.editor.templates.left_menu)({
			strings: DKI.strings
		})));
		$(".bgRepeater").before("<div class=\"kb-info-header\">" + 
			"<div class=\"kb-info-header-lo\"><div class=\"kb-info-header-lo-title\"></div><span class=\"kb-info-header-share\"><i class=\"fa fa-share-square-o\"></i>Share</span></div>" + 
			"<div class=\"kb-info-header-page\">" +
				"<div class=\"kb-info-header-page-info\">" + 
					"<div class=\"kb-info-header-page-title\"></div>" + 
					"<div class=\"kb-info-header-page-properties\">" + 
						"<span class=\"kb-info-header-page-createdOn\"></span>" + 
					"</div>" + 
				"</div>" + 
				"<div class=\"kb-info-header-page-next\"></div>" + 
			"</div>" + 
		"</div>");
		dom = {
			header: {		
				container: $("#headerContainer"),
				progressIndication: $('<div id="progress"></div>'),
				progressBar: $('<div id="progressBar"></div>'),
				kbInfo : $(".kb-info-header"),
				share  : $(".kb-info-header-share"),
				menuButton : $("#headerContainer .menu-menu-button").on(settings.clickEvent, function(){
					if(!dom.menu.container.is(':visible')){
						$(theme).trigger(theme.events.menuOpened);
					}
					dom.menu.container.find(".tooltipstered").tooltipster("hide");
					dom.menu.container.toggle("slide");
				}),
			},
			seeAlso : $("<div class=\"kb-see-also\"><h4>Related Articles</h4><div class=\"kb-see-also-content clearfix\"></div></div>").insertAfter("#contentFrame"),
			menu: {
				container: $(".menu-container"),
				topics   : $("#topics"),
				index    : $("#index .kb-card"),
				glossary : $("#glossary .kb-glossary-list"),
				search   : $("<input></input>", {
					"class": "menu-search",
					"placeholder": "Search Knowledge Base"
				}),
				menuButton : $(".menu-container .menu-menu-button").on(settings.clickEvent, function(){
					dom.menu.container.find(".tooltipstered").tooltipster("hide");
					dom.menu.container.toggle("slide");
				}),
				buttons: {
					container: $("<div></div>", {
						"class": "button-container"
					}),
					exit: $("#exitButton").detach().addClass("icon icon-close"),
					glossary: $("#glossaryButton").addClass("icon icon-glossary icon-drilldown"),
					resources: $("#resourceButton").addClass("icon icon-resources icon-drilldown"),
					replay: $("#replayButton").addClass("icon icon-replay")
				}
			}
		};
		var links = [];
		if(settings.design.parameters.config.menuItems){
			$.each(settings.design.parameters.config.menuItems,function(i,o){
				if(Object.keys(o).length !== 0 && !o.disabled){
					links.push(o);
				}
			});
		}
		if(links.length > 0){
			var search = dom.header.container.find(".search");
			cont = $("<div class='links'></div>");
			dom.header.container.find(".search").after(cont);
			if(links.length == 1){
				cont.append(Handlebars.compile("{{>link}}")(links[0]));
			}else{
				cont.addClass("drop").append("<span>" + DKI.strings.resources.txtLinksHeader +"</span><span class='fa fa-chevron-down'></span>");
				$("body").append(Handlebars.compile("<div class='linksPopup' style='display:none'>" + 
					"{{#each this}}" + 
						"{{>link this}}" + 
					"{{/each}}" + 
				"</div>")(links));
			}
		}
		if(DKI.renderService.state.renderEnvironment.full){
			var jumpTo = DKI.func.debounce(function(id){
				contentApi.jumpToSubeo(id);
			},250,false);
			var pageClicked = function(el){
				var parent = $(el).closest(".kb-card"),
					fromIndex = $(el).closest("#index")[0] ? true : false;
				dom.menu.container.find(".kb-card, .kb-card li").removeClass("active");
				parent.addClass("active");
				$(el).addClass("active");
				jumpTo($(el).data("id"));
				fromIndex ? dom.header.kbInfo.addClass("fromIndex") : dom.header.kbInfo.removeClass("fromIndex");
			};
			dom.menu.index.on(settings.clickEvent,".panel",function(){
				var children = $(this).find("li");
				if(children.length == 1){
					pageClicked(children);
					return false;
				}
			});
			dom.menu.container.on(settings.clickEvent,"#topics li,#index .collapse li",function(){
				pageClicked(this);
				return false;
			});
			dom.menu.container.on(settings.clickEvent,"#glossary .glossaryPanel li",function(){
				var term = DKI.glossaryBrowse.getTerm($(this).data("id")),
					subeos = dataStorage.getRelationship("glossaryElement",term.glossaryid).map(function(id){
						return dataStorage.getSubeoFromPage(dataStorage.getElement(id).pageid);
					}),
					cfg = {
						term   : term,
						subeos : subeos
					};
				if(!$(this).hasClass("tooltipstered")){
					$(this).tooltipster({
						content: templates.glossary(cfg),
						contentAsHTML  : true,
						functionBefore: function(origin, continueTooltip){
							var elPosition = "right";
							var contentWidth = $("#contentFrame").width();
							var xPos = $(origin).offset().left + $(origin).outerWidth();
							// if not enough space on the right, change the position
							if((contentWidth - xPos) < 400){
								$(origin).tooltipster("option", "position", "bottom");
							}
							continueTooltip();
						},
						maxWidth       : 400,
						position       : "right",
						trigger        : "custom",
						theme          : "tooltipster-light kb-glossary-popup",
						minWidth       : 300,
						onlyOne        : true,
						interactive    : true,
						speed          : 0
					});
				}

				$(this).tooltipster("status") == "hidden" ? $(this).tooltipster("show") : $(this).tooltipster("hide");
				return false;
			});
			dom.menu.container.on("click",".nav-pills > li",function(){
				dom.menu.container.find(".tooltipstered").tooltipster("hide");
			});
			$("body").on(settings.clickEvent,".kb-glossary-popup .kb-related-item",function(){
				jumpTo($(this).data("id"));
			});
			dom.header.kbInfo.on(settings.clickEvent,".kb-info-header-page-next",function(){
				jumpTo($(this).data("id"));
			});
			dom.header.container.on(settings.clickEvent,".links.drop",function(){
				$(".linksPopup").toggle();
				return false;
			});
			$(document).on(settings.clickEvent,function(){
				$(".linksPopup").hide();
			});
			if(dom.header.share[0]){
				dom.header.share.on(settings.clickEvent,function(){
					var s = $(this).data("shareLink");
					if(s){
						var clip = $("<textarea/>",{
							"html" : s,
							css : {
								"position"   : "absolute",
								"z-index"    : -9999,
								opacity      : 0,
								top          : $(this).offset().top,
								"font-size"  : "12pt"
							},
						}).appendTo($("body"));
						clip[0].select(),
						clip[0].setSelectionRange(0,s.length);
						try {  
						    var a = document.execCommand('copy');  
						} catch(err) {  
							var a = false;
						}
						clip.remove();
						var txt = a ? "Page Link has been copied to clipboard" : s;
						var msgBox = $("<div/>",{
							"class" : "clipboard fade",
							html : "<div class=\"clip-message\">" + txt + "</div><div class=\"btn btn-primary pull-right\">OK</div>"
						}).on("click",".btn",function(){
							$(this).parent().on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){$(this).remove()}).removeClass("in");
						});
						$("body").append(msgBox);
						setTimeout(function(){
							msgBox.addClass("in");
						},10);
					}
				});
			}
		}

		var renderSeeAlso = function(page){
			if(DKI.renderService.state.renderEnvironment.full){
				var mode = $(".nav-pills > li.active a",dom.menu.container).attr("href").replace("#",""),
					pages = [],
					reach = 3;
				switch(mode){
					case "topics" :
						var current = reach,
							currentPage = page;
						while(current > 0 && currentPage !== null){
							currentPage = dataStorage.getPrecedingPage(currentPage.page.pageid);
							if(currentPage && currentPage.objectid == page.objectid && currentPage.page.pageid != page.page_id){
								pages.push(currentPage);
								current --;
							}else{
								currentPage = null;
							}
						}
						current += reach;
						currentPage = page;
						while(current > 0 && currentPage !== null){
							currentPage = dataStorage.getProceedingPage(currentPage.page.pageid);
							if(currentPage && currentPage.objectid == page.objectid && currentPage.page.pageid != page.page_id){
								pages.push(currentPage);
								current --;
							}else{
								currentPage = null;
							}
						}
					break;
					case "index" :
						$.each(page.page.keywords,function(){
							if(pages.length < (reach*2)){
								$.each(state.index[this],function(){
									if(pages.length < (reach*2)){
										if(this.page_id != page.page_id){
											pages.push(this);
										}
									}else{
										return false;
									}
								})
							}else{
								return false;
							}
						});
					break;
				}
				var cont = dom.seeAlso.find(".kb-see-also-content").html("");
				$.each(pages,function(){
					var page = this;
					cont.append($("<div/>",{
						"class" : "kb-see-also-item col-sm-6 col-xs-12",
						html    : "<span class=\"fa fa-file-text-o\"></span><span>" + this.title + "</span>",
						attr    : {
							title : this.title
						},
						click   : function(){
							jumpTo(page.subeoid);
						}
					}));
				});
				pages.length === 0 ? dom.seeAlso.hide() : dom.seeAlso.show();
			}
		};
		var renderLanding = function(){
			var cfg = {
				title : "",
				description : ""
			};
			cfg = {
				title       : contentApi.getCourseMetadata().title,
				description : contentApi.getCourseMetadata().description
			};
			var maxPages = 5,
				items = [];
			$.each(dataStorage.courseStructure.modules,function(){
				$.each(this.objects,function(){
					var cfg = {
						object : {
							eoid   : this.eoid,
							title  : this.eodesc,
							items  : []
						},
						items : [],
						active : true,
						classes : "col-sm-offset-0"
					}
					$.each(this.subeos,function(i,o){
						if(i < maxPages){
							cfg.items.push({
								id    : this.subeoid,
								icon  : "fa fa-file-text-o",
								title : this.page.title
							});
						}else{
							return false;
						}
					});
					items.push(cfg);
				});
			});
			$.each(items,function(i,o){
				if(items.length == 4) {
					if(i == 0 || i == 2){
						this.classes = "col-sm-offset-2";
					}
				}
				else if(items.length % 3 != 0 && i == ((items.length) - (items.length % 3))){
					this.classes = "col-sm-offset-" + (4/(items.length % 3));
				}
			});
			cfg.cards = items;
			dom.landing = $(templates.landing(cfg)).appendTo($("body"));
			dom.landing.on(settings.clickEvent,".kb-card-items > li",function(){
				$("body").removeClass("kb-landing-show");
				jumpTo($(this).data("id"));
			});+
			dom.header.container.find(".search").on(settings.clickEvent,function(){
				$("body").toggleClass("kb-landing-show");
			});
			var heroImage = dataStorage.courseStructure.hero_image_id;
			if(heroImage){
				if(DKI.renderService.state.renderEnvironment.export){
					var heroImage = "assets/" + heroImage + "." + dataStorage.courseStructure.hero_image_extension;
				}else{
					var heroImage = state.config.settings.baseUrl + "admin/editor2/AssetManager/asset.cfm/" + heroImage;
				}
			}else {
				if(DKI.renderService.state.renderEnvironment.export){
					heroImage = "./design/resources/landing.png";
				}else{
					heroImage = state.config.settings.baseUrl + "content/authoringToolDB/designs/" + state.design.id + "/resources/landing.png";
				}
			}
			$("<style type=\"text/css\"> .kb-landing-heading-container:after{background-image:url('" + heroImage + "') !important;}</style>").appendTo($("head"));
		};
		var init = function(cfg) {
			state.config = cfg;
			jQuery.fn.centerInWindow = function () {
			    this.css("position","absolute");
			    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
			                                                $(window).scrollTop()) + "px");
			    this.css("left", Math.max(0, (($("body").width() - $(this).outerWidth()) / 2) + 
			                                                $(window).scrollLeft()) + "px");
			    return this;
			};
			$(window).on("resize",function(){
				if(!dom.menu.container.is(":visible")){
					dom.menu.container.find(".tooltipstered").tooltipster("hide");
				}
			});
			$("#contentFrame").on("click", function(){if($(window).width() < 900){
					dom.menu.container.hide("slide");
				}});
			dom.menu.buttons.glossary.on("click", function(){if($(window).width() < 900){
					dom.menu.container.hide("slide");
				}});

		contentApi.playerEvent.on('pageLoaded', function(){		
		if($(window).width() < 900){
				dom.menu.container.hide("slide");
			}		
		});
		if(DKI.renderService.state.renderEnvironment.full){
			renderLanding();
			//For subsequent page changes
			$(dataStorage).on(DKI.DataStorage.events.pageSelected,function(){
				var subeoid = DKI.getURLParameterValue("subeoid");
				if(subeoid == dataStorage.currentPage.subeoid){
					$("body").removeClass("kb-landing-show");
				}
				dom.menu.container.find(".kb-card, .kb-card li").removeClass("active");
				dom.menu.container.find(".kb-card[data-id=\"" + dataStorage.currentObject.eoid + "\"]").addClass("active");
				dom.menu.container.find(".kb-card li[data-id=\"" + dataStorage.currentPage.subeoid + "\"]").addClass("active");
				dom.header.kbInfo.find(".kb-info-header-lo-title").html(dataStorage.currentObject.eodesc);
				dom.header.kbInfo.find(".kb-info-header-page-title").html(dataStorage.currentPage.title);
				dom.header.kbInfo.find(".kb-info-header-page-createdOn").html(DKI.formatDate(dataStorage.currentPage.page.datecreated,true));
				if(dom.header.share[0]){
					//Older IE11 and IE 10 do not support window.location.origin
					var url = window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: ''),
					url = url + window.location.pathname + (window.location.search == "" ? "?" : window.location.search + "&");
					dom.header.share.data("shareLink",url + "subeoid=" + dataStorage.currentPage.subeoid);
				}
				var next = dataStorage.getNextPage();
				if(next) {
					dom.header.kbInfo.find(".kb-info-header-page-next").css("display","table-cell").html("Next: " + next.page.title).data("id",next.subeoid);
				}else{
					dom.header.kbInfo.find(".kb-info-header-page-next").css("display","none");
				}
				renderSeeAlso(dataStorage.currentPage);
			});
			if(cfg.design.parameters.config.startWithHomePage){
				$("body").addClass("kb-landing-show");
			}
		}
		

		this.events = {
			themeTranscriptShown: "themeTranscriptShown",
			menuOpened: "themeMenuOpened",
			outlineOpened: "themeOutlineOpened"
		};	

		return this;
	};

		window.Theme = init;
		if(DKI.courseStore){
			var renderIndexes = DKI.func.debounce(function(){
				var index = state.index,
					keys = DKI.getObjectKeys(index).sort(function(a,b){if(a < b) return -1;if(a > b) return 1;return 0;}),
					indices = [];
				$.each(keys,function(){
					var idx = index[this],
						baseTitle = this.charAt(0).toUpperCase() + this.slice(1,this.length),
						title = idx.length > 1 ? baseTitle + " <span>(" + idx.length + ")</span>" : baseTitle;
					indices.push({
						baseTitle : baseTitle,
						title     : title,
						pages     : idx
					});
				});
				dom.menu.index.html(templates.index({indices : indices}));

			},10,false);
			$(document).on(DKI.courseStore.events.loRegistered, function(e, object){
				var cfg = {
					items  : [],
					object : object
				}
				$.each(object.subeos, function(){
					var subeo = this;
					cfg.items.push({
						icon  : "fa fa-file-text-o",
						title : this.title,
						id    : subeo.subeoid
					});
				});
				dom.menu.topics.append(templates.card(cfg));
			});
			$(document).on(DKI.courseStore.events.pageRegistered, function(e,page){
				var subeo = dataStorage.getSubeoFromPage(page.id);
				$.each(subeo.page.keywords,function(){
					if(!state.index[this]) {
						state.index[this] = [subeo];
					}else{
						state.index[this].push(subeo);
					}
				});
				renderIndexes();
			});
			//For first load
			$(document).one(DKI.ContentPage.events.started,function(){
				if(!player.isSinglePage){
					dom.menu.container.find(".kb-card, .kb-card li").removeClass("active");
					dom.menu.container.find(".kb-card[data-id=\"" + dataStorage.currentObject.eoid + "\"]").addClass("active");
					dom.menu.container.find(".kb-card li[data-id=\"" + dataStorage.currentPage.subeoid + "\"]").addClass("active");
					renderSeeAlso(dataStorage.currentPage);
				}
			});
			$(document).on(DKI.glossaryBrowse.events.glossaryRegistered, function(event, data) {
				if(!dom.menu.glossary.find("li[data-id=\"" + data.id + "\"]")[0]){
				//The terms are fired in order of title, so we can just append as we go
					var curChar = data.term.toUpperCase().charAt(0),
						group = dom.menu.glossary.find("#dki-kb-glossary-" + curChar);
					if(!group[0]){
						group = $("<li class=\"panel\"><a href=\"#dki-kb-glossary-" + curChar + "\">" + curChar +"</a><ul id=\"dki-kb-glossary-" + curChar + "\" class=\"glossaryPanel\"></ul></li>").appendTo(dom.menu.glossary).find("ul.glossaryPanel");
					}
					group.append("<li data-id=\"" + data.id + "\">" + data.term + "</li>");
				}
			});
		}
	}();
}else {
	window.Theme = function(){};
	$("html").addClass("KB-disabled");
}
