import React, { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icon'
import '@sinch-engage/nectary/text'

export const req = import.meta.webpackContext!('@sinch-engage/nectary-assets/icons-branded', {
  regExp: /^.*\/index.ts$/,
  recursive: true,
  mode: 'sync',
})
const iconNames = req.keys().map((key) => {
  req(key)

  return `sinch-icon-branded-${key.replace(/^\.\/(.+)\/index.ts$/, '$1')}`
})

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
}

const inputStyle: CSSProperties = {
  width: 300,
  alignSelf: 'center',
}

const tableStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  width: '100%',
}

const cellStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '16px 6px',
  textAlign: 'center',
  alignItems: 'center',
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
        <sinch-icon-button slot="right" on-click={onClearSearch} aria-label="Clear search">
          <sinch-icon slot="icon" name="close"/>
        </sinch-icon-button>
      </sinch-input>
      <div style={tableStyle}>
        {names.map((name) => (
          <div key={name} style={cellStyle}>
            {React.createElement(name, { title: name, size: 64 })}
            <sinch-text type="s">{name}</sinch-text>
          </div>
        ))}
      </div>
    </div>
  )
}
