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
		initEvents();		
		return this;
	};
	window.Theme = init;
}()
