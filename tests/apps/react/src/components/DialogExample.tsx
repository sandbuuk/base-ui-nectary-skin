import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/dialog'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'

type TDialog = {
  search: URLSearchParams,
}

export const DialogExample: FC<TDialog> = () => {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [value, setValue] = useState('')
  const onInputFocus = () => {
    console.log('INPUT FOCUS')
  }
  const onInputBlur = () => {
    console.log('INPUT BLUR')
  }
  const onButtonFocus = () => {
    console.log('BUTTON FOCUS')
  }
  const onButtonBlur = () => {
    console.log('BUTTON BLUR')
  }
  const onDialogOpen = () => {
    setDialogOpen(true)
  }
  const onDialogClose = () => {
    setDialogOpen(false)
  }
  const onDropdownOpen = () => {
    setDropdownOpen(true)
  }
  const onDropdownClose = () => {
    setDropdownOpen(false)
  }

  return (
    <>
      <sinch-button
        type="cta-primary"
        text="Open Dialog"
        aria-label="Open Dialog"
        on-click={onDialogOpen}
      />
      <sinch-dialog
        open={isDialogOpen}
        caption="Dialog"
        aria-label="Dialog"
        close-aria-label="Close dialog"
        on-close={onDialogClose}
      >
        <section slot="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</section>
        <sinch-popover
          slot="content"
          open={isDropdownOpen}
          orientation="bottom"
          on-close={onDropdownClose}
          aria-label="Select"
        >
          <sinch-field slot="target" label="Label">
            <sinch-input
              slot="input"
              aria-label="Label"
              value={value}
              on-change={(e) => {
                setValue(e.detail)
              }}
              on-focus={onInputFocus}
              on-blur={onInputBlur}
            >
              <sinch-button
                small
                text="Ok"
                aria-label="Ok"
                type="primary"
                slot="right"
                on-click={onDropdownOpen}
                on-focus={onButtonFocus}
                on-blur={onButtonBlur}
              />
            </sinch-input>
          </sinch-field>
          <sinch-action-menu slot="content" aria-label="Action menu">
            <sinch-action-menu-option slot="option" text="AAAAAAAAAAAAAAAAA" aria-label="Select"/>
            <sinch-action-menu-option slot="option" text="BBB" aria-label="Select"/>
            <sinch-action-menu-option slot="option" text="CCC" aria-label="Select"/>
          </sinch-action-menu>
        </sinch-popover>
        <sinch-button text="Cancel" aria-label="Cancel" type="secondary" slot="buttons" onClick={() => {}}/>
        <sinch-button text="Ok" aria-label="Ok" type="primary" slot="buttons" onClick={() => {}}/>
      </sinch-dialog>
    </>
  )
}
