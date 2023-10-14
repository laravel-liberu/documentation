---
sidebarDepth: 3
---

# People

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/aa76029e3e4c471d91370e29534f436f)](https://www.codacy.com/app/laravel-liberu/People?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-liberu/People&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/151952913/shield?branch=master)](https://github.styleci.io/repos/151952913)
[![License](https://poser.pugx.org/laravel-liberu/people/license)](https://packagist.org/packages/laravel-liberu/people)
[![Total Downloads](https://poser.pugx.org/laravel-liberu/people/downloads)](https://packagist.org/packages/laravel-liberu/people)
[![Latest Stable Version](https://poser.pugx.org/laravel-liberu/people/version)](https://packagist.org/packages/laravel-liberu/people)

Person management dependency for [Laravel Liberu](https://github.com/laravel-liberu/Liberu).

This package works exclusively within the [Liberu](https://github.com/laravel-liberu/Liberu) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/liberu-ui/ui) package.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

[![Screenshot](https://laravel-liberu.github.io/people/screenshots/bulma_001_thumb.png)](https://laravel-liberu.github.io/people/screenshots/bulma_001.png)

[![Screenshot](https://laravel-liberu.github.io/people/screenshots/bulma_002_thumb.png)](https://laravel-liberu.github.io/people/screenshots/bulma_002.png)

<sup>click on the photo to view a large size screenshot</sup>

## Installation

Comes pre-installed in Liberu.

## Features

- separates the people centric operations from the core application user model
- allows the management of people and their details
- integrates with and extends the application user
- is built upon the premise that all the application users are people, but some people may not be application users
- can be reused and integrated with other modules which might handle categories of people (e.g. company people)
- a `PersonFactory` is included by default in the package
- a policy is used to ensure that a person email update cannot be performed if the person is linked to an user
- custom validations may be added through the package configuration
- the people server-side select functionality is included by default
- the included `IsPerson` trait can be used on other models that have a `person` relationship and require email synchronization
- enums are used for person genders and titles  

## Usage

### Backstory

In previous Liberu versions, there was no common ground between application users and 
other categories of actors which also represented people, for example contacts and (some types of) clients.
This sometimes lead to duplicated data as well as brittle and non reusable types and relationships.

In order to move towards better maintainability, the decision to move common data into persons was taken. 
Now the people structure can be reused as needed.

### Under the Hood

- the model comes with a  `hasUser` helper to check if this person is linked to an user
- once the person has activity in the system (through any other model relationship), it cannot be deleted
- the proper way to delete a person is to first delete any other models it is linked to 
- since an application user will always be a person, and for Laravel authentication purposes, 
the user is supposed to have an email address and so the 'synchronization' between the user and the person is required. 
Therefore, if the user email is updated, the person email is also updated. 
The same thing happens if a user is created from a person, but a different email is set.
- note that if users are created through a separate/external mechanism you will need to ensure that a corresponding 
person is created/available during the process
- all `Person` attributes are fillable
- the `uid` Person attribute is meant as generic holder for a person's unique identifier 
which varies from situation to situation (e.g. SSN)
- the `Person` model has the following helpers:
    * `hasUser` - returns true if this person is associated to a user
    * `gender` - determines the gender based on the set person title. If no title is set, null is returned
    * `isMandatary` - returns true if this user is set a company's mandatary
- the `PersonPolicy` ensures that:
    * administrators can make any changes
    * a user can only set a     

### Configuration

The `config/liberu/people.php` configuration file, lets you customize the following:
- `formTemplate`, - string, is the project relative path to the person form template, 
useful for overriding the original 
- `tableTemplate`, - string, is the project relative path to the person table template, 
useful for overriding the original 

### Extending the people functionality

In your project you may have the need to alter and or extend the people structure by adding/removing table columns.
To achieve this, you'd need to:
- add migration(s) to your local project, making the necessary changes. Note that if using sqlite for testing, 
some of the migration commands may not be available
- create a new template for the person form, and declare it in the config (`formTemplate`)
- create a new template for the person table, and declare it in the config (`tableTemplate`)
- create a new person request validation, as required, which should extends the Liberu person validation
    ```php
    use LaravelLiberu\Companies\app\Http\Requests\ValidatePersonStore as LiberuPersonStore;
    
    class ValidatePersonStore extends LiberuPersonStore
    ...
    ```
- create a new `Person`, as required, which should extend the Liberu Person model, and set the `$fillable` property
- bind your local implementations to the package's request validations and model in your local `AppServiceProvider` 

    ```php
    use LaravelLiberu\People\app\Http\Requests\ValidatePersonStore;
    use App\Http\Requests\ValidatePersonStoreRequest as LocalPersonStore;
    use LaravelLiberu\People\app\Http\Requests\ValidatePersonUpdate;
    use App\Http\Requests\ValidatePersonUpdateRequest as LocalPersonUpdate;
    
    public function boot()
    {
        $this->app->bind(ValidatePersonStore::class, function () {
            return new LocalPersonStore();
        });
        $this->app->bind(ValidatePersonUpdate::class, function () {
            return new LocalPersonUpdate();
        });
        $this->app->bind(LiberuPerson::class, function () {
          return new Person();
        });
    }
    ``` 

## Publishes

- `php artisan vendor:publish --tag=people-config` - configuration file
- `php artisan vendor:publish --tag=liberu-config` - a common alias for when wanting to update the config,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=people-factory` - the factory for the `Person` model
- `php artisan vendor:publish --tag=liberu-factories` - a common alias for when wanting to update the factories,
once a newer version is released, usually used with the `--force` flag

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
