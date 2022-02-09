## v0.7.1

* 🐞 fix Jest accessing `scrollIntoView`, missing in jsdom

## v0.7.0

* 💥 extract `sinch-alert-close` and `sinch-alert-button`
* 💥 change default slot name to `icon` in `sinch-tabs-option`, `sinch-select-option`, `sinch-button`
* 💥 change default slot name to `content` in `sinch-accordion-item`
* 💥 pass events instead of values to React `onChange` handlers in `sinch-toggle`, `sinch-textarea`, `sinch-tabs`, `sinch-select`, `sinch-radio`, `sinch-input`, `sinch-checkbox`, `sinch-accordion`
* ➕ pass events to React `onFocus`, `onBlur`, `onClick` handlers in `sinch-button`, `sinch-accordion-item`, `sinch-tabs-option`, `sinch-radio-option`, `sinch-textarea`, `sinch-input`, `sinch-checkbox`
* ➕ add `sinch-tag` and `sinch-tag-close` components
* ➕ add complementary colors to theme
* 🐞 add `id` to components react types

## v0.6.1

* 🐞 fix `sinch-select` accessing closed shadowRoot

## v0.6.0

* ➕ add `sinch-accordion` component
* 🐞 delegate focus enabled for `sinch-textarea`
* 💥 element properties use `null` instead of `undefined`

## v0.5.1

* 🐞 fix `sinch-tabs` accessing closed shadowRoot
* 🐞 fix `sinch-radio` accessing closed shadowRoot

## v0.5.0

* ➕ add `sinch-tabs` component
* 🐞 fix `sinch-spinner` error message

## v0.4.0

* ➕ add `sinch-alert` component
* ➕ add `sinch-spinner` component
* ➕ add `maxVisibleItems` property to `sinch-select`
* 🐞 fix `sinch-input` controlled value
* 🐞 fix `sinch-radio` controlled value

## v0.3.0

* ➕ add `sinch-radio` component

## v0.2.0

* 💥 use Gilroy in all font styles

## v0.1.2

* 🐞 Input, Textarea, Select: fix label max-width
* 🐞 Button: set cursor to pointer

## v0.1.1

* 🐞 Button: fixed `onClick` handler in React
* 🛠 fixed JSX/DOM Element types

## v0.1.0

* 🐣 initial release
