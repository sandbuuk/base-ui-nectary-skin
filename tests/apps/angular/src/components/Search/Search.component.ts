import { Component, ElementRef, ViewChild } from '@angular/core'
import '@nectary/components/popover'
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/icon-button'
import '@nectary/components/icon'
import { TSinchInputElement } from '@nectary/components/input/types'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'search-component',
  templateUrl: './Search.component.html',
  styles: [':host{ display: contents; }']
})

export class SearchComponent {
  isOpen = false
  isClearActive = false
  value: string
  maxVisibleItems: number | null
  options = [
    'Option 1 value long long long',
    'Option 2',
    'Option 3',
    'Option 4',
  ]

  //@ts-expect-error
  @ViewChild('input') inputRef: ElementRef<TSinchInputElement>;

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.value = search.get('value') ?? ''

    const numVisibleValue = search.get('maxvisibleitems')
    this.maxVisibleItems = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }
  onChange(e: Event) {
    this.value = (e as CustomEvent).detail
    this.isClearActive = this.value.length > 0
  }
  onClearClick() {
    this.value = ''
    this.isClearActive = false
    this.inputRef.nativeElement.focus()
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-search-focus'))
    this.isOpen = true
    this.isClearActive = this.value.length > 0
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-search-blur'))
  }
  onClear() {
    this.value = ''
    this.isOpen = false
  }
  onClose() {
    this.isOpen = false
  }
  onOptionClick(text: string) {
    window.dispatchEvent(new CustomEvent('sinch-search-change', { detail: text }))

    this.value = text
    this.isOpen = false
    this.isClearActive = this.value.length > 0
  }
  onStopEvent(e: Event) {
    e.stopPropagation()
  }
}
