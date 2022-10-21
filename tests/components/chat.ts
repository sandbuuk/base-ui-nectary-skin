import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'
import type { TSinchChatBubbleElement } from '@sinch-engage/nectary/chat-bubble/types'

const withCustomerBubble = '/chat?example=bubble&type=customer'
const withAgentBubble = '/chat?example=bubble&type=agent'
const withAgentPrevBubble = '/chat?example=bubble&type=agent-prev'
const withEverything = '/chat'

test('chat bubble screenshots', runScreenshotTests('sinch-chat-block', [
  {
    name: 'customer',
    url: withCustomerBubble,
    async *fn({ page }) {
      const avatar = page.locator('sinch-avatar')

      yield { name: 'shot', include: [avatar] }
    },
  },
  {
    name: 'agent',
    url: withAgentBubble,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'agent-prev',
    url: withAgentPrevBubble,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'type property',
    url: withCustomerBubble,
    async *fn({ page, $eval }) {
      const avatar = page.locator('sinch-avatar')

      await $eval((el) => {
        el.type = 'agent'
      })
      yield { name: 'updated', include: [avatar] }
    },
  },
  {
    name: 'type attribute',
    url: withCustomerBubble,
    async *fn({ page, $eval }) {
      const avatar = page.locator('sinch-avatar')

      await $eval((el) => {
        el.setAttribute('type', 'agent')
      })
      yield { name: 'updated', include: [avatar] }
    },
  },
  {
    name: 'firstName property',
    url: withCustomerBubble,
    async *fn({ page, $eval }) {
      const avatar = page.locator('sinch-avatar')

      await $eval((el) => {
        el.firstName = 'Sven'
      })
      yield { name: 'updated', include: [avatar] }
    },
  },
  {
    name: 'firstName attribute',
    url: withCustomerBubble,
    async *fn({ page, $eval }) {
      const avatar = page.locator('sinch-avatar')

      await $eval((el) => {
        el.setAttribute('firstname', 'Sven')
      })
      yield { name: 'updated', include: [avatar] }
    },
  },
  {
    name: 'lastName property',
    url: withCustomerBubble,
    async *fn({ page, $eval }) {
      const avatar = page.locator('sinch-avatar')

      await $eval((el) => {
        el.lastName = 'Svensson'
      })
      yield { name: 'updated', include: [avatar] }
    },
  },
  {
    name: 'lastName attribute',
    url: withCustomerBubble,
    async *fn({ page, $eval }) {
      const avatar = page.locator('sinch-avatar')

      await $eval((el) => {
        el.setAttribute('lastname', 'Svensson')
      })
      yield { name: 'updated', include: [avatar] }
    },
  },
  {
    name: 'timestamp property',
    url: withCustomerBubble,
    async *fn({ page, $eval }) {
      const avatar = page.locator('sinch-avatar')

      await $eval((el) => {
        el.timestamp = '3:00pm'
      })
      yield { name: 'updated', include: [avatar] }
    },
  },
  {
    name: 'timestamp attribute',
    url: withCustomerBubble,
    async *fn({ page, $eval }) {
      const avatar = page.locator('sinch-avatar')

      await $eval((el) => {
        el.setAttribute('timestamp', '3:00pm')
      })
      yield { name: 'updated', include: [avatar] }
    },
  },
  {
    name: 'status attribute',
    url: withAgentBubble,
    async *fn({ page }) {
      const bubble = page.locator('sinch-chat-bubble')

      await bubble.evaluate((el) => el.setAttribute('status', 'sending'))
      yield { name: 'sending' }

      await bubble.evaluate((el) => el.setAttribute('status', 'sent'))
      yield { name: 'sent' }

      await bubble.evaluate((el) => el.setAttribute('status', 'received'))
      yield { name: 'received' }

      await bubble.evaluate((el) => el.setAttribute('status', 'seen'))
      yield { name: 'seen' }

      await bubble.evaluate((el) => el.setAttribute('status', 'error'))
      yield { name: 'error' }
    },
  },

  {
    name: 'status property',
    url: withAgentBubble,
    async *fn({ page }) {
      const bubble = page.locator('sinch-chat-bubble')

      await bubble.evaluate((el: TSinchChatBubbleElement) => {
        el.status = 'sending'
      })
      yield { name: 'sending' }

      await bubble.evaluate((el: TSinchChatBubbleElement) => {
        el.status = 'sent'
      })
      yield { name: 'sent' }

      await bubble.evaluate((el: TSinchChatBubbleElement) => {
        el.status = 'received'
      })
      yield { name: 'received' }

      await bubble.evaluate((el: TSinchChatBubbleElement) => {
        el.status = 'seen'
      })
      yield { name: 'seen' }

      await bubble.evaluate((el: TSinchChatBubbleElement) => {
        el.status = 'error'
      })
      yield { name: 'error' }
    },
  },
]))

test('chat screenshots', runScreenshotTests('sinch-chat', [
  {
    name: 'everything',
    url: withEverything,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))
