import type { FC } from 'react'
import '@sinch-engage/nectary/file-status'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/progress'
import '@sinch-engage/nectary-assets/icons/close'

type TFileStatus = {
  search: URLSearchParams,
}

export const FileStatus: FC<TFileStatus> = ({ search }) => {
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
