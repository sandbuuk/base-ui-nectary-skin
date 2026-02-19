import { Button, Field, FileDrop, type FileDropInvalidType } from '@nectary/react'
import { type FC, useState } from 'react'

const invalidErrors: Record<FileDropInvalidType, string> = {
  accept: 'File type is not accepted',
  multiple: 'Only single file is accepted',
  size: 'The file is too large',
}

export const InvalidExample: FC = () => {
  const [isInvalid, setIsInvalid] = useState(false)
  const [invalidText, setInvalidText] = useState<string>('')

  const onChange = (files: File[]) => {
    setIsInvalid(false)
    setInvalidText('')
    console.log(files)
  }

  const onInvalid = (type: FileDropInvalidType) => {
    setIsInvalid(true)
    setInvalidText(invalidErrors[type] ?? '')
  }

  return (
    <Field label="Upload" invalidText={invalidText}>
      <FileDrop
        placeholder="Drag and drop to upload or"
        accept=".jpg"
        maxSize={1024}
        invalid={isInvalid}
        onChange={onChange}
        onInvalid={onInvalid}
      >
        <Button
          variant="cta-secondary"
          size="s"
          aria-label="Choose files to upload"
        >
          Choose files
        </Button>
      </FileDrop>
    </Field>
  )
}
