import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect } from '../types'

export type TSinchCardProps = {
  /** Text */
  text: string,
  /** Caption */
  caption: string,
  /** Label */
  label?: string,
  /** Draggable */
  draggable?: boolean,
  readonly dragRect?: TRect | null,
}

export type TSinchCard = {
  props: TSinchCardProps,
}

export type TSinchCardElement = NectaryComponentVanillaByType<TSinchCard>
export type TSinchCardReact = NectaryComponentReactByType<TSinchCard>
