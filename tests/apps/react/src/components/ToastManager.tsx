import { typeValues } from '@nectary/components/toast/utils'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/toast-manager'
import '@nectary/components/toast'
import '@nectary/components/button'
import '@nectary/components/icon'

const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting.'
const md = 'To set up the `LINE`, read and **accept** the `LINE` [terms & conditions](https://google.com).'

export const ToastManager: FC = () => {
  const [state, setState] = useState<string[]>([`${text}1`, `${text}2`, md, 'Item4'])
  const [search] = useSearchParams()
  const origin: any = search.get('origin') ?? undefined

  const onTimeout = () => {
    window.dispatchEvent(new CustomEvent('sinch-toast-timeout'))
  }
  const onClose = () => {
    window.dispatchEvent(new CustomEvent('sinch-toast-close'))
  }
  const onAction = () => {
    window.dispatchEvent(new CustomEvent('sinch-toast-action'))
  }

  useEffect(() => {
    const popCb = () => {
      setState((state) => state.filter((_, i) => i !== 1))
    }
    const pushCb = () => {
      setState((state) => state.concat('Item5'))
    }

    window.addEventListener('sinch-toast-push', pushCb)
    window.addEventListener('sinch-toast-pop', popCb)

    return () => {
      window.removeEventListener('sinch-toast-push', pushCb)
      window.removeEventListener('sinch-toast-pop', popCb)
    }
  }, [])

  return (
    <sinch-toast-manager origin={origin}>
      {state.map((t, i) => (
        <sinch-toast
          key={t}
          type={typeValues[i % typeValues.length]}
          text={t}
          persistent={i !== 0}
          on-timeout={onTimeout}
        >
          {(i + 1) % 3 !== 0 && (
            <sinch-button
              slot="close"
              size="s"
              aria-label="Close"
              on-click={onClose}
            >
              <sinch-icon icons-version="2" name="fa-xmark" slot="icon"/>
            </sinch-button>
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
