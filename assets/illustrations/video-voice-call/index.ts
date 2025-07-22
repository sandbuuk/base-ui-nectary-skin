import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationVideoVoiceCall = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-video-voice-call', IllustrationVideoVoiceCall)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-video-voice-call': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-video-voice-call': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-video-voice-call': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-video-voice-call': TSinchIllustrationReact,
    }
  }
}
