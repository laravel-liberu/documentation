---
sidebarDepth: 3
---

# Products

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e342eff10f24db5b89be5fe203e424d)](https://www.codacy.com/app/laravel-liberu/products?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-liberu/products&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85492361/shield?branch=master)](https://github.styleci.io/repos/85492361)
[![License](https://poser.pugx.org/laravel-liberu/products/license)](https://packagist.org/packages/laravel-liberu/datatable)
[![Total Downloads](https://poser.pugx.org/laravel-liberu/products/downloads)](https://packagist.org/packages/laravel-liberu/products)
[![Latest Stable Version](https://poser.pugx.org/laravel-liberu/products/version)](https://packagist.org/packages/laravel-liberu/products)

Products package for [Laravel Enso](https://github.com/laravel-liberu/Enso).

This package cannot work independently of the [Enso](https://github.com/laravel-liberu/Enso) ecosystem.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

## Installation

* install the package using composer: `composer require laravel-liberu/products`
* install the front-end ui package using yarn: `yarn add @liberu-ui/products`
* adds the following alias in `client/vue.config.js`
```
configureWebpack: {
    resolve: {
        alias: {
            //other aliases
            '@products': `${__dirname}/node_modules/@liberu-ui/products/src/bulma`,
        },
    },
```
* in `client/js/router.js` file, verify that `RouteMerger` is imported, or import it

`import RouteMerger from '@core-modules/importers/RouteMerger';`

* make sure `routeImporter` is also imported

`import routeImporter from '@core-modules/importers/routeImporter';`

* then use `RouteMerger` to import front-end assets using the alias defined in `vue.config.js`

```
(new RouteMerger(routes))
    //other routes
    .add(routeImporter(require.context('./routes', false, /.*\.js$/)))
    .add(routeImporter(require.context('@products/routes', false, /.*\.js$/)));
```

* in `resources/js/app.js` import the package's icons

`import '@products/icons';`

* make sure `hot module replacement` is **not** active, and run `yarn dev` or `npm run dev`

* run `php artisan migrate` to create table, add menu, permissions etc.
* run `php artisan vendor:publish --tag=products-assets` to publish the assets

## Features

- features a core products functionality with a model, enums, migrations, 
routes, controllers, resources, index table, etc 
- provides CRUD functionality for the `Product` model
- defines the relationship with a manufacturer and multiple suppliers
and can manage the default supplier
- the Enso `Company` model is used for the manufacturer, 
suppliers and default supplier relationships; 
`dynamic methods` are added on the `Company` for the `$company->products` (supplied products) 
& `$company->manufacturedProducts` relationships.
- the package's enums are registered automatically to the application's state
via the `EnumServiceProvider`
- categories support is available via the `laravel-liberu/categories` package, and a category can be set per product, 
from the product form; note that a product can only belong to a child category
- picture support is available out of the box, where product pictures can be uploaded through the product form;
the pictures are visible in the index page table
- a `ProductFactory` is included and can be published

## Usage

The package should be installed on an Enso project and customized as required 
(or used as it is if that is enough). 

## Publishes

- `php artisan vendor:publish --tag=products-factories` - the included product factory,
- `php artisan vendor:publish --tag=products-assets` - the `default-picture` asset, published to the
`resources/images` folder
   
### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
