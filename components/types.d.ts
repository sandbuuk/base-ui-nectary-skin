import type { ClassAttributes, HTMLAttributes } from 'react'

export type TSinchElementReact<TElementProperties> = Pick<HTMLAttributes<HTMLElement>, 'className' | 'style' | 'slot' | 'children'> & ClassAttributes<TElementProperties>
