import type { HTMLAttributes } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-quickstarts-app': HTMLAttributes<HTMLElement>,
    }
  }
}

export {}
