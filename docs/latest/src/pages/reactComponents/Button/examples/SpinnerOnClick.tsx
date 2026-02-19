import { Button } from '@nectary/react'
import { type FC, useState } from 'react'

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
    <Button
      variant="primary"
      loading={pending}
      disabled={pending}
      onClick={async () => {
        setPending(true)

        await buttonActions() // Placeholder for button actions

        setPending(false)
      }}
    >
      Click for Pending
    </Button>
  )
}
