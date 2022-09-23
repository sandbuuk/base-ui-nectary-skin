<template>
  <div :style="style">
    <Accordion v-if="url.pathname === '/accordion'" :search="url.searchParams"/>
    <ActionDropdown v-if="url.pathname === '/action-dropdown'" :search="url.searchParams"/>
    <ActionMenu v-if="url.pathname === '/action-menu'" :search="url.searchParams"/>
    <Alert v-if="url.pathname === '/alert'" :search="url.searchParams"/>
    <Avatar v-if="url.pathname === '/avatar'" :search="url.searchParams"/>
    <Button v-if="url.pathname === '/button'" :search="url.searchParams"/>
    <Card v-if="url.pathname === '/card'" :search="url.searchParams"/>
    <CardContainer v-if="url.pathname === '/card-container'" :search="url.searchParams"/>
    <Chat v-if="url.pathname === '/chat'" :search="url.searchParams"/>
    <Checkbox v-if="url.pathname === '/checkbox'" :search="url.searchParams"/>
    <ColorSwatch v-if="url.pathname === '/color-swatch'" :search="url.searchParams"/>
    <DatePicker v-if="url.pathname === '/date-picker'" :search="url.searchParams"/>
    <Dialog v-if="url.pathname === '/dialog'" :search="url.searchParams"/>
    <Grid v-if="url.pathname === '/grid'" :search="url.searchParams"/>
    <HorizontalStepper v-if="url.pathname === '/horizontal-stepper'" :search="url.searchParams"/>
    <IconButton v-if="url.pathname === '/icon-button'" :search="url.searchParams"/>
    <InlineAlert v-if="url.pathname === '/inline-alert'" :search="url.searchParams"/>
    <Input v-if="url.pathname === '/input'" :search="url.searchParams"/>
    <Field v-if="url.pathname === '/field'" :search="url.searchParams"/>
    <FileDrop v-if="url.pathname === '/file-drop'" :search="url.searchParams"/>
    <FilePicker v-if="url.pathname === '/file-picker'" :search="url.searchParams"/>
    <FileStatus v-if="url.pathname === '/file-status'" :search="url.searchParams"/>
    <Link v-if="url.pathname === '/link'" :search="url.searchParams"/>
    <List v-if="url.pathname === '/list'" :search="url.searchParams"/>
    <Pagination v-if="url.pathname === '/pagination'" :search="url.searchParams"/>
    <Popover v-if="url.pathname === '/popover'" :search="url.searchParams"/>
    <Progress v-if="url.pathname === '/progress'" :search="url.searchParams"/>
    <Radio v-if="url.pathname === '/radio'" :search="url.searchParams"/>
    <Search v-if="url.pathname === '/search'" :search="url.searchParams"/>
    <Segment v-if="url.pathname === '/segment'" :search="url.searchParams"/>
    <SegmentedControl v-if="url.pathname === '/segmented-control'" :search="url.searchParams"/>
    <SegmentedIconControl v-if="url.pathname === '/segmented-icon-control'" :search="url.searchParams"/>
    <Select v-if="url.pathname === '/select'" :search="url.searchParams"/>
    <SelectMenu v-if="url.pathname === '/select-menu'" :search="url.searchParams"/>
    <Spinner v-if="url.pathname === '/spinner'" :search="url.searchParams"/>
    <Table v-if="url.pathname === '/table'" :search="url.searchParams"/>
    <Tabs v-if="url.pathname === '/tabs'" :search="url.searchParams"/>
    <Tag v-if="url.pathname === '/tag'" :search="url.searchParams"/>
    <Text v-if="url.pathname === '/text'" :search="url.searchParams"/>
    <Textarea v-if="url.pathname === '/textarea'" :search="url.searchParams"/>
    <TileControl v-if="url.pathname === '/tile-control'" :search="url.searchParams"/>
    <TimePicker v-if="url.pathname === '/time-picker'" :search="url.searchParams"/>
    <Title v-if="url.pathname === '/title'" :search="url.searchParams"/>
    <ToastManager v-if="url.pathname === '/toast-manager'" :search="url.searchParams"/>
    <Toggle v-if="url.pathname === '/toggle'" :search="url.searchParams"/>
    <Tooltip v-if="url.pathname === '/tooltip'" :search="url.searchParams"/>
    <VerticalStepper v-if="url.pathname === '/vertical-stepper'" :search="url.searchParams"/>
  </div>
</template>

<script>
import '@sinch-engage/nectary/theme.css'
import Accordion from './components/Accordion.vue'
import ActionDropdown from './components/ActionDropdown.vue'
import ActionMenu from './components/ActionMenu.vue'
import Alert from './components/Alert.vue'
import Avatar from './components/Avatar.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import CardContainer from './components/CardContainer.vue'
import Chat from './components/Chat.vue'
import Checkbox from './components/Checkbox.vue'
import ColorSwatch from './components/ColorSwatch.vue'
import DatePicker from './components/DatePicker.vue'
import Dialog from './components/Dialog.vue'
import Grid from './components/Grid.vue'
import HorizontalStepper from './components/HorizontalStepper.vue'
import IconButton from './components/IconButton.vue'
import InlineAlert from './components/InlineAlert.vue'
import Input from './components/Input.vue'
import Field from './components/Field.vue'
import FileDrop from './components/FileDrop.vue'
import FilePicker from './components/FilePicker.vue'
import FileStatus from './components/FileStatus.vue'
import Link from './components/Link.vue'
import List from './components/List.vue'
import Pagination from './components/Pagination.vue'
import Popover from './components/Popover.vue'
import Progress from './components/Progress.vue'
import Radio from './components/Radio.vue'
import Search from './components/Search.vue'
import Segment from './components/Segment.vue'
import SegmentedControl from './components/SegmentedControl.vue'
import SegmentedIconControl from './components/SegmentedIconControl.vue'
import Select from './components/Select.vue'
import SelectMenu from './components/SelectMenu.vue'
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
    Button,
    Card,
    CardContainer,
    Chat,
    Checkbox,
    ColorSwatch,
    DatePicker,
    Dialog,
    Grid,
    HorizontalStepper,
    IconButton,
    InlineAlert,
    Input,
    Field,
    FileDrop,
    FilePicker,
    FileStatus,
    Link,
    List,
    Pagination,
    Popover,
    Progress,
    Radio,
    Search,
    Segment,
    SegmentedControl,
    SegmentedIconControl,
    Select,
    SelectMenu,
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
