import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/checkbox'
import { useComponentSearchParams } from 'src/utils'
@Component({
  selector: 'checkbox-component',
  templateUrl: './Checkbox.component.html',
  styles: [':host{ display: contents; }']
})

export class CheckboxComponent implements OnInit {
  @Input() searchPrefix: string = 'checkbox';
  name: string | null = null;
  value: string | null = null;
  isChecked: boolean | null = null;
  isControlled: boolean = false;
  text: string | null = null;
  isDisabled: boolean = false;
  isIndeterminate: boolean = false;
  isInvalid: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const search = useComponentSearchParams(this.route.snapshot.queryParamMap, this.searchPrefix);
    this.name = search.get('name')
    this.value = search.get('value')
    this.isChecked = search.get('checked') !== null
    this.isControlled = search.get('uncontrolled') === null
    this.text = search.get('text')
    this.isDisabled = search.get('disabled') !== null
    this.isIndeterminate = search.get('indeterminate') !== null
    this.isInvalid = search.get('invalid') !== null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.isChecked = (e as CustomEvent).detail
    }
    window.dispatchEvent(new CustomEvent('sinch-checkbox-change', {detail: (e as CustomEvent).detail}))
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-checkbox-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-checkbox-blur'))
  }
}
