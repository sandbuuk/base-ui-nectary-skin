import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@nectary/components/alert'

export default {
  title: 'Components/Alert',
  argTypes: {
    type: {
      description: 'Alert type',
      control: 'select',
      options: ['info', 'success', 'warn', 'error'],
    },
    dismissable: {
      description: 'Shows close icon',
      control: 'boolean',
    },
    multiline: {
      description: 'Multiline Alert with Title and Button',
      control: 'boolean',
    },
    text: {
      description: 'Body text',
      control: 'text',
    },
    title: {
      description: 'Multiline Title text',
      control: 'text',
    },
    actionText: {
      description: 'Action button text',
      control: 'text',
    },
    onAction: {
      description: 'Action button click handler',
      action: 'onAction',
    },
    onDismiss: {
      description: 'Dismiss button click handler',
      action: 'onDismiss',
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

const Template: Story<JSX.IntrinsicElements['sinch-alert']> = ({ onAction, onDismiss }) => {
  const [{
    type,
    text,
    title,
    actionText,
    dismissable,
    multiline,
  }] = useArgs()
  const alertRef = useRef<HTMLElementTagNameMap['sinch-alert'] | null>(null)

  if (alertRef.current === null) {
    alertRef.current = document.createElement('sinch-alert')

    alertRef.current.addEventListener('dismiss', () => {
      onDismiss?.()
    })

    alertRef.current.addEventListener('action', () => {
      onAction?.()
    })
  }

  const $alert = alertRef.current!

  $alert.text = text
  $alert.title = title ?? ''
  $alert.actionText = actionText ?? ''
  $alert.type = type
  $alert.dismissable = Boolean(dismissable)
  $alert.multiline = Boolean(multiline)

  return $alert
}

export const Alert = Template.bind({})

Alert.args = {
  type: 'info',
  text: 'Alert with some text',
  dismissable: false,
  multiline: false,
}

Alert.parameters = {
  docs: {
    source: {
      code: '<sinch-alert type="info" text={text}></sinch-alert>',
    },
  },
}

export const AlertWithAction = Template.bind({})

AlertWithAction.args = {
  type: 'warn',
  text: 'Your task is not complete',
  actionText: 'I Agree',
}

AlertWithAction.parameters = {
  docs: {
    source: {
      code: `
<sinch-alert
  type="warn"
  text="Your task is not complete"
  actionText="I agree">
</sinch-alert>
`,
    },
  },
}

export const AlertMultiline = Template.bind({})

AlertMultiline.args = {
  type: 'success',
  text: 'Now proceed with your next task',
  title: 'Job Done',
  actionText: 'Continue',
  dismissable: true,
  multiline: true,
}

AlertMultiline.parameters = {
  docs: {
    source: {
      code: `
<sinch-alert
  type="success"
  text="Now proceed with your next task"
  title="Job Done"
  actionText="Continue"
  dismissable
  multiline>
</sinch-alert>
`,
    },
  },
}
