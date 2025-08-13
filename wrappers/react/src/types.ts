import type { TSinchAccordionStatusType } from '@nectary/components/accordion-item/types'
import type { TSinchAlertType } from '@nectary/components/alert/types'
import type { TSinchAvatarColor, TSinchAvatarStatus } from '@nectary/components/avatar/types'
import type { TSinchBadgeMode } from '@nectary/components/badge/types'
import type { TSinchButtonType } from '@nectary/components/button/types'
import type { TSinchOrientation } from '@nectary/components/card-v2-title/types'
import type { TSinchChipColor } from '@nectary/components/chip/types'
import type { TSinchDialogCloseDetail } from '@nectary/components/dialog/types'
import type { TSinchFileDropInvalidType } from '@nectary/components/file-drop/types'
import type { TSinchFilePickerInvalidType } from '@nectary/components/file-picker/types'
import type { TSinchFileStatusType } from '@nectary/components/file-status/types'
import type { TSinchIcons } from '@nectary/components/icon/types'
import type { TSinchInlineAlertType } from '@nectary/components/inline-alert/types'
import type { TSinchInputType, TSinchInputClipboardEvent } from '@nectary/components/input/types'
import type { TSinchPopOrientation } from '@nectary/components/pop/types'
import type { TSinchPopoverOrientation } from '@nectary/components/popover/types'
import type { ElementClickedEvent } from '@nectary/components/rich-text/types'
import type { TSinchTableAlignType } from '@nectary/components/table-cell/types'
import type { TSinchTagColor } from '@nectary/components/tag/types'
import type { TSinchTextType } from '@nectary/components/text/types'
import type { TSinchTitleType, TSinchTitleLevel } from '@nectary/components/title/types'
import type { TSinchToastType } from '@nectary/components/toast/types'
import type { TSinchToastManagerOrigin } from '@nectary/components/toast-manager/types'
import type { TSinchTooltipOrientation, TSinchTooltipType, TSinchTooltipTextAlign } from '@nectary/components/tooltip/types'
import type { NectaryComponentReact } from '@nectary/components/types'
import type { TSinchSize, TSinchSizeEx } from '@nectary/components/utils/size'

export type TSinchAccordionWrapper = {
  value: string,
  multiple?: boolean,
  onChange?: (e: CustomEvent<string>) => void,

}
export type TSinchAccordionItemWrapper = {
  value: string,
  label: string,
  // @preserve-case
  optionalText?: string,
  status?: TSinchAccordionStatusType,
  disabled?: boolean,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-accordion-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-accordion-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-accordion-color-default-title-initial'?: string,
    // @preserve-case
    '--sinch-comp-accordion-color-default-optional-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-accordion-color-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-accordion-color-default-status-success'?: string,
    // @preserve-case
    '--sinch-comp-accordion-color-default-status-warning'?: string,
    // @preserve-case
    '--sinch-comp-accordion-color-default-status-error'?: string,
    // @preserve-case
    '--sinch-comp-accordion-color-default-status-info'?: string,
    // @preserve-case
    '--sinch-comp-accordion-color-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-accordion-color-disabled-title-initial'?: string,
    // @preserve-case
    '--sinch-comp-accordion-color-disabled-optional-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-accordion-font-title'?: string,
    // @preserve-case
    '--sinch-comp-accordion-font-optional-text'?: string,
    // @preserve-case
    '--sinch-comp-accordion-size-icon'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-comp-title-font'?: string,
    // @preserve-case
    '--sinch-comp-text-font'?: string,
  },
}
export type TSinchActionMenuWrapper = {
  rows?: number,
  ariaLabel: string,

}
export type TSinchActionMenuOptionWrapper = {
  text: string,
  disabled?: boolean,
  ariaLabel: string,
  onClick?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-action-menu-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-action-menu-color-default-background-selected'?: string,
    // @preserve-case
    '--sinch-comp-action-menu-color-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-action-menu-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-action-menu-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-action-menu-color-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-action-menu-color-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-action-menu-color-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-action-menu-font-option'?: string,
    // @preserve-case
    '--sinch-comp-action-menu-size-icon'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
    // @preserve-case
    '--sinch-comp-text-font'?: string,
  },
}
export type TSinchAlertWrapper = {
  type: TSinchAlertType,
  text: string,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-alert-color-warning-default-background'?: string,
    // @preserve-case
    '--sinch-comp-alert-color-warning-default-icon'?: string,
    // @preserve-case
    '--sinch-comp-alert-color-warning-default-text'?: string,
    // @preserve-case
    '--sinch-comp-alert-color-error-default-background'?: string,
    // @preserve-case
    '--sinch-comp-alert-color-error-default-icon'?: string,
    // @preserve-case
    '--sinch-comp-alert-color-error-default-text'?: string,
    // @preserve-case
    '--sinch-comp-alert-color-info-default-background'?: string,
    // @preserve-case
    '--sinch-comp-alert-color-info-default-icon'?: string,
    // @preserve-case
    '--sinch-comp-alert-color-info-default-text'?: string,
    // @preserve-case
    '--sinch-comp-alert-font-body'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-comp-rich-text-font'?: string,
  },
}
export type TSinchAvatarWrapper = {
  src?: string,
  alt?: string,
  color?: TSinchAvatarColor,
  size?: TSinchSize,
  status?: TSinchAvatarStatus,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-avatar-container-color-default-background'?: string,
    // @preserve-case
    '--sinch-comp-avatar-container-color-default-foreground'?: string,
    // @preserve-case
    '--sinch-comp-avatar-border-color-default-initial'?: string,
    // @preserve-case
    '--sinch-comp-avatar-status-color-online-default-background'?: string,
    // @preserve-case
    '--sinch-comp-avatar-status-color-away-default-background'?: string,
    // @preserve-case
    '--sinch-comp-avatar-status-color-busy-default-background'?: string,
    // @preserve-case
    '--sinch-comp-avatar-status-color-offline-default-background'?: string,
    // @preserve-case
    '--sinch-comp-avatar-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-avatar-size-s'?: string,
    // @preserve-case
    '--sinch-comp-avatar-size-m'?: string,
    // @preserve-case
    '--sinch-comp-avatar-size-l'?: string,
    // @preserve-case
    '--sinch-comp-avatar-container-font-size-s-text'?: string,
    // @preserve-case
    '--sinch-comp-avatar-container-font-size-m-text'?: string,
    // @preserve-case
    '--sinch-comp-avatar-container-font-size-l-text'?: string,
    // @preserve-case
    '--sinch-local-size'?: string,
  },
}
export type TSinchBadgeWrapper = {
  text: string,
  size?: TSinchSize,
  mode?: TSinchBadgeMode,
  hidden?: boolean,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-badge-color-border'?: string,
    // @preserve-case
    '--sinch-comp-badge-color-text'?: string,
    // @preserve-case
    '--sinch-comp-badge-color-background'?: string,
    // @preserve-case
    '--sinch-comp-badge-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-badge-font-size-l'?: string,
    // @preserve-case
    '--sinch-comp-badge-font-size-m'?: string,
  },
}
export type TSinchButtonWrapper = {
  type?: TSinchButtonType,
  size?: TSinchSizeEx,
  text?: string,
  ariaLabel: string,
  disabled?: boolean,
  toggled?: boolean,
  onClick?: (e: CustomEvent<void>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-button-shape-radius-size-xs'?: string,
    // @preserve-case
    '--sinch-comp-button-shape-radius-size-s'?: string,
    // @preserve-case
    '--sinch-comp-button-shape-radius-size-m'?: string,
    // @preserve-case
    '--sinch-comp-button-shape-radius-size-l'?: string,
    // @preserve-case
    '--sinch-comp-button-size-container-xs'?: string,
    // @preserve-case
    '--sinch-comp-button-size-container-s'?: string,
    // @preserve-case
    '--sinch-comp-button-size-container-m'?: string,
    // @preserve-case
    '--sinch-comp-button-size-container-l'?: string,
    // @preserve-case
    '--sinch-comp-button-size-icon-xs'?: string,
    // @preserve-case
    '--sinch-comp-button-size-icon-s'?: string,
    // @preserve-case
    '--sinch-comp-button-size-icon-m'?: string,
    // @preserve-case
    '--sinch-comp-button-size-icon-l'?: string,
    // @preserve-case
    '--sinch-comp-button-font-size-s-text'?: string,
    // @preserve-case
    '--sinch-comp-button-font-size-m-text'?: string,
    // @preserve-case
    '--sinch-comp-button-font-size-l-text'?: string,
    // @preserve-case
    '--sinch-comp-button-color-primary-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-primary-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-color-primary-default-background-active'?: string,
    // @preserve-case
    '--sinch-comp-button-color-primary-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-primary-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-primary-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-primary-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-button-color-primary-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-primary-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-primary-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-primary-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-secondary-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-secondary-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-color-secondary-default-background-active'?: string,
    // @preserve-case
    '--sinch-comp-button-color-secondary-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-secondary-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-secondary-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-secondary-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-button-color-secondary-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-secondary-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-secondary-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-secondary-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-default-background-active'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-toggled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-default-background-active'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-toggled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-primary-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-primary-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-primary-default-background-active'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-primary-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-primary-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-primary-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-primary-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-primary-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-primary-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-primary-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-primary-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-secondary-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-secondary-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-secondary-default-background-active'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-secondary-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-secondary-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-secondary-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-secondary-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-secondary-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-secondary-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-secondary-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-secondary-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-danger-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-danger-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-color-danger-default-background-active'?: string,
    // @preserve-case
    '--sinch-comp-button-color-danger-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-danger-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-danger-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-danger-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-danger-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-danger-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-danger-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-primary-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-primary-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-primary-active'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-primary-focus'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-primary-disabled'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-secondary-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-secondary-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-secondary-focus'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-secondary-disabled'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-subtle-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-subtle-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-subtle-active'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-subtle-focus'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-subtle-disabled'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-cta-primary-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-cta-primary-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-cta-primary-active'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-cta-primary-focus'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-cta-primary-disabled'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-cta-secondary-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-cta-secondary-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-cta-secondary-active'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-cta-secondary-focus'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-cta-secondary-disabled'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-danger-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-danger-hover'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-danger-active'?: string,
    // @preserve-case
    '--sinch-comp-button-shadow-danger-focus'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
  },
}
export type TSinchButtonGroupWrapper = {
  size?: NectaryComponentReact<'sinch-button'>['size'],
  type?: NectaryComponentReact<'sinch-button'>['type'],
  ariaLabel: NectaryComponentReact<'sinch-button'>['aria-label'],

}
export type TSinchButtonGroupItemWrapper = {
  text?: NectaryComponentReact<'sinch-button'>['text'],
  disabled?: NectaryComponentReact<'sinch-button'>['disabled'],
  toggled?: NectaryComponentReact<'sinch-button'>['toggled'],
  onBlur?: NectaryComponentReact<'sinch-button'>['on-blur'],
  onClick?: NectaryComponentReact<'sinch-button'>['on-click'],
  onFocus?: NectaryComponentReact<'sinch-button'>['on-focus'],
  ariaLabel: NectaryComponentReact<'sinch-button'>['aria-label'],
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-button-shape-radius-size-xs'?: string,
    // @preserve-case
    '--sinch-comp-button-shape-radius-size-s'?: string,
    // @preserve-case
    '--sinch-comp-button-shape-radius-size-m'?: string,
    // @preserve-case
    '--sinch-comp-button-shape-radius-size-l'?: string,
    // @preserve-case
    '--sinch-button-border'?: string,
    // @preserve-case
    '--sinch-button-border-top'?: string,
    // @preserve-case
    '--sinch-button-border-bottom'?: string,
    // @preserve-case
    '--sinch-button-border-left'?: string,
    // @preserve-case
    '--sinch-button-border-right'?: string,
    // @preserve-case
    '--sinch-button-shape-radius-base'?: string,
    // @preserve-case
    '--sinch-button-shape-radius-top-right'?: string,
    // @preserve-case
    '--sinch-button-shape-radius-top-left'?: string,
    // @preserve-case
    '--sinch-button-shape-radius-bottom-right'?: string,
    // @preserve-case
    '--sinch-button-shape-radius-bottom-left'?: string,
    // @preserve-case
    '--sinch-button-set-size-shape-radius'?: string,
    // @preserve-case
    '--sinch-local-divider-color'?: string,
    // @preserve-case
    '--sinch-comp-button-color-primary-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-secondary-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-primary-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-subtle-secondary-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-primary-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-cta-secondary-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-button-color-danger-default-text-initial'?: string,
  },
}
export type TSinchCardWrapper = {
  text: string,
  caption: string,
  label?: string,
  draggable?: boolean,

}
export type TSinchCardV2Wrapper = {
  disabled?: boolean,
  selected?: boolean,
  clickable?: boolean,
  onClick?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-card-v2-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-shadow-initial'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-shadow-hover'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-shadow-disabled'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-shadow-active'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-font-title'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-font-description'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-border-hover'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-border-disabled'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-border-active'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-background-disabled'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-background-active'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-description-initial'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-description-disabled'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-border-hover'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-border-disabled'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-border-active'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-background-disabled'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-background-active'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-description-initial'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-description-disabled'?: string,
  },
}
export type TSinchCardV2TitleWrapper = {
  text: string,
  orientation?: TSinchOrientation,
  ellipsis?: boolean,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-card-v2-font-title'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-title-initial'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-title-disabled'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-default-icon-disabled'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-title-disabled'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-color-selected-icon-disabled'?: string,
    // @preserve-case
    '--sinch-comp-card-v2-size-icon'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
  },
}
export type TSinchCheckboxWrapper = {
  checked?: boolean,
  indeterminate?: boolean,
  disabled?: boolean,
  invalid?: boolean,
  text?: string,
  ariaLabel: string,
  onChange?: (e: CustomEvent<boolean>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-checkbox-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-font-label'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-default-background-active'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-default-border-hover'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-default-border-active'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-invalid-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-invalid-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-invalid-background-active'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-invalid-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-invalid-border-hover'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-invalid-border-active'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-invalid-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-checked-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-checked-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-checked-background-active'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-checked-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-checked-border-hover'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-checked-border-active'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-checked-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-checkbox-color-checked-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-sys-color-surface-primary-default'?: string,
  },
}
export type TSinchChipWrapper = {
  text: string,
  color?: TSinchChipColor,
  small?: boolean,
  onClick?: (e: CustomEvent<void>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
  ariaLabel: string,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-chip-size-container-m'?: string,
    // @preserve-case
    '--sinch-comp-chip-size-container-s'?: string,
    // @preserve-case
    '--sinch-comp-chip-size-icon-m'?: string,
    // @preserve-case
    '--sinch-comp-chip-size-icon-s'?: string,
    // @preserve-case
    '--sinch-comp-chip-font-size-m-label'?: string,
    // @preserve-case
    '--sinch-comp-chip-font-size-s-label'?: string,
    // @preserve-case
    '--sinch-comp-chip-color-neutral-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-chip-color-neutral-default-foreground-initial'?: string,
    // @preserve-case
    '--sinch-comp-chip-color-outiline-focus'?: string,
    // @preserve-case
    '--sinch-comp-chip-shape-radius'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
    // @preserve-case
    '--sinch-comp-text-font'?: string,
  },
}
export type TSinchCodeTagWrapper = {
  text: string,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-code-tag-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-font-text'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-shape-radius'?: string,
    // @preserve-case
    '--sinch-global-text-white-space'?: string,
  },
}
export type TSinchColorMenuWrapper = {
  value: string,
  rows?: number,
  cols?: number,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,

}
export type TSinchColorMenuOptionWrapper = {
  value: string,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-color-menu-option-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-color-menu-option-color-default-border-selected'?: string,
    // @preserve-case
    '--sinch-comp-color-menu-option-color-default-border-focus'?: string,
    // @preserve-case
    '--sinch-comp-color-menu-option-color-default-border-hover'?: string,
    // @preserve-case
    '--sinch-comp-color-menu-option-color-default-border-active'?: string,
  },
}
export type TSinchColorSwatchWrapper = {
  name?: string,
} & {
  style?: {
  // @preserve-case
    '--sinch-global-size-icon'?: string,
    // @preserve-case
    '--sinch-ref-color-violet-200'?: string,
    // @preserve-case
    '--sinch-ref-color-honey-200'?: string,
    // @preserve-case
    '--sinch-ref-color-grass-200'?: string,
    // @preserve-case
    '--sinch-ref-color-ocean-200'?: string,
  },
}
export type TSinchDatePickerWrapper = {
  value: string,
  min: string,
  max: string,
  locale: string,
  range?: boolean,
  ariaLabel: string,
  prevYearAriaLabel: string,
  nextYearAriaLabel: string,
  prevMonthAriaLabel: string,
  nextMonthAriaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-date-picker-font-day'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-font-today'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-font-weekday'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-font-header'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-day-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-header-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-weekday-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-day-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-day-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-day-color-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-day-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-day-color-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-day-color-default-range-background'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-day-color-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-day-color-checked-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-day-color-checked-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-day-color-checked-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-today-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-today-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-today-color-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-today-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-today-color-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-today-color-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-today-color-checked-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-today-color-checked-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-date-picker-today-color-checked-border-initial'?: string,
    // @preserve-case
    '--sinch-com-text-font'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
  },
}
export type TSinchDialogWrapper = {
  open: boolean,
  caption: string,
  ariaLabel: string,
  closeAriaLabel: string,
  onClose?: (e: CustomEvent<TSinchDialogCloseDetail>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-dialog-max-width'?: string,
    // @preserve-case
    '--sinch-comp-dialog-max-height'?: string,
    // @preserve-case
    '--sinch-comp-dialog-width'?: string,
    // @preserve-case
    '--sinch-dialog-close-button-display'?: string,
    // @preserve-case
    '--sinch-comp-dialog-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-dialog-font-title'?: string,
    // @preserve-case
    '--sinch-comp-dialog-shadow'?: string,
    // @preserve-case
    '--sinch-comp-dialog-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-dialog-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-dialog-color-default-title-initial'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-comp-title-font'?: string,
  },
}
export type TSinchEmojiWrapper = {
  char: string,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-emoji-vertical-align'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
  },
}
export type TSinchEmojiPickerWrapper = {
  onChange: (e: CustomEvent<string>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-emoji-picker-font-not-found'?: string,
    // @preserve-case
    '--sinch-comp-emoji-picker-color-default-text-not-found'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
    // @preserve-case
    '--sinch-comp-text-font'?: string,
  },
}
export type TSinchFieldWrapper = {
  label?: string,
  // @preserve-case
  optionalText?: string,
  // @preserve-case
  additionalText?: string,
  // @preserve-case
  invalidText?: string,
  disabled?: boolean,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-field-font-label'?: string,
    // @preserve-case
    '--sinch-comp-field-font-optional'?: string,
    // @preserve-case
    '--sinch-comp-field-font-additional'?: string,
    // @preserve-case
    '--sinch-comp-field-font-invalid'?: string,
    // @preserve-case
    '--sinch-comp-field-color-default-label-initial'?: string,
    // @preserve-case
    '--sinch-comp-field-color-default-optional-initial'?: string,
    // @preserve-case
    '--sinch-comp-field-color-default-additional-initial'?: string,
    // @preserve-case
    '--sinch-comp-field-color-disabled-label-initial'?: string,
    // @preserve-case
    '--sinch-comp-field-color-disabled-optional-initial'?: string,
    // @preserve-case
    '--sinch-comp-field-color-disabled-additional-initial'?: string,
    // @preserve-case
    '--sinch-comp-field-color-invalid-text-initial'?: string,
  },
}
export type TSinchFileDropWrapper = {
  multiple?: boolean,
  accept?: string,
  size?: number,
  disabled?: boolean,
  invalid?: boolean,
  placeholder: string,
  onChange: (e: CustomEvent<File[]>) => void,
  onInvalid: (e: CustomEvent<TSinchFileDropInvalidType>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-file-drop-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-font-placeholder'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-default-background-active'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-default-border-active'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-default-placeholder-initial'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-default-placeholder-active'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-invalid-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-invalid-background-active'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-invalid-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-invalid-border-active'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-invalid-placeholder-active'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-file-drop-color-disabled-placeholder-initial'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-comp-text-font'?: string,
  },
}
export type TSinchFilePickerWrapper = {
  multiple?: boolean,
  accept?: string,
  size?: number,
  onChange: (e: CustomEvent<File[]>) => void,
  onInvalid: (e: CustomEvent<TSinchFilePickerInvalidType>) => void,

}
export type TSinchFileStatusWrapper = {
  type: TSinchFileStatusType,
  filename: string,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-file-status-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-error-background'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-error-text'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-error-icon'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-success-background'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-success-text'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-success-icon'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-pending-background'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-pending-text'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-pending-icon'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-progress-background'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-progress-text'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-progress-icon'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-loading-background'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-loading-text'?: string,
    // @preserve-case
    '--sinch-comp-file-status-color-loading-icon'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
  },
}
export type TSinchFlagWrapper = {
  code: string,
} & {
  style?: {
  // @preserve-case
    '--sinch-global-size-icon'?: string,
  },
}
export type TSinchGridWrapper = {

  style?: {
  // @preserve-case
    '--sinch-comp-grid-columns-xl'?: string,
    // @preserve-case
    '--sinch-comp-grid-gutter-xl'?: string,
    // @preserve-case
    '--sinch-comp-grid-margin-xl'?: string,
    // @preserve-case
    '--sinch-comp-grid-columns-l'?: string,
    // @preserve-case
    '--sinch-comp-grid-gutter-l'?: string,
    // @preserve-case
    '--sinch-comp-grid-margin-l'?: string,
    // @preserve-case
    '--sinch-comp-grid-columns-m'?: string,
    // @preserve-case
    '--sinch-comp-grid-gutter-m'?: string,
    // @preserve-case
    '--sinch-comp-grid-margin-m'?: string,
    // @preserve-case
    '--sinch-comp-grid-columns-s'?: string,
    // @preserve-case
    '--sinch-comp-grid-gutter-s'?: string,
    // @preserve-case
    '--sinch-comp-grid-margin-s'?: string,
  },
}
export type TSinchGridItemWrapper = {
  xl?: number,
  l?: number,
  m?: number,
  s?: number,

}
export type TSinchHelpTooltipWrapper = {

  style?: {
  // @preserve-case
    '--sinch-global-size-icon'?: string,
  },
}
export type TSinchIconWrapper = ({
  iconsVersion: '1',
  name: string,
} | {
  iconsVersion: '2',
  name: TSinchIcons,
}) & {
  style?: {
  // @preserve-case
    '--sinch-comp-icon-font-weight'?: string,
    // @preserve-case
    '--sinch-comp-icon-font-family'?: string,
    // @preserve-case
    '--sinch-comp-icon-font-feature-settings'?: string,
    // @preserve-case
    '--sinch-comp-icon-font-family-zero-to-d'?: string,
    // @preserve-case
    '--sinch-comp-icon-font-family-e-to-o'?: string,
    // @preserve-case
    '--sinch-comp-icon-font-family-p-to-z'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-sys-color-text-default'?: string,
  },
}
export type TSinchInlineAlertWrapper = {
  type: TSinchInlineAlertType,
  text?: string,
  caption: string,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-inline-alert-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-color-success-default-background'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-color-success-default-text'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-color-success-default-icon'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-color-warning-default-background'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-color-warning-default-text'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-color-warning-default-icon'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-color-error-default-background'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-color-error-default-text'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-color-error-default-icon'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-color-info-default-background'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-color-info-default-text'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-color-info-default-icon'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-font-title'?: string,
    // @preserve-case
    '--sinch-comp-inline-alert-font-body'?: string,
    // @preserve-case
    '--sinch-comp-title-font'?: string,
    // @preserve-case
    '--sinch-comp-rich-text-font'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
  },
}
export type TSinchInputWrapper = {
  value: string,
  mask?: string,
  ariaLabel: string,
  type?: TSinchInputType,
  autocomplete?: string,
  placeholder?: string,
  invalid?: boolean,
  disabled?: boolean,
  autofocus?: boolean,
  size?: TSinchSize,
  onChange?: (e: CustomEvent<string>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
  onCut?: (e: TSinchInputClipboardEvent) => void,
  onCopy?: (e: TSinchInputClipboardEvent) => void,
  onPaste?: (e: TSinchInputClipboardEvent) => void,
  'on-wheel'?: (e: CustomEvent<void> & { target: HTMLElementTagNameMap['sinch-input'] }) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-input-size-container-l'?: string,
    // @preserve-case
    '--sinch-comp-input-size-container-m'?: string,
    // @preserve-case
    '--sinch-comp-input-size-container-s'?: string,
    // @preserve-case
    '--sinch-comp-input-size-icon-l'?: string,
    // @preserve-case
    '--sinch-comp-input-size-icon-m'?: string,
    // @preserve-case
    '--sinch-comp-input-size-icon-s'?: string,
    // @preserve-case
    '--sinch-comp-input-shape-radius-size-l'?: string,
    // @preserve-case
    '--sinch-comp-input-shape-radius-size-m'?: string,
    // @preserve-case
    '--sinch-comp-input-shape-radius-size-s'?: string,
    // @preserve-case
    '--sinch-comp-input-font-input'?: string,
    // @preserve-case
    '--sinch-comp-input-font-placeholder'?: string,
    // @preserve-case
    '--sinch-sys-font-body-monospace-m'?: string,
    // @preserve-case
    '--sinch-comp-input-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-input-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-input-color-default-text-placeholder'?: string,
    // @preserve-case
    '--sinch-comp-input-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-input-color-default-border-focus'?: string,
    // @preserve-case
    '--sinch-comp-input-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-input-color-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-input-color-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-input-color-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-input-color-invalid-border-initial'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
  },
}
export type TSinchLinkWrapper = {
  text: string,
  href: string,
  useHistory?: boolean,
  disabled?: boolean,
  external?: boolean,
  standalone?: boolean,
  // @preserve-case
  preventDefault?: boolean,
  ariaLabel: string,
  onClick?: (e: CustomEvent<void>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-link-default-font-initial'?: string,
    // @preserve-case
    '--sinch-comp-link-default-text-decoration-initial'?: string,
    // @preserve-case
    '--sinch-comp-link-default-text-decoration-hover'?: string,
    // @preserve-case
    '--sinch-comp-link-default-text-decoration-disabled'?: string,
    // @preserve-case
    '--sinch-comp-link-standalone-font-initial'?: string,
    // @preserve-case
    '--sinch-comp-link-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-link-color-default-text-hover'?: string,
    // @preserve-case
    '--sinch-comp-link-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-link-color-default-icon-hover'?: string,
    // @preserve-case
    '--sinch-comp-link-color-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-link-color-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-link-color-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
    // @preserve-case
    '--sinch-global-text-white-space'?: string,
  },
}
export type TSinchListItemWrapper = {

  style?: {
  // @preserve-case
    '--sinch-comp-list-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-list-color-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-list-color-default-border-initial'?: string,
  },
}
export type TSinchPopWrapper = {
  open: boolean,
  orientation: TSinchPopOrientation,
  modal?: boolean,
  inset?: number,
  ariaLabel: string,
  onClose?: (e: CustomEvent<void>) => void,

}
export type TSinchPopoverWrapper = {
  open: boolean,
  orientation?: TSinchPopoverOrientation,
  modal?: boolean,
  tip?: boolean,
  ariaLabel: string,
  onClose?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-popover-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-popover-shadow'?: string,
    // @preserve-case
    '--sinch-comp-popover-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-popover-color-default-border-initial'?: string,
  },
}
export type TSinchProgressWrapper = {
  value: number,
  detailed?: boolean,
  ariaLabel: string,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-progress-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-progress-color-default-bar-initial'?: string,
    // @preserve-case
    '--sinch-comp-progress-color-default-text-initial'?: string,
  },
}
export type TSinchProgressStepperWrapper = {
  value: string,
  // @preserve-case
  progressValue: string,
  onChange?: (e: CustomEvent<string>) => void,

}
export type TSinchProgressStepperItemWrapper = {
  value: string,
  text: string,
  invalid?: boolean,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-progress-stepper-step-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-incomplete-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-incomplete-label-default'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-incomplete-current-label-default'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-incomplete-progress-background'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-incomplete-progress-bar'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-complete-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-complete-label-default'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-complete-current-label-default'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-complete-progress-background'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-complete-progress-bar'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-invalid-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-invalid-label-default'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-invalid-icon-default'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-invalid-progress-background'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-inactive-label-default'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-inactive-progress-background'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-color-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-font-incomplete-label'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-font-complete-label'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-font-inactive-label'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-font-invalid-label'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-font-incomplete-current-label'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-font-complete-current-label'?: string,
    // @preserve-case
    '--sinch-comp-progress-stepper-step-font-invalid-current-label'?: string,
  },
}
export type TSinchRadioWrapper = {
  value: string,
  invalid?: boolean,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-radio-direction'?: 'row' | 'column',
    // @preserve-case
    '--sinch-comp-radio-gap'?: number | string,
  },
}
export type TSinchRadioOptionWrapper = {
  value: string,
  checked?: boolean,
  disabled?: boolean,
  text: string,
  ariaLabel: string,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-radio-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-default-background-active'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-default-border-hover'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-default-border-active'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-default-label-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-checked-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-checked-border-hover'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-checked-border-active'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-checked-knob-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-checked-knob-hover'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-checked-knob-active'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-invalid-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-invalid-border-hover'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-invalid-border-active'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-invalid-label-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-disabled-label-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-checked-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-checked-disabled-knob-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-color-checked-disabled-label-initial'?: string,
    // @preserve-case
    '--sinch-comp-radio-font-label'?: string,
  },
}
export type TSinchRichTextWrapper = {
  size?: TSinchTextType,
  text: string,
  onElementClick?: (e: ElementClickedEvent) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-rich-text-font'?: string,
    // @preserve-case
    '--sinch-sys-font-body-m'?: string,
    // @preserve-case
    '--sinch-sys-font-body-s'?: string,
    // @preserve-case
    '--sinch-sys-font-body-xs'?: string,
    // @preserve-case
    '--sinch-sys-font-body-xxs'?: string,
    // @preserve-case
    '--sinch-ref-typography-font-weight-700'?: string,
    // @preserve-case
    '--sinch-comp-link-default-font-initial'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-font-text'?: string,
    // @preserve-case
    '--sinch-sys-color-text-default'?: string,
    // @preserve-case
    '--sinch-comp-link-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-link-color-default-text-hover'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-emoji-vertical-align'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
  },
}
export type TSinchRichTextareaWrapper = {
  value: string,
  placeholder?: string,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-textarea-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-default-text-placeholder'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-default-border-focus'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-invalid-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-link-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-textarea-font-input'?: string,
    // @preserve-case
    '--sinch-comp-code-tag-font-text'?: string,
    // @preserve-case
    '--sinch-comp-link-default-font-initial'?: string,
  },
}
export type TSinchSegmentCollapseWrapper = {
  value: boolean,
  ariaLabel: string,
  onChange?: (e: CustomEvent<boolean>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-global-size-icon'?: string,
  },
}
export type TSinchSegmentedControlWrapper = {
  value: string,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,

}
export type TSinchSegmentedControlOptionWrapper = {
  value: string,
  text: string,
  disabled?: boolean,
  ariaLabel: string,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-segmented-control-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-checked-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-checked-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-checked-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-checked-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-font-label'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-size-icon'?: string,
  },
}
export type TSinchSegmentedIconControlWrapper = {
  value: string,
  multiple?: boolean,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,

}
export type TSinchSegmentedIconControlOptionWrapper = {
  value: string,
  disabled?: boolean,
  ariaLabel: string,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-segmented-control-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-checked-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-checked-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-checked-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-color-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-segmented-control-size-icon'?: string,
  },
}
export type TSinchSelectButtonWrapper = {
  text: string,
  ariaLabel: string,
  placeholder: string,
  invalid?: boolean,
  disabled?: boolean,
  size?: TSinchSize,
  onClick: (e: CustomEvent<void>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-select-button-size-container-l'?: string,
    // @preserve-case
    '--sinch-comp-select-button-size-icon-l'?: string,
    // @preserve-case
    '--sinch-comp-select-button-shape-radius-size-l'?: string,
    // @preserve-case
    '--sinch-comp-select-button-size-container-m'?: string,
    // @preserve-case
    '--sinch-comp-select-button-size-icon-m'?: string,
    // @preserve-case
    '--sinch-comp-select-button-shape-radius-size-m'?: string,
    // @preserve-case
    '--sinch-comp-select-button-size-container-s'?: string,
    // @preserve-case
    '--sinch-comp-select-button-size-icon-s'?: string,
    // @preserve-case
    '--sinch-comp-select-button-shape-radius-size-s'?: string,
    // @preserve-case
    '--sinch-comp-select-button-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-button-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-button-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-button-color-default-placeholder-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-button-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-button-color-default-border-focus'?: string,
    // @preserve-case
    '--sinch-comp-select-button-color-invalid-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-button-color-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-button-color-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-button-color-disabled-placeholder-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-button-color-disabled-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-button-font-input'?: string,
    // @preserve-case
    '--sinch-comp-select-button-font-placeholder'?: string,
  },
}
export type TSinchSelectMenuWrapper = {
  value: string,
  rows?: number,
  multiple?: boolean,
  searchable?: boolean | null,
  searchAutocomplete?: HTMLInputElement['autocomplete'],
  searchPlaceholder?: string,
  ariaLabel: string,
  onSearchChange?: (e: CustomEvent<string>) => void,
  searchValue?: string,
  onChange?: (e: CustomEvent<string>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-select-menu-color-default-title-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-menu-color-default-not-found-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-menu-font-not-found-text'?: string,
  },
}
export type TSinchSelectMenuOptionWrapper = {
  value: string,
  text: string,
  disabled?: boolean,
  ariaLabel: string,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-select-menu-size-icon'?: string,
    // @preserve-case
    '--sinch-comp-select-menu-font-option'?: string,
    // @preserve-case
    '--sinch-comp-select-menu-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-menu-color-default-background-selected'?: string,
    // @preserve-case
    '--sinch-comp-select-menu-color-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-select-menu-color-default-option-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-menu-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-menu-color-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-menu-color-disabled-option-initial'?: string,
    // @preserve-case
    '--sinch-comp-select-menu-color-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
  },
}
export type TSinchSkeletonWrapper = {
  card?: boolean,
} & {
  style?: {
  // @preserve-case
    '--sinch-sys-color-surface-primary-default'?: string,
    // @preserve-case
    '--sinch-sys-color-surface-tertiary-default'?: string,
    // @preserve-case
    '--sinch-sys-color-border-subtle'?: string,
    // @preserve-case
    '--sinch-sys-shape-radius-l'?: string,
  },
}
export type TSinchSkeletonItemWrapper = {
  size?: TSinchSizeEx,
} & {
  style?: {
  // @preserve-case
    '--sinch-sys-size-xs'?: string,
    // @preserve-case
    '--sinch-sys-size-s'?: string,
    // @preserve-case
    '--sinch-sys-size-m'?: string,
    // @preserve-case
    '--sinch-sys-size-l'?: string,
    // @preserve-case
    '--sinch-sys-shape-radius-xs'?: string,
    // @preserve-case
    '--sinch-sys-shape-radius-s'?: string,
    // @preserve-case
    '--sinch-sys-shape-radius-m'?: string,
    // @preserve-case
    '--sinch-sys-shape-radius-l'?: string,
    // @preserve-case
    '--sinch-sys-color-border-subtle'?: string,
    // @preserve-case
    '--sinch-local-shape-radius'?: string,
  },
}
export type TSinchSpinnerWrapper = {
  size?: TSinchSize,
} & {
  style?: {
  // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-sys-color-text-default'?: string,
  },
}
export type TSinchTableCellWrapper = {
  align?: TSinchTableAlignType,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-table-color-cell-default-border-initial'?: string,
  },
}
export type TSinchTableHeadCellWrapper = {
  text?: string,
  fit?: boolean,
  align?: TSinchTableAlignType,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-table-color-head-cell-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-table-color-head-cell-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-table-color-head-cell-default-text-initial'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
  },
}
export type TSinchTableRowWrapper = {
  sticky?: boolean,
  selected?: boolean,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-table-color-row-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-table-color-row-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-table-color-row-default-background-sticky'?: string,
    // @preserve-case
    '--sinch-comp-table-color-row-checked-background-initial'?: string,
  },
}
export type TSinchTabsWrapper = {
  value: string,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-tab-color-default-border-initial'?: string,
  },
}
export type TSinchTabsIconOptionWrapper = {
  value: string,
  ariaLabel: string,
  disabled?: boolean,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-tab-size-icon'?: string,
    // @preserve-case
    '--sinch-comp-tab-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-checked-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-checked-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
  },
}
export type TSinchTabsOptionWrapper = {
  value: string,
  text: string,
  ariaLabel: string,
  disabled?: boolean,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-tab-font-label'?: string,
    // @preserve-case
    '--sinch-comp-tab-size-icon'?: string,
    // @preserve-case
    '--sinch-comp-tab-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-default-background-hover'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-checked-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-checked-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-checked-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-tab-color-disabled-icon-initial'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
  },
}
export type TSinchTagWrapper = {
  text: string,
  color?: TSinchTagColor,
  small?: boolean,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-tag-size-container-m'?: string,
    // @preserve-case
    '--sinch-comp-tag-size-container-s'?: string,
    // @preserve-case
    '--sinch-comp-tag-size-icon-m'?: string,
    // @preserve-case
    '--sinch-comp-tag-size-icon-s'?: string,
    // @preserve-case
    '--sinch-comp-tag-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-tag-font-size-m-label'?: string,
    // @preserve-case
    '--sinch-comp-tag-font-size-s-label'?: string,
    // @preserve-case
    '--sinch-comp-tag-color-default-background'?: string,
    // @preserve-case
    '--sinch-comp-tag-color-default-foreground'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
    // @preserve-case
    '--sinch-global-size-icon'?: string,
  },
}
export type TSinchTextWrapper = {
  type: TSinchTextType,
  inline?: boolean,
  emphasized?: boolean,
  ellipsis?: boolean,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-text-align'?: string,
    // @preserve-case
    '--sinch-comp-text-font'?: string,
    // @preserve-case
    '--sinch-sys-font-body-m'?: string,
    // @preserve-case
    '--sinch-sys-font-body-s'?: string,
    // @preserve-case
    '--sinch-sys-font-body-xs'?: string,
    // @preserve-case
    '--sinch-sys-font-body-xxs'?: string,
    // @preserve-case
    '--sinch-sys-font-body-emphasize'?: string,
    // @preserve-case
    '--sinch-sys-font-body-emphasize-s'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-sys-color-text-default'?: string,
    // @preserve-case
    '--sinch-global-text-white-space'?: string,
  },
}
export type TSinchTextareaWrapper = {
  value: string,
  placeholder?: string,
  disabled?: boolean,
  invalid?: boolean,
  ariaLabel: string,
  rows?: number,
  // @preserve-case
  minRows?: number,
  resizable?: boolean,
  onChange?: (e: CustomEvent<string>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-textarea-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-textarea-font-input'?: string,
    // @preserve-case
    '--sinch-comp-textarea-size-resize-handle'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-default-text-placeholder'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-default-border-focus'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-invalid-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-disabled-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-textarea-color-disabled-border-initial'?: string,
  },
}
export type TSinchTimePickerWrapper = {
  value: string,
  ampm?: boolean,
  ariaLabel: string,
  submitAriaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-time-picker-header-font'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-digit-font-default-h12'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-digit-font-checked-h12'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-digit-font-default-h24'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-digit-font-checked-h24'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-digit-font-default-minutes'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-digit-font-checked-minutes'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-header-color-default-text-initial'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-header-color-default-icon-initial'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-watch-face-color-default-border-initial'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-watch-face-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-digit-color-default-h12-initial'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-digit-color-checked-h12-default'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-digit-color-default-h24-initial'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-digit-color-checked-h24-initial'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-digit-color-default-minute-initial'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-digit-color-checked-minute-initial'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-needle-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-time-picker-needle-color-default-background-focus'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
  },
}
export type TSinchTitleWrapper = {
  text: string,
  type: TSinchTitleType,
  level: TSinchTitleLevel,
  ellipsis?: boolean,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-title-font'?: string,
    // @preserve-case
    '--sinch-sys-font-desktop-title-xl'?: string,
    // @preserve-case
    '--sinch-sys-font-desktop-title-l'?: string,
    // @preserve-case
    '--sinch-sys-font-desktop-title-m'?: string,
    // @preserve-case
    '--sinch-sys-font-desktop-title-s'?: string,
    // @preserve-case
    '--sinch-sys-font-desktop-title-xs'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-sys-color-text-default'?: string,
  },
}
export type TSinchToastWrapper = {
  type: TSinchToastType,
  text: string,
  persistent?: boolean,
  onTimeout?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-toast-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-toast-font-body'?: string,
    // @preserve-case
    '--sinch-comp-toast-shadow'?: string,
    // @preserve-case
    '--sinch-comp-toast-color-success-default-background'?: string,
    // @preserve-case
    '--sinch-comp-toast-color-success-default-text'?: string,
    // @preserve-case
    '--sinch-comp-toast-color-success-default-icon'?: string,
    // @preserve-case
    '--sinch-comp-toast-color-warning-default-background'?: string,
    // @preserve-case
    '--sinch-comp-toast-color-warning-default-text'?: string,
    // @preserve-case
    '--sinch-comp-toast-color-warning-default-icon'?: string,
    // @preserve-case
    '--sinch-comp-toast-color-error-default-background'?: string,
    // @preserve-case
    '--sinch-comp-toast-color-error-default-text'?: string,
    // @preserve-case
    '--sinch-comp-toast-color-error-default-icon'?: string,
    // @preserve-case
    '--sinch-comp-toast-color-info-default-background'?: string,
    // @preserve-case
    '--sinch-comp-toast-color-info-default-text'?: string,
    // @preserve-case
    '--sinch-comp-toast-color-info-default-icon'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
    // @preserve-case
    '--sinch-global-color-icon'?: string,
  },
}
export type TSinchToastManagerWrapper = {
  origin?: TSinchToastManagerOrigin,

}
export type TSinchToggleWrapper = {
  checked?: boolean,
  small?: boolean,
  labeled?: boolean,
  disabled?: boolean,
  text?: string,
  ariaLabel: string,
  onChange?: (e: CustomEvent<boolean>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-local-size'?: string,
    // @preserve-case
    '--sinch-comp-toggle-color-default-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-toggle-color-default-knob-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-toggle-color-default-text-inside-initial'?: string,
    // @preserve-case
    '--sinch-comp-toggle-color-default-outline-focus'?: string,
    // @preserve-case
    '--sinch-comp-toggle-color-default-label-initial'?: string,
    // @preserve-case
    '--sinch-comp-toggle-color-checked-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-toggle-color-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-toggle-color-disabled-label-initial'?: string,
    // @preserve-case
    '--sinch-comp-toggle-color-checked-disabled-background-initial'?: string,
    // @preserve-case
    '--sinch-comp-toggle-shadow-knob-default'?: string,
    // @preserve-case
    '--sinch-comp-toggle-shadow-knob-disabled'?: string,
    // @preserve-case
    '--sinch-comp-toggle-font-size-m-inside-text'?: string,
    // @preserve-case
    '--sinch-comp-toggle-font-size-m-label'?: string,
    // @preserve-case
    '--sinch-comp-toggle-font-size-s-label'?: string,
  },
}
export type TSinchTooltipWrapper = {
  text: string,
  orientation?: TSinchTooltipOrientation,
  type?: TSinchTooltipType,
  textAlign?: TSinchTooltipTextAlign,
  onShow?: (e: CustomEvent<void>) => void,
  onHide?: (e: CustomEvent<void>) => void,
} & {
  style?: {
  // @preserve-case
    '--sinch-comp-tooltip-shadow'?: string,
    // @preserve-case
    '--sinch-comp-tooltip-shape-radius'?: string,
    // @preserve-case
    '--sinch-comp-tooltip-color-background'?: string,
    // @preserve-case
    '--sinch-comp-tooltip-color-text'?: string,
    // @preserve-case
    '--sinch-local-color-background'?: string,
    // @preserve-case
    '--sinch-comp-tooltip-font-body'?: string,
    // @preserve-case
    '--sinch-comp-text-align'?: string,
    // @preserve-case
    '--sinch-global-color-text'?: string,
  },
}
