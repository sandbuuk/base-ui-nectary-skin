import { useArgs, useRef } from '@storybook/addons'
import { useWidthWrapper } from './use-story-wrapper'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/theme.css'
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/card-button'
import '@sinch-engage/nectary/card-link'
import '@sinch-engage/nectary/illustration/phone-and-cat'
import '@sinch-engage/nectary/icon-branded/chatbot'

export default {
  title: 'Components/Card',
  argTypes: {
    label: { control: 'text', description: 'Card label text' },
    header: { control: 'text', description: 'Card header text' },
    text: { control: 'text', description: 'Card description text' },
    disabled: { control: 'boolean', description: 'Is card disabled' },
  },
} as Meta

const Template = (innerHTML: string = ''): Story<JSX.IntrinsicElements['sinch-card']> => () => {
  const [{ header, label, text, disabled }] = useArgs()
  const $wrapper = useWidthWrapper(350)
  const cardRef = useRef<HTMLElementTagNameMap['sinch-card'] | null>(null)

  if (cardRef.current === null) {
    cardRef.current = document.createElement('sinch-card')

    cardRef.current.innerHTML = innerHTML

    $wrapper.appendChild(cardRef.current)
  }

  const $card = cardRef.current!

  $card.header = header
  $card.text = text
  $card.label = label
  $card.disabled = disabled

  return $wrapper
}

const cardInnerHTML = `
  <sinch-illustration-phone-and-cat slot="illustration" size="290"></sinch-illustration-phone-and-cat>
  <sinch-icon-chatbot slot="icon"></sinch-icon-chatbot>
  <sinch-card-link slot="action" href="" text="Click here link"></sinch-card-link>
`

export const Card = Template(cardInnerHTML)

Card.args = {
  label: 'Report',
  header: 'Card Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
  disabled: false,
}

Card.parameters = {
  docs: {
    source: {
      code: `<sinch-card header="Card Title" text="Lorem..." label="Report">${cardInnerHTML}</sinch-card>`,
    },
  },
}

const withButtonInnerHTML = `
  <sinch-illustration-phone-and-cat slot="illustration" size="290"></sinch-illustration-phone-and-cat>
  <sinch-icon-chatbot slot="icon"></sinch-icon-chatbot>
  <sinch-card-button slot="action" text="Click here link" onClick={noop}></sinch-card-button>
`

export const CardWithButton = Template(withButtonInnerHTML)

CardWithButton.args = {
  label: 'Report',
  header: 'Card Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
  disabled: false,
}

CardWithButton.parameters = {
  docs: {
    source: {
      code: `<sinch-card header="Card Title" text="Lorem..." label="Report">${withButtonInnerHTML}</sinch-card>`,
    },
  },
}

const cardIconInnerHTML = `
  <sinch-icon-chatbot slot="icon"></sinch-icon-chatbot>
  <sinch-card-button slot="action" text="Click here link" onClick={noop}></sinch-card-button>
`

export const IconCard = Template(cardIconInnerHTML)

IconCard.args = {
  header: 'Card Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
  disabled: false,
}

IconCard.parameters = {
  docs: {
    source: {
      code: `<sinch-card header="Card Title" text="Lorem..." label="Report">${cardIconInnerHTML}</sinch-card>`,
    },
  },
}
