import React from 'react'
import type { CSSProperties, FC } from 'react'

const req = import.meta.webpackContext!('@sinch-engage/nectary/icons', {
  regExp: /^.*\/index.ts$/,
  recursive: true,
  mode: 'sync',
})
const names = req.keys().map((key) => {
  req(key)

  return `sinch-icon-${key.replace(/^\.\/(.+)\/index.ts$/, '$1')}`
})

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
}

export const AllIconsExample: FC = () => {
  return (
    <div style={wrapperStyle}>
      {names.map((name) => React.createElement(name, { key: name, title: name }))}
    </div>
  )
}
