(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{300:function(e,t,a){"use strict";a.r(t);var r=a(2),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"people"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#people","aria-hidden":"true"}},[e._v("#")]),e._v(" People")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-liberu/People?utm_source=github.com&utm_medium=referral&utm_content=laravel-liberu/People&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/aa76029e3e4c471d91370e29534f436f",alt:"Codacy Badge"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.styleci.io/repos/151952913",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.styleci.io/repos/151952913/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/people",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/people/license",alt:"License"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/people",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/people/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/people",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/people/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Person management dependency for "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://laravel-liberu.github.io/people/screenshots/bulma_001.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-liberu.github.io/people/screenshots/bulma_001_thumb.png",alt:"Screenshot"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://laravel-liberu.github.io/people/screenshots/bulma_002.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-liberu.github.io/people/screenshots/bulma_002_thumb.png",alt:"Screenshot"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("sup",[e._v("click on the photo to view a large size screenshot")])]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("separates the people centric operations from the core application user model")]),e._v(" "),a("li",[e._v("allows the management of people and their details")]),e._v(" "),a("li",[e._v("integrates with and extends the application user")]),e._v(" "),a("li",[e._v("is built upon the premise that all the application users are people, but some people may not be application users")]),e._v(" "),a("li",[e._v("can be reused and integrated with other modules which might handle categories of people (e.g. company people)")]),e._v(" "),a("li",[e._v("a "),a("code",[e._v("PersonFactory")]),e._v(" is included by default in the package")]),e._v(" "),a("li",[e._v("a policy is used to ensure that a person email update cannot be performed if the person is linked to an user")]),e._v(" "),a("li",[e._v("custom validations may be added through the package configuration")]),e._v(" "),a("li",[e._v("the people server-side select functionality is included by default")]),e._v(" "),a("li",[e._v("the included "),a("code",[e._v("IsPerson")]),e._v(" trait can be used on other models that have a "),a("code",[e._v("person")]),e._v(" relationship and require email synchronization")]),e._v(" "),a("li",[e._v("enums are used for person genders and titles")])]),e._v(" "),a("h2",{attrs:{id:"backstory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backstory","aria-hidden":"true"}},[e._v("#")]),e._v(" Backstory")]),e._v(" "),a("p",[e._v("In previous Enso versions, there was no common ground between application users and\nother categories of actors which also represented people, for example contacts and (some types of) clients.\nThis sometimes lead to duplicated data as well as brittle and non reusable types and relationships.")]),e._v(" "),a("p",[e._v("In order to move towards better maintainability, the decision to move common data into persons was taken.\nNow the people structure can be reused as needed.")]),e._v(" "),a("h2",{attrs:{id:"under-the-hood"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood","aria-hidden":"true"}},[e._v("#")]),e._v(" Under the Hood")]),e._v(" "),a("ul",[a("li",[e._v("the model comes with a  "),a("code",[e._v("hasUser")]),e._v(" helper to check if this person is linked to an user")]),e._v(" "),a("li",[e._v("once the person has activity in the system (through any other model relationship), it cannot be deleted")]),e._v(" "),a("li",[e._v("the proper way to delete a person is to first delete any other models it is linked to")]),e._v(" "),a("li",[e._v("since an application user will always be a person, and for Laravel authentication purposes,\nthe user is supposed to have an email address and so the 'synchronization' between the user and the person is required.\nTherefore, if the user email is updated, the person email is also updated.\nThe same thing happens if a user is created from a person, but a different email is set.")]),e._v(" "),a("li",[e._v("note that if users are created through a separate/external mechanism you will need to ensure that a corresponding\nperson is created/available during the process")]),e._v(" "),a("li",[e._v("all "),a("code",[e._v("Person")]),e._v(" attributes are fillable")]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("uid")]),e._v(" Person attribute is meant as generic holder for a person's unique identifier\nwhich varies from situation to situation (e.g. SSN)")]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("Person")]),e._v(" model has the following helpers:\n"),a("ul",[a("li",[a("code",[e._v("hasUser")]),e._v(" - returns true if this person is associated to a user")]),e._v(" "),a("li",[a("code",[e._v("gender")]),e._v(" - determines the gender based on the set person title. If no title is set, null is returned")]),e._v(" "),a("li",[a("code",[e._v("isMandatary")]),e._v(" - returns true if this user is set a company's mandatary")])])]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("PersonPolicy")]),e._v(" ensures that:\n"),a("ul",[a("li",[e._v("administrators can make any changes")]),e._v(" "),a("li",[e._v("a user can only set a")])])])]),e._v(" "),a("h2",{attrs:{id:"installation-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation Steps")]),e._v(" "),a("p",[e._v("This package is already included in "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1),e._v(", so no further steps are necessary.")]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("config/liberu/people.php")]),e._v(" configuration file, lets you customize the following:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("formTemplate")]),e._v(", - string, is the project relative path to the person form template,\nuseful for overriding the original")]),e._v(" "),a("li",[a("code",[e._v("tableTemplate")]),e._v(", - string, is the project relative path to the person table template,\nuseful for overriding the original")])]),e._v(" "),a("h2",{attrs:{id:"extending-the-people"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-the-people","aria-hidden":"true"}},[e._v("#")]),e._v(" Extending the people")]),e._v(" "),a("p",[e._v("In your project you may have the need to alter and or extend the people structure by adding/removing table columns.\nTo achieve this, you'd need to:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("add migration(s) to your local project, making the necessary changes. Note that if using sqlite for testing,\nsome of the migration commands may not be available")])]),e._v(" "),a("li",[a("p",[e._v("create a new template for the person form, and declare it in the config ("),a("code",[e._v("formTemplate")]),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("create a new template for the person table, and declare it in the config ("),a("code",[e._v("tableTemplate")]),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("create a new company request validation, ensuring it implements the "),a("code",[e._v("ValidatesPersonRequest")]),e._v(" marker interface")])]),e._v(" "),a("li",[a("p",[e._v("bind your local implementations to the interfaces in your local "),a("code",[e._v("AppServiceProvider")])]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    ValidatesPersonRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" MyValidatePersonRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"publishes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[e._v("#")]),e._v(" Publishes")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("php artisan vendor:publish --tag=people-config")]),e._v(" - configuration file")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=people-assets")]),e._v(" - the VueJS components")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=people-factory")]),e._v(" - the factory for the "),a("code",[e._v("Person")]),e._v(" model")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=liberu-config")]),e._v(" - a common alias for when wanting to update the config,\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=liberu-assets")]),e._v(" - a common alias for when wanting to update the VueJS components,\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=liberu-factories")]),e._v(" - a common alias for when wanting to update the factories,\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")])]),e._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1),e._v(" package comes with this package included.")]),e._v(" "),a("p",[e._v("Depends on:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/activitylog",target:"_blank",rel:"noopener noreferrer"}},[e._v("ActivityLog"),a("OutboundLink")],1),e._v(" for logging operations on Documents")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core"),a("OutboundLink")],1),e._v(" for middleware and user model")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/FormBuilder",target:"_blank",rel:"noopener noreferrer"}},[e._v("FormBuilder"),a("OutboundLink")],1),e._v(" for handling the form related operations")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/Helpers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helpers"),a("OutboundLink")],1),e._v(" for the various helper classes")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/StructureManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("Structure manager"),a("OutboundLink")],1),e._v(" for the migrations")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/TrackWho",target:"_blank",rel:"noopener noreferrer"}},[e._v("TrackWho"),a("OutboundLink")],1),e._v(" for keeping track of the users making the changes to each contact")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/VueDatatable",target:"_blank",rel:"noopener noreferrer"}},[e._v("VueDatatable"),a("OutboundLink")],1),e._v(" for the index page datatable")])])])},[],!1,null,null,null);t.default=o.exports}}]);