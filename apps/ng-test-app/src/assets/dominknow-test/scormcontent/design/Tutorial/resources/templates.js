Handlebars.registerPartial("tutorialTheme_card","<div class='tutorial_card' id='{{id}}'>" + 
		"<img url='{{imgUrl}}'/>" +
		"<div class='card_details'>" + 
			"<h3 class='card-title'>{{title}}</h3>" +
			"<p>{{details}}</p>" +
			"<div class='card_footer'>" + 
				"<div class='btn read_time {{cls}}'></div>" + 
				"<div class='btn view'>View Tutorial</div>" + 
			"</div>" + 
	"</div>");