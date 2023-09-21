import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/dialog'
import '@nectary/components/input'
import '@nectary/components/field'
import '@nectary/components/button'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/flag'
import '@nectary/components/text'
import '@nectary/components/popover'
import '@nectary/components/help-tooltip'
import '@nectary/components/tooltip'

export const DialogExample: FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(true)
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
  const onActionClick = () => {
    console.log('ACTION CLICK')
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
        <sinch-text slot="content" type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</sinch-text>
        <sinch-popover
          slot="content"
          open={isDropdownOpen}
          orientation="bottom-left"
          on-close={onDropdownClose}
          aria-label="Select"
        >
          <sinch-field slot="target" label="Label">
            <sinch-help-tooltip slot="tooltip" text="Help"/>
            <sinch-input
              slot="input"
              aria-label="Label"
              value={value}
              size="m"
              on-change={(e) => {
                setValue(e.detail)
              }}
              on-focus={onInputFocus}
              on-blur={onInputBlur}
              style={{ width: '200px' }}
            >
              <sinch-flag code="se" slot="icon"/>
              <sinch-button
                size="s"
                text="Ok"
                aria-label="Ok"
                type="primary"
                slot="right"
                onClick={onDropdownOpen}
                on-focus={onButtonFocus}
                on-blur={onButtonBlur}
              />
            </sinch-input>
          </sinch-field>
          <sinch-action-menu slot="content" aria-label="Action menu" onClick={onDropdownClose}>
            <sinch-action-menu-option text="Lorem Ipsum is simply dummy text" aria-label="Select"/>
            <sinch-action-menu-option text="of the printing and typesetting industry" aria-label="Select"/>
            <sinch-action-menu-option text="ever since the 1500s" aria-label="Select"/>
          </sinch-action-menu>
        </sinch-popover>
        <sinch-button text="Cancel" aria-label="Cancel" type="secondary" slot="buttons" onClick={onActionClick}/>
        <sinch-tooltip slot="buttons" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
          <sinch-button text="Ok" aria-label="Ok" type="primary" onClick={onActionClick}/>
        </sinch-tooltip>
      </sinch-dialog>
    </>
  )
}
