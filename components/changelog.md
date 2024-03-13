## v2.8.5 (2024-03-13)

- 🐞 fix: Replace global usage with globalThis
- ➕ add autofocus prop on input
- ➕ add --sinch-comp-dialog-width css variable to dialog

## v2.8.4 (2024-02-02)

- 🐞 fix max-height setting for dialog

## v2.8.3 (2024-02-02)

- 🐞 Attempt to fix skypack issue

## v2.8.2 (2024-02-01)

- 🐞 Fix issue with unpkg

## v2.8.1 (2024-02-01)

- 🐞 Ensure that standalone file is included

## v2.8.0 (2024-01-25)

- ➕ markdown support for use-history when doing links
- ➕ add `use-history` state to `sinch-link`
- ➕ TileControl: increase maximum columns to 10
- ➕ add standalone file for nectary

## v2.7.0 (2023-11-29)

- ➕ add `sinch-rich-textarea` component
- ➕ add lists support to `sinch-rich-text`
- ➕ add emoji support to `sinch-rich-text`
- ➕ add `subtle-primary` and `subtle-secondary` types to `sinch-button`
- ➕ add `toggled` state to `sinch-button`
- ➕ allow the `text` to be omitted for `sinch-button`
- ➕ add `icon` slot to `sinch-button`
- ➕ add size `xs` to `sinch-button`
- ➕ deprecate `sinch-icon-button` component
- ➕ deprecate `tertiary` type in `sinch-button`
- ➕ deprecate `left-icon` slot in `sinch-button`
- 🐞 make `secondary` a default type for `sinch-button`
- 🐞 make `subtle-secondary` a default type for icon-only `sinch-button`
- 🐞 forward aria attributes to `sinch-pop`

## v2.6.1 (2023-10-16)

- 🐞 fix off-screen `minrows` attribute in `sinch-textarea`
- 🐞 fix resize handler in `sinch-textarea`

## v2.6.0 (2023-10-11)

- ➕ add `origin` attribute to `sinch-toast-manager`
- ➕ add markdown support to `sinch-toast`
- ➕ add `minrows` attribute to `sinch-textarea`
- ➕ auto-resize `sinch-textarea`

## v2.5.0 (2023-09-21)

- ➕ add `icon` slot to `sinch-dialog`
- ➕ allow multiline caption for `sinch-dialog`
- 🐞 align styles for `sinch-toggle`
- 🐞 fix word breaks in `sinch-toast`
- 🐞 fix fonts in `sinch-time-picker`
- 🐞 fix password placeholder for `sinch-input`

## v2.4.0 (2023-08-04)

- ➕ add `right-icon` slot to `sinch-chip`

## v2.3.0 (2023-07-31)

- ➕ add silhouette to `sinch-avatar`
- 🐞 align styles for `sinch-toast`

## v2.2.3 (2023-07-26)

- 🐞 fix border z-index in `sinch-segmented-control`

## v2.2.2 (2023-07-25)

- 🐞 fix long numbers width in `sinch-pagination`
- 🐞 fix outline offset in `sinch-pagination`
- 🐞 add missing `open` prop to `sinch-dialog`
- 🐞 align styles for `sinch-checkbox`
- 🐞 align styles for `sinch-radio`
- 🐞 align styles for `sinch-color-menu` (requires theme-base@0.3.0)
- 🐞 align styles for `sinch-accordion`
- 🐞 align icon style in `sinch-help-tooltip`

## v2.2.1 (2023-07-18)

- 🐞 fix Bouvet Islands phone code
- 🐞 tweak Brazil phone code mask

## v2.2.0 (2023-07-06)

- ➕ add `mask` attribute to `sinch-input`
- ➕ add `on-copy`, `on-cut`, `on-paste` event handlers to `sinch-input`
- ➕ add phone masks to `countries.json`
- ➕ add `sinch-progress-stepper` component
- 🐞 prevent text selection when clicking on `sinch-button` and `sinch-icon-button`
- 🐞 allow time without seconds in `sinch-time-picker`
- 🐞 improve ui behaviour in `sinch-date-picker`
- 🐞 stop shadowing `isConnected` in `NectaryElement`

## v2.1.5 (2023-06-15)

- 🐞 align `sinch-tabs` design
- 🐞 fix selection in `sinch-text` and `sinch-title`

## v2.1.4 (2023-06-02)

- 🐞 fix misassigned CSS vars

## v2.1.3 (2023-05-31)

- 🐞 fix page scroll behavior in `sinch-popover` and `sinch-tooltip`

## v2.1.2 (2023-05-26)

- 🐞 fix scrollbar click in `sinch-select-menu`
- 🐞 remove last item border in `sinch-accordion`
- 🐞 remove last row border in `sinch-table`

## v2.1.1 (2023-05-23)

- 🐞 fix `sinch-skeleton` mounting
- 🐞 fix cursor in interactive components
- 🐞 cleanup old events

## v2.1.0 (2023-05-11)

- ➕ open Shadow DOM in components
- 🐞 fix `sinch-checkbox` style
- 🐞 fix focus in Safari v16.4

## v2.0.0 (2023-05-04)

- 💥 extract theme into `@sinch-engage/nectary-theme-base` package
- 💥 extract `sinch-color-menu-option` component
- 💥 extract logo components to `@sinch-engage/assets` package
- 💥 remove `inverted` attribute from `sinch-tooltip`
- 💥 remove `color` attribute from `sinch-badge`
- 💥 remove clear button from `sinch-input`
- 💥 remove `disabled` attribute from 'sinch-card'
- 💥 remove deprecated React handlers

## v1.4.0 (2023-04-26)

- ➕ add `type` attribute to `sinch-tooltip`
- 🐞 allow selecting same date in a range in `sinch-date-picker`

## v1.3.3 (2023-04-04)

- 🐞 fix cancelling animation in `sinch-skeleton`

## v1.3.2 (2023-03-31)

- 🐞 remove console logs

## v1.3.1 (2023-03-27)

- 🐞 fix `sinch-popover` freeze in Safari

## v1.3.0 (2023-03-13)

- ➕ add `sinch-skeleton` component
- 🐞 fix red color in `sinch-tag` and `sinch-chip`

## v1.2.2 (2023-03-07)

- 🐞 adjust built-in search behaviour in `sinch-select-menu`
- 🐞 adjust palette colors
- 🐞 tweak presets for `sinch-color-menu`

## v1.2.1 (2023-03-06)

- 🐞 fix remounting `sinch-popover`

## v1.2.0 (2023-03-03)

- ➕ add `draggable` attribute to `sinch-card`
- 🐞 fix timezones in `sinch-date-picker`

## v1.1.2 (2023-02-27)

- 🐞 recalculate size on content change in `sinch-popover`
- 🐞 fix events propagation in `sinch-pagination` for Firefox v110
- 🐞 fix events propagation in `sinch-date-picker` for Firefox v110

## v1.1.1 (2023-02-20)

- 🐞 fix events propagation for `sinch-dialog` and `sinch-popover` in Firefox v110

## v1.1.0 (2023-02-15)

- ➕ add detail to close event in `sinch-dialog`
- 🐞 set display to `block` in `sinch-dialog`

## v1.0.1 (2023-02-10)

- 🐞 fix icon font

## v1.0.0 (2023-02-03)

- 💥 extract `@sinch-engage/nectary-assets` package
- 🐞 fix word break in `sinch-textarea`

## v0.49.0 (2023-01-25)

- ➕ add `sinch-code-tag` component
- ➕ add `sinch-rich-text` component
- ➕ add markdown support to `sinch-alert`
- ➕ add markdown support to `sinch-inline-alert`
- ➕ add italic DM Sans fonts
- ➕ add `autocomplete` attribute to `sinch-input`

## v0.48.2 (2023-01-19)

- 🐞 fix text color in disabled `sinch-input` and `sinch-textarea` on WebKit

## v0.48.1 (2023-01-12)

- 🐞 update CDN for `sinch-emoji`

## v0.48.0 (2023-01-09)

- ➕ add `sinch-icon-variables` component
- 🐞 fix picking same files in `sinch-file-picker`

## v0.47.0 (2022-12-30)

- 💥 rename system colors in palette
- ➕ add system colors to `sinch-tag` and `sinch-chip`
- ➕ add `bottom` slot to `sinch-textarea`
- ➕ add more branded icons

## v0.46.0 (2022-12-20)

- ➕ add `sinch-logo-engage-icon` and `sinch-logo-engage-icon-wordmark` components
- 🐞 fix background color in `sinch-button`

## v0.45.2 (2022-12-09)

- 🐞 fix search behaviour in `sinch-emoji-picker`
- 🐞 fix multiline input in `sinch-textarea`
- 🐞 fix icon in multiline `sinch-link`
- 🐞 align styles in `sinch-time-picker`
- 🐞 align clear button behaviour in `sinch-input`

## v0.45.1 (2022-11-21)

- 🐞 fix tip orientation in `sinch-popover`

## v0.45.0 (2022-11-21)

- 💥 use new DM Sans and DM Mono fonts
- 💥 drop Safari <15.4 support
- 💥 add `size` and remove `small` attr in `sinch-button`
- 💥 add `size` and remove `small` attr in `sinch-icon-button`
- 💥 add `size` and remove `type` attr in `sinch-spinner`
- 💥 `import '@sinch-engage/nectary/theme'` instead of CSS
- ➕ add autosize feature to sizeable components
- ➕ add `sinch-flag` component
- ➕ add built-in search feature to `sinch-select-menu`
- ➕ add built-in clear feature to `sinch-input`
- ➕ add `type` attr to `sinch-icon-button`
- ➕ add `size` attr to `sinch-input`
- ➕ add `size` attr to `sinch-select-button`
- ➕ add `tertiary` type to `sinch-button`
- 🐞 fix `sinch-checkbox` focus state
- 🐞 fix buttons alignment in `sinch-pagination`
- 🐞 fix `tabindex` attr in interactive components
- 🐞 align `sinch-segment` styles
- 🐞 align `sinch-button` styles
- 🐞 align default icon color
- 🐞 assert only in non-production env

## v0.44.1 (2022-11-15)

- 🐞 fix missing `data.json` in `sinch-emoji-picker`

## v0.44.0 (2022-11-03)

- ➕ add `range` attribute to `sinch-date-picker`
- 🐞 require `on-invalid` handler in `sinch-file-drop` and `sinch-file-picker`

## v0.43.0 (2022-11-02)

- ➕ add `sinch-emoji-picker` component
- ➕ add `sinch-emoji` component
- ➕ add `sinch-icon` component
- ➕ add `sinch-tabs-icon-option` component
- ➕ add `theme/fonts.json` file
- 🐞 align styles for `sinch-tabs`
- 🐞 fix overflow clip in `sinch-segment`, `sinch-dialog`, `sinch-card-container`
- 🐞 fix types for `sinch-color-menu`
- 🐞 improve `sinch-tooltip` hiding

## v0.42.1 (2022-10-25)

- 🐞 fix missing CSS files

## v0.42.0 (2022-10-21)

- 💥 remove `sinch-avatar-badge`
- 💥 remove `sinch-avatar-status`
- 💥 remove `sinch-chat-avatar`
- 💥 rename `background` to `color` in `sinch-avatar`
- 💥 change `sinch-avatar` background color set
- ➕ add `sinch-badge` component
- ➕ add `status` to `sinch-avatar`
- ➕ add `DM Sans` and `DM Mono` fonts

## v0.41.1 (2022-10-17)

- 🐞 fix target element positioning in `sinch-popover` and `sinch-tooltip`

## v0.41.0 (2022-10-13)

- ➕ add `tip` to `sinch-popover`
- ➕ add tooltip to `sinch-icon-button`
- ➕ add tooltip to `sinch-color-menu`
- ➕ animate `sinch-tooltip`
- 🐞 fix `sinch-tooltip` overflow
- 🐞 align color map with Design Library

## v0.40.0 (2022-09-30)

- 💥 update color palette
- 💥 remove `sinch-tag-close` component
- 💥 rename `category` attribute to `color` in `sinch-tag`
- 💥 remove `sinch-select` component
- 💥 remove `sinch-dropdown` component
- 💥 extract `sinch-popover` from `sinch-action-menu`
- ➕ add `sinch-color-menu` component
- ➕ add `sinch-color-swatch` component
- ➕ add `sinch-select-menu` component
- ➕ add `sinch-select-button` component
- ➕ add `sinch-chip` component
- ➕ add `sinch-icon-channel-notify` component
- 🐞 fix overflow glitch in `sinch-avatar`
- 🐞 fix icon size in `sinch-horizontal-stepper` and `sinch-vertical-stepper`

## v0.39.0 (2022-09-15)

- 💥 require aria-label for each button in `sinch-date-picker`
- 💥 require `aria-label` in `tag-close`
- 💥 stop propagating `disabled` to slotted elements in `sinch-card`
- 💥 remove `sinch-card-button` and `sinch-card-link` subcomponents
- 💥 remove deprecated `sinch-search` and `sinch-search-option` components
- ➕ add `sinch-toast-manager` and `sinch-toast` components
- 🐞 fix styles in `sinch-toggle`

## v0.38.0 (2022-09-09)

- ➕ add `sinch-file-picker` component
- ➕ add `sinch-file-drop` component
- ➕ add `sinch-file-status` component
- ➕ add `sinch-progress` component
- ➕ add `ellipsis` attribute to `sinch-title`
- ➕ add `ellipsis` attribute to `sinch-text`
- ➕ add `sinch-icon-branded-easytouse` component
- 🐞 fix `sinch-spinner` sizes
- 🐞 make `text` optional in `sinch-inline-alert`
- 🐞 allow multiline text in `sinch-alert`

## v0.37.0 (2022-09-02)

- 💥 extract wrapper into `sinch-field` in `sinch-input`, `sinch-textarea` and `sinch-select`
- ➕ add `sinch-field` component
- ➕ add `standalone` attribute to `sinch-link`
- 🐞 unify focus behaviour between browsers when expanding popover
- 🐞 fix icon alignment in `sinch-input` in Safari
- 🐞 fix placeholder color in `sinch-input` and `sinch-textarea` in Firefox
- 🐞 fix icon color in `sinch-dropdown-text-option`

## v0.36.1 (2022-08-29)

- 🐞 fix non-modal overflow in `sinch-popover`
- 🐞 fix scroll in `sinch-tag`
- 🐞 prevent arrow keys scrolling page in `sinch-time-picker`

## v0.36.0 (2022-08-24)

- 💥 split `sinch-alert` to `sinch-alert` and `sinch-inline-alert`
- ➕ add `sinch-vertical-stepper` component
- ➕ update `sinch-button` style
- ➕ update `sinch-icon-button` style
- ➕ propagate `aria-label` to `title` attribute in `sinch-icon-button`
- 🐞 disable mouse selecting text on clock face in `sinch-time-picker`

## v0.35.0 (2022-08-19)

- ➕ add `sinch-tile-control` component
- ➕ add `preventDefault` attribute to `sinch-link`
- ➕ emit `-change`, `-close`, `-focus`, `-blur` and `-click` events
- ➕ deprecate `size` attribute in branded and channel icons in favor of `--sinch-size-icon` CSS var
- 🐞 fix margins in `sinch-textarea`

## v0.34.0 (2022-08-12)

- ➕ add `sinch-horizontal-stepper` component
- ➕ add `sinch-icon-exclamation` component
- 🐞 fix close event propagation in `sinch-dialog`

## v0.33.0 (2022-08-11)

- 💥 add `modal` attribute to `sinch-popover`, `sinch-action-menu`
- ➕ add `top` and `bottom` orientation values to `sinch-popover`
- ➕ add `icon` slot to `sinch-input`
- 🐞 fix border style in `sinch-input`
- 🐞 fix `maxvisibleitems` scroll in `sinch-dropdown` and `sinch-action-menu`
- 🐞 fix cursor position in `sinch-input` and `sinch-textarea`
- 🐞 hide bottom row when empty in `sinch-input`, `sinch-textarea`, `sinch-select`
- 🐞 propagate `close-aria-label` attribute to close button in `sinch-dialog`

## v0.32.0 (2022-08-04)

- ➕ add `sinch-time-picker` component
- ➕ update focused style in `sinch-icon-button`
- 🐞 fix label to open dropdown in `sinch-select`
- 🐞 hide empty action slot in `sinch-segment`
- 🐞 fix unexpected closing of `sinch-dialog`
- 🐞 fix `sinch-segmented-control` height
- 🐞 fix icon import in `sinch-link`

## v0.31.0 (2022-07-28)

- 💥 move illustrations from `illustration/` to `illustrations/`
- ➕ add a lot of illustrations
- ➕ add more branded icons
- 🐞 fix timezones in `sinch-date-picker`
- 🐞 fix collapse button position in `sinch-segment`
- 🐞 fix content overflow in `sinch-segment`

## v0.30.0 (2022-07-27)

- ➕ add `sinch-date-picker` component
- ➕ add `right` slot to `sinch-input`
- ➕ add `preview` slot and `size` attribute to `sinch-segment`
- ➕ add `background` attribute to illustrations
- ➕ add `target="_blank"` to external `sinch-link`
- ➕ handle `--sinch-dialog-max-width` variable in `sinch-dialog`
- ➕ add `sinch-elevation-level-*` theme variables
- ➕ add `sinch-shape-radius-*` theme variables
- ➕ add `background` colors to theme
- ➕ add square channel icons
- ➕ add channel branded icons
- ➕ add `keyboard-double-arrow-*` icons
- 🐞 fix popover position during resize
- 🐞 fix document scroll in `sinch-dialog` and `sinch-popover`
- 🐞 prevent closing multiple dialogs with single click
- 🐞 fix text overflow in `sinch-tooltip`
- 🐞 fix angular crash in `sinch-text`, `sinch-title`, `sinch-avatar-status`

## v0.29.1 (2022-07-11)

- 🐞 fix border glitch in various components
- 🐞 fix paddings in `sinch-action-menu` and `sinch-dropdown`
- 🐞 expand height in `sinch-card-container`

## v0.29.0 (2022-07-07)

- 💥 rename `title` to `caption` in `sinch-alert`
- 💥 rename `header` to `caption` in `sinch-card`
- 💥 rename `aria-level` to `level` property in `sinch-title`
- ➕ add `sinch-list` component
- ➕ add `sinch-text` component
- ➕ add `--sinch-font-text-*` variables to `theme.css`
- ➕ add all MUI icons

## v0.28.0 (2022-07-01)

- 💥 remove index file
- 💥 rename `icon` slot to `left-icon` and add `right-icon` slot to `sinch-button`
- ➕ add `sinch-action-menu` component
- ➕ allow multiline text in `sinch-table-head-cell`
- ➕ add more icons

## v0.27.0 (2022-06-29)

- 💥 remove keyboard arrows control in `sinch-segmented-control`
- 💥 rename `sinch-dropdown-option` to `sinch-dropdown-text-option`
- ➕ add `sinch-dropdown-checkbox-option` component
- ➕ add `sinch-dropdown-radio-option` component
- ➕ add `multiple` attribute to `sinch-dropdown`
- ➕ add chat bubble statuses
- ➕ add branded icons
- ➕ add action icons
- 🐞 fix `sinch-popover` position
- 🐞 improve focus behaviour in `sinch-segmented-control`
- 🐞 improve focus behaviour in `sinch-segmented-icon-control`

## v0.26.0 (2022-06-22)

- ➕ add `sinch-segmented-icon-control` component
- ➕ add editor icons
- ➕ add content icons
- ➕ add `sinch-icon-smart-toy` icon
- 🐞 fix `sinch-dialog` width
- 🐞 fix `sinch-segmented-control` border color
- 🐞 fix `sinch-segment` clickable area to expand/collapse
- 🐞 fix `sinch-popover` border style
- 🐞 fix `sinch-popover` default padding

## v0.25.0 (2022-06-20)

- 🎉 move to the new GitLab
- ➕ add `sinch-segmented-control` component
- 🐞 add missing colors to `colors.json`

## v0.24.0 (2022-06-15)

- 💥 add `setNectaryRegistry` mandatory call to define registry for Nectary components
- 🐞 fix components to work inside of ShadowRoot

## v0.23.0 (2022-06-13)

- 💥 move branded icons from `/icon-branded/` to `/icons-branded/` and prefix component names with `-branded-`
- 💥 move icons from `/icon/` to `/icons/`
- ➕ handle `--sinch-dialog-max-height` variable in `sinch-dialog`
- ➕ add `sinch-icon-branded-bell` component
- ➕ add channel icons
- ➕ add more Material icons

## v0.22.0 (2022-06-09)

- 💥 remove `sinch-table-head-sort` component
- ➕ handle `--sinch-icon-button-color` variable in `sinch-icon-button`
- ➕ add `--sinch-color-tropical-50` and `--sinch-color-raspberry-50` colors
- ➕ add `left` and `right` slots to `sinch-table-head-cell`
- ➕ add `selected` attr and hover state to `sinch-table-row`
- ➕ add `sinch-icon-filter-list` component
- ➕ add `sinch-card-container` component
- 🐞 fix default background in form components

## v0.21.0 (2022-06-08)

- 💥 add `open` attribute and `close` event to `sinch-dropdown`
- ➕ add `sinch-popover` component
- 🐞 fix segment content overflow
- 🐞 handle dialog `close` function missing in JsDom

## v0.20.0 (2022-06-02)

- 💥 rename `theme.css` title variables
- ➕ add `sinch-title` component
- ➕ add `sinch-avatar-status`
- ➕ add `sinch-avatar-badge`
- ➕ add selection api to `sinch-search`
- 🐞 fix dead letters in `sinch-search`
- 🐞 update `sinch-avatar` sizes

## v0.19.0 (2022-05-25)

- ➕ add `sinch-chat`, `sinch-chat-block`, `sinch-chat-bubble`, `sinch-chat-avatar`
- 🐞 prevent opening `sinch-dialog` and `sinch-dropdown` if already open
- 🐞 fix `sinch-dialog` not propagating click events

## v0.18.0 (2022-05-19)

- ➕ add `sinch-avatar` component
- ➕ add selection api to `sinch-input` and `sinch-textarea`
- ➕ add `rows` and `resizable` attributes to `sinch-textarea`
- ➕ add `optionaltext` attribute to `sinch-accordion-item`
- ➕ add `colors.json` file with theme colors
- 🐞 hide clear button when missing `value` attribute in `sinch-search`

## v0.17.0 (2022-05-11)

- ➕ add `sinch-segment` component
- ➕ add `small` attribute to `sinch-icon-button`
- 🐞 fix dead keys in `sinch-input` and `sinch-textarea` for Linux layouts

## v0.16.1 (2022-05-06)

- 🐞 fix dead keys in `sinch-input` and `sinch-textarea`

## v0.16.0 (2022-05-05)

- 💥 rename `title` to `caption` in `sinch-dialog`
- ➕ add pointer cursor to `sinch-select` and `sinch-dropdown`
- 🐞 fix `sinch-dialog` popover clip
- 🐞 fix `sinch-dropdown` popover clip
- 🐞 fix `sinch-select` popover clip

## v0.15.0 (2022-04-27)

- ➕ add 54 icons
- ➕ add `sinch-spinner` accessibility attributes
- 🐞 fix `sinch-dialog` content padding

## v0.14.0 (2022-04-13)

- ➕ add `sinch-search` component
- ➕ add `sinch-icon-search` component
- ➕ add type `password` to `sinch-input`

## v0.13.0 (2022-04-11)

- 💥 remove `size` attribute in icons
- 💥 remove `small` attribute in `sinch-tag-close`
- ➕ add `sinch-icon-button` component
- 🐞 import close icon in `sinch-dialog`

## v0.12.0 (2022-04-08)

- ➕ add `sinch-grid` component
- 🐞 disable pointer events for illustrations
- 🐞 import `sinch-dropdown` in `sinch-select`
- 🐞 update `sinch-tab` font style

## v0.11.2 (2022-04-07)

- 🐞 update focused border color for `sinch-input`, `sinch-textarea`, `sinch-select`
- 🐞 update border radius for `sinch-input`, `sinch-textarea`, `sinch-select`
- 🐞 update `sinch-card` illustration size

## v0.11.1 (2022-03-31)

- 🐞 fix `sinch-dialog` z-index

## v0.11.0 (2022-03-30)

- ➕ add `sinch-dialog` component
- ➕ add `sinch-card` component
- ➕ add `sinch-illustration-phone-and-cat` component
- ➕ add arrow icons
- 🐞 fix theme title-5 `font-size`

## v0.10.0 (2022-03-22)

- 💥 split button type `cta` to `cta-primary` and `cta-secondary`
- 💥 require `aria-label` React prop for interactive components
- 💥 refactor `sinch-select` component using `sinch-dropdown`
- 💥 change slot name `select` to `option` in `sinch-select` component
- ➕ add `sinch-dropdown` component
- ➕ add `invalid` property to `sinch-checkbox`
- ➕ add icon only `sinch-button`
- ➕ add `onKeyPress` handler to `sinch-input`, `sinch-textarea` React type
- ➕ enable font-face `display: swap` in `theme.css`
- 🐞 fix `sinch-input` and `sinch-textarea` cursor position when typing
- 🐞 fix `sinch-input` and `sinch-textarea` icon colors
- 🐞 improve accessibility attributes

## v0.9.0 (2022-03-11)

- ➕ add `sinch-pagination` component

## v0.8.1 (2022-03-07)

- 🐞 fix text colors in `sinch-checkbox`, `sinch-toggle`, `sinch-select`, `sinch-accordion`, `sinch-table`, `sinch-tabs`
- 🐞 fix dropdown overlay in `sinch-select`

## v0.8.0 (2022-02-28)

- 💥 change package name to `@sinch-engage/nectary`, see readme
- 💥 rename `sinch-input-tooltip` to `sinch-help-tooltip`
- 💥 rename `sinch-icon-tooltip` to `sinch-icon-help-outline`
- 💥 change default icon size to 24 instead of 16
- ➕ add `sinch-table`
- ➕ make `text` optional in `sinch-toggle`
- ➕ make `text` optional in `sinch-checkbox`
- ➕ make `category` optional in `sinch-tag`
- ➕ export element types
- 🐞 fix theme emphasized body font weight

## v0.7.1 (2022-02-09)

- 🐞 fix Jest accessing `scrollIntoView`, missing in jsdom

## v0.7.0 (2022-02-09)

- 💥 extract `sinch-alert-close` and `sinch-alert-button`
- 💥 change default slot name to `icon` in `sinch-tabs-option`, `sinch-select-option`, `sinch-button`
- 💥 change default slot name to `content` in `sinch-accordion-item`
- 💥 pass events instead of values to React `onChange` handlers in `sinch-toggle`, `sinch-textarea`, `sinch-tabs`, `sinch-select`, `sinch-radio`, `sinch-input`, `sinch-checkbox`, `sinch-accordion`
- ➕ pass events to React `onFocus`, `onBlur`, `onClick` handlers in `sinch-button`, `sinch-accordion-item`, `sinch-tabs-option`, `sinch-radio-option`, `sinch-textarea`, `sinch-input`, `sinch-checkbox`
- ➕ add `sinch-tag` and `sinch-tag-close` components
- ➕ add complementary colors to theme
- 🐞 add `id` to components react types

## v0.6.1 (2022-01-28)

- 🐞 fix `sinch-select` accessing closed shadowRoot

## v0.6.0 (2022-01-21)

- ➕ add `sinch-accordion` component
- 🐞 delegate focus enabled for `sinch-textarea`
- 💥 element properties use `null` instead of `undefined`

## v0.5.1 (2022-01-17)

- 🐞 fix `sinch-tabs` accessing closed shadowRoot
- 🐞 fix `sinch-radio` accessing closed shadowRoot

## v0.5.0 (2022-01-14)

- ➕ add `sinch-tabs` component
- 🐞 fix `sinch-spinner` error message

## v0.4.0 (2022-01-10)

- ➕ add `sinch-alert` component
- ➕ add `sinch-spinner` component
- ➕ add `maxVisibleItems` property to `sinch-select`
- 🐞 fix `sinch-input` controlled value
- 🐞 fix `sinch-radio` controlled value

## v0.3.0 (2021-12-17)

- ➕ add `sinch-radio` component

## v0.2.0 (2021-12-15)

- 💥 use Gilroy in all font styles

## v0.1.2 (2021-12-03)

- 🐞 Input, Textarea, Select: fix label max-width
- 🐞 Button: set cursor to pointer

## v0.1.1 (2021-11-24)

- 🐞 Button: fixed `onClick` handler in React
- 🛠 fixed JSX/DOM Element types

## v0.1.0 (2021-11-23)

- 🐣 initial release
