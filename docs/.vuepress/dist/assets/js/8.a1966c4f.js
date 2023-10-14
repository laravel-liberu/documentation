(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{211:function(t,e,a){"use strict";a.r(e);var s=a(2),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"activity-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activity-log","aria-hidden":"true"}},[t._v("#")]),t._v(" Activity Log")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-liberu/activity-log?utm_source=github.com&utm_medium=referral&utm_content=laravel-liberu/activity-log&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/0f8e148c3247407cab601e3460967a2e",alt:"Codacy Badge"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.styleci.io/repos/144374422",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.styleci.io/repos/144374422/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/activity-log",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/activity-log/license",alt:"License"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/activity-log",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/activity-log/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/activity-log",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/activity-log/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Activity logger dependency for "),a("a",{attrs:{href:"https://liberu.co.uk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Liberu"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("This package works exclusively within the "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Liberu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Liberu"),a("OutboundLink")],1),t._v(" ecosystem.")]),t._v(" "),a("p",[t._v("The front end assets that utilize this api are present in the "),a("a",{attrs:{href:"https://github.com/liberu-ui/ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("ui"),a("OutboundLink")],1),t._v(" package.")]),t._v(" "),a("p",[t._v("For live examples and demos, you may visit "),a("a",{attrs:{href:"https://www.liberu.co.uk",target:"_blank",rel:"noopener noreferrer"}},[t._v("liberu.co.uk"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://laravel-liberu.github.io/activity-log/videos/bulma_activity_log.mp4",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-liberu.github.io/activity-log/screenshots/bulma_051_thumb.png",alt:"Watch the demo"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("sup",[t._v("click on the photo to view a short demo in compatible browsers")])]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("Comes pre-installed in Liberu.")]),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("ul",[a("li",[t._v("friendly interface for viewing user activity in the application")]),t._v(" "),a("li",[t._v("available by default only to users with the Administrator role")]),t._v(" "),a("li",[t._v("events are presented in an useful manner")]),t._v(" "),a("li",[t._v("allows the filtering of data depending on a date interval, the roles of the users, the users or the type of events")]),t._v(" "),a("li",[t._v("supports create, update, delete and custom event types")]),t._v(" "),a("li",[t._v("the models whose changes need to represented, need only to use the "),a("code",[t._v("LogsActivity")]),t._v(" trait. Optionally,\nyou may set additional configuration attributes on the model to further fine tune the way data is logged/represented")]),t._v(" "),a("li",[t._v("the logger will not attempt to persist data when there is no authenticated user - this avoids issues when\nusing seeder / playing in tinker, etc.")])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("In order to enable the logging for a particular model, you need to add the "),a("code",[t._v("LogsActivity")]),t._v(" trait to that model.\nBy doing this, creation and deletion events are recorded (update events are not).")]),t._v(" "),a("p",[t._v("By default, for each entry:")]),t._v(" "),a("ul",[a("li",[t._v("the model's "),a("code",[t._v("name")]),t._v(" attribute will be used as label")]),t._v(" "),a("li",[t._v("the proper event type will be used i.e. 'created' when storing a new model")]),t._v(" "),a("li",[t._v("no specific message is used")]),t._v(" "),a("li",[t._v("no specific icon is used")])]),t._v(" "),a("h2",{attrs:{id:"customization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customization","aria-hidden":"true"}},[t._v("#")]),t._v(" Customization")]),t._v(" "),a("h3",{attrs:{id:"changing-the-model-representation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-model-representation","aria-hidden":"true"}},[t._v("#")]),t._v(" Changing the model representation")]),t._v(" "),a("p",[t._v("Since not all models have a "),a("code",[t._v("name")]),t._v(" attribute,\nor it makes sense to use some other attribute to better represent a certain model type,\nyou may declare a "),a("code",[t._v("$loggableLabel")]),t._v(" on the model, and set the value to be used as label.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggableLabel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Also, the label may be declared through a relationship, on a related model. For example:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggableLabel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'person.name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("where "),a("code",[t._v("person")]),t._v(" is an existing relationship on this model. In such cases, the logging mechanism will actually follow\nthrough the relationship(s) until it is able to load the given label attribute.")]),t._v(" "),a("h3",{attrs:{id:"logging-update-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-update-events","aria-hidden":"true"}},[t._v("#")]),t._v(" Logging update events")]),t._v(" "),a("p",[t._v("To enable the tracking of update events, you must declare a "),a("code",[t._v("$loggable")]),t._v(" attribute on the model.\nThe value of the attribute should be an array of model attributes that you want tracked.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'is_active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'gender'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Genders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Note: when updating a model, if none of the tracked attributes are updated, no entry is recorded even if the tracked model is otherwise updated.")]),t._v(" "),a("h3",{attrs:{id:"customizing-label-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-label-attributes","aria-hidden":"true"}},[t._v("#")]),t._v(" Customizing label attributes")]),t._v(" "),a("p",[t._v("Normally it is enough to give a simple list of tracked attributes, in which case the attribute names themselves will be used to describe them.\nTo customize the label for any of the tracked attribute you should use an associative\n"),a("code",[t._v("key => value")]),t._v(" declaration style. In this case, the key is the tracked model's attribute and the value should be the alternative label for that attribute.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'is_active'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'active state'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"enum-label-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enum-label-attributes","aria-hidden":"true"}},[t._v("#")]),t._v(" Enum label attributes")]),t._v(" "),a("p",[t._v("You may also give an enum as the value of a "),a("code",[t._v("key => value")]),t._v(" pair when using this key-value declaration style. In such cases,\nthe enum will be used to process the stored values and present more human readable values.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'is_active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'gender'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Genders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"relationship-label-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relationship-label-attributes","aria-hidden":"true"}},[t._v("#")]),t._v(" Relationship label attributes")]),t._v(" "),a("p",[t._v("You may also give an array as the value of a "),a("code",[t._v("key => value")]),t._v(" pair when using this key-value declaration style. In such cases,\nthe array is expected to further contain a "),a("code",[t._v("key => value")]),t._v(" pair with a class name as key and a model attribute as the value.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'group_id'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UserGroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The class and the model attribute values are used to follow through a relationship on the loggable model, and retrieve the\ngiven attribute's value on the related model.")]),t._v(" "),a("h3",{attrs:{id:"generating-custom-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-custom-events","aria-hidden":"true"}},[t._v("#")]),t._v(" Generating custom events")]),t._v(" "),a("p",[t._v("Because you may want to generate custom events, the trait provides a public "),a("code",[t._v("logEvent")]),t._v(" method for this purpose,\nthat may be called on the model.")]),t._v(" "),a("p",[t._v("The method takes 2 parameters:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$message")]),t._v(", which is required and should meaningfully describe the event")]),t._v(" "),a("li",[a("code",[t._v("$flag")]),t._v(", which is optional and if given, should be a Font Awesome icon class, to be used for the custom event")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$company")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Company"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$company")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'triggered my custom action'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'beer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Please note:")]),t._v(" "),a("ul",[a("li",[t._v("the given icon should be available (imported)")]),t._v(" "),a("li",[t._v("if no icon is given, the flag icon is used by default")])]),t._v(" "),a("h2",{attrs:{id:"contributions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[t._v("#")]),t._v(" Contributions")]),t._v(" "),a("p",[t._v("are welcome. Pull requests are great, but issues are good too.")]),t._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[t._v("This package is released under the MIT license.")])])},[],!1,null,null,null);e.default=r.exports}}]);