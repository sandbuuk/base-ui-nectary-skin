import { Button, FileStatus, Icon, Text } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: 300,
}

export const ErrorExample: FC = () => (
  <div style={wrapperStyle}>
    <FileStatus
      type="error"
      filename="image.png"
      action={(
        <Button
          size="s"
          variant="cta-secondary"
          aria-label="Remove file"
          icon={<Icon name="fa-xmark" iconsVersion="2" size="sm"/>}
          onClick={() => {}}
        />
      )}
      content={<Text type="m">Invalid file, try another one</Text>}
    />
    <FileStatus
      type="error"
      filename="image.png"
      action={(
        <Button
          size="s"
          variant="cta-secondary"
          aria-label="Try again"
          icon={<Icon name="fa-arrow-rotate-right" iconsVersion="2" size="sm"/>}
          onClick={() => {}}
        />
      )}
      content={<Text type="m">Error, try again</Text>}
    />
  </div>
)
