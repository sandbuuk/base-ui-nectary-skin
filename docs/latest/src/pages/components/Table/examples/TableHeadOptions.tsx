import type { FC } from 'react'
import '@nectary/components/table'
import '@nectary/components/table-head'
import '@nectary/components/help-tooltip'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-body'
import '@nectary/components/table-row'
import '@nectary/components/table-cell'
import '@nectary/components/text'
import '@nectary/components/checkbox'
import '@nectary/components/button'
import '@nectary/components/icon'

const values = [
  {
    ticket: 123452,
    channel: 'Email',
    comment: 'Lorem Ipsum',
    active: true,
  },
  {
    ticket: 456222,
    channel: 'Phone',
    comment: 'Lorem Ipsum is simply dummy text',
    active: false,
  },
  {
    ticket: 7893443000,
    channel: 'Chat',
    comment: 'Lorem Ipsum',
    active: true,
  },
  {
    ticket: 123110,
    channel: 'Email',
    comment: 'Lorem Ipsum is simply dummy text',
    active: false,
  },
  {
    ticket: 345717,
    channel: 'Phone',
    comment: 'Lorem Ipsum',
    active: true,
  },
]

export const TableHeadOptionsExample: FC = () => {
  return (
    <sinch-table>
      <sinch-table-head>
        <sinch-table-row>
          <sinch-table-head-cell>
            <sinch-checkbox slot="checkbox" aria-label="Checkbox"/>
          </sinch-table-head-cell>
          <sinch-table-head-cell text="Ticket" align="end"/>
          <sinch-table-head-cell text="Channel" fit>
            <sinch-help-tooltip slot="tooltip" text="Ticket links to the related Jira ticket."/>
          </sinch-table-head-cell>
          <sinch-table-head-cell text="Additional Comments">
            <sinch-button slot="right" aria-label="Sort">
              <sinch-icon icons-version="2" name="fa-arrow-down-long" slot="icon"/>
            </sinch-button>
          </sinch-table-head-cell>
          <sinch-table-head-cell text="Active"/>
        </sinch-table-row>
      </sinch-table-head>

      <sinch-table-body>
        {values.map((value, index) => (
          <sinch-table-row key={index}>
            <sinch-table-cell>
              <sinch-checkbox
                aria-label="Checkbox"
              />
            </sinch-table-cell>
            <sinch-table-cell align="end">
              <sinch-text type="s">
                {value.ticket}
              </sinch-text>
            </sinch-table-cell>
            <sinch-table-cell>
              <sinch-text type="s">{value.channel}</sinch-text>
            </sinch-table-cell>
            <sinch-table-cell>
              <sinch-text type="s">{value.comment}</sinch-text>
            </sinch-table-cell>
            <sinch-table-cell>
              <sinch-text type="s">
                {value.active.toString()}
              </sinch-text>
            </sinch-table-cell>
          </sinch-table-row>
        ))}
      </sinch-table-body>
    </sinch-table>
  )
}
