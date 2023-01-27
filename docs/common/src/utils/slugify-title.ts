import { convert } from 'url-slug'

const titleContext: string[] = []
const HEADER_LEVEL_OFFSET = 2

export const slugify = (text: string, level: number): string => {
  const id = convert(text)
  const contextIndex = level - HEADER_LEVEL_OFFSET

  if (contextIndex < 0) {
    return id
  }

  if (contextIndex === 0) {
    titleContext[0] = id

    return id
  }

  titleContext[contextIndex] = `${titleContext[contextIndex - 1]}-${id}`

  return titleContext[contextIndex]
}
