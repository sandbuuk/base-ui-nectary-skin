import React from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/text'

const req = import.meta.webpackContext!('@nectary/assets/animations', {
  regExp: /^.*\/index$/,
  recursive: true,
  mode: 'sync',
})
const illustrationNames = req.keys().map((key) => {
  req(key)

  return `sinch-animation-${key.replace(/^\.\/(.+)\/index$/, '$1')}`
})

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
}

// const inputStyle: CSSProperties = {
//   width: 300,
//   alignSelf: 'center',
// }

const tableStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  width: '100%',
}

const cellStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '16px 6px',
  textAlign: 'center',
}

export const AllAnimationsExample: FC = () => {
  // const [search, setSearch] = useState('')
  // const onSearchChange = (e: CustomEvent<string>) => setSearch(e.detail)
  // const onClearSearch = () => setSearch('')

  // const names = search.length > 1
  //   ? illustrationNames.filter((n) => n.includes(search))
  //   : illustrationNames

  const names = illustrationNames

  return (
    <div style={wrapperStyle}>
      {/* <sinch-input
        style={inputStyle}
        value={search}
        placeholder="Search"
        on-change={onSearchChange}
        aria-label="Search"
      >
        <sinch-icon slot="icon" name="search"/>
        <sinch-button slot="right" on-click={onClearSearch} aria-label="Clear search">
          <sinch-icon slot="icon" name="close"/>
        </sinch-button>
      </sinch-input> */}
      <div style={tableStyle}>
        {names.map((name) => (
          <div key={name} style={cellStyle}>
            {React.createElement(name, { title: name, size: 128, autoplay: true, loop: true })}
            <sinch-text type="m">{name}</sinch-text>
          </div>
        ))}
      </div>
    </div>
  )
}
