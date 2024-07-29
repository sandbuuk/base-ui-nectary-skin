/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @nectary/imports */
import { iconList } from '@nectary/components/icon-alt-one/switchFile'
import React, { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/icon-alt-one'
import '@nectary/components/button-group'
import '@nectary/components/button-group-item'
import '@nectary/components/popover'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/select-button'

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

export const SimpleExample: FC = () => {
  const [search, setSearch] = useState('')
  const onChange = (e: CustomEvent<string>) => setSearch(e.detail)
  const onClearSearch = () => setSearch('')

  const names = search.length > 1
    ? iconList.filter((n) => n.includes(search))
    : iconList

  return (
    <div style={wrapperStyle}>
      <sinch-input
        style={inputStyle}
        value={search}
        placeholder="Search"
        on-change={onChange}
        aria-label="Search"
      >
        <sinch-icon slot="icon" name="search" />
        <sinch-button slot="right" on-click={onClearSearch} aria-label="Clear search">
          <sinch-icon slot="icon" name="close" />
        </sinch-button>
      </sinch-input>
      <div style={iconsWrapperStyle}>
        {names.map((name) => React.createElement('sinch-icon-alt-one', { key: name, name }))}
      </div>
    </div>
  )
}
