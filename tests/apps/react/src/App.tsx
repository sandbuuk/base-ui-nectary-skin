import { Accordion } from './components/Accordion'
import { ActionMenu } from './components/ActionMenu'
import { Alert } from './components/Alert'
import { Avatar } from './components/Avatar'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { CardContainer } from './components/CardContainer'
import { Chat } from './components/Chat'
import { Checkbox } from './components/Checkbox'
import { Dialog } from './components/Dialog'
import { Dropdown } from './components/Dropdown'
import { Grid } from './components/Grid'
import { IconButton } from './components/IconButton'
import { Input } from './components/Input'
import { Link } from './components/Link'
import { List } from './components/List'
import { Pagination } from './components/Pagination'
import { Popover } from './components/Popover'
import { Radio } from './components/Radio'
import { Search } from './components/Search'
import { Segment } from './components/Segment'
import { SegmentedControl } from './components/SegmentedControl'
import { SegmentedIconControl } from './components/SegmentedIconControl'
import { Select } from './components/Select'
import { Spinner } from './components/Spinner'
import { Table } from './components/Table'
import { Tabs } from './components/Tabs'
import { Tag } from './components/Tag'
import { Text } from './components/Text'
import { Textarea } from './components/Textarea'
import { Title } from './components/Title'
import { Toggle } from './components/Toggle'
import { Tooltip } from './components/Tooltip'
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

    case '/alert': {
      return (
        <Alert search={url.searchParams}/>
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

    case '/dialog': {
      return (
        <Dialog search={url.searchParams}/>
      )
    }

    case '/dropdown': {
      return (
        <Dropdown search={url.searchParams}/>
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

    case '/title': {
      return (
        <Title search={url.searchParams}/>
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
