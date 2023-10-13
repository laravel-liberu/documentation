(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{284:function(e,t,a){"use strict";a.r(t);var n=a(2),o=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"comments-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comments-manager","aria-hidden":"true"}},[e._v("#")]),e._v(" Comments Manager")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-liberu/CommentsManager?utm_source=github.com&utm_medium=referral&utm_content=laravel-liberu/CommentsManager&utm_campaign=badger",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/d96ab52d782d46b9a94e00ea6059b34c",alt:"Codacy Badge"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://styleci.io/repos/85583597",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://styleci.io/repos/85583597/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/liberu.co.ukmentsmanager",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/liberu.co.ukmentsmanager/license",alt:"License"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/liberu.co.ukmentsmanager",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/liberu.co.ukmentsmanager/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/liberu.co.ukmentsmanager",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/liberu.co.ukmentsmanager/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Comments Manager for "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://laravel-liberu.github.io/commentsmanager/videos/bulma_demo_01.webm",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-liberu.github.io/commentsmanager/screenshots/bulma_018_thumb.png",alt:"Watch the demo"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("sup",[e._v("click on the photo to view a short demo in compatible browsers")])]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("p",[e._v("The package offers a quick and easy flow for adding comments to any model.")]),e._v(" "),a("ul",[a("li",[e._v("gives the possibility to add, update and delete comments")]),e._v(" "),a("li",[e._v("has the option of tagging other users in the comments using "),a("code",[e._v("@")]),e._v(" and the user name")]),e._v(" "),a("li",[e._v("users are notified via push "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Notifications",target:"_blank",rel:"noopener noreferrer"}},[e._v("Notifications"),a("OutboundLink")],1),e._v(" when they are tagged")]),e._v(" "),a("li",[e._v("uses its own policies to ensure users edit comments only when they are allowed to do so")]),e._v(" "),a("li",[e._v("uses "),a("a",{attrs:{href:"https://github.com/laravel-liberu/TrackWho",target:"_blank",rel:"noopener noreferrer"}},[e._v("TrackWho"),a("OutboundLink")],1),e._v(" to keep track of the users that are posting comments")]),e._v(" "),a("li",[e._v("depends on "),a("a",{attrs:{href:"https://github.com/laravel-liberu/AvatarManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avatar Manager"),a("OutboundLink")],1),e._v(" to display user avatars, when available")]),e._v(" "),a("li",[e._v("uses a light, internal mechanism for tagged user auto-completion")])]),e._v(" "),a("h2",{attrs:{id:"under-the-hood"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood","aria-hidden":"true"}},[e._v("#")]),e._v(" Under the Hood")]),e._v(" "),a("ul",[a("li",[e._v("polymorphic relationships are used, which makes it possible to attach comments to any other entity")]),e._v(" "),a("li",[e._v("within the entity to which we want to attach comments, we must use the "),a("code",[e._v("Commentable")]),e._v(" trait")])]),e._v(" "),a("h2",{attrs:{id:"installation-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation Steps")]),e._v(" "),a("p",[e._v("The component is already included in the Enso install and should not require any additional installation steps.")]),e._v(" "),a("h2",{attrs:{id:"use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[e._v("#")]),e._v(" Use")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Add the "),a("code",[e._v("Commentable")]),e._v(" trait in the Model to which you need to add comments.\nYou can then use the "),a("code",[e._v("$model->comments")]),e._v(" relationship")])]),e._v(" "),a("li",[a("p",[e._v("Since users post comments, and users can tag other users, the "),a("code",[e._v("User")]),e._v(" model has the "),a("code",[e._v("Comments")]),e._v(" trait,\nwhich gives you access to the user's comments, as well as the comments he's tagged in")])]),e._v(" "),a("li",[a("p",[e._v("If you need to customize the "),a("code",[e._v("CommentTagNotification")]),e._v(" you need to publish it first with\n"),a("code",[e._v("php artisan vendor:publish --tag=comments-notification")])])]),e._v(" "),a("li",[a("p",[e._v("Include the component in your pages/components")]),e._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("comments")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("modelId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("modelClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":paginate")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("comments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("p",[e._v("Note: you may substitute the comments component with the comments-card component as the two share the main properties\nand the comments-card is a card wrapper for the bare comments component.")])])]),e._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("h3",{attrs:{id:"commentscard-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commentscard-vue","aria-hidden":"true"}},[e._v("#")]),e._v(" CommentsCard.vue")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("open")]),e._v(" - boolean, flag, makes the component start collapsed or open | default is "),a("code",[e._v("false")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("id")]),e._v(" - number, the id of the commentable model | required")]),e._v(" "),a("li",[a("code",[e._v("type")]),e._v(" - string, the commentable model class | required")]),e._v(" "),a("li",[a("code",[e._v("title")]),e._v(" - string, title for the component | default is "),a("code",[e._v("''")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("icon")]),e._v(" - string, font awesome icon class | default is "),a("code",[e._v("'faComments'")]),e._v(" | (optional)")])]),e._v(" "),a("h3",{attrs:{id:"comments-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comments-vue","aria-hidden":"true"}},[e._v("#")]),e._v(" Comments.vue")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("id")]),e._v(" - number, the id of the commentable model | required")]),e._v(" "),a("li",[a("code",[e._v("type")]),e._v(" - string, the commentable model alias you set at the installation step #3 | required")]),e._v(" "),a("li",[a("code",[e._v("query")]),e._v(" - string, text for filtering out comments | default is "),a("code",[e._v("null")]),e._v(" | (optional)")]),e._v(" "),a("li",[a("code",[e._v("controls")]),e._v(" - boolean, flag for showing the controls for the component, such as the buttons for creating a new comment,\nreloading the list of comments, etc. | default"),a("code",[e._v("false")]),e._v(" | (optional)")])]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("In the "),a("code",[e._v("config/liberu/comments.php")]),e._v(" configuration file you may also set the following options:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("editableTimeLimit")]),e._v(", number, the amount of seconds after which a comment is no longer editable | default is "),a("code",[e._v("24 * 60 * 60")]),e._v(" seconds (1 day)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("onDelete")]),e._v(", string, option that manages the case when the commentable entity is deleted and it has attached addresses.\nValid options are "),a("code",[e._v("cascade")]),e._v(", "),a("code",[e._v("restrict")]),e._v(" | default is "),a("code",[e._v("cascade")])]),e._v(" "),a("p",[e._v("With the cascade option, when a commentable model is deleted, the comments attached to it are also deleted.\nWith the restrict option,  when attempting to delete a commentable model with attached comments, an exception is thrown.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("loggableMorph")]),e._v(", the list of entities using the commentable functionality, each mapped to its respective loggable attribute\nFor example:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'commentable'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    Company"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),a("p",[e._v("This configuration is used for activity logging.")])])]),e._v(" "),a("h2",{attrs:{id:"extending-the-comments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-the-comments","aria-hidden":"true"}},[e._v("#")]),e._v(" Extending the comments")]),e._v(" "),a("p",[e._v("In your project you may have the need to alter and or extend the comment notification.\nTo achieve this, you'd need to:")]),e._v(" "),a("ul",[a("li",[e._v("create a new CommentTagNotification, ensuring it implements the "),a("code",[e._v("NotifiesTaggedUsers")]),e._v(" marker interface.")]),e._v(" "),a("li",[e._v("bind your local implementation to the interface in your local "),a("code",[e._v("AppServiceProvider")])])]),e._v(" "),a("h2",{attrs:{id:"publishes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[e._v("#")]),e._v(" Publishes")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("php artisan vendor:publish --tag=comments-config")]),e._v(" - configuration file")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=comments-assets")]),e._v(" - the VueJS components")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=comments-notification")]),e._v(" - the queueable notification sent to the tagged users")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=liberu-assets")]),e._v(" - a common alias for when wanting to update the assets,\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=liberu-config")]),e._v(" - a common alias for when wanting to update the configuration,\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=comments-mail")]),e._v(" - the templates used for notifications")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=liberu-mail")]),e._v(" - a common alias for when wanting to update the templates\nused for notifications")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=comments-factory")]),e._v(" - the factory used for comments")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=liberu-factory")]),e._v(" - a common alias for when wanting to update the factories\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")])]),e._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1),e._v(" package comes with this package included.")]),e._v(" "),a("p",[e._v("Depends on:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core"),a("OutboundLink")],1),e._v(" for middleware and user model")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/StructureManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("Structure manager"),a("OutboundLink")],1),e._v(" for the migrations")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/TrackWho",target:"_blank",rel:"noopener noreferrer"}},[e._v("TrackWho"),a("OutboundLink")],1),e._v(" for keeping track of the users making the changes to each contact")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/VueComponents",target:"_blank",rel:"noopener noreferrer"}},[e._v("VueComponents"),a("OutboundLink")],1),e._v(" for the accompanying VueJS components")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/laravel-liberu/AvatarManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("AvatarManager"),a("OutboundLink")],1),e._v(" for showing the users' avatars")])])])},[],!1,null,null,null);t.default=o.exports}}]);