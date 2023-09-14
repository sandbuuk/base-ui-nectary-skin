import { createIllustrationClass } from '@nectary/assets/illustrations/create-illustration-class'
import { defineCustomElement } from '@nectary/components/utils'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '@nectary/assets/illustrations/types'

defineCustomElement('token-consistency-explanation', createIllustrationClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'token-consistency-explanation': TSinchIllustrationReact,
    }

    interface HTMLElementTagNameMap {
      'token-consistency-explanation': TSinchIllustrationElement,
    }
  }
}
