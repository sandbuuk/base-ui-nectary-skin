## v0.29.1

* 🐞 fix border glitch in various components
* 🐞 fix paddings in `sinch-action-menu` and `sinch-dropdown`
* 🐞 expand height in `sinch-card-container`

## v0.29.0

* 💥 rename `title` to `caption` in `sinch-alert`
* 💥 rename `header` to `caption` in `sinch-card`
* 💥 rename `aria-level` to `level` property in `sinch-title`
* ➕ add `sinch-list` component
* ➕ add `sinch-text` component
* ➕ add `--sinch-font-text-*` variables to `theme.css`
* ➕ add all MUI icons

## v0.28.0

* 💥 remove index file
* 💥 rename `icon` slot to `left-icon` and add `right-icon` slot to `sinch-button`
* ➕ add `sinch-action-menu` component
* ➕ allow multiline text in `sinch-table-head-cell`
* ➕ add more icons

## v0.27.0

* 💥 remove keyboard arrows control in `sinch-segmented-control`
* 💥 rename `sinch-dropdown-option` to `sinch-dropdown-text-option`
* ➕ add `sinch-dropdown-checkbox-option` component
* ➕ add `sinch-dropdown-radio-option` component
* ➕ add `multiple` attribute to `sinch-dropdown`
* ➕ add chat bubble statuses
* ➕ add branded icons
* ➕ add action icons
* 🐞 fix `sinch-popover` position
* 🐞 improve focus behaviour in `sinch-segmented-control`
* 🐞 improve focus behaviour in `sinch-segmented-icon-control`

## v0.26.0

* ➕ add `sinch-segmented-icon-control` component
* ➕ add editor icons
* ➕ add content icons
* ➕ add `sinch-icon-smart-toy` icon
* 🐞 fix `sinch-dialog` width
* 🐞 fix `sinch-segmented-control` border color
* 🐞 fix `sinch-segment` clickable area to expand/collapse
* 🐞 fix `sinch-popover` border style
* 🐞 fix `sinch-popover` default padding

## v0.25.0

* 🎉 move to the new GitLab
* ➕ add `sinch-segmented-control` component
* 🐞 add missing colors to `colors.json`

## v0.24.0

* 💥 add `setNectaryRegistry` mandatory call to define registry for Nectary components
* 🐞 fix components to work inside of ShadowRoot

## v0.23.0

* 💥 move branded icons from `/icon-branded/` to `/icons-branded/` and prefix component names with `-branded-`
* 💥 move icons from `/icon/` to `/icons/`
* ➕ handle `--sinch-dialog-max-height` variable in `sinch-dialog`
* ➕ add `sinch-icon-branded-bell` component
* ➕ add channel icons
* ➕ add more Material icons

## v0.22.0

* 💥 remove `sinch-table-head-sort` component
* ➕ handle `--sinch-icon-button-color` variable in `sinch-icon-button`
* ➕ add `--sinch-color-tropical-50` and `--sinch-color-raspberry-50` colors
* ➕ add `left` and `right` slots to `sinch-table-head-cell`
* ➕ add `selected` attr and hover state to `sinch-table-row`
* ➕ add `sinch-icon-filter-list` component
* ➕ add `sinch-card-container` component
* 🐞 fix default background in form components

## v0.21.0

* 💥 add `open` attribute and `close` event to `sinch-dropdown`
* ➕ add `sinch-popover` component
* 🐞 fix segment content overflow
* 🐞 handle dialog `close` function missing in JsDom

## v0.20.0

* 💥 rename `theme.css` title variables
* ➕ add `sinch-title` component
* ➕ add `sinch-avatar-status`
* ➕ add `sinch-avatar-badge`
* ➕ add selection api to `sinch-search`
* 🐞 fix dead letters in `sinch-search`
* 🐞 update `sinch-avatar` sizes

## v0.19.0

* ➕ add `sinch-chat`, `sinch-chat-block`, `sinch-chat-bubble`, `sinch-chat-avatar`
* 🐞 prevent opening `sinch-dialog` and `sinch-dropdown` if already open
* 🐞 fix `sinch-dialog` not propagating click events

## v0.18.0

* ➕ add `sinch-avatar` component
* ➕ add selection api to `sinch-input` and `sinch-textarea`
* ➕ add `rows` and `resizable` attributes to `sinch-textarea`
* ➕ add `optionaltext` attribute to `sinch-accordion-item`
* ➕ add `colors.json` file with theme colors
* 🐞 hide clear button when missing `value` attribute in `sinch-search`

## v0.17.0

* ➕ add `sinch-segment` component
* ➕ add `small` attribute to `sinch-icon-button`
* 🐞 fix dead keys in `sinch-input` and `sinch-textarea` for Linux layouts

## v0.16.1

* 🐞 fix dead keys in `sinch-input` and `sinch-textarea`

## v0.16.0

* 💥 rename `title` to `caption` in `sinch-dialog`
* ➕ add pointer cursor to `sinch-select` and `sinch-dropdown`
* 🐞 fix `sinch-dialog` popover clip
* 🐞 fix `sinch-dropdown` popover clip
* 🐞 fix `sinch-select` popover clip

## v0.15.0

* ➕ add 54 icons
* ➕ add `sinch-spinner` accessibility attributes
* 🐞 fix `sinch-dialog` content padding

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
