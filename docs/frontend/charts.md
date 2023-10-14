---
sidebarDepth: 3
---

# Charts

![NPM License](https://img.shields.io/npm/l/@liberu-ui/charts.svg)
![npm download](https://img.shields.io/npm/dm/@liberu-ui/charts.svg)
![GitHub top language](https://img.shields.io/github/languages/top/liberu-ui/charts.svg)
![GitHub issues](https://img.shields.io/github/issues/liberu-ui/charts.svg)
![npm version](https://img.shields.io/npm/v/@liberu-ui/charts.svg)

Vue Charts Package

Can be used outside of the Liberu ecosystem.

Should be used with its backend [sibling](https://github.com/laravel-liberu/Charts)

For live examples and demos, you may visit [liberu.co.uk](https://www.liberu.co.uk)

## Installation

Install the package:
```
yarn add @liberu-ui/charts
```

(within Liberu, remember to `cd` into the `client` folder before installing front-end assets)

Note that this package has a couple of external dependencies. 
Read [here](https://docs.liberu.co.uk/frontend/#other-dependencies) for more info.

### Exports

`@liberu-ui/charts/bulma`:
- `Chart`,
- `ChartCard`,
- `LiberuChartCard`,
`@liberu-ui/charts`:
- `Chart`,
- `colors`,

## Usage
Import the desired component(s):
```js
import { LiberuChartCard as ChartCard } from '@liberu-ui/charts/bulma';
```

```js
import { Chart, colors } from '@liberu-ui/charts';
```

### ChartCard.vue

Bulma Chart Card implementation on top of the Card component.

#### Example:
```vue
<chart-card class="is-rounded raises-on-hover has-margin-bottom-large"
    source="/api/dashboard/pie"/>
```

#### Props
- `collapsed` - `boolean`, optional - controls the card's initial render state
- `errorHandler` - `function`, optional - provides a custom error handler for axios
- `i18n` - `function`, optional - provides localisation
- `params` - `Object`, optional - parameter bag that is sent to the backend when fetching data
- `source` - `string`, required - the URI used for fetching the chart data
 
#### Methods
- `fetch()` - fetches data from the backend
- `resize()` - resizes the charts

### LiberuChartCard

The above component designed to be used within the Liberu ecosystem, requiring less configuration from the dev. 

#### Example:
```vue
<chart-card class="is-rounded raises-on-hover has-margin-bottom-large"
    source="/api/dashboard/pie"/>
```

#### Props
- `params` - `Object`, optional, default `null`, extra parameters that get sent to the backend when fetching data
- `source` - `string`, required, the URI used for fetching the chart data

#### Methods
- `fetch()` - fetches data from the backend
- `resize()` - resizes the charts

### Chart

CSS framework agnostic Chart implementation.

#### Example:
```vue
<chart class="has-padding-medium"
    :data="data"
    :options="options"
    :type="type"/>
```

#### Props
- `data` - `Object`, required - the data for the chart
- `shortNumbers`,`Boolean`, optional - default `false`, if true, applies short number formatting for the chart values
    Note that if both `shortNumber` and `formatter` is given, only short number is applied and the formatter 
    function is ignored
- `formatter` - `function`, optional - datalabels values formatter function
    Note that `formatter` is incompatible with `shortNumber` 
- `options` - `Object`, optional - options object for chart.js
- `type` - `string`, required - specifies the type of chart.  Valid types are 'line', 'bar', 'radar', 'polarArea', 'pie', 'doughnut', 'bubble'.
 
#### Methods
- `resize()` - resizes the charts

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## External Dependencies

Built with [chart.js](https://www.chartjs.org/docs/latest/).

Uses [chartjs-plugin-datalabels](https://chartjs-plugin-datalabels.netlify.com/)

For PNG download uses [file-saver](https://github.com/eligrey/FileSaver.js#readme)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Liberu!

## License

[ISC](https://opliberuurce.org/licenses/ISC)
