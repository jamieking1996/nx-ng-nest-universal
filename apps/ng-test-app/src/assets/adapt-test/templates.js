define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title component-title\">\n            <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title-inner component-title-inner\" "
    + ((stack1 = (helpers.a11y_attrs_heading || (depth0 && depth0.a11y_attrs_heading) || alias2).call(alias1,"component",{"name":"a11y_attrs_heading","hash":{},"data":data})) != null ? stack1 : "")
    + ">\n                "
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),depth0,{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body component-body\">\n            <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body-inner component-body-inner\">\n                "
    + ((stack1 = (helpers.compile_a11y_text || (depth0 && depth0.compile_a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),depth0,{"name":"compile_a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction component-instruction\">\n            <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\n                "
    + ((stack1 = (helpers.compile_a11y_text || (depth0 && depth0.compile_a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.instruction : depth0),depth0,{"name":"compile_a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-header component-header\">\n    <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-header-inner component-header-inner\">\n        \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \n"
    + ((stack1 = (helpers.any || (depth0 && depth0.any) || alias2).call(alias1,(depth0 != null ? depth0.instruction : depth0),(depth0 != null ? depth0.mobileInstruction : depth0),{"name":"any","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("state", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "		<span tabindex=\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.a11yConfig : depth0)) != null ? stack1._isActive : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-complete\">"
    + alias2((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"a11y_normalize","hash":{},"data":data}))
    + " "
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isQuestionType : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "0";
},"4":function(container,depth0,helpers,partials,data) {
    return "-1";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._canShowFeedback : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.correct : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incorrect : stack1), depth0));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "		<span tabindex=\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.a11yConfig : depth0)) != null ? stack1._isActive : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-incomplete\">"
    + alias2((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"a11y_normalize","hash":{},"data":data}))
    + " "
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"accessibility-state\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        <div class=\"article-title\">\n            <div class=\"article-title-inner\" "
    + ((stack1 = (helpers.a11y_attrs_heading || (depth0 && depth0.a11y_attrs_heading) || alias2).call(alias1,"article",{"name":"a11y_attrs_heading","hash":{},"data":data})) != null ? stack1 : "")
    + ">\n                "
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),depth0,{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"article-body\">\n            <div class=\"article-body-inner\">\n                "
    + ((stack1 = (helpers.compile_a11y_text || (depth0 && depth0.compile_a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),depth0,{"name":"compile_a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"article-instruction\">\n            <div class=\"article-instruction-inner\">\n                "
    + ((stack1 = (helpers.compile_a11y_text || (depth0 && depth0.compile_a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),depth0,{"name":"compile_a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div class=\"article-inner block-container\">\n\n    <div class=\"article-header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        <div class=\"block-title\">\n            <div class=\"block-title-inner\" "
    + ((stack1 = (helpers.a11y_attrs_heading || (depth0 && depth0.a11y_attrs_heading) || alias2).call(alias1,"block",{"name":"a11y_attrs_heading","hash":{},"data":data})) != null ? stack1 : "")
    + ">\n                "
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),depth0,{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"block-body\">\n            <div class=\"block-body-inner\">\n                "
    + ((stack1 = (helpers.compile_a11y_text || (depth0 && depth0.compile_a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),depth0,{"name":"compile_a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"block-instruction\">\n            <div class=\"block-instruction-inner\">\n                "
    + ((stack1 = (helpers.compile_a11y_text || (depth0 && depth0.compile_a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),depth0,{"name":"compile_a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div class=\"block-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"component-container\">\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"buttons-marking-icon icon display-none\">\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"buttons-display\">\n        <div class=\"buttons-marking-icon icon display-none\">\n        </div>\n        <div class=\"buttons-display-inner\" aria-live=\"assertive\">\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"buttons-inner\">\n    <div class=\"buttons-cluster clearfix\">\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <button class=\"buttons-action\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n        <button class=\"buttons-feedback\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\" disabled=\"true\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.lambda, alias4=container.escapeExpression;

  return "<div class=\"drawer-inner\">\n	"
    + ((stack1 = (helpers.a11y_aria_label || (depth0 && depth0.a11y_aria_label) || alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.drawer : stack1),{"name":"a11y_aria_label","hash":{},"data":data})) != null ? stack1 : "")
    + "\n	<div class=\"drawer-holder\">\n	</div>\n	<div class=\"drawer-toolbar clearfix\">\n		<div class=\"drawer-back-button\">\n		<button class=\"base drawer-back icon icon-controls-small-left\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n		</button>\n		</div>\n		<div class=\"drawer-close-button\">\n		<button class=\"base drawer-close icon icon-cross\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeDrawer : stack1), depth0))
    + "\">\n		</button>\n		</div>\n	</div>\n	"
    + ((stack1 = ((helper = (helper = helpers.a11y_wrap_focus || (depth0 != null ? depth0.a11y_wrap_focus : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<button class=\"base drawer-item-open "
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"drawer-item-title\">\n		<div class=\"drawer-item-title-inner h5\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n	</div>\n	<div class=\"drawer-item-description\">\n		<div class=\"drawer-item-description-inner\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n	</div>\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\n  <div class=\"loading-logo\"></div>\n  <div class=\"course-title\"><h2></h2></div>\n  <div class=\"course-sub-title\">\n    <h5></h5>\n    <h5 id='course-title-sub-title'></h5>\n  </div>\n    <div class=\"loading-image\"><h3>Loading...</h3></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <button id=\"accessibility-toggle\" class=\"base icon icon-accessibility a11y-ignore-focus\"></button>\n        <span id=\"accessibility-instructions\" class=\"aria-label\" role=\"region\" tabindex=\"0\"></span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "        <button class=\"skip-nav-link a11y-ignore a11y-ignore-focus\" data-event=\"skipNavigation\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.skipNavigation : stack1), depth0))
    + "\">"
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1.skipNavigationText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return alias3(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div class=\"navigation-inner clearfix\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._isEnabled : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    "
    + ((stack1 = (helpers.a11y_aria_label || (depth0 && depth0.a11y_aria_label) || alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigation : stack1),{"name":"a11y_aria_label","hash":{},"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._isSkipNavigationEnabled : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <button class=\"base navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" aria-label=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\"></button>\n    <button class=\"base navigation-drawer-toggle-button icon icon-list\" data-event=\"toggleDrawer\" aria-label=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigationDrawer : stack1), depth0))
    + "\"></button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression;

  return alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data}) : helper)))
    + "=\""
    + alias1(container.lambda(depth0, depth0))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "                    <div class=\"notify-popup-icon\">\n                        <div class=\"icon"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"if_value_equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"alert",{"name":"if_value_equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                        </div>\n                    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " icon-question";
},"6":function(container,depth0,helpers,partials,data) {
    return " icon-warning";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div id=\"notify-heading\" class=\"notify-popup-title\">\n                        <div class=\"notify-popup-title-inner h5\" role=\"heading\" aria-level=\"1\">\n                        "
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),depth0,{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"notify-popup-body\">\n                        <div class=\"notify-popup-body-inner\">"
    + ((stack1 = (helpers.compile_a11y_text || (depth0 && depth0.compile_a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),depth0,{"name":"compile_a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n                    </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                    <div class=\"notify-popup-buttons\">\n                        <button class=\"notify-popup-button notify-popup-alert-button\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n                    </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"notify-popup-buttons\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._prompts : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                            <button class=\"notify-popup-button notify-popup-prompt-button\" data-event=\""
    + container.escapeExpression(((helper = (helper = helpers._callbackEvent || (depth0 != null ? depth0._callbackEvent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._showCloseButton : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._type : depth0),"popup",{"name":"if_value_equals","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <button class=\"base notify-popup-done\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n                    <div class=\"notify-popup-icon-close icon icon-cross\"></div>\n                    "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\n                </button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._attributes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " class=\"notify-popup notify-type-"
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_classes","hash":{},"data":data}) : helper)))
    + "\">\n    "
    + ((stack1 = (helpers.a11y_aria_label || (depth0 && depth0.a11y_aria_label) || alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1),{"name":"a11y_aria_label","hash":{},"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"notify-popup-inner\">\n        <div class=\"notify-popup-content\">\n            <div class=\"notify-popup-content-inner\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._showIcon : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"alert",{"name":"if_value_equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"if_value_equals","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isCancellable : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    "
    + ((stack1 = ((helper = (helper = helpers.a11y_wrap_focus || (depth0 != null ? depth0.a11y_wrap_focus : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</div>\n\n\n<div class=\"notify-shadow\"></div>";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return alias3(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div class=\"notify-push-inner\">\n	"
    + ((stack1 = (helpers.a11y_aria_label || (depth0 && depth0.a11y_aria_label) || alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1),{"name":"a11y_aria_label","hash":{},"data":data})) != null ? stack1 : "")
    + "\n	<div class=\"notify-push-title\">\n		<div class=\"notify-push-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n			"
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),depth0,{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n	\n	<div class=\"notify-push-body\">\n		<div class=\"notify-push-body-inner\">\n			"
    + ((stack1 = (helpers.compile_a11y_text || (depth0 && depth0.compile_a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),depth0,{"name":"compile_a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</div>\n\n<button class=\"base notify-push-close\" aria-label=\""
    + alias3(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n	<span class=\"icon icon-cross\"></span>\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "					<div class=\"page-title\">\n						<div class=\"page-title-inner\" "
    + ((stack1 = (helpers.a11y_attrs_heading || (depth0 && depth0.a11y_attrs_heading) || alias2).call(alias1,"page",{"name":"a11y_attrs_heading","hash":{},"data":data})) != null ? stack1 : "")
    + ">\n							"
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),depth0,{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "\n						</div>\n					</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<div class=\"page-body\">\n						<div class=\"page-body-inner\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pageBody : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "						</div>\n					</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "								"
    + ((stack1 = (helpers.compile_a11y_text || (depth0 && depth0.compile_a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pageBody : depth0),depth0,{"name":"compile_a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "								"
    + ((stack1 = (helpers.compile_a11y_text || (depth0 && depth0.compile_a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),depth0,{"name":"compile_a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<div class=\"page-instruction\">\n						<div class=\"page-instruction-inner\">\n							"
    + ((stack1 = (helpers.compile_a11y_text || (depth0 && depth0.compile_a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),depth0,{"name":"compile_a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n						</div>\n					</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div class=\"page-inner article-container\">\n	"
    + ((stack1 = (helpers.a11y_aria_label || (depth0 && depth0.a11y_aria_label) || alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.page : stack1),{"name":"a11y_aria_label","hash":{},"data":data})) != null ? stack1 : "")
    + "\n	<div class=\"page-header\">\n		<div class=\"page-header-inner clearfix\">\n\n			<div class=\"page-header-content\">\n				<div class=\"page-header-content-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.any || (depth0 && depth0.any) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),(depth0 != null ? depth0.pageBody : depth0),{"name":"any","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n				</div>\n			</div>\n\n		</div>\n	</div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow display-none\"></div>";
},"useData":true});

this["Handlebars"]["templates"]["gmcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " disabled "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " complete submitted show-user-answer "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    return "correct";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "        <div class=\"gmcq-item component-item "
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + " "
    + alias4((helpers.odd || (depth0 && depth0.odd) || alias2).call(alias1,(data && data.index),{"name":"odd","hash":{},"data":data}))
    + "\">\n            <input type=\"checkbox\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" aria-labelledby=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "-aria\""
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " aria-label=\""
    + alias4((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || alias2).call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"a11y_normalize","hash":{},"data":data}))
    + " "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n            <label aria-hidden=\"true\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "-aria\" for=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " component-item-color component-item-text-color component-item-border "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " a11y-ignore\" tabindex=\"-1\">\n\n                <img src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" data-large=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\"/>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                <div class=\"gmcq-item-checkbox\">\n                    <div class=\"gmcq-item-state\">\n                        <div class=\"gmcq-item-icon gmcq-answer-icon "
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.program(20, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + " icon\"></div>\n                        <div class=\"gmcq-item-icon gmcq-correct-icon icon icon-tick\"></div>\n                        <div class=\"gmcq-item-icon gmcq-incorrect-icon icon icon-cross\"></div>\n                    </div>\n                    <div class=\"gmcq-item-inner\">\n                        "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                    </div>\n                </div>\n            </label>\n        </div>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._canShowMarking : depths[1]),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "incorrect";
},"10":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"12":function(container,depth0,helpers,partials,data) {
    return "disabled ";
},"14":function(container,depth0,helpers,partials,data) {
    return "selected";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "radio";
},"20":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"gmcq-inner component-inner clearfix\" role=\"region\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._gmcq : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"gmcq-widget component-widget clearfix "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["hiddenHotspots"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <img class=\"hidden-hotspots-graphic\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            Missing Graphic\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"hidden-hotspots-inner component-inner\" role=\"region\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._hiddenHotspots : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._hiddenHotspots : stack1)) != null ? stack1.ariaRegion : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"hidden-hotspots-widget component-widget\">\n        <div class=\"hidden-hotspots-graphic-container\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n    <div class=\"hidden-hotspots-mobile-navigation clearfix\">\n        <button class=\"hidden-hotspots-mobile-navigation-left\"><i class=\"icon icon-arrow-left\"></i></button>\n        <button class=\"hidden-hotspots-mobile-navigation-right\"><i class=\"icon icon-arrow-right\"></i></button>\n    </div>\n    <div class=\"hidden-hotspots-item-counter\">\n    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["hiddenHotspotsItem"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<icon class=\"hidden-hotspots-pin-remove-icon icon icon-delete\"></icon>\n<icon class=\"hidden-hotspots-pin-correct-icon icon icon-tick\"></icon>\n<icon class=\"hidden-hotspots-pin-incorrect-icon icon icon-cross\"></icon>\n";
},"useData":true});

this["Handlebars"]["templates"]["hiddenHotspotsZone"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<icon class=\"icon icon-tick\"></icon>";
},"useData":true});

this["Handlebars"]["templates"]["mcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " disabled "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " complete submitted show-user-answer "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    return "correct";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "        <div class=\"mcq-item component-item component-item-color "
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n            <input type=\"checkbox\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n            <label id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "-aria\" for=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"component-item-text-color component-item-border"
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                <div class=\"mcq-item-state\">\n                    <div class=\"mcq-item-icon mcq-answer-icon "
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.program(20, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + " component-item-text-color icon\"></div>\n                    <div class=\"mcq-item-icon mcq-correct-icon icon icon-tick\"></div>\n                    <div class=\"mcq-item-icon mcq-incorrect-icon icon icon-cross\"></div>\n                </div>\n                <div class=\"mcq-item-inner\">\n                    "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n            </label>\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._canShowMarking : depths[1]),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "incorrect";
},"12":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"14":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"16":function(container,depth0,helpers,partials,data) {
    return " selected";
},"18":function(container,depth0,helpers,partials,data) {
    return "radio";
},"20":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"mcq-inner component-inner\" role=\"region\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._mcq : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._mcq : stack1)) != null ? stack1.ariaRegion : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"mcq-widget component-widget "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["narrative"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "narrative-text-controls";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                <div class=\"narrative-content-item "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n                    "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                    <div class=\"narrative-content-title\">\n                        <div class=\"narrative-content-title-inner h5\" role=\"heading\" aria-level=\"5\" tabindex=\"0\">\n                            "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n                    <div class=\"narrative-content-body\">\n                        <div class=\"narrative-content-body-inner\">\n                            "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n                </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "visited";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.a11y_aria_label || (depth0 && depth0.a11y_aria_label) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"a11y_aria_label","hash":{},"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                        <div class=\"narrative-progress component-item-color component-item-border "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"></div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <button role=\"button\" class=\"base narrative-strapline-title "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias4(container.lambda((depths[1] != null ? depths[1]._itemWidth : depths[1]), depth0))
    + "%\" data-index=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n                        <div class=\"narrative-strapline-title-inner h5\">\n                            "
    + ((stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                        <div class=\"icon icon-plus\"></div>\n                        <div class=\"focus-rect\"></div>\n                    </button>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "                <div class=\"narrative-slider-graphic "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias3(alias2((depths[1] != null ? depths[1]._itemWidth : depths[1]), depth0))
    + "%\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n                    <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" />\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"narrative-progress component-item-color component-item-border "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"narrative-inner component-inner\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._narrative : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"narrative-widget component-widget "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._hasNavigationInTextArea : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n\n        <div class=\"narrative-content\">\n            <div class=\"narrative-content-inner\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"narrative-controls-container clearfix\">\n                    <div class=\"narrative-indicators\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                    <button class=\"base narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                        <div class=\"icon icon-controls-left\"></div>\n                    </button>\n                    <button class=\"base narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n                        <div class=\"icon icon-controls-right\"></div>\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"narrative-strapline\">\n            <div class=\"narrative-strapline-header\">\n                <div class=\"narrative-strapline-header-inner clearfix\" style=\"width: "
    + alias2(((helper = (helper = helpers._totalWidth || (depth0 != null ? depth0._totalWidth : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_totalWidth","hash":{},"data":data}) : helper)))
    + "%\">\n                    <div></div>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n\n        <div class=\"narrative-slide-container\">\n\n            <button class=\"base narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-left\"></div>\n            </button>\n            <button class=\"base narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-right\"></div>\n            </button>\n\n            <div class=\"narrative-slider clearfix\" style=\"width: "
    + alias2(((helper = (helper = helpers._totalWidth || (depth0 != null ? depth0._totalWidth : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_totalWidth","hash":{},"data":data}) : helper)))
    + "%\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"narrative-indicators\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n\n        <div class=\"clearfix\"></div>\n\n    </div>\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["openTextInput"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"component-inner openTextInput-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"component-widget openTextInput-widget\">\n    <div class=\"openTextInput-count-characters a11y-ignore\">\n      <div class=\"openTextInput-count-characters-container\"><span class=\"openTextInput-count-amount\"></span>&nbsp;"
    + alias4(((helper = (helper = helpers.remainingCharactersText || (depth0 != null ? depth0.remainingCharactersText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"remainingCharactersText","hash":{},"data":data}) : helper)))
    + "</div>\n      <div class=\"openTextInput-autosave\"></div>\n    </div>\n\n    <div class=\"openTextInput-answer-container\">\n        <textarea class=\"openTextInput-item-textbox\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\"\n                  maxlength=\""
    + alias4(((helper = (helper = helpers._allowedCharacters || (depth0 != null ? depth0._allowedCharacters : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_allowedCharacters","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers._userAnswer || (depth0 != null ? depth0._userAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_userAnswer","hash":{},"data":data}) : helper)))
    + "</textarea>\n    </div>\n    <div class=\"openTextInput-item-answertext openTextInput-item-textbox\" tabindex=\"0\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.modelAnswer : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n    <div class=\"buttons\">\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["text"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"text-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["revisionFooter"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hideNextButton : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "    <button class=\"revision-footer-next-component\" tabindex=\"0\" data-objective-id=\""
    + alias1(((helper = (helper = helpers.activeObjective || (depth0 != null ? depth0.activeObjective : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"activeObjective","hash":{},"data":data}) : helper)))
    + "\">"
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._assistedLearning : stack1)) != null ? stack1.nextButtonText : stack1), depth0))
    + "</button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " display-none";
},"6":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\"";
},"8":function(container,depth0,helpers,partials,data) {
    return "  <button class=\"revision-footer-progress-navigation base\" role=\"button\">\n    <div class=\"revision-footer-progress-navigation-completion\">\n      <div class=\"revision-footer-progress-navigation-bar\" style=\"width: 0%;\"><span class=\"aria-label\" role=\"region\" tabindex=\"0\"></span></div>\n    </div>\n  </button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"revision-footer-inner\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.activeObjective : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <button class=\"revision-footer-take-assessment"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.canTakeAssessment : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.canTakeAssessment : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._assistedLearning : stack1)) != null ? stack1.retakeAssessmentButtonText : stack1), depth0))
    + "</button>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.activeObjective : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["revisionFooterProgress"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div role=\"listitem\" class=\"objective-progress-item drawer-item\">\n      <button class=\"base objective-progress-item-title clearfix drawer-item-open\" tabindex=\"0\" role=\"button\" data-component-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isRevised : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n        <div class=\"objective-progress-item-title-inner accessible-text-block h5\"><span class=\"\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n          <div class=\"objective-progress-indicator objective-progress-indicator-"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isRevised : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n          </div>\n        </div>\n      </button>\n    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    return "revised";
},"10":function(container,depth0,helpers,partials,data) {
    return "flagged";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"progress-inner\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgress : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgress : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n    <div role=\"list\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"aria-label a11y-ignore-focus prevent-default\" tabindex=\"0\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._assistedLearning : stack1)) != null ? stack1.revisionProgressEnd : stack1), depth0))
    + "\"/>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["revisionHeader"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <button class=\"back-to-results\" tabindex=\"0\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._assistedLearning : stack1)) != null ? stack1.backToResultsButtonText : stack1), depth0))
    + "</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"revision-header-inner\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.activeObjective : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <button tabindex=\"0\" aria-label=\"Close Results\" role=\"button\" class=\"revision-header-close icon icon-cross\"></button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["revisionResults"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\"";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"revision-detail-header\">\n        <div class=\"revision-detail-header-status\" tabindex=\"0\" role=\"heading\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._assistedLearning : stack1)) != null ? stack1.status : stack1), depth0))
    + "</div>\n        "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._displayCode : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div class=\"revision-detail-header-items\" tabindex=\"0\" role=\"heading\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._assistedLearning : stack1)) != null ? stack1.itemsToReview : stack1), depth0))
    + "</div>\n    </div>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.objectives : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"revision-detail-header-code\" tabindex=\"0\" role=\"heading\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._assistedLearning : stack1)) != null ? stack1.code : stack1), depth0))
    + "</div>";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"revision-objective\">\n            <div class=\"revision-objective-"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isRevised : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\" tabindex=\"0\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isRevised : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.program(13, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "            </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._displayCode : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"revision-objective-title\" tabindex=\"0\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isRevised : depth0),{"name":"unless","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "revised";
},"9":function(container,depth0,helpers,partials,data) {
    return "flag";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? depths[1]._globals : depths[1])) != null ? stack1._extensions : stack1)) != null ? stack1._assistedLearning : stack1)) != null ? stack1.reviewed : stack1), depth0))
    + "\n";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? depths[1]._globals : depths[1])) != null ? stack1._extensions : stack1)) != null ? stack1._assistedLearning : stack1)) != null ? stack1.flagged : stack1), depth0))
    + "\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <div class=\"revision-objective-display-code\" tabindex=\"0\">"
    + container.escapeExpression(((helper = (helper = helpers._code || (depth0 != null ? depth0._code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_code","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"17":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "            <button class=\"revision-review-button\""
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.componentsToRevise : depth0)) != null ? stack1.length : stack1),{"name":"unless","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " data-objective-id=\""
    + alias2(((helper = (helper = helpers._code || (depth0 != null ? depth0._code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"_code","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\">"
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? depths[1]._globals : depths[1])) != null ? stack1._extensions : stack1)) != null ? stack1._assistedLearning : stack1)) != null ? stack1.reviewButtonText : stack1), depth0))
    + "</button>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"revision-results-inner\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._assistedLearning : stack1)) != null ? stack1.itemsToReview : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._assistedLearning : stack1)) != null ? stack1.itemsToReview : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " tabindex=\"0\">\n  <div class=\"h1 revision-results-title\" role=\"heading\" tabindex=\"0\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._assistedLearning : depth0)) != null ? stack1.revisionResultsTitle : stack1), depth0))
    + "</div>\n\n  <div class=\"revision-blurb\" tabindex=\"0\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._assistedLearning : depth0)) != null ? stack1.revisionResultsBodyText : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n\n  <div class=\"revision-detail\">\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.objectives : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["languagePickerDrawerView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"languagepicker-language drawer-item "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias4(((helper = (helper = helpers._language || (depth0 != null ? depth0._language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias2).call(alias1,(depth0 != null ? depth0._direction : depth0),"rtl",{"name":"equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n          <button class=\"base drawer-item-open\" data-language=\""
    + alias4(((helper = (helper = helpers._language || (depth0 != null ? depth0._language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.displayName : depth0),{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "</button>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"4":function(container,depth0,helpers,partials,data) {
    return "dir-rtl";
},"6":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div class=\"languagepicker\">\n  <div class=\"languagepicker-inner\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._languages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["languagePickerNavigation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <button id=\"accessibility-toggle\" class=\"base icon icon-accessibility a11y-ignore-focus\"></button>\n    <span id=\"accessibility-instructions\" class=\"aria-label\" role=\"region\" tabindex=\"0\"></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"navigation-inner clearfix\" role=\"navigation\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._isEnabled : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    "
    + ((stack1 = (helpers.a11y_aria_label || (depth0 && depth0.a11y_aria_label) || helpers.helperMissing).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0._config : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigation : stack1),{"name":"a11y_aria_label","hash":{},"data":data})) != null ? stack1 : "")
    + "\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["languagePickerView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <button class=\"languagepicker-language "
    + alias4(((helper = (helper = helpers._language || (depth0 != null ? depth0._language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers._language || (depth0 != null ? depth0._language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data}) : helper)))
    + "\">\n                "
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.displayName : depth0),{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"languagepicker-inner\">\n    <div class=\"languagepicker-title\">\n        <div class=\"languagepicker-title-inner\" role=\"heading\" tabindex=\"0\">\n            "
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n    <div class=\"languagepicker-body\">\n        <div class=\"languagepicker-body-inner\">\n            "
    + ((stack1 = (helpers.compile_a11y_text || (depth0 && depth0.compile_a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"compile_a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n    <div class=\"languagepicker-languages\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._languages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " trickle-full-width";
},"3":function(container,depth0,helpers,partials,data) {
    return " locking";
},"5":function(container,depth0,helpers,partials,data) {
    return "display-none";
},"7":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"9":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._isStart : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "<div class=\"component "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-component "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-component-"
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"_id","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isFullWidth : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._className : stack1), depth0))
    + "\">\n    "
    + ((stack1 = (helpers.a11y_aria_label || (depth0 && depth0.a11y_aria_label) || alias4).call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._trickle : stack1)) != null ? stack1.incompleteContent : stack1),{"name":"a11y_aria_label","hash":{},"data":data})) != null ? stack1 : "")
    + "\n    <div class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-inner component-inner"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isLocking : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isVisible : stack1),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n        <button class=\"button "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isDisabled : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isDisabled : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._isFinal : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "        </button>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu-item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\" ";
},"3":function(container,depth0,helpers,partials,data) {
    return "visited";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" />\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.visited : stack1), depth0));
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <span class=\"menu-item-duration accessible-text-block\" role=\"region\" tabindex=\"0\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.durationLabel : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duration","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.durationLabel || (depth0 != null ? depth0.durationLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"durationLabel","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"menu-item-inner\" style=\"background-image: url("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + ");\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuItem : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuItem : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n  <a href=\"#/id/"
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"menu-item-link "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <div class=\"menu-item-graphic\">\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"menu-item-title\">\n      <div class=\"menu-item-title-inner h3 accessible-text-block\" role=\"heading\" aria-level=\"2\" tabindex=\"0\">"
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"menu-item-body\">\n      <div class=\"menu-item-body-inner\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias4).call(alias3,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n    </div>\n  </a>\n  <div class=\"menu-item-button\">\n    <a href=\"#/id/"
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" role=\"button\" aria-label=\""
    + alias2(((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"linkText","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" class=\""
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " accessible-text-block\">\n      "
    + ((stack1 = ((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"linkText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </a>\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.duration : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<div class=\"menu-addition-title\">\n					<div class=\"menu-addition-title-inner h1 accessible-text-block\" role=\"heading\" aria-level=\"1\" tabindex=\"0\">\n						"
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "					<div class=\"menu-addition-title\">\n						<div class=\"menu-addition-title-inner h1 accessible-text-block\" role=\"heading\" aria-level=\"1\" tabindex=\"0\">\n							"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n						</div>\n					</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\"menu-addition-body\">\n					<div class=\"menu-addition-body-inner accessible-text-block\">\n						"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"menu-addition\">\n	<div class=\"menu-addition-inner\">\n		<div class=\"menu-addition-text-wrapper\">\n			<div class=\"menu-addition-text-wrapper-inner\">\n				<div class=\"menu-addition-logo\">\n					<div class=\"menu-addition-logo-inner\">\n					</div>\n				</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n</div>\n\n<div class=\"menu-container\" role=\"region\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n	<div class='menu-container-inner box-menu-inner clearfix'>\n		<div class=\"menu-instruction\">\n			<div class=\"menu-instruction-inner accessible-text-block\">\n				"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0._menu : depth0)) != null ? stack1._boxMenuCustom : stack1)) != null ? stack1._menuInstructionText : stack1),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n			</div>\n		</div>\n	</div>\n	<div class=\"aria-label a11y-ignore-focus prevent-default\" tabindex=\"0\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuEnd : stack1), depth0))
    + "\"/>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["hotgraphicPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "    <div class=\"hotgraphic-item component-item clearfix "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isActive : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias4(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_classes","hash":{},"data":data}) : helper)))
    + "\" data-index="
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ">\n        <div class=\"hotgraphic-item-content\">\n            <div class=\"hotgraphic-item-content-inner\">\n            <div class=\"hotgraphic-content-title\" role=\"heading\" aria-level=\"5\" tabindex=\"0\">\n                "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n            <div class=\"hotgraphic-content-body\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n            </div>\n        </div>\n        <div class=\"hotgraphic-item-graphic\">\n            <div class=\"hotgraphic-item-graphic-inner\">\n            <img src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n            </div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "visited";
},"4":function(container,depth0,helpers,partials,data) {
    return "active";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"hotgraphic-popup-nav component-item-color\">\n        <button class=\"base hotgraphic-popup-controls back\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n            <div class=\"hotgraphic-popup-arrow-l component-item-text-color icon icon-controls-small-left\"></div>\n        </button>\n        <div class=\"hotgraphic-popup-count component-item-text-color\">\n        </div>\n        <button class=\"base hotgraphic-popup-controls next\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n            <div class=\"hotgraphic-popup-arrow-r component-item-text-color icon icon-controls-small-right\"></div>\n        </button>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "<div class=\"hotgraphic-popup-inner clearfix\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<div class=\"hotgraphic-popup-toolbar component-item-color clearfix\">\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._hidePagination : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <button class=\"base hotgraphic-popup-done\" aria-label=\""
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n        <div class=\"hotgraphic-popup-close component-item-text-color icon icon-cross\"></div>\n    </button>\n</div>\n"
    + alias2(((helper = (helper = helpers.a11y_wrap_focus || (depth0 != null ? depth0.a11y_wrap_focus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data}) : helper)))
    + "\n";
},"useData":true});

return this["Handlebars"];

});