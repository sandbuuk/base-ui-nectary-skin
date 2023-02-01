import { useState } from 'react'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/select-button'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import type { FC } from 'react'
import { useNavigateVersion } from '~/hooks'
import { versionKeys } from '~/utils/verions'

type TVersionSelect = {}

export const VersionSelect: FC<TVersionSelect> = () => {
  const { versionValue, setVersionValue } = useNavigateVersion()
  const [isOpen, setOpen] = useState(false)

  return (
    <sinch-popover
      open={isOpen}
      modal
      orientation="bottom"
      aria-label="version dropdown"
      on-close={() => setOpen(false)}
    >
      <sinch-select-button
        id="select-version"
        slot="target"
        size="s"
        placeholder="Version"
        text={versionValue}
        aria-label="select version"
        on-click={() => setOpen(true)}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
      />
      <sinch-select-menu
        slot="content"
        aria-label="version menu"
        value={versionValue}
        on-change={(e) => {
          setOpen(false)
          setVersionValue(e.detail)
        }}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        {versionKeys.map((version) => (
          <sinch-select-menu-option
            key={version}
            value={version}
            text={version}
            aria-label={version}
          />
        ))}
      </sinch-select-menu>
    </sinch-popover>
  )
}
