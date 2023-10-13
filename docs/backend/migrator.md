---
sidebarDepth: 3
---

# Migrator

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/45eb41a083a1457cb03c5bc577942a70)](https://www.codacy.com/app/laravel-liberu/migrator?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-liberu/migrator&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/186614340/shield?branch=master)](https://github.styleci.io/repos/186614340)
[![License](https://poser.pugx.org/laravel-liberu/migrator/license)](https://packagist.org/packages/laravel-liberu/migrator)
[![Total Downloads](https://poser.pugx.org/laravel-liberu/migrator/downloads)](https://packagist.org/packages/laravel-liberu/migrator)
[![Latest Stable Version](https://poser.pugx.org/laravel-liberu/migrator/version)](https://packagist.org/packages/laravel-liberu/migrator)

Structure Migrator dependency for [Laravel Enso](https://github.com/laravel-liberu/Enso)

This package works exclusively within the [Enso](https://github.com/laravel-liberu/Enso) ecosystem.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

## Installation

Comes pre-installed in Enso.

## Features

- can be used to easily insert (default) data, during the install of a package, or later when new routes and permissions are required and can create menus, assign default permissions, etc.
- extends Illuminate's `Migration` class and acts like a migration
- can also rollback its own changes
- when adding menus and permissions, automatic access for the configured default role is added
    
## Usage

You can use it to create:
* menus
* permissions

:::tip
You can use laravel-liberu/cli to generate your structure migrations
:::

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
