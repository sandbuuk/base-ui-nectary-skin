import { useEffect, useRef } from 'react'
import type { FC } from 'react'
import '@nectary/components/rich-text'

// Define chip configurations with icons and colors
const chipConfigs: Record<string, { icon: string, color: string }> = {
  JohnDoe: { icon: 'fa-user', color: 'blue' },
  JaneSmith: { icon: 'fa-user-crown', color: 'violet' },
  Priority: { icon: 'fa-flag', color: 'red' },
  Urgent: { icon: 'fa-circle-exclamation', color: 'red' },
  Review: { icon: 'fa-eye', color: 'orange' },
  Done: { icon: 'fa-check', color: 'green' },
}

const markdownWithChips = `Hello {{JohnDoe}} and {{JaneSmith}}, please {{Review}} this task marked as {{Priority}}.

Once complete, mark it as {{Done}}. Any {{Unknown}} chips will use the default chip style.`

export const TagsExample: FC = () => {
  const ref = useRef<HTMLElementTagNameMap['sinch-rich-text']>(null)

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.chipResolver = (chipName: string) => {
        const config = chipConfigs[chipName]

        if (config !== undefined) {
          return { icon: config.icon, color: config.color }
        }

        // Return undefined for unknown chips - they will use the default chip-color
        return undefined
      }
    }
  }, [])

  return (
    <sinch-rich-text
      ref={ref}
      text={markdownWithChips}
      chip-color="violet"
      chip-icon="fa-tag"
    />
  )
}
