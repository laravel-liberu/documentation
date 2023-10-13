(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{217:function(e,t,s){"use strict";s.r(t);var a=s(0),i=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._m(1),s("p",[e._v("The standard Laravel authentication is used, via email & password")]),e._m(2),s("p",[e._v("Since we wanted to log data about our users and their requests, as well as check various permissions, the concept of a\n'truly' stateless and secure API backend becomes impossible.")]),s("p",[e._v("From a security standpoint we did not feel that a RESTful would not be more secure but probably even less safe.")]),s("p",[e._v("Finally, from our own internal tests we concluded that we had no performance issues related to having the\napplication stateful, especially since we don't aim to build applications of Twitter's scale.")]),s("p",[e._v("In conclusion, even though at a point during the development we had the back-end set up as an API using JWT,\nin the end we designed it stateful since session is stored in the DB or in files, depending on your chosen setup.")]),e._m(3),s("p",[e._v("Since Enso is built on top of a Laravel back-end, we are using the provided session management")]),e._m(4),s("p",[e._v("Laravel is using HttpOnly cookies and an additional CSRF token. This provides protection against both XSS and CSRF attacks")]),e._m(5),e._m(6),s("p",[e._v("Various configuration options are available for the user's password such as lifetime,\nminimum number of characters and more. Please check out the specifics by taking a look at the\n"),s("a",{attrs:{href:"https://docs.liberu.co.uk/packages/core.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("core"),s("OutboundLink")],1),e._v(" documentation page.")]),e._m(7),e._m(8),e._m(9),s("ul",[e._m(10),s("li",[e._v("the "),s("code",[e._v("core")]),e._v(" group contains the middleware below, presented in the order they're applied:\n"),s("ul",[e._m(11),e._m(12),e._m(13),s("li",[s("code",[e._v("impersonate")]),e._v(" - starts and stops the "),s("a",{attrs:{href:"https://github.com/laravel-liberu/Impersonate",target:"_blank",rel:"noopener noreferrer"}},[e._v("impersonation"),s("OutboundLink")],1),e._v(" of a user, when needed")]),s("li",[s("code",[e._v("set-language")]),e._v(" - sets the user's chosen language ("),s("a",{attrs:{href:"https://github.com/laravel-liberu/Localisation",target:"_blank",rel:"noopener noreferrer"}},[e._v("localisation"),s("OutboundLink")],1),e._v(")")])])])]),s("h2",{attrs:{id:"usergroups-roles-users"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usergroups-roles-users","aria-hidden":"true"}},[e._v("#")]),e._v(" UserGroups, "),s("a",{attrs:{href:"https://github.com/laravel-liberu/RoleManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("Roles"),s("OutboundLink")],1),e._v(" & Users")]),e._m(14),e._m(15),s("p",[e._v("The mechanism allows saving and loading of the user's preferences for several aspects of the application.")]),e._m(16),e._m(17),s("p",[e._v("Are loaded at application load, and refreshed as needed")]),e._m(18),e._m(19),e._m(20),e._m(21),e._m(22),e._m(23)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"under-the-hood"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood","aria-hidden":"true"}},[this._v("#")]),this._v(" Under the Hood")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authentication","aria-hidden":"true"}},[this._v("#")]),this._v(" Authentication")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"stateful-vs-stateless"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stateful-vs-stateless","aria-hidden":"true"}},[this._v("#")]),this._v(" Stateful vs Stateless")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"session-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Session management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security","aria-hidden":"true"}},[this._v("#")]),this._v(" Security")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("Keep in mind")]),t("p",[this._v("When working with VueJS, the v-html directive is XSS vulnerable, so it should be used only with sanitized/safe data")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"authentication-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authentication-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Authentication")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"authorization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authorization","aria-hidden":"true"}},[this._v("#")]),this._v(" Authorization")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("application wide, checking user status: active/inactive. The check is made for every request, via a middleware. The inactive status prevents the user from logging in and making requests. If an user becomes inactive while he's still logged in, at his next request he'll be logged out and redirected to the login page with a notification")]),t("li",[this._v("application-section wide, via the menu's visibility, depending on the user's role. The users that don't have access to a certain menu, can't see it. This level doesn't block access to the routes, it just affects the visibility of the menus")]),t("li",[this._v("application-section wide, depending on permitted access to routes, which is tied to the user's role and the associated permissions for that role. The check is made for each request, via a middleware. If the user is not allowed on a route a 403 response is given back and a "),t("code",[this._v("laravel.log")]),this._v(" entry is made.")]),t("li",[this._v("content specific, via gates & policies. The check is made locally, when and where gates & policies are used")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"middleware-middleware-groups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#middleware-middleware-groups","aria-hidden":"true"}},[this._v("#")]),this._v(" Middleware & Middleware Groups")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("for the routes within the application, the "),t("code",[this._v("core")]),this._v(" middleware group is applied")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("verify-active-state")]),this._v(" - checks users's status (active/inactive)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("action-logger")]),this._v(" - logs for each request the user's id, route, url, the HTTP verb and the timestamps")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("verify-route-access")]),this._v(" - authorizes the access to a route")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("users represent the operators using the application")]),s("li",[e._v("roles are collections of permissions")]),s("li",[e._v("user groups (previously owners) can represent departments, types, and even companies")]),s("li",[e._v("an user group can have many users")]),s("li",[e._v("an user group can have many roles")]),s("li",[e._v("an user has "),s("strong",[e._v("just one user group")]),e._v(" and "),s("strong",[e._v("just one role")])]),s("li",[e._v("the role of a user may only be one of the roles available for its user group")]),s("li",[e._v("users have an active or inactive status, where inactive users cannot login or make requests in the application (but can set/reset their password)")]),s("li",[e._v("the "),s("code",[e._v("Role")]),e._v(" model contains the "),s("code",[e._v("AdminId")]),e._v(" and "),s("code",[e._v("SupervisorId")]),e._v(" constants that determine who\nthe administrator and supervisor roles are")]),s("li",[e._v("the "),s("code",[e._v("UserGroup")]),e._v(" model contains the "),s("code",[e._v("AdminGroupId")]),e._v(" constant that is used to determine which is the Administrator\nuser group")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"preferences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preferences","aria-hidden":"true"}},[this._v("#")]),this._v(" Preferences")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("the preferences can be updated from the right-hand sidebar. From there the user can also reset the preferences to default.")]),s("li",[e._v("the user's preferences are stored in the "),s("code",[e._v("preferences")]),e._v(" table, under "),s("code",[e._v("value")]),e._v(" column, in JSON format.")]),s("li",[e._v("list of preferences\n"),s("ul",[s("li",[s("code",[e._v("lang")]),e._v(" - the user's language")]),s("li",[s("code",[e._v("theme")]),e._v(" - the currently selected theme")]),s("li",[s("code",[e._v("expandedMenu")]),e._v(" - the menu state, defaults "),s("code",[e._v("true")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"translations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#translations","aria-hidden":"true"}},[this._v("#")]),this._v(" Translations")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environment","aria-hidden":"true"}},[this._v("#")]),this._v(" Environment")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("config\n"),t("ul",[t("li",[this._v("within the configuration liberu folder "),t("code",[this._v("config/liberu")]),this._v(" you'll find configuration files for the various laravel-liberu packages")]),t("li",[this._v("inside 'config.php' various options may be set, such as the folders used for storing uploads, avatars, etc. the caching duration and the timestamps format when displaying them, the app version displayed in the footer and more")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"telemetry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#telemetry","aria-hidden":"true"}},[this._v("#")]),this._v(" Telemetry")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("the implicit "),t("code",[this._v("login")]),this._v(" event that Laravel fires on a user's login triggers a listener that stores the user's ip, user-agent and timestamps inside the "),t("code",[this._v("logins")]),this._v(" table")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"exceptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exceptions","aria-hidden":"true"}},[this._v("#")]),this._v(" Exceptions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("when needed, the exceptions thrown are as specific as possible")]),t("li",[this._v("since requests are supposed to be ajax, JSON responses are given back")])])}],!1,null,null,null);t.default=i.exports}}]);