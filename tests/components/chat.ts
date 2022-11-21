import { test } from '@playwright/test'
import { statusValues, typeValues } from '@sinch-engage/nectary/chat-bubble/utils'
import { runScreenshotTests } from '../screenshot-tests'

const withCustomerBubble = '/chat?example=bubble&type=customer'
const withAgentBubble = '/chat?example=bubble&type=agent'
const withEverything = '/chat'

test('chat bubble screenshots', runScreenshotTests('sinch-chat-block', [
  {
    name: 'type',
    url: withCustomerBubble,
    async *fn({ page, $eval }) {
      const avatar = page.locator('sinch-avatar')

      for (const type of typeValues) {
        await $eval((el, value) => el.setAttribute('type', value), type)
        yield { name: type, include: [avatar] }
      }
    },
  },
  {
    name: 'firstname lastname timestamp',
    url: withCustomerBubble,
    async *fn({ page, $eval }) {
      const avatar = page.locator('sinch-avatar')

      await $eval((el) => {
        el.setAttribute('firstname', 'Sven')
        el.setAttribute('lastname', 'Svensson')
        el.setAttribute('timestamp', '3:00pm')
      })
      yield { name: 'updated', include: [avatar] }
    },
  },
  {
    name: 'status',
    url: withAgentBubble,
    async *fn({ page }) {
      const bubble = page.locator('sinch-chat-bubble')

      for (const value of statusValues) {
        await bubble.evaluate((el, value) => el.setAttribute('status', value), value)
        yield { name: value }
      }
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
