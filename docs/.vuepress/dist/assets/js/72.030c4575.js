(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{268:function(e,t,a){"use strict";a.r(t);var s=a(2),o=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"typeahead"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeahead","aria-hidden":"true"}},[e._v("#")]),e._v(" Typeahead")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img.shields.io/npm/l/@liberu-ui/typeahead.svg",alt:"npm license"}}),e._v(" "),a("img",{attrs:{src:"https://img.shields.io/npm/dm/@liberu-ui/typeahead.svg",alt:"npm download"}}),e._v(" "),a("img",{attrs:{src:"https://img.shields.io/github/languages/top/liberu-ui/typeahead.svg",alt:"GitHub top language"}}),e._v(" "),a("img",{attrs:{src:"https://img.shields.io/github/issues/liberu-ui/typeahead.svg",alt:"GitHub issues"}}),e._v(" "),a("img",{attrs:{src:"https://img.shields.io/npm/v/@liberu-ui/typeahead.svg",alt:"npm version"}})]),e._v(" "),a("p",[e._v("Vue Typeahead")]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("Unless where specified otherwise, the components can be used outside of the Enso ecosystem.")]),e._v(" "),a("h3",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[e._v("#")]),e._v(" Demo")]),e._v(" "),a("p",[e._v("For live examples and demos, you may visit "),a("a",{attrs:{href:"https://www.liberu.co.uk",target:"_blank",rel:"noopener noreferrer"}},[e._v("liberu.co.uk"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Install the package:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yarn add @liberu-ui/typeahead\n")])])]),a("p",[e._v("Import the desired component(s):")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" Typeahead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" EnsoTypeahead "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@liberu-ui/typeahead/bulma'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Note that this package has a couple of external dependencies.\nRead "),a("a",{attrs:{href:"https://docs.liberu.co.uk/frontend/#other-dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" for more info.")]),e._v(" "),a("h3",{attrs:{id:"exports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exports","aria-hidden":"true"}},[e._v("#")]),e._v(" Exports")]),e._v(" "),a("p",[a("code",[e._v("@liberu-ui/typeahead/bulma")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Typeahead")]),e._v(",")]),e._v(" "),a("li",[a("code",[e._v("EnsoTypeahead")]),e._v(",")])]),e._v(" "),a("p",[a("code",[e._v("@liberu-ui/typeahead/renderless")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Typeahead")]),e._v(",")])]),e._v(" "),a("h3",{attrs:{id:"bulma-liberutypeahead-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bulma-liberutypeahead-vue","aria-hidden":"true"}},[e._v("#")]),e._v(" bulma/EnsoTypeahead.vue")]),e._v(" "),a("p",[e._v("This bulma styled component built on top of its base version is\ndesigned to be used within the "),a("strong",[e._v("Enso ecosystem")]),e._v(", requiring less configuration from the dev.")]),e._v(" "),a("p",[e._v("'Passed-through' properties:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("disabled")]),e._v(" - "),a("code",[e._v("boolean")]),e._v(", optional, default "),a("code",[e._v("false")]),e._v(", if true the component is disabled")]),e._v(" "),a("li",[a("code",[e._v("isRounded")]),e._v(" - "),a("code",[e._v("boolean")]),e._v(", optional, default "),a("code",[e._v("false")]),e._v(", if true, the input is rounded")]),e._v(" "),a("li",[a("code",[e._v("noResults")]),e._v(" - "),a("code",[e._v("string")]),e._v(", optional, default "),a("code",[e._v("Nothing found...")]),e._v(", the text shown when there are no results")]),e._v(" "),a("li",[a("code",[e._v("placeholder")]),e._v(" - "),a("code",[e._v("string")]),e._v(", optional, default "),a("code",[e._v("What are you searching for today?")])]),e._v(" "),a("li",[a("code",[e._v("searching")]),e._v(" - "),a("code",[e._v("string")]),e._v(", optional, default "),a("code",[e._v("Searching...")]),e._v(", text show while searching is in progress")])]),e._v(" "),a("h3",{attrs:{id:"bulma-typeahead-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bulma-typeahead-vue","aria-hidden":"true"}},[e._v("#")]),e._v(" bulma/Typeahead.vue")]),e._v(" "),a("p",[e._v("A bulma styled typeahead component built on top of its renderless counterpart.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("typeahead")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("is-rounded")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("source")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("get/my/resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v("   \n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("@update")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("typeahead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("template")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("v-slot:")]),e._v("controls")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("{ items }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n        Controls go here\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("template")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("v-slot:")]),e._v("option")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("{ highlight, item }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n        Option styling goes here\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("typeahead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("p",[e._v("Slots:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("controls")]),e._v(", slot for any controls")]),e._v(" "),a("li",[a("code",[e._v("option")]),e._v(", slot for the typeahead results rendering")])]),e._v(" "),a("p",[e._v("Properties:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("disabled")]),e._v(" - "),a("code",[e._v("boolean")]),e._v(", optional, default "),a("code",[e._v("false")]),e._v(", if true the component is disabled")]),e._v(" "),a("li",[a("code",[e._v("isRounded")]),e._v(" - "),a("code",[e._v("boolean")]),e._v(", optional, default "),a("code",[e._v("false")]),e._v(", if true, the input is rounded")]),e._v(" "),a("li",[a("code",[e._v("noResults")]),e._v(" - "),a("code",[e._v("string")]),e._v(", optional, default "),a("code",[e._v("Nothing found...")]),e._v(", the text shown when there are no results")]),e._v(" "),a("li",[a("code",[e._v("placeholder")]),e._v(" - "),a("code",[e._v("string")]),e._v(", optional, default "),a("code",[e._v("What are you searching for today?")])]),e._v(" "),a("li",[a("code",[e._v("searching")]),e._v(" - "),a("code",[e._v("string")]),e._v(", optional, default "),a("code",[e._v("Searching...")]),e._v(", text show while searching is in progress")])]),e._v(" "),a("p",[e._v("'Passed-through' properties:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("debounce")]),e._v(" - "),a("code",[e._v("number")]),e._v(", optional, default "),a("code",[e._v("250")]),e._v(",")]),e._v(" "),a("li",[a("code",[e._v("errorHandler")]),e._v(" - "),a("code",[e._v("boolean")]),e._v(", optional, by default the error is thrown, function used to handle errors")]),e._v(" "),a("li",[a("code",[e._v("label")]),e._v(" - "),a("code",[e._v("string")]),e._v(", optional, default "),a("code",[e._v("label")]),e._v(", the attribute from the typeahead results that is used as label")]),e._v(" "),a("li",[a("code",[e._v("paginate")]),e._v(" - "),a("code",[e._v("number")]),e._v(", optional, default "),a("code",[e._v("100")]),e._v(", the pagination size")]),e._v(" "),a("li",[a("code",[e._v("params")]),e._v(" - "),a("code",[e._v("Object")]),e._v(", optional, default "),a("code",[e._v("null")]),e._v(", extra parameters that can be sent with the request")]),e._v(" "),a("li",[a("code",[e._v("query")]),e._v(" - "),a("code",[e._v("string")]),e._v(", optional, default ``, the string used for the backend query/search")]),e._v(" "),a("li",[a("code",[e._v("regExp")]),e._v(", "),a("code",[e._v("RegExp")]),e._v(", optional, default "),a("code",[e._v("/(.*?)/")]),e._v(", expression used to validate the input contents")]),e._v(" "),a("li",[a("code",[e._v("source")]),e._v(" - "),a("code",[e._v("string")]),e._v(", required, the URL used for the query/search to the back end")]),e._v(" "),a("li",[a("code",[e._v("value")]),e._v(" - "),a("code",[e._v("string")]),e._v(", optional, default ``, the value of the typeahead")])]),e._v(" "),a("h3",{attrs:{id:"renderless-typeahead-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderless-typeahead-vue","aria-hidden":"true"}},[e._v("#")]),e._v(" renderless/Typeahead.vue")]),e._v(" "),a("p",[e._v("The renderless typeahead component that can be built upon to create custom components.")]),e._v(" "),a("p",[e._v("Properties:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("debounce")]),e._v(" - "),a("code",[e._v("number")]),e._v(", optional, default "),a("code",[e._v("250")]),e._v(",")]),e._v(" "),a("li",[a("code",[e._v("errorHandler")]),e._v(" - "),a("code",[e._v("boolean")]),e._v(", optional, by default the error is thrown, function used to handle errors")]),e._v(" "),a("li",[a("code",[e._v("label")]),e._v(" - "),a("code",[e._v("string")]),e._v(", optional, default "),a("code",[e._v("label")]),e._v(", the attribute from the typeahead results that is used as label")]),e._v(" "),a("li",[a("code",[e._v("paginate")]),e._v(" - "),a("code",[e._v("number")]),e._v(", optional, default "),a("code",[e._v("100")]),e._v(", the pagination size")]),e._v(" "),a("li",[a("code",[e._v("params")]),e._v(" - "),a("code",[e._v("Object")]),e._v(", optional, default "),a("code",[e._v("null")]),e._v(", extra parameters that can be sent with the request")]),e._v(" "),a("li",[a("code",[e._v("query")]),e._v(" - "),a("code",[e._v("string")]),e._v(", optional, default ``, the string used for the backend query/search")]),e._v(" "),a("li",[a("code",[e._v("regExp")]),e._v(", "),a("code",[e._v("RegExp")]),e._v(", optional, default "),a("code",[e._v("/(.*?)/")]),e._v(", expression used to validate the input contents")]),e._v(" "),a("li",[a("code",[e._v("source")]),e._v(" - "),a("code",[e._v("string")]),e._v(", required, the URL used for the query/search to the back end")]),e._v(" "),a("li",[a("code",[e._v("value")]),e._v(" - "),a("code",[e._v("string|Object")]),e._v(", optional, default "),a("code",[e._v("null")]),e._v(", the value of the typeahead")])]),e._v(" "),a("p",[e._v("Methods:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("fetch()")]),e._v(", retrieves results from the back end")]),e._v(" "),a("li",[a("code",[e._v("update(query = '')")]),e._v(", emits an "),a("code",[e._v("input")]),e._v(" event with the given query attribute as payload")]),e._v(" "),a("li",[a("code",[e._v("clear()")]),e._v(", clears the input an the results")])]),e._v(" "),a("h2",{attrs:{id:"questions-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#questions-issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Questions & Issues")]),e._v(" "),a("p",[e._v("For questions and support please use the issues functionality\nfor this package's github repository.")]),e._v(" "),a("p",[e._v("Please make sure to search for existing issues before creating a new issue,\nand when opening a new issue, fill the required information in the issue template.")]),e._v(" "),a("p",[e._v("Issues not conforming to the guidelines may be closed immediately.")]),e._v(" "),a("h2",{attrs:{id:"depends-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#depends-on","aria-hidden":"true"}},[e._v("#")]),e._v(" Depends on")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("@fortawesome/fontawesome-svg-core")])]),e._v(" "),a("li",[a("code",[e._v("@fortawesome/free-solid-svg-icons")])]),e._v(" "),a("li",[a("code",[e._v("@fortawesome/vue-fontawesome")])]),e._v(" "),a("li",[a("code",[e._v("vue")])]),e._v(" "),a("li",[a("code",[e._v("lodash")])])]),e._v(" "),a("h2",{attrs:{id:"contributions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[e._v("#")]),e._v(" Contributions")]),e._v(" "),a("p",[e._v("are welcome. Pull requests are great, but issues are good too.")]),e._v(" "),a("p",[e._v("Thank you to all the people who already contributed to Enso!")]),e._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://opliberuurce.org/licenses/ISC",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISC"),a("OutboundLink")],1)])])},[],!1,null,null,null);t.default=o.exports}}]);