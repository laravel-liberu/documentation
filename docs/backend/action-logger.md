---
sidebarDepth: 3
---

# Action Logger
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dc3819bf2c654b3d8dcaaed8898b214f)](https://www.codacy.com/app/laravel-liberu/action-logger?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-liberu/action-logger&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85554059/shield?branch=master)](https://github.styleci.io/repos/85554059)
[![License](https://poser.pugx.org/laravel-liberu/action-logger/license)](https://packagist.org/packages/laravel-liberu/action-logger)
[![Total Downloads](https://poser.pugx.org/laravel-liberu/action-logger/downloads)](https://packagist.org/packages/laravel-liberu/action-logger)
[![Latest Stable Version](https://poser.pugx.org/laravel-liberu/action-logger/version)](https://packagist.org/packages/laravel-liberu/action-logger)

User actions logger dependency for [Laravel](https://laravel.com).

This package works exclusively within the [Liberu](https://github.com/laravel-liberu/Liberu) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/liberu-ui/ui) package.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

## Installation

Comes pre-installed in Liberu.

## Features

- creates the `action-logger` middleware, the `action_logs` table and the `ActionLog` model
- will log all access routes covered by the `action-logger` middleware
- comes with the `ActionLogs` trait that defines the relationship to the `ActionLog` model, and should be included in your user model
- each entry will record `user_id`, `url`, `route` name, http `method` verb and timestamps

## Usage

1. Include the `action-logger` middleware on the routes that you want covered

2. Add the `ActionLogs` trait on your user model, so you may retrieve the user's  actions

::: warning

Since the logged info contains the user_id, this means you cannot use 
the middleware on routes where the user information is unavailable 
(e.g. the user is not authenticated).

:::

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
