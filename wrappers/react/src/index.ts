import { createReactWrapper } from './utils'
import type { NamedSlots } from './slots'
import type {} from '@nectary/components/accordion'
import type { TSinchAccordionWrapper, TSinchAccordionItemWrapper, TSinchActionMenuWrapper, TSinchActionMenuOptionWrapper, TSinchAlertWrapper, TSinchAvatarWrapper, TSinchBadgeWrapper, TSinchButtonWrapper, TSinchButtonGroupWrapper, TSinchButtonGroupItemWrapper, TSinchCardWrapper, TSinchCardV2Wrapper, TSinchCardV2TitleWrapper, TSinchCheckboxWrapper, TSinchChipWrapper, TSinchCodeTagWrapper, TSinchColorMenuWrapper, TSinchColorMenuOptionWrapper, TSinchColorSwatchWrapper, TSinchDatePickerWrapper, TSinchDialogWrapper, TSinchEmojiWrapper, TSinchEmojiPickerWrapper, TSinchFieldWrapper, TSinchFileDropWrapper, TSinchFilePickerWrapper, TSinchFileStatusWrapper, TSinchFlagWrapper, TSinchGridItemWrapper, TSinchHorizontalStepperWrapper, TSinchHorizontalStepperItemWrapper, TSinchIconWrapper, TSinchInlineAlertWrapper, TSinchInputWrapper, TSinchLinkWrapper, TSinchPopWrapper, TSinchPopoverWrapper, TSinchProgressWrapper, TSinchProgressStepperWrapper, TSinchProgressStepperItemWrapper, TSinchRadioWrapper, TSinchRadioOptionWrapper, TSinchRichTextWrapper, TSinchRichTextareaWrapper, TSinchSegmentWrapper, TSinchSegmentCollapseWrapper, TSinchSegmentedControlWrapper, TSinchSegmentedControlOptionWrapper, TSinchSegmentedIconControlWrapper, TSinchSegmentedIconControlOptionWrapper, TSinchSelectButtonWrapper, TSinchSelectMenuWrapper, TSinchSelectMenuOptionWrapper, TSinchSkeletonWrapper, TSinchSkeletonItemWrapper, TSinchSpinnerWrapper, TSinchTableCellWrapper, TSinchTableHeadCellWrapper, TSinchTableRowWrapper, TSinchTabsWrapper, TSinchTabsIconOptionWrapper, TSinchTabsOptionWrapper, TSinchTagWrapper, TSinchTextWrapper, TSinchTextareaWrapper, TSinchTileControlWrapper, TSinchTileControlOptionWrapper, TSinchTimePickerWrapper, TSinchTitleWrapper, TSinchToastWrapper, TSinchToastManagerWrapper, TSinchToggleWrapper, TSinchTooltipWrapper, TSinchVerticalStepperWrapper, TSinchVerticalStepperItemWrapper } from './types'
import type {} from '@nectary/components/accordion-item'
import type {} from '@nectary/components/action-menu'
import type {} from '@nectary/components/action-menu-option'
import type {} from '@nectary/components/alert'
import type {} from '@nectary/components/avatar'
import type {} from '@nectary/components/badge'
import type {} from '@nectary/components/button'
import type {} from '@nectary/components/button-group'
import type {} from '@nectary/components/button-group-item'
import type {} from '@nectary/components/card'
import type {} from '@nectary/components/card-container'
import type {} from '@nectary/components/card-v2'
import type {} from '@nectary/components/card-v2-title'
import type {} from '@nectary/components/checkbox'
import type {} from '@nectary/components/chip'
import type {} from '@nectary/components/code-tag'
import type {} from '@nectary/components/color-menu'
import type {} from '@nectary/components/color-menu-option'
import type {} from '@nectary/components/color-swatch'
import type {} from '@nectary/components/date-picker'
import type {} from '@nectary/components/dialog'
import type {} from '@nectary/components/emoji'
import type {} from '@nectary/components/emoji-picker'
import type {} from '@nectary/components/field'
import type {} from '@nectary/components/file-drop'
import type {} from '@nectary/components/file-picker'
import type {} from '@nectary/components/file-status'
import type {} from '@nectary/components/flag'
import type {} from '@nectary/components/grid'
import type {} from '@nectary/components/grid-item'
import type {} from '@nectary/components/help-tooltip'
import type {} from '@nectary/components/horizontal-stepper'
import type {} from '@nectary/components/horizontal-stepper-item'
import type {} from '@nectary/components/icon'
import type {} from '@nectary/components/inline-alert'
import type {} from '@nectary/components/input'
import type {} from '@nectary/components/link'
import type {} from '@nectary/components/list'
import type {} from '@nectary/components/list-item'
import type {} from '@nectary/components/persistent-overlay'
import type {} from '@nectary/components/pop'
import type {} from '@nectary/components/popover'
import type {} from '@nectary/components/progress'
import type {} from '@nectary/components/progress-stepper'
import type {} from '@nectary/components/progress-stepper-item'
import type {} from '@nectary/components/radio'
import type {} from '@nectary/components/radio-option'
import type {} from '@nectary/components/rich-text'
import type {} from '@nectary/components/rich-textarea'
import type {} from '@nectary/components/segment'
import type {} from '@nectary/components/segment-collapse'
import type {} from '@nectary/components/segmented-control'
import type {} from '@nectary/components/segmented-control-option'
import type {} from '@nectary/components/segmented-icon-control'
import type {} from '@nectary/components/segmented-icon-control-option'
import type {} from '@nectary/components/select-button'
import type {} from '@nectary/components/select-menu'
import type {} from '@nectary/components/select-menu-option'
import type {} from '@nectary/components/skeleton'
import type {} from '@nectary/components/skeleton-item'
import type {} from '@nectary/components/spinner'
import type {} from '@nectary/components/table'
import type {} from '@nectary/components/table-body'
import type {} from '@nectary/components/table-cell'
import type {} from '@nectary/components/table-head'
import type {} from '@nectary/components/table-head-cell'
import type {} from '@nectary/components/table-row'
import type {} from '@nectary/components/tabs'
import type {} from '@nectary/components/tabs-icon-option'
import type {} from '@nectary/components/tabs-option'
import type {} from '@nectary/components/tag'
import type {} from '@nectary/components/text'
import type {} from '@nectary/components/textarea'
import type {} from '@nectary/components/tile-control'
import type {} from '@nectary/components/tile-control-option'
import type {} from '@nectary/components/time-picker'
import type {} from '@nectary/components/title'
import type {} from '@nectary/components/toast'
import type {} from '@nectary/components/toast-manager'
import type {} from '@nectary/components/toggle'
import type {} from '@nectary/components/tooltip'
import type {} from '@nectary/components/vertical-stepper'
import type {} from '@nectary/components/vertical-stepper-item'

export const Accordion = createReactWrapper< TSinchAccordionWrapper, NamedSlots['sinch-accordion']>('sinch-accordion')
export const AccordionItem = createReactWrapper< TSinchAccordionItemWrapper, NamedSlots['sinch-accordion-item']>('sinch-accordion-item', ['optionalText'])
export const ActionMenu = createReactWrapper< TSinchActionMenuWrapper, NamedSlots['sinch-action-menu']>('sinch-action-menu')
export const ActionMenuOption = createReactWrapper< TSinchActionMenuOptionWrapper, NamedSlots['sinch-action-menu-option']>('sinch-action-menu-option')
export const Alert = createReactWrapper< TSinchAlertWrapper, NamedSlots['sinch-alert']>('sinch-alert')
export const Avatar = createReactWrapper< TSinchAvatarWrapper, NamedSlots['sinch-avatar']>('sinch-avatar')
export const Badge = createReactWrapper< TSinchBadgeWrapper, NamedSlots['sinch-badge']>('sinch-badge')
export const Button = createReactWrapper< TSinchButtonWrapper, NamedSlots['sinch-button']>('sinch-button')
export const ButtonGroup = createReactWrapper< TSinchButtonGroupWrapper, NamedSlots['sinch-button-group']>('sinch-button-group')
export const ButtonGroupItem = createReactWrapper< TSinchButtonGroupItemWrapper, NamedSlots['sinch-button-group-item']>('sinch-button-group-item')
export const Card = createReactWrapper< TSinchCardWrapper, NamedSlots['sinch-card']>('sinch-card')
export const CardContainer = createReactWrapper<JSX.IntrinsicElements['sinch-card-container'], NamedSlots['sinch-card-container']>('sinch-card-container')
export const CardV2 = createReactWrapper< TSinchCardV2Wrapper, NamedSlots['sinch-card-v2']>('sinch-card-v2')
export const CardV2Title = createReactWrapper< TSinchCardV2TitleWrapper, NamedSlots['sinch-card-v2-title']>('sinch-card-v2-title')
export const Checkbox = createReactWrapper< TSinchCheckboxWrapper, NamedSlots['sinch-checkbox']>('sinch-checkbox')
export const Chip = createReactWrapper< TSinchChipWrapper, NamedSlots['sinch-chip']>('sinch-chip')
export const CodeTag = createReactWrapper< TSinchCodeTagWrapper, NamedSlots['sinch-code-tag']>('sinch-code-tag')
export const ColorMenu = createReactWrapper< TSinchColorMenuWrapper, NamedSlots['sinch-color-menu']>('sinch-color-menu')
export const ColorMenuOption = createReactWrapper< TSinchColorMenuOptionWrapper, NamedSlots['sinch-color-menu-option']>('sinch-color-menu-option')
export const ColorSwatch = createReactWrapper< TSinchColorSwatchWrapper, NamedSlots['sinch-color-swatch']>('sinch-color-swatch')
export const DatePicker = createReactWrapper< TSinchDatePickerWrapper, NamedSlots['sinch-date-picker']>('sinch-date-picker')
export const Dialog = createReactWrapper< TSinchDialogWrapper, NamedSlots['sinch-dialog']>('sinch-dialog')
export const Emoji = createReactWrapper< TSinchEmojiWrapper, NamedSlots['sinch-emoji']>('sinch-emoji')
export const EmojiPicker = createReactWrapper< TSinchEmojiPickerWrapper, NamedSlots['sinch-emoji-picker']>('sinch-emoji-picker')
export const Field = createReactWrapper< TSinchFieldWrapper, NamedSlots['sinch-field']>('sinch-field', ['optionalText', 'additionalText', 'invalidText'])
export const FileDrop = createReactWrapper< TSinchFileDropWrapper, NamedSlots['sinch-file-drop']>('sinch-file-drop')
export const FilePicker = createReactWrapper< TSinchFilePickerWrapper, NamedSlots['sinch-file-picker']>('sinch-file-picker')
export const FileStatus = createReactWrapper< TSinchFileStatusWrapper, NamedSlots['sinch-file-status']>('sinch-file-status')
export const Flag = createReactWrapper< TSinchFlagWrapper, NamedSlots['sinch-flag']>('sinch-flag')
export const Grid = createReactWrapper<JSX.IntrinsicElements['sinch-grid'], NamedSlots['sinch-grid']>('sinch-grid')
export const GridItem = createReactWrapper< TSinchGridItemWrapper, NamedSlots['sinch-grid-item']>('sinch-grid-item')
export const HelpTooltip = createReactWrapper<JSX.IntrinsicElements['sinch-help-tooltip'], NamedSlots['sinch-help-tooltip']>('sinch-help-tooltip')
export const HorizontalStepper = createReactWrapper< TSinchHorizontalStepperWrapper, NamedSlots['sinch-horizontal-stepper']>('sinch-horizontal-stepper')
export const HorizontalStepperItem = createReactWrapper< TSinchHorizontalStepperItemWrapper, NamedSlots['sinch-horizontal-stepper-item']>('sinch-horizontal-stepper-item')
export const Icon = createReactWrapper< TSinchIconWrapper, NamedSlots['sinch-icon']>('sinch-icon')
export const InlineAlert = createReactWrapper< TSinchInlineAlertWrapper, NamedSlots['sinch-inline-alert']>('sinch-inline-alert')
export const Input = createReactWrapper< TSinchInputWrapper, NamedSlots['sinch-input']>('sinch-input')
export const Link = createReactWrapper< TSinchLinkWrapper, NamedSlots['sinch-link']>('sinch-link', ['preventDefault'])
export const List = createReactWrapper<JSX.IntrinsicElements['sinch-list'], NamedSlots['sinch-list']>('sinch-list')
export const ListItem = createReactWrapper<JSX.IntrinsicElements['sinch-list-item'], NamedSlots['sinch-list-item']>('sinch-list-item')
export const PersistentOverlay = createReactWrapper<JSX.IntrinsicElements['sinch-persistent-overlay'], NamedSlots['sinch-persistent-overlay']>('sinch-persistent-overlay')
export const Pop = createReactWrapper< TSinchPopWrapper, NamedSlots['sinch-pop']>('sinch-pop')
export const Popover = createReactWrapper< TSinchPopoverWrapper, NamedSlots['sinch-popover']>('sinch-popover')
export const Progress = createReactWrapper< TSinchProgressWrapper, NamedSlots['sinch-progress']>('sinch-progress')
export const ProgressStepper = createReactWrapper< TSinchProgressStepperWrapper, NamedSlots['sinch-progress-stepper']>('sinch-progress-stepper', ['progressValue'])
export const ProgressStepperItem = createReactWrapper< TSinchProgressStepperItemWrapper, NamedSlots['sinch-progress-stepper-item']>('sinch-progress-stepper-item')
export const Radio = createReactWrapper< TSinchRadioWrapper, NamedSlots['sinch-radio']>('sinch-radio')
export const RadioOption = createReactWrapper< TSinchRadioOptionWrapper, NamedSlots['sinch-radio-option']>('sinch-radio-option')
export const RichText = createReactWrapper< TSinchRichTextWrapper, NamedSlots['sinch-rich-text']>('sinch-rich-text')
export const RichTextarea = createReactWrapper< TSinchRichTextareaWrapper, NamedSlots['sinch-rich-textarea']>('sinch-rich-textarea')
export const Segment = createReactWrapper< TSinchSegmentWrapper, NamedSlots['sinch-segment']>('sinch-segment')
export const SegmentCollapse = createReactWrapper< TSinchSegmentCollapseWrapper, NamedSlots['sinch-segment-collapse']>('sinch-segment-collapse')
export const SegmentedControl = createReactWrapper< TSinchSegmentedControlWrapper, NamedSlots['sinch-segmented-control']>('sinch-segmented-control')
export const SegmentedControlOption = createReactWrapper< TSinchSegmentedControlOptionWrapper, NamedSlots['sinch-segmented-control-option']>('sinch-segmented-control-option')
export const SegmentedIconControl = createReactWrapper< TSinchSegmentedIconControlWrapper, NamedSlots['sinch-segmented-icon-control']>('sinch-segmented-icon-control')
export const SegmentedIconControlOption = createReactWrapper< TSinchSegmentedIconControlOptionWrapper, NamedSlots['sinch-segmented-icon-control-option']>('sinch-segmented-icon-control-option')
export const SelectButton = createReactWrapper< TSinchSelectButtonWrapper, NamedSlots['sinch-select-button']>('sinch-select-button')
export const SelectMenu = createReactWrapper< TSinchSelectMenuWrapper, NamedSlots['sinch-select-menu']>('sinch-select-menu')
export const SelectMenuOption = createReactWrapper< TSinchSelectMenuOptionWrapper, NamedSlots['sinch-select-menu-option']>('sinch-select-menu-option')
export const Skeleton = createReactWrapper< TSinchSkeletonWrapper, NamedSlots['sinch-skeleton']>('sinch-skeleton')
export const SkeletonItem = createReactWrapper< TSinchSkeletonItemWrapper, NamedSlots['sinch-skeleton-item']>('sinch-skeleton-item')
export const Spinner = createReactWrapper< TSinchSpinnerWrapper, NamedSlots['sinch-spinner']>('sinch-spinner')
export const Table = createReactWrapper<JSX.IntrinsicElements['sinch-table'], NamedSlots['sinch-table']>('sinch-table')
export const TableBody = createReactWrapper<JSX.IntrinsicElements['sinch-table-body'], NamedSlots['sinch-table-body']>('sinch-table-body')
export const TableCell = createReactWrapper< TSinchTableCellWrapper, NamedSlots['sinch-table-cell']>('sinch-table-cell')
export const TableHead = createReactWrapper<JSX.IntrinsicElements['sinch-table-head'], NamedSlots['sinch-table-head']>('sinch-table-head')
export const TableHeadCell = createReactWrapper< TSinchTableHeadCellWrapper, NamedSlots['sinch-table-head-cell']>('sinch-table-head-cell')
export const TableRow = createReactWrapper< TSinchTableRowWrapper, NamedSlots['sinch-table-row']>('sinch-table-row')
export const Tabs = createReactWrapper< TSinchTabsWrapper, NamedSlots['sinch-tabs']>('sinch-tabs')
export const TabsIconOption = createReactWrapper< TSinchTabsIconOptionWrapper, NamedSlots['sinch-tabs-icon-option']>('sinch-tabs-icon-option')
export const TabsOption = createReactWrapper< TSinchTabsOptionWrapper, NamedSlots['sinch-tabs-option']>('sinch-tabs-option')
export const Tag = createReactWrapper< TSinchTagWrapper, NamedSlots['sinch-tag']>('sinch-tag')
export const Text = createReactWrapper< TSinchTextWrapper, NamedSlots['sinch-text']>('sinch-text')
export const Textarea = createReactWrapper< TSinchTextareaWrapper, NamedSlots['sinch-textarea']>('sinch-textarea', ['minRows'])
export const TileControl = createReactWrapper< TSinchTileControlWrapper, NamedSlots['sinch-tile-control']>('sinch-tile-control')
export const TileControlOption = createReactWrapper< TSinchTileControlOptionWrapper, NamedSlots['sinch-tile-control-option']>('sinch-tile-control-option')
export const TimePicker = createReactWrapper< TSinchTimePickerWrapper, NamedSlots['sinch-time-picker']>('sinch-time-picker')
export const Title = createReactWrapper< TSinchTitleWrapper, NamedSlots['sinch-title']>('sinch-title')
export const Toast = createReactWrapper< TSinchToastWrapper, NamedSlots['sinch-toast']>('sinch-toast')
export const ToastManager = createReactWrapper< TSinchToastManagerWrapper, NamedSlots['sinch-toast-manager']>('sinch-toast-manager')
export const Toggle = createReactWrapper< TSinchToggleWrapper, NamedSlots['sinch-toggle']>('sinch-toggle')
export const Tooltip = createReactWrapper< TSinchTooltipWrapper, NamedSlots['sinch-tooltip']>('sinch-tooltip')
export const VerticalStepper = createReactWrapper< TSinchVerticalStepperWrapper, NamedSlots['sinch-vertical-stepper']>('sinch-vertical-stepper')
export const VerticalStepperItem = createReactWrapper< TSinchVerticalStepperItemWrapper, NamedSlots['sinch-vertical-stepper-item']>('sinch-vertical-stepper-item')
