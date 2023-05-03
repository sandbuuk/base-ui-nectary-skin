import refJson from '@sinch-engage/nectary-theme-base/ref.json'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-cell'
import { useEffect, useState } from 'react'
import ReferenceColorsTableMarkDown from '../markdown/ReferenceColorsTable.md'
import '@sinch-engage/nectary/color-swatch'
import '@sinch-engage/nectary-assets/icons/expand-more'
import '@sinch-engage/nectary-assets/icons/expand-less'
import { SpacingY } from './SpacingY'

const colorMainNames = Object.keys(refJson.color.main) as unknown as (keyof typeof refJson.color.main)[]
const colorsMap = colorMainNames.reduce((res, name) => {
  for (const variantName of Object.keys(refJson.color.main[name]) as (keyof typeof refJson.color.main[typeof name])[]) {
    const value = refJson.color.main[name][variantName]
    const cssName = `--sinch-ref-color-main-${name}-${variantName}`
    const tokenName = `ref.color.main.${name}.${variantName}`
    const colorName = `${name[0].toUpperCase() + name.substring(1)} ${variantName}`

    // @ts-ignore
    res.push({ key: `${name}+${variantName}`, colorName, cssName, tokenName, value })
  }

  return res
}, [])

const headStyle = {
  maxWidth: 105,
}

const tableStyle = {
  width: '100%',
  borderRadius: 14,
  backgroundColor: 'var(--sinch-sys-color-container-contrast-secondary-default)',
}

interface TypeShowMoreButton {
  isExpanded: boolean,
  setExpanded: (isExpanded: boolean) => void,
}

const ShowMoreButton = ({ isExpanded, setExpanded }: TypeShowMoreButton) => {
  const handleClick = () => {
    setExpanded(!isExpanded)
  }

  return (
    <div style={{ margin: 'auto' }}>
      <SpacingY height={10}/>
      <sinch-button
        text={isExpanded ? 'Show less' : 'Show more'}
        aria-label="Click"
        type="tertiary"
        size="l"
        on-click={handleClick}
      >
        {isExpanded ? <sinch-icon-expand-less slot="right-icon"/> : <sinch-icon-expand-more slot="right-icon"/>}
      </sinch-button>
    </div>
  )
}

export const ReferenceColorsTable = () => {
  const [isExpanded, setExpanded] = useState(false)
  const [colors, setColors] = useState(colorsMap.slice(0, 7))

  useEffect(() => {
    setColors(isExpanded ? colorsMap : colors.slice(0, 7))
  }, [isExpanded])

  return (
    <>
      <div className="colors-table">
        <ReferenceColorsTableMarkDown/>
        <SpacingY height={28}/>
        <sinch-table style={tableStyle}>
          <sinch-table-head>
            <sinch-table-row>
              <sinch-table-head-cell style={headStyle} text="Sample" align="center" fit/>
              <sinch-table-head-cell text="Color name"/>
              <sinch-table-head-cell text="CSS name"/>
              <sinch-table-head-cell text="Token name"/>
              <sinch-table-head-cell text="Token value"/>
            </sinch-table-row>
          </sinch-table-head>
          <sinch-table-body>
            {colors.map(({ key, cssName, colorName, tokenName, value }) => {
              return (
                <sinch-table-row key={key}>
                  <sinch-table-cell>
                    <div
                      className="color-circle"
                      style={{ backgroundColor: `var(${cssName})` }}
                    />
                  </sinch-table-cell>
                  <sinch-table-cell>
                    <sinch-text type="m">{colorName}</sinch-text>
                  </sinch-table-cell>
                  <sinch-table-cell>
                    <sinch-text type="m">{cssName}</sinch-text>
                  </sinch-table-cell>
                  <sinch-table-cell>
                    <sinch-text type="m">{tokenName}</sinch-text>
                  </sinch-table-cell>
                  <sinch-table-cell>
                    <sinch-text type="m">{value}</sinch-text>
                  </sinch-table-cell>
                </sinch-table-row>
              )
            })}
          </sinch-table-body>
        </sinch-table>
        <ShowMoreButton isExpanded={isExpanded} setExpanded={setExpanded}/>
      </div>
      <SpacingY height={56}/>
    </>
  )
}
