import type { TSinchElementReact } from '../types'

export type TSinchTextType = 'm' | 's' | 'xs' | 'xxs'

export type TSinchTextElement = HTMLElement & {
  /** Type */
  type: TSinchTextType,
  /** Block (“paragraph”, default) or inline (“span”) */
  inline: boolean,
  /** Emphasized */
  emphasized: boolean,
  /** Cuts the long text with “…” ellipsis */
  ellipsis: boolean,
  /** Type */
  setAttribute(name: 'type', value: TSinchTextType): void,
  /** Block (“paragraph”, default) or inline (“span”) */
  setAttribute(name: 'inline', value: ''): void,
  /** Emphasized */
  setAttribute(name: 'emphasized', value: ''): void,
  /** Cuts the long text with “…” ellipsis */
  setAttribute(name: 'ellipsis', value: ''): void,
}

export type TSinchTextReact = TSinchElementReact<TSinchTextElement> & {
  /** Type */
  type: TSinchTextType,
  /** Block (“paragraph”, default) or inline (“span”) */
  inline?: boolean,
  /** Emphasized */
  emphasized?: boolean,
  /** Cuts the long text with “…” ellipsis */
  ellipsis?: boolean,
}
