---
sidebarDepth: 3
---

# Form Builder

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a3cf79a9ca584f08b3be0246cb488788)](https://www.codacy.com/app/laravel-enso/forms?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/forms&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/99695155/shield?branch=master)](https://github.styleci.io/repos/99695155)
[![License](https://poser.pugx.org/laravel-enso/forms/license)](https://packagist.org/packages/laravel-enso/forms)
[![Total Downloads](https://poser.pugx.org/laravel-enso/forms/downloads)](https://packagist.org/packages/laravel-enso/forms)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/forms/version)](https://packagist.org/packages/laravel-enso/forms)

JSON-based Form builder for [Laravel Enso](https://github.com/laravel-enso/Enso)

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end implementation that utilizes this api is present in the [forms](https://github.com/enso-ui/forms) package.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

[![Watch the demo](https://laravel-enso.github.io/forms/screenshots/bulma_109_thumb.png)](https://laravel-enso.github.io/forms/videos/bulma_demo_01.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso. 

To install outside of Enso:

1. install the package `composer require laravel-enso/forms` 

2. if needed, publish and customize the config

3. install the front end for the api implementation: `yarn add @enso-ui/forms`

## Features

- allows for quick creation of forms
- uses a JSON template file for generating the form
- flexible form layout, that supports directly from the template
    * grouping inputs into logical sections and columns of different widths, even on the same row
    * grouping sections into tabs 
- for most forms, the json template is all that it's needed
- provides helpful error messages when the template is missing parameters or unexpected values are found
- when needed, allows the customization of form components in order to cover all scenarios
- comes with a `template.json` file that can be used as an example when starting out
- integrates with the [Laravel Request Validation](https://laravel.com/docs/5.7/validation#available-validation-rules) for seamless usage and reusability
- uses the Enso toast notifications for stylish feedback on the various actions
- customizable placeholder for all elements

## Under the Hood

- a template file is needed in order to generate the form data structure object
- the `Form` object has to be used in the back-end (controller) to parse the template, 
    get additional parameters if required, and build the structure
- although in most common scenarios you can give all the required configuration in the template file, 
    the `Form` class has fluent helper functions for setting/overriding most attributes
- a `VueForm` component needs to be included in the view/page/parent component, 
    taking as parameter the URI path used to obtain the form-builder's resulting object 
- an `EnsoForm` component should be included in the view/page/parent component, 
    taking the URI path needed to make the ajax request and fetch the form configuration. 
    Acts like a wrapper for the `VueForm` within the Enso ecosystem

## Usage

When using the form builder functionality, you will be needing several items:
- the JSON template that configures the form's layout, inputs, actions, etc.
- a basic Form builder class (which can also contain complex logic for complex scenarios)
- usually, an endpoint that reads the configuration and returns a properly formatted form configuration
- importing the `VueForm` / `EnsoForm` VueJS components from the [forms](https://github.com/enso-ui/forms)
    package inside your page/component that renders the form based on the configuration
- one or more endpoints for your form's actions, such as storing, updating, deleting.

1. create a template file for the new form, using `template.json` as an example, 
and place it inside `app/Forms` (recommended).
Below is an example of such a template:
```json
{
    "title": "My Title",
    "icon": "location-arrow",
    "tabs": true,
    "method": null,
    "routePrefix": "core.addresses",
    "sections": [
        {
            "tab": "First Tab",
            "columns": 3,
            "fields": [
                {
                "label": "County",
                "name": "county_id",
                "value": null,
                "meta": {
                    "custom": true,
                    "type": "select",
                    "multiple": false,
                    "source": null,
                    "options": [],
                    "placeholder": "Type it in"
                }
            }, 
                {
                    "label": "Locality",
                    "name": "locality_id",
                    "value": null,
                    "meta": {
                        "custom": true,
                        "type": "select",
                        "multiple": false,
                        "source": "core.addresses.localitiesSelectOptions",
                        "options": [],
                        "label": "label"
                    }
                }, 
                {
                    "label": "Neighborhood",
                    "name": "neighborhood",
                    "value": null,
                    "meta": {
                        "custom": false,
                        "type": "input",
                        "content": "text",
                        "disabled": false
                    }
                }
            ]
        }, 
        {
            "tab": "Second Tab",
            "columns": "custom",
            "fields": [
                {
                    "label": "Street Type",
                    "name": "street_type",
                    "value": null,
                    "column": 3,
                    "meta": {
                        "type": "select",
                        "multiple": false,
                        "source": null,
                        "options": []
                    }
                }, 
                {
                    "label": "Street",
                    "name": "street",
                    "value": null,
                    "column": 6,
                    "meta": {
                        "custom": false,
                        "type": "input",
                        "content": "text",
                        "disabled": false,
                        "placeholder": "Street is manadatory"
                    }
                }, 
                {
                    "label": "Number",
                    "name": "number",
                    "value": null,
                    "column": 3,
                    "meta": {
                        "custom": false,
                        "type": "input",
                        "content": "text",
                        "disabled": false
                    }
                }
            ]
        },
        {
            "tab": "Second Tab",
            "columns": 2,
            "fields": [
                {
                    "label": "Observations",
                    "name": "obs",
                    "value": null,
                    "meta": {
                        "custom": false,
                        "type": "input",
                        "content": "text",
                        "disabled": false
                    }
                },
                {
                        "label": "Price",
                        "name": "price",
                        "value": 12321.12,
                        "meta": {
                        "type": "input",
                        "content": "money",
                        "symbol": "GBP", 
                        "precision": "3", 
                        "thousand": " ", 
                        "decimal": ",", 
                        "positive": "%s %v", 
                        "negative": "%s (%v)", 
                        "zero":"%s --"  
                        }  
                }
            ]
        }
    ]
}
```

::: tip
When giving a number of columns, the fields will be evenly divided into columns, and will have equal width. 
If a custom value is given, then you may specify on each field the desired width. 
See below for more information.
:::

::: tip
When using the money input type, you should read the 
[accounting.js](http://openexchangerates.github.io/accounting.js/) documentation, as these details are 
outside of the scope of this documentation. 
:::

2. create a Form builder class. 

```php
class UserGroupForm
{
    private const TemplatePath = __DIR__.'/../Templates/userGroup.json';
    private $form;

    public function __construct()
    {
        $this->form = (new Form(static::TemplatePath));
    }

    public function create()
    {
        return $this->form->create();
    }

    public function edit(UserGroup $userGroup)
    {
        return $this->form
            ->value('roleList', $userGroup->roleList())
            ->edit($userGroup);
    }
}
```

This class will handle the logic for creating the form configuration out of your template.
If any extra logic is required to fill or process the form, in addition to the template, 
this is the place for it.

In the example above, you can see that for the 'roleList' form attribute we're setting the value 
by using a helper method on the model.

You may even use the available fluent methods to override (if necessary) default values 
provided in the template. 

3. in your controller methods return the resulting data from the `Form` builder. 
 
```php
public function create(UserGroupForm $form)
{
    return ['form' => $form->create()];
}
```

```php
public function edit(UserGroup $userGroup, UserGroupForm $form)
{
    return ['form' => $form->edit($userGroup)];
}
```

In the above examples, we're using injection to create an instance of our Form builder class 
(UserGroupForm), equivalent to instantiating it using `new` inside the methods. 

4. inside your page/component import and use the `VueForm` component. 
Take a look at the [forms](https://docs.liberu.co.uk/frontend/forms.html) UI package documentation 
for more information.

### Advanced usage

The PHP `Form` class provides the following fluent helper functions:
- `actions(array $actions)`, sets the actions available on the form. 
Valid actions are `create`, `store`, `update` and `delete` 
- `routePrefix(string $prefix)`, sets the route prefix that then is used with the various action 
    default endpoints,
- `title(string $title)`, the title for the form,
- `icon(string $icon)`, the icon shown alongside the title
- `route(string $action, string $route)`, permits setting a specific route for a given action
- `options(string $name, $value)`, sets the available meta options for a given form attribute
    Commonly used to override the form value.
- `value(string $field, $value)`, sets the starting value for form element
    Commonly used to override the form value.
- `hide(string $field)`, marks the field as hidden
- `show(string $field)`, marks the field as visible, opposite effect of `hide()`
- `hideSection($fields)`, marks as hidden the sections that contain the given fields
- `showSection($fields)`, marks as visible the sections that contain the given fields
- `hideTab($tabs)`, marks as hidden the tabs with the given names; note that the names are case sensitive
- `showTab($tabs)`, marks as visible the tabs with the given names; note that the names are case sensitive
- `disable(string $field)`, marks the field as disabled
- `readonly(string $field)`, marks the field as readonly
- `meta(string $field, string $param, $value)`, sets a specific value, for a meta param, for the given field
- `append($prop, $value)`, adds a property and its value in the template root-level `params` object, 
    in order to make it available in the front-end. Note that this `params` object is different 
    than the `params` object you can pass as a property to the `vue-form` / `enso-form` VueJS components
- `routeParams($params)`, set the given parameters as the route parameters
- `authorize(bool $authorize)`, set the authorize flag for the form. If this value is not given 
    in the form, the global default value is taken from the config file
- `labels(bool $labels)`, sets the labels attribute on the template. If this value is not given 
    in the form, the global default value is taken from the config file
- `sectionVisibility($fields, bool $hidden)`, set the sections containing the given 
    fields as visible/hidden as per the $hidden parameter
- `sectionVisibility($tabs, bool $hidden)`, set the sections containing the given 
    tabs as visible/hidden as per the $hidden parameter   

It also provides the 2 methods used for generating the properly formatted form configuration:
- `create(Model $model)`, for a create-type form, where the model is optional. If given, 
    the model attribute values are filled for the form values (another way of setting some default values)
- `edit(Model $model)`. for an edit-type form, where the model is required. The model's values 
    are set as the form values

## Global Configuration

The Form builder can be globally configured from within its own configuration file, 
found at `config/enso/forms.php`:

```php
    'validations' => 'local',
    'buttons' => [
        'create' => [
            'icon' => 'plus',
            'class' => 'is-info',
            'event' => 'create',
            'action' => 'router',
            'label' => 'Create',
        ],
        'show' => [
            'icon' => 'eye',
            'class' => 'is-success',
            'event' => 'show',
            'action' => 'router',
            'label' => 'Show',
        ],
        'back' => [
            'icon' => 'arrow-left',
            'class' => 'is-primary',
            'event' => 'back',
            'action' => 'router',
            'label' => 'Back',
        ],
        'store' => [
            'icon' => 'check',
            'class' => 'is-success',
            'event' => 'store',
            'action' => 'router',
            'label' => 'Save',
        ],
        'update' => [
            'icon' => 'check',
            'class' => 'is-success',
            'event' => 'update',
            'action' => 'router',
            'label' => 'Update',
        ],
        'destroy' => [
            'icon' => 'trash-alt',
            'class' => 'is-danger',
            'event' => 'destroy',
            'action' => 'ajax',
            'method' => 'DELETE',
            'message' => 'The selected record is about to be deleted. Are you sure?',
            'confirmation' => true,
            'label' => 'Delete',
        ],
    ],
    'dateFormat' => 'Y-m-d',
    'selectPlaceholder' => 'Choose',
    'authorize' => true,
    'dividerTitlePlacement' => 'center',
    'labels' => 'true',
```

The following options are available:
- `validations`, string, values may be 'local'/'production'/'yourEnvironment'. If set to 'local', 
    form configuration validations are performed only when developing locally, 
    while 'production' will always perform the validation checks. 

    ::: tip
    The flag only affects the validation of the **template** not the validation of form input values, 
    which is always enabled.
    :::
    
- `buttons`, array, enables the customization of various options for the buttons used in the forms, 
    such as labels, colors, events and more
- `altFormat`, string, sets the default date format for `datepicker` fields. 
    Note that for these fields an instance of `Carbon` is expected
- `selectPlaceholder`, string, the placeholder used for select fields, 
- `authorize`, boolean, default `true`, flag that enables the integration with the Laravel-Enso 
    authorization, meaning that certain user actions are not available if the user does not have access on 
    the corresponding routes
- `dividerTitlePlacement`, string, default `'center'`, values may be 'left', 'center', 'right'. 
    Affects the placement of sections' divider text, if used and given within the template
- `labels`, boolean, default `true`. When set to false, no labels are used, instead placeholders will be
    shown with the label values. The option can be overridden for each template. 

## Form Configuration

### Root level parameters

```
"title": "Form Title",
"icon": "icon",    
"routes: ,
"routePrefix": "administration.users",
"routeParams": null,
"authorize": true,
"dividerTitlePlacement": "center"
"params": null,
"actions": ["create", "store", "update", "destroy" ],
"autosave": false,
"debounce": 300
"method": null,
"tabs": true,
"sections": [],
"labels": true,
```

#### method
- Is: optional 
- Type: string
- Values: "post", "patch", "put" 

If using the form normally, by calling `create($model)`, `edit($model)` methods, 
then the action is set automatically, as "post" for creation and "patch" for edit. 
 
#### sections
- Is: required 
- Type: array of objects

All form inputs are grouped into sections. See below for the sections details.

#### title
- Is: optional 
- Type: string 

This is the title of the form.

#### icon
- Is: optional 
- Type: string

The Font Awesome 5 icon class, for example `"book"` for the `"fa-book"` CSS class.

#### routePrefix
- Is: optional 
- Type: string

Represents the route prefix that is used when checking permissions and building the route/path 
for a certain button. For example, for a user form's Save button, if the name of the store 
route is `"administration.users.create"`, then the prefix is `"administration.users"` 
and the action is `"create"`.

#### routes
- Is: optional 
- Type: object

An object that will hold the route for each action.

#### actions
- Is: optional 
- Type: array of strings, 
- Values: `"create"`, `"show"`, `"store"`, `"update"`, `"destroy"` 

The actions are used to determine the available buttons in the form. 
Note that if the `authorize` flag is set to true, the builder also checks if the user 
has access to/for a certain action,  and if he does not, the respective button won't be shown.  
If the actions are not given, defaults are used, depending on the `method` parameter, as follows: 
 - if doing a POST, the actions array is `['store']`
 - if doing anything else, i.e. a PUT, the actions array is `["create", "show", "update", "destroy"]`

#### autosave
- Is: optional 
- Type: boolean, 

If set to true, the form will perform an auto-save when any of its inputs change

#### debounce
- Is: optional 
- Type: number, 

Should be used in conjunction with `autosave` so that the number of requests to the backend are limited
 
#### authorize
- Is: optional 
- Type: boolean 

Flag that sets whether authorization checks should be made. 
If not given in the form, the option is read from the global form configuration, 
found at `config/enso/forms.php`. If given, it overrides the global value.
 
#### params
- Is: optional 
- Type: object
 
Can be used to pass extra parameters to the VueJS component / front-end, 
useful when customizing the form in-page (with slots, 
linking the form component/data to other components in the page, etc).

Notes:
- you may also set extra parameters and their values programmatically, 
    using the `append('attribute', $value)` function on your (`LaravelLiberu\forms\app\Classes\Form`) 
    form object instance 
- also, this `params` object is different to the optional `params` property of the 
    `vue-form` / `enso-form` VueJS component. Keep in mind that *this* `params` 
    object will be accessible in the `vue-form`'s data object, while the *other* `params` 
    is a property on the `vue-form`

#### dividerTitlePlacement
- Is: optional 
- Type: string
- Value: may be one of `"left"`, `"center"`, `"right"` 

It specifies the relative position of the divider. 
If not given, the option is read from the global form configuration, found at `config/enso/forms.php`

#### tabs     
- Is: optional 
- Type: boolean, 

The flag activates the tab feature of the form. This then requires that each section has a tab property 
which specifies the name of the tab the section belongs to.

#### labels
- Is: optional 
- Type: boolean

If set to true, then placeholders will be used instead of labels.

### Section
The section is the organizing block for form inputs.

```
"sections": [{
    "tab": "First Tab",
    "columns": 3,
    "fields": [{
        "label": "Country",
        "name": "country_id",
        "value": null,
        "meta": {
            "type": "select",
            "multiple": false,
            "source": "core.addresses.countryOptions",
            "options": []
        }
    }, {
        ...
    }]
    }, {
    "columns": 6,
    "fields": [{
        "label": "Number",
        "name": "number",
        "value": null,
        "meta": {
            "custom": false,
            "type": "input",
            "content": "text",
            "disabled": false
        }
    }, {
    ...
    }]
}]
``` 
#### columns
- Is: required
- Type: number/string
- Values: one of the following `1`, `2`, `3`, `4`, `6`, `12`, `"custom"`, `"slot"`

The attribute specifies how many columns will be used for the form elements in this section. 
If giving a number, then the size of each element is calculated automatically. 

If using `"custom"`, you need to specify for each filed the column size, 
by providing the `column` parameter (see below).

If using `"slot"`, then a slot will be rendered for that section. In this case, you also need to
specify an additional `"slot": "name"` parameter with the desired name of the slot.

#### fields
- Is: required
- Type: array of objects

The fields parameter will hold the actual form elements. 
For the configuration of each specific form element, see below.

#### divider
- Is: optional
- Type: boolean

Flag that specifies that a divider should be used here.

#### title
- Is: optional
- Type: string

Title for the divider. Should be used in conjunction with the `divider` parameters, 
as without setting the `divider` to `true`, the title will not be shown. 

Note that the position of the divider title will depend on the value of the 
`dividerTitlePlacement` parameter (see above).

#### column
- Is: optional
- Type: numeric

Flag that specifies the column size. Only needed when the value of columns 
the value of `"columns"` is `"custom"`.

#### tab
- Is: optional
- Type: string

Specifies the name of the tab this section belongs to. Each section may have its own tab 
or multiple sections can share a tab.

When setting this option, the `tabs` flag on the main template structure must be present and set to true. 

#### slot
- Is: optional
- Type: string

Specifies the name of the slot that should be rendered for this section. Only needed when 
the value of `"columns"` is `"slot"`.


### Field
Is the individual element of the from, generally representing an input of some sort.

#### label
- Is: required
- Type: string

The label for the element.

#### name
- Is: required
- Type: string

The name of the Model's attribute, that is to be mapped to this input 
(for instance, the name is also used to fill the models's value when setting up an edit type of form).
 
The name will be the request's key for the value of the input given be the user, when an action is committed 
(for instance the user clicks the Save button). 

#### value
- Is: required
- Type: number/string/object/boolean

The starting value for a form element. The value can be 
- hard coded in the template, 
- it will be filled from the Model when creating an edit form (or a create form with the optional model parameter)
- it can also be set programmatically by calling the Form object's `value()` method.

#### meta
- Is: required
- Type: object

Holds various mostly optional parameters that can be used to configure a form element (see Meta below.)

#### column
- Is: required
- Type: number

The size of the column for that element **IF** using the `"custom"` value for section `columns` parameter. 
The given number is used in combination with Bulma's `is-`x 12-columns-system. 
See [here](https://bulma.io/documentation/columns/sizes/) for more information.

Note that if `columns` parameter is not set to "custom", the `column` parameter is not required and is ignored.

### Meta
Is a set of parameters used to configure the supported form elements.

#### Generic

##### type
- Is: required
- Type: string
- Value: one of the following `"input"`, `"select"`, `"datepicker"`, `"timepicker"`, `"textarea"`, 
    `"password"`, `"wysiwyg"`

##### content
- Is: required if `type` is `"input"`
- Type: string
- Applies to: `"input"`

Represents the type for an <input> HTML element, and therefore can take the expected types 
such as `"text"`, `"number"`, `"date"`, `"checkbox"`, `"password"`, etc.
Can also take `"money"` (for monetary values inputs).  

##### disabled
- Is: optional
- Type: boolean

Flag that marks the disabled state for a form element. 

##### readonly
- Is: optional
- Type: boolean

Flag that marks the readonly state for a form element. 

##### placeholder
- Is: optional
- Type: string

The placeholder text used on that form element.

##### tooltip
- Is: optional
- Type: string

Tooltip used for that form element.

##### hidden
- Is: optional
- Type: boolean

Flag that marks the element as hidden, which means it will be rendered but will not be visible. 

##### custom
- Is: optional
- Type: boolean

Flag that marks this element as as CUSTOM. 
What this means is that the VueJS component does not attempt to insert an 
component for that element, but instead renders a named slot (the name being the element's `name`).

This allows you to build and insert custom elements in the form, for complex scenarios. 

#### Select only

##### options
- Is: optional
- Type: array of objects | string
- Applies to: `"select"`

If it is an array, it will be considered to be an array of options for that select element,
each object should contain an `id` and `name` label by default, for the `value` and `label` 
field respectively. You can modify these keys using the `trackBy` and `label` options below.
If it is a simple string, it will be considered to be an Enum class name, 
and the builder will attempt to get the select
values from the Enum.

##### trackBy
- Is: optional
- Type: string
- Applies to: `"select"`
- Default: `id`

Is the attribute that is to be used as identifier for each of the select options 
i.e. the name of the attribute that is  to be used when setting the value for the 
'value' attribute of an HTML `<option>` element. 

##### label
- Is: optional
- Type: string
- Applies to: `"select"`
- Default: `name`

Is the attribute that is to be used as label for each of the select options 
i.e. the name of the attribute that is 
to be used when setting the value for the an HTML `<option>` element. 

##### multiple
- Is: optional
- Type: boolean
- Applies to: `"select"`

Flag that determines the select element to accept multiple values (works as a multi-select).

##### source
- Is: optional
- Type: string
- Applies to: `"select"`

Flag that determines the select element to work in server-side mode, 
meaning that it will use the source URI in order to
fetch the list of options. When using the `source` parameter, the `options` parameter is not required. 

##### translated
- Is: optional
- Type: boolean
- Applies to: `"select"`

Flag that determines if the select options should be translated

##### disable-clear
- Is: optional
- Type: boolean
- Applies to: `"select"`

Flag that disables the button to clear a choice which is useful when a selected value is mandatory. 

##### objects
- Is: optional
- Type: boolean
- Applies to: `"select"`

Flag that puts the select in object mode, which means that the form, instead of storing a primitive value
for the selected value, stores the entire option object, which can be useful for complex scenarios 

##### pivotParams
- Is: optional
- Type: object
- Applies to: `"select"`

Pivot params that get used when using the Select component in server-side mode and are passed along
with the request, when loading or refreshing the option list.

If using the `OptionsBuilder` trait for the select's back-end endpoint, the pivot parameters
are applied automatically. 


##### customParams
- Is: optional
- Type: object
- Applies to: `"select"`

Custom params that get used when using the Select component in server-side mode and are passed along
with the request, when loading or refreshing the option list.

On the back-end, the custom params should be read from the request and applied as required.

#### Input only

##### step
- Is: optional
- Type: numeric
- Applies to: `"input"`

Parameter corresponds to the step parameter for an HTML <input> field.

##### min
- Is: optional
- Type: numeric
- Applies to: `"input"`

Parameter corresponds to the min parameter for an HTML `<input>` field, where the browser does a client side validation.

##### max
- Is: optional
- Type: numeric
- Applies to: `"input"`

Parameter corresponds to the max parameter for an HTML `<input>` field, where the browser does a client side validation.

#### Datepicker & Timepicker

##### format
- Is: optional
- Type: string
- Applies to: `"datepicker"`, `"timepicker"`

Represents the format of the date/time used for the component.

Since the [flatpickr](https://github.com/flatpickr/flatpickr) library is used, it requires its format. 
For more details, check the [documentation](https://flatpickr.js.org/formatting/).

##### time
- Is: optional
- Type: boolean
- Applies to: `"datepicker"`

Flag that enables the time picking functionality for the datepicker, 
in addition to the default date functionality

##### time12hr
- Is: optional
- Type: boolean
- Applies to: `"datepicker"`

Flag that enables the time picker to operate in 12h mode vs 24h mode.


#### Textarea only

##### rows
- Is: optional
- Type: numeric
- Applies to: `"textarea"`

##### resize
- Is: optional
- Type: boolean
- Applies to: `"textarea"`

Specifies the number of rows for the textarea.

#### Money Input

##### symbol
- Is: optional
- Type: string
- Applies to: a `"money"`-type `"input"`

Is the current symbol to be used for a money input, for example `"$"`.

##### precision
- Is: optional
- Type: string
- Applies to: a `"money"`-type `"input"`

Is the precision (decimal places) for the amount.

##### thousand
- Is: optional
- Type: string
- Applies to: a "money"-type `"input"`

Is the thousands separator for the amount.

##### decimal
- Is: optional
- Type: string
- Applies to: a `"money"`-type `"input"`

Is the decimal separator for the amount.

##### positive
- Is: optional
- Type: string
- Applies to: a `"money"`-type `"input"`

The format for positive amounts, e.g. `"%s %v"`
See the [accounting.js](http://openexchangerates.github.io/accounting.js/) library for more.

##### negative
- Is: optional
- Type: string
- Applies to: a `"money"`-type `"input"`

The format for negative amounts, e.g. `"%s (%v)"`
See the [accounting.js](http://openexchangerates.github.io/accounting.js/) library for more.

##### zero
- Is: optional
- Type: string
- Applies to: a `"money"`-type `"input"`

The format for zero amounts, e.g. `"%s  -- "`
See the [accounting.js](http://openexchangerates.github.io/accounting.js/) library for more.


## Examples
Following you will find several non-exhaustive examples, 
with most if not all of the types, and various parameter combinations. 

### Text input
A disabled generic text input
```json
{
    "label": "Description",
    "name": "description",
    "value": null,
    "meta": {
        "type": "input",
        "content": "text",
        "disabled": true
    }
}
```

### Numeric input
A numeric text input with a 1-5 range, and a 0.5 step when changing values
```json
{
    "label": "Temperature",
    "name": "temp",
    "value": null,
    "meta": {
        "type": "input",
        "content": "number",
        "min": 1,
        "max": 5,
        "step": 0.5
    }
}
```

### Checkbox input
A checkbox input, with a default value of true.
```json
{
    "label": "Is Enabled",
    "name": "is_enabled",
    "value": true,
    "meta": {
        "type": "input",
        "content": "checkbox"        
    }
}
```

### Textarea
A textarea with a placeholder and a 5 rows height. Note that the textarea is resizable only if you add the `"resize": true` property.
```json
{
    "label": "Story",
    "name": "story",
    "value": null,
    "meta": {
        "type": "textarea",
        "placeholder": "We'd love to hear your story",
        "rows": 5,
        "resize": true
    }
}
```

### wysiwyg
A basic what-you-see-is-what-you-get editor input.
```json
{
    "label": "Notes",
    "name": "obs",
    "value": null,
    "meta": {
        "type": "wysiwyg"        
    }
}
```

### DatePicker
The most basic datepicker, with a placeholder.
```json
{
    "label": "Start Date",
    "name": "start_date",
    "value": null,
    "meta": {
        "type": "datepicker",
        "placeholder": "Woot"
    }
}
```

### DatePicker with time
A datepicker also with time selection.
```json
{
    "label": "Pick Up",
    "name": "pick_up",
    "value": null,
    "meta": {
        "type": "datepicker",
        "time": true,
        "format": "m/d/Y h:m"
    }
}
```

### Timepicker
A timepicker with a placeholder and 24 hour format time. Note that if you use a 12 hour format time, on change, 
in the back end, you won't be able to differentiate between AM and PM. 
```json
{
    "label": "Reminder",
    "name": "reminder",
    "value": "13:59",
    "meta": {
        "type": "timepicker",
        "format": "H:i",
        "placeholder": "Select the time"
    }
}
```

### Single Select
A single select, with a default non-standard option list, a set value, and custom tracking attributes.
```json
{
    "label": "Country",
    "name": "country_id",
    "value": "a",
    "meta": {
        "type": "select",
        "multiple": false,
        "options": [{"slug":"a", "customLabel":"First"},{"slug":"b", "customLabel":"Second"}],
        "trackBy":"slug",
        "label":"customLabel"
    }
}
```

### Server Side Select
A server side single select, that fetches the list of options using the named route given as source.
```json
{
    "label": "Country",
    "name": "country_id",
    "value": null,
    "meta": {
        "type": "select",
        "multiple": false,
        "source": "core.addresses.countryOptions"
    }
}
```

### Multi-Select
A multi select, with no default value, no options and no server-side fetching option.
```json
{
    "label": "Types",
    "name": "type_id",
    "value": [],
    "meta": {
        "type": "select",
        "multiple": true,
        "options": []
    }
}
```

In this case, you would set the options list from within your controller/service/etc 
by calling the options method on the form builder object:

```php
$form->options('type_id', MyTypes::all())
```

Note: For more examples, you may look into the [Enso](https://github.com/laravel-enso) packages for various use cases.

## Publishes

- `php artisan vendor:publish --tag=form-config` - the configuration file,
- `php artisan vendor:publish --tag=forms` - the example JSON template file & form builder,

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
