## v0.14.0

* ➕ add `sinch-search` component
* ➕ add `sinch-icon-search` component
* ➕ add type `password` to `sinch-input`

## v0.13.0

* 💥 remove `size` attribute in icons
* 💥 remove `small` attribute in `sinch-tag-close`
* ➕ add `sinch-icon-button` component
* 🐞 import close icon in `sinch-dialog`

## v0.12.0

* ➕ add `sinch-grid` component
* 🐞 disable pointer events for illustrations
* 🐞 import `sinch-dropdown` in `sinch-select`
* 🐞 update `sinch-tab` font style

## v0.11.2

* 🐞 update focused border color for `sinch-input`, `sinch-textarea`, `sinch-select`
* 🐞 update border radius for `sinch-input`, `sinch-textarea`, `sinch-select`
* 🐞 update `sinch-card` illustration size

## v0.11.1

* 🐞 fix `sinch-dialog` z-index

## v0.11.0

* ➕ add `sinch-dialog` component
* ➕ add `sinch-card` component
* ➕ add `sinch-illustration-phone-and-cat` component
* ➕ add arrow icons
* 🐞 fix theme title-5 `font-size`

## v0.10.0

* 💥 split button type `cta` to `cta-primary` and `cta-secondary`
* 💥 require `aria-label` React prop for interactive components
* 💥 refactor `sinch-select` component using `sinch-dropdown`
* 💥 change slot name `select` to `option` in `sinch-select` component
* ➕ add `sinch-dropdown` component
* ➕ add `invalid` property to `sinch-checkbox`
* ➕ add icon only `sinch-button`
* ➕ add `onKeyPress` handler to `sinch-input`, `sinch-textarea` React type
* ➕ enable font-face `display: swap` in `theme.css`
* 🐞 fix `sinch-input` and `sinch-textarea` cursor position when typing
* 🐞 fix `sinch-input` and `sinch-textarea` icon colors
* 🐞 improve accessibility attributes

## v0.9.0

* ➕ add `sinch-pagination` component

## v0.8.1

* 🐞 fix text colors in `sinch-checkbox`, `sinch-toggle`, `sinch-select`, `sinch-accordion`, `sinch-table`, `sinch-tabs`
* 🐞 fix dropdown overlay in `sinch-select`

## v0.8.0

* 💥 change package name to `@sinch-engage/nectary`, see readme
* 💥 rename `sinch-input-tooltip` to `sinch-help-tooltip`
* 💥 rename `sinch-icon-tooltip` to `sinch-icon-help-outline`
* 💥 change default icon size to 24 instead of 16
* ➕ add `sinch-table`
* ➕ make `text` optional in `sinch-toggle`
* ➕ make `text` optional in `sinch-checkbox`
* ➕ make `category` optional in `sinch-tag`
* ➕ export element types
* 🐞 fix theme emphasized body font weight

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
