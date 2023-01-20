import { filterXSS } from 'xss'

// const contextTags: Record<string, [string, string]> = {
//   em1: ['<sinch-text type="m" emphasized inline>', '</sinch-text>'],
//   em2: ['<sinch-text type="m" strong inline>', '</sinch-text>'],
//   em3: ['<sinch-text type="m" emphasized strong inline>', '</sinch-text>'],
//   s: ['<sinch-text type="m" strikethrough inline>', '</sinch-text>'],
//   p: ['<sinch-text type="m">', '</sinch-text>'],
// }

const contextTags: Record<string, [string, string]> = {
  em1: ['<span class="em1">', '</span>'],
  em2: ['<span class="em2">', '</span>'],
  em3: ['<span class="em3">', '</span>'],
  s: ['<span class="strikethrough">', '</span>'],
  p: ['<p class="paragraph">', '</p>'],
}

const getContextTags = (token: string): [string, string] | null => {
  switch (token) {
    case '_':
    case '*':
      return contextTags.em1
    case '__':
    case '**':
      return contextTags.em2
    case '___':
    case '***':
      return contextTags.em3
    case '~~':
      return contextTags.s
    case 'p':
      return contextTags.p
    default:
      return null
  }
}

const encodeAttr = (str: string) => {
  return (`${str}`).replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

const tokenizer = /(?<em>___|\*\*\*|__|\*\*|[_*]|~~)|(?:!?\[(?<linktext>[^\]]*?)\]\((?<linkhref>[^)]+?)\))|(?:`(?<code>[^`].*?)`)|(?<paragraph>\n{2,})|(?<newline>\n)/gm

export const parseMarkdown = (md: string): string => {
  const context: {token: string, out: string}[] = []
  let out = ''
  let lastIndex = 0

  const isContextEnd = (token: string) => {
    return context.length > 0 && context.at(-1)!.token === token
  }

  const pushContext = (token: string) => {
    const desc = getContextTags(token)

    if (desc === null) {
      return
    }

    context.push({ token, out: '' })
  }

  const popContext = (token: string, prev: string) => {
    const desc = getContextTags(token)

    if (desc === null) {
      return token
    }

    const ctx = context.pop()!

    return `${desc[0]}${ctx.out}${prev}${desc[1]}`
  }

  const flushContext = (prev: string) => {
    let str = ''

    while (context.length > 1) {
      const ctx = context.pop()!

      str = `${ctx.token}${ctx.out}${str}`
    }

    if (context.length === 0) {
      pushContext('p')
    }

    return popContext(context.at(-1)!.token, str + prev)
  }

  // eslint-disable-next-line no-param-reassign
  md = md.trim()

  while (true) {
    const tokens = tokenizer.exec(md)

    if (tokens === null) {
      break
    }

    let prev = md.substring(lastIndex, tokens.index)
    let chunk = tokens[0]
    const groups = tokens.groups!

    lastIndex = tokenizer.lastIndex

    // Ensure paragraph
    if (context.length === 0) {
      pushContext('p')
    }

    // escaped
    if (prev.match(/[^\\](\\\\)*\\$/) != null) {
      prev = prev.substring(0, prev.length - 1)

      context.at(-1)!.out += prev + chunk

      continue
    }

    // Inline formatting: *em*, **strong** & friends
    if (groups.em != null) {
      const isCloseTag = isContextEnd(groups.em)

      if (isCloseTag) {
        chunk = popContext(groups.em, prev)
        context.at(-1)!.out += chunk

        continue
      }

      context.at(-1)!.out += prev
      pushContext(groups.em)

      continue
    }

    // Links, Images:
    if (groups.linkhref != null) {
      const href = groups.linkhref
      const text = groups.linktext.length > 0 ? groups.linktext : href

      // chunk = `<sinch-link external href="${encodeAttr(href)}" text="${encodeAttr(text)}"></sinch-link>`
      chunk = `<a class="link" href="${encodeAttr(href)}">${encodeAttr(text)}</a>`
      context.at(-1)!.out += prev + chunk

      continue
    }

    // `code`:
    if (groups.code != null) {
      // chunk = `<sinch-code-tag text="${encodeAttr(groups.code)}"></sinch-code-tag>`
      chunk = `<span class="code">${encodeAttr(groups.code)}</span>`
      context.at(-1)!.out += prev + chunk

      continue
    }

    // New line
    if (groups.newline != null) {
      chunk = '<br/>'
      context.at(-1)!.out += prev + chunk

      continue
    }

    // New paragraph
    if (groups.paragraph != null) {
      out += flushContext(prev)

      continue
    }
  }

  out = (out + flushContext(md.substring(lastIndex))).trim()

  return filterXSS(
    out,
    {
      // whiteList: {
      //   'sinch-link': ['href', 'text', 'external'],
      //   'sinch-code-tag': ['text'],
      //   'sinch-text': ['type', 'emphasized', 'strong', 'strikethrough', 'inline'],
      //   br: [],
      // },
      whiteList: {
        p: ['class'],
        span: ['class'],
        a: ['href', 'class'],
        br: [],
      },
    }
  )
}
