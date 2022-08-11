## v0.33.0 (2022-08-11)

* 💥 add `modal` attribute to `sinch-popover`, `sinch-action-menu`
* ➕ add `top` and `bottom` orientation values to `sinch-popover`
* ➕ add `icon` slot to `sinch-input`
* 🐞 fix border style in `sinch-input`
* 🐞 fix `maxvisibleitems` scroll in `sinch-dropdown` and `sinch-action-menu`
* 🐞 fix cursor position in `sinch-input` and `sinch-textarea`
* 🐞 hide bottom row when empty in `sinch-input`, `sinch-textarea`, `sinch-select`
* 🐞 propagate `close-aria-label` attribute to close button in `sinch-dialog`

## v0.32.0 (2022-08-04)

* ➕ add `sinch-time-picker` component
* ➕ update focused style in `sinch-icon-button`
* 🐞 fix label to open dropdown in `sinch-select`
* 🐞 hide empty action slot in `sinch-segment`
* 🐞 fix unexpected closing of `sinch-dialog`
* 🐞 fix `sinch-segmented-control` height
* 🐞 fix icon import in `sinch-link`

## v0.31.0 (2022-07-28)

* 💥 move illustrations from `illustration/` to `illustrations/`
* ➕ add a lot of illustrations
* ➕ add more branded icons
* 🐞 fix timezones in `sinch-date-picker`
* 🐞 fix collapse button position in `sinch-segment`
* 🐞 fix content overflow in `sinch-segment`

## v0.30.0 (2022-07-27)

* ➕ add `sinch-date-picker` component
* ➕ add `right` slot to `sinch-input`
* ➕ add `preview` slot and `size` attribute to `sinch-segment`
* ➕ add `background` attribute to illustrations
* ➕ add `target="_blank"` to external `sinch-link`
* ➕ handle `--sinch-dialog-max-width` variable in `sinch-dialog`
* ➕ add `sinch-elevation-level-*` theme variables
* ➕ add `sinch-shape-radius-*` theme variables
* ➕ add `background` colors to theme
* ➕ add square channel icons
* ➕ add channel branded icons
* ➕ add `keyboard-double-arrow-*` icons
* 🐞 fix popover position during resize
* 🐞 fix document scroll in `sinch-dialog` and `sinch-popover`
* 🐞 prevent closing multiple dialogs with single click
* 🐞 fix text overflow in `sinch-tooltip`
* 🐞 fix angular crash in `sinch-text`, `sinch-title`, `sinch-avatar-status`

## v0.29.1 (2022-07-11)

* 🐞 fix border glitch in various components
* 🐞 fix paddings in `sinch-action-menu` and `sinch-dropdown`
* 🐞 expand height in `sinch-card-container`

## v0.29.0 (2022-07-07)

* 💥 rename `title` to `caption` in `sinch-alert`
* 💥 rename `header` to `caption` in `sinch-card`
* 💥 rename `aria-level` to `level` property in `sinch-title`
* ➕ add `sinch-list` component
* ➕ add `sinch-text` component
* ➕ add `--sinch-font-text-*` variables to `theme.css`
* ➕ add all MUI icons

## v0.28.0 (2022-07-01)

* 💥 remove index file
* 💥 rename `icon` slot to `left-icon` and add `right-icon` slot to `sinch-button`
* ➕ add `sinch-action-menu` component
* ➕ allow multiline text in `sinch-table-head-cell`
* ➕ add more icons

## v0.27.0 (2022-06-29)

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

## v0.26.0 (2022-06-22)

* ➕ add `sinch-segmented-icon-control` component
* ➕ add editor icons
* ➕ add content icons
* ➕ add `sinch-icon-smart-toy` icon
* 🐞 fix `sinch-dialog` width
* 🐞 fix `sinch-segmented-control` border color
* 🐞 fix `sinch-segment` clickable area to expand/collapse
* 🐞 fix `sinch-popover` border style
* 🐞 fix `sinch-popover` default padding

## v0.25.0 (2022-06-20)

* 🎉 move to the new GitLab
* ➕ add `sinch-segmented-control` component
* 🐞 add missing colors to `colors.json`

## v0.24.0 (2022-06-15)

* 💥 add `setNectaryRegistry` mandatory call to define registry for Nectary components
* 🐞 fix components to work inside of ShadowRoot

## v0.23.0 (2022-06-13)

* 💥 move branded icons from `/icon-branded/` to `/icons-branded/` and prefix component names with `-branded-`
* 💥 move icons from `/icon/` to `/icons/`
* ➕ handle `--sinch-dialog-max-height` variable in `sinch-dialog`
* ➕ add `sinch-icon-branded-bell` component
* ➕ add channel icons
* ➕ add more Material icons

## v0.22.0 (2022-06-09)

* 💥 remove `sinch-table-head-sort` component
* ➕ handle `--sinch-icon-button-color` variable in `sinch-icon-button`
* ➕ add `--sinch-color-tropical-50` and `--sinch-color-raspberry-50` colors
* ➕ add `left` and `right` slots to `sinch-table-head-cell`
* ➕ add `selected` attr and hover state to `sinch-table-row`
* ➕ add `sinch-icon-filter-list` component
* ➕ add `sinch-card-container` component
* 🐞 fix default background in form components

## v0.21.0 (2022-06-08)

* 💥 add `open` attribute and `close` event to `sinch-dropdown`
* ➕ add `sinch-popover` component
* 🐞 fix segment content overflow
* 🐞 handle dialog `close` function missing in JsDom

## v0.20.0 (2022-06-02)

* 💥 rename `theme.css` title variables
* ➕ add `sinch-title` component
* ➕ add `sinch-avatar-status`
* ➕ add `sinch-avatar-badge`
* ➕ add selection api to `sinch-search`
* 🐞 fix dead letters in `sinch-search`
* 🐞 update `sinch-avatar` sizes

## v0.19.0 (2022-05-25)

* ➕ add `sinch-chat`, `sinch-chat-block`, `sinch-chat-bubble`, `sinch-chat-avatar`
* 🐞 prevent opening `sinch-dialog` and `sinch-dropdown` if already open
* 🐞 fix `sinch-dialog` not propagating click events

## v0.18.0 (2022-05-19)

* ➕ add `sinch-avatar` component
* ➕ add selection api to `sinch-input` and `sinch-textarea`
* ➕ add `rows` and `resizable` attributes to `sinch-textarea`
* ➕ add `optionaltext` attribute to `sinch-accordion-item`
* ➕ add `colors.json` file with theme colors
* 🐞 hide clear button when missing `value` attribute in `sinch-search`

## v0.17.0 (2022-05-11)

* ➕ add `sinch-segment` component
* ➕ add `small` attribute to `sinch-icon-button`
* 🐞 fix dead keys in `sinch-input` and `sinch-textarea` for Linux layouts

## v0.16.1 (2022-05-06)

* 🐞 fix dead keys in `sinch-input` and `sinch-textarea`

## v0.16.0 (2022-05-05)

* 💥 rename `title` to `caption` in `sinch-dialog`
* ➕ add pointer cursor to `sinch-select` and `sinch-dropdown`
* 🐞 fix `sinch-dialog` popover clip
* 🐞 fix `sinch-dropdown` popover clip
* 🐞 fix `sinch-select` popover clip

## v0.15.0 (2022-04-27)

* ➕ add 54 icons
* ➕ add `sinch-spinner` accessibility attributes
* 🐞 fix `sinch-dialog` content padding

## v0.14.0 (2022-04-13)

* ➕ add `sinch-search` component
* ➕ add `sinch-icon-search` component
* ➕ add type `password` to `sinch-input`

## v0.13.0 (2022-04-11)

* 💥 remove `size` attribute in icons
* 💥 remove `small` attribute in `sinch-tag-close`
* ➕ add `sinch-icon-button` component
* 🐞 import close icon in `sinch-dialog`

## v0.12.0 (2022-04-08)

* ➕ add `sinch-grid` component
* 🐞 disable pointer events for illustrations
* 🐞 import `sinch-dropdown` in `sinch-select`
* 🐞 update `sinch-tab` font style

## v0.11.2 (2022-04-07)

* 🐞 update focused border color for `sinch-input`, `sinch-textarea`, `sinch-select`
* 🐞 update border radius for `sinch-input`, `sinch-textarea`, `sinch-select`
* 🐞 update `sinch-card` illustration size

## v0.11.1 (2022-03-31)

* 🐞 fix `sinch-dialog` z-index

## v0.11.0 (2022-03-30)

* ➕ add `sinch-dialog` component
* ➕ add `sinch-card` component
* ➕ add `sinch-illustration-phone-and-cat` component
* ➕ add arrow icons
* 🐞 fix theme title-5 `font-size`

## v0.10.0 (2022-03-22)

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

## v0.9.0 (2022-03-11)

* ➕ add `sinch-pagination` component

## v0.8.1 (2022-03-07)

* 🐞 fix text colors in `sinch-checkbox`, `sinch-toggle`, `sinch-select`, `sinch-accordion`, `sinch-table`, `sinch-tabs`
* 🐞 fix dropdown overlay in `sinch-select`

## v0.8.0 (2022-02-28)

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

## v0.7.1 (2022-02-09)

* 🐞 fix Jest accessing `scrollIntoView`, missing in jsdom

## v0.7.0 (2022-02-09)

* 💥 extract `sinch-alert-close` and `sinch-alert-button`
* 💥 change default slot name to `icon` in `sinch-tabs-option`, `sinch-select-option`, `sinch-button`
* 💥 change default slot name to `content` in `sinch-accordion-item`
* 💥 pass events instead of values to React `onChange` handlers in `sinch-toggle`, `sinch-textarea`, `sinch-tabs`, `sinch-select`, `sinch-radio`, `sinch-input`, `sinch-checkbox`, `sinch-accordion`
* ➕ pass events to React `onFocus`, `onBlur`, `onClick` handlers in `sinch-button`, `sinch-accordion-item`, `sinch-tabs-option`, `sinch-radio-option`, `sinch-textarea`, `sinch-input`, `sinch-checkbox`
* ➕ add `sinch-tag` and `sinch-tag-close` components
* ➕ add complementary colors to theme
* 🐞 add `id` to components react types

## v0.6.1 (2022-01-28)

* 🐞 fix `sinch-select` accessing closed shadowRoot

## v0.6.0 (2022-01-21)

* ➕ add `sinch-accordion` component
* 🐞 delegate focus enabled for `sinch-textarea`
* 💥 element properties use `null` instead of `undefined`

## v0.5.1 (2022-01-17)

* 🐞 fix `sinch-tabs` accessing closed shadowRoot
* 🐞 fix `sinch-radio` accessing closed shadowRoot

## v0.5.0 (2022-01-14)

* ➕ add `sinch-tabs` component
* 🐞 fix `sinch-spinner` error message

## v0.4.0 (2022-01-10)

* ➕ add `sinch-alert` component
* ➕ add `sinch-spinner` component
* ➕ add `maxVisibleItems` property to `sinch-select`
* 🐞 fix `sinch-input` controlled value
* 🐞 fix `sinch-radio` controlled value

## v0.3.0 (2021-12-17)

* ➕ add `sinch-radio` component

## v0.2.0 (2021-12-15)

* 💥 use Gilroy in all font styles

## v0.1.2 (2021-12-03)

* 🐞 Input, Textarea, Select: fix label max-width
* 🐞 Button: set cursor to pointer

## v0.1.1 (2021-11-24)

* 🐞 Button: fixed `onClick` handler in React
* 🛠 fixed JSX/DOM Element types

## v0.1.0 (2021-11-23)

* 🐣 initial release
