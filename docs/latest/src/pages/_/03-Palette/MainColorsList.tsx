import refJson from '@sinch-engage/nectary-theme-base/ref.json'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-cell'
import '@sinch-engage/nectary/text'
import type { FC, ReactElement } from 'react'

const colorMainNames = Object.keys(refJson.color.main) as unknown as (keyof typeof refJson.color.main)[]
const ColorSwatch: FC<{cssName: string}> = ({ cssName }) => (
  <div style={{ width: 20, height: 20, backgroundColor: `var(${cssName})`, alignSelf: 'center' }}/>
)

export const MainColorsList = () => (
  <sinch-table style={{ width: '100%' }}>
    <sinch-table-head>
      <sinch-table-row>
        <sinch-table-head-cell text="CSS Name"/>
        <sinch-table-head-cell text="Color Hex"/>
        <sinch-table-head-cell text="Sample"/>
      </sinch-table-row>
    </sinch-table-head>
    <sinch-table-body>
      {colorMainNames.reduce((res, name) => {
        for (const variantName of Object.keys(refJson.color.main[name]) as (keyof typeof refJson.color.main[typeof name])[]) {
          const value = refJson.color.main[name][variantName]
          const cssName = `--sinch-ref-color-main-${name}-${variantName}`

          res.push(
            <sinch-table-row key={name + variantName}>
              <sinch-table-cell>
                <sinch-text type="m">{cssName}</sinch-text>
              </sinch-table-cell>
              <sinch-table-cell>
                <sinch-text type="m">{value}</sinch-text>
              </sinch-table-cell>
              <sinch-table-cell>
                <ColorSwatch cssName={cssName}/>
              </sinch-table-cell>
            </sinch-table-row>
          )
        }

        return res
      }, [] as ReactElement[])}
    </sinch-table-body>
  </sinch-table>
)
