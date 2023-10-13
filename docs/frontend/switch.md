---
sidebarDepth: 3
---

# Vue Switch

![npm license](https://img.shields.io/npm/l/@liberu-ui/progress-bar.svg) 
![npm download](https://img.shields.io/npm/dm/@liberu-ui/progress-bar.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/liberu-ui/progress-bar.svg) 
![GitHub issues](https://img.shields.io/github/issues/liberu-ui/progress-bar.svg) 
![npm version](https://img.shields.io/npm/v/@liberu-ui/progress-bar.svg) 

Vue Switch

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

## Installation

Install the package:
```
yarn add @liberu-ui/switch
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

### Exports

`@liberu-ui/switch/bulma`:
- `VueSwitch`


## Usage

Import the component:
```js
import VueSwitch from '@liberu-ui/switch/bulma';
```

### VueSwitch

The bulma styled switch component. 

#### Example:
```vue
<vue-switch class="has-margin-medium is-info"
    v-model="myModel">
    Enable
</vue-switch>
```

#### Props
- `disabled` - `boolean`, optional - if true, the control is disabled
- `readonly` - `boolean`, optional - if true, the control is readonly

##### Via classes
- you can adjust the size by adding `is-large`, `is-medium`, `is-small`
- you cand style with with `is-info`, `is-warning`, `is-danger`, `is-success`, `is-primary`

Events:
- `input`, emitted when the value is changed, with the value/state as payload

Slots:
- `default`, can be used for having a control label

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opliberuurce.org/licenses/ISC)
