import React from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/table'
import '@nectary/components/table-head'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-body'
import '@nectary/components/table-row'
import '@nectary/components/table-cell'
import '@nectary/components/text'

const req = import.meta.webpackContext!('@nectary/assets/logo', {
  regExp: /^((?!\/global\/).)*\/index$/,
  recursive: true,
  mode: 'sync',
})
const names = req.keys().reduce((acc, key) => {
  req(key)

  if (key.includes('-wordmark') === true) {
    return acc
  }

  return [...acc, `sinch-logo-${key.replace(/^\.\/(.+)\/index$/, '$1')}`]
}, [] as string[])

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
          <sinch-table-head-cell text="Logo Wordmark" fit/>
          <sinch-table-head-cell text="Name Wordmark"/>
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
            <sinch-table-cell>
              {React.createElement(`${name}-wordmark`, { title: name })}
            </sinch-table-cell>
            <sinch-table-cell>
              <sinch-text type="m">{`${name}-wordmark`}</sinch-text>
            </sinch-table-cell>
          </sinch-table-row>
        ))}
      </sinch-table-body>
    </sinch-table>
  )
}
