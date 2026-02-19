import { List, ListItem, Text } from '@nectary/react'
import type { FC } from 'react'

export const SimpleExample: FC = () => (
  <List>
    <ListItem>
      <Text type="m">Lorem ipsum</Text>
    </ListItem>
    <ListItem>
      <Text type="m">Lorem ipsum</Text>
    </ListItem>
    <ListItem>
      <Text type="m">Lorem ipsum</Text>
    </ListItem>
  </List>
)
