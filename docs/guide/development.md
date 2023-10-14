---
sidebarDepth: 3
---

# Development

This is a work in progress section, please feel free to both contribute and 
make suggestions about new topics.

Topics:
* Liberu conventions
* Building CRUD files
* Overwriting functionality
* Creating new themes

::: tip Recommended
No matter the topic, please also go through the related packages' documentation
for a more in-depth understanding of the available functionality.
:::

## Liberu conventions

### Named routes

Liberu exclusively uses named routes so it is important to set names for the routes you may add since 
the named routes are tied in with the permission system.

### Routes and permissions

Liberu is a SPA, and generally, SPAs handle routing for their web pages 
and use a API for fetching and persisting data.

Therefore, we use two types of routes:
- front end routes, found on the `resources/js/routes` path
- back end routes, present in the `routes/api.php` file

We strive to have the 2 sets of routes aligned as much as possible as it makes things clearer,
but there will be differences. 

For example, the most of the `*.index` routes are present only on the front end.

What is **important** is that all routes, front end or back end, have corresponding permissions as these 
are used also for authorization in both layers. 

::: tip Back end permission authorization
On the back end, we have a Gate defined method that can be used to check 
for authorization on a given route.
```php
$user->can('access-route', 'administration.users.store')
``` 
:::

::: tip Front end permission authorization
On the front end, a helper is available that can be used for authorization on a given route. 
Don't forget to inject it first. 
```vue
inject: ['canAccess']
...
v-if="canAccess('administration.users.store')">
``` 
:::

### Invocable controllers

We're currently using [invocable controllers](https://laravel.com/docs/5.8/controllers#single-action-controllers) for all our actions. While this is not a must and this choice
is not tied to other core functionality, keep in mind that if using the CLI for resource files generation,
the generated files WILL follow this convention.

### Fat models, slim controllers

In time, we've transitioned to this style as it matches our beliefs and is also a style recommended by Taylor Otwell.
You may read more [here](https://laraveldaily.com/taylor-otwell-thin-controllers-fat-models-approach/) 

## Building CRUD structures

No matter how complex the application ends up, you'll still need CRUD pages.

Because of the modularity of Liberu, when creating such pages, there are several packages 
involved, each with their own templates, controllers and routes.

In order to simplify and streamline the process of adding CRUD pages, 
we've created the **CLI package and command**.

You can use the cli command to create:
- models
- the common Liberu permissions
- menus
- the required files, such as:
    - database migrations
    - controllers
    - back-end routes
    - request validators
    - form templates and builders
    - table templates and builders
    - front-end pages
    - front-end routes
    
Note that these are meant to provide you with a starting point, 
as you'll still need to customize and tweak some of the resulted files. 

::: tip Customizing
If you already created some of the files, 
such as a model and a migration, you can configure the CLI to skip building them.
:::

::: tip Starting clean
If you're just starting to use the CLI, 
it is recommended to do so on a clean project state, after you've configured/initialized git,
and you've committed your other changes, as once the files are generated, 
you'll be able to use `git status` to see a list of changes. 
:::

### Using the CLI

To get started, open a terminal window in the root of your project and type:
```shell
php artisan liberu:cli
```

You'll be greeted with a list of options:
```shell
Create a new Laravel Liberu Structure

Current configuration status:
Model ✗
Permission Group ✗
Permissions ✗
Menu ✗
Files ✗
Package ✗

 Choose element to configure:
  [0] Model
  [1] Permission Group
  [2] Permissions
  [3] Menu
  [4] Files
  [5] Package
  [6] Generate
  [7] Toggle Validation
  [8] Exit
 > 
```

You can tell that the options are yet to be configured. 
It's best to follow the order in which they are given.

::: tip Jumping ahead
If you jump ahead or miss some of the required options, 
you'll receive a warning.  
:::

For each option, you'll be first asked to confirm that you want to
 configure it.

::: tip Making changes
Once you've configured an option, before generating the files,
 you can go back and re-configure any of the options. 
:::

::: tip Autocomplete
When making changes to an already configured option, you can 
type the first character and have the `cli` autocomplete the previously set value
so you can advance faster through the options. 
:::


#### Configuring the model

After confirming you want to configure the model, you'll want to input
its name.

If you enter a non namespaced name, by convention, the model will be placed
in your `projectRoot/App` folder.

```shell
Model configuration:
name => 

 Configure Model (yes/no) [no]:
 > y

 name:
 > Car

Current configuration status:
Model ✓
Permission Group ✗
Permissions ✗
Menu ✗
Files ✗
Package ✗

```

You may also input a namespaced name, in which case, the model will be placed 
in the proper folder.

::: tip Namespace
If you are inputting a namespaced model, please type the full namespace, including `App`. 
:::

```shell
Model configuration:
name => Car

 Configure Model (yes/no) [no]:
 > y

 name:
 > App\Vehicles\Motorized\Car
```

#### Configuring the permission group

Permission groups result out of the names of permissions, so for instance, 
both `vehicles.motorized.cars.create` and `vehicles.motorized.cars.update` belong to the 
`vehicles.motorized.cars` permission group.

At this step, the permission group is requested because it will be used when building 
the structure migration, the routes and more, based on your choices.

When your project requirements are simple, you may use a flat structure for the group otherwise go
with a nested one.

Also, if you're unsure when choosing the routes/permissions/group naming, it's a good idea to 
follow the classes' namespace structure.  

By convention use the *plural* name for resources.  

```shell
Permission Group configuration:
name => 

 Configure Permission Group (yes/no) [no]:
 > y

 name:
 > vehicles.motorized.cars

Current configuration status:
Model ✓
Permission Group ✓
Permissions ✗
Menu ✗
Files ✗
Package ✗

```

#### Configuring the permissions

Simply choose the desired permissions from the list:
* `index` will generate:
    - front end route, used for navigating to the index page, where you'll see the list of resources in a data table
* `create`, will generate:
    - front end route, used to display the creation form for your resource. 
    - back end route, used to fetch the form data
* `store` will generate:
    - back end route, used by the form to persist a new resource
* `show` will generate:
    - front end route, used to display the show page
    - back end route, used to fetch a model
* `edit` will generate:
    - front end route, used to display the edit form for an existing resource.
    - back end route, used to fetch the form data
* `update` will generate:
    - back end route, used by the form to update an existing resource 
* `destroy` will generate:  
    - back end route, used by the form's and tables's delete actions to delete a resource
* `initTable` will generate:
    - back end route, used for the initialization of the index page's table
* `tableData` will generate:
    - back end route, used for fetching the data for the index page's table
* `exportExcel` will generate:
    - back end route, used for exporting the information for the the index page's table 
* `options` will generate:
    - back end route, utilized by a server-side Select component for fetching a list of options for the resource 

```shell
Permissions configuration:
index => ✗
create => ✗
store => ✗
show => ✗
edit => ✗
update => ✗
destroy => ✗
initTable => ✗
tableData => ✗
exportExcel => ✗
options => ✗

 Configure Permissions (yes/no) [no]:
 > y

 index (yes/no) [no]:
 > y

 create (yes/no) [no]:
 > y

 store (yes/no) [no]:
 > y

 show (yes/no) [no]:
 > y

 edit (yes/no) [no]:
 > y

 update (yes/no) [no]:
 > y

 destroy (yes/no) [no]:
 > y

 initTable (yes/no) [no]:
 > y

 tableData (yes/no) [no]:
 > y

 exportExcel (yes/no) [no]:
 > y

 options (yes/no) [no]:
 > y

Current configuration status:
Model ✓
Permission Group ✓
Permissions ✓
Menu ✗
Files ✗
Package ✗

```

::: tip Front end helper
On the front end, a `route` helper is available that can be used to build the proper URL out of 
the route name. You may search the Liberu pages for examples. 
:::

#### Configuring the menu

The menu will need a few attributes:
- the name is a string and needs to be unique at its level 
- the icon must be a font awesome icon and needs to be imported in your project
- the parent menu is the name of the parent menu. 
    If given, the parent menu must already be present in the database.     
    If you don't provide a parent menu, the new menu will be added at the root level.
    
    ::: tip Dot notation
    When specifying the parent menu you can input the desired menu with its entire, 
    dot separated hierarchy, for example `Vehicles.Motorized`
    :::
    
- the route shall be the named route that is utilized when the user clicks on the menu, 
in the front-end. This is usually a route that ends with `.index`.
    You may only specify the final segment of the route, as the permission group is used
    when building the whole route for the menu.
    You can also notice that by default, the route is index.

    ::: tip Permissions
    If a user does not have access to the given route, that menu will not be visible.
    :::
- the order index is used to sort menus of the same level and should be an integer
- the has_children flag is used to mark a menu as a parent. 

    ::: warning
    Parent menus cannot have a route while all other menus must have a route.
    :::

    By clicking on a parent menu, you will expand and reveal its children.    


```shell
Menu configuration:
name => 
icon => 
parentMenu => 
route => index
order_index => 999
has_children => ✗

 Configure Menu (yes/no) [no]:
 > y

 name:
 > Cars

 icon:
 > car

 parentMenu:
 > Motorized

 route:
 > index

 order_index:
 > 100

 has_children (yes/no) [no]:
 > n

Current configuration status:
Model ✓
Permission Group ✓
Permissions ✓
Menu ✓
Files ✗
Package ✗

```

#### Configuring the files

Once everything else is configured, you may choose what files you want to have
generated for you.

Note that the options are interdependent, so, for instance, if you choose the 
`routes` option, the generated routes will match the permissions you selected at the 3rd step.

Simply choose the desired files from the list:
* model, generates:
   - model class
   - model table migration
* structure, generates:
   - structure migration
* routes, generates:
    - front end routes
    - back end routes
* views, generates:
    - front end pages
* form, generates:
    - controllers, request validator, form builder and template 
* table, generates:
    - controllers, table builder and template
* options, generates:
    - controller

```shell
Files configuration:
model => ✗
migration => ✗
routes => ✗
views => ✗
form => ✗
table => ✗
options => ✗

 Configure Files (yes/no) [no]:
 > y

 model (yes/no) [no]:
 > y

 migration (yes/no) [no]:
 > y

 routes (yes/no) [no]:
 > y

 views (yes/no) [no]:
 > y

 form (yes/no) [no]:
 > y

 table (yes/no) [no]:
 > y

 options (yes/no) [no]:
 > y

Current configuration status:
Model ✓
Permission Group ✓
Permissions ✓
Menu ✓
Files ✓
Package ✗

```

#### Package

Most of the time you'll probably want to generate a structure in the local project,
and you don't need to modify anything else.

However, if you want to build a package, you may access the package menu and setup 
the following options:

* name 
    - the name of the package
    - is used for the creation of the package's folder
* vendor 
    - the name of the vendor
    - is used for the creation of the vendor's folder
* config
    - if chosen, will create a config file for the package
* providers
    - if chose, will create package providers
    
When creating a package, don't forget to properly align the model namespace
with the vendor and package name.

```shell
Package configuration:
name => 
vendor => laravel-liberu
config => ✗
providers => ✗

 Configure Package (yes/no) [no]:
 > y

 name:
 > foo

 vendor:
 > laravel-liberu

 config (yes/no) [no]:
 > y

 providers (yes/no) [no]:
 > y

```

#### Generating the files

Once your options are configured, you may generate the corresponding files.

While files are generated for you in their proper locations, 
the back end routes are printed in the terminal and you should copy them into your 
`routes/api.php` files.

```shell
 Choose element to configure:
  [0] Model
  [1] Permission Group
  [2] Permissions
  [3] Menu
  [4] Files
  [5] Package
  [6] Generate
  [7] Toggle Validation
  [8] Exit
 > 6

Copy and paste the following code into your api.php routes file:

Route::namespace('Vehicles\Motorized\Cars')
    ->prefix('vehicles/motorized/cars')->as('vehicles.motorized.cars.')
    ->group(function () {
        Route::get('', 'Index')->name('index');
        Route::get('create', 'Create')->name('create');
        Route::post('', 'Store')->name('store');
        Route::get('{car}/edit', 'Edit')->name('edit');
        Route::patch('{car}', 'Update')->name('update');
        Route::delete('{car}', 'Destroy')->name('destroy');
        Route::get('initTable', 'InitTable')->name('initTable');
        Route::get('tableData', 'TableData')->name('tableData');
        Route::get('exportExcel', 'ExportExcel')->name('exportExcel');
        Route::get('options', 'Options')->name('options');
        Route::get('{car}', 'Show')->name('show');
});

The new structure is created, you can start playing
```

If you've setup git for the project, you may use `git status` to see a list of 
new files and folders:

```shell
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        app/Forms/
        app/Http/Controllers/Vehicles/
        app/Http/Requests/
        app/Tables/
        app/Vehicles/
        database/migrations/2019_05_27_134825_create_cars_table.php
        database/migrations/2019_05_27_134825_create_structure_for_cars.php
        resources/js/pages/vehicles/
        resources/js/routes/vehicles.js
        resources/js/routes/vehicles/

no changes added to commit (use "git add" and/or "git commit -a")
```

#### Next steps

Below you'll find examples of customizing the generated files, 
considering the most complete scenario where we're creating the entire structure, 
with all the files locally within the project. 

##### The table migration

Since most likely, the options you chose also involve the creation of migrations, 
customize your model migration.

```php
class CreateCarsTable extends Migration
{
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->unique();
            $table->text('description')->nullable();
            $table->unsignedTinyInteger('make');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
```

After customizing the migration you may run

```shell
php artisan migrate
```

##### The menu icon

[Import](https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs) the required icon in the `resources/js/app.js` file:

```js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCar } from '@fortawesome/free-solid-svg-icons';

library.add(faCar);
```

If you haven't done so already, build the front-end and/or start the HMR process.
CD into the `client` directory and run:
```shell
yarn serve
```

To make a production build, run:
```shell
yarn build
```

After refreshing the page you should be able to see the new menu and navigate to the index page,
where you'll notice an empty table, as there are no models added to the database yet. 

##### The model class

```php
class Car extends Model
{
    protected $fillable = [
        'name', 'description', 'make'
    ];
}
```

##### The request validation

By default, the CLI will generate one request validators and use it for both the store and the update actions.

```php
class ValidateCarRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'        => 'required|max:255',
            'description' => 'nullable|max:255',
            'make'        => 'required|integer',
        ];
    }
}
```

This is a basic request validators; note that we're not checking for the name to be unique.

In cases where you need different validation rules for the two actions, 
it makes sense to use 2 validation classes:

```php
class ValidateCarStore extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'        => ['required', 'max:255', $this->unique()],
            'description' => 'nullable|max:255',
            'make'        => 'required|integer',
        ];
    }

    protected function unique()
    {
        return Rule::unique('cars', 'name');
    }
}
```

```php
class ValidateCarUpdate extends ValidateCarStore
{

    protected function unique()
    {
        return parent::unique()
            ->ignore($this->route('car')->id);
    }
}
```

If using different validators than the one generated by the CLI, 
don't forget to update the controllers so that they use the new validation classes: 
- `App\Http\Controllers\Vehicles\Motorized\Cars\Store` 
- `App\Http\Controllers\Vehicles\Motorized\Cars\Update` .

##### Using an Enum for make (optional)

In the `cars` migration we defined the `make` column as a tiny integer so we could demonstrate
using an Liberu Enum for storing car makes.

```php
namespace App\Enums;

use LaravelLiberu\Helpers\app\Classes\Enum;

class CarMakes extends Enum
{
    const AUDI = 1;
    const BMW = 2;
}

``` 

You may read more about enums in their [documentation](https://docs.liberu.co.uk/backend/helpers.html#classes)
but in short they are a construct which integrates with tables, forms, selects that allows for a
better representation of type values (and more).  

##### The table builder

```php
class CarTable extends Table
{
    protected $templatePath = __DIR__.'/../../../Templates/Vehicles/Motorized/cars.json';

    public function query()
    {
        return Car::selectRaw('
            cars.id as "dtRowId",
            cars.name,
            cars.description,
            cars.make
        ');
    }
}
```

Note that the `dtRowId` identifier is required for all tables.

##### The table template

```json
{
    "name": "Car",
    "routePrefix": "vehicles.motorized.cars",
    "crtNo": true,
    "buttons": [
        "excel",
        "create",
        "show",
        "edit",
        "destroy"
    ],
    "columns": [
        {
            "label": "Name",
            "name": "name",
            "data": "cars.name",
            "meta": [
                "searchable",
                "sortable"
            ]
        },
        {
            "label": "Description",
            "name": "description",
            "data": "cars.description",
            "meta": [
                "searchable",
                "sortable"
            ]
        },
        {
            "label": "Make",
            "name": "make",
            "data": "cars.make",
            "enum": "App\\Enums\\CarMakes",
            "meta": [
                "sortable"
            ]
        }
    ]
}
```

Note that while integer values are store in the DB for the car make, we're using the Enum to 
present them as human friendly values.

##### The form template

```json
{
    "routePrefix": "vehicles.motorized.cars",
    "sections": [
        {
            "columns": 2,
            "fields": [
                {
                    "label": "Name",
                    "name": "name",
                    "value": null,
                    "meta": {
                        "custom": false,
                        "type": "input",
                        "content": "text",
                        "disabled": false
                    }
                },
                {
                    "label": "Make",
                    "name": "make",
                    "value": null,
                    "meta": {
                        "options": "App\\Enums\\CarMakes",
                        "type": "select",
                        "disabled": false
                    }
                }
            ]
        },
        {
            "columns": 1,
            "fields": [
                {
                    "label": "Description",
                    "name": "description",
                    "value": null,
                    "meta": {
                        "custom": false,
                        "type": "textarea",
                        "content": "text",
                        "disabled": false,
                        "rows": 2
                    }
                }
            ]
        }
    ]
}
```

You can now use the `Create` button in the index page's table to add a new car, then update it, delete it, etc.  

## Overwriting functionality

### Dependency injection

One of the cleanest ways of customizing core logic is by extending classes, overwriting the required
attributes and methods and then using dependency injection to obtain the desired implementation.

This means that when a customization is needed, you can extend the class you want to customize and then
bind your local implementation to the core class, in your application service provider, therefore having the
container use the local implementation instead.

##### Overwriting Controllers \ Validators:
```php
use App\Http\Requests\People\ValidatePersonStore;
use App\Http\Requests\People\ValidatePersonUpdate;
use LaravelLiberu\People\app\Http\Requests\ValidatePersonStore as LiberuPersonStoreValidator;
use LaravelLiberu\People\app\Http\Requests\ValidatePersonUpdate as LiberuPersonUpdateValidator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    public $bindings = [
        LiberuPersonStoreValidator::class   => ValidatePersonStore::class,
        LiberuPersonUpdateValidator::class  => ValidatePersonUpdate::class,
    ];

    public function boot() {...}
    
    public function register() {...}
    
    ...
```

##### Overwriting Models :

Local Model
```php
namespace App\Models;

use LaravelLiberu\Permissions\app\Models\Permission as LiberuPermission;

class Permission extends LiberuPermission
{
       public function localRelation()
       {
              return this->belongsToMany(LocalRelation::class);
       }
}
```
Local AppServiceProvider
```php
use LaravelLiberu\Permissions\app\Models\Permission as LiberuPermission;
use App\Models\Permission;

class AppServiceProvider extends ServiceProvider
{

    public $bindings = [
          LiberuPermission::class => Permission::class
    ];
    
   ...
```

### Changing back end logic

If the modifications you require are more extensive and cannot be resolved via using [dependency injection](#dependency-injection),
the other option is to overwrite the required routes, and point to your local implementation/controllers.   

### Changing front end pages

When you need to customize any of the front end pages supplied with Liberu, you generally have two options:
* use [patch-package](https://www.npmjs.com/package/patch-package) to make a patch to the package that contains the page(s) to be modified
* create your local version of the page(s) and overwrite the front end routes so that they point to your page(s) 

::: tip Breaking the build
Once you start messing with the core Liberu functionality it is possible that the changes you're making could
break parts of the various Liberu core functionality. 

In order to be aware of this, you may run the Liberu tests locally, by typing into the terminal:
```shell
phpunit
``` 

If the tests fail, you may use the results to identify the issue. When opening issues on github, 
if the tests are failing, please let us know as that might speed up the troubleshooting.
:::

## Themes

If you want to use a different theme instead of, or thoroughly customize the themes supplied with Liberu, 
you should use as example the default themes, available on the `client/node_modules/@liberu-ui/themes` path.

You may create a patch using `patch-package` for the `themes` package and customize them to your heart's desire.

## Adding static assets

If there are local static assets such as image resources which you may require 
within the project, you can create a `client/src/images` folder and place them there. 

Afterwards, you should add a configuration object to the `CopyPlugin` section 
from `vue.config.js` so that the images are copied on build.

## Linting & Aliases

You may have noticed that there are two `.eslintrc.js` files that come with Liberu, by default:
- in the project root
- in the `client` folder

The `.eslintrc.js` found in the root folder is used out of the box by most code editors/IDEs
and that's the reason for its existence. Thus, its configuration is somewhat optional
because in the worst case, your editor will report errors but the build will complete.

The `.eslintrc.js` found in the `client` folder is used by VueCLI (vue-cli-service)
during the linting & build phases. Thus, it is essential that it is configured 
as intended, because otherwise you'll get errors reported and the build may not complete.

::: tip

Whenever we declare aliases for packages or paths, it is ideal to configure/set the aliases
in:
- `client/vue.config.js`, for the build
- `client/eslintrc.js`, for the automatic linting
- `eslintrc.js`, for your editor's linting

When you look into the files, you'll find examples out of the box.

::: 
