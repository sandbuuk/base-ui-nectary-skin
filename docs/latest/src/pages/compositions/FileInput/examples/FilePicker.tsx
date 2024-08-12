import { useState } from 'react'
import type { TSinchFilePickerInvalidType } from '@nectary/components/file-picker/types'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/field'
import '@nectary/components/file-picker'
import '@nectary/components/file-status'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-xmark'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '400px',
}

const statusStackStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

export const FilePickerExample: FC = () => {
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
            size="s"
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
              <sinch-button
                slot="action"
                aria-label="Close"
                size="s"
                on-click={() => { }}
              >
                <sinch-icon-fa-xmark slot="icon"/>
              </sinch-button>
            </sinch-file-status>
          ))
        }
      </div>
    </div>
  )
}
