(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{232:function(e,t,a){"use strict";a.r(t);var r=a(2),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notifications","aria-hidden":"true"}},[e._v("#")]),e._v(" Notifications")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-liberu/Notifications?utm_source=github.com&utm_medium=referral&utm_content=laravel-liberu/Notifications&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/950c5954bb654bb588061a3f793f4697",alt:"Codacy Badge"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.styleci.io/repos/85684795",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.styleci.io/repos/85684795/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/notifications",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/notifications/license",alt:"License"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/notifications",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/notifications/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/notifications",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/notifications/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Notifications functionality dependency for "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Liberu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Liberu"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("This package works exclusively within the "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Liberu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Liberu"),a("OutboundLink")],1),e._v(" ecosystem.")]),e._v(" "),a("p",[e._v("The front end assets that utilize this api are present in the "),a("a",{attrs:{href:"https://github.com/liberu-ui/ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("ui"),a("OutboundLink")],1),e._v(" package.")]),e._v(" "),a("p",[e._v("For live examples and demos, you may visit "),a("a",{attrs:{href:"https://www.liberu.co.uk",target:"_blank",rel:"noopener noreferrer"}},[e._v("liberu.co.uk"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://laravel-liberu.github.io/notifications/videos/bulma_demo_01.webm",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-liberu.github.io/notifications/screenshots/bulma_033_thumb.png",alt:"Watch the demo"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("sup",[e._v("click on the photo to view a short demo in compatible browsers")])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Comes pre-installed in Liberu.")]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("uses "),a("a",{attrs:{href:"https://pusher.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pusher"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://laravel.com/docs/5.5/broadcasting",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel's notification infrastructure"),a("OutboundLink")],1),e._v(" to bring minimal-setup notification functionality")]),e._v(" "),a("li",[e._v("users can also be notified via email")]),e._v(" "),a("li",[e._v("allows the lazy loading of notifications")]),e._v(" "),a("li",[e._v("read and unread notifications are visually differentiated and can be manually/automatically marked as read, as well as cleared")]),e._v(" "),a("li",[e._v("polymorphic relationships are used, in order to be able to attach notifications to any entity")]),e._v(" "),a("li",[e._v("supports and uses Desktop Notifications if allowed by the user")])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("If not registered already, register on "),a("a",{attrs:{href:"https://pusher.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pusher"),a("OutboundLink")],1),e._v(" and then set your credentials in your "),a("code",[e._v(".env")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("BROADCAST_DRIVER"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("pusher\nPUSHER_APP_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\nPUSHER_APP_KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\nPUSHER_APP_SECRET"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n")])])]),a("p",[e._v("Once set, these credentials are set during the application init phase.")]),e._v(" "),a("h2",{attrs:{id:"desktop-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#desktop-notifications","aria-hidden":"true"}},[e._v("#")]),e._v(" Desktop Notifications")]),e._v(" "),a("p",[e._v("On the first web application page load, the app will ask the user whether he wants to allow or block Desktop Notifications.")]),e._v(" "),a("p",[e._v("If enabled, Desktop Notifications are used for any and all notifications that are received when the application is open\nin a tab but the tab is not visible, the web browser is minimized, etc.\nIf any notifications are received while the web application tab is active, Desktop Notifications will not be created - regular toaster notifications will be shown instead.")]),e._v(" "),a("p",[e._v("When clicking on a desktop notification, the browser will switch to the web application's tab.")]),e._v(" "),a("h2",{attrs:{id:"contributions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[e._v("#")]),e._v(" Contributions")]),e._v(" "),a("p",[e._v("are welcome. Pull requests are great, but issues are good too.")]),e._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("p",[e._v("This package is released under the MIT license.")])])},[],!1,null,null,null);t.default=s.exports}}]);