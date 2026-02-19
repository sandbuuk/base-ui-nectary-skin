import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Text } from '@nectary/react'
import type { FC } from 'react'

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
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="Name"/>
          <TableHeadCell text="Ticket" align="end"/>
          <TableHeadCell text="Channel"/>
          <TableHeadCell text="Comment"/>
          <TableHeadCell text="Active"/>
        </TableRow>
      </TableHead>

      <TableBody>
        {values.map((value, index) => (
          <TableRow key={index}>
            <TableCell>
              <Text type="s">{value.name}</Text>
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
