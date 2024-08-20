import type { FC } from 'react'
import '@nectary/components/table'
import '@nectary/components/table-head'
import '@nectary/components/table-row'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-cell'
import '@nectary/components/checkbox'
import '@nectary/components/link'
import '@nectary/components/toggle'
import '@nectary/components/help-tooltip'
import '@nectary/components/table-body'
import '@nectary/components/button'
import '@nectary/components/icon'

export const SimpleExample: FC = () => {
  return (
    <sinch-table>
      <sinch-table-head>
        <sinch-table-row>
          <sinch-table-head-cell fit>
            <sinch-checkbox slot="checkbox" aria-label="Checkbox"/>
          </sinch-table-head-cell>
          <sinch-table-head-cell text="ID" align="end">
            <sinch-button slot="right" aria-label="Sort">
              <sinch-icon name="fa-arrow-down-long" slot="icon"/>
            </sinch-button>
          </sinch-table-head-cell>
          <sinch-table-head-cell text="Ticket"/>
          <sinch-table-head-cell text="Channel" align="center">
            <sinch-button slot="left" aria-label="Filter">
              <sinch-icon name="fa-bars-filter" slot="icon"/>
            </sinch-button>
            <sinch-button slot="right" aria-label="Sort">
              <sinch-icon name="fa-arrow-up-long" slot="icon"/>
            </sinch-button>
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
            <sinch-icon name="fa-arrow-up-right-from-square"/>
          </sinch-table-cell>
          <sinch-table-cell><span>Lorem Ipsum</span></sinch-table-cell>
          <sinch-table-cell align="center">
            <sinch-toggle aria-label="Toggle"/>
          </sinch-table-cell>
          <sinch-table-cell align="center">
            <sinch-icon name="fa-ellipsis-vertical" slot="icon"/>
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
            <sinch-icon name="fa-arrow-up-right-from-square"/>
          </sinch-table-cell>
          <sinch-table-cell>
            <span>Lorem Ipsum is simply dummy text</span>
          </sinch-table-cell>
          <sinch-table-cell align="center">
            <sinch-toggle aria-label="Toggle"/>
          </sinch-table-cell>
          <sinch-table-cell align="center">
            <sinch-icon name="fa-ellipsis-vertical" slot="icon"/>
          </sinch-table-cell>
        </sinch-table-row>
      </sinch-table-body>
    </sinch-table>
  )
}
