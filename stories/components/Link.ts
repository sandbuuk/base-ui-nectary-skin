import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/link'

export default {
  title: 'Components/Link',
  argTypes: {
    text: {
      description: 'Link text',
      control: 'text',
    },
    href: {
      description: 'Link url',
      control: 'text',
    },
    external: {
      description: 'External link style',
      control: 'boolean',
    },
    standalone: {
      description: 'Standalone link style',
      control: 'boolean',
    },
    disabled: {
      description: 'Is link disabled',
      control: 'boolean',
    },
    preventDefault: {
      description: 'Whether link should prevent default behavour on click',
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Link component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (innerHTML?: string): Story => () => {
  const [{
    text,
    href,
    disabled,
    external,
    standalone,
    preventDefault,
  }] = useArgs()
  const linkRef = useRef<HTMLElementTagNameMap['sinch-link'] | null>(null)

  if (linkRef.current === null) {
    linkRef.current = document.createElement('sinch-link')

    if (innerHTML != null) {
      linkRef.current.innerHTML = innerHTML
    }
  }

  const $link = linkRef.current!

  $link.text = text
  $link.href = href
  $link.external = external
  $link.disabled = disabled
  $link.standalone = standalone
  $link.preventDefault = preventDefault

  return $link
}

export const Link = Template()

Link.args = {
  text: 'Navigate to internal page',
  href: '#',
  external: false,
  standalone: false,
  disabled: false,
  preventDefault: true,
}

Link.parameters = {
  docs: {
    source: {
      code: '<sinch-link href="#" text="Link" disabled={isDisabled}></sinch-link>',
    },
  },
}

export const LinkExternal = Template()

LinkExternal.args = {
  text: 'Goto Google',
  href: 'https://google.com',
  external: true,
  disabled: false,
  preventDefault: true,
}

LinkExternal.parameters = {
  docs: {
    source: {
      code: '<sinch-link href="https://google.com" text="Goto Google" external></sinch-link>',
    },
  },
}

export const LinkStandalone = Template()

LinkStandalone.args = {
  text: 'Goto Google',
  href: 'https://google.com',
  external: false,
  standalone: true,
  disabled: false,
  preventDefault: true,
}

LinkStandalone.parameters = {
  docs: {
    source: {
      code: '<sinch-link href="https://google.com" text="Goto Google" external></sinch-link>',
    },
  },
}
