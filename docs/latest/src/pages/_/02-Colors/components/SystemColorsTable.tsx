import { useState } from 'react'
import { SelectColorCategory } from './SelectColorCategory'
import { SpacingY } from './SpacingY'
import '@nectary/components/table'
import '@nectary/components/table-head'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-row'
import '@nectary/components/table-body'
import '@nectary/components/table-cell'
import '@nectary/components/text'
import { createSystemColors } from './create-system-colors'

const headStyle = {
  maxWidth: 105,
}

const tableStyle = {
  width: '100%',
  borderRadius: 14,
  backgroundColor: 'var(--sinch-sys-color-surface-secondary-default)',
}

export const categories = [
  'basic',
  'text',
  'border',
  'feedback',
  'primary',
  'surface',
] as const
export type Category = (typeof categories)[number]
const colors = createSystemColors()

export const SystemColorsTable = () => {
  const [category, setCategory] = useState<Category>('text')

  const handleSelectColorCategory = (value: Category) => {
    setCategory(value)
  }

  return (
    <>
      <div className="colors-table">
        <SelectColorCategory
          category={category}
          handleSelectColorCategory={handleSelectColorCategory}
        />
        <SpacingY height={24}/>
        <sinch-table style={tableStyle}>
          <sinch-table-head>
            <sinch-table-row>
              <sinch-table-head-cell
                style={headStyle}
                text="Sample"
                align="center"
                fit
              />
              <sinch-table-head-cell text="Token name"/>
              <sinch-table-head-cell text="CSS Name"/>
              <sinch-table-head-cell text="Token reference"/>
              <sinch-table-head-cell text="Token value"/>
            </sinch-table-row>
          </sinch-table-head>
          <sinch-table-body>
            {colors[category].map(
              ({ cssName, tokenName, tokenRefName, tokenRefValue }) => {
                return (
                  <sinch-table-row key={cssName}>
                    <sinch-table-cell>
                      <div
                        className="color-circle"
                        style={{
                          backgroundColor: `var(${cssName})`,
                          border:
                            tokenRefValue === 'transparent'
                              ? `1px solid var(--sinch-sys-color-border-default)`
                              : undefined,
                        }}
                      />
                    </sinch-table-cell>
                    <sinch-table-cell>
                      <sinch-text type="m">{tokenName}</sinch-text>
                    </sinch-table-cell>
                    <sinch-table-cell>
                      <sinch-text type="m">{cssName}</sinch-text>
                    </sinch-table-cell>
                    <sinch-table-cell>
                      <sinch-text type="m">{tokenRefName}</sinch-text>
                    </sinch-table-cell>
                    <sinch-table-cell>
                      <sinch-text type="m">{tokenRefValue}</sinch-text>
                    </sinch-table-cell>
                  </sinch-table-row>
                )
              }
            )}
          </sinch-table-body>
        </sinch-table>
      </div>
      <SpacingY height={56}/>
    </>
  )
}
