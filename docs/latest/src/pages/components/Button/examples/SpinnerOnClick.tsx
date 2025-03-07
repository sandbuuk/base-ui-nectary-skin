import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/spinner'

const buttonActions = () => {
  return new Promise<void>((resolve) => {
  /* Add actions of this button here */

    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

export const SpinnerOnClickExample: FC = () => {
  const [pending, setPending] = useState(false)

  return (

    <sinch-button
      text="Click for Pending"
      aria-label="pending"
      type="primary"
      on-click={async () => {
        setPending(true)

        await buttonActions() // Placeholder for button actions

        setPending(false)
      }}
      disabled={pending}
    >
      {pending && <sinch-spinner slot="icon"/>}
    </sinch-button>

  )
}

