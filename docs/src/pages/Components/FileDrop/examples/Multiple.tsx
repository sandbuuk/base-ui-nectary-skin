import type { FC } from 'react'
import '@sinch-engage/nectary/file-drop'
import '@sinch-engage/nectary/button'

export const MultipleExample: FC = () => {
  const onChange = (e: CustomEvent<File[]>) => {
    console.log(e.detail)
  }

  return (
    <sinch-file-drop
      placeholder="Drag and drop to upload or"
      multiple
      on-change={onChange}
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
