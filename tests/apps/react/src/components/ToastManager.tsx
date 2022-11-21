import { typeValues } from '@sinch-engage/nectary/toast/utils'
import { useEffect, useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/toast-manager'
import '@sinch-engage/nectary/toast'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting.'

type TToastManager = {
  search: URLSearchParams,
}

export const ToastManager: FC<TToastManager> = () => {
  const [state, setState] = useState<string[]>([`${text}1`, `${text}2`, `${text}3`, 'Item4'])

  const onTimeout = (text: string) => () => {
    setState((state) => state.filter((item) => item !== text))
    window.dispatchEvent(new CustomEvent('sinch-toast-timeout'))
  }
  const onClose = (text: string) => () => {
    setState((state) => state.filter((item) => item !== text))
    window.dispatchEvent(new CustomEvent('sinch-toast-close'))
  }
  const onAction = () => {
    window.dispatchEvent(new CustomEvent('sinch-toast-action'))
  }

  useEffect(() => {
    const cb = () => {
      setState((state) => state.concat('Item5'))
    }

    window.addEventListener('sinch-toast-push', cb)

    return () => {
      window.removeEventListener('sinch-toast-push', cb)
    }
  }, [])

  return (
    <sinch-toast-manager>
      {state.map((t, i) => (
        <sinch-toast
          key={t}
          type={typeValues[i % typeValues.length]}
          text={t}
          on-timeout={onTimeout(t)}
        >
          {(i + 1) % 3 !== 0 && (
            <sinch-icon-button
              slot="close"
              size="s"
              aria-label="Close"
              on-click={onClose(t)}
            >
              <sinch-icon-close slot="icon"/>
            </sinch-icon-button>
          )}
          {(i + 1) % 2 === 0 && (
            <sinch-button
              slot="action"
              type="cta-secondary"
              size="s"
              text="Undo"
              aria-label="Undo"
              on-click={onAction}
            />
          )}
        </sinch-toast>
      ))}
    </sinch-toast-manager>
  )
}
