import { nanoid } from 'nanoid'
import { useState } from 'react'
import type { TSinchToastType } from '@nectary/components/toast/types'
import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/toast-manager'
import '@nectary/components/toast'
import '@nectary/components/icon-button'
import '@nectary/components/icon'

const types: TSinchToastType[] = ['info', 'warn', 'success', 'error']
const text = [
  'Lorem Ipsum',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur eleifend augue non condimentum. Suspendisse aliquet quam sed rhoncus consectetur.',
  'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  'Cras vehicula accumsan laoreet. Mauris nulla urna, feugiat ac eros a, ultricies aliquet nisl. Cras aliquet consectetur velit eu posuere.',
]

type TToast = {
  id: string,
  text: string,
  type: TSinchToastType,
  closable: boolean,
  persistent: boolean,
}

export const ComplexExample: FC = () => {
  const [toasts, setToasts] = useState<TToast[]>([])
  const onClick = () => {
    const closable = Math.random() > 0.5

    setToasts((toasts) => toasts.concat({
      id: nanoid(),
      text: text[Math.floor(Math.random() * text.length)],
      type: types[Math.floor(Math.random() * types.length)],
      closable,
      persistent: closable && Math.random() > 0.5,
    }))
  }
  const onClose = (id: string) => () => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id))
  }

  return (
    <>
      <sinch-button
        type="cta-primary"
        text="Show"
        aria-label="Show toast"
        size="s"
        on-click={onClick}
      />
      <sinch-toast-manager>
        {toasts.map(({ id, text, type, closable, persistent }) => (
          <sinch-toast
            key={id}
            type={type}
            text={text}
            persistent={persistent}
            on-timeout={onClose(id)}
          >
            {closable && (
              <sinch-icon-button
                slot="close"
                aria-label="Close"
                size="s"
                on-click={onClose(id)}
              >
                <sinch-icon slot="icon" name="close"/>
              </sinch-icon-button>
            )}
          </sinch-toast>
        ))}
      </sinch-toast-manager>
    </>
  )
}
