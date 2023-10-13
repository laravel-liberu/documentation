---
sidebarDepth: 3
---

# Tree View

![npm license](https://img.shields.io/npm/l/@liberu-ui/tree-view.svg) 
![npm download](https://img.shields.io/npm/dm/@liberu-ui/tree-view.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/liberu-ui/tree-view.svg) 
![GitHub issues](https://img.shields.io/github/issues/liberu-ui/tree-view.svg) 
![npm version](https://img.shields.io/npm/v/@liberu-ui/tree-view.svg) 

A Tree View component, allowing the user to select an item from the tree.

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

## Installation

Install the package:
```
yarn add @liberu-ui/tree-view
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

Import the desired component(s):
```js
import TreeView from '@liberu-ui/tree-view/bulma';
```

### Exports

`@liberu-ui/tree-view/bulma`:
- `TreeView`,

Note that this package has a couple of external dependencies. 
Read [here](https://docs.liberu.co.uk/frontend/#other-dependencies) for more info.

## Usage
Import the desired component(s):
```js
import TreeView from '@liberu-ui/tree-view/bulma';
```

### TreeView
This is the bulma styled component.

### Example:
```vue
<tree-view :items="categories"
    v-model="myModel"
    v-if="categories"
    ref="treeView"/>
```

### Props
- `items` - `array`, required - the list of items to be shown. Each item must have an id and name attributes
- `value` - `number`, optional - default is `null`, the currently selected item 

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
