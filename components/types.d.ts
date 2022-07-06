import type { ClassAttributes, DOMAttributes, HTMLAttributes } from 'react'

export type TSinchElementReact<TElement> =
  Pick<HTMLAttributes<HTMLElement>, 'id' | 'className' | 'style' | 'slot' | 'children'> &
  ClassAttributes<TElement> &
  Pick<DOMAttributes<TElement>, 'onClick' | 'onDoubleClick' | 'onMouseDown' | 'onMouseUp' | 'onMouseMove' | 'onMouseOver' | 'onMouseOut' | 'onFocus' | 'onBlur' | 'onKeyDown' | 'onKeyUp'> &
  { class?: string }

export type TRect = {
  x: number,
  y: number,
  width: number,
  height: number,
}
