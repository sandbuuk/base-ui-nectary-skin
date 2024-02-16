import '@nectary/components/accordion'
import '@nectary/components/accordion-item'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/alert'
import '@nectary/components/avatar'
import '@nectary/components/badge'
import '@nectary/components/button'
import '@nectary/components/card'
import '@nectary/components/card-container'
import '@nectary/components/chat'
import '@nectary/components/chat-block'
import '@nectary/components/chat-bubble'
import '@nectary/components/checkbox'
import '@nectary/components/chip'
import '@nectary/components/code-tag'
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'
import '@nectary/components/color-swatch'
import '@nectary/components/date-picker'
import '@nectary/components/dialog'
import '@nectary/components/emoji'
import '@nectary/components/emoji-picker'
import '@nectary/components/field'
import '@nectary/components/file-drop'
import '@nectary/components/file-picker'
import '@nectary/components/file-status'
import '@nectary/components/flag'
import '@nectary/components/grid'
import '@nectary/components/grid-item'
import '@nectary/components/help-tooltip'
import '@nectary/components/horizontal-stepper'
import '@nectary/components/horizontal-stepper-item'
import '@nectary/components/icon'
import '@nectary/components/icon-button'
import '@nectary/components/inline-alert'
import '@nectary/components/input'
import '@nectary/components/link'
import '@nectary/components/list'
import '@nectary/components/list-item'
import '@nectary/components/pagination'
import '@nectary/components/pop'
import '@nectary/components/popover'
import '@nectary/components/progress'
import '@nectary/components/progress-stepper'
import '@nectary/components/progress-stepper-item'
import '@nectary/components/radio'
import '@nectary/components/radio-option'
import '@nectary/components/rich-text'
import '@nectary/components/rich-textarea'
import '@nectary/components/segment'
import '@nectary/components/segment-collapse'
import '@nectary/components/segmented-control'
import '@nectary/components/segmented-control-option'
import '@nectary/components/segmented-icon-control'
import '@nectary/components/segmented-icon-control-option'
import '@nectary/components/select-button'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/skeleton'
import '@nectary/components/skeleton-item'
import '@nectary/components/spinner'
import '@nectary/components/table'
import '@nectary/components/table-body'
import '@nectary/components/table-cell'
import '@nectary/components/table-head'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-row'
import '@nectary/components/tabs'
import '@nectary/components/tabs-icon-option'
import '@nectary/components/tabs-option'
import '@nectary/components/tag'
import '@nectary/components/text'
import '@nectary/components/textarea'
import '@nectary/components/tile-control'
import '@nectary/components/tile-control-option'
import '@nectary/components/time-picker'
import '@nectary/components/title'
import '@nectary/components/toast'
import '@nectary/components/toast-manager'
import '@nectary/components/toggle'
import '@nectary/components/tooltip'
import '@nectary/components/vertical-stepper'
import '@nectary/components/vertical-stepper-item'
import React from 'react'
import { renderSlotsOrChildren } from './slots'
import type { Slotify } from './slots'

declare global {
  interface Slots {
    [key: string]: never,
  }
}

export const Accordion: React.FC<
  JSX.IntrinsicElements['sinch-accordion'] &
    Slotify<Nectary.Slots['sinch-accordion']>
> = (props) =>
  React.createElement('sinch-accordion', props, renderSlotsOrChildren(props))
export const AccordionItem: React.FC<
  JSX.IntrinsicElements['sinch-accordion-item'] &
    Slotify<Nectary.Slots['sinch-accordion-item']>
> = (props) =>
  React.createElement(
    'sinch-accordion-item',
    props,
    renderSlotsOrChildren(props)
  )
export const ActionMenu: React.FC<
  JSX.IntrinsicElements['sinch-action-menu'] &
    Slotify<Nectary.Slots['sinch-action-menu']>
> = (props) =>
  React.createElement('sinch-action-menu', props, renderSlotsOrChildren(props))
export const ActionMenuOption: React.FC<
  JSX.IntrinsicElements['sinch-action-menu-option'] &
    Slotify<Nectary.Slots['sinch-action-menu-option']>
> = (props) =>
  React.createElement(
    'sinch-action-menu-option',
    props,
    renderSlotsOrChildren(props)
  )
export const Alert: React.FC<
  JSX.IntrinsicElements['sinch-alert'] & Slotify<Nectary.Slots['sinch-alert']>
> = (props) =>
  React.createElement('sinch-alert', props, renderSlotsOrChildren(props))
export const Avatar: React.FC<
  JSX.IntrinsicElements['sinch-avatar'] & Slotify<Nectary.Slots['sinch-avatar']>
> = (props) =>
  React.createElement('sinch-avatar', props, renderSlotsOrChildren(props))
export const Badge: React.FC<
  JSX.IntrinsicElements['sinch-badge'] & Slotify<Nectary.Slots['sinch-badge']>
> = (props) =>
  React.createElement('sinch-badge', props, renderSlotsOrChildren(props))
export const Button: React.FC<
  JSX.IntrinsicElements['sinch-button'] & Slotify<Nectary.Slots['sinch-button']>
> = (props) =>
  React.createElement('sinch-button', props, renderSlotsOrChildren(props))
export const Card: React.FC<
  JSX.IntrinsicElements['sinch-card'] & Slotify<Nectary.Slots['sinch-card']>
> = (props) =>
  React.createElement('sinch-card', props, renderSlotsOrChildren(props))
export const CardContainer: React.FC<
  JSX.IntrinsicElements['sinch-card-container'] &
    Slotify<Nectary.Slots['sinch-card-container']>
> = (props) =>
  React.createElement(
    'sinch-card-container',
    props,
    renderSlotsOrChildren(props)
  )
export const Chat: React.FC<
  JSX.IntrinsicElements['sinch-chat'] & Slotify<Nectary.Slots['sinch-chat']>
> = (props) =>
  React.createElement('sinch-chat', props, renderSlotsOrChildren(props))
export const ChatBlock: React.FC<
  JSX.IntrinsicElements['sinch-chat-block'] &
    Slotify<Nectary.Slots['sinch-chat-block']>
> = (props) =>
  React.createElement('sinch-chat-block', props, renderSlotsOrChildren(props))
export const ChatBubble: React.FC<
  JSX.IntrinsicElements['sinch-chat-bubble'] &
    Slotify<Nectary.Slots['sinch-chat-bubble']>
> = (props) =>
  React.createElement('sinch-chat-bubble', props, renderSlotsOrChildren(props))
export const Checkbox: React.FC<
  JSX.IntrinsicElements['sinch-checkbox'] &
    Slotify<Nectary.Slots['sinch-checkbox']>
> = (props) =>
  React.createElement('sinch-checkbox', props, renderSlotsOrChildren(props))
export const Chip: React.FC<
  JSX.IntrinsicElements['sinch-chip'] & Slotify<Nectary.Slots['sinch-chip']>
> = (props) =>
  React.createElement('sinch-chip', props, renderSlotsOrChildren(props))
export const CodeTag: React.FC<
  JSX.IntrinsicElements['sinch-code-tag'] &
    Slotify<Nectary.Slots['sinch-code-tag']>
> = (props) =>
  React.createElement('sinch-code-tag', props, renderSlotsOrChildren(props))
export const ColorMenu: React.FC<
  JSX.IntrinsicElements['sinch-color-menu'] &
    Slotify<Nectary.Slots['sinch-color-menu']>
> = (props) =>
  React.createElement('sinch-color-menu', props, renderSlotsOrChildren(props))
export const ColorMenuOption: React.FC<
  JSX.IntrinsicElements['sinch-color-menu-option'] &
    Slotify<Nectary.Slots['sinch-color-menu-option']>
> = (props) =>
  React.createElement(
    'sinch-color-menu-option',
    props,
    renderSlotsOrChildren(props)
  )
export const ColorSwatch: React.FC<
  JSX.IntrinsicElements['sinch-color-swatch'] &
    Slotify<Nectary.Slots['sinch-color-swatch']>
> = (props) =>
  React.createElement(
    'sinch-color-swatch',
    props,
    renderSlotsOrChildren(props)
  )
export const DatePicker: React.FC<
  JSX.IntrinsicElements['sinch-date-picker'] &
    Slotify<Nectary.Slots['sinch-date-picker']>
> = (props) =>
  React.createElement('sinch-date-picker', props, renderSlotsOrChildren(props))
export const Dialog: React.FC<
  JSX.IntrinsicElements['sinch-dialog'] & Slotify<Nectary.Slots['sinch-dialog']>
> = (props) =>
  React.createElement('sinch-dialog', props, renderSlotsOrChildren(props))
export const Emoji: React.FC<
  JSX.IntrinsicElements['sinch-emoji'] & Slotify<Nectary.Slots['sinch-emoji']>
> = (props) =>
  React.createElement('sinch-emoji', props, renderSlotsOrChildren(props))
export const EmojiPicker: React.FC<
  JSX.IntrinsicElements['sinch-emoji-picker'] &
    Slotify<Nectary.Slots['sinch-emoji-picker']>
> = (props) =>
  React.createElement(
    'sinch-emoji-picker',
    props,
    renderSlotsOrChildren(props)
  )
export const Field: React.FC<
  JSX.IntrinsicElements['sinch-field'] & Slotify<Nectary.Slots['sinch-field']>
> = (props) =>
  React.createElement('sinch-field', props, renderSlotsOrChildren(props))
export const FileDrop: React.FC<
  JSX.IntrinsicElements['sinch-file-drop'] &
    Slotify<Nectary.Slots['sinch-file-drop']>
> = (props) =>
  React.createElement('sinch-file-drop', props, renderSlotsOrChildren(props))
export const FilePicker: React.FC<
  JSX.IntrinsicElements['sinch-file-picker'] &
    Slotify<Nectary.Slots['sinch-file-picker']>
> = (props) =>
  React.createElement('sinch-file-picker', props, renderSlotsOrChildren(props))
export const FileStatus: React.FC<
  JSX.IntrinsicElements['sinch-file-status'] &
    Slotify<Nectary.Slots['sinch-file-status']>
> = (props) =>
  React.createElement('sinch-file-status', props, renderSlotsOrChildren(props))
export const Flag: React.FC<
  JSX.IntrinsicElements['sinch-flag'] & Slotify<Nectary.Slots['sinch-flag']>
> = (props) =>
  React.createElement('sinch-flag', props, renderSlotsOrChildren(props))
export const Grid: React.FC<
  JSX.IntrinsicElements['sinch-grid'] & Slotify<Nectary.Slots['sinch-grid']>
> = (props) =>
  React.createElement('sinch-grid', props, renderSlotsOrChildren(props))
export const GridItem: React.FC<
  JSX.IntrinsicElements['sinch-grid-item'] &
    Slotify<Nectary.Slots['sinch-grid-item']>
> = (props) =>
  React.createElement('sinch-grid-item', props, renderSlotsOrChildren(props))
export const HelpTooltip: React.FC<
  JSX.IntrinsicElements['sinch-help-tooltip'] &
    Slotify<Nectary.Slots['sinch-help-tooltip']>
> = (props) =>
  React.createElement(
    'sinch-help-tooltip',
    props,
    renderSlotsOrChildren(props)
  )
export const HorizontalStepper: React.FC<
  JSX.IntrinsicElements['sinch-horizontal-stepper'] &
    Slotify<Nectary.Slots['sinch-horizontal-stepper']>
> = (props) =>
  React.createElement(
    'sinch-horizontal-stepper',
    props,
    renderSlotsOrChildren(props)
  )
export const HorizontalStepperItem: React.FC<
  JSX.IntrinsicElements['sinch-horizontal-stepper-item'] &
    Slotify<Nectary.Slots['sinch-horizontal-stepper-item']>
> = (props) =>
  React.createElement(
    'sinch-horizontal-stepper-item',
    props,
    renderSlotsOrChildren(props)
  )
export const Icon: React.FC<
  JSX.IntrinsicElements['sinch-icon'] & Slotify<Nectary.Slots['sinch-icon']>
> = (props) =>
  React.createElement('sinch-icon', props, renderSlotsOrChildren(props))
export const IconButton: React.FC<
  JSX.IntrinsicElements['sinch-icon-button'] &
    Slotify<Nectary.Slots['sinch-icon-button']>
> = (props) =>
  React.createElement('sinch-icon-button', props, renderSlotsOrChildren(props))
export const InlineAlert: React.FC<
  JSX.IntrinsicElements['sinch-inline-alert'] &
    Slotify<Nectary.Slots['sinch-inline-alert']>
> = (props) =>
  React.createElement(
    'sinch-inline-alert',
    props,
    renderSlotsOrChildren(props)
  )
export const Input: React.FC<
  JSX.IntrinsicElements['sinch-input'] & Slotify<Nectary.Slots['sinch-input']>
> = (props) =>
  React.createElement('sinch-input', props, renderSlotsOrChildren(props))
export const Link: React.FC<
  JSX.IntrinsicElements['sinch-link'] & Slotify<Nectary.Slots['sinch-link']>
> = (props) =>
  React.createElement('sinch-link', props, renderSlotsOrChildren(props))
export const List: React.FC<
  JSX.IntrinsicElements['sinch-list'] & Slotify<Nectary.Slots['sinch-list']>
> = (props) =>
  React.createElement('sinch-list', props, renderSlotsOrChildren(props))
export const ListItem: React.FC<
  JSX.IntrinsicElements['sinch-list-item'] &
    Slotify<Nectary.Slots['sinch-list-item']>
> = (props) =>
  React.createElement('sinch-list-item', props, renderSlotsOrChildren(props))
export const Pagination: React.FC<
  JSX.IntrinsicElements['sinch-pagination'] &
    Slotify<Nectary.Slots['sinch-pagination']>
> = (props) =>
  React.createElement('sinch-pagination', props, renderSlotsOrChildren(props))
export const Pop: React.FC<
  JSX.IntrinsicElements['sinch-pop'] & Slotify<Nectary.Slots['sinch-pop']>
> = (props) =>
  React.createElement('sinch-pop', props, renderSlotsOrChildren(props))
export const Popover: React.FC<
  JSX.IntrinsicElements['sinch-popover'] &
    Slotify<Nectary.Slots['sinch-popover']>
> = (props) =>
  React.createElement('sinch-popover', props, renderSlotsOrChildren(props))
export const Progress: React.FC<
  JSX.IntrinsicElements['sinch-progress'] &
    Slotify<Nectary.Slots['sinch-progress']>
> = (props) =>
  React.createElement('sinch-progress', props, renderSlotsOrChildren(props))
export const ProgressStepper: React.FC<
  JSX.IntrinsicElements['sinch-progress-stepper'] &
    Slotify<Nectary.Slots['sinch-progress-stepper']>
> = (props) =>
  React.createElement(
    'sinch-progress-stepper',
    props,
    renderSlotsOrChildren(props)
  )
export const ProgressStepperItem: React.FC<
  JSX.IntrinsicElements['sinch-progress-stepper-item'] &
    Slotify<Nectary.Slots['sinch-progress-stepper-item']>
> = (props) =>
  React.createElement(
    'sinch-progress-stepper-item',
    props,
    renderSlotsOrChildren(props)
  )
export const Radio: React.FC<
  JSX.IntrinsicElements['sinch-radio'] & Slotify<Nectary.Slots['sinch-radio']>
> = (props) =>
  React.createElement('sinch-radio', props, renderSlotsOrChildren(props))
export const RadioOption: React.FC<
  JSX.IntrinsicElements['sinch-radio-option'] &
    Slotify<Nectary.Slots['sinch-radio-option']>
> = (props) =>
  React.createElement(
    'sinch-radio-option',
    props,
    renderSlotsOrChildren(props)
  )
export const RichText: React.FC<
  JSX.IntrinsicElements['sinch-rich-text'] &
    Slotify<Nectary.Slots['sinch-rich-text']>
> = (props) =>
  React.createElement('sinch-rich-text', props, renderSlotsOrChildren(props))
export const RichTextarea: React.FC<
  JSX.IntrinsicElements['sinch-rich-textarea'] &
    Slotify<Nectary.Slots['sinch-rich-textarea']>
> = (props) =>
  React.createElement(
    'sinch-rich-textarea',
    props,
    renderSlotsOrChildren(props)
  )
export const Segment: React.FC<
  JSX.IntrinsicElements['sinch-segment'] &
    Slotify<Nectary.Slots['sinch-segment']>
> = (props) =>
  React.createElement('sinch-segment', props, renderSlotsOrChildren(props))
export const SegmentCollapse: React.FC<
  JSX.IntrinsicElements['sinch-segment-collapse'] &
    Slotify<Nectary.Slots['sinch-segment-collapse']>
> = (props) =>
  React.createElement(
    'sinch-segment-collapse',
    props,
    renderSlotsOrChildren(props)
  )
export const SegmentedControl: React.FC<
  JSX.IntrinsicElements['sinch-segmented-control'] &
    Slotify<Nectary.Slots['sinch-segmented-control']>
> = (props) =>
  React.createElement(
    'sinch-segmented-control',
    props,
    renderSlotsOrChildren(props)
  )
export const SegmentedControlOption: React.FC<
  JSX.IntrinsicElements['sinch-segmented-control-option'] &
    Slotify<Nectary.Slots['sinch-segmented-control-option']>
> = (props) =>
  React.createElement(
    'sinch-segmented-control-option',
    props,
    renderSlotsOrChildren(props)
  )
export const SegmentedIconControl: React.FC<
  JSX.IntrinsicElements['sinch-segmented-icon-control'] &
    Slotify<Nectary.Slots['sinch-segmented-icon-control']>
> = (props) =>
  React.createElement(
    'sinch-segmented-icon-control',
    props,
    renderSlotsOrChildren(props)
  )
export const SegmentedIconControlOption: React.FC<
  JSX.IntrinsicElements['sinch-segmented-icon-control-option'] &
    Slotify<Nectary.Slots['sinch-segmented-icon-control-option']>
> = (props) =>
  React.createElement(
    'sinch-segmented-icon-control-option',
    props,
    renderSlotsOrChildren(props)
  )
export const SelectButton: React.FC<
  JSX.IntrinsicElements['sinch-select-button'] &
    Slotify<Nectary.Slots['sinch-select-button']>
> = (props) =>
  React.createElement(
    'sinch-select-button',
    props,
    renderSlotsOrChildren(props)
  )
export const SelectMenu: React.FC<
  JSX.IntrinsicElements['sinch-select-menu'] &
    Slotify<Nectary.Slots['sinch-select-menu']>
> = (props) =>
  React.createElement('sinch-select-menu', props, renderSlotsOrChildren(props))
export const SelectMenuOption: React.FC<
  JSX.IntrinsicElements['sinch-select-menu-option'] &
    Slotify<Nectary.Slots['sinch-select-menu-option']>
> = (props) =>
  React.createElement(
    'sinch-select-menu-option',
    props,
    renderSlotsOrChildren(props)
  )
export const Skeleton: React.FC<
  JSX.IntrinsicElements['sinch-skeleton'] &
    Slotify<Nectary.Slots['sinch-skeleton']>
> = (props) =>
  React.createElement('sinch-skeleton', props, renderSlotsOrChildren(props))
export const SkeletonItem: React.FC<
  JSX.IntrinsicElements['sinch-skeleton-item'] &
    Slotify<Nectary.Slots['sinch-skeleton-item']>
> = (props) =>
  React.createElement(
    'sinch-skeleton-item',
    props,
    renderSlotsOrChildren(props)
  )
export const Spinner: React.FC<
  JSX.IntrinsicElements['sinch-spinner'] &
    Slotify<Nectary.Slots['sinch-spinner']>
> = (props) =>
  React.createElement('sinch-spinner', props, renderSlotsOrChildren(props))
export const Table: React.FC<
  JSX.IntrinsicElements['sinch-table'] & Slotify<Nectary.Slots['sinch-table']>
> = (props) =>
  React.createElement('sinch-table', props, renderSlotsOrChildren(props))
export const TableBody: React.FC<
  JSX.IntrinsicElements['sinch-table-body'] &
    Slotify<Nectary.Slots['sinch-table-body']>
> = (props) =>
  React.createElement('sinch-table-body', props, renderSlotsOrChildren(props))
export const TableCell: React.FC<
  JSX.IntrinsicElements['sinch-table-cell'] &
    Slotify<Nectary.Slots['sinch-table-cell']>
> = (props) =>
  React.createElement('sinch-table-cell', props, renderSlotsOrChildren(props))
export const TableHead: React.FC<
  JSX.IntrinsicElements['sinch-table-head'] &
    Slotify<Nectary.Slots['sinch-table-head']>
> = (props) =>
  React.createElement('sinch-table-head', props, renderSlotsOrChildren(props))
export const TableHeadCell: React.FC<
  JSX.IntrinsicElements['sinch-table-head-cell'] &
    Slotify<Nectary.Slots['sinch-table-head-cell']>
> = (props) =>
  React.createElement(
    'sinch-table-head-cell',
    props,
    renderSlotsOrChildren(props)
  )
export const TableRow: React.FC<
  JSX.IntrinsicElements['sinch-table-row'] &
    Slotify<Nectary.Slots['sinch-table-row']>
> = (props) =>
  React.createElement('sinch-table-row', props, renderSlotsOrChildren(props))
export const Tabs: React.FC<
  JSX.IntrinsicElements['sinch-tabs'] & Slotify<Nectary.Slots['sinch-tabs']>
> = (props) =>
  React.createElement('sinch-tabs', props, renderSlotsOrChildren(props))
export const TabsIconOption: React.FC<
  JSX.IntrinsicElements['sinch-tabs-icon-option'] &
    Slotify<Nectary.Slots['sinch-tabs-icon-option']>
> = (props) =>
  React.createElement(
    'sinch-tabs-icon-option',
    props,
    renderSlotsOrChildren(props)
  )
export const TabsOption: React.FC<
  JSX.IntrinsicElements['sinch-tabs-option'] &
    Slotify<Nectary.Slots['sinch-tabs-option']>
> = (props) =>
  React.createElement('sinch-tabs-option', props, renderSlotsOrChildren(props))
export const Tag: React.FC<
  JSX.IntrinsicElements['sinch-tag'] & Slotify<Nectary.Slots['sinch-tag']>
> = (props) =>
  React.createElement('sinch-tag', props, renderSlotsOrChildren(props))
export const Text: React.FC<
  JSX.IntrinsicElements['sinch-text'] & Slotify<Nectary.Slots['sinch-text']>
> = (props) =>
  React.createElement('sinch-text', props, renderSlotsOrChildren(props))
export const Textarea: React.FC<
  JSX.IntrinsicElements['sinch-textarea'] &
    Slotify<Nectary.Slots['sinch-textarea']>
> = (props) =>
  React.createElement('sinch-textarea', props, renderSlotsOrChildren(props))
export const TileControl: React.FC<
  JSX.IntrinsicElements['sinch-tile-control'] &
    Slotify<Nectary.Slots['sinch-tile-control']>
> = (props) =>
  React.createElement(
    'sinch-tile-control',
    props,
    renderSlotsOrChildren(props)
  )
export const TileControlOption: React.FC<
  JSX.IntrinsicElements['sinch-tile-control-option'] &
    Slotify<Nectary.Slots['sinch-tile-control-option']>
> = (props) =>
  React.createElement(
    'sinch-tile-control-option',
    props,
    renderSlotsOrChildren(props)
  )
export const TimePicker: React.FC<
  JSX.IntrinsicElements['sinch-time-picker'] &
    Slotify<Nectary.Slots['sinch-time-picker']>
> = (props) =>
  React.createElement('sinch-time-picker', props, renderSlotsOrChildren(props))
export const Title: React.FC<
  JSX.IntrinsicElements['sinch-title'] & Slotify<Nectary.Slots['sinch-title']>
> = (props) =>
  React.createElement('sinch-title', props, renderSlotsOrChildren(props))
export const Toast: React.FC<
  JSX.IntrinsicElements['sinch-toast'] & Slotify<Nectary.Slots['sinch-toast']>
> = (props) =>
  React.createElement('sinch-toast', props, renderSlotsOrChildren(props))
export const ToastManager: React.FC<
  JSX.IntrinsicElements['sinch-toast-manager'] &
    Slotify<Nectary.Slots['sinch-toast-manager']>
> = (props) =>
  React.createElement(
    'sinch-toast-manager',
    props,
    renderSlotsOrChildren(props)
  )
export const Toggle: React.FC<
  JSX.IntrinsicElements['sinch-toggle'] & Slotify<Nectary.Slots['sinch-toggle']>
> = (props) =>
  React.createElement('sinch-toggle', props, renderSlotsOrChildren(props))
export const Tooltip: React.FC<
  JSX.IntrinsicElements['sinch-tooltip'] &
    Slotify<Nectary.Slots['sinch-tooltip']>
> = (props) =>
  React.createElement('sinch-tooltip', props, renderSlotsOrChildren(props))
export const VerticalStepper: React.FC<
  JSX.IntrinsicElements['sinch-vertical-stepper'] &
    Slotify<Nectary.Slots['sinch-vertical-stepper']>
> = (props) =>
  React.createElement(
    'sinch-vertical-stepper',
    props,
    renderSlotsOrChildren(props)
  )
export const VerticalStepperItem: React.FC<
  JSX.IntrinsicElements['sinch-vertical-stepper-item'] &
    Slotify<Nectary.Slots['sinch-vertical-stepper-item']>
> = (props) =>
  React.createElement(
    'sinch-vertical-stepper-item',
    props,
    renderSlotsOrChildren(props)
  )
