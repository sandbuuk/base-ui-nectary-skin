import type { FC } from 'react'
import '@nectary/components/file-drop'
import '@nectary/components/button'

type TFileDrop = {
  search: URLSearchParams,
}

export const FileDrop: FC<TFileDrop> = ({ search }) => {
  const isMultiple = search.get('multiple') !== null
  const isInvalid = search.get('invalid') !== null
  const isDisabled = search.get('disabled') !== null
  const accept = search.get('accept') ?? undefined
  const onChange = (e: CustomEvent<File[]>) => {
    window.dispatchEvent(new CustomEvent('sinch-file-drop-change', { detail: e.detail }))
  }
  const onInvalid = (e: CustomEvent<string>) => {
    window.dispatchEvent(new CustomEvent('sinch-file-drop-invalid', { detail: e.detail }))
  }

  return (
    <sinch-file-drop
      multiple={isMultiple}
      invalid={isInvalid}
      disabled={isDisabled}
      accept={accept}
      on-change={onChange}
      on-invalid={onInvalid}
      placeholder="Drag and drop to upload or"
    >
      <sinch-button
        type="cta-secondary"
        size="s"
        text="Choose files"
        aria-label="Choose files"
        disabled={isDisabled}
      />
    </sinch-file-drop>
  )
}
