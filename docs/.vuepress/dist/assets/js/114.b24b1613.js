(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{319:function(e,t,a){"use strict";a.r(t);var s=a(2),o=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select","aria-hidden":"true"}},[e._v("#")]),e._v(" Select")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-liberu/Select?utm_source=github.com&utm_medium=referral&utm_content=laravel-liberu/Select&utm_campaign=badger",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/c6799b0705d34fdab5cd100e7cfe6312",alt:"Codacy Badge"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://styleci.io/repos/85489940",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://styleci.io/repos/85489940/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/select",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/select/license",alt:"License"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/select",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/select/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/select",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/select/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Bulma styled single and multi-select VueJS component with a server-side option list builder")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://laravel-liberu.github.io/select/videos/bulma_demo_01.mp4",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-liberu.github.io/select/screenshots/bulma_031.png",alt:"Watch the demo"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("sup",[e._v("click on the photo to view a short demo in compatible browsers")])]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("a standalone component with minimal dependencies")]),e._v(" "),a("li",[e._v("minimal CSS styling that matches the beautiful "),a("a",{attrs:{href:"https://bulma.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bulma"),a("OutboundLink")],1),e._v(" forms design")]),e._v(" "),a("li",[e._v("the select options can be retrieved via ajax calls or, given directly, via a parameter")]),e._v(" "),a("li",[e._v("when getting the data via ajax, the component can take various parameters for results filtering")]),e._v(" "),a("li",[e._v("for the back-end, the package comes with a trait for easy retrieval and formatting of the data\nas expected by the VueJS component")]),e._v(" "),a("li",[e._v("can filter the option list dynamically even based on the model’s one-to-many / many-to-many relationships")]),e._v(" "),a("li",[e._v("can search in multiple attributes of a model, and the attribute(s) may be nested")]),e._v(" "),a("li",[e._v("can specify the attribute used as label for the select options")]),e._v(" "),a("li",[e._v("can be used to create a new 'tag' if no suitable result is found (soon)")]),e._v(" "),a("li",[e._v("can use the arrow keys to navigate the list of results and Enter to select/deselect")]),e._v(" "),a("li",[e._v("is as small as can be, without skimping on features")])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("The VueJS component is already included in the Liberu install and should not require any additional installation steps")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Use the "),a("code",[e._v("OptionsBuilder")]),e._v(" trait in your desired Controller")])]),e._v(" "),a("li",[a("p",[e._v("Define an "),a("code",[e._v("options")]),e._v(" route for your Controller (and permissions as required)")])]),e._v(" "),a("li",[a("p",[e._v("Declare inside your controller the "),a("code",[e._v("$model")]),e._v(" property as shown below:")]),e._v(" "),a("p",[a("code",[e._v("protected $model = Model::class")])]),e._v(" "),a("p",[e._v("where "),a("code",[e._v("Model::class")]),e._v(" will be the Model used by the builder to extract the list of options")]),e._v(" "),a("p",[e._v("You can use model computed attributes to display attributes when using the server-side mode,\nsince the entire model is sent back to the front-end.")]),e._v(" "),a("p",[e._v("By default, the VueJS component will use the model’s "),a("code",[e._v("name")]),e._v(" attribute as a label for the select option list - but this is customizable - and the "),a("code",[e._v("id")]),e._v(" for the key.\nSee the options bellow for details.")])]),e._v(" "),a("li",[a("p",[e._v("In your page/component add:")])])]),e._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("vue-select")]),e._v(" \n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("v-model")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("myVariable")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("source")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("/pathForSelectOptionsRoute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("multiple")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":params")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":pivot-params")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("pivotParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v("        \n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":custom-params")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("customParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("vue-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("h3",{attrs:{id:"vueselect-vuejs-component-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vueselect-vuejs-component-options","aria-hidden":"true"}},[e._v("#")]),e._v(" VueSelect VueJS component options")]),e._v(" "),a("p",[e._v("In order to work, the component needs a data source. The data source can be a path for server-side, OR a formatted object.\nEither a "),a("code",[e._v("source")]),e._v(" or an "),a("code",[e._v("options")]),e._v(" parameter is required.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("multiple")]),e._v(" - boolean, flag that makes the element work as a multiselect, if omitted, the select acts as single select | default "),a("code",[e._v("false")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("source")]),e._v(" - string, path to use when getting the select options "),a("strong",[e._v("only for server-side")]),e._v(". | default "),a("code",[e._v("null")])]),e._v(" "),a("li",[a("code",[e._v("options")]),e._v(" - array of objects, list of options, "),a("strong",[e._v("only where you don't need server-side")]),e._v(" | default "),a("code",[e._v("[]")])]),e._v(" "),a("li",[a("code",[e._v("trackBy")]),e._v(" - string, the name of the option object attribute when selecting it (html "),a("code",[e._v("<option>")]),e._v(" value equivalent) | default "),a("code",[e._v("id")]),e._v(" |  (optional)")]),e._v(" "),a("li",[a("code",[e._v("label")]),e._v(" - string, the name of the option object attribute used as label (html "),a("code",[e._v("<option>")]),e._v(" text equivalent) | default "),a("code",[e._v("name")]),e._v(" |  (optional)")]),e._v(" "),a("li",[a("code",[e._v("value")]),e._v(" - variable holding the selected option(s). Can be a single value or an Array if the select is used as a multi-select.\nIf not null/empty, the vue select will pre-populate the selected value(s) | default "),a("code",[e._v("[]")]),e._v(" or "),a("code",[e._v("null")]),e._v(" |  (optional)")]),e._v(" "),a("li",[a("code",[e._v("limit")]),e._v(" - optional, number, parameter that limits the number of options loaded from the backend | default "),a("code",[e._v("100")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("disabled")]),e._v(" - boolean, flag that sets the element as disabled | default "),a("code",[e._v("false")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("readonly")]),e._v(" - boolean, flag that marks the element as readonly | default "),a("code",[e._v("false")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("taggable")]),e._v(" - boolean, flag the allows the creation of new tags (soon) | default "),a("code",[e._v("false")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("disable-clear")]),e._v(" - boolean, flag that disables the clear button and also prevents deselecting the last input value for single select | default "),a("code",[e._v("false")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("hasError")]),e._v(" - boolean, flag sets an error styling for the select, such as when validation fails | default "),a("code",[e._v("false")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("params")]),e._v(" - object, attributes from the same table/model used for filtering results in server-side mode.\nFormat: "),a("code",[e._v("params: { 'fieldName': fieldValue }")]),e._v(" | default "),a("code",[e._v("null")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("pivotParams")]),e._v(" - object, attributes from linked tables/models used for filtering results in server-side mode.\nFormat: "),a("code",[e._v("pivotParams: { 'table': {'attribute':value} }")]),e._v(" | default "),a("code",[e._v("null")]),e._v(" | (optional)")])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),a("p",[e._v("The value may also be an array, in which case, under the hood, a "),a("code",[e._v("where in")]),e._v(" type of query will be used.")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("customParams")]),e._v(" - object, can be anything.\nUsing customParams implies that you provide a 'query' method inside the controller, so you can make use of the custom object  provided in the request. | (optional)")]),e._v(" "),a("li",[a("code",[e._v("placeholder")]),e._v(" - custom placeholder when no option is selected | default "),a("code",[e._v("'Choose'")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("labels")]),e._v(" - object, the labels used inside the component | default "),a("code",[e._v("{ selected: 'selected', select: 'select', deselect: 'deselect', noOptions: 'No options available', noResult: 'No search results found', addTag: 'Add option', }")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("i18n")]),e._v(", optional, function, that is used for translating labels, headers, and table data\nThe default value (function) for this parameter simply returns its argument as the translated value")]),e._v(" "),a("li",[a("code",[e._v("translated")]),e._v(", optional, boolean, indicates that the available options should be translated too")]),e._v(" "),a("li",[a("code",[e._v("debounce")]),e._v(" - optional, number, the number of milliseconds to use when debouncing the search on type | default "),a("code",[e._v("300")]),e._v(" ms | (optional)")]),e._v(" "),a("li",[a("code",[e._v("errorHandler")]),e._v(" - optional, function, will be used in server side mode when fetching options in axios's "),a("code",[e._v("catch")])])]),e._v(" "),a("h3",{attrs:{id:"vueselectfilter-component-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vueselectfilter-component-options","aria-hidden":"true"}},[e._v("#")]),e._v(" VueSelectFilter component options")]),e._v(" "),a("p",[e._v("Takes the following parameters:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("title")]),e._v(" - string, the title to display above the options | default "),a("code",[e._v("null")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("value")]),e._v(" -  the selected value from the list of options | default null | required")])]),e._v(" "),a("p",[e._v("Since this component is a wrapper for "),a("code",[e._v("VueSelect")]),e._v(", and all listeners and attributes are passed-through,\t\nthe regular "),a("code",[e._v("VueSelect")]),e._v(" options are available")]),e._v(" "),a("h3",{attrs:{id:"optionbuilder-trait-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optionbuilder-trait-options","aria-hidden":"true"}},[e._v("#")]),e._v(" OptionBuilder trait options")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("$queryAttributes")]),e._v(", array with the list of attributes we're searching in, when getting the select options | default "),a("code",[e._v("['name']")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("$model")]),e._v(", string, the fully qualified namespace of the class that we're querying on, in order to get the select options | default "),a("code",[e._v("null")]),e._v(" | required")]),e._v(" "),a("li",[a("code",[e._v("query(Request $request)")]),e._v(", a method which will return the query builder that we're using when querying for options | default "),a("code",[e._v("null")]),e._v(" | (optional)")])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),a("p",[e._v("If a query method is provided, it's going to be used, if it's not given, a query will be constructed, using the given class and other values.")])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),a("p",[e._v("The query attribute(s) given may have a nested structure, for instance "),a("code",[e._v("user.name")]),e._v(" where "),a("code",[e._v("user")]),e._v(" is a relationship on the model.\nIn such a case the builder will follow through the relationships to query the given attribute.")])]),e._v(" "),a("h2",{attrs:{id:"publishes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[e._v("#")]),e._v(" Publishes")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("php artisan vendor:publish --tag=select-assets")]),e._v(" - the main VueJS components and their dependencies")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=liberu-assets")]),e._v(" - a common alias for when wanting to update the VueJS assets,\nonce a newer version is released, can be used with the "),a("code",[e._v("--force")]),e._v(" flag")])]),e._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("p",[e._v("We've tried to make it as light as possible and use the minimum amount of external libraries and dependencies.\nTherefore, the package depends just on:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ndelvalle/v-click-outside",target:"_blank",rel:"noopener noreferrer"}},[e._v("v-click-outside"),a("OutboundLink")],1),e._v(" for closing the dropdown when clicking outside clicks")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/lodash/lodash",target:"_blank",rel:"noopener noreferrer"}},[e._v("lodash"),a("OutboundLink")],1),e._v(" for debouncing using a selective import")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Font Awesome 5"),a("OutboundLink")],1),e._v(" for the icons, using selective imports")])]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Liberu Core"),a("OutboundLink")],1),e._v(" package comes with this package included.")])])},[],!1,null,null,null);t.default=o.exports}}]);