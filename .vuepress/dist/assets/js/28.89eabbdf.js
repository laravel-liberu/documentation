(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{169:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-liberu/ActionLogger?utm_source=github.com&utm_medium=referral&utm_content=laravel-liberu/ActionLogger&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/dc3819bf2c654b3d8dcaaed8898b214f",alt:"Codacy Badge"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://styleci.io/repos/85554059",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://styleci.io/repos/85554059/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/multitenancy",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/multitenancy/license",alt:"License"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/multitenancy",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/multitenancy/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-liberu/multitenancy",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-liberu/multitenancy/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),a("p",[t._v("Multitenancy dependency for "),a("a",{attrs:{href:"https://liberu.co.uk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Liberu"),a("OutboundLink")],1),t._v(".")]),a("p",[t._v("This package works exclusively within the "),a("a",{attrs:{href:"https://github.com/laravel-liberu/Liberu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Liberu"),a("OutboundLink")],1),t._v(" ecosystem.")]),a("p",[t._v("The front end assets that utilize this api are present in the "),a("a",{attrs:{href:"https://github.com/liberu-ui/ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("ui"),a("OutboundLink")],1),t._v(" package.")]),a("p",[t._v("For live examples and demos, you may visit "),a("a",{attrs:{href:"https://www.liberu.co.uk",target:"_blank",rel:"noopener noreferrer"}},[t._v("liberu.co.uk"),a("OutboundLink")],1)]),t._m(1),a("p",[t._v("Comes pre-installed in Liberu.")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._v("The general concept on users, companies and tenants is that users belong to companies and a company\nmay be a tenant.")]),a("p",[t._v("The designed flow for this package in a multitenant scenario is as follows:")]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),a("p",[t._v("The command creates the database/schema for the given tenant ID.")]),t._m(14),t._m(15),t._m(16),a("p",[t._v("The command drops the database/schema for the given tenant ID.")]),t._m(17),t._m(18),t._m(19),a("p",[t._v("The command drops the tenant's tables for the given tenant ID.")]),t._m(20),a("p",[t._v("As opposed to the previous command which drops the entire schema, this command will drop all tables\nbut preserve the schema.")]),t._m(21),t._m(22),a("p",[t._v("The command will perform the migrations for each tenant.")]),t._m(23),t._m(24),t._m(25),a("p",[t._v("The middleware is meant to be used selectively, only on the routes where it makes sense,\nto dynamically set the user's tenant connection.")]),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),a("p",[t._v("The job will drop the database/schema for a given tenant.")]),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),a("p",[t._v("The job will perform the migrations for the given tenant.")]),t._m(36),t._m(37),t._m(38),a("p",[t._v("The trait is used on all models that belong to the 'system' (core) connection, in order to dynamically\nset the connection for the model, depending on the environment.")]),t._m(39),t._m(40),a("p",[t._v("The trait can be used in any class as it provides 2 helper functions:")]),t._m(41),t._m(42),a("p",[t._v("The trait is used on all models that belong to the 'tenant' connection, in order to dynamically\nset the connection for the model, depending on the environment.")]),t._m(43),t._m(44),a("p",[t._v("The trait can be used in any class as it provides 2 helper functions:")]),t._m(45),t._m(46),a("p",[t._v("are welcome. Pull requests are great, but issues are good too.")]),t._m(47),a("p",[t._v("This package is released under the MIT license.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"multitenancy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multitenancy","aria-hidden":"true"}},[this._v("#")]),this._v(" Multitenancy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("contains a series of console commands to help with various operations")]),e("li",[this._v("comes with a Tenant helper class that can set the active tenant")]),e("li",[this._v("includes a middleware that should be selectively used on routes as needed,\nwhich sets the active (acting) tenant")]),e("li",[this._v("provides a set of Jobs that can be used to create/setup/cleanup the tenant's database structure")]),e("li",[this._v("also includes multiple traits which can be included in your models and classes, as required")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"conventions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conventions","aria-hidden":"true"}},[this._v("#")]),this._v(" Conventions")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("p",[t._v("the name for a tenant's database/schema is going to be the tenant database prefix you set in the .env\n(the "),a("code",[t._v("DB_TENANT_DATABASE")]),t._v(" key) concatenated with the tenant's (company) ID.")]),a("p",[t._v("If you've setup the "),a("code",[t._v(".env")]),t._v(" as per the Liberu example, the prefix will be "),a("code",[t._v("tenant")]),t._v(" otherwise, the default as\nper the config, is going to be "),a("code",[t._v("forge")]),t._v(".")])]),a("li",[a("p",[t._v("the migrations for the tenant should be placed in the "),a("code",[t._v("/database/migrations/tenant")]),t._v(" sub-folder.")]),a("p",[t._v("They will not automatically run during a "),a("code",[t._v("php artisan migrate")]),t._v(" command,\nbut should be run with the "),a("code",[t._v("--path")]),t._v(" argument or by using the respective command or job (see below)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"flow-and-overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow-and-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Flow and Overview")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("the system (core) application is setup")]),e("li",[this._v("when a tenant is registered, jobs will be dispatched that create a tenant schema for it and then\nrun migrations which will setup the tables")]),e("li",[this._v("users are then registered and linked to their respective tenant (company).")]),e("li",[this._v("after a user logs in through the system application, he can then access the tenant part of the application,\nusing routes that have the "),e("code",[this._v("Multitenancy")]),this._v(" middleware. The middleware will ensure the data that is served is\ntaken from the correct tenant database.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"classes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#classes","aria-hidden":"true"}},[this._v("#")]),this._v(" Classes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("Tenant")]),this._v(" class has a "),e("code",[this._v("set($company)")]),this._v(" method which can be used to set that tenant's company\ndatabase.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("The class is used in the "),e("code",[this._v("Multitenancy")]),this._v(" middleware .")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Commands")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"php-artisan-liberu-tenant-create-database-tenantid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-artisan-liberu-tenant-create-database-tenantid","aria-hidden":"true"}},[this._v("#")]),this._v(" php artisan liberu:tenant:create-database {tenantId}")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the given argument is "),e("code",[this._v("all")]),this._v(" instead of an ID, it will create databases for ALL the tenants.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("The class uses the "),e("code",[this._v("CreateDatabaseJob")]),this._v(" job to perform the actual database creation")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"php-artisan-liberu-tenant-drop-database-tenantid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-artisan-liberu-tenant-drop-database-tenantid","aria-hidden":"true"}},[this._v("#")]),this._v(" php artisan liberu:tenant:drop-database {tenantId}")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the given argument is "),e("code",[this._v("all")]),this._v(" instead of an ID, it will drop the databases for ALL the tenants.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("The class uses the "),e("code",[this._v("DropDatabaseJob")]),this._v(" job to perform the actual database drop.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"php-artisan-liberu-tenant-drop-tables-tenantid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-artisan-liberu-tenant-drop-tables-tenantid","aria-hidden":"true"}},[this._v("#")]),this._v(" php artisan liberu:tenant:drop-tables {tenantId}")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the given argument is "),e("code",[this._v("all")]),this._v(" instead of an ID, it will drop the tables for ALL the tenants.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("The class uses the "),e("code",[this._v("DropTablesJob")]),this._v(" job to perform the actual tables drop.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"php-artisan-liberu-tenant-migrate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-artisan-liberu-tenant-migrate","aria-hidden":"true"}},[this._v("#")]),this._v(" php artisan liberu:tenant:migrate")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("The class uses the "),e("code",[this._v("MigrateJob")]),this._v(" job to perform the actual migration.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#middleware","aria-hidden":"true"}},[this._v("#")]),this._v(" Middleware")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"multitenancy-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multitenancy-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Multitenancy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jobs","aria-hidden":"true"}},[this._v("#")]),this._v(" Jobs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"createdatabasejob"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createdatabasejob","aria-hidden":"true"}},[this._v("#")]),this._v(" CreateDatabaseJob")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The job will create the database/schema for a given tenant. Depending on how you've configured your "),e("code",[this._v(".env")]),this._v(" file,\nthe name could look something like "),e("code",[this._v("tenant23")]),this._v(", where 23 is the tenant company id.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The job will run on the "),e("code",[this._v("light")]),this._v(" queue.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"dropdatabasejob"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dropdatabasejob","aria-hidden":"true"}},[this._v("#")]),this._v(" DropDatabaseJob")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The job will run on the "),e("code",[this._v("light")]),this._v(" queue.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"droptablesjob"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#droptablesjob","aria-hidden":"true"}},[this._v("#")]),this._v(" DropTablesJob")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The job will drop the tables of the given tenant. As opposed to the "),e("code",[this._v("DropDatabaseJob")]),this._v(", this job will not\ndrop the database, only the tables.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The job will run on the "),e("code",[this._v("light")]),this._v(" queue.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"migratejob"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migratejob","aria-hidden":"true"}},[this._v("#")]),this._v(" MigrateJob")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The job will run on the "),e("code",[this._v("light")]),this._v(" queue.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"traits"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#traits","aria-hidden":"true"}},[this._v("#")]),this._v(" Traits")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"systemconnection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#systemconnection","aria-hidden":"true"}},[this._v("#")]),this._v(" SystemConnection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the environment is "),e("code",[this._v("testing")]),this._v(" then the "),e("code",[this._v("sqlite")]),this._v(" connection is used, otherwise "),e("code",[this._v("system")]),this._v(" is used.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"systemresolver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#systemresolver","aria-hidden":"true"}},[this._v("#")]),this._v(" SystemResolver")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("systemDatabase()")]),this._v(", will return the system database name")]),e("li",[e("code",[this._v("systemTable($table)")]),this._v(", will return the full name for given table, such as "),e("code",[this._v("system.states")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"tenantconnection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tenantconnection","aria-hidden":"true"}},[this._v("#")]),this._v(" TenantConnection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the environment is "),e("code",[this._v("testing")]),this._v(" then the "),e("code",[this._v("sqlite")]),this._v(" connection is used, otherwise "),e("code",[this._v("tenant")]),this._v(" is used.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"tenantresolver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tenantresolver","aria-hidden":"true"}},[this._v("#")]),this._v(" TenantResolver")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("tenantDatabase()")]),this._v(", will return the tenant database name")]),e("li",[e("code",[this._v("tenantTable($table)")]),this._v(", will return the full name for given table, such as "),e("code",[this._v("tenant21.products")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"contributions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);e.default=n.exports}}]);