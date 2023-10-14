(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{159:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("p",[e("a",{attrs:{href:"https://www.codacy.com/app/laravel-liberu/Helpers?utm_source=github.com&utm_medium=referral&utm_content=laravel-liberu/Helpers&utm_campaign=badger",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/4c084aada0bf4f70bf397338300bfc5d",alt:"Codacy Badge"}}),e("OutboundLink")],1),e("a",{attrs:{href:"https://styleci.io/repos/85466970",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://styleci.io/repos/85466970/shield?branch=master",alt:"StyleCI"}}),e("OutboundLink")],1),e("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/helpers",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/helpers/license",alt:"License"}}),e("OutboundLink")],1),e("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/helpers",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/helpers/downloads",alt:"Total Downloads"}}),e("OutboundLink")],1),e("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/helpers",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/helpers/version",alt:"Latest Stable Version"}}),e("OutboundLink")],1)]),e("p",[t._v("Helper classes dependency for "),e("a",{attrs:{href:"https://github.com/laravel-liberu/Liberu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Liberu"),e("OutboundLink")],1),t._v(".")]),e("p",[t._v("This package can work independently of the "),e("a",{attrs:{href:"https://github.com/laravel-liberu/Liberu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Liberu"),e("OutboundLink")],1),t._v(" ecosystem.")]),e("p",[t._v("For live examples and demos, you may visit "),e("a",{attrs:{href:"https://www.liberu.co.uk",target:"_blank",rel:"noopener noreferrer"}},[t._v("liberu.co.uk"),e("OutboundLink")],1)]),t._m(1),e("p",[t._v("Comes pre-installed in Liberu.")]),t._m(2),t._m(3),e("p",[t._v("The following classes, exceptions and traits are available.")]),t._m(4),t._m(5),t._m(6),e("p",[t._v("The constructor optionally takes an associate array or an object (even a Laravel model).  This parameter is used to set up the object.\nFor arrays, it uses the array keys as properties and the array values as the property values.")]),e("p",[t._v("Methods:")]),t._m(7),t._m(8),t._m(9),e("p",[t._v("Methods:")]),t._m(10),t._m(11),e("p",[t._v("Examples:")]),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),e("p",[t._v("You can actually utilize a mixed mode that may help you in some specific scenarios, such as the one given below.\nKeep in mind that if you combine the modes, the order in which they are taken into account (the priority)\nis the following:")]),t._m(19),e("p",[t._v("Now, why would you want to mix them? Consider the following scenario:")]),t._m(20),t._m(21),t._m(22),e("p",[t._v("So the conclusion is you can use both modes and have the best of both worlds.")]),t._m(23),t._m(24),e("p",[t._v("These exceptions are used throughout various Liberu packages.")]),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),e("p",[t._v("are welcome. Pull requests are great, but issues are good too.")]),t._m(30),e("p",[t._v("This package is released under the MIT license.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"helpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helpers","aria-hidden":"true"}},[this._v("#")]),this._v(" Helpers")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To install outside of Liberu: "),s("code",[this._v("composer require laravel-liberu/helpers")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classes","aria-hidden":"true"}},[this._v("#")]),this._v(" Classes")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("An abstract "),e("code",[t._v("Enum")]),t._v(" class which can be used to build an enumeration out of an array or a config file and comes with a set of helper functions")]),e("li",[t._v("An "),e("code",[t._v("Obj")]),t._v(" class, with a constructor for building an object from an array, an object, a Laravel model that can even have loaded relationships and more.\nIt provides a suite of helper functions, such as:\n"),e("ul",[e("li",[e("code",[t._v("all()")]),t._v(",")]),e("li",[e("code",[t._v("__toString()")]),t._v(",")]),e("li",[e("code",[t._v("toJson()")]),t._v(",")]),e("li",[e("code",[t._v("toArray()")]),t._v(",")]),e("li",[e("code",[t._v("get($key)")]),t._v(",")]),e("li",[e("code",[t._v("set($key, $value)")]),t._v(",")]),e("li",[e("code",[t._v("has($key)")]),t._v(",")]),e("li",[e("code",[t._v("keys()")]),t._v(",")]),e("li",[e("code",[t._v("values()")])])])]),e("li",[t._v("A "),e("code",[t._v("JsonParser")]),t._v(" class that takes a JSON file as its constructor's argument, and can parse and transform the file to:\n"),e("ul",[e("li",[t._v("object")]),e("li",[t._v("array")]),e("li",[t._v("JSON string")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"obj-laravelliberu-helpers-app-classes-obj"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#obj-laravelliberu-helpers-app-classes-obj","aria-hidden":"true"}},[this._v("#")]),this._v(" Obj - "),s("code",[this._v("LaravelLiberu\\Helpers\\app\\Classes\\Obj")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("all")]),t._v(",\n"),e("code",[t._v("__toString()")]),t._v(", returns the string representation of the object")]),e("li",[e("code",[t._v("toJson")]),t._v(", gives back the json representation of the object. Note that the String representation also gives back the same")]),e("li",[e("code",[t._v("toArray")]),t._v(", same as "),e("code",[t._v("all")]),t._v(", gives back the object's attributes and values as an associative array")]),e("li",[e("code",[t._v("get(key)")]),t._v(", returns the value of the object's 'key' property. Return 'null' if the key does not exist")]),e("li",[e("code",[t._v("set(key, value)")]),t._v(", sets the value of the object's 'key' property")]),e("li",[e("code",[t._v("has(key)")]),t._v(", returns true if the 'key' property exists on the object")]),e("li",[e("code",[t._v("filled(key)")]),t._v(", returns true if the 'key' property exists on the object and its value is not null")]),e("li",[e("code",[t._v("forget(key)")]),t._v(", unsets the 'key' property")]),e("li",[e("code",[t._v("keys")]),t._v(", gives back as array the names of the object's properties")]),e("li",[e("code",[t._v("values")]),t._v(", gives back as array the values of the object's properties")]),e("li",[e("code",[t._v("isEmpty")]),t._v(", returns true if the object does not have any properties")]),e("li",[e("code",[t._v("isNotEmpty")]),t._v(", returns true if the object has any property")]),e("li",[e("code",[t._v("count")]),t._v(", returns the number of the object's properties")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"enum-laravelliberu-helpers-app-classes-enum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enum-laravelliberu-helpers-app-classes-enum","aria-hidden":"true"}},[this._v("#")]),this._v(" Enum - "),s("code",[this._v("LaravelLiberu\\Helpers\\app\\Classes\\Enum")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Is an abstract class that provides enumeration like capabilities, that is meant to be extended\nand may then be used in 3 modes:\na) when given a static 'data' parameter, which should be an associative array\nb) when declaring constants on the class\nc) when overriding the static "),s("code",[this._v("attributes()")]),this._v(" method, which should also return an associative array")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("get(key)")]),t._v(", returns the value of that Enum key")]),e("li",[e("code",[t._v("has(key)")]),t._v(", returns true if the Enum has that key")]),e("li",[e("code",[t._v("keys")]),t._v(", returns the list of keys, from the data property")]),e("li",[e("code",[t._v("values")]),t._v(", returns the list of values, from the data property")]),e("li",[e("code",[t._v("all")]),t._v(", returns a translated associative array representation of the enumeration;")]),e("li",[e("code",[t._v("json")]),t._v(", returns a translated json representation of the enumeration;")]),e("li",[e("code",[t._v("array")]),t._v(", returns a translated array representation of the enumeration;")]),e("li",[e("code",[t._v("collection")]),t._v(", returns a translated Laravel collection representation of the enumeration;")]),e("li",[e("code",[t._v("select")]),t._v(", returns a translated Liberu VueSelect representation of the enumeration - array of objects,\neach object with the "),e("code",[t._v("id")]),t._v(" and "),e("code",[t._v("name")]),t._v(" attribute;")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If used in mode a), it will give back the list of constants and their values.\nIf used in mode b), it will give back the data attribute.\nIf used in mode c), it will give back the array you build in the overwritten "),s("code",[this._v("attributes()")]),this._v(" method")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"constants"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constants","aria-hidden":"true"}},[this._v("#")]),this._v(" Constants")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SeniorityEnum")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Enum")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Assistant "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Associate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Staff "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Senior "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Partner "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SeniorityEnum"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Assistant"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$seniorityTypes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SeniorityEnum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"data-attribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-attribute","aria-hidden":"true"}},[this._v("#")]),this._v(" Data attribute")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SeniorityEnum")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Enum")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'assistant'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'associate'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'staff'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'senior'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'partner'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SeniorityEnum"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'assistant'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$seniorityTypes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SeniorityEnum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"attributes-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes-method","aria-hidden":"true"}},[this._v("#")]),this._v(" Attributes method")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SeniorityEnum")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Enum")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" method "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Seniority"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pluck")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toArray")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SeniorityEnum"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'assistant'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$seniorityTypes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SeniorityEnum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"mixed-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixed-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Mixed mode")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("$data")])]),s("li",[s("code",[this._v("attributes()")])]),s("li",[s("code",[this._v("constants")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SeniorityEnum")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Enum")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Assistant "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Associate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Staff "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Senior "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" BigChief "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Assistant "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'assistant'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Associate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'associate'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Staff "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'staff'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Senior "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'senior'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("BigChief "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'BIG chief'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SeniorityEnum"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("BigChief"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$seniorityTypes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SeniorityEnum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Here if you only configured the enumeration using "),e("em",[t._v("constants")]),t._v(", it would work, BUT, in the select,\nthe values would be shown as "),e("code",[t._v("Assistant,.., BigChief")]),t._v(". That's fine if it works for you, but what if\nyou want to display "),e("code",[t._v("BIG chief")]),t._v(" instead of "),e("code",[t._v("BigChief")]),t._v("? You can't.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you go the other route, and not use constants, but use just "),s("em",[this._v("data")]),this._v(", you can have "),s("code",[this._v("BIG chief")]),this._v(" formatted accordingly,\nbut throughout the code you have to use "),s("code",[this._v("SeniorityEnum::get('BIG chief')")]),this._v(" which works, but is error prone.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exceptions","aria-hidden":"true"}},[this._v("#")]),this._v(" Exceptions")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v("A generic exception: "),e("code",[t._v("LiberuException")]),t._v(" is available also with a Facade.\nThis exception is extended by all the other Liberu specific exceptions and it is not reported\nby the Laravel's Exception Handler.")])]),e("li",[e("p",[t._v("A "),e("code",[t._v("FileMissingException")]),t._v(", a child of "),e("code",[t._v("LiberuException")])])]),e("li",[e("p",[t._v("A "),e("code",[t._v("JsonParseException")]),t._v(", a child of "),e("code",[t._v("LiberuException")])])]),e("li",[e("p",[t._v("A "),e("code",[t._v("MorphableConfigException")]),t._v(", a child of "),e("code",[t._v("LiberuException")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"traits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#traits","aria-hidden":"true"}},[this._v("#")]),this._v(" Traits")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"activestate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activestate","aria-hidden":"true"}},[this._v("#")]),this._v(" ActiveState")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Adds the following methods for models that have a boolean "),s("code",[this._v("is_active")]),this._v(" property:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("whereActive()")]),t._v(" scope")]),e("li",[e("code",[t._v("whereDisabled()")]),t._v(" scope")]),e("li",[e("code",[t._v("isActive()")]),t._v(" helper")]),e("li",[e("code",[t._v("isDisabled()")]),t._v(" helper")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"contributions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);s.default=n.exports}}]);