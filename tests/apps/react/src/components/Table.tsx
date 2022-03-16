/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useCallback, useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'

type TTable = {
  search: URLSearchParams,
}

const noop = () => {}
type TTableItems = {head: any[], body: any[][]}

export const Table: FC<TTable> = ({ search }) => {
  const [isAsc, setAsc] = useState(false)
  const state: TTableItems = useMemo(() => JSON.parse(decodeURI(search.get('state')!)), [search])
  const onSortChange = useCallback((e: SyntheticEvent<Element, CustomEvent>) => {
    setAsc(e.nativeEvent.detail)
    window.dispatchEvent(new CustomEvent('sinch-table-sort-change', { detail: e.nativeEvent.detail }))
  }, [search])
  const onSortFocus = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-table-sort-focus'))
  }, [search])
  const onSortBlur = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-table-sort-blur'))
  }, [search])

  return (
    <sinch-table>
      <sinch-table-head>
        <sinch-table-row>
          {state.head.map((cell, i) => (
            <sinch-table-head-cell key={i} text={cell.text} align={cell.align} fit={cell.isFit}>
              {cell.isCheckbox && <sinch-checkbox slot="checkbox" onChange={noop} aria-label="Checkbox"/>}
              {cell.isSortable && (
                <sinch-table-head-sort
                  slot="sort"
                  aria-label="Sort toggle"
                  value={isAsc}
                  onChange={onSortChange}
                  onFocus={onSortFocus}
                  onBlur={onSortBlur}
                />
              )}
              {cell.tooltip != null && <sinch-help-tooltip slot="tooltip" text={cell.tooltip}/>}
            </sinch-table-head-cell>
          ))}
        </sinch-table-row>
      </sinch-table-head>
      <sinch-table-body>
        {state.body.map((row, i) => (
          <sinch-table-row key={i}>
            {row.map((cell, i) => (
              <sinch-table-cell key={i} align={cell.align}>
                {cell.isCheckbox && <sinch-checkbox onChange={noop} aria-label="Checkbox"/>}
                {cell.isButton && <sinch-button type="secondary" text={cell.text} onClick={noop} aria-label="Button"/>}
                {cell.isToggle && <sinch-toggle onChange={noop} aria-label="Toggle"/>}
                {cell.isLink && <sinch-link text={cell.text} href="#"/>}
                {cell.isIcon && cell.iconType === 'open-in-new' && <sinch-icon-open-in-new size={24}/>}
                {cell.isIcon && cell.iconType === 'more-vert' && <sinch-icon-more-vert size={24}/>}
                {!cell.isCheckbox && !cell.isButton && !cell.isToggle && !cell.isLink && !cell.isIcon && <span>{cell.text}</span>}
              </sinch-table-cell>
            ))}
          </sinch-table-row>
        ))}
      </sinch-table-body>
    </sinch-table>
  )
}
