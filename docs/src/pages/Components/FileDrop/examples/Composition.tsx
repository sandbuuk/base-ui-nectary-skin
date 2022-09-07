import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/file-drop'
import '@sinch-engage/nectary/file-status'
import '@sinch-engage/nectary/button'

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

const statusValues = ['progress', 'success', 'error'] as const

export const CompositionExample: FC = () => {
  const [files, setFiles] = useState<File[]>([])
  const onChange = (e: CustomEvent<File[]>) => {
    setFiles(e.detail)
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
        >
          <sinch-button
            type="cta-secondary"
            text="Choose files"
            aria-label="Choose files to upload"
            small
          />
        </sinch-file-drop>
      </sinch-field>
      <div style={statusStackStyles}>
        {
          files.map((file, i) => (
            <sinch-file-status
              key={file.name}
              filename={file.name}
              type={statusValues[i % 3]}
              close-aria-label="Cancel"
              on-click={() => {}}
            />
          ))
        }
      </div>
    </div>
  )
}
