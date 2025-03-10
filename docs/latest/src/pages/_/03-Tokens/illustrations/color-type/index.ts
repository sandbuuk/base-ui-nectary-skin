import { createIllustrationClass } from '@nectary/assets/illustrations/create-illustration-class'
import { defineCustomElement } from '@nectary/components/utils'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '@nectary/assets/illustrations/types'

defineCustomElement('color-type', createIllustrationClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'color-type': TSinchIllustrationElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'color-type': TSinchIllustrationReact,
    }
  }
}
