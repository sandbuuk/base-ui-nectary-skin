import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/alert'
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

export const Alert: FC = () => {
  const [search] = useSearchParams()
  const type: any = search.get('type') ?? undefined
  const hasAction = search.get('action') !== null
  const hasClose = search.get('close') !== null
  const example = search.get('example')

  const onCloseFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-alert-close-focus'))
  }
  const onCloseBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-alert-close-blur'))
  }
  const onCloseClick = () => {
    window.dispatchEvent(new CustomEvent('sinch-alert-close-click'))
  }
  const onButtonFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-alert-button-focus'))
  }
  const onButtonBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-alert-button-blur'))
  }
  const onButtonClick = () => {
    window.dispatchEvent(new CustomEvent('sinch-alert-button-click'))
  }

  let text = shortText

  if (example === 'md') {
    text = mdText
  } else if (example === 'long') {
    text = longText
  }

  return (
    <sinch-alert
      type={type}
      text={text}
    >
      {hasAction && (
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
      {hasClose && (
        <sinch-button
          slot="close"
          size="s"
          aria-label="Close"
          on-click={onCloseClick}
          on-focus={onCloseFocus}
          on-blur={onCloseBlur}
        >
          <sinch-icon name="fa-xmark" slot="icon"/>
        </sinch-button>
      )}
    </sinch-alert>
  )
}
