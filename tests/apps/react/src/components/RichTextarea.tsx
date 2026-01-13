import { useEffect, useRef, useState } from 'react'
import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { TRichTextareaSelection } from '@nectary/components/rich-textarea/types'
import type { FC } from 'react'
import '@nectary/components/rich-textarea'
import '@nectary/components/button'
import '@nectary/components/icon'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~😆 account __manager__ or {{JohnDoe}}.

* list item 1
  1. inner item 1
  1. inner _item 2_
     * list \`LINE\` item 2
     * list __item 3__
  1. inner ___item 2___
* list ~~item 2~~
  * list item 3

1. level 0
   2. level 1
      3. level 2
      3. inner item 2
   2. inner item 2
`

export const RichTextarea: FC = () => {
  const [search] = useComponentSearchParams('rich-textarea')
  const placeholderText = search.get('placeholder') ?? undefined
  const isMarkdownExample = search.get('example') === 'md'
  const hasTop = search.get('top') !== null
  const hasBottom = search.get('bottom') !== null
  const ref = useRef<HTMLElementTagNameMap['sinch-rich-textarea']>(null)
  const [value, setValue] = useState(isMarkdownExample ? mdText : (search.get('value') ?? ''))

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
  const onSelection = (e: CustomEvent<TRichTextareaSelection>) => {
    window.dispatchEvent(new CustomEvent('sinch-rich-textarea-selection', { detail: e.detail }))
  }
  const onEditorChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
    window.dispatchEvent(new CustomEvent('sinch-rich-textarea-change', { detail: e.detail }))
  }
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-rich-textarea-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-rich-textarea-blur'))

  useEffect(() => {
    const insertLink = () => {
      ref.current!.insertLink('link text', 'http://google.com')
    }
    const insertEmoji = () => {
      ref.current!.insertText('👍')
    }
    const formatItalic = () => {
      ref.current!.formatItalic()
    }
    const formatBold = () => {
      ref.current!.formatBold()
    }
    const formatStrikethrough = () => {
      ref.current!.formatStrikethrough()
    }
    const formatCodeTag = () => {
      ref.current!.formatCodeTag()
    }
    const formatOrderedList = () => {
      ref.current!.formatOrderedList()
    }
    const formatUnorderedList = () => {
      ref.current!.formatUnorderedList()
    }

    const ctr = new AbortController()
    const options: AddEventListenerOptions = { signal: ctr.signal }

    window.addEventListener('sinch-rich-textarea-insert-link', insertLink, options)
    window.addEventListener('sinch-rich-textarea-insert-emoji', insertEmoji, options)
    window.addEventListener('sinch-rich-textarea-format-italic', formatItalic, options)
    window.addEventListener('sinch-rich-textarea-format-bold', formatBold, options)
    window.addEventListener('sinch-rich-textarea-format-strikethrough', formatStrikethrough, options)
    window.addEventListener('sinch-rich-textarea-format-codetag', formatCodeTag, options)
    window.addEventListener('sinch-rich-textarea-format-ordered-list', formatOrderedList, options)
    window.addEventListener('sinch-rich-textarea-format-unordered-list', formatUnorderedList, options)

    return () => {
      ctr.abort()
    }
  }, [])

  return (
    <div>
      <sinch-rich-textarea
        ref={ref}
        value={value}
        aria-label="Editor"
        on-selection={onSelection}
        placeholder={placeholderText}
        on-change={onEditorChange}
        on-focus={onFocus}
        on-blur={onBlur}
      >
        {hasTop && (
          <>
            <sinch-button slot="top" size="s" id="format-italic" aria-label="Format italic" on-click={onFormatItalic}>
              <sinch-icon icons-version="2" name="fa-italic" slot="icon"/>
            </sinch-button>
            <sinch-button slot="top" size="s" id="format-bold" aria-label="Format bold" on-click={onFormatBold}>
              <sinch-icon icons-version="2" name="fa-bold" slot="icon"/>
            </sinch-button>
            <sinch-button slot="top" size="s" id="format-strikethrough" aria-label="Format strikethrough" on-click={onFormatStrikethrough}>
              <sinch-icon icons-version="2" name="fa-strikethrough" slot="icon"/>
            </sinch-button>
            <sinch-button slot="top" size="s" id="format-code-tag" aria-label="Format code tag" on-click={onFormatCodeTag}>
              <sinch-icon icons-version="2" name="fa-code" slot="icon"/>
            </sinch-button>
            <sinch-button slot="top" size="s" id="format-ulist" aria-label="Format list bulleted" on-click={onFormatListBulleted}>
              <sinch-icon icons-version="2" name="fa-list-ul" slot="icon"/>
            </sinch-button>
            <sinch-button slot="top" size="s" id="format-olist" aria-label="Format list numbered" on-click={onFormatListNumbered}>
              <sinch-icon icons-version="2" name="fa-list-ol" slot="icon"/>
            </sinch-button>
          </>
        )}

        {hasBottom && (
          <>
            <sinch-button slot="bottom" size="s" aria-label="Attach files">
              <sinch-icon icons-version="2" name="fa-folder" slot="icon"/>
            </sinch-button>
            <sinch-button slot="bottom" size="s" aria-label="Variables">
              <sinch-icon icons-version="2" name="fa-brackets-curly" slot="icon"/>
            </sinch-button>
            <sinch-button slot="bottom" size="s" aria-label="Options">
              <sinch-icon icons-version="2" name="fa-ellipsis" slot="icon"/>
            </sinch-button>
            <sinch-button
              slot="bottom"
              type="primary"
              size="s"
              aria-label="Send"
              text="Send"
              style={{ marginLeft: 'auto' }}
            >
              <sinch-icon icons-version="2" name="fa-paper-plane-top" slot="right-icon"/>
            </sinch-button>
          </>
        )}
      </sinch-rich-textarea>
    </div>
  )
}
