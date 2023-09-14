import { Component } from '@angular/core'
import '@nectary/components/emoji-picker'

@Component({
  selector: 'emoji-picker-component',
  templateUrl: './EmojiPicker.component.html',
  styles: [':host{ display: contents }']
})

export class EmojiPickerComponent {
  constructor() {
    const url = new URL(location.href)
  }

  onChange(e: CustomEvent<string>) {
    window.dispatchEvent(new CustomEvent('sinch-emoji-picker-change', { detail: e.detail }))
  }
}
