import { NamedSlots } from './slots';
import { createReactWrapper, WithSlots } from './utils';

import '@nectary/components/accordion';
import '@nectary/components/accordion-item';
import '@nectary/components/action-menu';
import '@nectary/components/action-menu-option';
import '@nectary/components/alert';
import '@nectary/components/avatar';
import '@nectary/components/badge';
import '@nectary/components/button';
import '@nectary/components/card';
import '@nectary/components/card-container';
import '@nectary/components/chat';
import '@nectary/components/chat-block';
import '@nectary/components/chat-bubble';
import '@nectary/components/checkbox';
import '@nectary/components/chip';
import '@nectary/components/code-tag';
import '@nectary/components/color-menu';
import '@nectary/components/color-menu-option';
import '@nectary/components/color-swatch';
import '@nectary/components/date-picker';
import '@nectary/components/dialog';
import '@nectary/components/emoji';
import '@nectary/components/emoji-picker';
import '@nectary/components/field';
import '@nectary/components/file-drop';
import '@nectary/components/file-picker';
import '@nectary/components/file-status';
import '@nectary/components/flag';
import '@nectary/components/grid';
import '@nectary/components/grid-item';
import '@nectary/components/help-tooltip';
import '@nectary/components/horizontal-stepper';
import '@nectary/components/horizontal-stepper-item';
import '@nectary/components/icon';
import '@nectary/components/icon-button';
import '@nectary/components/inline-alert';
import '@nectary/components/input';
import '@nectary/components/link';
import '@nectary/components/list';
import '@nectary/components/list-item';
import '@nectary/components/pop';
import '@nectary/components/popover';
import '@nectary/components/progress';
import '@nectary/components/progress-stepper';
import '@nectary/components/progress-stepper-item';
import '@nectary/components/radio';
import '@nectary/components/radio-option';
import '@nectary/components/rich-text';
import '@nectary/components/rich-textarea';
import '@nectary/components/segment';
import '@nectary/components/segment-collapse';
import '@nectary/components/segmented-control';
import '@nectary/components/segmented-control-option';
import '@nectary/components/segmented-icon-control';
import '@nectary/components/segmented-icon-control-option';
import '@nectary/components/select-button';
import '@nectary/components/select-menu';
import '@nectary/components/select-menu-option';
import '@nectary/components/skeleton';
import '@nectary/components/skeleton-item';
import '@nectary/components/spinner';
import '@nectary/components/table';
import '@nectary/components/table-body';
import '@nectary/components/table-cell';
import '@nectary/components/table-head';
import '@nectary/components/table-head-cell';
import '@nectary/components/table-row';
import '@nectary/components/tabs';
import '@nectary/components/tabs-icon-option';
import '@nectary/components/tabs-option';
import '@nectary/components/tag';
import '@nectary/components/text';
import '@nectary/components/textarea';
import '@nectary/components/tile-control';
import '@nectary/components/tile-control-option';
import '@nectary/components/time-picker';
import '@nectary/components/title';
import '@nectary/components/toast';
import '@nectary/components/toast-manager';
import '@nectary/components/toggle';
import '@nectary/components/tooltip';
import '@nectary/components/vertical-stepper';
import '@nectary/components/vertical-stepper-item';


export type AccordionProps = JSX.IntrinsicElements['sinch-accordion'] & WithSlots<NamedSlots['sinch-accordion']>
export const Accordion = createReactWrapper<AccordionProps, NamedSlots['sinch-accordion']>('sinch-accordion')

export type AccordionItemProps = JSX.IntrinsicElements['sinch-accordion-item'] & WithSlots<NamedSlots['sinch-accordion-item']>
export const AccordionItem = createReactWrapper<AccordionItemProps, NamedSlots['sinch-accordion-item']>('sinch-accordion-item')

export type ActionMenuProps = JSX.IntrinsicElements['sinch-action-menu'] & WithSlots<NamedSlots['sinch-action-menu']>
export const ActionMenu = createReactWrapper<ActionMenuProps, NamedSlots['sinch-action-menu']>('sinch-action-menu')

export type ActionMenuOptionProps = JSX.IntrinsicElements['sinch-action-menu-option'] & WithSlots<NamedSlots['sinch-action-menu-option']>
export const ActionMenuOption = createReactWrapper<ActionMenuOptionProps, NamedSlots['sinch-action-menu-option']>('sinch-action-menu-option')

export type AlertProps = JSX.IntrinsicElements['sinch-alert'] & WithSlots<NamedSlots['sinch-alert']>
export const Alert = createReactWrapper<AlertProps, NamedSlots['sinch-alert']>('sinch-alert')

export type AvatarProps = JSX.IntrinsicElements['sinch-avatar'] & WithSlots<NamedSlots['sinch-avatar']>
export const Avatar = createReactWrapper<AvatarProps, NamedSlots['sinch-avatar']>('sinch-avatar')

export type BadgeProps = JSX.IntrinsicElements['sinch-badge'] & WithSlots<NamedSlots['sinch-badge']>
export const Badge = createReactWrapper<BadgeProps, NamedSlots['sinch-badge']>('sinch-badge')

export type ButtonProps = JSX.IntrinsicElements['sinch-button'] & WithSlots<NamedSlots['sinch-button']>
export const Button = createReactWrapper<ButtonProps, NamedSlots['sinch-button']>('sinch-button')

export type CardProps = JSX.IntrinsicElements['sinch-card'] & WithSlots<NamedSlots['sinch-card']>
export const Card = createReactWrapper<CardProps, NamedSlots['sinch-card']>('sinch-card')

export type CardContainerProps = JSX.IntrinsicElements['sinch-card-container'] & WithSlots<NamedSlots['sinch-card-container']>
export const CardContainer = createReactWrapper<CardContainerProps, NamedSlots['sinch-card-container']>('sinch-card-container')

export type ChatProps = JSX.IntrinsicElements['sinch-chat'] & WithSlots<NamedSlots['sinch-chat']>
export const Chat = createReactWrapper<ChatProps, NamedSlots['sinch-chat']>('sinch-chat')

export type ChatBlockProps = JSX.IntrinsicElements['sinch-chat-block'] & WithSlots<NamedSlots['sinch-chat-block']>
export const ChatBlock = createReactWrapper<ChatBlockProps, NamedSlots['sinch-chat-block']>('sinch-chat-block')

export type ChatBubbleProps = JSX.IntrinsicElements['sinch-chat-bubble'] & WithSlots<NamedSlots['sinch-chat-bubble']>
export const ChatBubble = createReactWrapper<ChatBubbleProps, NamedSlots['sinch-chat-bubble']>('sinch-chat-bubble')

export type CheckboxProps = JSX.IntrinsicElements['sinch-checkbox'] & WithSlots<NamedSlots['sinch-checkbox']>
export const Checkbox = createReactWrapper<CheckboxProps, NamedSlots['sinch-checkbox']>('sinch-checkbox')

export type ChipProps = JSX.IntrinsicElements['sinch-chip'] & WithSlots<NamedSlots['sinch-chip']>
export const Chip = createReactWrapper<ChipProps, NamedSlots['sinch-chip']>('sinch-chip')

export type CodeTagProps = JSX.IntrinsicElements['sinch-code-tag'] & WithSlots<NamedSlots['sinch-code-tag']>
export const CodeTag = createReactWrapper<CodeTagProps, NamedSlots['sinch-code-tag']>('sinch-code-tag')

export type ColorMenuProps = JSX.IntrinsicElements['sinch-color-menu'] & WithSlots<NamedSlots['sinch-color-menu']>
export const ColorMenu = createReactWrapper<ColorMenuProps, NamedSlots['sinch-color-menu']>('sinch-color-menu')

export type ColorMenuOptionProps = JSX.IntrinsicElements['sinch-color-menu-option'] & WithSlots<NamedSlots['sinch-color-menu-option']>
export const ColorMenuOption = createReactWrapper<ColorMenuOptionProps, NamedSlots['sinch-color-menu-option']>('sinch-color-menu-option')

export type ColorSwatchProps = JSX.IntrinsicElements['sinch-color-swatch'] & WithSlots<NamedSlots['sinch-color-swatch']>
export const ColorSwatch = createReactWrapper<ColorSwatchProps, NamedSlots['sinch-color-swatch']>('sinch-color-swatch')

export type DatePickerProps = JSX.IntrinsicElements['sinch-date-picker'] & WithSlots<NamedSlots['sinch-date-picker']>
export const DatePicker = createReactWrapper<DatePickerProps, NamedSlots['sinch-date-picker']>('sinch-date-picker')

export type DialogProps = JSX.IntrinsicElements['sinch-dialog'] & WithSlots<NamedSlots['sinch-dialog']>
export const Dialog = createReactWrapper<DialogProps, NamedSlots['sinch-dialog']>('sinch-dialog')

export type EmojiProps = JSX.IntrinsicElements['sinch-emoji'] & WithSlots<NamedSlots['sinch-emoji']>
export const Emoji = createReactWrapper<EmojiProps, NamedSlots['sinch-emoji']>('sinch-emoji')

export type EmojiPickerProps = JSX.IntrinsicElements['sinch-emoji-picker'] & WithSlots<NamedSlots['sinch-emoji-picker']>
export const EmojiPicker = createReactWrapper<EmojiPickerProps, NamedSlots['sinch-emoji-picker']>('sinch-emoji-picker')

export type FieldProps = JSX.IntrinsicElements['sinch-field'] & WithSlots<NamedSlots['sinch-field']>
export const Field = createReactWrapper<FieldProps, NamedSlots['sinch-field']>('sinch-field')

export type FileDropProps = JSX.IntrinsicElements['sinch-file-drop'] & WithSlots<NamedSlots['sinch-file-drop']>
export const FileDrop = createReactWrapper<FileDropProps, NamedSlots['sinch-file-drop']>('sinch-file-drop')

export type FilePickerProps = JSX.IntrinsicElements['sinch-file-picker'] & WithSlots<NamedSlots['sinch-file-picker']>
export const FilePicker = createReactWrapper<FilePickerProps, NamedSlots['sinch-file-picker']>('sinch-file-picker')

export type FileStatusProps = JSX.IntrinsicElements['sinch-file-status'] & WithSlots<NamedSlots['sinch-file-status']>
export const FileStatus = createReactWrapper<FileStatusProps, NamedSlots['sinch-file-status']>('sinch-file-status')

export type FlagProps = JSX.IntrinsicElements['sinch-flag'] & WithSlots<NamedSlots['sinch-flag']>
export const Flag = createReactWrapper<FlagProps, NamedSlots['sinch-flag']>('sinch-flag')

export type GridProps = JSX.IntrinsicElements['sinch-grid'] & WithSlots<NamedSlots['sinch-grid']>
export const Grid = createReactWrapper<GridProps, NamedSlots['sinch-grid']>('sinch-grid')

export type GridItemProps = JSX.IntrinsicElements['sinch-grid-item'] & WithSlots<NamedSlots['sinch-grid-item']>
export const GridItem = createReactWrapper<GridItemProps, NamedSlots['sinch-grid-item']>('sinch-grid-item')

export type HelpTooltipProps = JSX.IntrinsicElements['sinch-help-tooltip'] & WithSlots<NamedSlots['sinch-help-tooltip']>
export const HelpTooltip = createReactWrapper<HelpTooltipProps, NamedSlots['sinch-help-tooltip']>('sinch-help-tooltip')

export type HorizontalStepperProps = JSX.IntrinsicElements['sinch-horizontal-stepper'] & WithSlots<NamedSlots['sinch-horizontal-stepper']>
export const HorizontalStepper = createReactWrapper<HorizontalStepperProps, NamedSlots['sinch-horizontal-stepper']>('sinch-horizontal-stepper')

export type HorizontalStepperItemProps = JSX.IntrinsicElements['sinch-horizontal-stepper-item'] & WithSlots<NamedSlots['sinch-horizontal-stepper-item']>
export const HorizontalStepperItem = createReactWrapper<HorizontalStepperItemProps, NamedSlots['sinch-horizontal-stepper-item']>('sinch-horizontal-stepper-item')

export type IconProps = JSX.IntrinsicElements['sinch-icon'] & WithSlots<NamedSlots['sinch-icon']>
export const Icon = createReactWrapper<IconProps, NamedSlots['sinch-icon']>('sinch-icon')

export type IconButtonProps = JSX.IntrinsicElements['sinch-icon-button'] & WithSlots<NamedSlots['sinch-icon-button']>
export const IconButton = createReactWrapper<IconButtonProps, NamedSlots['sinch-icon-button']>('sinch-icon-button')

export type InlineAlertProps = JSX.IntrinsicElements['sinch-inline-alert'] & WithSlots<NamedSlots['sinch-inline-alert']>
export const InlineAlert = createReactWrapper<InlineAlertProps, NamedSlots['sinch-inline-alert']>('sinch-inline-alert')

export type InputProps = JSX.IntrinsicElements['sinch-input'] & WithSlots<NamedSlots['sinch-input']>
export const Input = createReactWrapper<InputProps, NamedSlots['sinch-input']>('sinch-input')

export type LinkProps = JSX.IntrinsicElements['sinch-link'] & WithSlots<NamedSlots['sinch-link']>
export const Link = createReactWrapper<LinkProps, NamedSlots['sinch-link']>('sinch-link')

export type ListProps = JSX.IntrinsicElements['sinch-list'] & WithSlots<NamedSlots['sinch-list']>
export const List = createReactWrapper<ListProps, NamedSlots['sinch-list']>('sinch-list')

export type ListItemProps = JSX.IntrinsicElements['sinch-list-item'] & WithSlots<NamedSlots['sinch-list-item']>
export const ListItem = createReactWrapper<ListItemProps, NamedSlots['sinch-list-item']>('sinch-list-item')

export type PopProps = JSX.IntrinsicElements['sinch-pop'] & WithSlots<NamedSlots['sinch-pop']>
export const Pop = createReactWrapper<PopProps, NamedSlots['sinch-pop']>('sinch-pop')

export type PopoverProps = JSX.IntrinsicElements['sinch-popover'] & WithSlots<NamedSlots['sinch-popover']>
export const Popover = createReactWrapper<PopoverProps, NamedSlots['sinch-popover']>('sinch-popover')

export type ProgressProps = JSX.IntrinsicElements['sinch-progress'] & WithSlots<NamedSlots['sinch-progress']>
export const Progress = createReactWrapper<ProgressProps, NamedSlots['sinch-progress']>('sinch-progress')

export type ProgressStepperProps = JSX.IntrinsicElements['sinch-progress-stepper'] & WithSlots<NamedSlots['sinch-progress-stepper']>
export const ProgressStepper = createReactWrapper<ProgressStepperProps, NamedSlots['sinch-progress-stepper']>('sinch-progress-stepper')

export type ProgressStepperItemProps = JSX.IntrinsicElements['sinch-progress-stepper-item'] & WithSlots<NamedSlots['sinch-progress-stepper-item']>
export const ProgressStepperItem = createReactWrapper<ProgressStepperItemProps, NamedSlots['sinch-progress-stepper-item']>('sinch-progress-stepper-item')

export type RadioProps = JSX.IntrinsicElements['sinch-radio'] & WithSlots<NamedSlots['sinch-radio']>
export const Radio = createReactWrapper<RadioProps, NamedSlots['sinch-radio']>('sinch-radio')

export type RadioOptionProps = JSX.IntrinsicElements['sinch-radio-option'] & WithSlots<NamedSlots['sinch-radio-option']>
export const RadioOption = createReactWrapper<RadioOptionProps, NamedSlots['sinch-radio-option']>('sinch-radio-option')

export type RichTextProps = JSX.IntrinsicElements['sinch-rich-text'] & WithSlots<NamedSlots['sinch-rich-text']>
export const RichText = createReactWrapper<RichTextProps, NamedSlots['sinch-rich-text']>('sinch-rich-text')

export type RichTextareaProps = JSX.IntrinsicElements['sinch-rich-textarea'] & WithSlots<NamedSlots['sinch-rich-textarea']>
export const RichTextarea = createReactWrapper<RichTextareaProps, NamedSlots['sinch-rich-textarea']>('sinch-rich-textarea')

export type SegmentProps = JSX.IntrinsicElements['sinch-segment'] & WithSlots<NamedSlots['sinch-segment']>
export const Segment = createReactWrapper<SegmentProps, NamedSlots['sinch-segment']>('sinch-segment')

export type SegmentCollapseProps = JSX.IntrinsicElements['sinch-segment-collapse'] & WithSlots<NamedSlots['sinch-segment-collapse']>
export const SegmentCollapse = createReactWrapper<SegmentCollapseProps, NamedSlots['sinch-segment-collapse']>('sinch-segment-collapse')

export type SegmentedControlProps = JSX.IntrinsicElements['sinch-segmented-control'] & WithSlots<NamedSlots['sinch-segmented-control']>
export const SegmentedControl = createReactWrapper<SegmentedControlProps, NamedSlots['sinch-segmented-control']>('sinch-segmented-control')

export type SegmentedControlOptionProps = JSX.IntrinsicElements['sinch-segmented-control-option'] & WithSlots<NamedSlots['sinch-segmented-control-option']>
export const SegmentedControlOption = createReactWrapper<SegmentedControlOptionProps, NamedSlots['sinch-segmented-control-option']>('sinch-segmented-control-option')

export type SegmentedIconControlProps = JSX.IntrinsicElements['sinch-segmented-icon-control'] & WithSlots<NamedSlots['sinch-segmented-icon-control']>
export const SegmentedIconControl = createReactWrapper<SegmentedIconControlProps, NamedSlots['sinch-segmented-icon-control']>('sinch-segmented-icon-control')

export type SegmentedIconControlOptionProps = JSX.IntrinsicElements['sinch-segmented-icon-control-option'] & WithSlots<NamedSlots['sinch-segmented-icon-control-option']>
export const SegmentedIconControlOption = createReactWrapper<SegmentedIconControlOptionProps, NamedSlots['sinch-segmented-icon-control-option']>('sinch-segmented-icon-control-option')

export type SelectButtonProps = JSX.IntrinsicElements['sinch-select-button'] & WithSlots<NamedSlots['sinch-select-button']>
export const SelectButton = createReactWrapper<SelectButtonProps, NamedSlots['sinch-select-button']>('sinch-select-button')

export type SelectMenuProps = JSX.IntrinsicElements['sinch-select-menu'] & WithSlots<NamedSlots['sinch-select-menu']>
export const SelectMenu = createReactWrapper<SelectMenuProps, NamedSlots['sinch-select-menu']>('sinch-select-menu')

export type SelectMenuOptionProps = JSX.IntrinsicElements['sinch-select-menu-option'] & WithSlots<NamedSlots['sinch-select-menu-option']>
export const SelectMenuOption = createReactWrapper<SelectMenuOptionProps, NamedSlots['sinch-select-menu-option']>('sinch-select-menu-option')

export type SkeletonProps = JSX.IntrinsicElements['sinch-skeleton'] & WithSlots<NamedSlots['sinch-skeleton']>
export const Skeleton = createReactWrapper<SkeletonProps, NamedSlots['sinch-skeleton']>('sinch-skeleton')

export type SkeletonItemProps = JSX.IntrinsicElements['sinch-skeleton-item'] & WithSlots<NamedSlots['sinch-skeleton-item']>
export const SkeletonItem = createReactWrapper<SkeletonItemProps, NamedSlots['sinch-skeleton-item']>('sinch-skeleton-item')

export type SpinnerProps = JSX.IntrinsicElements['sinch-spinner'] & WithSlots<NamedSlots['sinch-spinner']>
export const Spinner = createReactWrapper<SpinnerProps, NamedSlots['sinch-spinner']>('sinch-spinner')

export type TableProps = JSX.IntrinsicElements['sinch-table'] & WithSlots<NamedSlots['sinch-table']>
export const Table = createReactWrapper<TableProps, NamedSlots['sinch-table']>('sinch-table')

export type TableBodyProps = JSX.IntrinsicElements['sinch-table-body'] & WithSlots<NamedSlots['sinch-table-body']>
export const TableBody = createReactWrapper<TableBodyProps, NamedSlots['sinch-table-body']>('sinch-table-body')

export type TableCellProps = JSX.IntrinsicElements['sinch-table-cell'] & WithSlots<NamedSlots['sinch-table-cell']>
export const TableCell = createReactWrapper<TableCellProps, NamedSlots['sinch-table-cell']>('sinch-table-cell')

export type TableHeadProps = JSX.IntrinsicElements['sinch-table-head'] & WithSlots<NamedSlots['sinch-table-head']>
export const TableHead = createReactWrapper<TableHeadProps, NamedSlots['sinch-table-head']>('sinch-table-head')

export type TableHeadCellProps = JSX.IntrinsicElements['sinch-table-head-cell'] & WithSlots<NamedSlots['sinch-table-head-cell']>
export const TableHeadCell = createReactWrapper<TableHeadCellProps, NamedSlots['sinch-table-head-cell']>('sinch-table-head-cell')

export type TableRowProps = JSX.IntrinsicElements['sinch-table-row'] & WithSlots<NamedSlots['sinch-table-row']>
export const TableRow = createReactWrapper<TableRowProps, NamedSlots['sinch-table-row']>('sinch-table-row')

export type TabsProps = JSX.IntrinsicElements['sinch-tabs'] & WithSlots<NamedSlots['sinch-tabs']>
export const Tabs = createReactWrapper<TabsProps, NamedSlots['sinch-tabs']>('sinch-tabs')

export type TabsIconOptionProps = JSX.IntrinsicElements['sinch-tabs-icon-option'] & WithSlots<NamedSlots['sinch-tabs-icon-option']>
export const TabsIconOption = createReactWrapper<TabsIconOptionProps, NamedSlots['sinch-tabs-icon-option']>('sinch-tabs-icon-option')

export type TabsOptionProps = JSX.IntrinsicElements['sinch-tabs-option'] & WithSlots<NamedSlots['sinch-tabs-option']>
export const TabsOption = createReactWrapper<TabsOptionProps, NamedSlots['sinch-tabs-option']>('sinch-tabs-option')

export type TagProps = JSX.IntrinsicElements['sinch-tag'] & WithSlots<NamedSlots['sinch-tag']>
export const Tag = createReactWrapper<TagProps, NamedSlots['sinch-tag']>('sinch-tag')

export type TextProps = JSX.IntrinsicElements['sinch-text'] & WithSlots<NamedSlots['sinch-text']>
export const Text = createReactWrapper<TextProps, NamedSlots['sinch-text']>('sinch-text')

export type TextareaProps = JSX.IntrinsicElements['sinch-textarea'] & WithSlots<NamedSlots['sinch-textarea']>
export const Textarea = createReactWrapper<TextareaProps, NamedSlots['sinch-textarea']>('sinch-textarea')

export type TileControlProps = JSX.IntrinsicElements['sinch-tile-control'] & WithSlots<NamedSlots['sinch-tile-control']>
export const TileControl = createReactWrapper<TileControlProps, NamedSlots['sinch-tile-control']>('sinch-tile-control')

export type TileControlOptionProps = JSX.IntrinsicElements['sinch-tile-control-option'] & WithSlots<NamedSlots['sinch-tile-control-option']>
export const TileControlOption = createReactWrapper<TileControlOptionProps, NamedSlots['sinch-tile-control-option']>('sinch-tile-control-option')

export type TimePickerProps = JSX.IntrinsicElements['sinch-time-picker'] & WithSlots<NamedSlots['sinch-time-picker']>
export const TimePicker = createReactWrapper<TimePickerProps, NamedSlots['sinch-time-picker']>('sinch-time-picker')

export type TitleProps = JSX.IntrinsicElements['sinch-title'] & WithSlots<NamedSlots['sinch-title']>
export const Title = createReactWrapper<TitleProps, NamedSlots['sinch-title']>('sinch-title')

export type ToastProps = JSX.IntrinsicElements['sinch-toast'] & WithSlots<NamedSlots['sinch-toast']>
export const Toast = createReactWrapper<ToastProps, NamedSlots['sinch-toast']>('sinch-toast')

export type ToastManagerProps = JSX.IntrinsicElements['sinch-toast-manager'] & WithSlots<NamedSlots['sinch-toast-manager']>
export const ToastManager = createReactWrapper<ToastManagerProps, NamedSlots['sinch-toast-manager']>('sinch-toast-manager')

export type ToggleProps = JSX.IntrinsicElements['sinch-toggle'] & WithSlots<NamedSlots['sinch-toggle']>
export const Toggle = createReactWrapper<ToggleProps, NamedSlots['sinch-toggle']>('sinch-toggle')

export type TooltipProps = JSX.IntrinsicElements['sinch-tooltip'] & WithSlots<NamedSlots['sinch-tooltip']>
export const Tooltip = createReactWrapper<TooltipProps, NamedSlots['sinch-tooltip']>('sinch-tooltip')

export type VerticalStepperProps = JSX.IntrinsicElements['sinch-vertical-stepper'] & WithSlots<NamedSlots['sinch-vertical-stepper']>
export const VerticalStepper = createReactWrapper<VerticalStepperProps, NamedSlots['sinch-vertical-stepper']>('sinch-vertical-stepper')

export type VerticalStepperItemProps = JSX.IntrinsicElements['sinch-vertical-stepper-item'] & WithSlots<NamedSlots['sinch-vertical-stepper-item']>
export const VerticalStepperItem = createReactWrapper<VerticalStepperItemProps, NamedSlots['sinch-vertical-stepper-item']>('sinch-vertical-stepper-item')
