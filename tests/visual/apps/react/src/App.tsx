import '@nectary/components'
import { Alert } from './components/Alert'
import { Select } from './components/Select'
import { Radio } from './components/Radio'
import { Input } from './components/Input'
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
        <sinch-button type="primary" text="Button" onClick={() => {}}/>
      )
    }

    case '/checkbox': {
      return (
        <sinch-checkbox text="Checkbox" onChange={() => {}}/>
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
