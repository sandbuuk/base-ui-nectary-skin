import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/file-status'
import '@nectary/components/icon-button'
import '@nectary/components/text'
import '@nectary/components/progress'
import '@nectary/assets/icons/close'

export const FileStatus: FC = () => {
  const [search] = useSearchParams()
  const type: any = search.get('type')
  const filename = search.get('filename') ?? ''
  const hasDescription = search.get('description') !== null
  const hasProgress = search.get('progress') !== null

  return (
    <sinch-file-status
      type={type}
      filename={filename}
    >
      {hasDescription && (
        <sinch-text slot="content" type="m">The file is too large, try a file size less than 20 MB</sinch-text>
      )}
      {hasProgress && (
        <sinch-progress slot="content" value={73} aria-label="Progress" detailed/>
      )}
      <sinch-icon-button slot="action" aria-label="Close" size="s">
        <sinch-icon-close slot="icon"/>
      </sinch-icon-button>
    </sinch-file-status>
  )
}
