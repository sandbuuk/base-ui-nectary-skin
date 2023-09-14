import { createIllustrationClass } from '@nectary/assets/illustrations/create-illustration-class'
import { defineCustomElement } from '@nectary/components/utils'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '@nectary/assets/illustrations/types'

defineCustomElement('illustration-pallete-overview-complementary-colors', createIllustrationClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'illustration-pallete-overview-complementary-colors': TSinchIllustrationReact,
    }

    interface HTMLElementTagNameMap {
      'illustration-pallete-overview-complementary-colors': TSinchIllustrationElement,
    }
  }
}
