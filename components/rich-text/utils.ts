import { setEmojiBaseUrl } from '../emoji/utils'
import type { TChipResolver } from '../rich-textarea/types'
import type { TSinchTextType } from '../text/types'
import type { TMarkdownParseVisitor } from '../utils'

export const sizeValues: readonly TSinchTextType[] = ['m', 's', 'xs', 'xxs']

export const createParseVisitor = (doc: Document) => {
  let emojiBaseUrl: string | null = null
  let chipColor: string | null = null
  let chipIcon: string | null = null
  let chipResolver: TChipResolver | null = null

  return {
    updateEmojiBaseUrl(url: string | null) {
      emojiBaseUrl = url
    },
    updateChipColor(color: string | null) {
      chipColor = color
    },
    updateChipIcon(icon: string | null) {
      chipIcon = icon
    },
    updateChipResolver(resolver: TChipResolver | null) {
      chipResolver = resolver
    },
    createVisitor(): TMarkdownParseVisitor {
      const $root = doc.createDocumentFragment()
      let $p: Node | null = null
      let $li: Node | null = null
      const $lists: Node[] = []

      return {
        // Add new escaped method to handle escaped characters
        escaped(char) {
          // Create a text node for the escaped character
          const $text = doc.createTextNode(char)

          // If we're in a paragraph, append directly to it
          if ($p != null) {
            $p.appendChild($text)
          } else {
            // If no paragraph exists, create one
            this.paragraph()
            $p!.appendChild($text)
          }
        },
        emoji(emojiChar) {
          const $emoji = doc.createElement('sinch-emoji')

          setEmojiBaseUrl($emoji, emojiBaseUrl)
          $emoji.setAttribute('char', emojiChar)
          $emoji.className = 'emoji'

          $p!.appendChild($emoji)
        },
        codetag(text) {
          const $codeTag = doc.createElement('sinch-code-tag') as HTMLElementTagNameMap['sinch-code-tag']

          $codeTag.text = text

          $p!.appendChild($codeTag)
        },
        tag(text: string) {
          const $chip = doc.createElement('sinch-rich-textarea-chip')
          const resolved = chipResolver?.(text)

          $chip.text = text
          $chip.setAttribute('readonly', '')

          const resolvedColor = resolved?.color ?? chipColor
          const resolvedIcon = resolved?.icon ?? chipIcon

          if (resolvedColor !== null && resolvedColor !== undefined) {
            $chip.setAttribute('color', resolvedColor)
          }

          if (resolvedIcon !== null && resolvedIcon !== undefined) {
            $chip.setAttribute('icon', resolvedIcon)
          }

          $p!.appendChild($chip)
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
        link(text, href, attributes) {
          const $link = doc.createElement('sinch-link') as HTMLElementTagNameMap['sinch-link']

          $link.text = text
          $link.href = href

          if (attributes != null) {
            attributes.forEach((attr) => {
              if (attr.startsWith('#')) {
                $link.id = attr.slice(1)
              }

              switch (attr) {
                case 'prevent-default':
                  $link.preventDefault = true

                  break
                case 'use-history':
                  $link.useHistory = true

                  break
                case 'external':
                  $link.external = true

                  break
                default:
                  break
              }
            })
          }

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
