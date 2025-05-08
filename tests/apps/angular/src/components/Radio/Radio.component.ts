import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/radio'
import '@nectary/components/radio-option'
import { useComponentSearchParams } from 'src/utils'

const options = [{
  value: '1',
  text: 'Option value 1',
}, {
  value: '2',
  text: 'Option value 2',
  disabled: true,
}, {
  value: '3',
  text: 'Option value 3',
}, {
  value: '4',
  text: 'Option value 4',
}]
const singleOption = [{
  value: '1',
  text: 'Option value 1',
}]

@Component({
  selector: 'radio-component',
  templateUrl: './Radio.component.html',
  styles: [':host{ display: contents; }']
})

export class RadioComponent implements OnInit {
  @Input() searchPrefix: string = 'radio';
  name: string | null = null;
  value: string | null = null;
  isControlled: boolean = false;
  isInvalid: boolean = false;
  options: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const search = useComponentSearchParams(this.route.snapshot.queryParamMap, this.searchPrefix);
    this.name = search.get('name')
    this.isControlled = search.get('uncontrolled') === null
    this.isInvalid = search.get('invalid') !== null
    this.value = search.get('value') ?? ''

    this.options = search.get('example') === 'single'
      ? singleOption
      : options
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-radio-change', {detail: (e as CustomEvent).detail}))
    }
  }
}
