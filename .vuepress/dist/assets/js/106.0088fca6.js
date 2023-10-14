(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{247:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-liberu/Rememberable?utm_source=github.com&utm_medium=referral&utm_content=laravel-liberu/Rememberable&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/2eba208ec82d485786715915ec75f8bf",alt:"Codacy Badge"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://styleci.io/repos/90758167",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://styleci.io/repos/90758167/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/rememberable",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/rememberable/license",alt:"License"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/rememberable",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/rememberable/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/rememberable",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/rememberable/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),a("p",[e._v("Model caching for Laravel")]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Liberu Core"),a("OutboundLink")],1),e._v(" package comes with this package included.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"rememberable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rememberable","aria-hidden":"true"}},[this._v("#")]),this._v(" Rememberable")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#details","aria-hidden":"true"}},[this._v("#")]),this._v(" Details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("comes with 2 traits that provide helper methods for quick and easy caching usage (setting and retrieving)")]),t("li",[this._v("the cache lifetime may be set per model, else, if not set, the per-project setting is used, finally falling back to a default of 60 minutes if neither option is available")]),t("li",[this._v("uses the Laravel "),t("code",[this._v("cache()")]),this._v(" helper method so is transparent to the cache mechanism/implementation")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"simple-use-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-use-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Simple Use Example")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[a("p",[e._v("Use the "),a("code",[e._v("Rememberable")]),e._v(" trait in the CachedModel that you want to track")])]),a("li",[a("p",[e._v("The default caching duration is 60 minutes. If you need to change it add a "),a("code",[e._v("protected property $cacheLifetime = 123;")]),e._v(" in your CachedModel")])]),a("li",[a("p",[e._v("In the RemoteModel where you have a "),a("code",[e._v("belongsTo")]),e._v(" relationship to the CachedModel use the "),a("code",[e._v("CacheReader")]),e._v(" trait.")])]),a("li",[a("p",[e._v("Define a method in the RemoteModel as below:")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getCachedModel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getModelFromCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        CachedModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("cached_model_id")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"5"}},[t("li",[this._v("You can even call nested relations like this:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$remoteModel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getCachedModel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getAnotherCachedModel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("chainOtherRelationsOrMethods")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Note: The "),t("code",[this._v("RememberableException")]),this._v(" is thrown if attempting to use the "),t("code",[this._v("CacheReader")]),this._v(" without adding the "),t("code",[this._v("Rememberable")]),this._v(" trait")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("Rememberable")]),this._v(" trait takes care of adding to cache the tracked models on creation, refreshing the cache whenever models are updated and clearing the cache on models deletion.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The key used for caching a model is obtained by concatenating the model's fully qualified class name, a colon mark and the id. E.g.: "),t("code",[this._v("App\\User:1")]),this._v(" is the key for a user with the id of 1. You can also do "),t("code",[this._v("cache()->get('App\\User:1')")]),this._v(" if you don't want to use the retrieving helper.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In projects based on Liberu you may set the global cache lifetime in the "),t("code",[this._v("config/liberu/config.php")]),this._v(" file directly, or\nby adding/setting the "),t("code",[this._v("CACHE_LIFETIME")]),this._v(" key in you "),t("code",[this._v(".env")]),this._v(" file (recommended).")])}],!1,null,null,null);t.default=r.exports}}]);