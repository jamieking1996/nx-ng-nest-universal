{
	"sections": [
		{
			"id": "page_navigator",
			"header": "Page Navigator",
			"templates": [
				"<nav id='navbar_header' data-template-index='1' class='navbar navbar-default navbar-fixed-top dki-course-max-width' style='top: 0px;'><div class='container-fluid'><ul class='nav navbar-nav'><li class='dropdown navigator_menu'><a tabindex='1' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false' title='{{strings.index.menuButtonLabel}}'><i class='fa fa-bars'></i></a><ul id='headerDropdown' aria-label='submenu' class='dropdown-menu'><li class='active'><a href='javascript:;'>Header 1</a></li><li class='' ><a href='javascript:;'>Header 2</a></li></ul></li><li class='header-title'><a tabindex='1'>Section Title</a></li></ul><ul class='nav navbar-nav navbar-right'><li><div tabindex='1' id='navbar_progress_wrapper' class='progress'><div class='progress-bar learning-completion-progress' role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'><span class='sr-only'>Learning:<span class='learning-completion-value'>0</span>%</span></div></div></li><li class='back-to-top' style='transform: rotate(270deg);'><a class='navbar-link' href='javascript:;' tabindex='1' title='Back to top'><i class='fa fa fa-step-forward'></i></a></li><li><a id='upHeader' class='navbar-link disabled-element' title='{{strings.index.previousButtonLabel}}' tabindex='-1' href='javascript:;'><i class='fa fa-chevron-up'></i></a></li><li><a id='downHeader' href='javascript:;' class='navbar-link' tabindex='1' title='{{strings.index.nextButtonLabel}}'><i class='fa fa-chevron-down'></i></a></li><li class='navigator_count'><a><span id='headerCount' tabindex='1'><span id='currentHeader'>1</span> / <span id='totalHeaders'>1</span></span></a></li></ul></div></nav>",

				"<nav id='navbar_header' data-template-index='2' class='navbar navbar-default navbar-fixed-top dki-course-max-width' style='top: 0px;'><div class='container-fluid'><ul class='nav navbar-nav'><li class='dropdown navigator_menu'><a title='{{strings.index.menuButtonLabel}}' tabindex='1' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'><i class='fa fa-bars'></i></a><ul id='headerDropdown' class='dropdown-menu'><li class='active'><a href='javascript:;'>Header 1</a></li><li class='' ><a href='javascript:;'>Header 2</a></li></ul></li><li id='navbar_logo_wrapper' class='navbar-header'><a tabindex='-1' class='navbar-brand' href='javascript:;'><div id='navbar_logo'></div></a></li></ul><ul class='nav navbar-nav navbar-left'><li style='text-align: center;'><span class='course-title'><a tabindex='1'>Course Title</a></span><br /><span class='header-title'><a tabindex='1'>Current Section Title</a></span></li></ul><ul class='nav navbar-nav navbar-right'><li class='navigator_count'><a><span id='headerCount' tabindex='1'><span id='currentHeader'>1</span> / <span id='totalHeaders'>1</span></span></a></li><li><div id='navbar_progress_wrapper' tabindex='1' class='progress'><div class='progress-bar learning-completion-progress' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'></div></div></li></ul></nav><!---  No navigation/menu left --->",

				"<nav id='navbar_header' data-template-index='3' class='navbar navbar-default navbar-fixed-top dki-course-max-width' style='top: 0px;'><div class='container-fluid'><ul class='nav navbar-nav'><li id='navbar_logo_wrapper' class='navbar-header'><a tabindex='-1' class='navbar-brand' href='javascript:;'><div id='navbar_logo'></div></a></li></ul><ul class='nav navbar-nav navbar-left'><li style='text-align: center;'><span class='course-title'><a tabindex='1'>Course Title</a></span><br /><span class='header-title'><a tabindex='1'>Current Section Title</a></span></li></ul><ul class='nav navbar-nav navbar-right'><li class='navigator_count'><a><span id='headerCount' tabindex='1'><span id='currentHeader'>1</span> / <span id='totalHeaders'>1</span></span></a></li><li><div id='navbar_progress_wrapper' tabindex='1' class='progress'><div class='progress-bar learning-completion-progress' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'></div></div></li><li class='dropdown navigator_menu'><a title='{{strings.index.menuButtonLabel}}' tabindex='1' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'><i class='fa fa-bars'></i></a><ul id='headerDropdown' class='dropdown-menu'><li class='active'><a href='javascript:;'>Header 1</a></li><li class='' ><a href='javascript:;'>Header 2</a></li></ul></li></ul></nav><!---  No navigation/menu right --->",

				"<nav id='navbar_header' data-template-index='4' class='navbar navbar-default navbar-fixed-top dki-course-max-width' style='top: 0px;'><div class='container-fluid'><ul class='nav navbar-nav'><li class='dropdown navigator_menu'><a title='{{strings.index.menuButtonLabel}}' tabindex='1' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'><i class='fa fa-bars'></i></a><ul id='headerDropdown' class='dropdown-menu'><li class='active'><a href='javascript:;'>Header 1</a></li><li class='' ><a href='javascript:;'>Header 2</a></li></ul></li><li id='navbar_logo_wrapper' class='navbar-header'><a tabindex='-1' class='navbar-brand' href='javascript:;'><div id='navbar_logo'></div></a></li></ul><ul class='nav navbar-nav navbar-left'><li style='text-align: center;'><span class='course-title'><a tabindex='1'>Course Title</a></span><br /><span class='header-title'><a tabindex='1'>Current Section Title</a></span></li></ul><ul class='nav navbar-nav navbar-right'><li><div id='navbar_progress_wrapper' tabindex='1' class='progress'><div class='progress-bar learning-completion-progress' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'></div></div></li><li class='navigator_count'><a><span id='headerCount' tabindex='1'><span id='currentHeader'>1</span> / <span id='totalHeaders'>1</span></span></a></li><li><a id='upHeader' class='navbar-link disabled-element' title='{{strings.index.previousButtonLabel}}' tabindex='-1'><i class='fa fa-chevron-up' href='javascript:;'></i></a></li><li><a id='downHeader'href='javascript:;'  class='navbar-link' tabindex='1' title='{{strings.index.nextButtonLabel}}'><i class='fa fa-chevron-down'></i></a></li><li class='back-to-top' style='transform: rotate(270deg);'><a class='navbar-link'tabindex='1' title='Back to top' href='javascript:;'><i class='fa fa-step-forward'></i></a></li></ul></nav><!---  navigation/menu left --->",

				"<nav id='navbar_header' data-template-index='5' class='navbar navbar-default navbar-fixed-top dki-course-max-width' style='top: 0px;'><div class='container-fluid'><ul class='nav navbar-nav'><li id='navbar_logo_wrapper' class='navbar-header'><a tabindex='-1' class='navbar-brand' href='javascript:;'><div id='navbar_logo'></div></a></li></ul><ul class='nav navbar-nav navbar-left'><li style='text-align: center;'><span class='course-title'><a tabindex='1'>Course Title</a></span><br /><span class='header-title'><a tabindex='1'>Current Section Title</a></span></li></ul><ul class='nav navbar-nav navbar-right'><li><div id='navbar_progress_wrapper' tabindex='1' class='progress'><div class='progress-bar learning-completion-progress' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'></div></div></li><li class='navigator_count'><a><span id='headerCount' tabindex='1'><span id='currentHeader'>1</span> / <span id='totalHeaders'>1</span></span></a></li><li><a id='upHeader' class='navbar-link disabled-element' title='{{strings.index.previousButtonLabel}}' tabindex='-1' href='javascript:;'><i class='fa fa-chevron-up'></i></a></li><li><a id='downHeader' href='javascript:;' class='navbar-link' tabindex='1' title='{{strings.index.nextButtonLabel}}'><i class='fa fa-chevron-down'></i></a></li><li class='back-to-top' style='transform: rotate(270deg);'><a class='navbar-link' tabindex='1' title='Back to top' href='javascript:;'><i class='fa fa-step-forward'></i></a></li><li class='dropdown navigator_menu'><a title='{{strings.index.menuButtonLabel}}' tabindex='1' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'><i class='fa fa-bars'></i></a><ul id='headerDropdown' class='dropdown-menu'><li class='active'><a href='javascript:;'>Header 1</a></li><li class='' ><a href='javascript:;'>Header 2</a></li></ul></li></ul></nav><!---  navigation/menu right --->",

				"<nav id='navbar_header' data-template-index='6' class='navbar navbar-default navbar-fixed-top dki-course-max-width' style='top: 0px;'><div class='container-fluid'><ul class='nav navbar-nav navbar-left'><li><span class='course-title'><a tabindex='1'>Course Title</a></span><br/><span class='header-title'><a tabindex='1'>Current Section Title</a></span></li></ul><ul class='nav navbar-nav navbar-right'><li><div id='navbar_progress_wrapper' tabindex='1' class='progress'><div class='progress-bar learning-completion-progress' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'></div></div></li><li class='navigator_count'><a><span id='headerCount' tabindex='1'><span id='currentHeader'>1</span> / <span id='totalHeaders'>1</span></span></a></li><li><a id='upHeader' class='navbar-link disabled-element' title='{{strings.index.previousButtonLabel}}' tabindex='-1' href='javascript:;'><i class='fa fa-chevron-up'></i></a></li><li><a id='downHeader' href='javascript:;' class='navbar-link' tabindex='1' title='{{strings.index.nextButtonLabel}}'><i class='fa fa-chevron-down'></i></a></li><li class='back-to-top' style='transform: rotate(270deg);'><a class='navbar-link' tabindex='1' title='Back to top' href='javascript:;'><i class='fa fa-step-forward'></i></a></li></nav><!---  navigation/no menu  --->",

				"<nav id='navbar_header' data-template-index='7' class='navbar navbar-default navbar-fixed-top dki-course-max-width' style='top: 0px;'><div class='container-fluid'><ul class='nav navbar-nav'><li><a id='downHeader' href='javascript:;' class='navbar-link' tabindex='1' title='{{strings.index.nextButtonLabel}}'><i class='fa fa-chevron-down'></i></a></li></ul><ul class='nav navbar-nav navbar-left'><li style='text-align: center;'><span class='course-title'><a tabindex='1'>Course Title</a></span><br /><span class='header-title'><a tabindex='1'>Current Section Title</a></span></li></ul><ul class='nav navbar-nav navbar-right'><li><div id='navbar_progress_wrapper' tabindex='1' class='progress'><div class='progress-bar learning-completion-progress' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'></div></div></li><li class='navigator_count'><a><span id='headerCount' tabindex='1'><span id='currentHeader'>1</span> / <span id='totalHeaders'>1</span></span></a></li><li><a id='upHeader' class='navbar-link disabled-element' title='{{strings.index.previousButtonLabel}}' tabindex='-1' href='javascript:;'><i class='fa fa-chevron-up'></i></a></li><li class='back-to-top' style='transform: rotate(270deg);'><a class='navbar-link' tabindex='1' title='Back to top' href='javascript;:;'><i class='fa fa-step-forward'></i></a></li></nav><!---  Split Navigation   --->"
			],
			"option_groups" :[
				{
					"id": "page_navigator_enabled",
					"header": "Nav Bar",
					"col-width": 4,
					"properties": [
						{
							"label": "Enabled",
							"type": "checkbox",
							"less_variable": "@page_navigator_enabled",
							"selector"     : "#navbar_header"
						}
					]
				},
				{
					"id": "page_navigator_options",
					"header": "Bar Style",
					"col-width": 4,
					"properties": [
						{
							"label": "Text",
							"type": "theme_color",
							"less_variable": "@page_navigation_color"
						},
						{
							"label": "Background",
							"type": "theme_color",
							"less_variable": "@navbar-default-bg"
						},
						{
							"label": "Progress",
							"type": "theme_color",
							"less_variable": "@navbar-progress-bar-bg",
							"selector" : "#navbar_header .progress"
						}
					]
				}
			],
			"property_groups" : [
				{
					"id": "page_navigator_properties",
					"header": "Options",
					"col-width": 4,
					"properties": [
						
						{
							"label": "Show Menu",
							"type": "checkbox",
							"less_variable": "@page_navigator_menu_enabled",
							"selector" : "#navbar_header .navigator_menu"
						},	
						{
							"label": "Show Top Button",
							"type": "checkbox",
							"less_variable": "@navbar-include-top",
							"selector" : "#navbar_header .back-to-top"
						},
						{
							"label": "Show Logo",
							"type": "checkbox",
							"less_variable": "@navbar-include-logo",
							"selector": "#navbar_logo"
						}
					]
				},
				{

					"id": "page_navigator_properties2",
					"header": "&nbsp;",
					"col-width": 4,
					"properties": [

						{
							"label": "Show Course Title",
							"type": "checkbox",
							"less_variable": "@navbar-include-course-title",
							"selector" : "#navbar_header .course-title"
						},	
						{
							"label": "Show Section Title",
							"type": "checkbox",
							"less_variable": "@navbar-include-section-title",
							"selector" : "#navbar_header .header-title"
						},
						{
							"label": "Show Count",
							"type": "checkbox",
							"less_variable": "@page_navigator_count_enabled",
							"selector" : "#navbar_header .navigator_count"
						}

							,
						{
							"label": "Show Progress Bar",
							"type": "checkbox",
							"less_variable": "@navbar-include-progress-bar",
							"selector" : "#navbar_header .progress"
						}
					]
				}
			]
		},
		{
			"id": "section_menu",
			"header": "Menu",
			"templates": [
				"<ul id=\"headerDropdown\" class=\"dropdown-menu\"><li class=\"active\"><a>Item 1 (active)</a></li><li><a>Item 2</a></li><li><a>Item 3</a></li></ul>"
			],
			"option_groups" :[
				{
					"id": "section_menu_hover",
					"header": "Style",
					"col-width": 4,
					"properties": [
						{
							"label": "Foreground",
							"type": "theme_color",
							"less_variable": "@header-dropdown-link-color"
						},
						{
							"label": "Background",
							"type": "theme_color",
							"less_variable": "@header-dropdown-bg"
						}
					]
				},
				{
					"id": "section_menu_hover",
					"header": "Hover",
					"col-width": 4,
					"properties": [
						{
							"label": "Foreground",
							"type": "theme_color",
							"less_variable": "@header-dropdown-link-hover-color"
						},
						{
							"label": "Background",
							"type": "theme_color",
							"less_variable": "@header-dropdown-link-hover-bg"
						}
					]
				},
				{
					"id": "section_menu_active",
					"header": "Active",
					"col-width": 4,
					"properties": [
						{
							"label": "Foreground",
							"type": "theme_color",
							"less_variable": "@header-dropdown-link-active-color"
						},
						{
							"label": "Background",
							"type": "theme_color",
							"less_variable": "@header-dropdown-link-active-bg"
						}
					]
				}
			]
		},
		{
			"id": "page_sections_continue",
			"header": "Sequential Sections ",
			"templates": [
				"<div tabindex='1' data-template-index='1' role='button' aria-label='{{strings.endMod.learningLinkLabel}}' title='{{strings.endMod.learningLinkLabel}}' id='continueSectionButton' class='continueButtonFullWidth hasBackground'>{{strings.endMod.learningLinkLabel}}</div>",			
				"<div tabindex='1' data-template-index='2' role='button' aria-label='{{strings.endMod.learningLinkLabel}}' title='{{strings.endMod.learningLinkLabel}}' id='continueSectionButton' class='continueButtonHalfWidth hasBackground'>{{strings.endMod.learningLinkLabel}}</div>",
				"<div tabindex='1' data-template-index='3' role='button' aria-label='{{strings.endMod.learningLinkLabel}}' title='{{strings.endMod.learningLinkLabel}}' id='continueSectionButton' class='continueButtonFixedWidth'>{{strings.endMod.learningLinkLabel}}</div>",
				"<div tabindex='1' data-template-index='4' role='button' aria-label='{{strings.endMod.learningLinkLabel}}' title='{{strings.endMod.learningLinkLabel}}' id='continueSectionButton' class='continueButtonFullWidth '><i class='fa fa-chevron-down'></i>{{strings.endMod.learningLinkLabel}}<i class='fa fa-chevron-down'></i></div>",
				"<div tabindex='1' data-template-index='5' role='button' aria-label='{{strings.endMod.learningLinkLabel}}' title='{{strings.endMod.learningLinkLabel}}' id='continueSectionButton' class=' continue-circle'><i class='fa fa-chevron-down'></i></div>",
				"<div tabindex='1' data-template-index='6' role='button' aria-label='{{strings.endMod.learningLinkLabel}}' title='{{strings.endMod.learningLinkLabel}}' id='continueSectionButton' class='continueTextIconRight'><i class='fa fa-chevron-down'></i></div>"
			],
			"option_groups" :[
				{
					"id": "page_sections_enabled",
					"col-width": 4,
					"properties": [
						{
							"label": "Enabled",
							"type": "checkbox",
							"less_variable": "@page_sections_enabled",
							"selector"     : "#continueSectionButton"
						}
					]
				},
				{
					"id": "page_sections_options",
					"header": "Style",
					"col-width": 4,
					"properties": [
						{
							"label": "Foreground",
							"type": "base_color",
							"less_variable": "@page_section_continue_color"
						},
						{
							"label": "Background",
							"type": "base_color",
							"less_variable": "@page_section_continue_bg",
							"selector": "#continueSectionButton.hasBackground"
						},
						{
							"label": "Border",
							"type": "base_color",
							"less_variable": "@page_section_continue_border"
						}
					]
				}
			]
		}
	],
	"preview": "<div class=\"body-bg\">{{{renderTemplate theme.parameters.editor.templates.page_navigator}}}<h1>{{theme.title}}</h1><h3>{{theme.parameters.subtitle}}</h3><div class=\"thumbnail-button-container\"><button class=\"btn btn-default\"></button><button class=\"btn btn-primary\"></button><button class=\"btn btn-success\"></button><button class=\"btn btn-info\"></button><button class=\"btn btn-warning\"></button><button class=\"btn btn-danger\"></button></div><div class=\"wcag-badge\"></div></div>"
}