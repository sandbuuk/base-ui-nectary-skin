const bodyEl = document.body as HTMLBodyElement & {
  __dialog_counter__: number,
}

export const disableScroll = () => {
  bodyEl.__dialog_counter__ = (bodyEl.__dialog_counter__ ?? 0) + 1

  if (bodyEl.__dialog_counter__ === 1) {
    const scrollWidth =
      window.innerWidth - document.documentElement.clientWidth

    bodyEl.style.overflow = 'hidden'

    if (scrollWidth > 0) {
      bodyEl.style.setProperty('padding-right', `${scrollWidth}px`)
    }
  }
}

export const enableScroll = () => {
  bodyEl.__dialog_counter__ = Math.max(0, (bodyEl.__dialog_counter__ ?? 0) - 1)

  if (bodyEl.__dialog_counter__ === 0) {
    bodyEl.style.overflow = ''
    bodyEl.style.removeProperty('padding-right')
  }
}
