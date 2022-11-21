import { useState } from 'react'
import type { TSinchFilePickerInvalidType } from '@sinch-engage/nectary/file-picker/types'
import type { FC } from 'react'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/file-drop'
import '@sinch-engage/nectary/button'

const invalidErrors: Record<TSinchFilePickerInvalidType, string> = {
  size: 'The file is too large',
}

export const InvalidExample: FC = () => {
  const [invalidText, setInvalidText] = useState<string>('')
  const onChange = (e: CustomEvent<File[]>) => {
    setInvalidText('')
    console.log(e.detail)
  }
  const onInvalid = (e: CustomEvent<TSinchFilePickerInvalidType>) => {
    setInvalidText(invalidErrors[e.detail] ?? '')
  }

  return (
    <sinch-field label="Upload" invalidText={invalidText}>
      <sinch-file-picker
        slot="input"
        size={1024}
        on-change={onChange}
        on-invalid={onInvalid}
      >
        <sinch-button
          type="cta-secondary"
          text="Choose files"
          aria-label="Choose files to upload"
          size="s"
        />
      </sinch-file-picker>
    </sinch-field>
  )
}
