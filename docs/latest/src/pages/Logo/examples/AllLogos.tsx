import React from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-cell'
import '@sinch-engage/nectary/text'

const req = import.meta.webpackContext!('@sinch-engage/nectary-assets/logo', {
  regExp: /^.*\/index.ts$/,
  recursive: true,
  mode: 'sync',
})
const names = req.keys().map((key) => {
  req(key)

  return `sinch-logo-${key.replace(/^\.\/(.+)\/index.ts$/, '$1')}`
})

const tableStyle: CSSProperties = {
  width: '100%',
}

export const AllLogosExample: FC = () => {
  return (
    <sinch-table style={tableStyle}>
      <sinch-table-head>
        <sinch-table-row>
          <sinch-table-head-cell text="Logo" fit/>
          <sinch-table-head-cell text="Name"/>
        </sinch-table-row>
      </sinch-table-head>
      <sinch-table-body>
        {names.map((name) => (
          <sinch-table-row key={name}>
            <sinch-table-cell>
              {React.createElement(name, { title: name })}
            </sinch-table-cell>
            <sinch-table-cell>
              <sinch-text type="m">{name}</sinch-text>
            </sinch-table-cell>
          </sinch-table-row>
        ))}
      </sinch-table-body>
    </sinch-table>
  )
}
