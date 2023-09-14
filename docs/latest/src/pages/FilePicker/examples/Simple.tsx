import type { TSinchFilePickerInvalidType } from '@nectary/components/file-picker/types'
import type { FC } from 'react'
import '@nectary/components/file-picker'
import '@nectary/components/button'

export const SimpleExample: FC = () => {
  const onChange = (e: CustomEvent<File[]>) => {
    console.log(e.detail)
  }
  const onInvalid = (e: CustomEvent<TSinchFilePickerInvalidType>) => {
    console.log(e.detail)
  }

  return (
    <sinch-file-picker on-change={onChange} on-invalid={onInvalid}>
      <sinch-button
        type="cta-secondary"
        text="Choose files"
        aria-label="Choose files to upload"
        size="s"
      />
    </sinch-file-picker>
  )
}
