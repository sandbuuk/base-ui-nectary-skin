<template>
  <div :style="style" class="nectary-theme-base">
    <router-view/>
  </div>
</template>

<script>
import '@nectary/theme-base/index.css'
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

export default {
  data() {
    return {
      url: new URL(window.location.href)
    };
  },
  computed: {
    style () {
      const width = Number(this.url.searchParams.get('width') ?? '0')
      const height = Number(this.url.searchParams.get('height') ?? '0')

      const style = {
        display: 'flex',
        padding: '120px'
      }

      if (height > 0) {
        style.height = height + 'px'
      }

      if (width > 0) {
        style.flexDirection = 'column',
        style.width = width + 'px'
      }

      return style;
    }
  },
  components: {
    Accordion,
    ActionDropdown,
    ActionMenu,
    Alert,
    Avatar,
    Badge,
    Button,
    Card,
    CardContainer,
    CardDnD,
    Chat,
    Checkbox,
    Chip,
    CodeTag,
    ColorMenu,
    ColorSelect,
    ColorSwatch,
    DatePicker,
    Dialog,
    EmojiPicker,
    Field,
    FileDrop,
    FilePicker,
    FileStatus,
    Grid,
    HorizontalStepper,
    IconButton,
    InlineAlert,
    Input,
    Link,
    List,
    Pagination,
    PhoneCodeMenu,
    Popover,
    Progress,
    ProgressStepper,
    Radio,
    RichText,
    RichTextarea,
    Search,
    Segment,
    SegmentedControl,
    SegmentedIconControl,
    Select,
    SelectMenu,
    Skeleton,
    Spinner,
    Table,
    Tabs,
    Tag,
    Text,
    Textarea,
    TileControl,
    TimePicker,
    Title,
    ToastManager,
    Toggle,
    Tooltip,
    VerticalStepper,
  }
};
</script>
