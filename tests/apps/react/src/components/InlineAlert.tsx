import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/inline-alert'
import '@nectary/components/button'
import '@nectary/components/icon'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~ account __manager__.

Context *italic __bold__ italic* text
Context **bold _italic_ bold** text.
`

const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
const shortText = 'Lorem Ipsum is dummy text'

const longCaption = 'It has survived not only five centuries, but also the leap into electronic typesetting'
const shortCaption = 'It has survived'

export const InlineAlert: FC = () => {
  const [search] = useComponentSearchParams('inline-alert')
  const type: any = search.get('type') ?? undefined
  const hasClose = search.get('close') !== null
  const action = search.get('action') ?? 'none'
  const example = search.get('example')

  const onCloseFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-close-focus'))
  }
  const onCloseBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-close-blur'))
  }
  const onCloseClick = () => {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-close-click'))
  }
  const onButtonFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-button-focus'))
  }
  const onButtonBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-button-blur'))
  }
  const onButtonClick = () => {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-button-click'))
  }

  let text = shortText
  let caption = shortCaption

  if (example === 'md') {
    text = mdText
  } else if (example === 'long') {
    text = longText
    caption = longCaption
  }

  return (
    <sinch-inline-alert
      type={type}
      text={text}
      caption={caption}
    >
      {hasClose && (
        <sinch-button
          slot="close"
          size="s"
          aria-label="close"
          on-click={onCloseClick}
          on-focus={onCloseFocus}
          on-blur={onCloseBlur}
        >
          <sinch-icon icons-version="2" name="fa-xmark" slot="icon"/>
        </sinch-button>
      )}
      {(action === 'single' || action === 'multiple') && (
        <sinch-button
          slot="action"
          type="cta-secondary"
          size="s"
          text="This is a Button!"
          aria-label="Action"
          on-click={onButtonClick}
          on-focus={onButtonFocus}
          on-blur={onButtonBlur}
        />
      )}
      {(action === 'multiple') && (
        <sinch-button
          slot="action"
          type="cta-secondary"
          size="s"
          text="This is another Button!"
          aria-label="Action"
          on-click={onButtonClick}
          on-focus={onButtonFocus}
          on-blur={onButtonBlur}
        />
      )}
    </sinch-inline-alert>
  )
}
