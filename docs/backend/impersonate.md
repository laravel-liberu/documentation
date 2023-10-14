---
sidebarDepth: 3
---

# Impersonate

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fdc8f68f71064cd0b811462ef097879d)](https://www.codacy.com/app/laravel-liberu/impersonate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-liberu/impersonate&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/94622194/shield?branch=master)](https://github.styleci.io/repos/94622194)
[![License](https://poser.pugx.org/laravel-liberu/impersonate/license)](https://packagist.org/packages/laravel-liberu/impersonate)
[![Total Downloads](https://poser.pugx.org/laravel-liberu/impersonate/downloads)](https://packagist.org/packages/laravel-liberu/impersonate)
[![Latest Stable Version](https://poser.pugx.org/laravel-liberu/impersonate/version)](https://packagist.org/packages/laravel-liberu/impersonate)

User impersonation dependency for [Laravel Liberu](https://github.com/laravel-liberu/Liberu).

This package works exclusively within the [Liberu](https://github.com/laravel-liberu/Liberu) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/liberu-ui/ui) package.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

[![Watch the demo](https://laravel-liberu.github.io/impersonate/screenshots/bulma_014_thumb.png)](https://laravel-liberu.github.io/impersonate/videos/bulma_how_to_impersonate.webm)
<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Liberu.

## Features

- allows a user to impersonate another user, by using a middleware
- permits testing and debugging from the perspective of another user, without needing his credentials
- comes with its own controller and routes that permit starting and stopping the impersonation process
- uses the [Permission Manager](https://github.com/laravel-liberu/PermissionManager) package in order to be able to verify permissions
- the access for the impersonation process is determined by the (admin) user's access to the impersonation routes.

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
