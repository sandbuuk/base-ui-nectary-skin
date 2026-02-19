import { Button, Checkbox, HelpTooltip, Icon, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Text } from '@nectary/react'
import type { FC } from 'react'

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
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell
            checkboxContent={<Checkbox aria-label="Checkbox"/>}
          />
          <TableHeadCell text="Ticket" align="end"/>
          <TableHeadCell
            text="Channel"
            fit
            tooltipContent={<HelpTooltip text="Ticket links to the related Jira ticket."/>}
          />
          <TableHeadCell
            text="Additional Comments"
            rightContent={
              <Button aria-label="Sort" icon={<Icon iconsVersion="2" name="fa-arrow-down-long"/>}/>
            }
          />
          <TableHeadCell text="Active"/>
        </TableRow>
      </TableHead>

      <TableBody>
        {values.map((value, index) => (
          <TableRow key={index}>
            <TableCell>
              <Checkbox aria-label="Checkbox"/>
            </TableCell>
            <TableCell align="end">
              <Text type="s">
                {value.ticket}
              </Text>
            </TableCell>
            <TableCell>
              <Text type="s">{value.channel}</Text>
            </TableCell>
            <TableCell>
              <Text type="s">{value.comment}</Text>
            </TableCell>
            <TableCell>
              <Text type="s">
                {value.active.toString()}
              </Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
