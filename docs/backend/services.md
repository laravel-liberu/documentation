---
sidebarDepth: 3
---

# Services

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e342eff10f24db5b89be5fe203e424d)](https://www.codacy.com/app/laravel-liberu/services?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-liberu/services&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85492361/shield?branch=master)](https://github.styleci.io/repos/85492361)
[![License](https://poser.pugx.org/laravel-liberu/services/license)](https://packagist.org/packages/laravel-liberu/datatable)
[![Total Downloads](https://poser.pugx.org/laravel-liberu/services/downloads)](https://packagist.org/packages/laravel-liberu/services)
[![Latest Stable Version](https://poser.pugx.org/laravel-liberu/services/version)](https://packagist.org/packages/laravel-liberu/services)

Services package for [Laravel Enso](https://github.com/laravel-liberu/Enso).

This package cannot work independently of the [Enso](https://github.com/laravel-liberu/Enso) ecosystem.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)


## Installation

install using composer `composer require laravel-liberu/services` 

## Features

- features a core services functionality with a model, enums, migrations, 
routes, controllers, resources, index table, etc 
- provides CRUD functionality for the `Service` model
- a `ServiceFactory` is included and can be published

## Usage

The package is meant to be installed on an Enso project and customized as required 
(or used as it is if that is enough). 
   
## Publishes

- `php artisan vendor:publish --tag=services-factories` - the included service factory,
   
   
### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
