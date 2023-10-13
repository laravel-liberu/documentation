---
sidebarDepth: 3
---

# Progress Bar

![npm license](https://img.shields.io/npm/l/@liberu-ui/progress-bar.svg) 
![npm download](https://img.shields.io/npm/dm/@liberu-ui/progress-bar.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/liberu-ui/progress-bar.svg) 
![GitHub issues](https://img.shields.io/github/issues/liberu-ui/progress-bar.svg) 
![npm version](https://img.shields.io/npm/v/@liberu-ui/progress-bar.svg) 

Progress Bar

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

## Installation

Install the package:
```
yarn add @liberu-ui/progress-bar
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

### Exports

`@liberu-ui/progress-bar`:
- `ProgressBar`

## Usage

Import the desired component(s):
```js
import ProgressBar from '@liberu-ui/progress-bar';
```

### ProgressBar
The bulma styled progress bar component. 

Example:
```vue
<progress-bar :progress="progress"
    :transition="0.3"
    color="#f44336"
    position="fixed"
    v-if="visible"/>
```

Properties:
- `color` - `string`, optional, default `#f44336` - the color of the bar
- `thickness` - `number`, optional, default `2` - the height in pixels of the bar 
- `transition` - `number`, optional, default `0` - the transitions speed in seconds
- `opacity` - `number`, optional, default `1` - the opacity of the bar (must be between 0 and 1)
- `progress` - `number`, required - the progress percentage (must be between 0 and 100)
- `position` - `string`, optional - the position (must be either `absolute` or `absolute`)

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
