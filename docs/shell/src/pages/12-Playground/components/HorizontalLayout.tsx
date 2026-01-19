import { useState } from 'react'
import { PlaygroundPreview } from './PlaygroundPreview'
import type { FC, ReactNode } from 'react'
import '@nectary/components/tabs'
import '@nectary/components/tabs-option'

interface HorizontalLayoutProps {
  editorElement: ReactNode,
  previewRefCallback: (node: HTMLDivElement | null) => void,
  isCompiling: boolean,
}

export const HorizontalLayout: FC<HorizontalLayoutProps> = ({
  editorElement,
  previewRefCallback,
  isCompiling,
}) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor')

  return (
    <div className="playground-horizontal-layout">
      <div className="playground-horizontal-pane">
        <sinch-tabs
          value={activeTab}
          on-change={(e: CustomEvent<string>) => setActiveTab(e.detail as 'editor' | 'preview')}
          aria-label="Editor tabs"
          class="playground-horizontal-tabs"
        >
          <sinch-tabs-option value="editor" text="JSX" aria-label="JSX Editor"/>
        </sinch-tabs>
        <div className="playground-horizontal-editor">
          {editorElement}
        </div>
      </div>
      <div className="playground-horizontal-pane">
        <sinch-tabs
          value="preview"
          aria-label="Preview tabs"
          class="playground-horizontal-tabs"
        >
          <sinch-tabs-option value="preview" text="Preview" aria-label="Preview"/>
        </sinch-tabs>
        <div className="playground-horizontal-preview">
          <PlaygroundPreview
            previewRefCallback={previewRefCallback}
            isCompiling={isCompiling}
          />
        </div>
      </div>
    </div>
  )
}
