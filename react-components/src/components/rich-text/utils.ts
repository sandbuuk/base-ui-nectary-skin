/**
 * Rich text node types
 */
export type RichTextNodeType =
  | 'text'
  | 'bold'
  | 'italic'
  | 'strikethrough'
  | 'code'
  | 'link'
  | 'chip'
  | 'emoji'
  | 'linebreak'
  | 'paragraph'
  | 'list'
  | 'listItem'

/**
 * Rich text node structure
 */
export interface RichTextNode {
  type: RichTextNodeType,
  content?: string,
  children?: RichTextNode[],
  href?: string,
  external?: boolean,
  ordered?: boolean,
}

/**
 * Simple markdown-like parser for rich text
 *
 * Supports:
 * - **bold**
 * - *italic*
 * - ~~strikethrough~~
 * - `code`
 * - [link](url)
 * - {{chip}}
 * - Emojis (unicode detection)
 * - Line breaks
 * - Lists (- item, 1. item)
 */
export function parseRichText(text: string): RichTextNode[] {
  if (text === '' || text === null || text === undefined) {
    return []
  }

  const lines = text.split('\n')
  const result: RichTextNode[] = []
  let currentList: RichTextNode | null = null
  let listItems: RichTextNode[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Check for unordered list item
    const ulMatch = line.match(/^[-*]\s+(.*)$/)

    if (ulMatch !== null) {
      if (currentList === null || currentList.ordered === true) {
        // Start new unordered list
        if (currentList !== null) {
          currentList.children = listItems
          result.push(currentList)
        }

        currentList = { type: 'list', ordered: false, children: [] }
        listItems = []
      }

      listItems.push({
        type: 'listItem',
        children: parseInline(ulMatch[1]),
      })

      continue
    }

    // Check for ordered list item
    const olMatch = line.match(/^(\d+)\.\s+(.*)$/)

    if (olMatch !== null) {
      if (currentList === null || currentList.ordered === false) {
        // Start new ordered list
        if (currentList !== null) {
          currentList.children = listItems
          result.push(currentList)
        }

        currentList = { type: 'list', ordered: true, children: [] }
        listItems = []
      }

      listItems.push({
        type: 'listItem',
        children: parseInline(olMatch[2]),
      })

      continue
    }

    // Not a list item - end current list if any
    if (currentList !== null) {
      currentList.children = listItems
      result.push(currentList)
      currentList = null
      listItems = []
    }

    // Empty line
    if (line.trim() === '') {
      if (result.length > 0) {
        result.push({ type: 'linebreak' })
      }

      continue
    }

    // Regular paragraph
    result.push({
      type: 'paragraph',
      children: parseInline(line),
    })
  }

  // End any remaining list
  if (currentList !== null) {
    currentList.children = listItems
    result.push(currentList)
  }

  return result
}

/**
 * Parse inline formatting
 */
function parseInline(text: string): RichTextNode[] {
  const nodes: RichTextNode[] = []
  let remaining = text

  while (remaining.length > 0) {
    // Try to match patterns in order of precedence

    // Escaped characters
    const escapeMatch = remaining.match(/^\\(.)/)

    if (escapeMatch !== null) {
      nodes.push({ type: 'text', content: escapeMatch[1] })
      remaining = remaining.slice(escapeMatch[0].length)

      continue
    }

    // Chip/Tag pattern: {{tagname}}
    const chipMatch = remaining.match(/^\{\{([a-zA-Z0-9_-]+)\}\}/)

    if (chipMatch !== null) {
      nodes.push({ type: 'chip', content: chipMatch[1] })
      remaining = remaining.slice(chipMatch[0].length)

      continue
    }

    // Code pattern: `code`
    const codeMatch = remaining.match(/^`([^`]+)`/)

    if (codeMatch !== null) {
      nodes.push({ type: 'code', content: codeMatch[1] })
      remaining = remaining.slice(codeMatch[0].length)

      continue
    }

    // Bold pattern: **text**
    const boldMatch = remaining.match(/^\*\*(.+?)\*\*/)

    if (boldMatch !== null) {
      nodes.push({
        type: 'bold',
        children: parseInline(boldMatch[1]),
      })
      remaining = remaining.slice(boldMatch[0].length)

      continue
    }

    // Italic pattern: *text*
    const italicMatch = remaining.match(/^\*([^*]+)\*/)

    if (italicMatch !== null) {
      nodes.push({
        type: 'italic',
        children: parseInline(italicMatch[1]),
      })
      remaining = remaining.slice(italicMatch[0].length)

      continue
    }

    // Strikethrough pattern: ~~text~~
    const strikeMatch = remaining.match(/^~~(.+?)~~/)

    if (strikeMatch !== null) {
      nodes.push({
        type: 'strikethrough',
        children: parseInline(strikeMatch[1]),
      })
      remaining = remaining.slice(strikeMatch[0].length)

      continue
    }

    // Link pattern: [text](url) or [text](url){attrs}
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)(?:\{([^}]+)\})?/)

    if (linkMatch !== null) {
      const attrs = linkMatch[3]?.split(',').map(a => a.trim()) ?? []
      nodes.push({
        type: 'link',
        content: linkMatch[1],
        href: linkMatch[2],
        external: attrs.includes('external'),
      })
      remaining = remaining.slice(linkMatch[0].length)

      continue
    }

    // Emoji detection (common emoji ranges)
    const emojiMatch = remaining.match(/^([\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}])/u)

    if (emojiMatch !== null) {
      nodes.push({ type: 'emoji', content: emojiMatch[1] })
      remaining = remaining.slice(emojiMatch[0].length)

      continue
    }

    // Plain text - consume until next special character or end
    const textMatch = remaining.match(/^[^*`\[\\{~\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]+/u)

    if (textMatch !== null) {
      nodes.push({ type: 'text', content: textMatch[0] })
      remaining = remaining.slice(textMatch[0].length)

      continue
    }

    // Fallback: consume one character as text
    nodes.push({ type: 'text', content: remaining[0] })
    remaining = remaining.slice(1)
  }

  return nodes
}
