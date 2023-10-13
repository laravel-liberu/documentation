---
sidebarDepth: 3
---

# WYSIWYG

![npm license](https://img.shields.io/npm/l/@liberu-ui/wysiwyg.svg) 
![npm download](https://img.shields.io/npm/dm/@liberu-ui/wysiwyg.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/liberu-ui/wysiwyg.svg) 
![GitHub issues](https://img.shields.io/github/issues/liberu-ui/wysiwyg.svg) 
![npm version](https://img.shields.io/npm/v/@liberu-ui/wysiwyg.svg) 

What-you-see-is-what-you-get text editor

## Usage

The components can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

### Installation

Install the package:
```
yarn add @liberu-ui/wysiwyg
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

Import the desired component(s):
```js
import Wysiwyg from '@liberu-ui/wysiwyg/bulma';
```

Note that this package has a couple of external dependencies. 
Read [here](https://docs.liberu.co.uk/frontend/#other-dependencies) for more info.

### Exports

`@liberu-ui/wysiwyg/bulma`:
- `Wysiwyg`,

### bulma/Uploader.vue

A bulma styled typeahead component built on top of its renderless counterpart.

Example:
```vue
<wysiwyg v-model="myModel"
    :readonly="isReadonly"
    :has-error="hasErrors"
    @input="customHandleInput"/>
```

Properties:
- `hasError` - `boolean`, optional, default `false`, if true, applies the 'is-danger' class on the editor
- `placeholder` - `string`, optional, default `Write something...`
- `readonly` - `boolean`, optional, default `false`, if true, the editor is readonly
- `value` - `string|object`, required, default `''`, the editor's value

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `@fortawesome/fontawesome-free`
- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/vue-fontawesome`
- `tiptap`
- `tiptap-commands`
- `tiptap-extensions`
- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opliberuurce.org/licenses/ISC)
