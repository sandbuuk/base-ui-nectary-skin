import { defineCustomElement } from '@sinch-engage/nectary/utils'
import { createIllustrationClass } from '@sinch-engage/nectary-assets/illustrations/create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '@sinch-engage/nectary-assets/illustrations/types'

defineCustomElement('illustration-pallete-overview-main-colors', createIllustrationClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'illustration-pallete-overview-main-colors': TSinchIllustrationReact,
    }

    interface HTMLElementTagNameMap {
      'illustration-pallete-overview-main-colors': TSinchIllustrationElement,
    }
  }
}
