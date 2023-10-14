---
sidebarDepth: 3
---

# Search Mode

![npm license](https://img.shields.io/npm/l/@liberu-ui/search-mode.svg) 
![npm download](https://img.shields.io/npm/dm/@liberu-ui/search-mode.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/liberu-ui/search-mode.svg) 
![GitHub issues](https://img.shields.io/github/issues/liberu-ui/search-mode.svg) 
![npm version](https://img.shields.io/npm/v/@liberu-ui/search-mode.svg) 

A simple search mode component, allowing the user to select a search mode from 
full, startsWith, endsWith.

Can be used outside of the Liberu ecosystem.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

## Installation

Install the package:
```
yarn add @liberu-ui/search-mode
```

(within Liberu, remember to `cd` into the `client` folder before installing front-end assets)

Import the desired component(s):
```js
import SearchMode from '@liberu-ui/search-mode/bulma';
```

### Exports

`@liberu-ui/search-mode/bulma`:
- `SearchMode`,
`@liberu-ui/search-mode/renderless`:
- `CoreSearchMode`,

Note that this package has a couple of external dependencies. 
Read [here](https://docs.liberu.co.uk/frontend/#other-dependencies) for more info.

## Usage
Import the desired component(s):
```js
import SearchMode from '@liberu-ui/search-mode/bulma';
```

### SearchMode
This is the bulma styled component.

### Example:
```vue
<search-mode class="is-right is-small search-mode"
    v-bind="modeBindings"
    v-on="modeEvents"
    v-if="modeSelector"/>
```

### Props
- `value` - `string`, optional - default is `full`, valid options are 'full', 'startsWith', 'endsWith'
- `modes` - `array`, optional - default is `['full', 'startsWith', 'endsWith']`. 
If only one mode is available, the mode selector will not be visible
- `query` - `string`, required, is used to display the search mode indicator 

### Methods
- `update()`, switches the mode to the next available mode abd emits `change` & `input` events

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Liberu!

## License

[ISC](https://opliberuurce.org/licenses/ISC)
