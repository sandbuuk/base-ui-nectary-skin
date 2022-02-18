import { useState } from 'react'
import type { FC } from 'react'

type TTable = {
  search: URLSearchParams,
}

export const Table: FC<TTable> = ({ search }) => {
  const [isAsc, setAsc] = useState(false)

  return (
    <div style={{ width: '100%' }}>
      <sinch-table style={{ width: '100%' }}>
        <sinch-table-head>
          <sinch-table-row sticky>
            <sinch-table-head-cell>
              <sinch-checkbox slot="checkbox" checked={isAsc} onChange={(e) => setAsc(e.nativeEvent.detail)}/>
            </sinch-table-head-cell>
            <sinch-table-head-cell align="end" text="#ID">
              <sinch-help-tooltip slot="tooltip" text="Tooltip text"/>
              <sinch-table-head-sort slot="sort" value={isAsc} onChange={(e) => setAsc(e.nativeEvent.detail)}/>
            </sinch-table-head-cell>
            <sinch-table-head-cell align="center" text="Cell content">
              <sinch-help-tooltip slot="tooltip" text="Tooltip text"/>
              <sinch-table-head-sort slot="sort" value={isAsc} onChange={(e) => setAsc(e.nativeEvent.detail)}/>
            </sinch-table-head-cell>
            <sinch-table-head-cell text="Active">
              <sinch-help-tooltip slot="tooltip" text="Tooltip text"/>
              <sinch-table-head-sort slot="sort" value={isAsc} onChange={(e) => setAsc(e.nativeEvent.detail)}/>
            </sinch-table-head-cell>
          </sinch-table-row>
        </sinch-table-head>
        <sinch-table-body>
          <sinch-table-row>
            <sinch-table-cell>
              <sinch-checkbox/>
            </sinch-table-cell>
            <sinch-table-cell align="end">123123</sinch-table-cell>
            <sinch-table-cell>
              <sinch-tag text="tag text"/>
              asdasd
              <sinch-tag text="tag text"/>
              asdasd
            </sinch-table-cell>
            <sinch-table-cell align="end">
              <sinch-toggle labeled checked={isAsc} onChange={(e) => setAsc(e.nativeEvent.detail)}/>
            </sinch-table-cell>
          </sinch-table-row>
          <sinch-table-row>
            <sinch-table-cell>
              <sinch-checkbox/>
            </sinch-table-cell>
            <sinch-table-cell>123123</sinch-table-cell>
            <sinch-table-cell>
              Cell content
              <sinch-button type="secondary" text="Button" small>
                <sinch-icon-open-in-new slot="icon" size={16}/>
              </sinch-button>
            </sinch-table-cell>
            <sinch-table-cell>
              Cell
              <sinch-link text="link" external href=""/>
              content
            </sinch-table-cell>
          </sinch-table-row>
          <sinch-table-row>
            <sinch-table-cell>
              <sinch-checkbox/>
            </sinch-table-cell>
            <sinch-table-cell>123123</sinch-table-cell>
            <sinch-table-cell>
              Cell content
              <sinch-button type="secondary" text="Button" small>
                <sinch-icon-open-in-new slot="icon" size={16}/>
              </sinch-button>
            </sinch-table-cell>
            <sinch-table-cell>
              Cell
              <sinch-link text="link" external href=""/>
              content
            </sinch-table-cell>
          </sinch-table-row>
          <sinch-table-row>
            <sinch-table-cell>
              <sinch-checkbox/>
            </sinch-table-cell>
            <sinch-table-cell>123123</sinch-table-cell>
            <sinch-table-cell>
              Cell content
              <sinch-button type="secondary" text="Button" small>
                <sinch-icon-open-in-new slot="icon" size={16}/>
              </sinch-button>
            </sinch-table-cell>
            <sinch-table-cell>
              Cell
              <sinch-link text="link" external href=""/>
              content
            </sinch-table-cell>
          </sinch-table-row>
          <sinch-table-row>
            <sinch-table-cell>
              <sinch-checkbox/>
            </sinch-table-cell>
            <sinch-table-cell>123123</sinch-table-cell>
            <sinch-table-cell>
              Cell content
              <sinch-button type="secondary" text="Button" small>
                <sinch-icon-open-in-new slot="icon" size={16}/>
              </sinch-button>
            </sinch-table-cell>
            <sinch-table-cell>
              Cell
              <sinch-link text="link" external href=""/>
              content
              <sinch-icon-more-vert/>
              <sinch-icon-east/>
              <sinch-icon-west/>
            </sinch-table-cell>
          </sinch-table-row>
        </sinch-table-body>
      </sinch-table>
    </div>

  )
}
