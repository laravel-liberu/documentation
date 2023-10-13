---
sidebarDepth: 3
---

# Rememberable

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2eba208ec82d485786715915ec75f8bf)](https://www.codacy.com/app/laravel-liberu/rememberable?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-liberu/rememberable&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/90758167/shield?branch=master)](https://github.styleci.io/repos/90758167)
[![License](https://poser.pugx.org/laravel-liberu/rememberable/license)](https://packagist.org/packages/laravel-liberu/rememberable)
[![Total Downloads](https://poser.pugx.org/laravel-liberu/rememberable/downloads)](https://packagist.org/packages/laravel-liberu/rememberable)
[![Latest Stable Version](https://poser.pugx.org/laravel-liberu/rememberable/version)](https://packagist.org/packages/laravel-liberu/rememberable)

Model caching for Laravel

This package can work independently of the [Enso](https://github.com/laravel-liberu/Enso) ecosystem.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

## Installation

Comes pre-installed in Enso.

To install outside of Enso: `composer require laravel-liberu/rememberable`

## Features

- comes with a trait that provides helper methods for quick and easy caching usage (setting and retrieving)
- the cache lifetime may be set per model or the per-project
- uses the Laravel `cache()` helper method so it is transparent to the cache mechanism/implementation

## Usage

1. Use the `Rememberable` trait in the CachedModel that you want to track

2. You **MUST** set the caching duration (in minutes) by either:
    - adding a `protected $cacheLifetime = 123;` property in your CachedModel
    - setting the `liberu.config.cacheLifetime` configuration value as desired

3. Whenever you need to retrieve a cached model instead of getting it directly from the database:

    ```php
    CachedModel::find($id)
    ```

    you should get it from cache:

    ```php
    CachedModel::cacheGet($id)
    ```

::: tip

You may use the global `liberu.config.cacheLifetime` configuration together with local/per-model 
cache lifetime values. 

If given, the trait favors the per-model cache lifetime value over the global configuration value,
thus you can override the global setting as required.  
::: 

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
