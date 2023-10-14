---
sidebarDepth: 3
---

# Permissions

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f321064c5cc74a3b914aab81854266b4)](https://www.codacy.com/app/laravel-liberu/permissions?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-liberu/permissions&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/94779938/shield?branch=master)](https://github.styleci.io/repos/94779938)
[![License](https://poser.pugx.org/laravel-liberu/permissions/license)](https://packagist.org/packages/laravel-liberu/permissions)
[![Total Downloads](https://poser.pugx.org/laravel-liberu/permissions/downloads)](https://packagist.org/packages/laravel-liberu/permissions)
[![Latest Stable Version](https://poser.pugx.org/laravel-liberu/permissions/version)](https://packagist.org/packages/laravel-liberu/permissions)

Permissions dependency for [Laravel Liberu](https://github.com/laravel-liberu/Liberu)

This package works exclusively within the [Liberu](https://github.com/laravel-liberu/Liberu) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/liberu-ui/ui) package.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

[![Screenshot](https://laravel-liberu.github.io/permissionsmanager/screenshots/bulma_029_thumb.png)](https://laravel-liberu.github.io/permissionsmanager/screenshots/bulma_029.png)

## Installation

Comes pre-installed in Liberu.

## Features

- permissions are managed based on the user role
- allows creating, updating and deleting of permissions for each route
- has the `access-route` policy which can be used to check if the a user is authorized on a given route
- comes with the `VerifyRouteAccess` middleware that checks against unauthorized access

## Usage

- inside `web.php` there is a route for each action within the application, and each route has the `name` attribute defined
- for each route where we need to have authorization checks, we must define a permission, permission which needs to have the same name as the route
- routes: 
    - are nested, the resulting name looking something like `group1.group2...route`
    - when creating new routes, be sure to follow the Liberu convention and use camelCase (`myGroup.myRoute`) instead of snake_case(`my_group.my_route`) or mix-n-matching. 
    This will make for a more consistent feel and also ensure the Liberu logic will work as designed.
- for each request we check the existence of the link between the user's role and the permission for the request's route
- permissions' attributes:
     - name: see above
     - description - is human readable and is used when displaying a user's action history (on his profile page)
     - type - may be `read` or `write` and is an informative flag
     - is_default - flag which lets us know if a permission needs to be automatically allotted to any new role we create
- for routes where we don't need to have authorization checks, permissions are not mandatory, **BUT**
- if we want to log and display the users' actions, permissions become necessary, as they're used when displaying statistics
- permissions are automatically grouped together, based on their segments, in the UI, for presentation and functional purposes, so 
administrators can easily configure roles

## Publishes

once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=permissions-factory` - the factory for the `Permission` model
- `php artisan vendor:publish --tag=liberu-factories` - a common alias for when wanting to update the factories,
once a newer version is released, usually used with the `--force` flag

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
