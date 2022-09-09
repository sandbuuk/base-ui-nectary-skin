import { useState } from 'react'
import type { TSinchFileDropInvalidType } from '@sinch-engage/nectary/file-drop/types'
import type { FC } from 'react'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/file-drop'
import '@sinch-engage/nectary/button'

const invalidErrors: Record<TSinchFileDropInvalidType, string> = {
  accept: 'File type is not accepted',
  multiple: 'Only single file is accepted',
  size: 'The file is too large',
}

export const InvalidExample: FC = () => {
  const [isInvalid, setIsInvalid] = useState(false)
  const [invalidText, setInvalidText] = useState<string>('')
  const onChange = (e: CustomEvent<File[]>) => {
    setIsInvalid(false)
    setInvalidText('')
    console.log(e.detail)
  }
  const onInvalid = (e: CustomEvent<TSinchFileDropInvalidType>) => {
    setIsInvalid(true)
    setInvalidText(invalidErrors[e.detail] ?? '')
  }

  return (
    <sinch-field label="Upload" invalidText={invalidText}>
      <sinch-file-drop
        slot="input"
        placeholder="Drag and drop to upload or"
        accept=".jpg"
        size={1024}
        invalid={isInvalid}
        on-change={onChange}
        on-invalid={onInvalid}
      >
        <sinch-button
          type="cta-secondary"
          text="Choose files"
          aria-label="Choose files to upload"
          small
        />
      </sinch-file-drop>
    </sinch-field>
  )
}
