import type { FC } from 'react'
import '@nectary/components/table'
import '@nectary/components/table-head'
import '@nectary/components/table-row'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-cell'
import '@nectary/components/table-body'
import '@nectary/components/text'

const values = [
  {
    name: 'John Doe',
    ticket: 123452,
    channel: 'Email',
    comment: 'Lorem Ipsum',
    active: true,
  },
  {
    name: 'Jane Doe',
    ticket: 456222,
    channel: 'Phone',
    comment: 'Lorem Ipsum is simply dummy text',
    active: false,
  },
  {
    name: 'Alice Doe',
    ticket: 7893443000,
    channel: 'Chat',
    comment: 'Lorem Ipsum',
    active: true,
  },
  {
    name: 'Bob Doe',
    ticket: 123110,
    channel: 'Email',
    comment: 'Lorem Ipsum is simply dummy text',
    active: false,
  },
  {
    name: 'Charlie Doe',
    ticket: 345717,
    channel: 'Phone',
    comment: 'Lorem Ipsum',
    active: true,
  },
]

export const SimpleExample: FC = () => {
  return (
    <sinch-table>
      <sinch-table-head>
        <sinch-table-row>
          <sinch-table-head-cell text="Name"/>
          <sinch-table-head-cell text="Ticket" align="end"/>
          <sinch-table-head-cell text="Channel"/>
          <sinch-table-head-cell text="Comment"/>
          <sinch-table-head-cell text="Active"/>
        </sinch-table-row>
      </sinch-table-head>

      <sinch-table-body>
        {values.map((value, index) => (
          <sinch-table-row key={index}>
            <sinch-table-cell>
              <sinch-text type="s">{value.name}</sinch-text>
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
