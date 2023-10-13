---
sidebarDepth: 3
---

# Scroll to top

![npm license](https://img.shields.io/npm/l/@liberu-ui/scroll-to-top.svg) 
![npm download](https://img.shields.io/npm/dm/@liberu-ui/scroll-to-top.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/liberu-ui/scroll-to-top.svg) 
![GitHub issues](https://img.shields.io/github/issues/liberu-ui/scroll-to-top.svg) 
![npm version](https://img.shields.io/npm/v/@liberu-ui/scroll-to-top.svg) 

Scroll to top functionality

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

## Installation

Install the package:
```
yarn add @liberu-ui/scroll-to-top
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

### Exports

`@liberu-ui/scroll-to-top/bulma`:
- `ScrollToTop`
`@liberu-ui/scroll-to-top/renderless`:
- `CoreScrollToTop`

## Usage

Import the desired component(s):
```js
import ScrollToTop from '@liberu-ui/scroll-to-top/bulma';
import CoreScrollToTop from '@liberu-ui/scroll-to-top/renderless';
```

### ScrollToTop
The bulma styled scroll-to-top component. 

Example:
```vue
<scroll-to-top :progress="progress"/>
```

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
