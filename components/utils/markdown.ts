export type TMarkdownInlineParams = {
  isBold?: boolean,
  isItalic?: boolean,
  isStrikethrough?: boolean,
}

export type TMarkdownParseVisitor = {
  escaped(char: string): void,
  link(text: string, href: string, attributes?: string[]): void,
  emoji(emojiChar: string): void,
  codetag(text: string): void,
  inline(text: string, params: TMarkdownInlineParams): void,
  linebreak(): void,
  paragraph(): void,
  list(isOrdered: boolean): void,
  endList(): void,
  listItem(): void,
  end(): Node,
}

const regLinebreak = /(?:<br>\n|<br>|\n)/
const regParagraph = /\n{2,}/
const regEm3Star = /(?<!\\)\*\*\*(?<em3>.+?)(?<!\\)\*\*\*/
const regEm2Star = /(?<!\\)\*\*(?<em2>.+?)(?<!\\)\*\*/
const regEm1Star = /(?<!\\)\*(?<em1>.+?)(?<!\\)\*/
const regEm3Underscore = /(?<!\\)___(?<em3>.+?)(?<!\\)___/
const regEm2Underscore = /(?<!\\)__(?<em2>.+?)(?<!\\)__/
const regEm1Underscore = /(?<!\\)_(?<em1>.+?)(?<!\\)_/
const regCodeTag = /(?<!\\)`(?<code>.+?)(?<!\\)`/
const regStrikethrough = /(?<!\\)~~(?<strike>.+?)(?<!\\)~~/
const regLink = /(?<!\\)!?\[(?<linktext>[^\]]*?)\]\((?<linkhref>[^)]+?)\)(\{(?<linkattrs>[^)]+?)\})?/
const regEmoji = /(?<emoji>(?![0-9*#])\p{Emoji})/u
const regUList = /^(?<indent>[\t ]*?)[*+-][\t ]+(?<ultext>.*?)[\t ]*?$/
const regOList = /^(?<indent>[\t ]*?)\d+\.[\t ]+(?<oltext>.*?)[\t ]*?$/
// eslint-disable-next-line no-useless-escape
const regEscapedChars = /\\(?<escaped>[\\\*_\[\]`~])/

const allRegs = [
  regEscapedChars,
  regCodeTag,
  regLink,
  regEm3Star,
  regEm2Star,
  regEm1Star,
  regEm3Underscore,
  regEm2Underscore,
  regEm1Underscore,
  regStrikethrough,
  regEmoji,
]

export const isEmojiString = (data: string) => regEmoji.test(data)

const excludeRegs = (regs: RegExp[], ...excluding: RegExp[]) => regs.filter((r) => !excluding.includes(r))

const matchClosest = (regs: RegExp[], line: string): RegExpExecArray | null => {
  return regs
    .map((reg) => reg.exec(line))
    .reduce<RegExpExecArray | null>((res, match) => {
    if (match === null) {
      return res
    }

    if (res === null || res.index > match.index) {
      return match
    }

    return res
  }, null)
}

const INITIAL_CONTEXT: Readonly<TMarkdownInlineParams> = {
  isBold: false,
  isItalic: false,
  isStrikethrough: false,
}

const createLineParser = (visitor: Readonly<TMarkdownParseVisitor>) =>
  function parseLine(regs: RegExp[], md: string, context: Readonly<TMarkdownInlineParams> = INITIAL_CONTEXT) {
    let line = md
    let match: RegExpExecArray | null = null

    while ((match = matchClosest(regs, line)) !== null) {
      const groups = match.groups
      const matchedStr = match[0]

      if (match.index > 0) {
        visitor.inline(line.substring(0, match.index), context)
      }

      line = line.substring(match.index + matchedStr.length)

      // Handle escaped characters first
      if (groups?.escaped != null) {
        visitor.escaped(groups.escaped)
        continue
      }

      // Continue with other matches only if not escaped
      if (groups?.linkhref != null) {
        visitor.link(groups.linktext, groups.linkhref, groups.linkattrs?.split(' '))
      }

      if (groups?.code != null) {
        visitor.codetag(groups.code)
      }

      if (groups?.emoji != null) {
        visitor.emoji(groups.emoji)
      }

      if (groups?.em1 != null) {
        parseLine(
          excludeRegs(regs, regEm1Star, regEm1Underscore),
          groups.em1,
          { ...context, isItalic: true }
        )
      }

      if (groups?.em2 != null) {
        parseLine(
          excludeRegs(regs, regEm2Star, regEm2Underscore),
          groups.em2,
          { ...context, isBold: true }
        )
      }

      if (groups?.em3 != null) {
        parseLine(
          excludeRegs(regs, regEm3Star, regEm3Underscore, regEm2Star, regEm2Underscore, regEm1Star, regEm1Underscore),
          groups.em3,
          { ...context, isBold: true, isItalic: true }
        )
      }

      if (groups?.strike != null) {
        parseLine(
          excludeRegs(regs, regStrikethrough),
          groups.strike,
          { ...context, isStrikethrough: true }
        )
      }
    }

    if (line.length > 0) {
      visitor.inline(line, context)
    }
  }

const createBlockParser = (visitor: TMarkdownParseVisitor) => {
  const parseLine = createLineParser(visitor)
  const listRegs = [regUList, regOList]
  const getListItemText = (match: RegExpExecArray) => {
    return match.groups!.ultext ?? match.groups!.oltext
  }
  const BLOCK_MODE_PARAGRAPH = 1
  const BLOCK_MODE_ULIST = 2
  const BLOCK_MODE_OLIST = 2

  return function parseBlock(lines: string[]) {
    let mode = 0

    for (let i = 0; i < lines.length;++i) {
      const listMatch = matchClosest(listRegs, lines[i])
      const isListLine = listMatch !== null

      if (isListLine) {
        const groups = listMatch.groups!
        const isOrderedList = groups.oltext != null

        mode = isOrderedList ? BLOCK_MODE_OLIST : BLOCK_MODE_ULIST
        visitor.list(isOrderedList)

        const listItemInitialIndent = groups.indent
        let listItemLines = [getListItemText(listMatch)]

        visitor.listItem()

        for (++i; i < lines.length; ++i) {
          const listItemMatch = isOrderedList
            ? regOList.exec(lines[i])
            : regUList.exec(lines[i])

          if (listItemMatch !== null && listItemMatch.groups!.indent === listItemInitialIndent) {
            parseBlock(listItemLines)
            listItemLines = [getListItemText(listItemMatch)]
            visitor.listItem()
          } else {
            listItemLines.push(lines[i])
          }
        }

        parseBlock(listItemLines)
        visitor.endList()
        mode = 0
      } else {
        // join parsed lines with linebreaks
        if (mode === BLOCK_MODE_PARAGRAPH) {
          visitor.linebreak()
        }

        // Paragraph
        if (mode !== BLOCK_MODE_PARAGRAPH) {
          mode = BLOCK_MODE_PARAGRAPH
          visitor.paragraph()
        }

        parseLine(allRegs, lines[i])
      }
    }
  }
}

export const parseMarkdown = (md: string, visitor: TMarkdownParseVisitor): Node => {
  const parseBlock = createBlockParser(visitor)

  for (const block of md.trim().split(regParagraph)) {
    parseBlock(block.trim().split(regLinebreak))
  }

  return visitor.end()
}
