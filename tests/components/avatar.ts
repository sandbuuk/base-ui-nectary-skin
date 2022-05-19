import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const imageData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A808EaqltrEaXBLJOhjBXkqevH16Vs30iLqbrbq0jyzEoi/ek5rgdAEt1qtlFb5P70Mxxjgcnj6D+Vdn4f+w32v6n/aW0izVPKAbA3Hk9O+cflXDSpxoV54mPxWS/P/I63B1+Wk9jsvDl8BO+nX9tLb3LL8sb4IkHp/n1rltctjbz3VoowElZR9M8fpW1bWtreeN9KfTyzXV0zSSbWDBVBBycfQVieLr8S6xqE8Z4Nw4A9skCscZVc0pS3OuhRVOThHY858N3SR61lYs5XaChA2jPJ6HPHFTvLex67LeWBKb5SvIBzxzx0xx+lW20R9O1GeLTyd8tukwU8lAcgqD9abpmm39xN9m8mWPJw0h6KP8APpXc4X+Fas5YS5W3N2senfDa7jsI57x2jn1eYgbyufLTnoMYH09D0rpLn4c2nim1a50aQWV82SYmJMUjZPryvQ+o9hXJ6TBFpFkUTcNoySe9eheCtY8jULJPMXYI8gbhjHU/5/MHrU18NGMeWWrHTrupNyjoj//Z'

const withAlt = '/avatar?alt=NS'
const check = makeAccessibilityTests('/avatar?alt=NS', 'sinch-avatar')
const sizeValues = ['l', 'm', 's'] as const
const backgroundValues = ['blue', 'yellow', 'grey'] as const

test('accessibility', check(async function* () {
  yield
}))

test('avatar screenshots', runScreenshotTests('sinch-avatar', [
  {
    name: 'size property',
    url: withAlt,
    async *fn({ $eval }) {
      for (const val of sizeValues) {
        await $eval((el, val) => {
          el.size = val
        }, val)
        yield { name: val }
      }
    },
  },
  {
    name: 'size attribute',
    url: withAlt,
    async *fn({ $eval }) {
      for (const val of sizeValues) {
        await $eval((el, val) => {
          el.setAttribute('size', val)
        }, val)
        yield { name: val }
      }
    },
  },
  {
    name: 'background property',
    url: withAlt,
    async *fn({ $eval }) {
      for (const val of backgroundValues) {
        await $eval((el, val) => {
          el.background = val
        }, val)
        yield { name: val }
      }
    },
  },
  {
    name: 'background attribute',
    url: withAlt,
    async *fn({ $eval }) {
      for (const val of backgroundValues) {
        await $eval((el, val) => {
          el.setAttribute('background', val)
        }, val)
        yield { name: val }
      }
    },
  },
  {
    name: 'alt property',
    url: withAlt,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.alt = 'XX'
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'alt attribute',
    url: withAlt,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('alt', 'XX')
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'src attribute',
    url: withAlt,
    async *fn({ $eval }) {
      await $eval((el, imageData) => {
        el.setAttribute('src', imageData)
      }, imageData)
      yield { name: 'set' }
    },
  },
  {
    name: 'src property',
    url: withAlt,
    async *fn({ $eval }) {
      await $eval((el, imageData) => {
        el.src = imageData
      }, imageData)
      yield { name: 'set' }
    },
  },
]))
