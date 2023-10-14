---
sidebarDepth: 3
---

# Tutorial Manager


[![Codacy Badge](https://api.codacy.com/project/badge/Grade/282735fb74e647c4b630056271b66d77)](https://www.codacy.com/app/laravel-liberu/tutorials?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-liberu/tutorials&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85628545/shield?branch=master)](https://github.styleci.io/repos/85628545)
[![License](https://poser.pugx.org/laravel-liberu/tutorials/license)](https://packagist.org/packages/laravel-liberu/tutorials)
[![Total Downloads](https://poser.pugx.org/laravel-liberu/tutorials/downloads)](https://packagist.org/packages/laravel-liberu/tutorials)
[![Latest Stable Version](https://poser.pugx.org/laravel-liberu/tutorials/version)](https://packagist.org/packages/laravel-liberu/tutorials)

Tutorial management dependency for [Laravel Liberu](https://github.com/laravel-liberu/Liberu).

This package works exclusively within the [Liberu](https://github.com/laravel-liberu/Liberu) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/liberu-ui/ui) package.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

[![Screenshot](https://laravel-liberu.github.io/tutorials/screenshots/bulma_023_thumb.png)](https://laravel-liberu.github.io/tutorials/screenshots/bulma_023.png)

[![Watch the demo](https://laravel-liberu.github.io/tutorials/screenshots/bulma_026_thumb.png)](https://laravel-liberu.github.io/tutorials/videos/bulma_demo_01.webm)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Liberu.

## Features

- allows for a user friendly way of teaching users how to use the interface of the application
- permits adding, updating and deleting tutorial entries that can then be played for the selected route
- the tutorial functionality may be started/restarted from the right-hand sidebar, using the `?` button
- the `tutorials` table is used for the tutorial module and has several key attributes:
   - `permission_id` -  the permission where they're in use, since permissions are tied to routes, 
   and we're using permissions to know which tutorials to load for a page
   - `element` - identifies the element within the DOM, and may be an element, an id, in which case it should be 
   prefixed with a `#` or a class, in which case it should be prefixed with `.` or a combination of these
   - `placement` -  sets the position of the tutorial dialog, relative to the DOM element, 
   and can be: `top`, `bottom`, `left` or `right`
   - `order_index` - gives the order in which a particular tutorial element should be displayed, 
   in the context of the available tutorials for a certain page

## Publishes
- `php artisan vendor:publish --tag=tutorials-factory` - the factory for the `Tutorial` model
- `php artisan vendor:publish --tag=liberu-factories` - a common alias for when wanting to update the factories,
once a newer version is released, usually used with the `--force` flag

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
