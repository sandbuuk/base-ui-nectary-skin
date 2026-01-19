import { useCallback, useState } from 'react'
import { EXAMPLES } from '../utils/examples'
import type { LayoutType } from '../hooks'
import type { FC } from 'react'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/button'
import '@nectary/components/icon'
import '@nectary/components/popover'
import '@nectary/components/title'

interface PlaygroundHeaderProps {
  layout: LayoutType,
  error: string | null,
  onLayoutToggle: () => void,
  onReset: () => void,
  onCopyUrl: () => void,
  onExampleChange: (example: string) => void,
}

export const PlaygroundHeader: FC<PlaygroundHeaderProps> = ({
  layout,
  error,
  onLayoutToggle,
  onReset,
  onCopyUrl,
  onExampleChange,
}) => {
  const [examplesOpen, setExamplesOpen] = useState(false)

  const handleExampleClick = useCallback((name: string) => {
    onExampleChange(name)
    setExamplesOpen(false)
  }, [onExampleChange])

  const errorIndicator = error !== null && (
    <span className="playground-error-indicator">Error</span>
  )

  return (
    <header className="playground-header">
      <div className="playground-header-left">
        <sinch-title text="Playground" type="m" level="1"/>
        {layout === 'horizontal' && errorIndicator}
        <sinch-popover
          open={examplesOpen}
          orientation="bottom-left"
          on-close={() => setExamplesOpen(false)}
          aria-label="Examples menu"
        >
          <sinch-button
            slot="target"
            type="secondary"
            text="Load example..."
            aria-label="Load example"
            on-click={() => setExamplesOpen((v) => !v)}
            size="s"
          >
            <sinch-icon slot="icon-right" icons-version="2" name="fa-chevron-down"/>
          </sinch-button>
          <sinch-action-menu slot="content" aria-label="Examples">
            {Object.keys(EXAMPLES).map((name) => (
              <sinch-action-menu-option
                key={name}
                text={name}
                aria-label={name}
                on-click={() => handleExampleClick(name)}
              />
            ))}
          </sinch-action-menu>
        </sinch-popover>
      </div>
      <div className="playground-header-right">
        <sinch-button
          size="s"
          type="tertiary"
          aria-label={layout === 'vertical' ? 'Switch to horizontal layout' : 'Switch to vertical layout'}
          on-click={onLayoutToggle}
        >
          <sinch-icon slot="icon" icons-version="2" name={layout === 'vertical' ? 'fa-table-columns' : 'fa-table-rows'}/>
        </sinch-button>
        <sinch-button size="s" type="secondary" text="Reset" aria-label="Reset code" on-click={onReset}/>
        <sinch-button size="s" type="cta-primary" text="Copy URL" aria-label="Copy URL to clipboard" on-click={onCopyUrl}>
          <sinch-icon slot="icon" icons-version="2" name="fa-link"/>
        </sinch-button>
      </div>
    </header>
  )
}
