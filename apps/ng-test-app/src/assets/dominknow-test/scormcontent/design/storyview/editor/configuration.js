{
	"sections": [
		{
			"id": "page_navigator",
			"header": "Page Navigator",
			"templates": [
				"<div class=\"page_header\"><div id=\"navbar_menu_wrapper\"><a id=\"navbar_menu\" href=\"#\" class=\"navbar-link\" data-toggle=\"offcanvas\" data-target=\"#left_menu\"><i class=\"fa fa-navicon\"></i></a></div><div id=\"screenCount_wrapper\"><p id=\"screenCount\"><span class=\"currentPageCount\">5</span> / <span class=\"totalPageCount\">11</span></p></div><div id=\"search_wrapper\"><i class=\"fa fa-search\"></i></div><div id=\"page_title_wrapper\"><h1 id=\"page_title\">Current Page Title</h1></div><div id=\"regular-progress\" class=\"progress-wrapper\"><div class=\"progress clearfix dki-course-max-width\"><div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"11\"></div></div></div><div id=\"sticky-progress\" class=\"progress-wrapper\"><div class=\"progress clearfix dki-course-max-width\"><div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"11\"></div></div></div></div>"
			],
			"option_groups" :[
				{
					"id": "page_nav_bar_options",
					"header": "Accent Color",
					"col-width": 4,
					"properties": [
						{
							"label": "Background",
							"type": "theme_color",
							"less_variable": "@navbar-progress-bar-bg",
							"selector" : "#page_navigator .progress"
						}
					]
				},
				{
					"id": "page_nav_count_options",
					"header": "Text",
					"col-width": 4,
					"properties": [
						{
							"label": "Page Title & Count",
							"type": "theme_color",
							"less_variable": "@navbar-page-info-color",
							"selector" : "#page_navigator .progress"
						}
					]
				}
			],
			"property_groups" : [
				{
					"id": "page_count_navigator_properties",
					"header": "Options",
					"col-width": 12,
					"properties": [
						{
							"label": "Page Count",
							"type": "checkbox",
							"less_variable": "@page_count_enabled",
							"selector" : "#screenCount_wrapper",
							"authorAccessible": "false"
						},
						{
							"label": "Use Page Title",
							"type": "checkbox",
							"less_variable": "@page_title_enabled",
							"selector" : "#page_title_wrapper",
							"authorAccessible": "false"
						},
						{
							"label": "Show Search",
							"type": "checkbox",
							"less_variable": "@search_enabled",
							"selector" : "#search_wrapper",
							"authorAccessible": "false"
						}
					]
				}
			]
		},
		{
			"id": "home_page",
			"header": "Home Page",
			"option_groups": [			
				{
					"id": "home_page_background_cover",
					"header": "Cover Art",
					"col-width": 12,
					"properties": [						
						{
							"label": "Background Position",
							"type": "dropdown",
							"less_variable": "@hero-image-position",
							"values" : [
								{
									"label" : "Top",
									"value" : "top"
								},
								{
									"label" : "Center",
									"value" : "center"
								},
								{
									"label" : "Bottom",
									"value" : "bottom"
								}
							]
						}
					]
				},
				{
					"id": "home_page_background_size",
					"col-width": 12,
					"properties": [
						{
							"label": "Background Size",
							"type": "dropdown",
							"less_variable": "@hero-image-size",
							"values" : [
								{
									"label" : "Cover",
									"value" : "cover"
								},
								{
									"label" : "Contain",
									"value" : "contain"
								}
							]
						}
					]
				}
			]
		},
		{
			"id": "hero_square",
			"header": "Hero Square",
			"col-width": 4,
			"templates": [
				"<div id=\"menu_top\" class=\"navmenu\" style=\"position: static;\"><div id=\"menu_top_content\"><h3 id=\"menu_course_title\">Course Title</h3><div id=\"course_description\">Course Description</div><div id=\"start_course_button\"><button class=\"btn btn-default\"></button></div><div id=\"navbar_progress_wrapper\" class=\"progress\" style=\"position: static\"><div class=\"progress-bar learning-completion-progress\" role=\"progressbar\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"11\"><span class=\"sr-only\">{{strings.endCourse.LearningStatusLabel}} <span class=\"learning-completion-value\">0</span>%</span></div></div><div class=\"background menu_bg bg-primary\"></div></div></div>" 
			],
			"option_groups" :[
				{
					"id": "page_nav_bar_options",
					"header": "Hero Square",
					"col-width": 4,
					"properties": [
						{
							"label": "Text",
							"type": "theme_color",
							"less_variable": "@hero_square_text_color"
						}
					]
				},
				{
					"id": "page_nav_count_options",
					"header": "Text",
					"col-width": 4,
					"properties": [
						{
							"label": "Start Button Text",
							"type": "text",
							"less_variable": "@navbar-Start-Button-Text"
						}
					]
				}
			],
			"property_groups" : [
				{
					"id": "page_count_navigator_properties",
					"header": "Options",
					"col-width": 4,
					"properties": [
						{
							"label": "Show Homepage",
							"type": "checkbox",
							"less_variable": "@enable_homepage",
							"selector": ".navmenu",
							"authorAccessible": "false"
						},
						{
							"label": "Show Course Description",
							"type": "checkbox",
							"less_variable": "@course_description_enabled",
							"selector": "#course_description",
							"authorAccessible": "false"
						}
					]
				}
			]
		},
		{
			"id": "reading_time",
			"header": "Reading Time",
			"col-width": 4,
			"templates": [],
			"option_groups" :[
				{
					"id": "reading_time_options",
					"header": "",
					"col-width": 4,
					"properties": [
						{
							"label": "Show Reading Time",
							"type": "checkbox",
							"less_variable": "@enable_readingtime",
							"authorAccessible": "false"
						}
					]
				},
				{
					"id": "reading_time_text",
					"header": "Text",
					"col-width": 4,
					"properties": [
						{
							"label": "Minutes to read text",
							"type": "text",
							"less_variable": "@readingtime-minutes-to-read"
						},
						{
							"label": "Minutes left text",
							"type": "text",
							"less_variable": "@readingtime-minutes-left"
						}
					]
				}
			]			
		}


	],
	"preview": "<div class=\"body-bg\"><div class=\"page_header\" style=\"height:100px;\"><div id=\"navbar_menu_wrapper\"><a id=\"navbar_menu\" href=\"#\" class=\"navbar-link\" data-toggle=\"offcanvas\" data-target=\"#left_menu\"><i class=\"fa fa-navicon\"></i></a></div><div id=\"screenCount_wrapper\"><p id=\"screenCount\"><span class=\"currentPageCount\">1</span> / <span class=\"totalPageCount\">3</span></p></div><div id=\"search_wrapper\"><i class=\"fa fa-search\"></i></div><div id=\"page_title_wrapper\"><h1 id=\"page_title\" style=\"margin-top:0;\">{{{title}}}</h1></div><div id=\"regular-progress\" class=\"progress-wrapper\"><div class=\"progress clearfix dki-course-max-width\"><div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"1\" aria-valuemin=\"1\" aria-valuemax=\"3\"></div></div></div></div><h1 style=\"margin-top: 0;\">{{theme.title}}</h1><h3>{{theme.parameters.subtitle}}</h3><div class=\"thumbnail-button-container\" style=\"position:absolute;bottom:80px;\"><button class=\"btn btn-default\"></button><button class=\"btn btn-primary\"></button><button class=\"btn btn-success\"></button><button class=\"btn btn-info\"></button><button class=\"btn btn-warning\"></button><button class=\"btn btn-danger\"></button></div><div id=\"forwardButton\" class=\"dki-course-max-width\" style=\"margin: auto; position: absolute;bottom: 0;min-height: 60px;\"><div class=\"button-text\">{{strings.index.nextButtonLabel}}</div><div><h4 id=\"next_page_title\"></h4></div><div><i class=\"fa fa-chevron-down\"></i></div></div></div>"
}
