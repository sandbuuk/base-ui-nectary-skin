import { useRef, useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/rich-textarea'
import '@nectary/components/button'
import '@nectary/components/icon'
import '@nectary/components/popover'
import '@nectary/components/select-button'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'

const users = ['JohnDoe', 'JaneSmith', 'AliceWonder', 'BobBuilder', 'CharlieChaplin']

export const SlotsExample: FC = () => {
  const ref = useRef<HTMLElementTagNameMap['sinch-rich-textarea']>(null)
  const [value, setValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }

  const onOpenTags = () => {
    setIsOpen(true)
  }

  const onCloseTags = () => {
    setIsOpen(false)
  }

  const onSelectChip = (e: CustomEvent<string>) => {
    ref.current?.insertChip(e.detail)
    setIsOpen(false)
  }

  const onFormatItalic = () => {
    ref.current?.formatItalic()
  }

  const onFormatBold = () => {
    ref.current?.formatBold()
  }

  const onFormatStrikethrough = () => {
    ref.current?.formatStrikethrough()
  }

  const onFormatCodeTag = () => {
    ref.current?.formatCodeTag()
  }

  return (
    <div>
      <sinch-rich-textarea
        ref={ref}
        value={value}
        on-change={onChange}
        aria-label="Editor"
        placeholder="Write your message..."
        chip-color="violet"
      >
        <sinch-button
          slot="top"
          size="s"
          aria-label="Format italic"
          onClick={onFormatItalic}
        >
          <sinch-icon icons-version="2" name="fa-italic" slot="icon"/>
        </sinch-button>
        <sinch-button
          slot="top"
          size="s"
          aria-label="Format bold"
          onClick={onFormatBold}
        >
          <sinch-icon icons-version="2" name="fa-bold" slot="icon"/>
        </sinch-button>
        <sinch-button
          slot="top"
          size="s"
          aria-label="Format strikethrough"
          onClick={onFormatStrikethrough}
        >
          <sinch-icon icons-version="2" name="fa-strikethrough" slot="icon"/>
        </sinch-button>
        <sinch-button
          slot="top"
          size="s"
          aria-label="Format code tag"
          onClick={onFormatCodeTag}
        >
          <sinch-icon icons-version="2" name="fa-code" slot="icon"/>

        </sinch-button>
        <sinch-button
          slot="bottom"
          size="s"
          aria-label="Toggle toolbar"
        >
          <sinch-icon icons-version="2" name="fa-text" slot="icon"/>
        </sinch-button>
        <sinch-button
          slot="bottom"
          size="s"
          aria-label="Open Emoji Picker"
        >
          <sinch-icon icons-version="2" name="fa-face-smile" slot="icon"/>
        </sinch-button>
        <sinch-popover
          slot="bottom"
          open={isOpen}
          aria-label="Select user to chip"
          orientation="top-left"
          modal
          on-close={onCloseTags}
        >
          <sinch-select-button
            slot="target"
            text=""
            placeholder="{{chip}}"
            aria-label="Open chip select"
            size="s"
            on-click={onOpenTags}
          >
            <sinch-icon icons-version="2" name="fa-at" slot="icon"/>
          </sinch-select-button>
          <sinch-select-menu
            slot="content"
            value=""
            aria-label="User menu"
            rows={3}
            on-change={onSelectChip}
            search-placeholder="Search users"
          >
            {users.map((user) => (
              <sinch-select-menu-option
                key={user}
                value={user}
                text={`{{${user}}}`}
                aria-label={`Chip ${user}`}
              />
            ))}
          </sinch-select-menu>
        </sinch-popover>
      </sinch-rich-textarea>
    </div>
  )
}
