import { createIllustrationClass } from '@nectary/assets/illustrations/create-illustration-class'
import { defineCustomElement } from '@nectary/components/utils'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '@nectary/assets/illustrations/types'

defineCustomElement('tokens-in-nectary' as any, createIllustrationClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'tokens-in-nectary': TSinchIllustrationElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'tokens-in-nectary': TSinchIllustrationReact,
    }
  }
}
