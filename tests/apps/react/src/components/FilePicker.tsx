import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/file-picker'
import '@nectary/components/button'
import '@nectary/components/icon'

export const FilePicker: FC = () => {
  const [search] = useComponentSearchParams('file-picker')
  const isMultiple = search.get('multiple') !== null
  const accept = search.get('accept') ?? undefined
  const onChange = (e: CustomEvent<File[]>) => {
    window.dispatchEvent(new CustomEvent('sinch-file-picker-change', { detail: e.detail }))
  }
  const onInvalid = (e: CustomEvent<string>) => {
    window.dispatchEvent(new CustomEvent('sinch-file-picker-invalid', { detail: e.detail }))
  }

  return (
    <sinch-file-picker
      multiple={isMultiple}
      accept={accept}
      on-change={onChange}
      on-invalid={onInvalid}
    >
      <sinch-button
        text="Choose files"
        type="secondary"
        aria-label="Button"
      >
        <sinch-icon icons-version="2" name="fa-arrow-up-from-line" slot="left-icon"/>
      </sinch-button>
    </sinch-file-picker>
  )
}
