import { ActionMenu, ActionMenuOption, Icon } from '@nectary/react'
import type { FC } from 'react'

export const RightIconExample: FC = () => {
  const onClick = () => console.log('click')

  return (
    <ActionMenu aria-label="Action menu">
      <ActionMenuOption
        text="Build"
        aria-label="Build option"
        icon={<Icon name="fa-laptop" iconsVersion="2"/>}
        rightIcon={<Icon name="fa-check" iconsVersion="2"/>}
        onClick={onClick}
      />
      <ActionMenuOption
        text="Engage"
        aria-label="Engage option"
        icon={<Icon name="smartphone" iconsVersion="2"/>}
        onClick={onClick}
      />
      <ActionMenuOption
        text="Explore More"
        aria-label="Explore More option"
        icon={<Icon name="fa-link" iconsVersion="2"/>}
        rightIcon={<Icon name="fa-arrow-up-right-from-square" iconsVersion="2"/>}
        onClick={onClick}
      />
    </ActionMenu>
  )
}
