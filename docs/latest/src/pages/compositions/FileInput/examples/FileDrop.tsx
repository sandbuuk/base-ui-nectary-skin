import { useState } from 'react'
import type { TSinchFileDropInvalidType } from '@nectary/components/file-drop/types'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/field'
import '@nectary/components/file-drop'
import '@nectary/components/file-status'
import '@nectary/components/button'
import '@nectary/components/icon'

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

export const FileDropExample: FC = () => {
  const [files, setFiles] = useState<File[]>([])
  const onChange = (e: CustomEvent<File[]>) => {
    setFiles(e.detail)
  }
  const onInvalid = (e: CustomEvent<TSinchFileDropInvalidType>) => {
    console.log(e.detail)
  }

  return (
    <div style={wrapperStyles}>
      <sinch-field
        label="Upload"
        additionalText="Additonal text"
        optionalText="Optional text"
      >
        <sinch-file-drop
          slot="input"
          placeholder="Drag and drop to upload or"
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
        </sinch-file-drop>
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
                <sinch-icon icons-version="2" name="fa-xmark" slot="icon"/>
              </sinch-button>
            </sinch-file-status>
          ))
        }
      </div>
    </div>
  )
}
