import { ColorSwatch, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Text } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const tableStyles: CSSProperties = {
  width: 300,
}

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-gray']
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-gray']
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'gray']
const skinToneColors = ['skintone-default', 'skintone-light', 'skintone-light-medium', 'skintone-medium', 'skintone-medium-dark', 'skintone-dark']
const allColors = [
  ...lightColors,
  ...darkColors,
  ...vibrantColors,
  ...skinToneColors,
]

export const SimpleExample: FC = () => (
  <Table style={tableStyles}>
    <TableHead>
      <TableRow>
        <TableHeadCell align="center">Swatch</TableHeadCell>
        <TableHeadCell align="center">Name</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        allColors.map((name) => (
          <TableRow key={name}>
            <TableCell align="center">
              <ColorSwatch name={name}/>
            </TableCell>
            <TableCell align="center">
              <Text type="m">{name}</Text>
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  </Table>
)
