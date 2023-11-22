import { useRef, useState } from 'react'
import type {
  TRichTextareaSelection,
  TSinchRichTextareaElement,
} from '@nectary/components/rich-textarea/types'
import type { FC } from 'react'
import '@nectary/components/rich-textarea'
import '@nectary/components/icon'
import '@nectary/components/popover'
import '@nectary/components/emoji-picker'
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/button'
import '@nectary/components/dialog'

const initialMd = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~😆 account __manager__.

* list item 1
  1. inner item 1
  1. inner item 2
    * list \`LINE\` item 2
    * list item 3
  1. inner item 2
* list item 2
* list item 3
`

type TLinkDialogContent = {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (text: string, href: string) => void,
}

const LinkDialog: FC<TLinkDialogContent> = ({ isOpen, onClose, onSubmit }) => {
  const [text, setText] = useState('')
  const [href, setHref] = useState('')

  const onTextChange = (e: CustomEvent<string>) => setText(e.detail)
  const onHrefChange = (e: CustomEvent<string>) => setHref(e.detail)
  const onSubmitClick = () => {
    setText('')
    setHref('')
    onSubmit(text, href)
  }

  return (
    <sinch-dialog
      caption="Add Link"
      open={isOpen}
      aria-label="Insert link"
      close-aria-label="Close dialog"
      on-close={onClose}
    >
      <div slot="content" style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 382 }}>
        <sinch-field label="Text">
          <sinch-input
            slot="input"
            placeholder="Type text"
            aria-label="Text"
            value={text}
            on-change={onTextChange}
          />
        </sinch-field>
        <sinch-field label="URL">
          <sinch-input
            slot="input"
            placeholder="Type url"
            aria-label="URL"
            value={href}
            on-change={onHrefChange}
          />
        </sinch-field>
      </div>
      <sinch-button
        slot="buttons"
        type="secondary"
        on-click={onClose}
        text="Cancel"
        aria-label="Cancel"
      />
      <sinch-button
        slot="buttons"
        type="primary"
        disabled={text.length === 0 || href.length === 0}
        on-click={onSubmitClick}
        text="Add"
        aria-label="Add"
      />
    </sinch-dialog>
  )
}

const DEFAULT_SELECTION: TRichTextareaSelection = {
  bold: false,
  codetag: false,
  italic: false,
  link: false,
  strikethrough: false,
  olist: false,
  ulist: false,
}

export const RichTextareaExample: FC = () => {
  const [isEmojiOpen, setEmojiOpen] = useState(false)
  const [isLinkOpen, setLinkOpen] = useState(false)
  const [isToolbarVisible, setToolbarVisible] = useState(true)
  const ref = useRef<TSinchRichTextareaElement>(null)
  const [selectionState, setSelectionState] = useState(DEFAULT_SELECTION)
  const [value, setValue] = useState(initialMd)

  const onEditorChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }
  const onEmojiChange = (e: CustomEvent<string>) => {
    setEmojiOpen(false)
    ref.current!.insertText(e.detail)
  }
  const onFormatItalic = () => {
    ref.current!.formatItalic()
  }
  const onFormatBold = () => {
    ref.current!.formatBold()
  }
  const onFormatStrikethrough = () => {
    ref.current!.formatStrikethrough()
  }
  const onFormatCodeTag = () => {
    ref.current!.formatCodeTag()
  }
  const onFormatListBulleted = () => {
    ref.current!.formatUnorderedList()
  }
  const onFormatListNumbered = () => {
    ref.current!.formatOrderedList()
  }
  const onInsertLink = (text: string, href: string) => {
    setLinkOpen(false)
    ref.current!.insertLink(text, href)
  }
  const onSelection = (e: CustomEvent<TRichTextareaSelection>) => {
    setSelectionState(e.detail)
  }
  const onEmojiOpen = () => {
    setEmojiOpen(true)
  }
  const onEmojiClose = () => {
    setEmojiOpen(false)
  }
  const onLinkOpen = () => {
    setLinkOpen(true)
  }
  const onLinkClose = () => {
    setLinkOpen(false)
  }
  const onToggleToolbar = () => {
    setToolbarVisible(!isToolbarVisible)
  }

  return (
    <div>
      <LinkDialog
        isOpen={isLinkOpen}
        onClose={onLinkClose}
        onSubmit={onInsertLink}
      />
      <sinch-rich-textarea
        ref={ref}
        value={value}
        on-change={onEditorChange}
        on-selection={onSelection}
        aria-label="Editor"
        placeholder="Write your message..."
      >
        {isToolbarVisible && (
          <>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.italic}
              aria-label="Format italic"
              on-click={onFormatItalic}
            >
              <sinch-icon slot="icon" name="format_italic"/>
            </sinch-button>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.bold}
              aria-label="Format bold"
              on-click={onFormatBold}
            >
              <sinch-icon slot="icon" name="format_bold"/>
            </sinch-button>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.strikethrough}
              aria-label="Format strikethrough"
              on-click={onFormatStrikethrough}
            >
              <sinch-icon slot="icon" name="format_strikethrough"/>
            </sinch-button>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.codetag}
              aria-label="Format code tag"
              on-click={onFormatCodeTag}
            >
              <sinch-icon slot="icon" name="code"/>
            </sinch-button>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.link}
              aria-label="Insert link"
              on-click={onLinkOpen}
            >
              <sinch-icon slot="icon" name="link"/>
            </sinch-button>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.ulist}
              aria-label="Format list bulleted"
              on-click={onFormatListBulleted}
            >
              <sinch-icon slot="icon" name="format_list_bulleted"/>
            </sinch-button>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.olist}
              aria-label="Format list numbered"
              on-click={onFormatListNumbered}
            >
              <sinch-icon slot="icon" name="format_list_numbered"/>
            </sinch-button>
          </>
        )}
        <sinch-button
          slot="bottom"
          size="s"
          toggled={isToolbarVisible}
          aria-label="Toggle toolbar"
          on-click={onToggleToolbar}
        >
          <sinch-icon slot="icon" name="text_format"/>
        </sinch-button>
        <sinch-popover
          slot="bottom"
          modal
          open={isEmojiOpen}
          orientation="bottom-right"
          aria-label="Emoji input"
          on-close={onEmojiClose}
        >
          <sinch-button
            slot="target"
            size="s"
            aria-label="Open Emoji Picker"
            on-click={onEmojiOpen}
          >
            <sinch-icon slot="icon" name="sentiment_satisfied"/>
          </sinch-button>
          <sinch-emoji-picker
            slot="content"
            aria-label="Emoji Picker"
            on-change={onEmojiChange}
          />
        </sinch-popover>
      </sinch-rich-textarea>
    </div>
  )
}
