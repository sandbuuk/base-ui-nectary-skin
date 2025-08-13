import { createIllustrationClass } from '@nectary/assets/illustrations/create-illustration-class'
import { defineCustomElement } from '@nectary/components/utils'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '@nectary/assets/illustrations/types'

defineCustomElement('token-properties' as any, createIllustrationClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'token-properties': TSinchIllustrationElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'token-properties': TSinchIllustrationReact,
    }
  }
}
