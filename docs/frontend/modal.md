---
sidebarDepth: 3
---

# Modal

![npm license](https://img.shields.io/npm/l/@liberu-ui/modal.svg) 
![npm download](https://img.shields.io/npm/dm/@liberu-ui/modal.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/liberu-ui/modal.svg) 
![GitHub issues](https://img.shields.io/github/issues/liberu-ui/modal.svg) 
![npm version](https://img.shields.io/npm/v/@liberu-ui/modal.svg) 

Simple Modal Component

The component can be used outside of the Enso ecosystem.

## Installation

Install the package:
```
yarn add @liberu-ui/modal
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

### Exports

`@liberu-ui/modal/bulma`:
- `Modal`
- `ModalCard`

`@liberu-ui/modal/renderless`:
- `CoreModal`

## Usage

Import the desired component(s):
```js
import { Modal, ModalCard } from '@liberu-ui/modal/bulma';
import { CoreModal } from '@liberu-ui/modal/renderless';
```

### CoreModal.vue
This modal component renders its contents within a card and is built upon the renderless modal component.

#### Props
- `transitionDuration` - `Number`, optional, default `500`, the duration of the transition animation
- `portal` - `string`, optional, default `modals`, the query selector for the portal of the modal. 

#### Slots

Has a default scopedSlot that exposes the `close` method.

### Modal

The bulma styled modal component built on top of its renderless version. 

Example:
```vue
<modal v-if="visible"
    @close="doSomethingElse">
    <div class="box">
        <h5 class="subtitle is-5">
            {{ i18n("Are you sure?") }}
        </h5>
        <hr>
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <button class="button is-outlined"
                        @click="cancel">
                        {{ i18n('Cancel') }}
                    </button>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <button class="button is-danger has-margin-left-small"
                        @click="doSomething">
                        {{ i18n('Yes') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</modal>
```

#### Props
All the props from `CoreModal` can be provided here

Slots:
- `default`, all content goes here

### ModalCard

This modal component renders its contents within a card and is built upon the renderless modal component.

#### Props
All the props from `CoreModal` can be provided here

Slots:
- `header`, the card header contents go here
- `body`, the card body contents go here
- `footer`, the card header contents go here

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
