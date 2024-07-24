import type { TRect, TSinchElementReact } from '../types'
import type { TSinchSizeEx } from '../utils/size'

export type TSinchSkeletonItemBoundingBox = TRect & { radius: number }

export type TSinchSkeletonItemElement = HTMLElement & {
  /** Size */
  setAttribute(name: 'size', value: TSinchSizeEx): void,
}

export type TSinchSkeletonItemReact = TSinchElementReact<TSinchSkeletonItemElement> & {
  /** Size */
  size?: TSinchSizeEx,
}
