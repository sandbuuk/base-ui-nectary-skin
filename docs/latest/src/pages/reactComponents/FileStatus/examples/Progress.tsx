import { Button, FileStatus, Icon, Progress } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const style: CSSProperties = {
  width: 300,
}

export const ProgressExample: FC = () => (
  <FileStatus
    type="progress"
    filename="image.png"
    style={style}
    action={(
      <Button
        size="s"
        aria-label="Cancel file uploading"
        icon={<Icon name="fa-xmark" iconsVersion="2" size="sm"/>}
        onClick={() => {}}
      />
    )}
    content={<Progress value={30} detailed aria-label="Uploading progress"/>}
  />
)
