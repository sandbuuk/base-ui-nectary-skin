import { getAttribute, getCssVar, updateAttribute } from '../utils'

const vs16RegExp = /\uFE0F/g
// avoid using a string literal like '\u200D' here because minifiers expand it inline
const zeroWidthJoiner = String.fromCharCode(0x200d)

const removeVS16s = (rawEmoji: string) =>
  (rawEmoji.indexOf(zeroWidthJoiner) < 0
    ? rawEmoji.replace(vs16RegExp, '')
    : rawEmoji)

function toCodePoints(unicodeSurrogates: string): string[] {
  const points = []
  let char = 0
  let previous = 0
  let i = 0

  while (i < unicodeSurrogates.length) {
    char = unicodeSurrogates.charCodeAt(i++)

    if (previous !== 0) {
      points.push((0x10000 + ((previous - 0xd800) << 10) + (char - 0xdc00)).toString(16))
      previous = 0
    } else if (char > 0xd800 && char <= 0xdbff) {
      previous = char
    } else {
      points.push(char.toString(16))
    }
  }

  return points
}

const BASE_URL_ATTR = 'data-emoji-base-url'

export const setEmojiBaseUrl = (emojiEl: Element, baseUrl: string | null) => {
  updateAttribute(emojiEl, BASE_URL_ATTR, baseUrl)
}

export const getEmojiBaseUrl = (root: Element): string | null => {
  let baseUrl = getAttribute(root, BASE_URL_ATTR)

  if (baseUrl !== null) {
    return baseUrl
  }

  baseUrl = getCssVar(root, '--sinch-emoji-src-url')

  if (baseUrl !== null) {
    return baseUrl.replaceAll('"', '').trim()
  }

  return null
}

export const getEmojiUrl = (baseUrl: string | null, char: string | null): string => {
  if (char === null || char.length === 0 || baseUrl === null) {
    return ''
  }

  let codepoints = toCodePoints(removeVS16s(char)).join('-')

  // Fix for "Eye in Speech Bubble" emoji
  if (codepoints === '1f441-fe0f-200d-1f5e8-fe0f') {
    codepoints = '1f441-200d-1f5e8'
  }

  // Fix for "copyright" and "trademark" emojis
  // if (codepoints.startsWith('00')) {
  //   codepoints = codepoints.substring(2).replace(/-fe0f/, '')
  // }

  return baseUrl.replace('%s', codepoints)
}
