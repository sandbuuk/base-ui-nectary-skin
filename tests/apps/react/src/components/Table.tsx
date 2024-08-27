import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/table'
import '@nectary/components/table-row'
import '@nectary/components/table-head'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-body'
import '@nectary/components/table-cell'
import '@nectary/components/toggle'
import '@nectary/components/help-tooltip'
import '@nectary/components/button'
import '@nectary/components/checkbox'
import '@nectary/components/link'
import '@nectary/components/text'
import '@nectary/components/icon'

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
      { isIcon: true, align: 'center', iconName: 'open' },
      hasLongLine === true
        ? { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }
        : { text: 'Lorem Ipsum' },
      { isToggle: true, align: 'center' },
      { isIcon: true, align: 'center', iconName: 'ellipsis' },
    ],
    [
      { isCheckbox: true },
      { text: '456789', align: 'end' },
      { isLink: true, text: 'Link' },
      { isIcon: true, align: 'center', iconName: 'open' },
      { text: 'Lorem Ipsum' },
      { isToggle: true, align: 'center' },
      { isIcon: true, align: 'center', iconName: 'ellipsis' },
    ],
  ],
})

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
  iconName?: 'open' | 'ellipsis',
}

export const Table: FC = () => {
  const [search] = useSearchParams()
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
                <sinch-button aria-label="Sort" size="s" slot="right" onClick={noop}>
                  <sinch-icon icons-version="2" name="fa-arrow-up-long" slot="icon"/>
                </sinch-button>
              )}
              {cell.isFilterable === true && (
                <sinch-button aria-label="Filter" size="s" slot="left" onClick={noop}>
                  <sinch-icon icons-version="2" name="fa-bars-filter" slot="icon"/>
                </sinch-button>
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
                  <sinch-button aria-label="button">
                    {cell.iconName === 'ellipsis' ? <sinch-icon icons-version="2" name="fa-ellipsis-vertical" slot="icon"/> : <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>}
                  </sinch-button>
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
