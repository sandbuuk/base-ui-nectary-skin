import { backgroundValues, valignValues } from '@sinch-engage/nectary/illustration/utils'
import { useArgs, useRef } from '@storybook/addons'
import type { TSinchIllustrationElement } from '@sinch-engage/nectary/illustration/types'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/illustration/phone-and-cat'

const illustrationNames = [
  'sinch-illustration-phone-and-cat',
]

export default {
  title: 'Components/Illustrations',
  argTypes: {
    size: {
      control: { type: 'range', min: 32, max: 1024, step: 32 },
    },
    background: {
      control: 'select',
      options: backgroundValues,
      description: 'Illustration background color',
    },
    valign: {
      control: 'select',
      options: valignValues,
      description: 'Illustration align',
    },
  },
} as Meta

const Template = (): Story => () => {
  const [{ size, background, valign }] = useArgs()
  const wrapperRef = useRef<HTMLElement | null>(null)

  if (wrapperRef.current === null) {
    wrapperRef.current = document.createElement('div')

    const $wrapper = wrapperRef.current as HTMLElement

    $wrapper.style.display = 'flex'
    $wrapper.style.flexWrap = 'wrap'
    $wrapper.style.gap = '16px'

    const $icons = illustrationNames.map((name) => {
      const $icon = document.createElement(name) as TSinchIllustrationElement

      $icon.style.width = '30%'
      $icon.style.minHeight = '256px'

      $icon.setAttribute('title', name)

      return $icon
    })

    $wrapper.append(...$icons)
  }

  // eslint-disable-next-line sort-vars
  for (let i = 0, ch = wrapperRef.current.children; i < ch.length; i++) {
    ch[i].setAttribute('size', size)
    ch[i].setAttribute('background', background)

    if (valign != null) {
      ch[i].setAttribute('valign', valign)
    } else {
      ch[i].removeAttribute('valign')
    }
  }

  return wrapperRef.current
}

export const Illustrations = Template()

Illustrations.args = {
  size: 128,
}

Illustrations.parameters = {
  docs: {
    source: {
      code: `<>\n${illustrationNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}
