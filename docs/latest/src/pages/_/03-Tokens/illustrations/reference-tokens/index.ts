import { defineCustomElement } from '@sinch-engage/nectary/utils'
import { createIllustrationClass } from '@sinch-engage/nectary-assets/illustrations/create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '@sinch-engage/nectary-assets/illustrations/types'

defineCustomElement('reference-tokens', createIllustrationClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'reference-tokens': TSinchIllustrationReact,
    }

    interface HTMLElementTagNameMap {
      'reference-tokens': TSinchIllustrationElement,
    }
  }
}
