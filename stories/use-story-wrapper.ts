import { useRef } from '@storybook/addons'

export const useStoryWrapper = () => {
  const wrapperRef = useRef<(HTMLElement) | null>(null)

  if (wrapperRef.current === null) {
    const $wrapper = document.createElement('div')

    $wrapper.style.height = '260px'
    $wrapper.style.display = 'flex'
    $wrapper.style.paddingTop = '28px'
    $wrapper.style.justifyContent = 'center'

    wrapperRef.current = $wrapper
  }

  return wrapperRef.current!
}
