---
sidebarDepth: 3
---

# DataImport

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8c53be4df359406b8ce6bc48f627aee8)](https://www.codacy.com/gh/laravel-liberu/data-import?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-liberu/data-import&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/89221336/shield?branch=master)](https://github.styleci.io/repos/89221336)
[![License](https://poser.pugx.org/laravel-liberu/data-import/license)](https://packagist.org/packages/laravel-liberu/data-import)
[![Total Downloads](https://poser.pugx.org/laravel-liberu/data-import/downloads)](https://packagist.org/packages/laravel-liberu/data-import)
[![Latest Stable Version](https://poser.pugx.org/laravel-liberu/data-import/version)](https://packagist.org/packages/laravel-liberu/data-import)

Incredibly powerful, efficient, unlimited number of rows, 
queues based Excel importer dependency for [Laravel Enso](https://github.com/laravel-liberu/Enso).

This package works exclusively within the [Enso](https://github.com/laravel-liberu/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/liberu-ui/ui) package.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

[![Watch the demo](https://laravel-liberu.github.io/dataimport/screenshots/bulma_006_thumb.png)](https://laravel-liberu.github.io/dataimport/videos/bulma_demo_01.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

[![Screenshot](https://laravel-liberu.github.io/dataimport/screenshots/bulma_007_thumb.png)](https://laravel-liberu.github.io/dataimport/screenshots/bulma_007.png)

## Installation

Comes pre-installed in Enso.

## Features

- allows the import of **big** files with the number of rows only limited by the xlsx file format, 
by splitting the data in chunks and handling them on multiple queues
- uses JSON templates to configure `xlsx` file imports into the application, with minimum custom logic
- import types are defined in the package configuration
- each import type can be validated against required columns, sheets, data types and more
- the Laravel validation is utilized for maximum reuse of existing mechanisms while custom validators can be added when necessary
- an example import type is included by default in the package
- uses [Spout](https://github.com/box/spout) for reading the `xlsx` file
- uses Laravel's queueing system and its auto-balancing features for efficient asynchronous, parallel processing
- blocking file structure validation
- non blocking file contents validation 
- content import issues are made available in the rejected rows summary, a downloadable `xlsx` file with the same structure as the import file,
with an extra column (on each sheet) that will describe all the validation errors for each row
- features real time import progress reporting in the UI
- `before` and `after` hooks which are available during the importing process
- comes with an utility ExcelSeeder class, that can be used to seed your tables using data from excel files

## Usage

1. Publish the configuration, example classes and assets:
    * `php artisan vendor:publish --tag=dataimport-config`
    * `php artisan vendor:publish --tag=dataimport-examples`

2. In the library `samples` folder, `vendor/laravel-liberu/dataimport/samples`, we have included a couple of 
 sample import files for you to play with. It is strongly recommended that you check out the provided samples before 
 attempting to create your own importers.

### Configuration
The configuration can be found/published in `config/liberu/imports.php` and contains:
 - `validations` - `string`, flag that sets whether import template validations are also 
    executed in production, valid values are `always`/`local`/`yourEnv` | default `local` 
 - `chunkSize` - `number`, default `1000`, the number of records in a chunk. 
    It should be adjusted for optimum performance on your machine. Note that the size can also be given 
    in the import template, thus overriding the global value
 - `splittingQueue` - `string`, default `split`, the name of the queue for the chunk splitting job. 
    Can also be set individually, for each import, in its template
 - `queues` - `array`, the configuration for all the queues used during the import process. 
    Note that it's good practice to have more processes for the splitting queue as this is 
    an intensive process, and it needs to keep the other queues 'busy'. Obviously, these queues 
    must be set up in the Laravel `queue` configuration file.
 - `timeout` - `number`, default `60 * 5`, the Laravel job timeout for the splitting and the rejected summary 
    report generation jobs
 - `errorColumn` - `string`, default `_errors`the name of the error column used to report issues with the import rows 
    (which appears in the rejected summary xlsx file)
 - `notifications` - `array`, default `['broadcast', 'database']`, the list of channels used to 
    notify the user
 - `configs` - configuration array, with what's needed to hook the JSON templates to the import package:
     - `label` - the label visible to the user in the interface
     - `template` - the relative path to the JSON import templates

#### JSON Template structure:
- `timeout`, `number`, optional, local overriding configuration for the `liberu.dataimport.timeout` option
- `queue`, `string`, optional, name of the queue used to run the import on
- `params`, `array`, optional, array of parameter objects, that can be passed to an importer class
- `sheets`, `array`, required, array of sheet configuration objects | required

Note that the importer expects to find just the sheets given in the template, 
meaning it will report an error if there are missing sheets but also if there are extra sheets. 

#### Params Configuration object structure:

The configuration object attributes are similar in type and structure to the parameters 
used within the JSON [Form Builder](https://docs.liberu.co.uk/backend/forms.html#usage) template to configure a form field.

- `name`, `string`, the name of the parameter as it is passed to the importer class, within the `$params` object
- `validations`, string, the Laravel style validations to be applied to the respective parameter 
- `label`, `string`, the label used for the field generated for the parameter,
- `value`, `mixed`, the default, starting value for the parameter,
- `type`, `string`, type of the input generated for this parameter,
- `route`, `string`, the route for the select type parameter
- `params`, `object`, any parameters applied for the input generated for this parameter 

#### Sheet Configuration object structure:
- `name`, `string`, required, the name of the sheet. Should be lower snake cased if the 
    sheet name contains spaces, so use `sale_entries` instead of `Sale entries`
- `importerClass`, `string`, required, the fully qualified importer class name. 
    The class contains the actual the import logic.
- `validatorClass`, `string`, optional, the fully qualified custom validator class name, 
    if you are using custom validators
- `chunkSize`, `number`, optional, the size of the chunk used during splitting     
- `columns`, `array`, required, contains the column configuration objects  

#### Column Configuration object structure:
- `name`, `string`, required, the name of the column. Similar to the sheet name, 
    column names should be lower snake cased, so use `mobile_phone` instead of `Mobile phone`
- `validations`, `string`, optional, the desired Laravel (Request) validation that you 
    want applied for this column

Please note that the import does not continue if *structure* errors are encountered, 
such as missing sheets or columns. If there are no structure errors and *content* errors are found, 
the rows with errors are skipped and valid rows are imported. 

### The importer class
The importer class given in the JSON template is responsible for doing the actual importing,
 once the file has been validated.

Your importer class needs to implement the `LaravelLiberu\DataImport\app\Contracts\Importable` interface 
and implement the `run()` method.

The `run` method receives a row object, which you can use to implement your import logic. 

If you need pre/post import logic for your import, you can then also implement the following interfaces:
- `LaravelLiberu\DataImport\app\Contracts\AfterHook` - requires that you implement the `after(Obj $params)` method 
- `LaravelLiberu\DataImport\app\Contracts\BeforeHook`- requires that you implement the `before(Obj $params)` method

Inside the two methods you can add your extra logic. 

If you must have the user that is requesting the import available during the import,
you may also add the `LaravelLiberu\DataImport\app\Contracts\Authenticates` marker interface on your 
importer class.

### The custom validator class
There might be cases where it's not enough to use the Laravel Request Validation methods. 
For more complex scenarios you can create a custom validator class and declare it your template.
 
The validator class must extend the `LaravelLiberu\DataImport\app\Services\Validators\Validator` 
abstract class and implement the `run()` method.

Here you'll have access to the parent class' `addError(string $error)` method. 
You may use it to add any required issues for the data that fails your custom validation logic.

### The rejected rows summary file

You will notice that the summary file has an identical structure with the import file, with the exception
of one last column, the errors column, that is used to present the issues for each row.

The idea behind creating this kind of report file is for the user to be able to get a list of import issues
in a format that allows him to quickly correct any errors in the file, 
delete the errors column and then simply re-import the summary file.

### Excel Seeder
When seeding your database, you may use regular seeders and fill your tables with random data 
(as configured) but when you have specific data, you may want to set the actual data from the beginning.
While there's more than one way to achieve this, the Excel Seeder helper allows you to seed your table 
by using data provided in an excel file, through an import 
- basically it's a seeder adapter for a regular data import.

There are multiple advantages to this:
- the data is present in an excel file, and can be added and updated by almost any person
- even after initially seeding the database, since the import is going to remain available, 
    additional files can be later imported for updates  

#### Steps
1. create a data import, following your usual flow
2. create your excel seeder class, that will be using the import you added at step 1
    * save it on the `database/seeds/` path
    * note that your class must extend the `ExcelSeeder` class
    * inside, add the `$type` parameter and use for value the type of the import created at the first step
3. add the actual excel file containing the data to be used when seeding
    * the file should be placed on the `storage/app/files` path
    * the name of the file needs to be the type of the import, and and must have an `xlsx` extension
    * since you're going to be committing the file to the repository, 
        don't forget to add it to the `.gitignore` exclusion list
4. run the seed process with `php artisan db:seed` 
    * the seeder will run the import process & the data will be available in the database 
    * you'll also be able to see the result of the import in the data imports index page

## Publishes

- `php artisan vendor:publish --tag=data-import-config` - configuration files
- `php artisan vendor:publish --tag=data-import-examples` - example import
- `php artisan vendor:publish --tag=data-import-factory` - the factory for the DataImport model
- `php artisan vendor:publish --tag=liberu-factories` - a common alias for publishing all liberu factories,
once a newer version is released, can be used with the `--force` flag
- `php artisan vendor:publish --tag=data-import-mail` - the email templates
- `php artisan vendor:publish --tag=liberu-config` - a common alias for when wanting to update configuration,
once a newer version is released, can be used with the `--force` flag
- `php artisan vendor:publish --tag=liberu-mail` - a common alias for when wanting to update the email templates,
once a newer version is released, can be used with the `--force` flag

## External dependencies

- [Spout](https://github.com/box/spout)

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
