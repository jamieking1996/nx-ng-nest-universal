{
	"sections": [
		{
			"id" : "options",
			"header" : "Player Options",
			"property_groups" : [
				{
					"id": "options_properties",
					"header": "Direction",
					"col-width": 12,
					"forBaseline" : true,
					"properties" : [
						{
							"id": "rtl",
							"label": "Right to Left",
							"type": "checkbox",
							"less_variable": "@rtl",
							"selector": ""
						}
					]
				}				
			]
		},
		{
			"id" : "top_nav_bar",
			"header" : "Top Bar and Menus",
			"templateWidths" : ["lg","xs"],
			"templates" : [
				"<nav id=\"navbar_header\" data-template-index=\"1\" class=\"navbar navbar-default navbar-fixed-top\"><div class=\"container-fluid\"><ul class=\"nav navbar-nav navbar-left\"><li id=\"navbar_logo_wrapper\" class=\"navbar-header\"><span class=\"navbar-brand\" tabindex=\"-1\"><div id=\"navbar_logo\"></div></span></li><li id=\"navbar_menu_wrapper\"><a id=\"navbar_menu\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" data-toggle=\"offcanvas\" data-target=\"#left_menu\" title=\"{{strings.index.menuButtonLabel}}\"><i class=\"fa fa-navicon\"></i></a></li><li id=\"navbar_transcript_wrapper\"><a id=\"navbar_transcript\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" title=\"{{strings.index.transcriptButtonLabel}}\"><i class=\"fa fa-file-text-o\"></i></a></li><li id=\"navbar_narration_wrapper\"><a id=\"navbar_narration\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" title=\"{{strings.index.audioButtonLabel}}\"><i class=\"fa fa-pause\"></i><i class=\"fa fa-play\"></i></a></li></ul><ul class=\"nav navbar-nav\"><li id=\"navbar_course_title_wrapper\"><h4 class=\"navbar-text\" tabindex=\"1\">{{contentApi \"getCourseName\"}}</h4></li></ul><ul id=\"navbar_navigation_wrapper\" class=\"nav navbar-nav navbar-right\"><li id=\"navbar_screencount_wrapper\" tabindex=\"1\"><p id=\"screenCount\" class=\"navbar-text\"><span id=\"currentScreen\">0</span> / <span id=\"totalScreens\">0</span></p></li><li id=\"navbar_back_wrapper\"><a id=\"backButton\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" title=\"{{strings.index.previousButtonLabel}}\"><i class=\"fa\"></i></a></li><li id=\"navbar_forward_wrapper\"><a id=\"forwardButton\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" title=\"{{strings.index.nextButtonLabel}}\"><i class=\"fa\"></i></a></li></ul></div><div id=\"navbar_progress_wrapper\" class=\"progress\"><div class=\"progress-bar learning-completion-progress\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"><span class=\"sr-only\" tab-index=\"1\">{{strings.endCourse.LearningStatusLabel}} <span class=\"learning-completion-value\">0</span>%</span></div></div></nav>",
				"<nav id=\"navbar_header\" data-template-index=\"2\" class=\"navbar navbar-default navbar-fixed-top\"><div class=\"container-fluid\"><ul class=\"col-md-3 nav navbar-nav navbar-left\"><li id=\"navbar_back_wrapper\"><a id=\"backButton\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" title=\"{{strings.index.previousButtonLabel}}\"><i class=\"fa\"></i></a></li><li id=\"navbar_menu_wrapper\"><a id=\"navbar_menu\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" data-toggle=\"offcanvas\" data-target=\"#left_menu\" title=\"{{strings.index.menuButtonLabel}}\"><i class=\"fa fa-navicon\"></i></a></li><li id=\"navbar_logo_wrapper\" class=\"navbar-header\"><span class=\"navbar-brand\" tabindex=\"-1\"><div id=\"navbar_logo\"></div></span></li></ul><ul class=\"col-md-6 nav navbar-nav\"><li id=\"navbar_course_title_wrapper\" tabindex=\"1\"><h4 class=\"navbar-text\">{{contentApi \"getCourseName\"}}</h4></li></ul><ul class=\"nav navbar-nav navbar-right\"><li id=\"navbar_screencount_wrapper\" tabindex=\"1\"><p id=\"screenCount\" class=\"navbar-text\"><span id=\"currentScreen\">0</span> / <span id=\"totalScreens\">0</span></p></li><li id=\"navbar_forward_wrapper\"><a id=\"forwardButton\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" title=\"{{strings.index.nextButtonLabel}}\"><i class=\"fa\"></i></a></li></ul></div><div id=\"navbar_progress_wrapper\" class=\"progress\"><div class=\"progress-bar learning-completion-progress\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"><span class=\"sr-only\" tab-index=\"1\">{{strings.endCourse.LearningStatusLabel}} <span class=\"learning-completion-value\">0</span>%</span></div></div></nav>",
				"<nav id=\"navbar_header\" data-template-index=\"3\" class=\"navbar navbar-default navbar-fixed-top enlargeIcons alignBot\"> <div class=\"container-fluid\"> <ul class=\"nav navbar-nav navbar-left logo\"> <li id=\"navbar_logo_wrapper\" class=\"navbar-header\"> <span class=\"navbar-brand\" tabindex=\"-1\"> <div id=\"navbar_logo\"></div> </span></li><li id=\"navbar_transcript_wrapper\"><a id=\"navbar_transcript\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" title=\"{{strings.index.transcriptButtonLabel}}\"><i class=\"fa fa-file-text-o\"></i></a></li> <li id=\"navbar_narration_wrapper\"><a id=\"navbar_narration\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" title=\"{{strings.index.audioButtonLabel}}\"><i class=\"fa fa-pause\"></i><i class=\"fa fa-play\"></i></a></li> </ul> <ul class=\"nav navbar-nav\"> <li id=\"navbar_course_title_wrapper\"> <h4 class=\"navbar-text\" tabindex=\"1\">{{contentApi \"getCourseName\"}}</h4></li> </ul> <ul id=\"navbar_navigation_wrapper\" class=\"nav navbar-nav navbar-right\"> <li id=\"navbar_back_wrapper\"><a id=\"backButton\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" title=\"{{strings.index.previousButtonLabel}}\"><i class=\"fa\"></i></a></li> <li id=\"navbar_screencount_wrapper\" class=\"\" tabindex=\"1\"> <p id=\"screenCount\" class=\"navbar-text\"><span id=\"currentScreen\">0</span> / <span id=\"totalScreens\">0</span></p> </li> <li id=\"navbar_forward_wrapper\"><a id=\"forwardButton\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" title=\"{{strings.index.nextButtonLabel}}\"><i class=\"fa\"></i></a></li> <li id=\"navbar_menu_wrapper\"><a data-orientation=\"right\" id=\"navbar_menu\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" data-toggle=\"offcanvas\" data-target=\"#left_menu\" title=\"{{strings.index.menuButtonLabel}}\"><i class=\"fa fa-navicon\"></i></a></li> </ul> </div> <div id=\"navbar_progress_wrapper\" class=\"progress\"> <div class=\"progress-bar learning-completion-progress\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"><span class=\"sr-only\" tab-index=\"1\">{{strings.endCourse.LearningStatusLabel}} <span class=\"learning-completion-value\">0</span>%</span> </div> </div> </nav>"
			],
			"option_groups" : [
				{
					"id": "top_nav_bar_colors_bg",
					"header": "Colors",
					"col-width": 4,
					"properties": [
						{
							"label": "Background",
							"type": "base_color",
							"less_variable": "@navbar-default-bg"
						}
					]
				},
				{
					"id": "top_nav_bar_colors_icons",
					"header": "&nbsp;",
					"col-width": 4,
					"properties": [
						{
							"label": "Icons",
							"type": "base_color",
							"less_variable": "@navbar-default-link-color"
						}
					]
				},
				{
					"id": "top_nav_bar_colors_fg",
					"header": "&nbsp;",
					"col-width": 4,
					"properties": [
						{
							"label": "Text",
							"type": "base_color",
							"less_variable": "@navbar-default-color"
						}
					]
				},
				{
					"id": "top_nav_bar_progress",
					"header": "Top Navigation",
					"col-width": 4,
					"properties": [
						{
							"label": "Progress",
							"type": "base_color",
							"less_variable": "@navbar-progress-bar-bg"
						}
					]
				},
				{
					"id": "top_nav_bar_iconSet",
					"header": "&nbsp;",
					"forBaseline" : true,
					"col-width": 4,
					"properties": [
						{
							"label": "Icon Set",
							"type": "dropdown",
							"less_variable": "@icon-set",
							"values": [
								{
									"value": "chevron",
									"label": "<i class=\"fa fa-navicon\"></i><i class=\"fa fa-chevron-left\"></i><i class=\"fa fa-chevron-right\"></i>"
								},
								{
									"value": "angle",
									"label": "<i class=\"fa fa-navicon\"></i><i class=\"fa fa-angle-left\"></i><i class=\"fa fa-angle-right\"></i>"
								},
								{
									"value": "double",
									"label": "<i class=\"fa fa-navicon\"></i><i class=\"fa fa-angle-double-left\"></i><i class=\"fa fa-angle-double-right\"></i>"
								},
								{
									"value": "arrow",
									"label": "<i class=\"fa fa-navicon\"></i><i class=\"fa fa-arrow-left\"></i><i class=\"fa fa-arrow-right\"></i>"
								},
								{
									"value": "arrow_fill",
									"label": "<i class=\"fa fa-navicon\"></i><i class=\"fa fa-arrow-circle-left\"></i><i class=\"fa fa-arrow-circle-right\"></i>"
								},
								{
									"value": "arrow_outline",
									"label": "<i class=\"fa fa-navicon\"></i><i class=\"fa fa-arrow-circle-o-left\"></i><i class=\"fa fa-arrow-circle-o-right\"></i>"
								},
								{
									"value": "chevron_fill",
									"label": "<i class=\"fa fa-navicon\"></i><i class=\"fa fa-chevron-circle-left\"></i><i class=\"fa fa-chevron-circle-right\"></i>"
								}
							]
						}
					]
				},
				{
					"id": "top_nav_max_width",
					"header": "&nbsp;",
					"col-width": 4,
					"forBaseline" : true,
					"properties": [
						{
							"label": "Constrain to Course Width",
							"type": "checkbox",
							"less_variable": "constrainCourseWidth",
							"selector": ""
						}
					]
				}			
			],
			"property_groups" : [
				{
					"id": "top_nav_bar_options",
					"col-width": 6,
					"template" : "",
					"forBaseline" : true,
					"forBreakpoint" : "sm,md,lg",
					"properties" : [
						[
							{
								"label": "Menu",
								"type": "checkbox",
								"less_variable": "@navbar-include-menu",
								"selector": "#navbar_menu_wrapper"
							},						
							{
								"label": "Transcript",
								"type": "checkbox",
								"less_variable": "@navbar-include-transcript",
								"selector": "#navbar_transcript_wrapper"
							},
							{
								"label": "Narration",
								"type": "checkbox",
								"less_variable": "@navbar-include-narration",
								"selector": "#navbar_narration_wrapper"
							},						
							{
								"label": "Logo",
								"type": "checkbox",
								"less_variable": "@navbar-include-logo",
								"selector": "#navbar_logo_wrapper"
							}
						],
						[
							{
								"label": "Course Title",
								"type": "checkbox",
								"less_variable": "@navbar-include-course-title",
								"selector": "#navbar_course_title_wrapper"
							},
							{
								"label": "Screen Count",
								"type": "checkbox",
								"less_variable": "@navbar-include-screen-count",
								"selector": "#navbar_screencount_wrapper"
							},
							{
								"label": "Next",
								"type": "checkbox",
								"less_variable": "@navbar-include-next",
								"selector": "#navbar_forward_wrapper"
							},
							{
								"label": "Back",
								"type": "checkbox",
								"less_variable": "@navbar-include-back",
								"selector": "#navbar_back_wrapper"
							},
							{
								"label": "Progress Bar",
								"type": "checkbox",
								"less_variable": "@navbar-include-progress-bar",
								"selector": "#navbar_progress_wrapper"
							}
						]
					]
				},
				{
					"id": "top_nav_bar_options_xs",
					"header": "",
					"col-width": 6,
					"template" : "",
					"forBaseline" : true,
					"forBreakpoint" : "xs",
					"properties" : [
						[
							{
								"label": "Menu",
								"type": "checkbox",
								"less_variable": "@xs-navbar-include-menu",
								"selector": "#navbar_menu_wrapper",
								"idSuffix": "-2"
							},						
							{
								"label": "Transcript",
								"type": "checkbox",
								"less_variable": "@xs-navbar-include-transcript",
								"selector": "#navbar_transcript_wrapper"
							},
							{
								"label": "Narration",
								"type": "checkbox",
								"less_variable": "@xs-navbar-include-narration",
								"selector": "#navbar_narration_wrapper"
							},						
							{
								"label": "Logo",
								"type": "checkbox",
								"less_variable": "@xs-navbar-include-logo",
								"selector": "#navbar_logo_wrapper"
							}
						],
						[
							{
								"label": "Course Title",
								"type": "checkbox",
								"less_variable": "@xs-navbar-include-course-title",
								"selector": "#navbar_course_title_wrapper"
							},
							{
								"label": "Screen Count",
								"type": "checkbox",
								"less_variable": "@xs-navbar-include-screen-count",
								"selector": "#navbar_screencount_wrapper"
							},
							{
								"label": "Next",
								"type": "checkbox",
								"less_variable": "@xs-navbar-include-next",
								"selector": "#navbar_forward_wrapper"
							},
							{
								"label": "Back",
								"type": "checkbox",
								"less_variable": "@xs-navbar-include-back",
								"selector": "#navbar_back_wrapper"
							},
							{
								"label": "Progress Bar",
								"type": "checkbox",
								"less_variable": "@xs-navbar-include-progress-bar",
								"selector": "#navbar_progress_wrapper"
							}
						]
					]
				}
			]
		},
		{
			"id" : "menu",
			"header" : "Menu Options",
			"forBreakpoint" : "xs,sm,md,lg",
			"property_groups" : [
				{
					"id": "menu_buttons",
					"header": "Menu Options",
					"col-width": 8,
					"forBaseline" : true,
					"template": "<nav id=\"left_menu\" class=\"navmenu navmenu-default navmenu-fixed-left offcanvas\"><div><div class=\"navmenu-header\"></div><div><ul class=\"nav navmenu-nav\"><li id=\"navmenu_x_wrapper\" class=\"clearfix\"><a style=\"display:inline-block\" id=\"navmenu_x\" href=\"javascript:;\" class=\"navmenu-link navmenu-submenu-link  pull-right\" tabindex=\"1\"><i class=\"fa fa-times menu-icon\"></i></a></li><li id=\"navmenu_search_wrapper\"><a><div class=\"input-group\"><div class=\"input-group-addon\"><i class=\"fa fa-search\"></i></div><input id=\"navmenu_search\" type=\"text\" class=\"form-control\" placeholder=\"{{strings.courseSearch.inputPlaceholder}}\" /></div></a></li>{{#each root.theme.parameters.config.menuItems}}{{#unless this.disabled}}{{{renderParamOption this}}}{{/unless}}{{/each}}<li id=\"navmenu_outline_wrapper\"><a id=\"navmenu_outline\" href=\"#\" tabindex=\"1\" class=\"navmenu-link navmenu-submenu-link\" data-target=\"#dki_course_outline\"><i class=\"fa fa-sitemap menu-icon\"></i>{{strings.index.outlineTabLabel}}<i class=\"fa fa-chevron-right pull-right\"></i></a></li><li id=\"navmenu_glossary_wrapper\"><a id=\"navmenu_glossary\" href=\"#\" tabindex=\"1\" class=\"navmenu-link navmenu-submenu-link\" data-target=\"#dki_glossary_list\"><i class=\"fa fa-list-ul menu-icon\"></i>{{strings.index.glossaryButtonLabel}}<i class=\"fa fa-chevron-right pull-right\"></i></a></li><li id=\"navmenu_resource_wrapper\"><a id=\"navmenu_resource\" href=\"#\" tabindex=\"1\" class=\"navmenu-link navmenu-submenu-link\" data-target=\"#dki_resource_list\"><i class=\"fa fa-file-o menu-icon\"></i>{{strings.index.resourcesButtonLabel}}<i class=\"fa fa-chevron-right pull-right\"></i></a></li><li id=\"navmenu_replay_wrapper\"><a id=\"replayButton\" href=\"#\" tabindex=\"1\" class=\"navmenu-link\"><i class=\"fa fa-refresh menu-icon\"></i>{{strings.index.replayButtonLabel}}</a></li><li id=\"navmenu_exit_wrapper\"><a id=\"exitButton\" href=\"#\" tabindex=\"1\" class=\"navmenu-link\"><i class=\"fa fa-close menu-icon\"></i>{{strings.index.exitButtonLabel}}</a></li></ul></div></div></nav>",
					"template-container-class" : "",
					"template-col-width" : 8,
					"properties" : [
						{
							"id": "pinned-Menu",
							"label": "Pinned Menu (Flow only)",
							"type": "checkbox",
							"less_variable": "@pinned-menu",
							"selector": ""
						},
						{
							"label": "Enable Hiding Pinned Menu (Flow only)",
							"type": "checkbox",
							"less_variable": "@allow-hidden-pinned-menu",
							"selector": ""
						},
						{
							"label": "Close Button",
							"type": "checkbox",
							"less_variable": "@menu-include-x-button",
							"selector": "#navmenu_search_wrapper"
						},
						{
							"label": "Search",
							"type": "checkbox",
							"less_variable": "@menu-include-search",
							"selector": "#navmenu_search_wrapper"
						},
						{
							"label": "Outline",
							"type": "checkbox",
							"less_variable": "@menu-include-outline",
							"selector": "#navmenu_outline_wrapper"
						},
						{
							"label": "Hide pages from outline",
							"type": "checkbox",
							"less_variable": "@navbar-hide-pages",
							"selector": "#navbar_menu_wrapper"
						},
						{
							"label": "Glossary",
							"type": "checkbox",
							"less_variable": "@menu-include-glossary",
							"selector": "#navmenu_glossary_wrapper"
						},
						{
							"label": "Resources",
							"type": "checkbox",
							"less_variable": "@menu-include-resources",
							"selector": "#navmenu_resource_wrapper"
						},
						{
							"label": "Replay",
							"type": "checkbox",
							"less_variable": "@menu-include-replay",
							"selector": "#navmenu_replay_wrapper"
						},
						{
							"label": "Exit",
							"type": "checkbox",
							"less_variable": "@menu-include-exit",
							"selector": "#navmenu_exit_wrapper"
						}
					]
				},
				{
					"id": "menu_custom_buttons",
					"header": "Custom Menu Items",
					"col-width": 4,
					"forBaseline" : true,
					"properties" : [
						{
							"label": "Item 1",
							"type": "parameter",
							"namespace": "menuItems.1",
							"id" : "menuItem1",
							"inTemplate" : "menu_buttons",
							"template" : "<li id=\"{{id}}\"><a class=\"navmenu-link navmenu-submenu-link\" href=\"javascript:;\"><i class=\"fa {{props.icon}} menu-icon\"></i>{{props.label}}</a></li>",
							"cfg"      : {
								"label" : {
									"label" : "Item Label",
									"type"  : "input",
									"value" : "Item 1"
								},
								"icon" : {
									"label" : "Menu Icon",
									"type"  : "icon",
									"value" : "fa-info"
								},
								"url" : {
									"label" : "Item Url",
									"type"  : "input",
									"value" : " "
								}
							}
						},
						{
							"label": "Item 2",
							"type": "parameter",
							"namespace": "menuItems.2",
							"id" : "menuItem2",
							"inTemplate" : "menu_buttons",
							"template" : "<li id=\"{{props.id}}\"><a class=\"navmenu-link navmenu-submenu-link\" href=\"javascript:;\"><i class=\"fa {{props.icon}} menu-icon\"></i>{{props.label}}</a></li>",
							"cfg"      : {
								"label" : {
									"label" : "Item Label",
									"type"  : "input",
									"value" : "Item 2"
								},
								"icon" : {
									"label" : "Menu Icon",
									"type"  : "icon",
									"value" : "fa-info"
								},
								"url" : {
									"label" : "Item Url",
									"type"  : "input",
									"value" : " "
								}
							}
						},
						{
							"label": "Item 3",
							"type": "parameter",
							"namespace": "menuItems.3",
							"id" : "menuItem3",
							"inTemplate" : "menu_buttons",
							"template" : "<li id=\"{{props.id}}\"><a class=\"navmenu-link navmenu-submenu-link\" href=\"javascript:;\"><i class=\"fa {{props.icon}} menu-icon\"></i>{{props.label}}</a></li>",
							"cfg"      : {
								"label" : {
									"label" : "Item Label",
									"type"  : "input",
									"value" : "Item 3"
								},
								"icon" : {
									"label" : "Menu Icon",
									"type"  : "icon",
									"value" : "fa-info"
								},
								"url" : {
									"label" : "Item Url",
									"type"  : "input",
									"value" : " "
								}
							}
						},
						{
							"label": "Item 4",
							"type": "parameter",
							"namespace": "menuItems.4",
							"id" : "menuItem4",
							"inTemplate" : "menu_buttons",
							"template" : "<li id=\"{{props.id}}\"><a class=\"navmenu-link navmenu-submenu-link\" href=\"javascript:;\"><i class=\"fa {{props.icon}} menu-icon\"></i>{{props.label}}</a></li>",
							"cfg"      : {
								"label" : {
									"label" : "Item Label",
									"type"  : "input",
									"value" : "Item 4"
								},
								"icon" : {
									"label" : "Menu Icon",
									"type"  : "icon",
									"value" : "fa-info"
								},
								"url" : {
									"label" : "Item Url",
									"type"  : "input",
									"value" : " "
								}
							}
						},
						{
							"label": "Item 5",
							"type": "parameter",
							"namespace": "menuItems.5",
							"id" : "menuItem5",
							"inTemplate" : "menu_buttons",
							"template" : "<li id=\"{{props.id}}\"><a class=\"navmenu-link navmenu-submenu-link\" href=\"javascript:;\"><i class=\"fa {{props.icon}} menu-icon\"></i>{{props.label}}</a></li>",
							"cfg"      : {
								"label" : {
									"label" : "Item Label",
									"type"  : "input",
									"value" : "Item 5"
								},
								"icon" : {
									"label" : "Menu Icon",
									"type"  : "icon",
									"value" : "fa-info"
								},
								"url" : {
									"label" : "Item Url",
									"type"  : "input",
									"value" : " "
								}
							}
						}
					]
				}
			]

		}
	],
	"preview": "<div class=\"body-bg\">{{{renderTemplate theme.parameters.editor.templates.top_nav_bar theme}}}<h1>{{theme.title}}</h1><h3>{{theme.parameters.subtitle}}</h3><div class=\"thumbnail-button-container\"><button class=\"btn btn-default\"></button><button class=\"btn btn-primary\"></button><button class=\"btn btn-success\"></button><button class=\"btn btn-info\"></button><button class=\"btn btn-warning\"></button><button class=\"btn btn-danger\"></button></div><div class=\"wcag-badge\"></div></div>"
}