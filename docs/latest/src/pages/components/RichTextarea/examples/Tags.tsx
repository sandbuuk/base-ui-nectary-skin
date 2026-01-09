import { useEffect, useRef, useState } from 'react'
import type { TSinchIcons } from '@nectary/components/icon'
import type { FC } from 'react'
import '@nectary/components/rich-textarea'
import '@nectary/components/button'
import '@nectary/components/popover'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'

// Define tag configurations with icons and colors
const tagConfigs: Record<string, { icon: TSinchIcons, color: string }> = {
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

const chipNames = Object.keys(tagConfigs)

export const TagsExample: FC = () => {
  const ref = useRef<HTMLElementTagNameMap['sinch-rich-textarea']>(null)
  const popoverRef = useRef<HTMLElementTagNameMap['sinch-popover']>(null)
  const targetRef = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(
    'Hello {{JohnDoe}}, please {{Review}} this task marked as {{Priority}}.'
  )
  const [isOpen, setIsOpen] = useState(false)

  // Set up the chip resolver and keyboard listener when the component mounts
  useEffect(() => {
    if (ref.current !== null) {
      ref.current.chipResolver = (tagName: string) => {
        const config = tagConfigs[tagName]

        if (config !== undefined) {
          return { icon: config.icon, color: config.color }
        }

        // Return undefined for unknown tags - they will use the default chip-color
        return undefined
      }

      // Listen for "@" key to open chip menu
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === '@' || (e.shiftKey && e.key === '2')) {
          e.preventDefault()

          // Position the popover target at the cursor position using getCaretRect
          if (ref.current !== null && targetRef.current !== null) {
            const caretRect = ref.current.getCaretRect()

            if (caretRect !== null) {
              // Use fixed positioning with viewport coordinates
              targetRef.current.style.left = `${caretRect.left}px`
              targetRef.current.style.top = `${caretRect.bottom}px`
            }
          }

          setIsOpen(true)
        }
      }

      ref.current.addEventListener('keydown', handleKeyDown)

      return () => {
        ref.current?.removeEventListener('keydown', handleKeyDown)
      }
    }

    return undefined
  }, [])

  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }

  const onClosePopover = () => {
    setIsOpen(false)
    ref.current?.focus()
  }

  const onSelectChip = (e: CustomEvent<string>) => {
    ref.current?.insertChip(e.detail)
    setIsOpen(false)
    ref.current?.focus()
  }

  const insertTag = (tagName: string) => {
    ref.current?.insertChip(tagName)
  }

  return (
    <div style={{ position: 'relative' }}>
      <sinch-rich-textarea
        ref={ref}
        value={value}
        on-change={onChange}
        aria-label="Editor with tags"
        placeholder="Type @ to insert a chip..."
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
      <sinch-popover
        ref={popoverRef}
        open={isOpen}
        aria-label="Select chip to insert"
        orientation="bottom-left"
        allow-scroll
        on-close={onClosePopover}
      >
        <span
          ref={targetRef}
          slot="target"
          style={{ position: 'fixed', width: '1px', height: '1px', pointerEvents: 'none', visibility: 'hidden' }}
        />
        <sinch-select-menu
          slot="content"
          value=""
          aria-label="Chip menu"
          rows={5}
          on-change={onSelectChip}
          search-placeholder="Search chips..."
        >
          {chipNames.map((name) => (
            <sinch-select-menu-option
              key={name}
              value={name}
              text={name}
              aria-label={`Insert ${name}`}
            >
              <sinch-icon
                icons-version="2"
                name={tagConfigs[name].icon}
                slot="icon"
              />
            </sinch-select-menu-option>
          ))}
        </sinch-select-menu>
      </sinch-popover>
      <p style={{ marginTop: '1rem', fontFamily: 'monospace', fontSize: '0.875rem' }}>
        <strong>Markdown output:</strong> {value}
      </p>
    </div>
  )
}
