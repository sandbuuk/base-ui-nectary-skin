import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationMeetingScrum = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-meeting-scrum', IllustrationMeetingScrum)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-meeting-scrum': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-meeting-scrum': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-meeting-scrum': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-meeting-scrum': TSinchIllustrationReact,
    }
  }
}
