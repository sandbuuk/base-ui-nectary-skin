import type { FC } from 'react'
import '@nectary/components/spinner'

interface PlaygroundPreviewProps {
  previewRefCallback: (node: HTMLDivElement | null) => void,
  isCompiling: boolean,
}

export const PlaygroundPreview: FC<PlaygroundPreviewProps> = ({
  previewRefCallback,
  isCompiling,
}) => {
  return (
    <>
      {isCompiling && (
        <div className="playground-loading-overlay">
          <sinch-spinner size="l"/>
        </div>
      )}
      <div ref={previewRefCallback} className="playground-preview-shadow-host"/>
    </>
  )
}
