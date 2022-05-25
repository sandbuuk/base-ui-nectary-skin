import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'

const withCustomerBubble = '/chat?example=bubble&type=customer'
const withAgentBubble = '/chat?example=bubble&type=agent'
const withAgentPrevBubble = '/chat?example=bubble&type=agent-prev'
const withEverything = '/chat'

test('chat bubble screenshots', runScreenshotTests('sinch-chat-block', [
  {
    name: 'customer',
    url: withCustomerBubble,
    async *fn() {
      yield { name: 'shot' }
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
    async *fn({ $eval }) {
      await $eval((el) => {
        el.type = 'agent'
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'type attribute',
    url: withCustomerBubble,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('type', 'agent')
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'firstName property',
    url: withCustomerBubble,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.firstName = 'Sven'
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'firstName attribute',
    url: withCustomerBubble,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('firstname', 'Sven')
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'lastName property',
    url: withCustomerBubble,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.lastName = 'Svensson'
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'lastName attribute',
    url: withCustomerBubble,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('lastname', 'Svensson')
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'timestamp property',
    url: withCustomerBubble,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.timestamp = '3:00pm'
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'timestamp attribute',
    url: withCustomerBubble,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('timestamp', '3:00pm')
      })
      yield { name: 'updated' }
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
