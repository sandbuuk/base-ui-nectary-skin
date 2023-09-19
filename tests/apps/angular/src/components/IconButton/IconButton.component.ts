import { Component } from '@angular/core'
import '@nectary/components/icon-button'
import '@nectary/components/spinner'
import '@nectary/assets/icons/help-outline'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'icon-button-component',
  templateUrl: './IconButton.component.html',
  styles: [':host{ display: contents; }']
})

export class IconButtonComponent {
  isDisabled: boolean
  size: string | null
  hasSpinner: boolean

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.isDisabled = search.get('disabled') !== null
    this.size = search.get('size')
    this.hasSpinner = search.get('spinner') !== null
  }

  onClick() {
    window.dispatchEvent(new CustomEvent('sinch-icon-button-click'))
  }

  onFocus(){
    window.dispatchEvent(new CustomEvent('sinch-icon-button-focus'))
  }

  onBlur(){
    window.dispatchEvent(new CustomEvent('sinch-icon-button-blur'))
  }

  onTooltipShow(){
    window.dispatchEvent(new CustomEvent('sinch-icon-button-tooltip-show'))
  }

  onTooltipHide(){
    window.dispatchEvent(new CustomEvent('sinch-icon-button-tooltip-hide'))
  }
}
