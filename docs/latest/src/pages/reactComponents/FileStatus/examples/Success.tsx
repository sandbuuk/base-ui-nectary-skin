import { Button, FileStatus, Icon } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: 300,
}

export const SuccessExample: FC = () => (
  <div style={wrapperStyle}>
    <FileStatus
      type="success"
      filename="image.png"
      action={(
        <Button
          size="s"
          aria-label="Delete file"
          icon={<Icon name="fa-trash" iconsVersion="2" size="sm"/>}
          onClick={() => {}}
        />
      )}
    />
  </div>
)
