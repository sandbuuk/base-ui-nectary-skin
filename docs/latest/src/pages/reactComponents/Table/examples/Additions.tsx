import { Icon, Link, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Text, Toggle } from '@nectary/react'
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

export const AdditionsExample: FC = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="Name"/>
          <TableHeadCell text="Ticket"/>
          <TableHeadCell text="Channel"/>
          <TableHeadCell text="Comment"/>
          <TableHeadCell text="Active"/>
          <TableHeadCell text="Open"/>
        </TableRow>
      </TableHead>

      <TableBody>
        {values.map((value, index) => (
          <TableRow key={index}>
            <TableCell>
              <Text type="s">{value.name}</Text>
            </TableCell>
            <TableCell>
              <Link text="Link" href="#" aria-label="Link"/>
            </TableCell>
            <TableCell>
              <Text type="s">{value.channel}</Text>
            </TableCell>
            <TableCell>
              <Text type="s">{value.comment}</Text>
            </TableCell>
            <TableCell>
              <Toggle aria-label="Toggle"/>
            </TableCell>
            <TableCell>
              <Icon iconsVersion="2" name="fa-arrow-up-right-from-square"/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
