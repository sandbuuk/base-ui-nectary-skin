import React, { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/icon'
import '@nectary/components/button'

const req = import.meta.webpackContext!('@nectary/assets/icons', {
  regExp: /^.*\/index$/,
  recursive: true,
  mode: 'sync',
})

const iconNames = req.keys().map((key) => {
  req(key)

  return `sinch-icon-${key.replace(/^\.\/(.+)\/index$/, '$1')}`
})

const iconsWrapperStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
}

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
}

const inputStyle: CSSProperties = {
  width: 300,
  alignSelf: 'center',
}

export const AllIconsExample: FC = () => {
  const [search, setSearch] = useState('')
  const onChange = (e: CustomEvent<string>) => setSearch(e.detail)
  const onClearSearch = () => setSearch('')

  const names = search.length > 1
    ? iconNames.filter((n) => n.includes(search))
    : iconNames

  return (
    <div style={wrapperStyle}>
      <sinch-input
        style={inputStyle}
        value={search}
        placeholder="Search"
        on-change={onChange}
        aria-label="Search"
      >
        <sinch-icon slot="icon" name="search"/>
        <sinch-button slot="right" on-click={onClearSearch} aria-label="Clear search">
          <sinch-icon slot="icon" name="close"/>
        </sinch-button>
      </sinch-input>
      <div style={iconsWrapperStyle}>
        {names.map((name) => React.createElement(name, { key: name, title: name }))}
      </div>
    </div>
  )
}
