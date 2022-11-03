import type { TSinchFileDropInvalidType } from '@sinch-engage/nectary/file-drop/types'
import type { FC } from 'react'
import '@sinch-engage/nectary/file-drop'
import '@sinch-engage/nectary/button'

export const SimpleExample: FC = () => {
  const onChange = (e: CustomEvent<File[]>) => {
    console.log(e.detail)
  }
  const onInvalid = (e: CustomEvent<TSinchFileDropInvalidType>) => {
    console.log(e.detail)
  }

  return (
    <sinch-file-drop
      placeholder="Drag and drop to upload or"
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
  )
}
