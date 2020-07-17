{
	"sections": [
		{
			"id": "top_nav_bar",
			"header": "Top Navigation Bar",
			"template": "<div id=\"headerContainer\"><div id=\"menu-menu-button\" class=\"icon icon-menu menu-buttom\"></div><div id=\"navbar_logo\"></div><div class=\"search fa fa-search\"></div></div>",
			"option_groups": [
				{
					"id": "top_nav_bar_colors",
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
					"id": "top_nav_bar_colors3",
					"header": "Search Icon",
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
					"id": "menu_custom_buttons",
					"header": "Custom Links",
					"col-width": 4,
					"properties" : [
						{
							"label": "Link 1",
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
							"label": "Link 2",
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
							"label": "Link 3",
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
							"label": "Link 4",
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
							"label": "Link 5",
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
				},
				{
					"id" : "top_nav_bar_logo",
					"header" : "",
					"col-width" : 12,
					"properties" : [
						{
							"label" : "Logo",
							"type"  : "checkbox",
							"less_variable" : "@navbar-include-logo",
							"forBaseline" : true,
							"selector" :  "#navbar_logo"
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
					"id": "home_page_enable",
					"header": "",
					"col-width": 12,
					"properties": [
						{
							"label": "Start With Home Page",
							"type": "checkbox",
							"less_variable" : "startWithHomePage"
						}
					]
				},				
				{
					"id": "home_page_background_cover",
					"header": "Cover Art",
					"col-width": 12,
					"properties": [						
						{
							"label": "Background Position",
							"type": "dropdown",
							"less_variable": "@homepage_bgPos",
							"values" : [
								{
									"label" : "Top Left",
									"value" : "left top"
								},
								{
									"label" : "Top Center",
									"value" : "top"
								},
								{
									"label" : "Top Right",
									"value" : "top right"
								},
								{
									"label" : "Left Center",
									"value" : "center left"
								},
								{
									"label" : "Center",
									"value" : "center"
								},
								{
									"label" : "Right Center",
									"value" : "center right"
								},
								{
									"label" : "Bottom Left",
									"value" : "left bottom"
								},
								{
									"label" : "Bottom Center",
									"value" : "bottom"
								},
								{
									"label" : "Bottom Right",
									"value" : "right bottom"
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
							"less_variable": "@homepage_bgSize",
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
			"id" : "menu",
			"header" : "Menu",
			"option_groups" :[
				{
					"id": "menu_colors",
					"header": "Colors",
					"col-width": 6,
					"properties": [
						{
							"label": "Background",
							"type": "base_color",
							"less_variable": "@menu_background_color"
						},
						{
							"label": "Panel Background",
							"type": "base_color",
							"less_variable": "@menu_cardactive_background_color"
						},
						{
							"label": "Links",
							"type": "base_color",
							"less_variable": "@menu_links_color"
						}
					]
				},
				{
					"id": "menu_colors",
					"header": "Text",
					"col-width": 6,
					"properties": [
						{
							"label": "Learning Object Title",
							"type": "base_color",
							"less_variable": "@menu_lo_text_color"
						},
						{
							"label": "Icon",
							"type": "base_color",
							"less_variable": "@menu_card_icon_color"
						},
						{
							"label": "Page Title",
							"type": "base_color",
							"less_variable": "@menu_page_text_color"
						}
					]
				}
				
			],
			"property_groups" :[
				{
					"id": "menu_options",
					"header": "Options",
					"template" : "<div class=\"menu-container\" id=\"left-menu\" style=\"margin-top:20px !important\"><ul class=\"nav nav-pills nav-justified\"><li class=\"nav-item active\" id=\"topics\"><a class=\"nav-link active\" data-toggle=\"tab\" role=\"tab\">Topics</a></li><li class=\"nav-item\" id=\"index\"><a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\">Index</a><li class=\"nav-item\" id=\"glossary\"><a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\">Glossary</a></li></li></ul><div class=\"tab-content\"><div class=\"tab-pane active\" id=\"topics\" role=\"tabpanel\"><div class=\"kb-card active\"><h4>Learning Object</h4><ul class=\"kb-card-items\"><li class=\"active\"><span class=\"kb-card-item-icon fa fa-file-text-o\"></span><span class=\"kb-card-item-title\">Page 1</span></li><li class=\"\"><span class=\"kb-card-item-icon fa fa-file-text-o\"></span><span class=\"kb-card-item-title\">Page 2</span></li></ul></div></div></div></div>",
					"col-width": 12,
					"properties": [
						{
							"label": "Index",
							"type": "checkbox",
							"less_variable": "@menu_show_index",
							"forBaseline": true,
							"selector": "#index"
						},
						{
							"label": "Glossary",
							"type": "checkbox",
							"less_variable": "@menu_show_glossary",
							"forBaseline": true,
							"selector": "#glossary"
						},
						{
							"label": "Enable \"Related Articles\"",
							"type": "checkbox",
							"less_variable": "@show_related_articles",
							"forBaseline": true
						}
					]
				}
			]
		},
		{
			"id": "subnavigation",
			"header": "Subnavigation",
			"templates": [],
			"option_groups": [
				{
					"id": "subnav",
					"header": "",
					"col-width": 12,
					"properties": [
						{
							"label": "Use subnavigation",
							"type": "checkbox",
							"less_variable": "@enable_subnav",
							"forBaseline": true
						}
					]
				},
				{
					"id": "subnav_lo_colors",
					"header": "Learning Objects Title Bar",
					"col-width": 8,
					"template" : "<div class=\"kb-info-header for-preview\" style=\"padding:15px 0;\"><div class=\"kb-info-header-lo\">Learning Object Title</div></div>",
					"template-container-class" : "for-preview",
					"template-col-width" : 12,
					"properties": [
						{
							"label": "Show Learning Objects Title Bar",
							"type": "checkbox",
							"less_variable": "@enable_subnav_lo",
							"forBaseline": true
						},
						{
							"label": "Background",
							"type": "base_color",
							"less_variable": "@subnav_lo_background"
						},
						{
							"label": "Foreground",
							"type": "base_color",
							"less_variable": "@subnav_lo_text",
							"template_after" : "<div class=\"kb-info-header\" style=\"padding:15px 0;\"><div class=\"kb-info-header-lo\">Learning Object Title</div></div>"
						}
					]
				},				
				{
					"id": "subnav_page_colors",
					"header": "Page Title Bar Colors",
					"col-width": 8,
					"template" : "<div class=\"kb-info-header for-preview\" style=\"padding:15px 0;\"><div class=\"kb-info-header-page\"><div class=\"kb-info-header-page-info\"><div class=\"kb-info-header-page-title\">Current Page Title</div><div class=\"kb-info-header-page-properties\"><span class=\"kb-info-header-page-createdOn\">Date Added</span></div></div><div class=\"kb-info-header-page-next\" style=\"display: table-cell;\">Next: Next Page</div></div></div>",
					"template-container-class" : "for-preview",
					"template-col-width" : 12,
					"properties": [						
						{
							"label": "Show Current Page Title Bar",
							"type": "checkbox",
							"less_variable": "@enable_subnav_page",
							"forBaseline": true
						},
						{
							"label": "Background",
							"type": "base_color",
							"less_variable": "@subnav_page_background"
						},
						{
							"label": "Foreground",
							"type": "base_color",
							"less_variable": "@subnav_page_text",
							"template_after" : "<div class=\"kb-info-header\" style=\"padding:15px 0;\"><div class=\"kb-info-header-page\"><div class=\"kb-info-header-page-info\"><div class=\"kb-info-header-page-title\">Current Page Title</div><div class=\"kb-info-header-page-properties\"><span class=\"kb-info-header-page-createdOn\">Date Added</span></div></div><div class=\"kb-info-header-page-next\" style=\"display: table-cell;\">Next: Next Page</div></div></div>"
						}
					]
				}
			],
			"property_groups" : [
				{
					"id": "subnav_page_options",
					"header": "",
					"col-width": 12,
					"properties": [
						{
							"label": "Date Added",
							"type": "checkbox",
							"less_variable": "@enable_subnav_page_date",
							"forBaseline": true
						},
						{
							"label": "Next Page Navigation",
							"type": "checkbox",
							"less_variable": "@enable_subnav_page_nav",
							"forBaseline": true
						}
					]
				}
			]
		}
	],
	"preview": "<div class=\"body-bg\">{{{renderTemplate theme.parameters.editor.templates.top_nav_bar}}}<div class=\"menu-container\" id=\"left-menu\" style=\"margin-top:59px !important;position:fixed;left:1px; height:calc(100% - 60px)!important; width:200px; font-size:0.66em;\"><ul class=\"nav nav-pills nav-justified\"><li class=\"nav-item active\" id=\"topics\"><a class=\"nav-link active\" data-toggle=\"tab\" role=\"tab\">Topics</a></li><li class=\"nav-item\" id=\"index\"><a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\">Index</a><li class=\"nav-item\" id=\"glossary\"><a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\">Glossary</a></li></li></ul><div class=\"tab-content\"><div class=\"tab-pane active\" id=\"topics\" role=\"tabpanel\"><div class=\"kb-card active\"><h4 style=\"text-align:left;font-size:14px;\">Learning Object</h4><ul class=\"kb-card-items\" style=\"text-align:left\"><li class=\"active\" style=\"position:relative\"><span class=\"kb-card-item-icon fa fa-file-text-o\"></span><span class=\"kb-card-item-title\">Lorem Ipsum</span></li><li class=\"\"><span class=\"kb-card-item-icon fa fa-file-text-o\"></span><span class=\"kb-card-item-title\">Lorem Ipsum</span></li><li><span class=\"kb-card-item-icon fa fa-file-text-o\"></span><span class=\"kb-card-item-title\">Lorem Ipsum</span></li></ul></div></div></div></div><div class=\"kb-info-header\" style=\"text=align:left;position:fixed; display:block; width:calc(100% - 200px);left:200px; text-align:left;\"><div class=\"kb-info-header-lo\" style=\"height:40px;line-height:20px;font-size:16px;\">Learning Object Title</div><div class=\"kb-info-header-page\" style=\"height:45px\"><div class=\"kb-info-header-page-info\"><div class=\"kb-info-header-page-title\" style=\"font-size:16px\">Current Page</div><div class=\"kb-info-header-page-properties\"><span class=\"kb-info-header-page-createdOn\">Date Added</span></div></div><div class=\"kb-info-header-page-next\" style=\"display: table-cell;\">Next: Next Page</div></div></div><div class=\"bgRepeater\" style=\"margin-top:140px; margin-left:200px; width: calc(100% - 200px)!important\"><div id=\"contentFrame\"><h1 style=\"padding:0;margin:0; font-size:48px;\">Knowledge Base</h1><div class=\"thumbnail-button-container\" style=\"position:static; margin-top:30px;\"><button class=\"btn btn-default\" style=\"width:60px\"></button><button class=\"btn btn-primary\" style=\"width:60px\"></button><button class=\"btn btn-success\" style=\"width:60px\"></button><button class=\"btn btn-info\" style=\"width:60px\"></button><button class=\"btn btn-warning\" style=\"width:60px\"></button><button class=\"btn btn-danger\" style=\"width:60px\"></button></div></div></div></div></div>"
}