import { MessageTyping } from './MessageTyping'
import styles from './PhonePreview.module.css'
import mobile from './mobile.png'
import type { FC } from 'react'

type PhonePreviewProps = {
  chats: { sender: string, msg: string, blur?: boolean, typing?: boolean }[],
}

export const PhonePreview: FC<PhonePreviewProps> = (props): JSX.Element => {
  const { chats } = props

  return (
    <div className={styles.phonePreview}>
      <div style={{ backgroundImage: `url(${mobile})` }} className={styles.phoneImage}>
        <div className={styles.phoneMessages}>
          {(chats).map((_, i) => {
            if (chats[i].typing == true) {
              return (
                <div key={`${i}typing`} className={chats[i].sender == 'right' ? styles.hide : ''}>
                  <MessageTyping/>
                </div>
              )
            }

            return (
              <div
                key={`${i}`}
                className={chats[i].msg.length > 0 ? chats[i].sender == 'left' ? styles.botMessage : styles.userMessage : styles.hide}
              >
                {chats[i].msg}
              </div>
            )
          })}

        </div>

      </div>
    </div>
  )
}

