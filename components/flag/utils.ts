import { getCssVar } from '../utils'

// Cache flag Url
let flagUrl: string | null = null

export const getFlagUrl = (root: Element, code: string | null): string => {
  if (code === null || code.length === 0) {
    return ''
  }

  // Lazy get Url from CSS variable
  if (flagUrl === null) {
    flagUrl = getCssVar(root, '--sinch-flag-src-url')

    if (flagUrl !== null) {
      flagUrl = flagUrl.replaceAll('"', '').trim()
    }
  }

  if (flagUrl === null) {
    return ''
  }

  return flagUrl.replace('%s', code)
}
