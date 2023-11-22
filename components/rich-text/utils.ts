import { setEmojiBaseUrl } from '../emoji/utils'
import type { TSinchCodeTagElement } from '../code-tag/types'
import type { TSinchLinkElement } from '../link/types'
import type { TSinchTextType } from '../text/types'
import type { TMarkdownParseVisitor } from '../utils'

export const sizeValues: readonly TSinchTextType[] = ['m', 's', 'xs', 'xxs']

export const createParseVisitor = (doc: Document) => {
  let emojiBaseUrl: string | null = null

  return {
    updateEmojiBaseUrl(url: string | null) {
      emojiBaseUrl = url
    },
    createVisitor(): TMarkdownParseVisitor {
      const $root = doc.createDocumentFragment()
      let $p: Node | null = null
      let $li: Node | null = null
      const $lists: Node[] = []

      return {
        emoji(emojiChar) {
          const $emoji = doc.createElement('sinch-emoji')

          setEmojiBaseUrl($emoji, emojiBaseUrl)
          $emoji.setAttribute('char', emojiChar)
          $emoji.className = 'emoji'

          $p!.appendChild($emoji)
        },
        codetag(text) {
          const $codeTag = doc.createElement('sinch-code-tag') as TSinchCodeTagElement

          $codeTag.text = text

          $p!.appendChild($codeTag)
        },
        inline(text, { isBold, isItalic, isStrikethrough }) {
          const $inline = doc.createElement('SPAN')

          $inline.append(doc.createTextNode(text))

          if (isItalic === true) {
            $inline.classList.add('em1')
          }

          if (isBold === true) {
            $inline.classList.add('em2')
          }

          if (isStrikethrough === true) {
            $inline.classList.add('strikethrough')
          }

          $p!.appendChild($inline)
        },
        linebreak() {
          const $br = doc.createElement('br')

          $p!.appendChild($br)
        },
        link(text, href) {
          const $link = doc.createElement('sinch-link') as TSinchLinkElement

          $link.text = text
          $link.href = href

          $p!.appendChild($link)
        },
        list(isOrdered) {
          const $list = doc.createElement(isOrdered ? 'ol' : 'ul')

          $list.classList.add(isOrdered ? 'ol' : 'ul')

          if ($li !== null) {
            $li.appendChild($list)
            $li = null
          } else {
            $root.appendChild($list)
          }

          $lists.push($list)
        },
        endList() {
          $p = null
          $li = null
          $lists.length = $lists.length - 1

          if ($lists.length > 0) {
            $li = $lists.at(-1)!.lastChild
          }
        },
        listItem() {
          $p = null
          $li = doc.createElement('li')

          ;($li as Element).classList.add('li')

          $lists.at(-1)!.appendChild($li)
        },
        paragraph() {
          $p = doc.createElement('p')

          ;($p as Element).classList.add('p')

          if ($li !== null) {
            $li.appendChild($p)
          } else {
            $root.appendChild($p)
          }
        },
        end() {
          return $root
        },
      }
    },
  }
}
