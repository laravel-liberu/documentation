(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{231:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),s("p",[s("a",{attrs:{href:"https://www.codacy.com/app/laravel-liberu/Discussions?utm_source=github.com&utm_medium=referral&utm_content=laravel-liberu/Discussions&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/a6aa6c234c4945379d7c6c143733aa43",alt:"Codacy Badge"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://github.styleci.io/repos/148976842",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.styleci.io/repos/148976842/shield?branch=master",alt:"StyleCI"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/discussions",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/discussions/license",alt:"License"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/discussions",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/discussions/downloads",alt:"Total Downloads"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/discussions",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/discussions/downloads",alt:"Total Downloads"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/discussions",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/discussions/version",alt:"Latest Stable Version"}}),s("OutboundLink")],1)]),s("p",[e._v("Discussions for "),s("a",{attrs:{href:"https://github.com/laravel-liberu/Liberu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Liberu"),s("OutboundLink")],1),e._v(".")]),s("p",[s("a",{attrs:{href:"https://laravel-liberu.github.io/discussions/videos/bulma_discussions.mp4",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://laravel-liberu.github.io/discussions/screenshots/bulma_001_thumb.png",alt:"Watch the demo"}}),s("OutboundLink")],1)]),e._m(1),e._m(2),s("ul",[s("li",[e._v("discussions are grouped around topics")]),s("li",[e._v("users can tag other users in their posts")]),s("li",[e._v("the tagged users receive notifications (WIP)")]),s("li",[e._v("users can show their appreciation for topics that they like with 'claps'")]),s("li",[e._v("powerful what-you-see-is-what-you-get text editor, based on the excellent "),s("a",{attrs:{href:"https://quilljs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quill"),s("OutboundLink")],1),e._v(" library")]),s("li",[e._v("within Liberu, the Discussions module is integrated with the Activity Log")]),s("li",[e._v("can be attached to any other model, via a polymorphic relationship")]),e._m(3),s("li",[e._v("changes to the discussions and posts are enforced through policies, where changes can be made by the original poster or an administrator")]),s("li",[e._v("uses its own suite of specialized Bulma styled VueJS components for smooth integration with the rest of the application")])]),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),s("p",[e._v("Depends on:")]),s("ul",[s("li",[s("a",{attrs:{href:"https://quilljs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quill"),s("OutboundLink")],1),e._v(" for the wysiwyg editor")])]),e._m(9),s("p",[e._v("are welcome. Pull requests are great, but issues are good too.")]),e._m(10),s("p",[e._v("This package is released under the MIT license.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"discussions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discussions","aria-hidden":"true"}},[this._v("#")]),this._v(" Discussions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("sup",[this._v("click on the photo to view a short demo in compatible browsers")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("a "),t("code",[this._v("Discussible")]),this._v(" trait is available, in order to make it easy to add discussions to a model")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("config/liberu/discussions.php")]),this._v(" configuration file, lets you customize the following:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("p",[s("code",[e._v("onDelete")]),e._v(", string, option that manages the case when the commentable entity is deleted and it has attached discussions.\nValid options are "),s("code",[e._v("cascade")]),e._v(", "),s("code",[e._v("restrict")]),e._v(" | default is "),s("code",[e._v("cascade")])]),s("p",[e._v("With the cascade option, when a discussable model is deleted, the discussions attached to it are also deleted.\nWith the restrict option,  when attempting to delete a discussable model with attached discussions, an exception is thrown.")])]),s("li",[s("p",[s("code",[e._v("loggableMorph")]),e._v(", the list of entities using the discussable functionality, each mapped to its respective loggable attribute\nFor example:")]),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'discussable'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    Company"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),s("p",[e._v("This configuration is used for activity logging.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"publishes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[this._v("#")]),this._v(" Publishes")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("php artisan vendor:publish --tag=discussions-config")]),e._v(" - configuration files")]),s("li",[s("code",[e._v("php artisan vendor:publish --tag=discussions-assets")]),e._v(" - the required js assets")]),s("li",[s("code",[e._v("php artisan vendor:publish --tag=liberu-assets")]),e._v(" - a common alias for when wanting to update the assets,\nonce a newer version is released, can be used with the "),s("code",[e._v("--force")]),e._v(" flag")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"contributions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);t.default=r.exports}}]);