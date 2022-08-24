import { typeValues } from '@sinch-engage/nectary/alert/utils'
import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/alert'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

export default {
  title: 'Components/Alert',
  argTypes: {
    type: {
      description: 'Alert type',
      control: 'select',
      options: typeValues,
    },
    text: {
      description: 'Body text',
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Alert component',
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
    text,
  }] = useArgs()
  const alertRef = useRef<HTMLElementTagNameMap['sinch-alert'] | null>(null)

  if (alertRef.current === null) {
    alertRef.current = document.createElement('sinch-alert')

    alertRef.current.innerHTML = innerHTML
  }

  const $alert = alertRef.current!

  $alert.text = text
  $alert.type = type

  return $alert
}

export const Alert = Template('')

Alert.args = {
  type: 'info',
  text: 'Alert with some text',
}

Alert.parameters = {
  docs: {
    source: {
      code: '<sinch-alert type="info" text={text}></sinch-alert>',
    },
  },
}

export const AlertWithClose = Template(`
<sinch-icon-button slot="close" small aria-label="Close">
  <sinch-icon-close slot="icon"></sinch-icon-close>
</sinch-icon-button>
`)

AlertWithClose.args = {
  type: 'info',
  text: 'Your data has been updated',
}

AlertWithClose.parameters = {
  docs: {
    source: {
      code: `
<sinch-alert
  type="info"
  text="Your data has been updated"
  aria-label="Close"
>
  <sinch-icon-button slot="close" small>
    <sinch-icon-close slot="icon"/>
  </sinch-icon-button>
</sinch-alert>
`,
    },
  },
}

export const AlertWithButton = Template(`
<sinch-button
  slot="action"
  type="cta-secondary"
  small
  text="This is a Button!"
  aria-label="Action"
></sinch-button>
`)

AlertWithButton.args = {
  type: 'warn',
  text: 'Your task is not complete',
}

AlertWithButton.parameters = {
  docs: {
    source: {
      code: `
<sinch-alert
  type="warn"
  text="Your task is not complete"
>
  <sinch-button
    slot="action"
    type="cta-secondary"
    small
    text="This is a Button!"
    aria-label="Action"
  />
</sinch-alert>
`,
    },
  },
}

export const AlertWithButtonAndClose = Template(`
<sinch-button
  slot="action"
  type="cta-secondary"
  small
  text="This is a Button!"
  aria-label="Action"
></sinch-button>
<sinch-icon-button slot="close" small>
  <sinch-icon-close slot="icon"></sinch-icon-close>
</sinch-icon-button>
`)

AlertWithButtonAndClose.args = {
  type: 'warn',
  text: 'Your task is not complete',
}

AlertWithButtonAndClose.parameters = {
  docs: {
    source: {
      code: `
<sinch-alert
  type="warn"
  text="Your task is not complete"
>
  <sinch-button
    slot="action"
    type="cta-secondary"
    small
    text="This is a Button!"
    aria-label="Action"
  />
  <sinch-icon-button slot="close" small>
    <sinch-icon-close slot="icon"/>
  </sinch-icon-button>
</sinch-alert>
`,
    },
  },
}
