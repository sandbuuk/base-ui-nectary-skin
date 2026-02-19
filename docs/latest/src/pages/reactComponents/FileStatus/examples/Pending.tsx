import { Button, FileStatus, Icon } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const style: CSSProperties = {
  width: 300,
}

export const PendingExample: FC = () => (
  <FileStatus
    type="pending"
    filename="image.png"
    style={style}
    action={(
      <Button
        size="s"
        aria-label="Remove file"
        icon={<Icon name="fa-xmark" iconsVersion="2" size="sm"/>}
        onClick={() => {}}
      />
    )}
  />
)
