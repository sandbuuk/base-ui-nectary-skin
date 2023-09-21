import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-brown', 'light-gray']
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-brown', 'dark-gray']
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']
const allColors = [...lightColors, ...vibrantColors, ...darkColors]
const lightVibrantColors = [...lightColors, ...vibrantColors]

export const ColorMenu: FC = () => {
  const [search] = useSearchParams()
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-color-menu-change', { detail: value }))
    setValue(value)
  }
  const rows = (() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  })()
  const cols = (() => {
    const val = search.get('cols')

    return val !== null ? parseInt(val) : undefined
  })()
  const colors = search.get('example') === 'light'
    ? lightVibrantColors
    : allColors

  return (
    <sinch-color-menu
      cols={cols}
      rows={rows}
      value={value}
      on-change={onChange}
      aria-label="Menu"
    >
      {colors.map((color) => (
        <sinch-color-menu-option key={color} value={color}/>
      ))}
    </sinch-color-menu>
  )
}
