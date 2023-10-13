(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{237:function(e,t,a){"use strict";a.r(t);var s=a(2),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"searchable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searchable","aria-hidden":"true"}},[e._v("#")]),e._v(" Searchable")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/Searchable?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/searchable&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/9bd280636d3840b696f6bf788820a6db",alt:"Codacy Badge"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.styleci.io/repos/150948993",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.styleci.io/repos/150948993/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/searchable",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/searchable/license",alt:"License"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/searchable",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/searchable/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/searchable",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/searchable/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Project wide searching dependency for "),a("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("This package works exclusively within the "),a("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Enso"),a("OutboundLink")],1),e._v(" ecosystem.")]),e._v(" "),a("p",[e._v("The front end assets that utilize this api are present in the "),a("a",{attrs:{href:"https://github.com/enso-ui/ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("ui"),a("OutboundLink")],1),e._v(" package.")]),e._v(" "),a("p",[e._v("For live examples and demos, you may visit "),a("a",{attrs:{href:"https://www.liberu.co.uk",target:"_blank",rel:"noopener noreferrer"}},[e._v("liberu.co.uk"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://laravel-enso.github.io/searchable/videos/bulma_demo_01.mp4",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-enso.github.io/searchable/screenshots/bulma_001_thumb.png",alt:"Watch the demo"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("sup",[e._v("click on the photo to view a short demo in compatible browsers")])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Comes pre-installed in Enso.")]),e._v(" "),a("h3",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("can search for any configured model")]),e._v(" "),a("li",[e._v("various actions are contextually available for each result, also depending on permissions")]),e._v(" "),a("li",[e._v("the icons used for the actions are customizable")]),e._v(" "),a("li",[e._v("the number is limited (by default at 10 results per model) to avoid too many DB hits")]),e._v(" "),a("li",[e._v("any model may be added to the searchable list")]),e._v(" "),a("li",[e._v("per-model customizations are available, such as attributes to search and the label to use when showing results")])]),e._v(" "),a("p",[e._v("Note: Although available result model actions are shown based on the current user's permissions for that model,\ncare must be taken when due to the search functionality, results could be listed that user might not be meant to see.")]),e._v(" "),a("p",[e._v("It is recommended to look into and use global query scopes for these scenarios.")]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The package needs to be configured by specifying the models we want searchable. The configuration file can be found\nat "),a("code",[e._v("config/searchable.php")])]),e._v(" "),a("p",[e._v("The following parameters are available:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("defaultLabel")]),e._v(" - the default label attribute to be used for all models,\nunless overwritten on the model specific configuration (see below) | default is "),a("code",[e._v("name")])]),e._v(" "),a("li",[a("code",[e._v("routes")]),e._v(" - customizes the icons used for the routes (remember to also have the icons available/imported)\n"),a("ul",[a("li",[a("code",[e._v("show")]),e._v(", default is "),a("code",[e._v("eye")])]),e._v(" "),a("li",[a("code",[e._v("edit")]),e._v(", default is "),a("code",[e._v("pencil-alt")])]),e._v(" "),a("li",[a("code",[e._v("index")]),e._v(", default is "),a("code",[e._v("list-ul")])])])]),e._v(" "),a("li",[a("code",[e._v("limit")]),e._v(" - the max limit of results per model. Keep in mind that more results may be available, so if looking for a specific result,\nbe more specific when searching | default is "),a("code",[e._v("10")])]),e._v(" "),a("li",[a("code",[e._v("models")]),e._v(" - the list of models and their configurations that are searchable by the package")])]),e._v(" "),a("h4",{attrs:{id:"model-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Model Configuration")]),e._v(" "),a("p",[e._v("Each model can be configured with a mix of required and optional attributes")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[e._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'group'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'User'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'attributes'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'first_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'last_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'email'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'label'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'fullName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'permissionGroup'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'administration.users'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'scopes'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),a("ul",[a("li",[a("code",[e._v("group")]),e._v(' - string, the name of the group this model belongs to, used to group the results. If not given, the class spaced base name is used, e.g. "User", "Permission Group" | (optional)')]),e._v(" "),a("li",[a("code",[e._v("attributes")]),e._v(" - array, the list of model attributes that we want to look at when searching | required")]),e._v(" "),a("li",[a("code",[e._v("label")]),e._v(" - string, the model attribute we want to use as representation of the model, optional. If given, this configuration option\noverrides the global default "),a("code",[e._v("defaultLabel")]),e._v(" option. Note that a computed attribute can be given as well | (optional)")]),e._v(" "),a("li",[a("code",[e._v("permissionGroup")]),e._v(" - string, the name of the permission group to use when displaying action options for this model's results | required")]),e._v(" "),a("li",[a("code",[e._v("permissions")]),e._v(" - array, the list of permissions to be used for this model's results action options.\nIf not given, actions are displayed  (based on permissions) for "),a("code",[e._v("index")]),e._v(", "),a("code",[e._v("show")]),e._v(" and "),a("code",[e._v("edit")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("scopes")]),e._v(" - array, the list of scopes to be used when querying the model | (optional)")])]),e._v(" "),a("h3",{attrs:{id:"publishes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[e._v("#")]),e._v(" Publishes")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("php artisan vendor:publish --tag=searchable-config")]),e._v(" - configuration file")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=enso-config")]),e._v(" - a common alias for when wanting to update the config,\nonce a newer version is released, can be used with the "),a("code",[e._v("--force")]),e._v(" flag")])]),e._v(" "),a("h2",{attrs:{id:"contributions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[e._v("#")]),e._v(" Contributions")]),e._v(" "),a("p",[e._v("are welcome. Pull requests are great, but issues are good too.")]),e._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("p",[e._v("This package is released under the MIT license.")])])},[],!1,null,null,null);t.default=r.exports}}]);