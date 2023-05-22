import { defineCustomElement } from '@sinch-engage/nectary/utils'
import { createIllustrationClass } from '@sinch-engage/nectary-assets/illustrations/create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '@sinch-engage/nectary-assets/illustrations/types'

defineCustomElement('illustration-pallete-overview', createIllustrationClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'illustration-pallete-overview': TSinchIllustrationReact,
    }

    interface HTMLElementTagNameMap {
      'illustration-pallete-overview': TSinchIllustrationElement,
    }
  }
}
