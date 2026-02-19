import { ActionMenu, ActionMenuOption, Icon } from '@nectary/react'
import type { FC } from 'react'

export const SimpleExample: FC = () => {
  const onClick = () => console.log('click')

  return (
    <ActionMenu aria-label="Action menu">
      <ActionMenuOption
        text="Laptop"
        aria-label="Laptop option"
        icon={<Icon name="fa-laptop" iconsVersion="2"/>}
        onClick={onClick}
      />
      <ActionMenuOption
        text="Smartphone"
        aria-label="Smartphone option"
        icon={<Icon name="smartphone" iconsVersion="2"/>}
        onClick={onClick}
      />
      <ActionMenuOption
        text="Tablet"
        aria-label="Tablet option"
        icon={<Icon name="fa-tablet" iconsVersion="2"/>}
        disabled
        onClick={onClick}
      />
      <ActionMenuOption
        text="Watch"
        aria-label="Watch option"
        icon={<Icon name="fa-watch-smart" iconsVersion="2"/>}
        onClick={onClick}
      />
    </ActionMenu>
  )
}
