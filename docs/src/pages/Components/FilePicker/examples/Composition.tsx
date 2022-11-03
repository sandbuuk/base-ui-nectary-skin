import { useState } from 'react'
import type { TSinchFilePickerInvalidType } from '@sinch-engage/nectary/file-picker/types'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/file-picker'
import '@sinch-engage/nectary/file-status'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '250px',
}

const statusStackStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

export const CompositionExample: FC = () => {
  const [files, setFiles] = useState<File[]>([])
  const onChange = (e: CustomEvent<File[]>) => {
    setFiles(e.detail)
  }
  const onInvalid = (e: CustomEvent<TSinchFilePickerInvalidType>) => {
    console.log(e.detail)
  }

  return (
    <div style={wrapperStyles}>
      <sinch-field
        label="Upload"
        additionalText="Additonal text"
        optionalText="Optional text"
      >
        <sinch-file-picker
          slot="input"
          multiple
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
      </sinch-field>
      <div style={statusStackStyles}>
        {
          files.map((file) => (
            <sinch-file-status
              key={file.name}
              filename={file.name}
              type="loading"
            >
              <sinch-icon-button
                slot="action"
                aria-label="Close"
                small
                on-click={() => {}}
              >
                <sinch-icon-close slot="icon"/>
              </sinch-icon-button>
            </sinch-file-status>
          ))
        }
      </div>
    </div>
  )
}
