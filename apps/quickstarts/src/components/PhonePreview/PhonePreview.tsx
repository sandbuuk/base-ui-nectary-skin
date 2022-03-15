import classnames from 'classnames'
import { MessageTyping } from './MessageTyping'
import styles from './PhonePreview.module.css'
import type { FC } from 'react'

export type PhonePreviewProps = {
  chats: {
    sender: 'right' | 'left',
    msg: string,
    blur?: boolean,
    typing?: boolean,
  }[],
}

export const PhonePreview: FC<PhonePreviewProps> = ({ chats }): JSX.Element => (
  <div className={styles.phonePreview}>
    <div className={styles.phoneMessages}>
      {chats.map(({ sender, msg, blur, typing }, i) => (msg.length === 0
        // Rendering null instead of filtering out the empty message will make the indexes
        // more stable and prevent unneccessary rerenders.
        ? null
        : (
          (sender == 'left' && typing === true) ? <MessageTyping key={i}/> : (
            <div
              key={i}
              className={classnames(styles.message, styles[sender], { [styles.blur]: blur })}
            >
              {msg}
            </div>
          )
        )))}
    </div>
  </div>
)
