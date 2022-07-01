/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useMemo } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-cell'
import '@sinch-engage/nectary/toggle'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/north'
import '@sinch-engage/nectary/icons/filter-list'
import '@sinch-engage/nectary/icons/more-vert'
import '@sinch-engage/nectary/icons/open-in-new'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/checkbox'
import '@sinch-engage/nectary/link'

type TTable = {
  search: URLSearchParams,
}

const noop = () => {}
type TTableItems = {head: any[], body: any[][]}

export const Table: FC<TTable> = ({ search }) => {
  const state: TTableItems = useMemo(() => JSON.parse(decodeURI(search.get('state')!)), [search])

  return (
    <sinch-table>
      <sinch-table-head>
        <sinch-table-row>
          {state.head.map((cell, i) => (
            <sinch-table-head-cell key={i} text={cell.text} align={cell.align} fit={cell.isFit}>
              {cell.isCheckbox && <sinch-checkbox slot="checkbox" onChange={noop} aria-label="Checkbox"/>}
              {cell.isSortable && (
                <sinch-icon-button aria-label="Sort" small slot="right" onClick={() => {}}>
                  <sinch-icon-north slot="icon"/>
                </sinch-icon-button>
              )}
              {cell.isFilterable && (
                <sinch-icon-button aria-label="Filter" small slot="left" onClick={() => {}}>
                  <sinch-icon-filter-list slot="icon"/>
                </sinch-icon-button>
              )}
              {cell.tooltip != null && <sinch-help-tooltip slot="tooltip" text={cell.tooltip}/>}
            </sinch-table-head-cell>
          ))}
        </sinch-table-row>
      </sinch-table-head>
      <sinch-table-body>
        {state.body.map((row, i) => (
          <sinch-table-row key={i} selected={i === 0}>
            {row.map((cell, i) => (
              <sinch-table-cell key={i} align={cell.align}>
                {cell.isCheckbox && <sinch-checkbox onChange={noop} aria-label="Checkbox"/>}
                {cell.isButton && <sinch-button type="secondary" text={cell.text} onClick={noop} aria-label="Button"/>}
                {cell.isToggle && <sinch-toggle onChange={noop} aria-label="Toggle"/>}
                {cell.isLink && <sinch-link text={cell.text} href="#"/>}
                {cell.isIcon && cell.iconType === 'open-in-new' && <sinch-icon-open-in-new/>}
                {cell.isIcon && cell.iconType === 'more-vert' && <sinch-icon-more-vert/>}
                {!cell.isCheckbox && !cell.isButton && !cell.isToggle && !cell.isLink && !cell.isIcon && <span>{cell.text}</span>}
              </sinch-table-cell>
            ))}
          </sinch-table-row>
        ))}
      </sinch-table-body>
    </sinch-table>
  )
}
