import { useState } from 'react'
import { PlaygroundPreview } from './PlaygroundPreview'
import type { FC, ReactNode } from 'react'
import '@nectary/components/accordion'
import '@nectary/components/accordion-item'

interface VerticalLayoutProps {
  editorElement: ReactNode,
  error: string | null,
  previewRefCallback: (node: HTMLDivElement | null) => void,
  isCompiling: boolean,
}

export const VerticalLayout: FC<VerticalLayoutProps> = ({
  editorElement,
  error,
  previewRefCallback,
  isCompiling,
}) => {
  const [openPanels, setOpenPanels] = useState<string>('editor,preview')

  const errorIndicator = error !== null && (
    <span className="playground-error-indicator">Error</span>
  )

  return (
    <sinch-accordion
      multiple
      value={openPanels}
      on-change={(e: CustomEvent<string>) => setOpenPanels(e.detail)}
      class="playground-accordion"
    >
      <sinch-accordion-item value="editor" label="JSX">
        {errorIndicator !== false && (
          <span slot="icon">{errorIndicator}</span>
        )}
        <div slot="content" className="playground-editor-content">
          {editorElement}
        </div>
      </sinch-accordion-item>
      <sinch-accordion-item value="preview" label="Preview">
        <div slot="content" className="playground-preview-content">
          <PlaygroundPreview
            previewRefCallback={previewRefCallback}
            isCompiling={isCompiling}
          />
        </div>
      </sinch-accordion-item>
    </sinch-accordion>
  )
}
