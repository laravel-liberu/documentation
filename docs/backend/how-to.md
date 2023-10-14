---
sidebarDepth: 3
---

# How-To

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1781cd55ca3048eda6fd70066cc7585a)](https://www.codacy.com/app/laravel-liberu/how-to?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-liberu/how-to&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/109481095/shield?branch=master)](https://github.styleci.io/repos/109481095)
[![License](https://poser.pugx.org/laravel-liberu/HowTo/license)](https://https://packagist.org/packages/laravel-liberu/HowTo)
[![Total Downloads](https://poser.pugx.org/laravel-liberu/HowTo/downloads)](https://packagist.org/packages/laravel-liberu/HowTo)
[![Latest Stable Version](https://poser.pugx.org/laravel-liberu/HowTo/version)](https://packagist.org/packages/laravel-liberu/HowTo)

How-to video manager for [Laravel Liberu](https://github.com/laravel-liberu/Liberu).

This package works exclusively within the [Liberu](https://github.com/laravel-liberu/Liberu) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/liberu-ui/ui) package.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

[![Watch the demo](https://laravel-liberu.github.io/how-to/screenshots/bulma_selection_112_thumb.png)](https://laravel-liberu.github.io/how-to/videos/bulma_demo.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Liberu.

## Features

Allows you to add videos to your application, to show users how to perform a specific action, demonstrate a feature, 
present a process flow, etc. This is a complementary package to [Tutorial Manager](https://github.com/laravel-liberu/TutorialManager).
 
 * easily upload media clips from your computer, setting a title and a description
 * simple-to-use tag manager
 * optionally add a caption/cover picture for each video
 * optionally tag the clips and then filter them using the tags 
 * permissions dependent controls, where regular users can only view the videos. 

## Publishes

- `php artisan vendor:publish --tag=howToVideos-storage` - the storage folder 
that holds the medial files that will be uploaded

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
