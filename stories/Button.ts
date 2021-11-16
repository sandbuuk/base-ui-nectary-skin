import type { TSinchButton } from '@saas/components/button'
import type { Story, Meta } from '@storybook/html'
import '@saas/components/theme.css'
import '@saas/components/button'
import '@saas/components/icon/share'

export default {
  title: 'Components/Button',
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'cta', 'destructive'] },
    text: { control: 'text' },
    disabled: { action: 'boolean' },
    small: { action: 'boolean' },
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<TSinchButton> = ({ type, text, disabled, small, onClick }) => {
  const button = document.createElement('sinch-button')

  button.type = type
  button.text = text
  button.disabled = disabled
  button.small = small
  button.onClick = onClick

  return button
}

export const Button = Template.bind({})

Button.args = {
  type: 'primary',
  text: 'Click me',
  disabled: false,
  small: false,
}

Button.parameters = {
  docs: {
    inlineStories: true,
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}></sinch-button>',
    },
  },
  backgrounds: {
    default: 'Light',
    values: [
      { name: 'Light', value: '#fff' },
      { name: 'Dark', value: '#1c233f' },
    ],
  },
}

export const ButtonWithLeftIcon = Template.bind({})
ButtonWithLeftIcon.args = Button.args
ButtonWithLeftIcon.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}>\n  <sinch-icon-share slot="left-icon"></sinch-icon-share>\n</sinch-button>',
    },
  },
}
ButtonWithLeftIcon.decorators = [
  (Story) => {
    const button = Story() as Element

    button.innerHTML = `<sinch-icon-share slot="left-icon"></sinch-icon-share>`

    return button
  },
]

export const ButtonWithRightIcon = Template.bind({})
ButtonWithRightIcon.args = Button.args
ButtonWithRightIcon.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}>\n  <sinch-icon-share slot="right-icon"></sinch-icon-share>\n</sinch-button>',
    },
  },
}
ButtonWithRightIcon.decorators = [
  (Story) => {
    const button = Story() as Element

    button.innerHTML = `<sinch-icon-share slot="right-icon"></sinch-icon-share>`

    return button
  },
]

export const ButtonWithBothIcons = Template.bind({})
ButtonWithBothIcons.args = Button.args
ButtonWithBothIcons.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}>\n  <sinch-icon-share slot="left-icon"></sinch-icon-share>\n  <sinch-icon-share slot="right-icon"></sinch-icon-share>\n</sinch-button>',
    },
  },
}
ButtonWithBothIcons.decorators = [
  (Story) => {
    const button = Story() as Element

    button.innerHTML = `<sinch-icon-share slot="left-icon"></sinch-icon-share><sinch-icon-share slot="right-icon"></sinch-icon-share>`

    return button
  },
]
