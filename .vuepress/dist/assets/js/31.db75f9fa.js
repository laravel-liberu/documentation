(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{172:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/PermissionManager?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/PermissionManager&utm_campaign=badger",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/4ec2d18588a64875aa432c9a827a1849",alt:"Codacy Badge"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://styleci.io/repos/94779938",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://styleci.io/repos/94779938/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/permissionmanager",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/permissionmanager/license",alt:"License"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/permissionmanager",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/permissionmanager/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/permissionmanager",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/permissionmanager/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),a("p",[e._v("Permission Manager dependency for "),a("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1)]),a("p",[e._v("This package works exclusively within the "),a("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Enso"),a("OutboundLink")],1),e._v(" ecosystem.")]),a("p",[e._v("The front end assets that utilize this api are present in the "),a("a",{attrs:{href:"https://github.com/enso-ui/ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("ui"),a("OutboundLink")],1),e._v(" package.")]),a("p",[e._v("For live examples and demos, you may visit "),a("a",{attrs:{href:"https://www.liberu.co.uk",target:"_blank",rel:"noopener noreferrer"}},[e._v("liberu.co.uk"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"https://laravel-enso.github.io/permissionsmanager/screenshots/bulma_029.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-enso.github.io/permissionsmanager/screenshots/bulma_029_thumb.png",alt:"Screenshot"}}),a("OutboundLink")],1)]),e._m(1),a("p",[e._v("Comes pre-installed in Enso.")]),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),a("p",[e._v("are welcome. Pull requests are great, but issues are good too.")]),e._m(10),a("p",[e._v("This package is released under the MIT license.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"permission-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permission-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Permission Manager")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("permissions are managed based on the user role")]),a("li",[e._v("allows creating, updating and deleting of permissions for each route")]),a("li",[e._v("has the "),a("code",[e._v("access-route")]),e._v(" policy which can be used to check if the a user is authorized on a given route")]),a("li",[e._v("comes with the "),a("code",[e._v("VerifyRouteAccess")]),e._v(" middleware that checks against unauthorized access")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("inside "),a("code",[e._v("web.php")]),e._v(" there is a route for each action within the application, and each route has the "),a("code",[e._v("name")]),e._v(" attribute defined")]),a("li",[e._v("for each route where we need to have authorization checks, we must define a permission, permission which needs to have the same name as the route")]),a("li",[e._v("routes:\n"),a("ul",[a("li",[e._v("are nested, the resulting name looking something like "),a("code",[e._v("group1.group2...route")])]),a("li",[e._v("when creating new routes, be sure to follow the Enso convention and use camelCase ("),a("code",[e._v("myGroup.myRoute")]),e._v(") instead of snake_case("),a("code",[e._v("my_group.my_route")]),e._v(") or mix-n-matching.\nThis will make for a more consistent feel and also ensure the Enso logic will work as designed.")])])]),a("li",[e._v("for each request we check the existence of the link between the user's role and the permission for the request's route")]),a("li",[e._v("permissions' attributes:\n"),a("ul",[a("li",[e._v("name: see above")]),a("li",[e._v("description - is human readable and is used when displaying a user's action history (on his profile page)")]),a("li",[e._v("type - may be "),a("code",[e._v("read")]),e._v(" or "),a("code",[e._v("write")]),e._v(" and is an informative flag")]),a("li",[e._v("is_default - flag which lets us know if a permission needs to be automatically allotted to any new role we create")])])]),a("li",[e._v("for routes where we don't need to have authorization checks, permissions are not mandatory, "),a("strong",[e._v("BUT")])]),a("li",[e._v("if we want to log and display the users' actions, permissions become necessary, as they're used when displaying statistics")]),a("li",[e._v("permissions are automatically grouped together, based on their segments, in the UI, for presentation and functional purposes, so\nadministrators can easily configure roles")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"publishes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[this._v("#")]),this._v(" Publishes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("once a newer version is released, usually used with the "),t("code",[this._v("--force")]),this._v(" flag")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("php artisan vendor:publish --tag=permissions-factory")]),e._v(" - the factory for the "),a("code",[e._v("Permission")]),e._v(" model")]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=enso-factories")]),e._v(" - a common alias for when wanting to update the factories,\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"contributions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);t.default=s.exports}}]);