import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/select-button'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/skeleton'
import '@nectary/components/skeleton-item'

const selectStyles: CSSProperties = {
  width: 300,
}
const loadingStyles: CSSProperties = {
  padding: 16,
}

const Loading: FC<{slot: string}> = ({ slot }) => (
  <sinch-skeleton slot={slot} style={loadingStyles}>
    <sinch-skeleton-item size="s"/>
    <sinch-skeleton-item size="s"/>
    <sinch-skeleton-item size="s"/>
  </sinch-skeleton>
)

export const AsyncExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const [data, setData] = useState<string[] | null>(null)
  const [isLoading, setLoading] = useState(false)
  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
    setIsOpen(false)
  }
  const onClose = () => setIsOpen(false)
  const onOpen = async () => {
    setIsOpen(true)

    if (data === null && !isLoading) {
      setLoading(true)

      const res = await fetch('https://unpkg.com/cat-names@3.1.0/cat-names.json')
      const json = await res.json()

      await new Promise((res) => setTimeout(res, 5000))

      setData(json)
      setLoading(false)
    }
  }

  return (
    <sinch-popover
      open={isOpen}
      aria-label="Select"
      orientation="bottom"
      modal
      on-close={onClose}
    >
      <sinch-select-button
        slot="target"
        text={value}
        placeholder="Select option"
        aria-label="Open select"
        style={selectStyles}
        on-click={onOpen}
      />
      {data === null && <Loading slot="content"/>}
      {data !== null && (
        <sinch-select-menu
          slot="content"
          aria-label="Action menu"
          rows={3}
          value={value}
          on-change={onChange}
        >
          {
            data.map((pokemon) => (
              <sinch-select-menu-option
                key={pokemon}
                value={pokemon}
                text={pokemon}
                aria-label={pokemon}
              />
            ))
        }
        </sinch-select-menu>
      )}
    </sinch-popover>
  )
}
