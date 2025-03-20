import { useState } from 'react'
import { sinchIconNames } from './icons-list'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/button'
import '@nectary/components/icon'
import '@nectary/components/tooltip'

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

const iconStyle: CSSProperties = {
  cursor: 'pointer',
}

const copyIconName = async (name: string | null) => {
  if (name !== null) {
    await navigator.clipboard.writeText(name)
  }
}

export const AllIconsExample: FC = () => {
  const [search, setSearch] = useState('')
  const onChange = (e: CustomEvent<string>) => setSearch(e.detail)
  const onClearSearch = () => setSearch('')

  const names = search.length > 1
    ? sinchIconNames.filter((n) => n.includes(search))
    : sinchIconNames

  return (
    <div style={wrapperStyle}>
      <sinch-input
        style={inputStyle}
        value={search}
        placeholder="Search"
        on-change={onChange}
        aria-label="Search"
      >
        <sinch-icon icons-version="2" name="ai" slot="icon"/>
        <sinch-button slot="right" on-click={onClearSearch} aria-label="Clear search">
          <sinch-icon icons-version="2" name="fa-xmark" slot="icon"/>
        </sinch-button>
      </sinch-input>
      <div style={iconsWrapperStyle} onClick={(e) => copyIconName((e.target as HTMLElementTagNameMap['sinch-icon']).getAttribute('name'))}>
        {names.map((name) => <sinch-tooltip type="fast" key={name} text={name}><sinch-icon icons-version="2" style={iconStyle} name={name}/></sinch-tooltip>)}
      </div>
    </div>
  )
}
