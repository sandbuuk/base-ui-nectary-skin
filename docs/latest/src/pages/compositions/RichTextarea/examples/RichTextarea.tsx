import { useRef, useState } from 'react'
import type {
  TRichTextareaSelection,
} from '@nectary/components/rich-textarea/types'
import type { FC } from 'react'
import '@nectary/components/rich-textarea'
import '@nectary/components/popover'
import '@nectary/components/emoji-picker'
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/button'
import '@nectary/components/dialog'
import '@nectary/components/icon'
import '@nectary/components/select-button'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'

const initialMd = `
To set up the \`Product\`, read and accept 📝 the \`Product\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your account __manager__ ✅.

You can also use tags, e.g. to mention users like {{JohnDoe}} or {{JaneSmith}} in your text.

* list item 1 😀
  1. inner item 1
  1. inner item 2 🚧
    * list \`item\` 2
    * list item 3
  1. inner item 2
* list item 2
* list item 3
`

const users = ['JohnDoe', 'JaneSmith', 'AliceWonder', 'BobBuilder', 'CharlieChaplin', 'JamesBond', 'DianaPrince', 'BruceWayne', 'ClarkKent', 'PeterParker']

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
  tag: false,
}

export const RichTextareaExample: FC = () => {
  const [isEmojiOpen, setEmojiOpen] = useState(false)
  const [isLinkOpen, setLinkOpen] = useState(false)
  const [isMentionOpen, setMentionOpen] = useState(false)
  const [isToolbarVisible, setToolbarVisible] = useState(true)
  const ref = useRef<HTMLElementTagNameMap['sinch-rich-textarea']>(null)
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
  const onMentionOpen = () => {
    setMentionOpen(true)
  }
  const onMentionClose = () => {
    setMentionOpen(false)
  }
  const onSelectMention = (e: CustomEvent<string>) => {
    ref.current!.insertMention(e.detail)
    setMentionOpen(false)
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
        chip-color="violet"
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
              <sinch-icon icons-version="2" name="fa-italic" slot="icon"/>
            </sinch-button>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.bold}
              aria-label="Format bold"
              on-click={onFormatBold}
            >
              <sinch-icon icons-version="2" name="fa-bold" slot="icon"/>
            </sinch-button>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.strikethrough}
              aria-label="Format strikethrough"
              on-click={onFormatStrikethrough}
            >
              <sinch-icon icons-version="2" name="fa-strikethrough" slot="icon"/>
            </sinch-button>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.codetag}
              aria-label="Format code tag"
              on-click={onFormatCodeTag}
            >
              <sinch-icon icons-version="2" name="fa-code" slot="icon"/>
            </sinch-button>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.link}
              aria-label="Insert link"
              on-click={onLinkOpen}
            >
              <sinch-icon icons-version="2" name="fa-link" slot="icon"/>
            </sinch-button>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.ulist}
              aria-label="Format list bulleted"
              on-click={onFormatListBulleted}
            >
              <sinch-icon icons-version="2" name="fa-list-ul" slot="icon"/>
            </sinch-button>
            <sinch-button
              slot="top"
              size="s"
              toggled={selectionState.olist}
              aria-label="Format list numbered"
              on-click={onFormatListNumbered}
            >
              <sinch-icon icons-version="2" name="fa-list-ol" slot="icon"/>
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
          <sinch-icon icons-version="2" name="fa-text" slot="icon"/>
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
            <sinch-icon icons-version="2" name="fa-face-smile" slot="icon"/>
          </sinch-button>
          <sinch-emoji-picker
            slot="content"
            aria-label="Emoji Picker"
            on-change={onEmojiChange}
          />
        </sinch-popover>
        <sinch-popover
          slot="bottom"
          open={isMentionOpen}
          aria-label="Select user to mention"
          orientation="top-left"
          modal
          on-close={onMentionClose}
        >
          <sinch-select-button
            slot="target"
            text=""
            placeholder="User name..."
            aria-label="Open mention select"
            size="s"
            on-click={onMentionOpen}
          >
            <sinch-icon icons-version="2" name="fa-at" slot="icon"/>
          </sinch-select-button>
          <sinch-select-menu
            slot="content"
            value=""
            aria-label="User menu"
            rows={3}
            on-change={onSelectMention}
            search-placeholder="Search users"
          >
            {users.map((user) => (
              <sinch-select-menu-option
                key={user}
                value={user}
                text={user}
                aria-label={`Mention ${user}`}
              />
            ))}
          </sinch-select-menu>
        </sinch-popover>
      </sinch-rich-textarea>
      <div>
        Raw markdown value: <br/>
        <pre>{value}</pre>

      </div>
    </div>
  )
}
