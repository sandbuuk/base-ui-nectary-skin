import { useRef } from '@storybook/addons'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/theme.css'
import '@sinch-engage/nectary/card-container'

export default {
  title: 'Components/CardContainer',
  argTypes: {},
} as Meta

const Template = (innerHTML: string = ''): Story<JSX.IntrinsicElements['sinch-card-container']> => () => {
  const cardRef = useRef<HTMLElementTagNameMap['sinch-card-container'] | null>(null)

  if (cardRef.current === null) {
    cardRef.current = document.createElement('sinch-card-container')

    cardRef.current.innerHTML = innerHTML
  }

  return cardRef.current!
}

const cardInnerHTML = `
  <div style="display: flex;flex-direction: column;background-color: #F1F3F4;align-items: center;justify-content: center;height: 150px;font-family: Gilroy;">
    <span style="font-size: 24px;">Replace me!</span>
    <span style="font-size: 16px;">Im a template component</span>
  </div>
`

export const CardContainer = Template(cardInnerHTML)

CardContainer.parameters = {
  docs: {
    source: {
      code: `<sinch-card-container>${cardInnerHTML}</sinch-card-container>`,
    },
  },
}
