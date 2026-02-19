import { Button, FileDrop } from '@nectary/react'
import type { FC } from 'react'

export const AcceptExample: FC = () => {
  const onChange = (files: File[]) => {
    console.log(files)
  }

  return (
    <FileDrop
      placeholder="Drag and drop to upload or"
      accept="image/png"
      onChange={onChange}
    >
      <Button
        variant="cta-secondary"
        size="s"
        aria-label="Choose files to upload"
      >
        Choose files
      </Button>
    </FileDrop>
  )
}
