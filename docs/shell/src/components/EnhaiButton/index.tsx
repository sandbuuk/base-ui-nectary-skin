import '@nectary/components/button'
import '@nectary/components/dialog'
import '@nectary/assets/icons/ai'
import { useState } from 'react'

export const EnhaiButton = () => {
  const [isDialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <sinch-button
        text="Even Nectary has AI!"
        aria-label="test"
        type="primary"
        on-click={() => setDialogOpen(true)}
          // @ts-ignore
        style={{ position: 'fixed', right: 40, bottom: 40, '--sinch-button-set-size-shape-radius': 'var(--sinch-sys-shape-radius-full)' }}
      >
        <sinch-icon-ai slot="icon"/>
      </sinch-button>
      <sinch-dialog
        open={isDialogOpen}
        aria-label="Dialog"
        close-aria-label="Close dialog"
        on-close={() => setDialogOpen(false)}
        style={{
          //@ts-ignore
          '--sinch-comp-dialog-max-width': '90vw',
        }}
      >
        <div slot="content">
          <iframe style={{ all: 'unset', height: '80vh', width: '80vw' }} src="https://enhai.vercel.app/" title="W3Schools Free Online Web Tutorials"/>
        </div>
      </sinch-dialog>
    </>
  )
}
