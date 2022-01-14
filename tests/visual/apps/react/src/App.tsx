import '@nectary/components'
import { Alert } from './components/Alert'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Input } from './components/Input'
import { Radio } from './components/Radio'
import { Select } from './components/Select'
import { Tabs } from './components/Tabs'
import { Textarea } from './components/Textarea'
import { Toggle } from './components/Toggle'
import { Tooltip } from './components/Tooltip'
import { Spinner } from './components/Spinner'
import type { FC } from 'react'

const mapElement = (url: URL) => {
  switch (url.pathname) {
    case '/alert': {
      return (
        <Alert search={url.searchParams}/>
      )
    }

    case '/button': {
      return (
        <Button search={url.searchParams}/>
      )
    }

    case '/checkbox': {
      return (
        <Checkbox search={url.searchParams}/>
      )
    }

    case '/input': {
      return (
        <Input search={url.searchParams}/>
      )
    }

    case '/radio': {
      return (
        <Radio search={url.searchParams}/>
      )
    }

    case '/select': {
      return (
        <Select search={url.searchParams}/>
      )
    }

    case '/tabs': {
      return (
        <Tabs search={url.searchParams}/>
      )
    }

    case '/textarea': {
      return (
        <Textarea search={url.searchParams}/>
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
  const style = width > 0 ? {
      display: 'flex' as const,
      flexDirection: 'column' as const,
      width: width + 'px',
      padding: '100px'
    } : {
      padding: '100px'
    }

  return (
    <div style={style}>
      {mapElement(url)}
    </div>
  )
}
