import React, { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/text'
import '@nectary/components/input'
import '@nectary/components/button'
import '@nectary/components/icon'

const req = import.meta.webpackContext!('@nectary/assets/illustrations', {
  regExp: /^.*\/index$/,
  recursive: true,
  mode: 'sync',
})
const illustrationNames = req.keys().map((key) => {
  req(key)

  return `sinch-illustration-${key.replace(/^\.\/(.+)\/index$/, '$1')}`
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
  gridTemplateColumns: '1fr 1fr 1fr',
  width: '100%',
}

const cellStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '16px 6px',
  textAlign: 'center',
}

export const AllIllustrationsExample: FC = () => {
  const [search, setSearch] = useState('')
  const onSearchChange = (e: CustomEvent<string>) => setSearch(e.detail)
  const onClearSearch = () => setSearch('')

  const names = search.length > 1
    ? illustrationNames.filter((n) => n.includes(search))
    : illustrationNames

  return (
    <div style={wrapperStyle}>
      <sinch-input
        style={inputStyle}
        value={search}
        placeholder="Search"
        on-change={onSearchChange}
        aria-label="Search"
      >
        <sinch-icon icons-version="2" name="magnifying-glass" slot="icon"/>
        <sinch-button slot="right" on-click={onClearSearch} aria-label="Clear search">
          <sinch-icon icons-version="2" name="fa-xmark" slot="icon"/>
        </sinch-button>
      </sinch-input>
      <div style={tableStyle}>
        {names.map((name) => (
          <div key={name} style={cellStyle}>
            {React.createElement(name, { title: name, size: 96 })}
            <sinch-text type="m">{name}</sinch-text>
          </div>
        ))}
      </div>
    </div>
  )
}
