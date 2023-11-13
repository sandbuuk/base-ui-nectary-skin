import { createWebHistory, createRouter } from "vue-router";
import Accordion from './components/Accordion.vue'
import ActionDropdown from './components/ActionDropdown.vue'
import ActionMenu from './components/ActionMenu.vue'
import Alert from './components/Alert.vue'
import Avatar from './components/Avatar.vue'
import Badge from './components/Badge.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import CardContainer from './components/CardContainer.vue'
import CardDnD from './components/CardDnD.vue'
import Chat from './components/Chat.vue'
import Checkbox from './components/Checkbox.vue'
import Chip from './components/Chip.vue'
import CodeTag from './components/CodeTag.vue'
import ColorMenu from './components/ColorMenu.vue'
import ColorSelect from './components/ColorSelect.vue'
import ColorSwatch from './components/ColorSwatch.vue'
import DatePicker from './components/DatePicker.vue'
import Dialog from './components/Dialog.vue'
import EmojiPicker from './components/EmojiPicker.vue'
import Field from './components/Field.vue'
import FileDrop from './components/FileDrop.vue'
import FilePicker from './components/FilePicker.vue'
import FileStatus from './components/FileStatus.vue'
import Grid from './components/Grid.vue'
import HorizontalStepper from './components/HorizontalStepper.vue'
import IconButton from './components/IconButton.vue'
import InlineAlert from './components/InlineAlert.vue'
import Input from './components/Input.vue'
import Link from './components/Link.vue'
import List from './components/List.vue'
import Pagination from './components/Pagination.vue'
import PhoneCodeMenu from './components/PhoneCodeMenu.vue'
import Popover from './components/Popover.vue'
import Progress from './components/Progress.vue'
import ProgressStepper from './components/ProgressStepper.vue'
import Radio from './components/Radio.vue'
import RichText from './components/RichText.vue'
import RichTextarea from './components/RichTextarea.vue'
import Search from './components/Search.vue'
import Segment from './components/Segment.vue'
import SegmentedControl from './components/SegmentedControl.vue'
import SegmentedIconControl from './components/SegmentedIconControl.vue'
import Select from './components/Select.vue'
import SelectMenu from './components/SelectMenu.vue'
import Skeleton from './components/Skeleton.vue'
import Spinner from './components/Spinner.vue'
import Table from './components/Table.vue'
import Tabs from './components/Tabs.vue'
import Tag from './components/Tag.vue'
import Text from './components/Text.vue'
import Textarea from './components/Textarea.vue'
import TileControl from './components/TileControl.vue'
import TimePicker from './components/TimePicker.vue'
import Title from './components/Title.vue'
import ToastManager from './components/ToastManager.vue'
import Toggle from './components/Toggle.vue'
import Tooltip from './components/Tooltip.vue'
import VerticalStepper from './components/VerticalStepper.vue'

const routes = [
  { path: "/accordion", component: Accordion },
  { path: "/action-dropdown", component: ActionDropdown },
  { path: "/action-menu", component: ActionMenu },
  { path: "/alert", component: Alert },
  { path: "/avatar", component: Avatar },
  { path: "/badge", component: Badge },
  { path: "/button", component: Button },
  { path: "/card-container", component: CardContainer },
  { path: "/card-dnd", component: CardDnD },
  { path: "/card", component: Card },
  { path: "/chat", component: Chat },
  { path: "/checkbox", component: Checkbox },
  { path: "/chip", component: Chip },
  { path: "/code-tag", component: CodeTag },
  { path: "/color-menu", component: ColorMenu },
  { path: "/color-select", component: ColorSelect },
  { path: "/color-swatch", component: ColorSwatch },
  { path: "/date-picker", component: DatePicker },
  { path: "/dialog", component: Dialog },
  { path: "/emoji-picker", component: EmojiPicker },
  { path: "/field", component: Field },
  { path: "/file-drop", component: FileDrop },
  { path: "/file-picker", component: FilePicker },
  { path: "/file-status", component: FileStatus },
  { path: "/grid", component: Grid },
  { path: "/horizontal-stepper", component: HorizontalStepper },
  { path: "/icon-button", component: IconButton },
  { path: "/inline-alert", component: InlineAlert },
  { path: "/input", component: Input },
  { path: "/link", component: Link },
  { path: "/list", component: List },
  { path: "/pagination", component: Pagination },
  { path: "/phone-code-menu", component: PhoneCodeMenu },
  { path: "/popover", component: Popover },
  { path: "/progress-stepper", component: ProgressStepper },
  { path: "/progress", component: Progress },
  { path: "/radio", component: Radio },
  { path: "/rich-text", component: RichText },
  { path: "/rich-textarea", component: RichTextarea },
  { path: "/search", component: Search },
  { path: "/segment", component: Segment },
  { path: "/segmented-control", component: SegmentedControl },
  { path: "/segmented-icon-control", component: SegmentedIconControl },
  { path: "/select-menu", component: SelectMenu },
  { path: "/select", component: Select },
  { path: "/skeleton", component: Skeleton },
  { path: "/spinner", component: Spinner },
  { path: "/table", component: Table },
  { path: "/tabs", component: Tabs },
  { path: "/tag", component: Tag },
  { path: "/text", component: Text },
  { path: "/textarea", component: Textarea },
  { path: "/tile-control", component: TileControl },
  { path: "/time-picker", component: TimePicker },
  { path: "/title", component: Title },
  { path: "/toast-manager", component: ToastManager },
  { path: "/toggle", component: Toggle },
  { path: "/tooltip", component: Tooltip },
  { path: "/vertical-stepper", component: VerticalStepper },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
