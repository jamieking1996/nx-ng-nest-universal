	{
	"sections": [
		{
			"id" : "options",
			"header" : "Player Options",
			"property_groups" : [
				{
					"id": "options_properties",
					"header": "Window Settings",
					"col-width": 12,
					"forBaseline" : true,
					"properties" : [
						{
							"id": "zoomtofit",
							"label": "Zoom to Fit",
							"type": "checkbox",
							"less_variable": "@zoomtofit",
							"selector": ""
						}
					]
				}				
			]
		},
		{
			"id" : "top_nav_bar",
			"header" : "Top Bar and Menus",
			"templates" : [
				"<div id=\"headerContainer\" role=\"navigation\" class=\"navbar navbar-default navbar-fixed-top\"><div class=\"container-fluid\"><ul class=\"nav navbar-nav navbar-left\"> <li id=\"navbar_logo_wrapper\" class=\"navbar-header\"><span class=\"navbar-brand\" tabindex=\"-1\"><div id=\"navbar_logo\"></div></span></li> <li id=\"info\" class=\"navbar-header\" > <span id=\"courseTitle\" class=\"navbar-text\">Course Title</span> <span id=\"moduleName\" class=\"navbar-text\" tabindex=\"0\">Module Title</span> <span id=\"objectName\" class=\"navbar-text\" tabindex=\"0\" >Learning Object Title</span> <span id=\"pageName\" class=\"navbar-text\" tabindex=\"0\">Page Title</span></li></ul> <ul class=\"nav navbar-nav navbar-right\"> <li class=\"navButtonContainer navbar-header\" > <a id=\"navbar_transcript\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" data-toggle=\"offcanvas\" data-target=\"#transcript_menu\" title=\"Transcript\"><i class=\"fa fa-file-text-o\"></i></a>  </li> <li class=\"navButtonContainer navbar-header\" > <a id=\"navbar_menu\" href=\"#\" tabindex=\"1\" class=\"navbar-link\" data-toggle=\"offcanvas\" data-target=\"#left_menu\" title=\"Menu\"><i class=\"fa fa-navicon\"></i></a>  </li> </ul></div> <div id=\"navbar_progress_wrapper\" class=\"progress\"><div class=\"progress-bar learning-completion-progress\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"><span class=\"sr-only\" tab-index=\"1\">{{strings.endCourse.LearningStatusLabel}} <span class=\"learning-completion-value\">0</span>%</span></div></div></div>"
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
				}		
			],
			"property_groups" : [
				{
					"id": "top_nav_bar_options",
					"header": "Navigation Options",
					"col-width": 6,
					"template" : "",
					"forBaseline" : true,
					"properties" : [
								{
							"label": "Logo",
							"type": "checkbox",
							"less_variable": "@navbar-include-logo",
							"selector": "#navbar_logo_wrapper"
						},				
						{
							"label": "Course Title",
							"type": "checkbox",
							"less_variable": "@navbar-include-courseTitle",
							"selector": "#courseTitle"
						},
						{
							"label": "Module Title",
							"type": "checkbox",
							"less_variable": "@navbar-include-moduleTitle",
							"selector": "#moduleName"
						},
						{
							"label": "Learing Object Title",
							"type": "checkbox",
							"less_variable": "@navbar-include-ObjectTitle",
							"selector": "#objectName"
						},
						{
							"label": "Page Title",
							"type": "checkbox",
							"less_variable": "@navbar-include-pageName",
							"selector": "#pageName"
						},
						{
							"label": "Page Transcript",
							"type": "checkbox",
							"less_variable": "@navbar-include-transcript",
							"selector": "#navbar_transcript"
						},
						{
							"label": "Menu",
							"type": "checkbox",
							"less_variable": "@navbar-include-menu",
							"selector": "#navbar_menu"
						},
						{
							"label": "Progress Bar",
							"type": "checkbox",
							"less_variable": "@navbar-include-progress-bar",
							"selector": "#navbar_progress_wrapper"
						}
					]
				},
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
		},
		{
			"id": "bottom_nav_bar",
			"header": "Bottom Bar",
			"templates" : [
				"<div id=\"footerContainer\" role=\"navigation\"><div class=\"progressBar\" ><div class=\"player-status\" ><i class=\"fa fa-play\" aria-hidden=\"true\" ></i><i class=\"fa fa-pause\" aria-hidden=\"true\" ></i></div><a class=\"replayButton dropdown-button\" tabindex=\"0\" role=\"button\" title=\"Replay\" aria-hidden=\"false\" ><i class=\"fa fa-refresh\" aria-hidden=\"true\" ></i></a><a id=\"audioButton\" class=\"dropdown-button\" tabindex=\"0\" role=\"button\" title=\"Audio\" aria-hidden=\"false\" ><i class=\"fa fa-volume-down\" aria-hidden=\"true\" ></i><i class=\"fa fa-volume-off\" aria-hidden=\"true\" ></i></a><div class=\"tickContainer\" ><div class=\"ticks\" ></div></div><div class=\"player-time\" >0:30 / 1:00</div></div> <div class=\"navButtonContainer\">   <div class=\"navButtons\"> <a id=\"backButton\" class=\"navButton disabled\" tabindex=\"-1\" role=\"button\" title=\"Previous\" aria-hidden=\"true\"><i class=\"fa \" aria-hidden=\"true\"></i></a>  <span id=\"screenCount\" tabindex=\"0\"><span id=\"currentScreen\">2</span> / <span id=\"totalScreens\">10</span></span> <a id=\"forwardButton\" class=\"navButton\" tabindex=\"0\" role=\"button\" title=\"Next\" aria-hidden=\"false\"><i class=\"fa\" aria-hidden=\"true\"></i></a> </div> </div> </div>"
			],
			"option_groups": [
				{
					"id": "bottom_nav_bar_colors_bg",
					"header": "Colors",
					"col-width": 4,
					"properties": [
						{
							"label": "Background",
							"type": "base_color",
							"less_variable": "@bottomNavbar-default-bg"
						}
					]
				},
				{
					"id": "bottom_nav_bar_colors_icons",
					"header": "&nbsp;",
					"col-width": 4,
					"properties": [
						{
							"label": "Icons",
							"type": "base_color",
							"less_variable": "@bottomNavbar-default-link-color"
						}
					]
				},
				{
					"id": "bottom_nav_bar_colors_fg",
					"header": "&nbsp;",
					"col-width": 4,
					"properties": [
						{
							"label": "Text",
							"type": "base_color",
							"less_variable": "@bottomNavbar-default-color"
						}
					]
				},
				{
					"id": "bottom_nav_bar_progress",
					"header": "&nbsp",
					"col-width": 4,
					"properties": [
						{
							"label": "Narration Playbar",
							"type": "base_color",
							"less_variable": "@bottomNavbar-progress-bar",
							"selector": "#tickContainer"
						}
					]
				},
				{
					"id": "bottom_nav_bar_bg",
					"header": "&nbsp",
					"col-width": 4,
					"properties": [
						{
							"label": "Narration Playbar Background",
							"type": "base_color",
							"less_variable": "@bottomNavbar-progress-bar-bg",
							"selector": "#tickContainer"
						}
					]
				},
				{
					"id": "bottom_nav_bar_icons",
					"header": "&nbsp",
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
				}
			],
			"property_groups": [
				{
					"id": "bottom_nav_bar_options",
					"header": "Narration Options",
					"col-width": 6,
					"template" : "",
					"forBaseline" : true,
					"properties" : [
						{
							"label": "Play/Pause Button",
							"type": "checkbox",
							"less_variable": "@bottomNavbar-include-playPause_button",
							"selector": "#footerContainer .player-status"
						},
						{
							"label": "Replay Button",
							"type": "checkbox",
							"less_variable": "@bottomNavbar-include-replay_button",
							"selector": "#footerContainer .replayButton"
						},
						{
							"label": "Mute Button",
							"type": "checkbox",
							"less_variable": "@bottomNavbar-include-mute_button",
							"selector": "#footerContainer #audioButton"
						},
						{
							"label": "Progress Bar",
							"type": "checkbox",
							"less_variable": "@bottomNavbar-include-progress_bar",
							"selector": ".tickContainer"
						},
						{
							"label": "Progress Time",
							"type": "checkbox",
							"less_variable": "@bottomNavbar-include-progress_time",
							"selector": ".player-time"
						}
					]
				}
			]
		},
		{
			"id": "landscape_nav_bar",
			"header": "Landscape Bar",
			"templates" : [
				"<div id=\"landscapeFooterContainer\" data-template-index=\"1\"  role=\"navigation\">   <div class=\"navButtonContainer\">         <div class=\"navButtons\">           <a id=\"landscapeFooterContainer_forwardButton\" class=\"navButton\" tabindex=\"0\" role=\"button\" title=\"Next\" aria-hidden=\"false\">            <i class=\"fa\" aria-hidden=\"true\">            </i>         </a>          <a id=\"landscapeFooterContainer_backButton\" class=\"navButton disabled\" tabindex=\"-1\" role=\"button\" title=\"Previous\" aria-hidden=\"true\">            <i class=\"fa \" aria-hidden=\"true\">            </i>         </a>       </div>    </div>    <div class=\"progressBar\" >      <a class=\"replayButton dropdown-button\" tabindex=\"0\" role=\"button\" title=\"Replay\" aria-hidden=\"false\" >         <i class=\"fa fa-refresh\" aria-hidden=\"true\" >         </i>      </a>       <div class=\"player-status\" >          <i class=\"fa fa-play\" aria-hidden=\"true\" >         </i>         <i class=\"fa fa-pause\" aria-hidden=\"true\" >         </i>      </div>            <div id=\"narrationProgressGauge\" class=\"dki-authoring-element dki-radialGauge-element \">         <div class=\"dki-authoring-content-wrapper\" >            <div class=\"dki-element-content\">               <div class=\" radial fill-primary \" data-variable-name=\"gauge1\" data-max=\"100\" data-current=\"50\" style=\"width: 96px; height: 96px;\" >                     <div class=\"overlay\" >                     <div class=\"text dki-element-text hidden\">                     </div>                     <i class=\"hidden\">                     </i>                  </div>                     <div class=\"mask full\" style=\"transform: rotate(90deg); clip: rect(0px 96px 96px 48px);\" >                           <div class=\"fill\" style=\"transform: rotate(90deg); clip: rect(0px 48px 96px 0px);\">                           </div>                     </div>                     <div class=\"mask half\" style=\"clip: rect(0px 96px 96px 48px);\">                           <div class=\"fill\" style=\"transform: rotate(90deg); clip: rect(0px 48px 964px 0px);\">                           </div>                           <div class=\"fill fix\" style=\"transform: rotate(180deg); clip: rect(0px 48px 96px 0px);\" >                           </div>                     </div>               </div>                                       </div>            </div>      </div>                </div> </div>"
							],
			"option_groups": [
				{
					"id": "landscape_nav_bar_colors_bg",
					"header": "Colors",
					"col-width": 4,
					"properties": [
						{
							"label": "Background",
							"type": "base_color",
							"less_variable": "@landscapeNavbar-default-bg"
						}
					]
				},
				{
					"id": "landscape_nav_bar_colors_icons",
					"header": "&nbsp;",
					"col-width": 4,
					"properties": [
						{
							"label": "Icons",
							"type": "base_color",
							"less_variable": "@landscapeNavbar-default-link-color"
						}
					]
				},
				{
					"id": "landscape_nav_bar_progress",
					"header": "&nbsp",
					"col-width": 4,
					"properties": [
						{
							"label": "Narration Playbar",
							"type": "base_color",
							"less_variable": "@landscapeNavbar-progress-bar",
							"selector": "#tickContainer"
						}
					]
				},
				{
					"id": "landscape_nav_bar_icons",
					"header": "&nbsp",
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
				}
			],
			"property_groups": [
				{
					"id": "landscape_nav_bar_options",
					"header": "Narration Options",
					"col-width": 6,
					"template" : "",
					"forBaseline" : true,
					"properties" : [
						{
							"label": "Play/Pause Button",
							"type": "checkbox",
							"less_variable": "@landscapeNavbar-include-playPause_button",
							"selector": "#landscapeFooterContainer .player-status"
						},
						{
							"label": "Replay Button",
							"type": "checkbox",
							"less_variable": "@landscapeNavbar-include-replay_button",
							"selector": "#landscapeFooterContainer .replayButton"
						},
						{
							"label": "Progress Bar",
							"type": "checkbox",
							"less_variable": "@landscapeNavbar-include-progress_bar",
							"selector": "#landscapeFooterContainer #narrationProgressGauge"
						}
					]
				}
			]
		}
	],
	"preview": "<div class=\"body-bg\">{{{renderTemplate theme.parameters.editor.templates.top_nav_bar theme}}}<h1>{{theme.title}}</h1><h3>{{theme.parameters.subtitle}}</h3><div class=\"thumbnail-button-container\"><button class=\"btn btn-default\"></button><button class=\"btn btn-primary\"></button><button class=\"btn btn-success\"></button><button class=\"btn btn-info\"></button><button class=\"btn btn-warning\"></button><button class=\"btn btn-danger\"></button></div></div>"
}