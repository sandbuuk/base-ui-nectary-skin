import type { ClassAttributes, HTMLAttributes } from 'react'

export type TSinchElementReact<TElementProperties> = Pick<HTMLAttributes<HTMLElement>, 'id' | 'className' | 'style' | 'slot' | 'children'> & ClassAttributes<TElementProperties> & { class?: string }

export type TRect = {
  x: number,
  y: number,
  width: number,
  height: number,
}
