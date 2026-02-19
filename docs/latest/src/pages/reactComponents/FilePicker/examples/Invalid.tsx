import { Button, Field, FilePicker } from '@nectary/react'
import { useState } from 'react'
import type { FilePickerInvalidType } from '@nectary/react'
import type { FC } from 'react'

const invalidErrors: Record<FilePickerInvalidType, string> = {
  size: 'The file is too large',
}

export const InvalidExample: FC = () => {
  const [invalidText, setInvalidText] = useState<string>('')

  const handleChange = (files: File[]) => {
    setInvalidText('')
    console.log(files)
  }

  const handleInvalid = (type: FilePickerInvalidType) => {
    setInvalidText(invalidErrors[type] ?? '')
  }

  return (
    <Field label="Upload" invalidText={invalidText}>
      <FilePicker maxSize={1024} onChange={handleChange} onInvalid={handleInvalid}>
        <Button variant="cta-secondary" size="s">
          Choose files
        </Button>
      </FilePicker>
    </Field>
  )
}
