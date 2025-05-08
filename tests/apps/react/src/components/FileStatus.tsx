import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/file-status'
import '@nectary/components/text'
import '@nectary/components/progress'
import '@nectary/components/button'
import '@nectary/components/icon'

export const FileStatus: FC = () => {
  const [search] = useComponentSearchParams('file-status')
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
      <sinch-button slot="action" aria-label="Close" size="s">
        <sinch-icon icons-version="2" name="fa-xmark" slot="icon"/>
      </sinch-button>
    </sinch-file-status>
  )
}
