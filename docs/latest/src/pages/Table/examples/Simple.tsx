import type { FC } from 'react'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/table-cell'
import '@sinch-engage/nectary/checkbox'
import '@sinch-engage/nectary/link'
import '@sinch-engage/nectary/toggle'
import '@sinch-engage/nectary/icons/south'
import '@sinch-engage/nectary/icons/north'
import '@sinch-engage/nectary/icons/filter-list'
import '@sinch-engage/nectary/icons/more-vert'

export const SimpleExample: FC = () => {
  return (
    <sinch-table>
      <sinch-table-head>
        <sinch-table-row>
          <sinch-table-head-cell fit>
            <sinch-checkbox slot="checkbox" aria-label="Checkbox"/>
          </sinch-table-head-cell>
          <sinch-table-head-cell text="ID" align="end">
            <sinch-icon-button slot="right" aria-label="Sort">
              <sinch-icon-south slot="icon"/>
            </sinch-icon-button>
          </sinch-table-head-cell>
          <sinch-table-head-cell text="Ticket"/>
          <sinch-table-head-cell text="Channel" align="center">
            <sinch-icon-button slot="left" aria-label="Filter">
              <sinch-icon-filter-list slot="icon"/>
            </sinch-icon-button>
            <sinch-icon-button slot="right" aria-label="Sort">
              <sinch-icon-north slot="icon"/>
            </sinch-icon-button>
            <sinch-help-tooltip slot="tooltip" text="Tooltip text"/>
          </sinch-table-head-cell>
          <sinch-table-head-cell text="Comment"/>
          <sinch-table-head-cell text="Active" align="center"/>
          <sinch-table-head-cell text="Actions" fit>
            <sinch-help-tooltip slot="tooltip" text="Tooltip text"/>
          </sinch-table-head-cell>
        </sinch-table-row>
      </sinch-table-head>
      <sinch-table-body>
        <sinch-table-row selected>
          <sinch-table-cell>
            <sinch-checkbox checked aria-label="Checkbox"/>
          </sinch-table-cell>
          <sinch-table-cell align="end"><span>123</span></sinch-table-cell>
          <sinch-table-cell>
            <sinch-link text="Link" href="#" aria-label="Link"/>
          </sinch-table-cell>
          <sinch-table-cell align="center">
            <sinch-icon-open-in-new/>
          </sinch-table-cell>
          <sinch-table-cell><span>Lorem Ipsum</span></sinch-table-cell>
          <sinch-table-cell align="center">
            <sinch-toggle aria-label="Toggle"/>
          </sinch-table-cell>
          <sinch-table-cell align="center">
            <sinch-icon-more-vert/>
          </sinch-table-cell>
        </sinch-table-row>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-checkbox aria-label="Checkbox"/>
          </sinch-table-cell>
          <sinch-table-cell align="end"><span>456789</span></sinch-table-cell>
          <sinch-table-cell>
            <sinch-link text="Link" href="#" aria-label="Link"/>
          </sinch-table-cell>
          <sinch-table-cell align="center">
            <sinch-icon-open-in-new/>
          </sinch-table-cell>
          <sinch-table-cell>
            <span>Lorem Ipsum is simply dummy text</span>
          </sinch-table-cell>
          <sinch-table-cell align="center">
            <sinch-toggle aria-label="Toggle"/>
          </sinch-table-cell>
          <sinch-table-cell align="center">
            <sinch-icon-more-vert/>
          </sinch-table-cell>
        </sinch-table-row>
      </sinch-table-body>
    </sinch-table>
  )
}
