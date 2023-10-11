import { nanoid } from 'nanoid'
import { useState } from 'react'
import type { TSinchToastType } from '@nectary/components/toast/types'
import type { TSinchToastManagerOrigin } from '@nectary/components/toast-manager/types'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/toast-manager'
import '@nectary/components/toast'
import '@nectary/components/icon-button'
import '@nectary/components/icon'
import '@nectary/components/popover'
import '@nectary/components/select-button'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'

const types: TSinchToastType[] = ['info', 'warn', 'success', 'error']
const text = [
  'Lorem Ipsum',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur eleifend augue non condimentum. Suspendisse aliquet quam sed rhoncus consectetur.',
  'To set up the `LINE`, read and **accept** the `LINE` [terms & conditions](https://www.youtube.com/watch?v=dQw4w9WgXcQ).',
  'Cras vehicula accumsan laoreet. Mauris nulla urna, feugiat ac eros a, ultricies aliquet nisl. Cras aliquet consectetur velit eu posuere.',
]

const wrapperStyle: CSSProperties = {
  display: 'flex',
  gap: 16,
}
const selectStyle: CSSProperties = {
  width: 240,
}

type TToast = {
  id: string,
  text: string,
  type: TSinchToastType,
  closable: boolean,
  persistent: boolean,
}

export const OriginExample: FC = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const [originValue, setOriginValue] = useState<TSinchToastManagerOrigin>('bottom-right')
  const [toasts, setToasts] = useState<TToast[]>([])
  const onShowClick = () => {
    const closable = Math.random() > 0.5

    setToasts((toasts) => toasts.concat({
      id: nanoid(),
      text: text[Math.floor(Math.random() * text.length)],
      type: types[Math.floor(Math.random() * types.length)],
      closable,
      persistent: closable && Math.random() > 0.5,
    }))
  }
  const onToastClose = (id: string) => () => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id))
  }
  const onPopoverClose = () => setPopoverOpen(false)
  const onPopoverOpen = () => setPopoverOpen(true)
  const onOriginChange = (e: CustomEvent<string>) => {
    setOriginValue(e.detail as TSinchToastManagerOrigin)
    setPopoverOpen(false)
  }

  return (
    <div style={wrapperStyle}>
      <sinch-popover
        open={isPopoverOpen}
        modal
        on-close={onPopoverClose}
        aria-label="Origin popover"
        orientation="top"
      >
        <sinch-select-button
          slot="target"
          on-click={onPopoverOpen}
          placeholder="Origin"
          text={originValue}
          aria-label="Origin select"
          style={selectStyle}
        />
        <sinch-select-menu
          slot="content"
          value={originValue}
          on-change={onOriginChange}
          aria-label="Origin select"
        >
          <sinch-select-menu-option value="bottom-right" text="bottom-right" aria-label="bottom-right"/>
          <sinch-select-menu-option value="top-right" text="top-right" aria-label="top-right"/>
        </sinch-select-menu>
      </sinch-popover>
      <sinch-button
        type="cta-primary"
        text="Show"
        aria-label="Show toast"
        on-click={onShowClick}
      />
      <sinch-toast-manager origin={originValue}>
        {toasts.map(({ id, text, type, closable, persistent }) => (
          <sinch-toast
            key={id}
            type={type}
            text={text}
            persistent={persistent}
            on-timeout={onToastClose(id)}
          >
            {closable && (
              <sinch-icon-button
                slot="close"
                aria-label="Close"
                size="s"
                on-click={onToastClose(id)}
              >
                <sinch-icon slot="icon" name="close"/>
              </sinch-icon-button>
            )}
          </sinch-toast>
        ))}
      </sinch-toast-manager>
    </div>
  )
}
