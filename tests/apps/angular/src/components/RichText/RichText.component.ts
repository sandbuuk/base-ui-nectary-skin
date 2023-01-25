import { Component } from '@angular/core'
import '@sinch-engage/nectary/rich-text'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~ account __manager__.

Context *italic __bold__ italic* text
Context **bold _italic_ bold** text.
`

const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
const shortText = 'Lorem Ipsum is dummy text'

@Component({
  selector: 'rich-text-component',
  templateUrl: './RichText.component.html',
  styles: [':host{ display: contents; }']
})

export class RichTextComponent {
  size?: string
  text: string

  constructor() {
    const url = new URL(location.href)
    this.size = url.searchParams.get('size') ?? undefined

    const example = url.searchParams.get('example')

    this.text = shortText

    if (example === 'md') {
      this.text = mdText
    } else if (example === 'long') {
      this.text = longText
    }
  }
}
