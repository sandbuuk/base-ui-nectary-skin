import { useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/rich-textarea'
import '@nectary/components/button'
import '@nectary/components/icon'

// Define tag configurations with icons and colors
const tagConfigs: Record<string, { icon: string, color: string }> = {
  JohnDoe: { icon: 'fa-user', color: 'blue' },
  JaneSmith: { icon: 'fa-user-crown', color: 'violet' },
  AliceWonder: { icon: 'fa-user-astronaut', color: 'teal' },
  BobBuilder: { icon: 'fa-user-helmet-safety', color: 'yellow' },
  CharlieChaplin: { icon: 'fa-user-tie', color: 'neutral' },
  Priority: { icon: 'fa-flag', color: 'red' },
  Urgent: { icon: 'fa-circle-exclamation', color: 'red' },
  Review: { icon: 'fa-eye', color: 'orange' },
  Done: { icon: 'fa-check', color: 'green' },
}

export const TagsExample: FC = () => {
  const ref = useRef<HTMLElementTagNameMap['sinch-rich-textarea']>(null)
  const [value, setValue] = useState(
    'Hello {{JohnDoe}}, please {{Review}} this task marked as {{Priority}}.'
  )

  // Set up the chip resolver when the component mounts
  useEffect(() => {
    if (ref.current !== null) {
      ref.current.chipResolver = (tagName: string) => {
        const config = tagConfigs[tagName]

        if (config !== null) {
          return { icon: config.icon, color: config.color }
        }

        // Return undefined for unknown tags - they will use the default chip-color
        return undefined
      }
    }
  }, [])

  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }

  const insertTag = (tagName: string) => {
    ref.current?.insertChip(tagName)
  }

  return (
    <div>
      <sinch-rich-textarea
        ref={ref}
        value={value}
        on-change={onChange}
        aria-label="Editor with tags"
        placeholder="Write your message..."
        chip-color="blue"
      >
        <sinch-button
          slot="bottom"
          size="s"
          aria-label="Insert JohnDoe"
          onClick={() => insertTag('JohnDoe')}
        >
          <sinch-icon icons-version="2" name="fa-user" slot="icon"/>
          JohnDoe
        </sinch-button>
        <sinch-button
          slot="bottom"
          size="s"
          aria-label="Insert Priority"
          onClick={() => insertTag('Priority')}
        >
          <sinch-icon icons-version="2" name="fa-flag" slot="icon"/>
          Priority
        </sinch-button>
        <sinch-button
          slot="bottom"
          size="s"
          aria-label="Insert Review"
          onClick={() => insertTag('Review')}
        >
          <sinch-icon icons-version="2" name="fa-eye" slot="icon"/>
          Review
        </sinch-button>
        <sinch-button
          slot="bottom"
          size="s"
          aria-label="Insert Done"
          onClick={() => insertTag('Done')}
        >
          <sinch-icon icons-version="2" name="fa-check" slot="icon"/>
          Done
        </sinch-button>
      </sinch-rich-textarea>
      <p style={{ marginTop: '1rem', fontFamily: 'monospace', fontSize: '0.875rem' }}>
        <strong>Markdown output:</strong> {value}
      </p>
    </div>
  )
}
