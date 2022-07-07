import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/alert'
import '@sinch-engage/nectary/alert-close'
import '@sinch-engage/nectary/alert-button'

export default {
  title: 'Components/Alert',
  argTypes: {
    type: {
      description: 'Alert type',
      control: 'select',
      options: ['info', 'success', 'warn', 'error'],
    },
    multiline: {
      description: 'Multiline Alert with Title and Button',
      control: 'boolean',
    },
    text: {
      description: 'Body text',
      control: 'text',
    },
    caption: {
      description: 'Multiline Title text',
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
    caption,
    multiline,
  }] = useArgs()
  const alertRef = useRef<HTMLElementTagNameMap['sinch-alert'] | null>(null)

  if (alertRef.current === null) {
    alertRef.current = document.createElement('sinch-alert')

    alertRef.current.innerHTML = innerHTML
  }

  const $alert = alertRef.current!

  $alert.text = text
  $alert.caption = caption ?? ''
  $alert.type = type
  $alert.multiline = Boolean(multiline)

  return $alert
}

export const Alert = Template('')

Alert.args = {
  type: 'info',
  text: 'Alert with some text',
  multiline: false,
}

Alert.parameters = {
  docs: {
    source: {
      code: '<sinch-alert type="info" text={text}></sinch-alert>',
    },
  },
}

export const AlertWithClose = Template('<sinch-alert-close slot="close"></sinch-alert-close>')

AlertWithClose.args = {
  type: 'success',
  text: 'Your data has been updated',
}

AlertWithClose.parameters = {
  docs: {
    source: {
      code: `
<sinch-alert
  type="success"
  text="Your data has been updated"
>
  <sinch-alert-close slot="close" onClick={}></sinch-alert-close>
</sinch-alert>
`,
    },
  },
}

export const AlertWithButton = Template('<sinch-alert-button slot="button" text="Review"></sinch-alert-button>')

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
  <sinch-alert-button slot="button" text="Review"></sinch-alert-button>
</sinch-alert>
`,
    },
  },
}

export const AlertWithButtonAndClose = Template('<sinch-alert-button slot="button" text="Review"></sinch-alert-button><sinch-alert-close slot="close"></sinch-alert-close>')

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
  <sinch-alert-button slot="button" text="Review"></sinch-alert-button>
  <sinch-alert-close slot="close" onClick={}></sinch-alert-close>
</sinch-alert>
`,
    },
  },
}

export const AlertMultiline = Template('')

AlertMultiline.args = {
  type: 'success',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  caption: 'It has survived not only five centuries, but also the leap into electronic typesetting',
  multiline: true,
}

AlertMultiline.parameters = {
  docs: {
    source: {
      code: `
<sinch-alert
  type="success"
  text="Now proceed with your next task"
  caption="Job Done"
  multiline
></sinch-alert>
`,
    },
  },
}

export const AlertMultilineWithButtonAndClose = Template('<sinch-alert-close slot="close"></sinch-alert-close><sinch-alert-button slot="button" text="Close"></sinch-alert-button>')

AlertMultilineWithButtonAndClose.args = {
  type: 'success',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  caption: 'It has survived not only five centuries, but also the leap into electronic typesetting',
  multiline: true,
}

AlertMultilineWithButtonAndClose.parameters = {
  docs: {
    source: {
      code: `
<sinch-alert
  type="success"
  text="Now proceed with your next task"
  caption="Job Done"
  multiline
>
  <sinch-alert-close
    slot="close"
    onClick={}
  ></sinch-alert-close>
  <sinch-alert-button
    slot="button"
    text="Close"
    onClick={}
  ></sinch-alert-button>
</sinch-alert>
`,
    },
  },
}
