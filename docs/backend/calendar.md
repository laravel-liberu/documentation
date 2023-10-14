---
sidebarDepth: 3
---

# Calendar

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7c8421322ab94fc2a612bcf56bc0f294)](https://www.codacy.com/app/laravel-liberu/calendar?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-liberu/calendar&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/194647672/shield?branch=master)](https://github.styleci.io/repos/194647672)
[![License](https://poser.pugx.org/laravel-liberu/calendar/license)](https://packagist.org/packages/laravel-liberu/calendar)
[![Total Downloads](https://poser.pugx.org/laravel-liberu/calendar/downloads)](https://packagist.org/packages/laravel-liberu/calendar)
[![Latest Stable Version](https://poser.pugx.org/laravel-liberu/calendar/version)](https://packagist.org/packages/laravel-liberu/calendar)

Calendar is a Laravel Liberu package designed for the management of 
calendars and calendar events

This package works exclusively within the [Liberu](https://github.com/laravel-liberu/Liberu) ecosystem.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

[![Screenshot](https://laravel-liberu.github.io/calendar/screenshots/bulma_001_thumb.png)](https://laravel-liberu.github.io/calendar/screenshots/bulma_001.png)

[![Screenshot](https://laravel-liberu.github.io/calendar/screenshots/bulma_002_thumb.png)](https://laravel-liberu.github.io/calendar/screenshots/bulma_002.png)

<sup>click on the photo to view a large size screenshot</sup>

## Installation

- install the back-end API package using composer: `composer require laravel-liberu/calendar`
- install the front-end resources: `yarn add @liberu-ui/calendar`
- add a calendar alias in `webpack.mix.js` under the `alias` object:
    ```js
    '@calendar': `${__dirname}/node_modules/@liberu-ui/calendar/src/bulma`,
    ``` 
- in `resources/js/router.js` file, verify that `RouteMerger` is imported, or import it

    `import RouteMerger from '@core-modules/importers/RouteMerger';`

- make sure `routeImporter` is also imported

    `import routeImporter from '@core-modules/importers/routeImporter';`

- then use `RouteMerger` to import front-end assets 
using the alias defined in `webpack.mix.js`

    ```js
    (new RouteMerger(routes))
        .add(routeImporter(require.context('@calendar/routes', false, /.*\.js$/)))
        .add(routeImporter(require.context('./routes', false, /.*\.js$/)));
    ```

- in `resources/js/app.js` import the package's icons

`import '@calendar/icons';`

- publish `CalendarServiceProvider` and register your calendars

- run `yarn dev` or `npm run dev`

### Icons
The package uses the following icons:
* `faCalendarAlt`

## Features
- allows you to add, edit and remove calendar and calendar events
- normal users can only make changes to their own calendars,
while administrators and supervisors can edit all
- will be able to be add recurring events and even events spanning multiple days 
- comes with an included calendar seeder which can be published and further customized
- beautiful & functional interface built on top of [vue-cal](https://antoniandre.github.io/vue-cal/)
- can also use custom (pseudo) calendars, so you can represent within the calendar
events generated from other modules of the application 

## Usage

### Configuration
The configuration file contains 2 sections:
- `calendars`
- `calendarClasses`

### Custom Calendars
In addition to the calendars you can create from the UI, there is also the option to define 
custom calendars, which you can use to display information in the calendar, information
retrieved from other sources.

One such example custom calendar is included in the package by default. 
This calendar displays persons' birthdays.

To activate/use it, first publish the package's calendar provider using:
```
php artisan vendor:publish --tag=calendar-provider
```

Then, include the custom calendar implementation in the provider's `register` property:
```php
protected $register = [
    BirthdayCalendar::class,
];
```

#### Creating Custom Calendars
In order to create custom calendars, just three steps are necessary:
- create a `CustomCalendar` implementation, for your calendar
- create a `ProvidesEvent` implementation for your calendar's events
- register the new calendar implementation within the published `CalendarServiceProvider`

## Commands

- `php artisan liberu:calendar:notify` - sends the calendar event reminder notifications

::: tip
The package is also using the command internally, as it calls it every minute to send any 
pending reminders. 
:::


## Publishes

- `php artisan vendor:publish --tag=calendar-config` - the configuration
- `php artisan vendor:publish --tag=liberu-config` - a common alias for when wanting to update the config,
once a newer version is released, can be used with the `--force` flag
- `php artisan vendor:publish --tag=calendar-provider` - a default calendar provider
- `php artisan vendor:publish --tag=calendar-factory` - a calendar factory
- `php artisan vendor:publish --tag=liberu-factories` - a common alias for when wanting to update the factories 
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=calendar-email-template` - the email template,
 so you can customize it
- `php artisan vendor:publish --tag=liberu-mail` - a common alias for when wanting to update the email 
templates once a newer version is released, usually used with the `--force` flag

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
