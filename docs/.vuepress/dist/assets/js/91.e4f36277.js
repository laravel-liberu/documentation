(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{286:function(e,t,a){"use strict";a.r(t);var r=a(2),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"companies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#companies","aria-hidden":"true"}},[e._v("#")]),e._v(" Companies")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-liberu/Companies?utm_source=github.com&utm_medium=referral&utm_content=laravel-liberu/Companies&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/1a05a5276a5c4f6db3cb05db2086bbab",alt:"Codacy Badge"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.styleci.io/repos/151941399",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.styleci.io/repos/151941399/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/companies",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/companies/license",alt:"License"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/companies",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/companies/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/companies",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/companies/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Company management dependency for "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://laravel-liberu.github.io/companies/screenshots/bulma_001.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-liberu.github.io/companies/screenshots/bulma_001_thumb.png",alt:"Screenshot"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://laravel-liberu.github.io/companies/screenshots/bulma_002.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-liberu.github.io/companies/screenshots/bulma_002_thumb.png",alt:"Screenshot"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("sup",[e._v("click on the photo to view a large size screenshot")])]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("provides a common functionality for managing companies within the Enso ecosystem")]),e._v(" "),a("li",[e._v("integrates with the "),a("a",{attrs:{href:"https://github.com/laravel-liberu/People",target:"_blank",rel:"noopener noreferrer"}},[e._v("People"),a("OutboundLink")],1),e._v(" package so you can associate people to companies")]),e._v(" "),a("li",[e._v("can be reused and integrated with other modules which might deal with companies (e.g. suppliers )\nor even other entities, such as people (e.g. clients)")]),e._v(" "),a("li",[e._v("a "),a("code",[e._v("CompanyFactory")]),e._v(" is included by default in the package")]),e._v(" "),a("li",[e._v("the companies server-side select functionality is also included by default")])]),e._v(" "),a("h2",{attrs:{id:"under-the-hood"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood","aria-hidden":"true"}},[e._v("#")]),e._v(" Under the Hood")]),e._v(" "),a("ul",[a("li",[e._v("the model comes with a "),a("code",[e._v("mandatary")]),e._v(" relationship to a person. Of course, the mandatary is optional.\nYou can only set as mandatary one of the people associated to the company.")]),e._v(" "),a("li",[e._v("once the company has activity in the system (through any other model relationship), it cannot be deleted")]),e._v(" "),a("li",[e._v("the proper way to delete a company is to first delete any other models it is linked to")]),e._v(" "),a("li",[e._v("a placeholder types enum in included in the package that is meant to be extended as/if required")]),e._v(" "),a("li",[e._v("all "),a("code",[e._v("Company")]),e._v(" attributes are fillable")]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("uid")]),e._v(" Person attribute is meant as generic holder for a person's unique identifier which varies from situation to situation (e.g. SSN)")]),e._v(" "),a("li",[e._v("note that the "),a("code",[e._v("onDelete")]),e._v(" "),a("a",{attrs:{href:"https://github.com/laravel-liberu/DocumentsManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("DocumentsManager"),a("OutboundLink")],1),e._v(" configuration option will affect\nwhat happens to the linked documents when you attempt to delete a company.")])]),e._v(" "),a("h2",{attrs:{id:"installation-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation Steps")]),e._v(" "),a("p",[e._v("This package is already included in "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1),e._v(", so no further steps are necessary.")]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("config/liberu/companies.php")]),e._v(" configuration file, lets you customize the following:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("formTemplate")]),e._v(", - string, is the project relative path to the companies form template,\nuseful for overriding the original")]),e._v(" "),a("li",[a("code",[e._v("tableTemplate")]),e._v(", - string, is the project relative path to the companies table template,\nuseful for overriding the original")])]),e._v(" "),a("h2",{attrs:{id:"extending-the-companies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-the-companies","aria-hidden":"true"}},[e._v("#")]),e._v(" Extending the companies")]),e._v(" "),a("p",[e._v("In your project you may have the need to alter and or extend the companies structure by changing table columns.\nTo achieve this, you'd need to:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("add migration(s) to your local project, making the necessary changes")])]),e._v(" "),a("li",[a("p",[e._v("create a new template for the companies form, and declare it in the config ("),a("code",[e._v("formTemplate")]),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("create a new template for the companies table, and declare it in the config ("),a("code",[e._v("tableTemplate")]),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("create a new company request validation, ensuring it implements the "),a("code",[e._v("ValidatesCompanyRequest")]),e._v(" marker interface.")])]),e._v(" "),a("li",[a("p",[e._v("bind your local implementations to the interfaces in your local "),a("code",[e._v("AppServiceProvider")])]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    ValidatesCompanyRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" MyValidateCompanyRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"publishes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[e._v("#")]),e._v(" Publishes")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("php artisan vendor:publish --tag=companies-config")]),e._v(" - configuration file")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=companies-assets")]),e._v(" - the VueJS components")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=companies-factory")]),e._v(" - the factory for the "),a("code",[e._v("Company")]),e._v(" model")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=liberu-config")]),e._v(" - a common alias for when wanting to update the configurations,\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=liberu-assets")]),e._v(" - a common alias for when wanting to update the VueJS components,\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=liberu-factories")]),e._v(" - a common alias for when wanting to update the factories,\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")])]),e._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1),e._v(" package comes with this package included.")]),e._v(" "),a("p",[e._v("Depends on:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/activitylog",target:"_blank",rel:"noopener noreferrer"}},[e._v("ActivityLog"),a("OutboundLink")],1),e._v(" for logging operations on Documents")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/AddressesManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("AddressesManager"),a("OutboundLink")],1),e._v(" for attached addresses")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core"),a("OutboundLink")],1),e._v(" for middleware and user model")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/Discussions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discussions"),a("OutboundLink")],1),e._v(" for attached discussions")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/DocumentsManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("DocumentsManager"),a("OutboundLink")],1),e._v(" for middleware and user model")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/FormBuilder",target:"_blank",rel:"noopener noreferrer"}},[e._v("FormBuilder"),a("OutboundLink")],1),e._v(" for handling the form related operations")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/Helpers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helpers"),a("OutboundLink")],1),e._v(" for the various helper classes")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/StructureManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("Structure manager"),a("OutboundLink")],1),e._v(" for the migrations")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/VueDatatable",target:"_blank",rel:"noopener noreferrer"}},[e._v("VueDatatable"),a("OutboundLink")],1),e._v(" for the index page datatable")])])])},[],!1,null,null,null);t.default=n.exports}}]);