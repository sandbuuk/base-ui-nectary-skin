import { Button, FilePicker } from '@nectary/react'
import type { FC } from 'react'

export const SimpleExample: FC = () => {
  const handleChange = (files: File[]) => {
    console.log(files)
  }

  return (
    <FilePicker onChange={handleChange}>
      <Button variant="cta-secondary" size="s">
        Choose files
      </Button>
    </FilePicker>
  )
}
