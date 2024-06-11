import type { TSinchTextType } from '../text/types'
import type { TSinchElementReact } from '../types'

export type TSinchRichTextElement = HTMLElement & {
  size: TSinchTextType,
  text: string,
  setAttribute(name: 'size', value: TSinchTextType): void,
  setAttribute(name: 'text', value: string): void,
}

export type TSinchRichTextReact = TSinchElementReact<TSinchRichTextElement> & {
  size?: TSinchTextType,
  text: string,
}
