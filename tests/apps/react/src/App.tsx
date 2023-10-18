import { BrowserRouter, Route, Routes, useSearchParams } from 'react-router-dom'
import { Accordion } from './components/Accordion'
import { ActionDropdown } from './components/ActionDropdown'
import { ActionMenu } from './components/ActionMenu'
import { Alert } from './components/Alert'
import { Avatar } from './components/Avatar'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { CardContainer } from './components/CardContainer'
import { CardDnD } from './components/CardDnD'
import { Chat } from './components/Chat'
import { Checkbox } from './components/Checkbox'
import { Chip } from './components/Chip'
import { CodeTag } from './components/CodeTag'
import { ColorMenu } from './components/ColorMenu'
import { ColorSelect } from './components/ColorSelect'
import { ColorSwatch } from './components/ColorSwatch'
import { DateInput } from './components/DateInput'
import { DatePicker } from './components/DatePicker'
import { Dialog } from './components/Dialog'
import { DialogExample } from './components/DialogExample'
import { EmojiPicker } from './components/EmojiPicker'
import { EventTargets } from './components/EventsTargets'
import { Field } from './components/Field'
import { FileDrop } from './components/FileDrop'
import { FilePicker } from './components/FilePicker'
import { FileStatus } from './components/FileStatus'
import { Grid } from './components/Grid'
import { HorizontalStepper } from './components/HorizontalStepper'
import { IconButton } from './components/IconButton'
import { InlineAlert } from './components/InlineAlert'
import { Input } from './components/Input'
import { InputSlots } from './components/InputSlots'
import { Link } from './components/Link'
import { List } from './components/List'
import { Pagination } from './components/Pagination'
import { PhoneCodeMenu } from './components/PhoneCodeMenu'
import { PhoneCodeSelect } from './components/PhoneCodeSelect'
import { Popover } from './components/Popover'
import { Progress } from './components/Progress'
import { ProgressStepper } from './components/ProgressStepper'
import { Radio } from './components/Radio'
import { RichText } from './components/RichText'
import { Search } from './components/Search'
import { Segment } from './components/Segment'
import { SegmentedControl } from './components/SegmentedControl'
import { SegmentedIconControl } from './components/SegmentedIconControl'
import { Select } from './components/Select'
import { SelectMenu } from './components/SelectMenu'
import { Skeleton } from './components/Skeleton'
import { Spinner } from './components/Spinner'
import { Table } from './components/Table'
import { Tabs } from './components/Tabs'
import { Tag } from './components/Tag'
import { Text } from './components/Text'
import { Textarea } from './components/Textarea'
import { TextareaExample } from './components/TextareaExample'
import { TileControl } from './components/TileControl'
import { TimeInput } from './components/TimeInput'
import { TimePicker } from './components/TimePicker'
import { Title } from './components/Title'
import { Toast } from './components/Toast'
import { ToastManager } from './components/ToastManager'
import { Toggle } from './components/Toggle'
import { Tooltip } from './components/Tooltip'
import { VerticalStepper } from './components/VerticalStepper'
import type { CSSProperties, FC } from 'react'

const AppImpl = () => {
  const [params] = useSearchParams()
  const width = Number(params.get('width') ?? '0')
  const height = Number(params.get('height') ?? '0')

  const style: CSSProperties = {
    display: 'flex',
    padding: '120px',
    color: 'magenta',
  }

  if (height > 0) {
    style.height = `${height}px`
  }

  if (width > 0) {
    style.flexDirection = 'column'
    style.width = `${width}px`
  }

  return (
    <div style={style}>
      <Routes>
        <Route path="/accordion" element={<Accordion/>}/>
        <Route path="/action-dropdown" element={<ActionDropdown/>}/>
        <Route path="/action-menu" element={<ActionMenu/>}/>
        <Route path="/alert" element={<Alert/>}/>
        <Route path="/avatar" element={<Avatar/>}/>
        <Route path="/badge" element={<Badge/>}/>
        <Route path="/button" element={<Button/>}/>
        <Route path="/card-container" element={<CardContainer/>}/>
        <Route path="/card-dnd" element={<CardDnD/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/checkbox" element={<Checkbox/>}/>
        <Route path="/chip" element={<Chip/>}/>
        <Route path="/code-tag" element={<CodeTag/>}/>
        <Route path="/color-menu" element={<ColorMenu/>}/>
        <Route path="/color-select" element={<ColorSelect/>}/>
        <Route path="/color-swatch" element={<ColorSwatch/>}/>
        <Route path="/date-input" element={<DateInput/>}/>
        <Route path="/date-picker" element={<DatePicker/>}/>
        <Route path="/dialog-example" element={<DialogExample/>}/>
        <Route path="/dialog" element={<Dialog/>}/>
        <Route path="/emoji-picker" element={<EmojiPicker/>}/>
        <Route path="/event-targets" element={<EventTargets/>}/>
        <Route path="/field" element={<Field/>}/>
        <Route path="/file-drop" element={<FileDrop/>}/>
        <Route path="/file-picker" element={<FilePicker/>}/>
        <Route path="/file-status" element={<FileStatus/>}/>
        <Route path="/grid" element={<Grid/>}/>
        <Route path="/horizontal-stepper" element={<HorizontalStepper/>}/>
        <Route path="/icon-button" element={<IconButton/>}/>
        <Route path="/inline-alert" element={<InlineAlert/>}/>
        <Route path="/input-slots" element={<InputSlots/>}/>
        <Route path="/input" element={<Input/>}/>
        <Route path="/link" element={<Link/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/pagination" element={<Pagination/>}/>
        <Route path="/phone-code-menu" element={<PhoneCodeMenu/>}/>
        <Route path="/phone-code-select" element={<PhoneCodeSelect/>}/>
        <Route path="/popover" element={<Popover/>}/>
        <Route path="/progress-stepper" element={<ProgressStepper/>}/>
        <Route path="/progress" element={<Progress/>}/>
        <Route path="/radio" element={<Radio/>}/>
        <Route path="/rich-text" element={<RichText/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/segment" element={<Segment/>}/>
        <Route path="/segmented-control" element={<SegmentedControl/>}/>
        <Route path="/segmented-icon-control" element={<SegmentedIconControl/>}/>
        <Route path="/select-menu" element={<SelectMenu/>}/>
        <Route path="/select" element={<Select/>}/>
        <Route path="/skeleton" element={<Skeleton/>}/>
        <Route path="/spinner" element={<Spinner/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/tabs" element={<Tabs/>}/>
        <Route path="/tag" element={<Tag/>}/>
        <Route path="/text" element={<Text/>}/>
        <Route path="/textarea-example" element={<TextareaExample/>}/>
        <Route path="/textarea" element={<Textarea/>}/>
        <Route path="/tile-control" element={<TileControl/>}/>
        <Route path="/time-input" element={<TimeInput/>}/>
        <Route path="/time-picker" element={<TimePicker/>}/>
        <Route path="/title" element={<Title/>}/>
        <Route path="/toast-manager" element={<ToastManager/>}/>
        <Route path="/toast" element={<Toast/>}/>
        <Route path="/toggle" element={<Toggle/>}/>
        <Route path="/tooltip" element={<Tooltip/>}/>
        <Route path="/vertical-stepper" element={<VerticalStepper/>}/>
      </Routes>
    </div>
  )
}

export const App: FC = () => {
  return (
    <BrowserRouter>
      <AppImpl/>
    </BrowserRouter>
  )
}
