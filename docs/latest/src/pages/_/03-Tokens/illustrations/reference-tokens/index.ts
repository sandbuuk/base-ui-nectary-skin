import { createIllustrationClass } from '@nectary/assets/illustrations/create-illustration-class'
import { defineCustomElement } from '@nectary/components/utils'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '@nectary/assets/illustrations/types'

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
