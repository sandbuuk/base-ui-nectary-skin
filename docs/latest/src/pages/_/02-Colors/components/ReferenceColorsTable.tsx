import '@nectary/components/table'
import '@nectary/components/table-head'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-row'
import '@nectary/components/table-body'
import '@nectary/components/table-cell'
import { useEffect, useState } from 'react'
import '@nectary/components/button'
import '@nectary/components/text'
import { SpacingY } from './SpacingY'
import { sinchColors } from './create-reference-colors'
import type { TableItem } from './create-reference-colors'
import '@nectary/assets/icons/fa-angle-down'
import '@nectary/assets/icons/fa-angle-up'

type TypeShowMoreButton = {
  isExpanded: boolean,
  setExpanded: (isExpanded: boolean) => void,
}

const headStyle = {
  maxWidth: 105,
}

const tableStyle = {
  width: '100%',
  borderRadius: 14,
  backgroundColor: 'var(--sinch-sys-color-surface-secondary-default)',
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
        {isExpanded ? (
          <sinch-icon-fa-angle-down slot="right-icon"/>
        ) : (
          <sinch-icon-fa-angle-up slot="right-icon"/>
        )}
      </sinch-button>
    </div>
  )
}

export const ReferenceColorsTable = () => {
  const [isExpanded, setExpanded] = useState(false)
  const [colors, setColors] = useState<TableItem[] | []>(isExpanded
    ? sinchColors
    : sinchColors.slice(0, 7))

  useEffect(() => {
    setColors(
      isExpanded
        ? sinchColors
        : sinchColors.slice(0, 7)
    )
  }, [isExpanded])

  return (
    <>
      <div className="colors-table">
        <SpacingY height={28}/>
        <sinch-table style={tableStyle}>
          <sinch-table-head>
            <sinch-table-row>
              <sinch-table-head-cell
                style={headStyle}
                text="Sample"
                align="center"
                fit
              />
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
