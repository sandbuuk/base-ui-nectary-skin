import { Button, FilePicker } from '@nectary/react'
import type { FC } from 'react'

export const MultipleExample: FC = () => {
  const handleChange = (files: File[]) => {
    console.log(files)
  }

  return (
    <FilePicker multiple onChange={handleChange}>
      <Button variant="cta-secondary" size="s">
        Choose files
      </Button>
    </FilePicker>
  )
}
