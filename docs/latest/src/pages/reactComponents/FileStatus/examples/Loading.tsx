import { Button, FileStatus, Icon } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const style: CSSProperties = {
  width: 300,
}

export const LoadingExample: FC = () => (
  <FileStatus
    type="loading"
    filename="image.png"
    style={style}
    action={(
      <Button
        size="s"
        variant="cta-secondary"
        aria-label="Cancel file uploading"
        icon={<Icon name="fa-xmark" iconsVersion="2" size="sm"/>}
        onClick={() => {}}
      />
    )}
  />
)
