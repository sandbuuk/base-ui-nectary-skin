import type { TSinchPopOrientation } from './types'

export const orientationValues: readonly TSinchPopOrientation[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'bottom-stretch',
  'bottom-center',
  'top-stretch',
  'top-center',
  'center-left',
  'center-right',
]

const bodyEl = document.body as HTMLBodyElement & { __pop_counter__: number }

export const disableScroll = () => {
  bodyEl.style.overflow = 'hidden'
  bodyEl.__pop_counter__ = (bodyEl.__pop_counter__ ?? 0) + 1
}

export const enableScroll = () => {
  bodyEl.__pop_counter__ = Math.max(0, (bodyEl.__pop_counter__ ?? 0) - 1)

  if (bodyEl.__pop_counter__ === 0) {
    document.body.style.overflow = ''
  }
}
