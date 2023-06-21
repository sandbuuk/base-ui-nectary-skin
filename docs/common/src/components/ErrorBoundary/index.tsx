import React from 'react'
import type { PropsWithChildren, ReactElement } from 'react'

type TErrorBoundary = PropsWithChildren & {
  fallback: ReactElement,
}

export class ErrorBoundary extends React.Component<TErrorBoundary> {
  state = { hasError: false }
  static getDerivedStateFromError(error: any) {
    console.error(error)

    return {
      hasError: true,
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}
