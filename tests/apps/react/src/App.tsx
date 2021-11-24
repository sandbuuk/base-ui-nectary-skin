import '@nectary/components'
import './App.css'
import { Select } from './components/Select'
import type { FC } from 'react'

export const App: FC<{}> = () => {
  switch (window.location.pathname) {
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
        <sinch-input label="Input" value="" onChange={() => {}}/>
      )
    }

    case '/input-with-tooltip': {
      return (
        <sinch-input label="Label" value="" placeholder="Placeholder" onChange={() => {}}>
          <sinch-input-tooltip text="Input Tooltip"/>
        </sinch-input>
      )
    }

    case '/select': {
      return (
        <Select width={200}/>
      )
    }

    case '/select-narrow': {
      return (
        <Select width={100}/>
      )
    }
  }

  return null
}
