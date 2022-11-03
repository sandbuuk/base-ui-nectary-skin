import type { TSinchFilePickerInvalidType } from '@sinch-engage/nectary/file-picker/types'
import type { FC } from 'react'
import '@sinch-engage/nectary/file-picker'
import '@sinch-engage/nectary/button'

export const AcceptExample: FC = () => {
  const onChange = (e: CustomEvent<File[]>) => {
    console.log(e.detail)
  }
  const onInvalid = (e: CustomEvent<TSinchFilePickerInvalidType>) => {
    console.log(e.detail)
  }

  return (
    <sinch-file-picker
      accept="image/png"
      on-change={onChange}
      on-invalid={onInvalid}
    >
      <sinch-button
        type="cta-secondary"
        text="Choose files"
        aria-label="Choose files to upload"
        small
      />
    </sinch-file-picker>
  )
}
