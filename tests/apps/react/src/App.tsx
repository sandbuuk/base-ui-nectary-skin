import { Accordion } from './components/Accordion'
import { ActionDropdown } from './components/ActionDropdown'
import { ActionMenu } from './components/ActionMenu'
import { Alert } from './components/Alert'
import { Avatar } from './components/Avatar'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { CardContainer } from './components/CardContainer'
import { Chat } from './components/Chat'
import { Checkbox } from './components/Checkbox'
import { Chip } from './components/Chip'
import { ColorMenu } from './components/ColorMenu'
import { ColorSelect } from './components/ColorSelect'
import { ColorSwatch } from './components/ColorSwatch'
import { DateInput } from './components/DateInput'
import { DatePicker } from './components/DatePicker'
import { Dialog } from './components/Dialog'
import { DialogExample } from './components/DialogExample'
import { Field } from './components/Field'
import { FileDrop } from './components/FileDrop'
import { FilePicker } from './components/FilePicker'
import { FileStatus } from './components/FileStatus'
import { Grid } from './components/Grid'
import { HorizontalStepper } from './components/HorizontalStepper'
import { IconButton } from './components/IconButton'
import { InlineAlert } from './components/InlineAlert'
import { Input } from './components/Input'
import { Link } from './components/Link'
import { List } from './components/List'
import { Pagination } from './components/Pagination'
import { Popover } from './components/Popover'
import { Progress } from './components/Progress'
import { Radio } from './components/Radio'
import { Search } from './components/Search'
import { Segment } from './components/Segment'
import { SegmentedControl } from './components/SegmentedControl'
import { SegmentedIconControl } from './components/SegmentedIconControl'
import { Select } from './components/Select'
import { SelectMenu } from './components/SelectMenu'
import { Spinner } from './components/Spinner'
import { Table } from './components/Table'
import { Tabs } from './components/Tabs'
import { Tag } from './components/Tag'
import { Text } from './components/Text'
import { Textarea } from './components/Textarea'
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

const mapElement = (url: URL) => {
  switch (url.pathname) {
    case '/accordion': {
      return (
        <Accordion search={url.searchParams}/>
      )
    }

    case '/action-menu': {
      return (
        <ActionMenu search={url.searchParams}/>
      )
    }
    case '/action-dropdown': {
      return (
        <ActionDropdown search={url.searchParams}/>
      )
    }

    case '/alert': {
      return (
        <Alert search={url.searchParams}/>
      )
    }

    case '/inline-alert': {
      return (
        <InlineAlert search={url.searchParams}/>
      )
    }

    case '/avatar': {
      return (
        <Avatar search={url.searchParams}/>
      )
    }

    case '/button': {
      return (
        <Button search={url.searchParams}/>
      )
    }

    case '/badge': {
      return (
        <Badge search={url.searchParams}/>
      )
    }

    case '/card': {
      return (
        <Card search={url.searchParams}/>
      )
    }

    case '/card-container': {
      return (
        <CardContainer search={url.searchParams}/>
      )
    }

    case '/chat': {
      return (
        <Chat search={url.searchParams}/>
      )
    }

    case '/checkbox': {
      return (
        <Checkbox search={url.searchParams}/>
      )
    }

    case '/chip': {
      return (
        <Chip search={url.searchParams}/>
      )
    }

    case '/color-menu': {
      return (
        <ColorMenu search={url.searchParams}/>
      )
    }
    case '/color-select': {
      return (
        <ColorSelect search={url.searchParams}/>
      )
    }

    case '/color-swatch': {
      return (
        <ColorSwatch search={url.searchParams}/>
      )
    }

    case '/date-input': {
      return (
        <DateInput search={url.searchParams}/>
      )
    }

    case '/date-picker': {
      return (
        <DatePicker search={url.searchParams}/>
      )
    }

    case '/dialog': {
      return (
        <Dialog search={url.searchParams}/>
      )
    }

    case '/dialog-example': {
      return (
        <DialogExample search={url.searchParams}/>
      )
    }

    case '/select-menu': {
      return (
        <SelectMenu search={url.searchParams}/>
      )
    }

    case '/field': {
      return (
        <Field search={url.searchParams}/>
      )
    }

    case '/file-drop': {
      return (
        <FileDrop search={url.searchParams}/>
      )
    }

    case '/file-picker': {
      return (
        <FilePicker search={url.searchParams}/>
      )
    }

    case '/file-status': {
      return (
        <FileStatus search={url.searchParams}/>
      )
    }

    case '/grid': {
      return (
        <Grid search={url.searchParams}/>
      )
    }

    case '/icon-button': {
      return (
        <IconButton search={url.searchParams}/>
      )
    }

    case '/input': {
      return (
        <Input search={url.searchParams}/>
      )
    }

    case '/link': {
      return (
        <Link search={url.searchParams}/>
      )
    }

    case '/list': {
      return (
        <List search={url.searchParams}/>
      )
    }

    case '/pagination': {
      return (
        <Pagination search={url.searchParams}/>
      )
    }

    case '/popover': {
      return (
        <Popover search={url.searchParams}/>
      )
    }

    case '/progress': {
      return (
        <Progress search={url.searchParams}/>
      )
    }

    case '/radio': {
      return (
        <Radio search={url.searchParams}/>
      )
    }

    case '/search': {
      return (
        <Search search={url.searchParams}/>
      )
    }

    case '/segment': {
      return (
        <Segment search={url.searchParams}/>
      )
    }

    case '/segmented-control': {
      return (
        <SegmentedControl search={url.searchParams}/>
      )
    }

    case '/segmented-icon-control': {
      return (
        <SegmentedIconControl search={url.searchParams}/>
      )
    }

    case '/select': {
      return (
        <Select search={url.searchParams}/>
      )
    }

    case '/table': {
      return (
        <Table search={url.searchParams}/>
      )
    }

    case '/tabs': {
      return (
        <Tabs search={url.searchParams}/>
      )
    }

    case '/tag': {
      return (
        <Tag search={url.searchParams}/>
      )
    }

    case '/textarea': {
      return (
        <Textarea search={url.searchParams}/>
      )
    }

    case '/text': {
      return (
        <Text search={url.searchParams}/>
      )
    }

    case '/tile-control': {
      return (
        <TileControl search={url.searchParams}/>
      )
    }

    case '/time-input': {
      return (
        <TimeInput search={url.searchParams}/>
      )
    }

    case '/time-picker': {
      return (
        <TimePicker search={url.searchParams}/>
      )
    }

    case '/title': {
      return (
        <Title search={url.searchParams}/>
      )
    }

    case '/toast': {
      return (
        <Toast search={url.searchParams}/>
      )
    }

    case '/toast-manager': {
      return (
        <ToastManager search={url.searchParams}/>
      )
    }

    case '/toggle': {
      return (
        <Toggle search={url.searchParams}/>
      )
    }

    case '/tooltip': {
      return (
        <Tooltip search={url.searchParams}/>
      )
    }

    case '/spinner': {
      return (
        <Spinner search={url.searchParams}/>
      )
    }

    case '/horizontal-stepper': {
      return (
        <HorizontalStepper search={url.searchParams}/>
      )
    }

    case '/vertical-stepper': {
      return (
        <VerticalStepper search={url.searchParams}/>
      )
    }
  }

  return null
}

export const App: FC<{}> = () => {
  const url = new URL(window.location.href)
  const width = Number(url.searchParams.get('width') ?? '0')
  const height = Number(url.searchParams.get('height') ?? '0')

  const style: CSSProperties = {
    display: 'flex',
    padding: '120px',
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
      {mapElement(url)}
    </div>
  )
}
