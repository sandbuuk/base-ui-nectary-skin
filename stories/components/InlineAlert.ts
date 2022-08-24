import { typeValues } from '@sinch-engage/nectary/inline-alert/utils'
import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/inline-alert'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

export default {
  title: 'Components/InlineAlert',
  argTypes: {
    type: {
      description: 'Inline Alert type',
      control: 'select',
      options: typeValues,
    },
    caption: {
      description: 'Alert Title',
      control: 'text',
    },
    text: {
      description: 'Body text',
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Inline Alert component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (innerHTML: string): Story => () => {
  const [{
    type,
    caption,
    text,
  }] = useArgs()
  const alertRef = useRef<HTMLElementTagNameMap['sinch-inline-alert'] | null>(null)

  if (alertRef.current === null) {
    alertRef.current = document.createElement('sinch-inline-alert')

    alertRef.current.innerHTML = innerHTML
  }

  const $alert = alertRef.current!

  $alert.caption = caption
  $alert.text = text
  $alert.type = type

  return $alert
}

export const InlineAlert = Template('')

InlineAlert.args = {
  type: 'info',
  text: 'Alert with some text',
  caption: 'Title',
}

InlineAlert.parameters = {
  docs: {
    source: {
      code: '<sinch-inline-alert type="info" caption={title} text={text}></sinch-inline-alert>',
    },
  },
}

export const InlineAlertWithClose = Template(`
<sinch-icon-button slot="close" small aria-label="Close">
  <sinch-icon-close slot="icon"></sinch-icon-close>
</sinch-icon-button>
`)

InlineAlertWithClose.args = {
  type: 'info',
  caption: 'Title',
  text: 'Your data has been updated',
}

InlineAlertWithClose.parameters = {
  docs: {
    source: {
      code: `
<sinch-inline-alert
  type="info"
  caption="Title"
  text="Your data has been updated"
  aria-label="Close"
>
  <sinch-icon-button slot="close" small>
    <sinch-icon-close slot="icon"/>
  </sinch-icon-button>
</sinch-inline-alert>
`,
    },
  },
}

export const InlineAlertWithButton = Template(`
<sinch-button
  slot="action"
  type="cta-secondary"
  small
  text="This is a Button!"
  aria-label="Action"
></sinch-button>
`)

InlineAlertWithButton.args = {
  type: 'warn',
  caption: 'Title',
  text: 'Your task is not complete',
}

InlineAlertWithButton.parameters = {
  docs: {
    source: {
      code: `
<sinch-inline-alert
  type="warn"
  caption="Title"
  text="Your task is not complete"
>
  <sinch-button
    slot="action"
    type="cta-secondary"
    small
    text="This is a Button!"
    aria-label="Action"
  />
</sinch-inline-alert>
`,
    },
  },
}

export const InlineAlertWithButtonAndClose = Template(`
<sinch-button
  slot="action"
  type="cta-secondary"
  small
  text="This is a Button!"
  aria-label="Action"
></sinch-button>
<sinch-icon-button slot="close" small aria-label="Close">
  <sinch-icon-close slot="icon"></sinch-icon-close>
</sinch-icon-button>
`)

InlineAlertWithButtonAndClose.args = {
  type: 'warn',
  caption: 'Title',
  text: 'Your task is not complete',
}

InlineAlertWithButtonAndClose.parameters = {
  docs: {
    source: {
      code: `
<sinch-inline-alert
  type="warn"
  caption="Title"
  text="Your task is not complete"
>
  <sinch-button
    slot="action"
    type="cta-secondary"
    small
    text="This is a Button!"
    aria-label="Action"
  />
  <sinch-icon-button slot="close" small aria-label="Close">
    <sinch-icon-close slot="icon"/>
  </sinch-icon-button>
</sinch-inline-alert>
`,
    },
  },
}
