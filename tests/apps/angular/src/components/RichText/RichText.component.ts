import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/rich-text'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~😆 account __manager__.

paragraph text
* list item 1
  1. sub item 1
    * sub sub item
    * pre \`LINE\` post
  2. sub *item* 2
sub line
* list item 2
lorem ipsum
lorem ipsum


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

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.size = search.get('size') ?? undefined

    const example = search.get('example')

    this.text = shortText

    if (example === 'md') {
      this.text = mdText
    } else if (example === 'long') {
      this.text = longText
    }
  }
}
