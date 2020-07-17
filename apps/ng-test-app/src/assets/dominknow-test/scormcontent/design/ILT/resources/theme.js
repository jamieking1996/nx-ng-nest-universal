!function() {
	var platform = dkiUA.getUAProperties().platform;
	var initEvents = function(){		
		//adding KB focus handling
		document.addEventListener('keydown', function(e) {
			if (e.keyCode === 9) {
				$('body').addClass('show-focus-outlines');
			}
		});

		$('body').on("click", "#skipToContent", function(e){
			$('body').addClass('show-focus-outlines');
		});
		
		var zoomCheck = $("<div/>", {"class": "zoomToFitChecker"});
		$("body").append(zoomCheck);
		var zoomToFit = zoomCheck.css("display") != "none";
		zoomCheck.remove();
		
		if(zoomToFit){
			$(window).on("resize", function(){
				var ratio;
				if((courseStructure.width / courseStructure.height) < $(window).width() / $(window).height()){
					ratio = $(window).height() / courseStructure.height;
				}
				else{
					ratio = $(window).width() / courseStructure.width;
				}
				

				var bg = $("body");
				settings.scale = ratio;

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
	};
	var init = function(cfg) {	
		var actionsForPage = {};
		if(dataStorage){
			$(document).on(DKI.ContentPage.events.ready, function(e, page){
				actionsForPage[page.id] = {
					actions: []
				};
				if(page.actions){
					$.each(page.actions, function(){
						if((this.trigger == "time" || this.trigger == "customILT") && this.pageId != ""){
							this.trigger = "customILT";
							actionsForPage[page.id].actions.push(this);
						}						
					})
				}
			});
			
			$(document).on(DKI.ContentPage.events.started, function(e, page){	
				if(player.contentPage.current.actionAPI){
					$.each(actionsForPage[dataStorage.currentPage.page.id].actions, function(){
						this.firedOnce = false;
					});
				}
			});
			
			$(document).on("keyup", function(e){
				if(e.which == 39 || e.which == 34 || e.which == 38){
					var actionExecuted = false;
					if(player.contentPage.current.actionAPI){
						$.each(actionsForPage[dataStorage.currentPage.page.id].actions, function(){
							var action = this;
							if(!action.firedOnce){						
								if(player.contentPage.current.actionAPI.actionConditionsMet(this)){
									player.contentPage.current.actionAPI.actionHandlers[action.type](action, player.contentPage.current);
									$(document).trigger(DKI.ContentPage.events.actionFired,[{pageContext : player.contentPage.current, action: action}]);
								}
								action.firedOnce = true;
								actionExecuted = true;
								return false;
							}
						});
					}
					//no action found or processed? go next.
					if(!actionExecuted){
						contentApi.contentGoNext();
					}
				}
			});
			
			$(document).on("keyup", function(e){
				if(e.which == 33 || e.which == 37 || e.which == 40){
					var actionExecuted = false;
					if(player.contentPage.current.actionAPI){
						for(var i = actionsForPage[dataStorage.currentPage.page.id].actions.length - 1; i >= 0; i--){					
							var action = actionsForPage[dataStorage.currentPage.page.id].actions[i];
							if(action.firedOnce){						
								if(player.contentPage.current.actionAPI.actionConditionsMet(this)){
									player.contentPage.current.actionAPI.actionHandlers.undoAction(action, player.contentPage.current);
									$(document).trigger(DKI.ContentPage.events.actionFired,[{pageContext : player.contentPage.current, action: action}]);
								}
								action.firedOnce = false;
								actionExecuted = true;
								break;
							}
						}
						//no action found or processed? go next.
						if(!actionExecuted && player.contentPage.previous){
							contentApi.contentGoBack();
						}
					}
					
				}
			});
			
			var notesWin = window.open(cfg.themeRoot + "resources/slideNotes.html", '_blank', "height=400,width=600,toolbar=0,location=0,menubar=0");
			$(window).on("beforeunload", function(){
				notesWin.close();
			});
		}
		initEvents();		
		return this;
	};
	window.Theme = init;
}()
