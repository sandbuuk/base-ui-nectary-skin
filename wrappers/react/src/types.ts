import type { TSinchSize, TSinchSizeEx } from '@nectary/components/utils/size'
import type { TSinchTextType } from '@nectary/components/text/types'
import type { TSinchTableAlignType } from '@nectary/components/table-cell/types'
import type { TSinchAccordionStatusType } from '@nectary/components/accordion-item/types'
import type { TSinchAlertType } from '@nectary/components/alert/types'
import type { TSinchButtonType } from '@nectary/components/button/types'
import type { TSinchBadgeMode } from '@nectary/components/badge/types'
import type { TSinchAvatarStatus } from '@nectary/components/avatar/types'
import type { TSinchChatBlockType } from '@nectary/components/chat-block/types'
import type { TSinchChatBubbleStatus } from '@nectary/components/chat-bubble/types'
import type { TSinchDialogCloseDetail } from '@nectary/components/dialog/types'
import type { TSinchFileDropInvalidType } from '@nectary/components/file-drop/types'
import type { TSinchFilePickerInvalidType } from '@nectary/components/file-picker/types'
import type { TSinchFileStatusType } from '@nectary/components/file-status/types'
import type { TSinchHorizontalStepperStatusType } from '@nectary/components/horizontal-stepper-item/types'
import type { TSinchIconButtonType } from '@nectary/components/icon-button/types'
import type { TSinchInlineAlertType } from '@nectary/components/inline-alert/types'
import type { TSinchInputType } from '@nectary/components/input/types'
import type { TSinchInputClipboardEvent } from '@nectary/components/input/types'
import type { TSinchPopOrientation } from '@nectary/components/pop/types'
import type { TSinchTileControlColumns } from '@nectary/components/tile-control/types'
import type { TSinchToastType } from '@nectary/components/toast/types'
import type { TSinchTitleType } from '@nectary/components/title/types'
import type { TSinchTitleLevel } from '@nectary/components/title/types'
import type { TSinchToastManagerOrigin } from '@nectary/components/toast-manager/types'
import type { TSinchTooltipOrientation } from '@nectary/components/tooltip/types'
import type { TSinchTooltipType } from '@nectary/components/tooltip/types'
import type { TSinchVerticalStepperStatusType } from '@nectary/components/vertical-stepper-item/types'
import type { TSinchPopoverOrientation } from '@nectary/components/popover/types'

export interface TSinchAccordionWrapper {
  value: string,
  multiple?: boolean,
  onChange?: (e: CustomEvent<string>) => void,
}
export interface TSinchAccordionItemWrapper {
  value: string,
  label: string,
  optionalText?: string,
  status?: TSinchAccordionStatusType,
  disabled?: boolean,
}
export interface TSinchActionMenuWrapper {
  rows?: number,
  ariaLabel: string,
}
export interface TSinchActionMenuOptionWrapper {
  text: string,
  disabled?: boolean,
  ariaLabel: string,
  onClick?: (e: CustomEvent<void>) => void,
}
export interface TSinchAlertWrapper {
  type: TSinchAlertType,
  text: string,
}
export interface TSinchAvatarWrapper {
  src?: string,
  alt?: string,
  color?: string,
  size?: TSinchSize,
  status?: TSinchAvatarStatus,
}
export interface TSinchBadgeWrapper {
  text: string,
  size?: TSinchSize,
  mode?: TSinchBadgeMode,
  hidden?: boolean,
}
export interface TSinchButtonWrapper {
  type?: TSinchButtonType,
  size?: TSinchSizeEx,
  text?: string,
  ariaLabel: string,
  disabled?: boolean,
  toggled?: boolean,
  onClick?: (e: CustomEvent<void>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
}
export interface TSinchCardWrapper {
  text: string,
  caption: string,
  label?: string,
  draggable?: boolean,
}


export interface TSinchChatBlockWrapper {
  type: TSinchChatBlockType,
  firstName?: string,
  lastName?: string,
  timestamp?: string,
}
export interface TSinchChatBubbleWrapper {
  text: string,
  status?: TSinchChatBubbleStatus,
}
export interface TSinchCheckboxWrapper {
  checked?: boolean,
  indeterminate?: boolean,
  disabled?: boolean,
  invalid?: boolean,
  text?: string,
  ariaLabel: string,
  onChange?: (e: CustomEvent<boolean>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
}
export interface TSinchChipWrapper {
  text: string,
  color?: string,
  small?: boolean,
  onClick?: (e: CustomEvent<void>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
  ariaLabel: string,
}
export interface TSinchCodeTagWrapper {
  text: string,
}
export interface TSinchColorMenuWrapper {
  value: string,
  rows?: number,
  cols?: number,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
}
export interface TSinchColorMenuOptionWrapper {
  value: string,
}
export interface TSinchColorSwatchWrapper {
  name?: string,
}
export interface TSinchDatePickerWrapper {
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
}
export interface TSinchDialogWrapper {
  open: boolean,
  caption: string,
  ariaLabel: string,
  closeAriaLabel: string,
  onClose?: (e: CustomEvent<TSinchDialogCloseDetail>) => void,
}
export interface TSinchEmojiWrapper {
  char: string,
}
export interface TSinchEmojiPickerWrapper {
  onChange: (e: CustomEvent<string>) => void,
}
export interface TSinchFieldWrapper {
  label?: string,
  optionalText?: string,
  additionalText?: string,
  invalidText?: string,
  disabled?: boolean,
}
export interface TSinchFileDropWrapper {
  multiple?: boolean,
  accept?: string,
  size?: number,
  disabled?: boolean,
  invalid?: boolean,
  placeholder: string,
  onChange: (e: CustomEvent<File[]>) => void,
  onInvalid: (e: CustomEvent<TSinchFileDropInvalidType>) => void,
}
export interface TSinchFilePickerWrapper {
  multiple?: boolean,
  accept?: string,
  size?: number,
  onChange: (e: CustomEvent<File[]>) => void,
  onInvalid: (e: CustomEvent<TSinchFilePickerInvalidType>) => void,
}
export interface TSinchFileStatusWrapper {
  type: TSinchFileStatusType,
  filename: string,
}
export interface TSinchFlagWrapper {
  code: string,
}

export interface TSinchGridItemWrapper {
  xl?: number,
  l?: number,
  m?: number,
  s?: number,
}

export interface TSinchHorizontalStepperWrapper {
  index: string,
  ariaLabel: string,
}
export interface TSinchHorizontalStepperItemWrapper {
  label: string,
  description?: string,
  status?: TSinchHorizontalStepperStatusType,
}
export interface TSinchIconWrapper {
  name: string,
}
export interface TSinchIconButtonWrapper {
  type?: TSinchIconButtonType,
  size?: TSinchSizeEx,
  disabled?: boolean,
  ariaLabel: string,
  onClick?: (e: CustomEvent<void>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
  onTooltipShow?: (e: CustomEvent<void>) => void,
  onTooltipHide?: (e: CustomEvent<void>) => void,
}
export interface TSinchInlineAlertWrapper {
  type: TSinchInlineAlertType,
  text?: string,
  caption: string,
}
export interface TSinchInputWrapper {
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
}
export interface TSinchLinkWrapper {
  text: string,
  href: string,
  useHistory?: boolean,
  disabled?: boolean,
  external?: boolean,
  standalone?: boolean,
  preventDefault?: boolean,
  ariaLabel: string,
  onClick?: (e: CustomEvent<void>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
}


export interface TSinchPopWrapper {
  open: boolean,
  orientation: TSinchPopOrientation,
  modal?: boolean,
  inset?: number,
  ariaLabel: string,
  onClose?: (e: CustomEvent<void>) => void,
}
export interface TSinchPopoverWrapper {
  open: boolean,
  orientation?: TSinchPopoverOrientation,
  modal?: boolean,
  tip?: boolean,
  ariaLabel: string,
  onClose?: (e: CustomEvent<void>) => void,
}
export interface TSinchProgressWrapper {
  value: number,
  detailed?: boolean,
  ariaLabel: string,
}
export interface TSinchProgressStepperWrapper {
  value: string,
  progressValue: string,
  onChange?: (e: CustomEvent<string>) => void,
}
export interface TSinchProgressStepperItemWrapper {
  value: string,
  text: string,
  invalid?: boolean,
}
export interface TSinchRadioWrapper {
  value: string,
  invalid?: boolean,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
}
export interface TSinchRadioOptionWrapper {
  value: string,
  checked?: boolean,
  disabled?: boolean,
  text: string,
  ariaLabel: string,
}
export interface TSinchRichTextWrapper {
  size?: TSinchTextType,
  text: string,
}
export interface TSinchRichTextareaWrapper {
  value: string,
  placeholder?: string,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
}
export interface TSinchSegmentWrapper {
  caption: string,
  collapsed?: boolean,
  size?: TSinchSize,
}
export interface TSinchSegmentCollapseWrapper {
  value: boolean,
  ariaLabel: string,
  onChange?: (e: CustomEvent<boolean>) => void,
}
export interface TSinchSegmentedControlWrapper {
  value: string,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
}
export interface TSinchSegmentedControlOptionWrapper {
  value: string,
  text: string,
  disabled?: boolean,
  ariaLabel: string,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
}
export interface TSinchSegmentedIconControlWrapper {
  value: string,
  multiple?: boolean,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
}
export interface TSinchSegmentedIconControlOptionWrapper {
  value: string,
  disabled?: boolean,
  ariaLabel: string,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
}
export interface TSinchSelectButtonWrapper {
  text: string,
  ariaLabel: string,
  placeholder: string,
  invalid?: boolean,
  disabled?: boolean,
  size?: TSinchSize,
  onClick: (e: CustomEvent<void>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
}
export interface TSinchSelectMenuWrapper {
  value: string,
  rows?: number,
  multiple?: boolean,
  searchable?: boolean | null,
  searchPlaceholder?: string,
  ariaLabel: string,
  onSearchChange?: (e: CustomEvent<string>) => void,
  onChange?: (e: CustomEvent<string>) => void,
}
export interface TSinchSelectMenuOptionWrapper {
  value: string,
  text: string,
  disabled?: boolean,
  ariaLabel: string,
}
export interface TSinchSkeletonWrapper {
  card?: boolean,
}
export interface TSinchSkeletonItemWrapper {
  size?: TSinchSizeEx,
}
export interface TSinchSpinnerWrapper {
  size?: TSinchSize,
}


export interface TSinchTableCellWrapper {
  align?: TSinchTableAlignType,
}

export interface TSinchTableHeadCellWrapper {
  text?: string,
  fit?: boolean,
  align?: TSinchTableAlignType,
}
export interface TSinchTableRowWrapper {
  sticky?: boolean,
  selected?: boolean,
}
export interface TSinchTabsWrapper {
  value: string,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
}
export interface TSinchTabsIconOptionWrapper {
  value: string,
  ariaLabel: string,
  disabled?: boolean,
}
export interface TSinchTabsOptionWrapper {
  value: string,
  text: string,
  ariaLabel: string,
  disabled?: boolean,
}
export interface TSinchTagWrapper {
  text: string,
  color?: string,
  small?: boolean,
}
export interface TSinchTextWrapper {
  type: TSinchTextType,
  inline?: boolean,
  emphasized?: boolean,
  ellipsis?: boolean,
}
export interface TSinchTextareaWrapper {
  value: string,
  placeholder?: string,
  disabled?: boolean,
  invalid?: boolean,
  ariaLabel: string,
  rows?: number,
  minRows?: number,
  resizable?: boolean,
  onChange?: (e: CustomEvent<string>) => void,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
}
export interface TSinchTileControlWrapper {
  value: string,
  multiple?: boolean,
  small?: boolean,
  cols: TSinchTileControlColumns,
  ariaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
}
export interface TSinchTileControlOptionWrapper {
  value: string,
  text: string,
  ariaLabel: string,
  disabled?: boolean,
  onFocus?: (e: CustomEvent<void>) => void,
  onBlur?: (e: CustomEvent<void>) => void,
}
export interface TSinchTimePickerWrapper {
  value: string,
  ampm?: boolean,
  ariaLabel: string,
  submitAriaLabel: string,
  onChange?: (e: CustomEvent<string>) => void,
}
export interface TSinchTitleWrapper {
  text: string,
  type: TSinchTitleType,
  level: TSinchTitleLevel,
  ellipsis?: boolean,
}
export interface TSinchToastWrapper {
  type: TSinchToastType,
  text: string,
  persistent?: boolean,
  onTimeout?: (e: CustomEvent<void>) => void,
}
export interface TSinchToastManagerWrapper {
  origin?: TSinchToastManagerOrigin,
}
export interface TSinchToggleWrapper {
  checked?: boolean,
  small?: boolean,
  labeled?: boolean,
  disabled?: boolean,
  text?: string,
  ariaLabel: string,
  onChange?: (e: CustomEvent<boolean>) => void,
}
export interface TSinchTooltipWrapper {
  text: string,
  orientation?: TSinchTooltipOrientation,
  type?: TSinchTooltipType,
  onShow?: (e: CustomEvent<void>) => void,
  onHide?: (e: CustomEvent<void>) => void,
}
export interface TSinchVerticalStepperWrapper {
  index: string,
  ariaLabel: string,
}
export interface TSinchVerticalStepperItemWrapper {
  label: string,
  description?: string,
  status?: TSinchVerticalStepperStatusType,
}