import type { FC } from 'react'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-cell'
import '@sinch-engage/nectary/toggle'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icon'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/checkbox'
import '@sinch-engage/nectary/link'
import '@sinch-engage/nectary/text'

const getTableItems = ({ hasLongLine }: any): TTableItems => ({
  head: [
    { isCheckbox: true, isFit: true },
    { text: 'ID', isSortable: true, align: 'end' },
    { text: 'Ticket' },
    { text: 'Channel', align: 'center', tooltip: 'Tooltip text', isSortable: true, isFilterable: true },
    { text: 'Comment long long' },
    { text: 'Active', align: 'center' },
    { text: 'Actions', isFit: true, tooltip: 'Tooltip text' },
  ],
  body: [
    [
      { isCheckbox: true },
      { text: '123', align: 'end' },
      { isLink: true, text: 'Link' },
      { isIcon: true, align: 'center', iconName: 'open_in_new' },
      hasLongLine === true
        ? { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }
        : { text: 'Lorem Ipsum' },
      { isToggle: true, align: 'center' },
      { isIcon: true, align: 'center', iconName: 'more_vert' },
    ],
    [
      { isCheckbox: true },
      { text: '456789', align: 'end' },
      { isLink: true, text: 'Link' },
      { isIcon: true, align: 'center', iconName: 'open_in_new' },
      { text: 'Lorem Ipsum' },
      { isToggle: true, align: 'center' },
      { isIcon: true, align: 'center', iconName: 'more_vert' },
    ],
  ],
})

type TTable = {
  search: URLSearchParams,
}

const noop = () => {}
type TTableItems = {head: TTableItem[], body: TTableItem[][]}
type TTableItem = {
  isCheckbox?: boolean,
  isFit?: boolean,
  isLink?: boolean,
  isIcon?: boolean,
  isButton?: boolean,
  isToggle?: boolean,
  isSortable?: boolean,
  isFilterable?: boolean,
  text?: string,
  tooltip?: string,
  align?: 'center' | 'end',
  iconName?: string,
}

export const Table: FC<TTable> = ({ search }) => {
  const example = search.get('example')
  const state: TTableItems = getTableItems({ hasLongLine: example === 'long' })

  return (
    <sinch-table>
      <sinch-table-head>
        <sinch-table-row>
          {state.head.map((cell, i) => (
            <sinch-table-head-cell key={i} text={cell.text} align={cell.align} fit={cell.isFit}>
              {cell.isCheckbox === true && (
                <sinch-checkbox slot="checkbox" on-change={noop} aria-label="Checkbox"/>
              )}
              {cell.isSortable === true && (
                <sinch-icon-button aria-label="Sort" size="s" slot="right" onClick={noop}>
                  <sinch-icon slot="icon" name="north"/>
                </sinch-icon-button>
              )}
              {cell.isFilterable === true && (
                <sinch-icon-button aria-label="Filter" size="s" slot="left" onClick={noop}>
                  <sinch-icon slot="icon" name="filter_list"/>
                </sinch-icon-button>
              )}
              {cell.tooltip != null && (
                <sinch-help-tooltip slot="tooltip" text={cell.tooltip}/>
              )}
            </sinch-table-head-cell>
          ))}
        </sinch-table-row>
      </sinch-table-head>
      <sinch-table-body>
        {state.body.map((row, i) => (
          <sinch-table-row key={i} selected={i === 0}>
            {row.map((cell, i) => (
              <sinch-table-cell key={i} align={cell.align}>
                {cell.isCheckbox === true && (
                  <sinch-checkbox on-change={noop} aria-label="Checkbox"/>
                )}
                {cell.isButton === true && (
                  <sinch-button type="secondary" text={cell.text ?? ''} onClick={noop} aria-label="Button"/>
                )}
                {cell.isToggle === true && (
                  <sinch-toggle on-change={noop} aria-label="Toggle"/>
                )}
                {cell.isLink === true && (
                  <sinch-link text={cell.text ?? ''} href="#" aria-label="Link"/>
                )}
                {cell.isIcon === true && (
                  <sinch-icon-button aria-label="button">
                    <sinch-icon slot="icon" name={cell.iconName ?? 'not-defined'}/>
                  </sinch-icon-button>
                )}
                {cell.isCheckbox !== true && cell.isButton !== true && cell.isToggle !== true && cell.isLink !== true && cell.isIcon !== true && (
                  <sinch-text type="m">{cell.text}</sinch-text>
                )}
              </sinch-table-cell>
            ))}
          </sinch-table-row>
        ))}
      </sinch-table-body>
    </sinch-table>
  )
}
