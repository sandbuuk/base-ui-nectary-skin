import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/emoji-picker'

@Component({
  selector: 'emoji-picker-component',
  templateUrl: './EmojiPicker.component.html',
  styles: [':host{ display: contents }']
})

export class EmojiPickerComponent {
  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
  }

  onChange(e: CustomEvent<string>) {
    window.dispatchEvent(new CustomEvent('sinch-emoji-picker-change', { detail: e.detail }))
  }
}
