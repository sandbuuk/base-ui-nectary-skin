import type { FC } from 'react'
import '@sinch-engage/nectary/file-picker'
import '@sinch-engage/nectary/button'

export const MultipleExample: FC = () => {
  const onChange = (e: CustomEvent<File[]>) => {
    console.log(e.detail)
  }

  return (
    <sinch-file-picker multiple on-change={onChange}>
      <sinch-button
        type="cta-secondary"
        text="Choose files"
        aria-label="Choose files to upload"
        small
      />
    </sinch-file-picker>
  )
}
