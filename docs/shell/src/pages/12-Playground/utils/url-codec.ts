import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'

/**
 * Encodes code to a URL-safe compressed string
 */
export const encodeCode = (code: string): string => {
  return compressToEncodedURIComponent(code)
}

/**
 * Decodes a URL-safe compressed string back to code
 */
export const decodeCode = (encoded: string): string | null => {
  try {
    return decompressFromEncodedURIComponent(encoded)
  } catch {
    return null
  }
}

/**
 * Gets the shareable URL with the code encoded in it
 */
export const getShareableUrl = (code: string): string => {
  const encoded = encodeCode(code)
  const url = new URL(window.location.href)

  url.searchParams.set('path', '/playground')
  url.searchParams.set('code', encoded)

  return url.toString()
}

/**
 * Extracts code from the current URL if present
 */
export const getCodeFromUrl = (): string | null => {
  const params = new URLSearchParams(window.location.search)
  const encoded = params.get('code')

  if (encoded === null) {
    return null
  }

  return decodeCode(encoded)
}
