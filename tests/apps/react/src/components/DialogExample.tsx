import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/dialog'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/dropdown'
import '@sinch-engage/nectary/dropdown-text-option'

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

  return (
    <>
      <sinch-button
        type="cta-primary"
        text="Open Dialog"
        aria-label="Open Dialog"
        onClick={() => {
          setDialogOpen(true)
        }}
      />
      <sinch-dialog
        open={isDialogOpen}
        caption="Dialog"
        aria-label="Dialog"
        close-aria-label="Close dialog"
        on-close={() => {
          setDialogOpen(false)
        }}
      >
        <section slot="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</section>
        <sinch-input
          slot="content"
          label="Label"
          aria-label="Label"
          value={value}
          on-change={(e) => {
            setValue(e.detail)
          }}
          on-focus={onInputFocus}
          on-blur={onInputBlur}
        >
          <sinch-dropdown
            slot="right"
            open={isDropdownOpen}
            orientation="bottom-right"
            on-close={() => {
              setDropdownOpen(false)
            }}
            value={value}
            on-change={(e) => {
              setValue(e.detail)
            }}
            aria-label="Select"
          >
            <sinch-button
              small
              text="Ok"
              aria-label="Ok"
              type="primary"
              slot="target"
              onClick={() => {
                setDropdownOpen(true)
              }}
              on-focus={onButtonFocus}
              on-blur={onButtonBlur}
            />
            <sinch-dropdown-text-option slot="option" text="AAAAAAAAAAAAAAAAA" value="0" aria-label="Select"/>
            <sinch-dropdown-text-option slot="option" text="BBB" value="1" aria-label="Select"/>
            <sinch-dropdown-text-option slot="option" text="CCC" value="2" aria-label="Select"/>
          </sinch-dropdown>
        </sinch-input>

        <sinch-button text="Cancel" aria-label="Cancel" type="secondary" slot="buttons" onClick={() => {}}/>
        <sinch-button text="Ok" aria-label="Ok" type="primary" slot="buttons" onClick={() => {}}/>
      </sinch-dialog>
    </>
  )
}
