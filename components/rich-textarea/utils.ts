/* eslint-disable @typescript-eslint/no-use-before-define */

import { getEmojiBaseUrl, getEmojiUrl } from '../emoji/utils'
import { isEmojiString, parseMarkdown } from '../utils'
import type { TRichTextareaSelection } from './types'
import type { TMarkdownParseVisitor } from '../utils'

// eslint-disable-next-line no-irregular-whitespace
const TEXT_EMPTY_DATA = '​' as const
const TEXT_WHITESPACE = ' ' as const

type TText = Text
const isTextNode = ($n: Node | null): $n is TText => $n !== null && $n.nodeType === Node.TEXT_NODE
const isEmptyText = (value: string | null): value is typeof TEXT_EMPTY_DATA => value === null || value.length === 0 || value === TEXT_EMPTY_DATA
const isEmptyTextNode = ($n: Node | null): $n is TText => isTextNode($n) && isEmptyText($n.nodeValue)
// const isNonEmptyTextNode = ($n: Node): $n is Text => isTextNode($n) && !isEmptyText($n.nodeValue)
const getTextValue = ($n: TText): string => (isEmptyText($n.nodeValue) ? TEXT_EMPTY_DATA : $n.nodeValue!)
const isParagraph = ($n: Node | null): $n is TParagraph => {
  return (
    $n !== null &&
    $n.nodeType === Node.ELEMENT_NODE &&
    ($n as Element).classList.contains('p')
  )
}
interface TParagraph extends HTMLElement {
  nodeName: 'P',
  className: 'p',
}
interface TListItem extends HTMLElement {
  nodeName: 'P',
  className: 'uli' | 'oli',
}

const isListItem = ($n: Node | null): $n is TListItem => {
  return isUnorderedListItem($n) || isOrderedListItem($n)
}
const isUnorderedListItem = ($n: Node | null): boolean => {
  return (
    $n !== null &&
    $n.nodeType === Node.ELEMENT_NODE &&
    ($n as Element).classList.contains('uli')
  )
}
const isOrderedListItem = ($n: Node | null): boolean => {
  return (
    $n !== null &&
    $n.nodeType === Node.ELEMENT_NODE &&
    ($n as Element).classList.contains('oli')
  )
}
type TTextBlock = TParagraph | TListItem

const isTextBlock = ($n: Node | null): $n is TTextBlock => isParagraph($n) || isListItem($n)

interface TEmoji extends HTMLElement {
  nodeName: 'IMG',
}

const isEmoji = ($n: Node | null): $n is TEmoji => {
  return $n !== null && $n.nodeName === 'IMG'
}

interface TChip extends HTMLElement {
  nodeName: 'SINCH-RICH-TEXTAREA-CHIP',
  text: string,
}

const isChip = ($n: Node | null): $n is TChip => {
  return $n !== null && $n.nodeName === 'SINCH-RICH-TEXTAREA-CHIP'
}

interface TInline extends HTMLElement {
  nodeName: 'SPAN',
}
const isInline = ($n: Node | null): $n is TInline => $n !== null && $n.nodeName === 'SPAN'

export interface TRichTextareaRoot extends HTMLElement {
  nodeName: 'DIV',
}
const isRoot = ($n: Node | null): $n is TRichTextareaRoot => $n !== null && $n.nodeName === 'DIV'

type AssertNonNull = ($n: Node | null) => asserts $n is Node

const assertNonNull: AssertNonNull = ($n) => {
  if ($n === null) {
    throw new Error('Node is NULL')
  }
}

type AssertEquals = <T>(a: T, b: T) => asserts a is T

const assertEquals: AssertEquals = (a: any, b: any) => {
  if (a !== b) {
    throw new Error(`"${a}" not equals "${b}"`)
  }
}

type AssertTextNode = ($n: Node | null) => asserts $n is TText

const assertTextNode: AssertTextNode = ($n) => {
  assertNonNull($n)

  if (!isTextNode($n)) {
    throw new Error(`Node is not a TextNode: ${$n?.nodeName}`)
  }
}
type AssertTextBlock = ($n: Node | null) => asserts $n is TTextBlock

const assertTextBlock: AssertTextBlock = ($n) => {
  assertNonNull($n)

  if (!isTextBlock($n)) {
    throw new Error(`Node is not a TextBlock: ${$n?.nodeName}`)
  }
}

type AssertListItem = ($n: Node | null) => asserts $n is TListItem

const assertListItem: AssertListItem = ($n) => {
  assertNonNull($n)

  if (!isListItem($n)) {
    throw new Error(`Node is not a ListItem: ${$n?.nodeName}`)
  }
}

const markListItemAsBlock = ($li: TListItem) => {
  $li.classList.add('block')
}

const isListItemMarkedArBlock = ($li: TListItem) => {
  return $li.classList.contains('block')
}

const MAX_LISTITEM_LEVEL = 4

const removeListItemLevel = ($li: TListItem) => {
  $li.classList.remove('l0', 'l1', 'l2', 'l3', 'l4')
}

const setListItemLevel = ($li: TListItem, level: number) => {
  removeListItemLevel($li)

  const clampedLevel = Math.max(0, Math.min(level, MAX_LISTITEM_LEVEL))

  $li.classList.add(`l${clampedLevel}`)
}

const getListItemLevel = ($li: TListItem): number => {
  if ($li.classList.contains('l1')) {
    return 1
  }

  if ($li.classList.contains('l2')) {
    return 2
  }

  if ($li.classList.contains('l3')) {
    return 3
  }

  if ($li.classList.contains('l4')) {
    return 4
  }

  return 0
}

type AssertInline = ($n: Node | null) => asserts $n is TInline

const assertInline: AssertInline = ($n) => {
  assertNonNull($n)

  if (!isInline($n)) {
    throw new Error(`Node is not an Inline: ${$n?.nodeName}`)
  }
}
type TTextContent = TInline | TEmoji | TChip

const isTextContent = ($n: Node | null): $n is TTextContent => {
  return $n !== null && $n.nodeType === Node.ELEMENT_NODE && (isInline($n) || isEmoji($n) || isChip($n))
}
type AssertTextContent = ($n: Node | null) => asserts $n is TTextContent

const assertTextContent: AssertTextContent = ($n) => {
  assertNonNull($n)

  if (!isTextContent($n)) {
    throw new Error(`Node is not TextContent: ${$n?.nodeName}`)
  }
}

// type AssertChildrenTextContent = ($childNodes: NodeList) => asserts $childNodes is NodeListOf<TTextContent>

// const assertChildrenTextContent: AssertChildrenTextContent = ($childNodes) => {
//   for (let i = 0; i < $childNodes.length; i++) {
//     assertTextContent($childNodes[i])
//   }
// }

export type TRange = {
  endContainer: Node,
  endOffset: number,
  startContainer: Node,
  startOffset: number,
}

const createTextNode = (data: string, doc: Document): TText => {
  return doc.createTextNode(data)
}
const createEmptyTextNode = (doc: Document): TText => {
  return createTextNode(TEXT_EMPTY_DATA, doc)
}

const createEmptyInline = (doc: Document): TInline => {
  const res = doc.createElement('SPAN') as TInline

  res.append(createEmptyTextNode(doc))

  return res
}

const getParentInline = ($n: TText): TInline => {
  const $p = $n.parentNode

  assertInline($p)

  return $p
}

const isInsideList = (isOrdered: boolean, $n: TTextContent): boolean => {
  const $block = getParentTextBlock($n)

  return isOrdered ? isOrderedListItem($block) : isUnorderedListItem($block)
}
const isAllInsideList = (isOrdered: boolean, $a: TTextContent, $b: TTextContent): boolean => {
  return allSiblingsIncludingSatisfy(
    getParentTextBlock($a),
    getParentTextBlock($b),
    isOrdered ? isOrderedListItem : isUnorderedListItem
  )
}

export type TRichTextareaFormatInputType = 'formatItalic' | 'formatBold' | 'formatStrikeThrough' | 'formatCodeTag'

type TFormatName = 'i' | 'b' | 's' | 'c' | 'l'

const FORMAT_TYPE_TO_NAME: Record<TRichTextareaFormatInputType, TFormatName> = {
  formatBold: 'b',
  formatCodeTag: 'c',
  formatItalic: 'i',
  formatStrikeThrough: 's',
}

const isFormatName = ($n: TInline, inlineName: TFormatName): boolean => {
  return $n.classList.contains(inlineName)
}

const isFormatBold = ($n: TInline) => isFormatName($n, 'b')
const isFormatItalic = ($n: TInline) => isFormatName($n, 'i')
const isFormatStrikethrough = ($n: TInline) => isFormatName($n, 's')
const isFormatCodetag = ($n: TInline) => isFormatName($n, 'c')
const isFormatLink = ($n: TInline) => isFormatName($n, 'l')

const isAllInsideFormatName = ($a: TTextContent, $b: TTextContent, formatName: TFormatName): boolean => {
  const aBlock = getParentTextBlock($a)
  const bBlock = getParentTextBlock($b)
  let $currentBlock: TTextBlock | null = aBlock
  let $prevBlock: TTextBlock | null = null
  let hasTextNodes = false

  do {
    let $n: TTextContent | null = $currentBlock === getParentTextBlock($a)
      ? $a
      : getFirstTextContent($currentBlock)
    let $prev: TTextContent | null = $n

    do {
      if (isInline($n)) {
        hasTextNodes = true

        if (!isFormatName($n, formatName)) {
          return false
        }
      }

      $prev = $n
      $n = getNextSiblingTextContent($n)
    }
    while ($n !== null && $prev !== $b)

    $prevBlock = $currentBlock
    $currentBlock = getNextSiblingTextBlock($currentBlock)
  } while ($currentBlock !== null && $prevBlock !== bBlock)

  return hasTextNodes
}

const isAllInsideBold = ($a: TTextContent, $b: TTextContent) => isAllInsideFormatName($a, $b, 'b')
const isAllInsideItalic = ($a: TTextContent, $b: TTextContent) => isAllInsideFormatName($a, $b, 'i')
const isAllInsideStrikethrough = ($a: TTextContent, $b: TTextContent) => isAllInsideFormatName($a, $b, 's')
const isAllInsideCodetag = ($a: TTextContent, $b: TTextContent) => isAllInsideFormatName($a, $b, 'c')
const isAllInsideLink = ($a: TTextContent, $b: TTextContent) => isAllInsideFormatName($a, $b, 'l')

const LINK_HREF_ATTR_NAME = 'data-href'

const copyFormatName = ($source: TInline | TText, $target: TInline) => {
  const $inline = isTextNode($source)
    ? getParentInline($source)
    : $source

  $target.className = $inline.className

  if (isFormatLink($inline)) {
    $target.setAttribute(LINK_HREF_ATTR_NAME, $inline.getAttribute(LINK_HREF_ATTR_NAME) ?? '')
  }
}

const setInlineFormat = ($n: TInline, formatName: TFormatName, shouldEnable: boolean) => {
  if (shouldEnable) {
    if (formatName === 'c' || isFormatName($n, 'c')) {
      $n.className = ''
    }

    if (formatName === 'l' || isFormatName($n, 'l')) {
      $n.className = ''
      $n.removeAttribute(LINK_HREF_ATTR_NAME)
    }

    $n.classList.add(formatName)
  } else {
    if (formatName === 'l') {
      $n.removeAttribute(LINK_HREF_ATTR_NAME)
    }

    $n.classList.remove(formatName)
  }
}

const setAllInlineFormat = ($a: TTextContent, $b: TTextContent, formatName: TFormatName, shouldEnable: boolean): void => {
  const aBlock = getParentTextBlock($a)
  const bBlock = getParentTextBlock($b)
  let $currentBlock: TTextBlock | null = aBlock
  let $prevBlock: TTextBlock | null = null

  do {
    let $n: TTextContent | null = $currentBlock === getParentTextBlock($a)
      ? $a
      : getFirstTextContent($currentBlock)
    let $prev: TTextContent | null = $n

    do {
      if (isInline($n)) {
        setInlineFormat($n, formatName, shouldEnable)
      }

      $prev = $n
      $n = getNextSiblingTextContent($n)
    } while ($n !== null && $prev !== $b)

    $prevBlock = $currentBlock
    $currentBlock = getNextSiblingTextBlock($currentBlock)
  } while ($currentBlock !== null && $prevBlock !== bBlock)
}

const toggleInlineFormat = ($n: TInline, formatName: TFormatName) => {
  setInlineFormat($n, formatName, !isFormatName($n, formatName))
}

const areSameInlineFormat = ($a: TInline, $b: TInline): boolean => {
  if ($a.classList.length === 0 && $b.classList.length === 0) {
    return true
  }

  if ($a.classList.length !== $b.classList.length) {
    return false
  }

  if ($a.className === 'l') {
    return $b.className === 'l' &&
       $a.getAttribute(LINK_HREF_ATTR_NAME) === $b.getAttribute(LINK_HREF_ATTR_NAME)
  }

  // Equal classes amount
  for (let i = 0; i < $a.classList.length; i++) {
    if (!$b.classList.contains($a.classList[i])) {
      return false
    }
  }

  return true
}

const createInlineWithText = (data: string, doc: Document): TInline => {
  const $res = doc.createElement('SPAN') as TInline

  $res.append(createTextNode(data, doc))

  return $res
}

const createInlineWithTextOfType = ($text: TText, $source: TInline): TInline => {
  const $res = $source.ownerDocument.createElement($source.nodeName) as TInline

  copyFormatName($source, $res)

  $res.append($text)

  return $res
}

const createLink = (text: string, href: string, doc: Document): TInline => {
  const $link = createInlineWithText(text, doc)

  setInlineFormat($link, 'l', true)
  $link.setAttribute(LINK_HREF_ATTR_NAME, href)

  return $link
}

const createTag = (text: string, doc: Document, color?: string | null): TChip => {
  const $chip = doc.createElement('sinch-rich-textarea-chip') as unknown as TChip

  $chip.text = text
  $chip.contentEditable = 'false'

  if (color !== undefined && color !== null && color !== '') {
    $chip.setAttribute('color', color)
  }

  return $chip
}

export const removeChip = ($chip: Node, $root: TRichTextareaRoot): TRange | null => {
  if (!isChip($chip)) {
    return null
  }

  const $parent = $chip.parentNode

  if ($parent === null) {
    return null
  }

  // Get next sibling or previous sibling to place cursor
  const $next = $chip.nextSibling
  const $prev = $chip.previousSibling

  // Remove the chip
  $parent.removeChild($chip)

  // Determine cursor position
  if ($next !== null && isTextContent($next)) {
    return createCollapsedRange(createBeginCursorFromTextContent($next))
  }

  if ($prev !== null && isTextContent($prev)) {
    return createCollapsedRange(createEndCursorFromTextContent($prev))
  }

  // If no siblings, ensure there's an empty inline element for cursor
  if (isTextBlock($parent)) {
    const $empty = createEmptyInline($parent.ownerDocument)

    $parent.appendChild($empty)

    return createCollapsedRange(createBeginCursorFromTextContent($empty))
  }

  return getBeginRange($root)
}

const EMOJI_CHAR_ATTR_NAME = 'data-char'

const createEmoji = (emojiChar: string, baseUrl: string | null, doc: Document): TEmoji => {
  const $emoji = doc.createElement('img')

  $emoji.setAttribute(EMOJI_CHAR_ATTR_NAME, emojiChar)
  $emoji.setAttribute('src', getEmojiUrl(baseUrl, emojiChar))
  $emoji.classList.add('e')

  return $emoji as TEmoji
}

const PARAGRAPH_CLASSNAME = 'p'

const createActuallyEmptyParagraph = (doc: Document): TTextBlock => {
  const $p = doc.createElement('p') as TParagraph

  $p.classList.add(PARAGRAPH_CLASSNAME)

  return $p
}

const createEmptyParagraph = (doc: Document): TTextBlock => {
  const res = createActuallyEmptyParagraph(doc)

  res.append(createEmptyInline(doc))

  return res
}

const createParagraphWithChildren = (children: readonly TTextContent[], doc: Document): TTextBlock => {
  if (children.length === 0) {
    return createEmptyParagraph(doc)
  }

  const $p = createActuallyEmptyParagraph(doc)

  $p.append(...children)

  return $p
}

const ULI_CLASSNAME = 'uli'
const OLI_CLASSNAME = 'oli'

const createActuallyEmptyListItem = (isOrdered: boolean, listLevel: number, doc: Document): TListItem => {
  const $li = doc.createElement('p') as TListItem

  $li.className = isOrdered ? OLI_CLASSNAME : ULI_CLASSNAME

  setListItemLevel($li, listLevel)

  return $li
}

const createEmptyListItem = (isOrdered: boolean, listLevel: number, doc: Document): TListItem => {
  const $li = createActuallyEmptyListItem(isOrdered, listLevel, doc)

  $li.append(
    createEmptyInline(doc)
  )

  return $li
}

const setListItemOrderedType = ($li: TListItem, isOrdered: boolean) => {
  if (isOrdered) {
    $li.classList.remove(ULI_CLASSNAME)
    $li.classList.add(OLI_CLASSNAME)
  } else {
    $li.classList.remove(OLI_CLASSNAME)
    $li.classList.add(ULI_CLASSNAME)
  }
}

const convertToListItem = ($p: TParagraph, isOrdered: boolean): TListItem => {
  $p.classList.remove(PARAGRAPH_CLASSNAME)

  if (isOrdered) {
    $p.classList.add(OLI_CLASSNAME)
  } else {
    $p.classList.add(ULI_CLASSNAME)
  }

  const $li = $p as unknown as TListItem

  setListItemLevel($li, 0)

  return $li
}

const convertToParagraph = ($li: TListItem): TParagraph => {
  removeListItemLevel($li)
  $li.classList.remove(ULI_CLASSNAME, OLI_CLASSNAME)
  $li.classList.add(PARAGRAPH_CLASSNAME)

  ensureListItemLevelsAreCorrect($li)

  return $li as unknown as TParagraph
}

const createListItemWithChildren = (children: readonly TTextContent[], isOrdered: boolean, listLevel: number, doc: Document): TListItem => {
  if (children.length === 0) {
    return createEmptyListItem(isOrdered, listLevel, doc)
  }

  const $li = createActuallyEmptyListItem(isOrdered, listLevel, doc)

  $li.append(...children)

  return $li
}

const getParentTextBlock = ($node: TText | TTextContent): TTextBlock => {
  const $inline = isTextNode($node) ? getParentInline($node) : $node
  const $p = $inline.parentNode

  assertTextBlock($p)

  return $p
}

type ChildIndexOf = {
  ($parent: TTextBlock, $child: TTextContent): number,
  ($parent: TRichTextareaRoot, $child: TTextBlock): number,
}

const childIndexOf: ChildIndexOf = ($parent, $child) => {
  return Array.prototype.indexOf.call($parent.childNodes, $child)
}

type GetChildByIndex = {
  ($parent: TTextBlock, index: number): TTextContent,
  ($parent: TRichTextareaRoot, index: number): TTextBlock,
}

const getChildByIndex: GetChildByIndex = ($parent, index) => {
  const children = $parent.childNodes

  if (index < 0 || index >= children.length) {
    throw new Error('Invalid index')
  }

  const $ch = index >= children.length
    ? children[children.length - 1]
    : children[index]

  return $ch as any
}

const afterLastChildIndex = ($parent: TTextBlock | TRichTextareaRoot): number => {
  return $parent.childNodes.length
}

const isAfterLastChildIndex = ($parent: TTextBlock | TRichTextareaRoot, index: number): boolean => {
  return index >= $parent.childNodes.length
}

const getLastChild = (n: Node): Node | null => n.lastChild
const getFirstChild = (n: Node): Node | null => n.firstChild
const getPrevSibling = (n: Node): Node | null => n.previousSibling
const getNextSibling = (n: Node): Node | null => n.nextSibling

const getSiblingTextBlock = (getSibling: ($n: Node) => Node | null) =>
  ($node: TTextBlock): TTextBlock | null => {
    const $sib = getSibling($node)

    if ($sib !== null) {
      assertTextBlock($sib)

      return $sib
    }

    return null
  }
const getPrevSiblingTextBlock = getSiblingTextBlock(getPrevSibling)
const getNextSiblingTextBlock = getSiblingTextBlock(getNextSibling)

type GetSiblingTextContent = {
  ($node: TTextContent, ensureValid: true): TTextContent,
  ($node: TTextContent, ensureValid?: false): TTextContent | null,
}

const getPrevSiblingTextContent = (($node, ensureValid) => {
  const $sib = $node.previousSibling

  if ($sib === null && ensureValid === true) {
    const $currentBlock = getParentTextBlock($node)
    const $prevBlock = getPrevSiblingTextBlock($currentBlock)

    if ($prevBlock === null) {
      $currentBlock.prepend(createEmptyInline($node.ownerDocument))

      return getFirstTextContent($currentBlock)
    }

    return getLastTextContent($prevBlock)
  }

  if ($sib !== null) {
    assertTextContent($sib)
  }

  return $sib
}) as GetSiblingTextContent

const getNextSiblingTextContent = (($node, ensureValid) => {
  const $sib = $node.nextSibling

  if ($sib === null && ensureValid === true) {
    const $currentBlock = getParentTextBlock($node)
    const $nextBlock = getNextSiblingTextBlock($currentBlock)

    if ($nextBlock === null) {
      $currentBlock.append(createEmptyInline($node.ownerDocument))

      return getLastTextContent($currentBlock)
    }

    return getFirstTextContent($nextBlock)
  }

  if ($sib !== null) {
    assertTextContent($sib)
  }

  return $sib
}) as GetSiblingTextContent

const createCollapsedRange = (cursor: TCursor): TRange => {
  const { node, offset } = cursorToNodeWithOffset(cursor)

  return {
    startContainer: node,
    startOffset: offset,
    endContainer: node,
    endOffset: offset,
  }
}

const createSpanningRange = (aCursor: TCursor, bCursor: TCursor): TRange => {
  const { node: startContainer, offset: startOffset } = cursorToNodeWithOffset(aCursor)
  const { node: endContainer, offset: endOffset } = cursorToNodeWithOffset(bCursor)

  return {
    startContainer,
    startOffset,
    endContainer,
    endOffset,
  }
}

const removePrevSiblings = ($node: Node) => {
  let $n

  while (($n = $node.previousSibling) !== null) {
    $n.remove()
  }
}

const removeNextSiblings = ($node: Node) => {
  let $n

  while (($n = $node.nextSibling) !== null) {
    $n.remove()
  }
}

const removeSiblingsBetween = ($a: Node, $b: Node) => {
  let $n: ChildNode | null

  while (($n = $a.nextSibling) !== $b) {
    assertNonNull($n)
    $n.remove()
  }
}

const getCommonParent = ($n0: Node, $n1: Node): Node => {
  let $n = $n0

  while (!$n.contains($n1)) {
    $n = $n.parentNode!
  }

  return $n
}

const removeNodesBetween = (aCursor: TCursor, bCursor: TCursor): void => {
  if (aCursor.$inline === bCursor.$inline) {
    return
  }

  const commonParent = getCommonParent(aCursor.$inline, bCursor.$inline)
  let $cpChildA: Node = aCursor.$inline
  let $cpChildB: Node = bCursor.$inline

  while ($cpChildA.parentNode !== commonParent) {
    removeNextSiblings($cpChildA)
    $cpChildA = $cpChildA.parentNode!
  }

  while ($cpChildB.parentNode !== commonParent) {
    removePrevSiblings($cpChildB)
    $cpChildB = $cpChildB.parentNode!
  }

  removeSiblingsBetween($cpChildA, $cpChildB)
}

const ensureCorrectTextBlockIfEmpty = ($node: TTextBlock): void => {
  if (!$node.hasChildNodes()) {
    $node.append(
      createEmptyInline($node.ownerDocument)
    )

    return
  }

  const children = $node.childNodes

  if (children.length === 1) {
    const $firstChild = children[0]

    assertTextContent($firstChild)

    if (isInline($firstChild)) {
      if ($firstChild.childNodes.length > 1 || !isTextNode($firstChild.firstChild)) {
        $node.replaceChildren(createEmptyInline($node.ownerDocument))
      }
    }
  }
}

const getChildText = ($node: TInline): TText => {
  if ($node.childNodes.length !== 1) {
    throw new Error('Should have exact 1 child')
  }

  const $child = $node.firstChild

  assertTextNode($child)

  return $child
}

const getChildTextContent = (getFirstOrLastChild: ($n: Node) => Node | null) =>
  ($node: TTextBlock): TTextContent => {
    ensureCorrectTextBlockIfEmpty($node)

    const $child = getFirstOrLastChild($node)

    assertTextContent($child)

    return $child
  }

const getLastTextContent = getChildTextContent(getLastChild)
const getFirstTextContent = getChildTextContent(getFirstChild)

const getFirstOrLastTextBlock = (getFirstOrLastChild: ($p: Node) => Node | null) =>
  ($root: TRichTextareaRoot): TTextBlock => {
    let $lc = getFirstOrLastChild($root)

    if ($lc === null) {
      $lc = createEmptyParagraph($root.ownerDocument)

      $root.append($lc)
    }

    assertTextBlock($lc)

    return $lc
  }

const getFirstTextBlock = getFirstOrLastTextBlock(getFirstChild)
const getLastTextBlock = getFirstOrLastTextBlock(getLastChild)

const mergeSiblingTextNodes = ($a: TText, aCursor: TCursor, bCursor?: TCursor) => {
  const $b = $a.nextSibling

  if ($b === null) {
    return
  }

  assertTextNode($b)

  const aContent = getTextValue($a)
  const bContent = getTextValue($b)
  const aContentLength = isEmptyText(aContent) ? 0 : aContent.length
  const bContentLength = isEmptyText(bContent) ? 0 : bContent.length
  let resultText = (isEmptyText(aContent) ? '' : aContent) + (isEmptyText(bContent) ? '' : bContent)
  const isEmptyResultText = resultText.length === 0

  if (aCursor.$text === $a) {
    aCursor.offset = isEmptyResultText ? 1 : aCursor.offset
  }

  if (aCursor.$text === $b) {
    aCursor.$text = $a
    aCursor.offset = isEmptyResultText ? 1 : (aContentLength + (bContentLength === 0 ? 0 : aCursor.offset))
  }

  if (bCursor != null) {
    if (bCursor.$text === $a) {
      bCursor.offset = isEmptyResultText ? 1 : bCursor.offset
    }

    if (bCursor.$text === $b) {
      bCursor.$text = $a
      bCursor.offset = isEmptyResultText ? 1 : (aContentLength + (bContentLength === 0 ? 0 : bCursor.offset))
    }
  }

  if (isEmptyResultText) {
    resultText = TEXT_EMPTY_DATA
  }

  $a.nodeValue = resultText
  $b.remove()
  mergeSiblingTextNodes($a, aCursor)
}

const mergeNextTextContentSibling = ($a: TTextContent, aCursor: TCursor, bCursor?: TCursor) => {
  const $b = $a.nextSibling

  if ($b === null) {
    return
  }

  assertTextContent($b)

  if (isInline($a) && isInline($b)) {
    const $aText = getChildText($a)
    const $bText = getChildText($b)

    if (areSameInlineFormat($a, $b) || isEmptyTextNode($aText) || isEmptyTextNode($bText)) {
      $a.append($bText)
      $b.remove()
      mergeSiblingTextNodes($aText, aCursor, bCursor)
    }
  }
}

const mergePrevTextContentSibling = ($b: TTextContent, aCursor: TCursor, bCursor?: TCursor) => {
  const $a = $b.previousSibling

  if ($a === null) {
    return
  }

  assertTextContent($a)

  if (isInline($a) && isInline($b)) {
    const $aText = getChildText($a)
    const $bText = getChildText($b)

    if (areSameInlineFormat($a, $b) || isEmptyTextNode($aText) || isEmptyTextNode($bText)) {
      $a.append($bText)
      $b.remove()
      mergeSiblingTextNodes($aText, aCursor, bCursor)
    }
  }
}

const mergeTextContentBetween = ($a: TTextContent, $b: TTextContent, aCursor: TCursor, bCursor?: TCursor) => {
  const $sib = getNextSiblingTextContent($a)

  if ($sib === null) {
    return
  }

  if ($a === $b || $sib === $b) {
    mergeNextTextContentSibling($b, aCursor, bCursor)
    mergeNextTextContentSibling($a, aCursor, bCursor)
    mergePrevTextContentSibling($a, aCursor, bCursor)

    return
  }

  mergeNextTextContentSibling($a, aCursor, bCursor)

  const $newSib = getNextSiblingTextContent($a)

  assertNonNull($newSib)

  if ($newSib === $sib) {
    mergePrevTextContentSibling($a, aCursor, bCursor)
    mergeTextContentBetween($sib, $b, aCursor, bCursor)
  } else {
    mergeTextContentBetween($a, $b, aCursor, bCursor)
  }
}

const mergeNextTextBlock = ($a: TTextBlock, aCursor: TCursor, bCursor?: TCursor) => {
  const $b = $a.nextSibling

  if ($b === null) {
    return
  }

  assertTextBlock($b)

  const $lastChild = getLastChild($a)

  if ($b.hasChildNodes()) {
    $a.append(...Array.from($b.childNodes))
  }

  $b.remove()

  if ($lastChild !== null) {
    assertTextContent($lastChild)
    mergeNextTextContentSibling($lastChild, aCursor, bCursor)
  }
}

type TSliceChildren = {
  ($parent: TTextBlock, index: number): TTextContent[],
  ($parent: TRichTextareaRoot, index: number): TTextBlock[],
}

const sliceChildren: TSliceChildren = ($parent, index: number) => {
  if (index < 0) {
    throw new Error('Not found')
  }

  const children = Array.from($parent.childNodes) as any[]

  if (index === 0) {
    return children
  }

  return children.slice(index)
}

const splitTextBlock = ($a: TTextBlock, childIndex: number): [TTextBlock, TTextBlock] => {
  const bChildren = sliceChildren($a, childIndex)
  const $b = isListItem($a)
    ? createListItemWithChildren(bChildren, isOrderedListItem($a), getListItemLevel($a), $a.ownerDocument)
    : createParagraphWithChildren(bChildren, $a.ownerDocument)

  ensureCorrectTextBlockIfEmpty($a)
  ensureCorrectTextBlockIfEmpty($b)

  $a.after($b)

  return [
    $a,
    $b,
  ]
}

const splitTextNode = ($aText: TText, offset: number): [TTextContent | null, TTextContent | null] => {
  const content = getTextValue($aText)
  const aContent = content.substring(0, offset)
  const bContent = content.substring(offset)
  let $bText: TText | null = null

  if (aContent.length > 0 && bContent.length > 0) {
    $bText = createTextNode(bContent, $aText.ownerDocument)

    $aText.nodeValue = aContent
  }

  const $aInline = getParentInline($aText)
  let $bInline: TInline | null = null

  if ($bText !== null) {
    $bInline = createInlineWithTextOfType($bText, $aInline)

    $aInline.after($bInline)
  }

  const $before = aContent.length === 0 ? getPrevSiblingTextContent($aInline) : $aInline
  const $after = $bInline ?? (aContent.length === 0 ? $aInline : getNextSiblingTextContent($aInline))

  return [$before, $after]
}

const sliceTextNode = ($n: TText, startOffset: number, endOffset: number): TInline => {
  const $after = splitTextNode($n, startOffset)[1]

  assertInline($after)

  const $before = splitTextNode(getChildText($after), endOffset - startOffset)[0]

  assertEquals($before, $after)

  return $after
}

const splitTextNodeAndInsertEmptyInline = ($n: TText, offset: number): TInline => {
  const [$before, $after] = splitTextNode($n, offset)
  const $inline = createEmptyInline($n.ownerDocument)

  copyFormatName($n, $inline)

  if ($before !== null) {
    $before.after($inline)
  } else {
    assertNonNull($after)
    $after.before($inline)
  }

  return $inline
}

export const formatInline = (formatType: TRichTextareaFormatInputType, range: TRange): TActionResult => {
  const aCursor = createIncomingCursorFromNodeWithOffset(range.startContainer, range.startOffset)
  const bCursor = createIncomingCursorFromNodeWithOffset(range.endContainer, range.endOffset)
  const formatName = FORMAT_TYPE_TO_NAME[formatType]

  if (aCursor.$inline === bCursor.$inline && isTextNode(aCursor.$text)) {
    const { $text, $inline, offset: startOffset } = aCursor
    const { offset: endOffset } = bCursor

    if (isEmptyText($text.nodeValue)) {
      assertInline($inline)
      toggleInlineFormat($inline, formatName)

      return {
        prevent: true,
        range: createCollapsedRange(
          createEndCursorFromTextContent($inline)
        ),
      }
    }

    if (startOffset === endOffset) {
      const $newinline = splitTextNodeAndInsertEmptyInline($text, startOffset)

      toggleInlineFormat($newinline, formatName)

      return {
        prevent: true,
        range: createCollapsedRange(
          createEndCursorFromTextContent($newinline)
        ),
      }
    }

    const $newinline = sliceTextNode($text, startOffset, endOffset)

    toggleInlineFormat($newinline, formatName)

    const aTrackingCursor = createBeginCursorFromTextContent($newinline)
    const bTrackingCursor = createEndCursorFromTextContent($newinline)

    mergeNextTextContentSibling($newinline, aTrackingCursor, bTrackingCursor)
    mergePrevTextContentSibling($newinline, aTrackingCursor, bTrackingCursor)

    return {
      prevent: true,
      range: createSpanningRange(aTrackingCursor, bTrackingCursor),
    }
  }

  const areAllInline = isAllInsideFormatName(aCursor.$inline, bCursor.$inline, formatName)
  let $aInline: TTextContent | null = aCursor.$inline
  let $bInline: TTextContent | null = bCursor.$inline

  if (isTextNode(aCursor.$text)) {
    $aInline = splitTextNode(aCursor.$text, aCursor.offset)[1]
  }

  if (isTextNode(bCursor.$text)) {
    $bInline = splitTextNode(bCursor.$text, bCursor.offset)[0]
  }

  if ($aInline === null) {
    const aBlock = getNextSiblingTextBlock(getParentTextBlock(aCursor.$inline))

    assertNonNull(aBlock)

    $aInline = getFirstTextContent(aBlock)
  }

  if ($bInline === null) {
    const bBlock = getPrevSiblingTextBlock(getParentTextBlock(bCursor.$inline))

    assertNonNull(bBlock)

    $bInline = getLastTextContent(bBlock)
  }

  setAllInlineFormat($aInline, $bInline, formatName, !areAllInline)

  const aTrackingCursor = createBeginCursorFromTextContent($aInline)
  const bTrackingCursor = createEndCursorFromTextContent($bInline)

  mergeTextContentBetween($aInline, $bInline, aTrackingCursor, bTrackingCursor)

  return {
    prevent: true,
    range: createSpanningRange(aTrackingCursor, bTrackingCursor),
  }
}

const allSiblingsIncludingSatisfy = (aNode: Node, bNode: Node, func: ($node: Node) => boolean) => {
  let currentNode: Node | null = aNode
  const nextSib = bNode.nextSibling

  while (currentNode !== null && currentNode !== nextSib) {
    const tempNext: Node | null = currentNode.nextSibling

    if (!func(currentNode)) {
      return false
    }

    currentNode = tempNext
  }

  return true
}

export const formatIndent = (range: TRange): TActionResult => {
  // Tab escape case
  if (
    range.startContainer === range.endContainer &&
    range.startOffset === range.endOffset &&
    range.startOffset !== 0
  ) {
    return {
      prevent: false,
    }
  }

  const aCursor = createIncomingCursorFromNodeWithOffset(range.startContainer, range.startOffset)
  const bCursor = createIncomingCursorFromNodeWithOffset(range.endContainer, range.endOffset)

  const aBlock = getParentTextBlock(aCursor.$inline)
  const bBlock = getParentTextBlock(bCursor.$inline)

  const $iterateUpToNode = getNextSiblingTextBlock(bBlock)
  let $block: TTextBlock | null = aBlock
  let $prevBlock: TTextBlock | null = null

  while ($block !== null && $block !== $iterateUpToNode) {
    if (isListItem($block) && !isListItemMarkedArBlock($block)) {
      const $prev = $prevBlock ?? getPrevSiblingTextBlock($block)
      const currentLevel = getListItemLevel($block)

      if (isListItem($prev) && currentLevel <= getListItemLevel($prev)) {
        setListItemLevel($block, currentLevel + 1)
      }
    }

    $prevBlock = $block
    $block = getNextSiblingTextBlock($block)
  }

  return {
    prevent: true,
    range,
  }
}

const ensureListItemLevelsAreCorrect = ($li: TTextBlock | null) => {
  if ($li === null) {
    return
  }

  let $block: TTextBlock | null = getNextSiblingTextBlock($li)
  let prevLevel = isListItem($li)
    ? getListItemLevel($li)
    : -1

  while ($block !== null && isListItem($block)) {
    let currentLevel = getListItemLevel($block)

    if (currentLevel <= prevLevel + 1) {
      break
    }

    currentLevel = prevLevel + 1
    setListItemLevel($block, currentLevel)

    prevLevel = currentLevel
    $block = getNextSiblingTextBlock($block)
  }
}

export const formatOutdent = (range: TRange): TActionResult => {
  // Tab escape case
  if (
    range.startContainer === range.endContainer &&
    range.startOffset === range.endOffset &&
    range.startOffset !== 0
  ) {
    return {
      prevent: false,
    }
  }

  const aCursor = createIncomingCursorFromNodeWithOffset(range.startContainer, range.startOffset)
  const bCursor = createIncomingCursorFromNodeWithOffset(range.endContainer, range.endOffset)

  const aBlock = getParentTextBlock(aCursor.$inline)
  const bBlock = getParentTextBlock(bCursor.$inline)

  const $iterateUpToNode = getNextSiblingTextBlock(bBlock)
  let $block: TTextBlock | null = aBlock
  let $lastListItem: TListItem | null = null

  while ($block !== null && $block !== $iterateUpToNode) {
    if (isListItem($block)) {
      setListItemLevel($block, getListItemLevel($block) - 1)
      $lastListItem = $block
    }

    $block = getNextSiblingTextBlock($block)
  }

  if ($lastListItem !== null) {
    ensureListItemLevelsAreCorrect($lastListItem)
  }

  return {
    prevent: true,
    range,
  }
}

export const formatList = (isOrdered: boolean, range: TRange): TActionResult => {
  const aCursor = createIncomingCursorFromNodeWithOffset(range.startContainer, range.startOffset)
  const bCursor = createIncomingCursorFromNodeWithOffset(range.endContainer, range.endOffset)
  const aBlock = getParentTextBlock(aCursor.$inline)
  const bBlock = getParentTextBlock(bCursor.$inline)
  const isInsideSameListType = isAllInsideList(isOrdered, aCursor.$inline, bCursor.$inline)

  // if range is in same list type
  if (isInsideSameListType) {
    // Convert to paragraph
    assertListItem(aBlock)
    assertListItem(bBlock)

    const $iterateUpToNode = getNextSiblingTextBlock(bBlock)
    let $block: TTextBlock | null = aBlock

    while ($block !== null && $block !== $iterateUpToNode) {
      convertToParagraph($block as TListItem)

      $block = getNextSiblingTextBlock($block)
    }

    return {
      prevent: true,
      range: createCollapsedRange(bCursor),
    }
  }

  // else - Convert to List
  const $iterateUpToNode = getNextSiblingTextBlock(bBlock)
  let $block: TTextBlock | null = aBlock

  while ($block !== null && $block !== $iterateUpToNode) {
    if (isParagraph($block)) {
      convertToListItem($block, isOrdered)
    } else {
      assertListItem($block)

      // Transfer list-item
      setListItemOrderedType($block, isOrdered)
    }

    $block = getNextSiblingTextBlock($block)
  }

  return {
    prevent: true,
    range: createCollapsedRange(bCursor),
  }
}

type TCursor = {
  $text: null,
  $inline: TEmoji | TChip,
  offset: number,
  isAfterInline?: boolean,
} | {
  $text: TText,
  $inline: TInline,
  offset: number,
  isAfterInline?: boolean,
}

type TCursorPair = [
  Readonly<TCursor>,
  Readonly<TCursor>,
]

const createCursorFromTextNode = (node: TText, offset: number): TCursor => {
  return {
    $text: node,
    $inline: getParentInline(node),
    offset: Math.min(node.length, offset),
  }
}

const createBeginCursorFromTextContent = (node: TTextContent): TCursor => {
  if (isInline(node)) {
    const $text = getChildText(node)
    const content = getTextValue($text)

    return {
      $inline: node,
      $text,
      offset: isEmptyText(content) ? content.length : 0,
    }
  }

  return {
    $text: null,
    $inline: node,
    offset: 0,
  }
}

const createEndCursorFromTextContent = (node: TTextContent): TCursor => {
  if (isInline(node)) {
    const $text = getChildText(node)

    return {
      $inline: node,
      $text,
      offset: $text.length,
    }
  }

  return {
    $text: null,
    $inline: node,
    offset: 0,
    isAfterInline: true,
  }
}

const createIncomingCursorFromNodeWithOffset = (node: Node, offset: number): TCursor => {
  if (isTextNode(node)) {
    return createCursorFromTextNode(node, offset)
  }

  if (isEmoji(node)) {
    return {
      $text: null,
      $inline: node,
      offset: 0,
    }
  }

  if (isChip(node)) {
    return {
      $text: null,
      $inline: node,
      offset: 0,
    }
  }

  if (isTextBlock(node)) {
    if (isAfterLastChildIndex(node, offset)) {
      return createEndCursorFromTextContent(
        getLastTextContent(node)
      )
    }

    return createIncomingCursorFromNodeWithOffset(getChildByIndex(node, offset), 0)
  }

  if (isInline(node)) {
    return {
      $inline: node,
      $text: getChildText(node),
      offset: 0,
    }
  }

  if (isRoot(node)) {
    if (isAfterLastChildIndex(node, offset)) {
      const $block = getLastTextBlock(node)

      return createIncomingCursorFromNodeWithOffset($block, $block.childNodes.length)
    }

    return createIncomingCursorFromNodeWithOffset(getChildByIndex(node, offset), 0)
  }

  throw new Error('Should not happen')
}

const cursorToNodeWithOffset = ({ $text, $inline, offset, isAfterInline }: TCursor): {node: Node, offset: number} => {
  if (isTextNode($text)) {
    return {
      node: $text,
      offset,
    }
  }

  const $block = getParentTextBlock($inline)
  const childIndex = childIndexOf($block, $inline) + (isAfterInline === true ? 1 : 0)

  return {
    node: $block,
    offset: childIndex,
  }
}

const removeContentInRange = (range: Readonly<TRange>): TCursor => {
  const aCursor: Readonly<TCursor> = createIncomingCursorFromNodeWithOffset(range.startContainer, range.startOffset)
  const bCursor: Readonly<TCursor> = createIncomingCursorFromNodeWithOffset(range.endContainer, range.endOffset)

  // Do nothing
  if (
    aCursor.$inline === bCursor.$inline &&
    aCursor.offset === bCursor.offset &&
    aCursor.isAfterInline === bCursor.isAfterInline
  ) {
    return aCursor
  }

  // Same TextNode case
  if (aCursor.$text === bCursor.$text && isTextNode(aCursor.$text)) {
    const { $text, $inline, offset: startOffset } = aCursor
    const { offset: endOffset } = bCursor
    const content = getTextValue($text)
    const nextContent = content.substring(0, startOffset) + content.substring(endOffset)

    $text.nodeValue = nextContent

    if (isEmptyText(nextContent)) {
      const $nextSib = getNextSiblingTextContent($inline)
      const $prevSib = getPrevSiblingTextContent($inline)

      if ($prevSib === null && $nextSib === null) {
        $text.nodeValue = TEXT_EMPTY_DATA

        return createEndCursorFromTextContent($inline)
      }

      $inline.remove()

      if ($nextSib === null) {
        assertNonNull($prevSib)

        return createEndCursorFromTextContent($prevSib)
      }

      return createBeginCursorFromTextContent($nextSib)
    }

    return createCursorFromTextNode($text, startOffset)
  }

  removeNodesBetween(aCursor, bCursor)

  if (isTextNode(aCursor.$text)) {
    aCursor.$text.nodeValue = getTextValue(aCursor.$text).substring(0, aCursor.offset)
  }

  if (isTextNode(bCursor.$text)) {
    bCursor.$text.nodeValue = getTextValue(bCursor.$text).substring(bCursor.offset)
  }

  const aBlock = getParentTextBlock(aCursor.$inline)
  const bBlock = getParentTextBlock(bCursor.$inline)

  // Handle bCursor
  if (
    aCursor.$inline !== bCursor.$inline &&
    (
      isEmptyTextNode(bCursor.$text) ||
      (bCursor.$text === null && bCursor.isAfterInline === true)
    )
  ) {
    bCursor.$inline.remove()
  }
  // bCursor is invalid after this point

  let trackingCursor: TCursor

  if (
    isEmptyTextNode(aCursor.$text) ||
    (aCursor.$text === null && aCursor.isAfterInline !== true)
  ) {
    const $sib = getNextSiblingTextContent(aCursor.$inline)

    aCursor.$inline.remove()

    if ($sib === null) {
      trackingCursor = createEndCursorFromTextContent(getLastTextContent(aBlock))
    } else {
      trackingCursor = createBeginCursorFromTextContent($sib)
    }
  } else {
    trackingCursor = createEndCursorFromTextContent(aCursor.$inline)
  }

  if (aBlock === bBlock) {
    mergeNextTextContentSibling(trackingCursor.$inline, trackingCursor)
    mergePrevTextContentSibling(trackingCursor.$inline, trackingCursor)
  } else if (getNextSiblingTextBlock(aBlock) === bBlock) {
    mergeNextTextBlock(aBlock, trackingCursor)
  }

  return trackingCursor
}

export type TActionResult = {
  prevent: false,
} | {
  range: TRange | null,
  prevent: true,
}

export const deleteContentBackward = ($root: TRichTextareaRoot, range: TRange): TActionResult => {
  const { startContainer, endContainer, startOffset, endOffset } = range

  if (startContainer === endContainer && startOffset + 1 === endOffset && isTextNode(startContainer)) {
    if (startContainer.length > 1) {
      return DEFAULT_ACTION_RESULT
    }

    if (startContainer.length === 1 && startContainer.nodeValue !== TEXT_EMPTY_DATA) {
      startContainer.nodeValue = TEXT_EMPTY_DATA

      return {
        prevent: true,
        range: {
          startContainer,
          startOffset: 1,
          endContainer: startContainer,
          endOffset: 1,
        },
      }
    }

    const $inline = getParentInline(startContainer)
    const $block = getParentTextBlock($inline)
    const childIndex = childIndexOf($block, $inline)

    // If there's more prev sibling inlines
    if (childIndex > 0) {
      const $prevSib = getChildByIndex($block, childIndex - 1)

      if (isInline($prevSib)) {
        const $text = getChildText($prevSib)

        return deleteContentBackward($root, {
          startContainer: $text,
          startOffset: $text.length - 1,
          endContainer,
          endOffset,
        })
      }

      return deleteContentBackward($root, {
        startContainer: $block,
        startOffset: childIndex - 1,
        endContainer,
        endOffset,
      })
    }

    // If no prev inline siblings
    const $prevBlock = getPrevSiblingTextBlock($block)

    if ($prevBlock !== null) {
      return deleteContentBackward($root, {
        startContainer: $prevBlock,
        startOffset: afterLastChildIndex($prevBlock),
        endContainer,
        endOffset,
      })
    }
  }

  return {
    prevent: true,
    range: createCollapsedRange(
      removeContentInRange(range)
    ),
  }
}

export const insertLink = ($root: TRichTextareaRoot, text: string, href: string, range: TRange): TActionResult => {
  const cursor = removeContentInRange(range)
  const { $text, $inline, offset, isAfterInline: isAfterLastChild } = cursor
  const $link = createLink(text, href, $root.ownerDocument)

  /* Insert Link element */
  if (isTextNode($text)) {
    if (isEmptyText($text.nodeValue)) {
      getParentTextBlock($inline).replaceChild($link, $inline)
    } else {
      const [$before, $after] = splitTextNode($text, offset)

      if ($before === null) {
        assertNonNull($after)
        $after.before($link)
      } else {
        $before.after($link)
      }
    }
  } else if (isAfterLastChild === true) {
    $inline.after($link)
  } else {
    $inline.before($link)
  }

  return {
    prevent: true,
    range: createCollapsedRange(
      createEndCursorFromTextContent($link)
    ),
  }
}

export const insertTag = ($root: TRichTextareaRoot, text: string, range: TRange): TActionResult => {
  const cursor = removeContentInRange(range)
  const { $text, $inline, offset, isAfterInline: isAfterLastChild } = cursor
  const $tag = createTag(text, $root.ownerDocument)

  /* Insert Tag element */
  if (isTextNode($text)) {
    if (isEmptyText($text.nodeValue)) {
      getParentTextBlock($inline).replaceChild($tag, $inline)
    } else {
      const [$before, $after] = splitTextNode($text, offset)

      if ($before === null) {
        assertNonNull($after)
        $after.before($tag)
      } else {
        $before.after($tag)
      }
    }
  } else if (isAfterLastChild === true) {
    $inline.after($tag)
  } else {
    $inline.before($tag)
  }

  // Create a trailing space after the tag
  const $trailingSpace = createInlineWithText(' ', $root.ownerDocument)

  $tag.after($trailingSpace)

  return {
    prevent: true,
    range: createCollapsedRange(
      createEndCursorFromTextContent($trailingSpace)
    ),
  }
}

export const insertLineBreak = (range: TRange): TActionResult => {
  const cursor = removeContentInRange(range)
  const { $text, $inline, offset, isAfterInline: isAfterLastChild } = cursor
  const $block = getParentTextBlock($inline)

  if (isListItem($block)) {
    if (isEmptyTextBlock($block)) {
      convertToParagraph($block)

      return {
        prevent: true,
        range: createCollapsedRange(
          createEndCursorFromTextContent(getLastTextContent($block))
        ),
      }
    }
  }

  let splitIndex = 0

  if (isTextNode($text)) {
    const [$before] = splitTextNode($text, offset)

    splitIndex = $before !== null ? childIndexOf($block, $before) + 1 : 0
  } else {
    splitIndex = childIndexOf($block, $inline) + (isAfterLastChild === true ? 1 : 0)
  }

  const [_, $bBlock] = splitTextBlock($block, splitIndex)

  return {
    prevent: true,
    range: createCollapsedRange(
      createBeginCursorFromTextContent(getFirstTextContent($bBlock))
    ),
  }
}

const insertEmoji = ($root: TRichTextareaRoot, emojiChar: string, range: TRange): TActionResult => {
  const cursor = removeContentInRange(range)
  const { $text, $inline, offset, isAfterInline } = cursor
  const baseUrl = getEmojiBaseUrl($root)!
  const $emoji = createEmoji(emojiChar, baseUrl, $root.ownerDocument)

  /* Insert Emoji element */
  if (isTextNode($text)) {
    if (isEmptyText($text.nodeValue)) {
      getParentTextBlock($inline).replaceChild($emoji, $inline)
    } else {
      const [$before, $after] = splitTextNode($text, offset)

      if ($before === null) {
        assertNonNull($after)
        $after.before($emoji)
      } else {
        $before.after($emoji)
      }
    }
  } else if (isAfterInline === true) {
    $inline.after($emoji)
  } else {
    $inline.before($emoji)
  }

  return {
    prevent: true,
    range: createCollapsedRange(
      createEndCursorFromTextContent($emoji)
    ),
  }
}

export const insertText = ($root: TRichTextareaRoot, data: string | null, range: TRange): TActionResult => {
  if (data !== null && isEmojiString(data)) {
    return insertEmoji($root, data, range)
  }

  if (
    // Is collapsed range
    range.startContainer === range.endContainer &&
    range.startOffset === range.endOffset &&
    // Is non-empty text node
    isTextNode(range.startContainer) &&
    !isEmptyText(range.startContainer.nodeValue)
  ) {
    const $inline = getParentInline(range.startContainer)
    const isHotTextWhitespace =
      range.startOffset === range.startContainer.length &&
      data === TEXT_WHITESPACE &&
      (isFormatCodetag($inline) || isFormatLink($inline))

    if (!isHotTextWhitespace) {
      return DEFAULT_ACTION_RESULT
    }
  }

  const cursor = removeContentInRange(range)

  if (data === null) {
    return {
      prevent: true,
      range: createCollapsedRange(cursor),
    }
  }

  const { $text, $inline, offset, isAfterInline } = cursor

  if ($text === null && isEmoji($inline)) {
    const $newInline = createInlineWithText(data, $root.ownerDocument)

    if (isAfterInline === true) {
      $inline.after($newInline)
    } else {
      $inline.before($newInline)
    }

    return {
      prevent: true,
      range: createCollapsedRange(
        createEndCursorFromTextContent($newInline)
      ),
    }
  }

  if (isTextNode($text)) {
    assertInline($inline)

    if (isEmptyText($text.nodeValue)) {
      ($text as TText).nodeValue = data

      return {
        prevent: true,
        range: createCollapsedRange(
          createCursorFromTextNode($text, data.length)
        ),
      }
    }

    if (offset === $text.length && data === TEXT_WHITESPACE) {
      if (isFormatLink($inline) || isFormatCodetag($inline)) {
        const $newinline = createInlineWithText(data, $root.ownerDocument)

        $inline.after($newinline)

        return {
          prevent: true,
          range: createCollapsedRange(
            createEndCursorFromTextContent($newinline)
          ),
        }
      }

      const content = $text.nodeValue!
      const tagMatch = content.match(/\{\{([a-zA-Z0-9_-]+)\}\}$/)

      if (tagMatch !== null) {
        const text = tagMatch[1]
        const tagStartPos = content.length - tagMatch[0].length
        const $tag = createTag(text, $root.ownerDocument)
        const $space = createInlineWithText(data, $root.ownerDocument)

        // Split the text at the tag start
        if (tagStartPos === 0) {
          // The entire text is the tag
          getParentTextBlock($inline).replaceChild($tag, $inline)
        } else {
          // Keep text before the tag
          $text.nodeValue = content.substring(0, tagStartPos)
          $inline.after($tag)
        }

        $tag.after($space)

        return {
          prevent: true,
          range: createCollapsedRange(
            createEndCursorFromTextContent($space)
          ),
        }
      }
    }

    const content = $text.nodeValue!

    $text.nodeValue = content.substring(0, offset) + data + content.substring(offset)

    return {
      prevent: true,
      range: createCollapsedRange(
        createCursorFromTextNode($text, offset + data.length)
      ),
    }
  }

  return {
    prevent: true,
    range: createCollapsedRange(cursor),
  }
}

export const insertFromPaste = (data: string, range: Readonly<TRange>, visitor: TMarkdownParseVisitor): TActionResult => {
  const cursor = removeContentInRange(range)
  const { $text, $inline, offset, isAfterInline } = cursor
  const $mdFragment = parseMarkdown(data, visitor)

  if ($mdFragment.childNodes.length === 0) {
    return {
      prevent: true,
      range,
    }
  }

  const shouldSpreadNodesIntoBlock = $mdFragment.childNodes.length === 1

  if (shouldSpreadNodesIntoBlock) {
    const $block = getParentTextBlock($inline)
    const $fragment = document.createDocumentFragment()

    $fragment.append(...Array.from($mdFragment.childNodes[0].childNodes))

    const $pasteLastChild = $fragment.lastChild

    if ($pasteLastChild !== null) {
      assertTextContent($pasteLastChild)
    }

    if (isTextNode($text)) {
      if (isEmptyText($text.nodeValue)) {
        $block.replaceChild($fragment, $inline)
      } else {
        const [$before, $after] = splitTextNode($text, offset)

        if ($before === null) {
          assertNonNull($after)
          $after.before($fragment)
        } else {
          $before.after($fragment)
        }
      }
    } else if (isAfterInline === true) {
      $inline.after($fragment)
    } else {
      $inline.before($fragment)
    }

    return {
      prevent: true,
      range: createCollapsedRange(
        createEndCursorFromTextContent($pasteLastChild ?? getLastTextContent($block))
      ),
    }
  }

  const $block = getParentTextBlock($inline)
  let splitIndex = childIndexOf($block, $inline) + (isAfterInline === true ? 1 : 0)

  if (isTextNode($text)) {
    if (isEmptyText($text.nodeValue)) {
      $inline.remove()
    } else {
      const [$before] = splitTextNode($text, offset)

      if ($before !== null) {
        splitIndex++
      }
    }
  }

  const [$aBlock, $bBlock] = splitTextBlock($block, splitIndex)
  const $root = $aBlock.parentElement as TRichTextareaRoot
  const $lastBlock = $mdFragment.lastChild

  assertTextBlock($lastBlock)

  if (isEmptyTextBlock($aBlock)) {
    $root.replaceChild($mdFragment, $aBlock)

    // Still check and remove empty block
    if (isEmptyTextBlock($bBlock)) {
      $bBlock.remove()
    }
  } else if (isEmptyTextBlock($bBlock)) {
    $root.replaceChild($mdFragment, $bBlock)
  } else {
    $aBlock.after($mdFragment)
  }

  return {
    prevent: true,
    range: createCollapsedRange(
      createEndCursorFromTextContent(
        getLastTextContent($lastBlock)
      )
    ),
  }
}

const DEFAULT_ACTION_RESULT: TActionResult = {
  prevent: false,
}

export const handleEmojiMousedown = ($n: Node): TActionResult => {
  if (isEmoji($n)) {
    return {
      prevent: true,
      range: createCollapsedRange(
        createEndCursorFromTextContent($n)
      ),
    }
  }

  return DEFAULT_ACTION_RESULT
}

export const getBeginRange = ($root: TRichTextareaRoot): TRange => {
  const $block = getFirstTextBlock($root)
  const $inline = getFirstTextContent($block)

  return createCollapsedRange(
    createBeginCursorFromTextContent($inline)
  )
}

export const getEndRange = ($root: TRichTextareaRoot): TRange => {
  const $block = getLastTextBlock($root)
  const $inline = getLastTextContent($block)

  return createCollapsedRange(
    createEndCursorFromTextContent($inline)
  )
}

export const getSelectionInfo = (range: TRange): TRichTextareaSelection => {
  const aCursor = createIncomingCursorFromNodeWithOffset(range.startContainer, range.startOffset)
  const bCursor = createIncomingCursorFromNodeWithOffset(range.endContainer, range.endOffset)

  if (aCursor.$inline === bCursor.$inline) {
    const { $text, $inline } = aCursor

    if (isChip($inline)) {
      return {
        bold: false,
        italic: false,
        strikethrough: false,
        codetag: false,
        tag: true,
        link: false,
        olist: isInsideList(true, $inline),
        ulist: isInsideList(false, $inline),
      }
    }

    if ($text !== null || isInline($inline)) {
      assertInline($inline)

      return {
        bold: isFormatBold($inline),
        italic: isFormatItalic($inline),
        strikethrough: isFormatStrikethrough($inline),
        codetag: isFormatCodetag($inline),
        tag: false,
        link: isFormatLink($inline),
        olist: isInsideList(true, $inline),
        ulist: isInsideList(false, $inline),
      }
    }

    return {
      italic: false,
      bold: false,
      strikethrough: false,
      codetag: false,
      tag: false,
      link: false,
      olist: false,
      ulist: false,
    }
  }

  return {
    bold: isAllInsideBold(aCursor.$inline, bCursor.$inline),
    italic: isAllInsideItalic(aCursor.$inline, bCursor.$inline),
    strikethrough: isAllInsideStrikethrough(aCursor.$inline, bCursor.$inline),
    codetag: isAllInsideCodetag(aCursor.$inline, bCursor.$inline),
    tag: false, // Tags are atomic, so multi-selection doesn't apply
    link: isAllInsideLink(aCursor.$inline, bCursor.$inline),
    olist: isAllInsideList(true, aCursor.$inline, bCursor.$inline),
    ulist: isAllInsideList(false, aCursor.$inline, bCursor.$inline),
  }
}

export const isSelectionEqual = (a: TRichTextareaSelection | null, b: TRichTextareaSelection | null): boolean => {
  return a === b || (
    a !== null &&
    b !== null &&
    a.bold === b.bold &&
    a.codetag === b.codetag &&
    a.italic === b.italic &&
    a.link === b.link &&
    a.strikethrough === b.strikethrough &&
    a.olist === b.olist &&
    a.ulist === b.ulist
  )
}

const isEmptyTextBlock = ($block: TTextBlock): boolean => {
  const blockChildren = $block.childNodes

  if (blockChildren.length > 1) {
    return false
  }

  const $inline = blockChildren[0]

  // Chips are not empty
  if (isChip($inline)) {
    return false
  }

  const isEmptyText =
    isInline($inline) &&
    !isFormatCodetag($inline) &&
    isEmptyTextNode(getChildText($inline))

  return isEmptyText
}

export const isEditorEmpty = ($root: TRichTextareaRoot): boolean => {
  const rootChildren = $root.childNodes

  if (rootChildren.length > 1) {
    return false
  }

  const $block = rootChildren[0]

  assertTextBlock($block)

  return isEmptyTextBlock($block)
}

type TTextContentDescriptor = {
  text?: string,
  href?: string,
  isWhitespace?: boolean,
  isEmoji?: boolean,
  isCodetag?: boolean,
  isTag?: boolean,
  isBold?: boolean,
  isItalic?: boolean,
  isStrikethrough?: boolean,
  isLink?: boolean,
}

const serializeDescriptorReducer = (range: TCursorPair | null) => (state: TTextContentDescriptor[], $n: TTextContent): TTextContentDescriptor[] => {
  if (isEmoji($n)) {
    const text = $n.getAttribute(EMOJI_CHAR_ATTR_NAME) ?? ''

    if (text.length > 0) {
      state.push({ isEmoji: true, text })
    }

    return state
  }

  if (isChip($n)) {
    const text = $n.text ?? ''

    if (text.length > 0) {
      state.push({ isTag: true, text: `{{${text}}}` })
    }

    return state
  }

  let text = getTextValue(getChildText($n))
  let trailingSpaces = ''

  if (range !== null) {
    const [aCursor, bCursor] = range
    const isACursorPointingHere = aCursor.$inline === $n
    const isBCursorPointingHere = bCursor.$inline === $n

    if (isACursorPointingHere && isBCursorPointingHere) {
      text = text.substring(aCursor.offset, bCursor.offset)
    } else if (isACursorPointingHere) {
      text = text.substring(aCursor.offset)
    } else if (isBCursorPointingHere) {
      text = text.substring(0, bCursor.offset)
    }
  }

  if (isEmptyText(text)) {
    return state
  }

  if (isFormatCodetag($n)) {
    state.push({ isCodetag: true, text })

    return state
  }

  if (isFormatLink($n)) {
    const href = $n.getAttribute(LINK_HREF_ATTR_NAME) ?? '#'

    state.push({ isLink: true, text, href })

    return state
  }

  const leadingNonSpaceIndex = text.search(/\S/)

  // Is spaces only
  if (leadingNonSpaceIndex < 0) {
    state.push({ isWhitespace: true, text })

    return state
  }

  // Has some leading spaces
  if (leadingNonSpaceIndex > 0) {
    state.push({ isWhitespace: true, text: text.substring(0, leadingNonSpaceIndex) })

    // Strip leading spaces
    text = text.substring(leadingNonSpaceIndex)
  }

  const trailingSpaceIndex = text.search(/\s+$/)

  // Has some trailing spaces
  if (trailingSpaceIndex >= 0) {
    trailingSpaces = text.substring(trailingSpaceIndex)

    // Strip trailing spaces
    text = text.substring(0, trailingSpaceIndex)
  }

  state.push({
    isBold: isFormatBold($n),
    isItalic: isFormatItalic($n),
    isStrikethrough: isFormatStrikethrough($n),
    text,
  })

  if (trailingSpaces.length > 0) {
    state.push({ isWhitespace: true, text: trailingSpaces })
  }

  return state
}

type TSerializeChunkState = {
  lastUnderscoreIndex: number,
  chunks: string[],
}

const MD_STRIKE_TOKEN = '~~'
const MD_EM3_STAR_TOKEN = '***'
const MD_EM2_STAR_TOKEN = '**'
const MD_EM1_STAR_TOKEN = '*'
const MD_EM3_UNDERSCORE_TOKEN = '___'
const MD_EM2_UNDERSCORE_TOKEN = '__'
const MD_EM1_UNDERSCORE_TOKEN = '_'
const MD_LINEBREAK_TOKEN = '  \n'
const MD_CODETAG_TOKEN = '`'
const MD_ULISTITEM_TOKEN = '*'
const MD_OLISTITEM_TOKEN = '1.'
const MD_LISTITEM_JOIN = '\n'
const MD_PARAGRAPH_JOIN = '\n\n'

const serializeTextReducer = (state: TSerializeChunkState, desc: TTextContentDescriptor, i: number, descArray: TTextContentDescriptor[]): TSerializeChunkState => {
  const { chunks } = state

  if (desc.isLink === true) {
    chunks.push(`[${desc.text!}](${desc.href!})`)

    return state
  }

  if (desc.isEmoji === true) {
    chunks.push(desc.text!)

    return state
  }

  if (desc.isCodetag === true) {
    chunks.push(`${MD_CODETAG_TOKEN}${desc.text!}${MD_CODETAG_TOKEN}`)

    return state
  }

  if (desc.isTag === true) {
    chunks.push(desc.text!)

    return state
  }

  if (desc.isWhitespace === true) {
    chunks.push(desc.text!)

    return state
  }

  const prev = i === 0 ? null : descArray[i - 1]
  const next = i >= descArray.length - 1 ? null : descArray[i + 1]
  const shouldUseUnderscores =
    (i - state.lastUnderscoreIndex) % 2 === 0 &&
    (
      prev === null ||
      prev.isBold === true ||
      prev.isItalic === true ||
      prev.isWhitespace === true ||
      prev.isCodetag === true
    ) &&
    (
      next === null ||
      next.isBold === true ||
      next.isItalic === true ||
      next.isWhitespace === true ||
      next.isCodetag === true
    )
  const { isBold, isItalic, isStrikethrough } = desc

  if (shouldUseUnderscores) {
    state.lastUnderscoreIndex = i
  }

  if (
    isStrikethrough === true &&
    (prev === null || prev.isStrikethrough !== true)
  ) {
    chunks.push(MD_STRIKE_TOKEN)
  }

  if (isBold === true && isItalic === true) {
    chunks.push(shouldUseUnderscores ? MD_EM3_UNDERSCORE_TOKEN : MD_EM3_STAR_TOKEN)
  } else if (isBold === true) {
    chunks.push(shouldUseUnderscores ? MD_EM2_UNDERSCORE_TOKEN : MD_EM2_STAR_TOKEN)
  } else if (isItalic === true) {
    chunks.push(shouldUseUnderscores ? MD_EM1_UNDERSCORE_TOKEN : MD_EM1_STAR_TOKEN)
  }

  chunks.push(desc.text!)

  if (isBold === true && isItalic === true) {
    chunks.push(shouldUseUnderscores ? MD_EM3_UNDERSCORE_TOKEN : MD_EM3_STAR_TOKEN)
  } else if (isBold === true) {
    chunks.push(shouldUseUnderscores ? MD_EM2_UNDERSCORE_TOKEN : MD_EM2_STAR_TOKEN)
  } else if (isItalic === true) {
    chunks.push(shouldUseUnderscores ? MD_EM1_UNDERSCORE_TOKEN : MD_EM1_STAR_TOKEN)
  }

  if (
    isStrikethrough === true &&
    (next === null || next.isStrikethrough !== true)
  ) {
    chunks.push(MD_STRIKE_TOKEN)
  }

  return state
}

const serializeTextBlock = ($n: TTextBlock, range: TCursorPair | null): string => {
  let children: Node[]

  if (range !== null) {
    const [aCursor, bCursor] = range
    const aBlock = getParentTextBlock(aCursor.$inline)
    const bBlock = getParentTextBlock(bCursor.$inline)

    const startIndex = aBlock === $n ? childIndexOf($n, aCursor.$inline) : 0
    const endIndex = bBlock === $n ? childIndexOf($n, bCursor.$inline) + 1 : $n.childNodes.length

    children = Array.prototype.slice.call($n.childNodes, startIndex, endIndex)
  } else {
    children = Array.from($n.childNodes)
  }

  const result = (children as TTextContent[])
    .reduce(
      serializeDescriptorReducer(range),
      [] as TTextContentDescriptor[]
    )
    .reduce(
      serializeTextReducer,
      {
        lastUnderscoreIndex: 0,
        chunks: [],
      }
    )

  return result.chunks.join('')
}

const serializeListItemIndent = (level: number, isOrderedStack: readonly boolean[]) => {
  let res = ''

  for (let i = 0; i < level; i++) {
    res = res.concat(
      isOrderedStack[i]
        ? '  ' // MD_OLISTITEM_TOKEN.length
        : ' ', // MD_ULISTITEM_TOKEN.length
      ' '
    )
  }

  return res
}

const serializeListItem = ($li: TListItem, isOrderedStack: boolean[], range: TCursorPair | null) => {
  const isOrdered = isOrderedListItem($li)
  const listMdToken = isOrdered ? MD_OLISTITEM_TOKEN : MD_ULISTITEM_TOKEN
  const level = getListItemLevel($li)

  isOrderedStack[level] = isOrdered

  return `${serializeListItemIndent(level, isOrderedStack)}${listMdToken} ${serializeTextBlock($li, range)}`
}

const serializeRoot = ($root: TRichTextareaRoot, range: TCursorPair | null): string => {
  let children: Node[]

  if (range !== null) {
    const [aCursor, bCursor] = range
    const aBlock = getParentTextBlock(aCursor.$inline)
    const bBlock = getParentTextBlock(bCursor.$inline)

    const startIndex = childIndexOf($root, aBlock)
    const endIndex = childIndexOf($root, bBlock) + 1

    children = Array.prototype.slice.call($root.childNodes, startIndex, endIndex)
  } else {
    children = Array.from($root.childNodes)
  }

  const chunks: string[] = []
  const listChunks: string[] = []
  const listIsOrderedStack: boolean[] = []
  const paragraphChunks: string[] = []

  const flushListChunks = () => {
    if (listChunks.length > 0) {
      chunks.push(
        listChunks.join(MD_LISTITEM_JOIN)
      )
      listChunks.length = 0
    }
  }
  const flushParagraphChunks = () => {
    if (paragraphChunks.length > 0) {
      chunks.push(
        paragraphChunks.reduce((a, b) => {
          return (b.length > 0
            ? a.concat(MD_LINEBREAK_TOKEN, b)
            : a.concat('<br>'))
        })
      )
      paragraphChunks.length = 0
    }
  }

  for (let i = 0; i < children.length;i++) {
    const $child = children[i]

    if (isListItem($child)) {
      flushParagraphChunks()

      const isMainList = i === 0 || !isListItem(children[i - 1]) || isListItemMarkedArBlock($child)

      if (isMainList) {
        flushListChunks()
      }

      listChunks.push(
        serializeListItem($child, listIsOrderedStack, range)
      )
    } else {
      assertTextBlock($child)

      flushListChunks()

      paragraphChunks.push(
        serializeTextBlock($child, range)
      )
    }
  }

  flushListChunks()
  flushParagraphChunks()

  return chunks.join(MD_PARAGRAPH_JOIN)
}

export const serializeMarkdown = ($root: TRichTextareaRoot, range: Readonly<TRange> | null): string => {
  if (range !== null) {
    const aCursor: Readonly<TCursor> = createIncomingCursorFromNodeWithOffset(range.startContainer, range.startOffset)
    const bCursor: Readonly<TCursor> = createIncomingCursorFromNodeWithOffset(range.endContainer, range.endOffset)

    return serializeRoot($root, [aCursor, bCursor])
  }

  return serializeRoot($root, null)
}

export const createParseVisitor = (doc: Document) => {
  let emojiBaseUrl: string | null = null
  let chipColor: string | null = null

  return {
    updateEmojiBaseUrl(url: string | null) {
      emojiBaseUrl = url
    },
    updateChipColor(color: string | null) {
      chipColor = color
    },
    createVisitor(): TMarkdownParseVisitor {
      const $root = doc.createDocumentFragment()
      let $currentBlock: Node | null = null
      const listsStack: {isOrdered: boolean}[] = []
      let isFirstListItem = false

      return {
        escaped(char) {
          // Create a text node for the escaped character
          const $text = doc.createTextNode(char)

          // If we're in a paragraph, append directly to it
          if ($currentBlock != null) {
            $currentBlock.appendChild($text)
          } else {
            // If no paragraph exists, create one
            this.paragraph()
            $currentBlock!.appendChild($text)
          }
        },

        emoji(emojiChar) {
          const $emoji = createEmoji(emojiChar, emojiBaseUrl, doc)

          $currentBlock!.appendChild($emoji)
        },
        codetag(text) {
          const $inline = createInlineWithText(text, doc)

          setInlineFormat($inline, 'c', true)

          $currentBlock!.appendChild($inline)
        },
        tag(text) {
          const $tag = createTag(text, doc, chipColor)

          $currentBlock!.appendChild($tag)
        },
        inline(text, { isBold, isItalic, isStrikethrough }) {
          const $inline = createInlineWithText(text, doc)

          setInlineFormat($inline, 'b', isBold === true)
          setInlineFormat($inline, 'i', isItalic === true)
          setInlineFormat($inline, 's', isStrikethrough === true)

          $currentBlock!.appendChild($inline)
        },
        linebreak() {
          if (listsStack.length === 0) {
            $currentBlock = createActuallyEmptyParagraph(doc)

            $root.appendChild($currentBlock)
          }
        },
        link(text, href) {
          const $link = createLink(text, href, doc)

          $currentBlock!.appendChild($link)
        },
        list(isOrdered) {
          listsStack.push({
            isOrdered,
          })

          isFirstListItem = true
          $currentBlock = null
        },
        endList() {
          listsStack.length = listsStack.length - 1

          isFirstListItem = false
          $currentBlock = null
        },
        listItem() {
          const listLevel = listsStack.length - 1
          const { isOrdered } = listsStack.at(-1)!
          const $li = createActuallyEmptyListItem(isOrdered, listLevel, doc)

          if (listsStack.length === 1 && isFirstListItem) {
            markListItemAsBlock($li)
            isFirstListItem = false
          }

          $root.appendChild($li)
          $currentBlock = $li
        },
        paragraph() {
          if (listsStack.length === 0) {
            $currentBlock = createActuallyEmptyParagraph(doc)

            $root.appendChild($currentBlock)
          }
        },
        end() {
          const children = $root.childNodes

          for (let i = 0; i < children.length; i++) {
            const child = children[i]

            assertTextBlock(child)
            ensureCorrectTextBlockIfEmpty(child)
          }

          return $root
        },
      }
    },
  }
}

export const setBrowserCaret = ({ startContainer, startOffset, endContainer, endOffset }: TRange) => {
  const selection = document.getSelection()

  if (selection === null) {
    return
  }

  selection.removeAllRanges()

  const range = document.createRange()

  range.setStart(startContainer, startOffset)
  range.setEnd(endContainer, endOffset)
  selection.addRange(range)
}
