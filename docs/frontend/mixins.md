---
sidebarDepth: 3
---

# Mixins

![NPM License](https://img.shields.io/npm/l/@liberu-ui/mixins.svg)
![npm download](https://img.shields.io/npm/dm/@liberu-ui/mixins.svg)
![GitHub top language](https://img.shields.io/github/languages/top/liberu-ui/mixins.svg)
![GitHub issues](https://img.shields.io/github/issues/liberu-ui/mixins.svg)
![npm version](https://img.shields.io/npm/v/@liberu-ui/mixins.svg)

Liberu Mixins Package

The mixins are used exclusively inside of the Liberu ecosystem.

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

## Installation

Installed by `@liberu-ui/ui`

### Exports

`@liberu-ui/mixins`:
- `canAccess`, 
- `errorHandler`, 
- `i18n`,
- `files`,

## Usage

The mixins are available for injection:

```vue
export default {
    name: 'LiberuSelect',

    inject: ['errorHandler', 'i18n'],

    components: { VueSelect },
``` 

You may then use them as needed.

## Contributions

are welcome. Pull requests are great, 
but issues are good too.

Thank you to all the people who already contributed to Liberu!

## License

[ISC](https://opliberuurce.org/licenses/ISC)
