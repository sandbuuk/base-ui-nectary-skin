import { useEffect, useState } from 'react'
// import { MessageTyping } from './MessageTyping'
import { MessageTyping } from './MessageTyping'
import styles from './PhonePreview.module.css'
import mobile from './mobile.png'
import type { FC } from 'react'

type PhonePreviewProps = {
  chats: { sender: string, msg: string, blur?: boolean }[],
}

export const PhonePreview: FC<PhonePreviewProps> = (props): JSX.Element => {
  const [activeelement, setActiveelement] = useState('')

  function getActiveElement(root: Document | ShadowRoot = document): Element | null {
    const activeEl = root.activeElement

    if (activeEl == null) {
      return null
    }

    if (activeEl.shadowRoot != null) {
      if (activeEl.tagName == 'SINCH-INPUT' || activeEl.tagName == 'SINCH-TEXTAREA') {
        return activeEl
      }

      return getActiveElement(activeEl.shadowRoot)
    }

    return activeEl
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveelement(getActiveElement() == null ? '' : getActiveElement()!.className)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const { chats } = props

  return (
    <div className={styles.botpreviewHuman}>
      <div style={{ backgroundImage: `url(${mobile})` }} className={styles.botImage}>
        <div className={styles.messagesBot}>
          {(chats).map((_, i) => {
            if (i == chats.length - 1 && chats[i].sender == 'left' ? (activeelement == 'humanhandover' || activeelement == '0') : activeelement == `${Math.floor((i + 1) / 2)}` && chats[i].sender == 'left') {
              return (
                <MessageTyping key={`${i + 1}`}/>
              )
            }

            return (
              <div
                key={`${i + 1}`}
                className={i == (chats.length - 1) && (chats[i].sender == 'left') && chats[i].msg.length > 0 ? (activeelement != `humanhandover` && activeelement != '0') ? styles.botMessage : styles.hide : (chats[i].sender == 'left') && chats[i].msg.length > 0 && activeelement != `${Math.floor((i + 1) / 2)}` ? styles.botMessage : (chats[i].sender == 'right') && chats[i].msg.length > 0 && activeelement != `${Math.floor((i + 1) / 2)}` ? styles.userMessage : styles.hide}
              >
                {chats[i].msg}
              </div>
            )
          })}

        </div>

      </div>
      <div className={styles.emptyDiv}/>
    </div>
  )
}

