import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/date-picker'
import { useComponentSearchParams } from 'src/utils'
@Component({
  selector: 'date-picker-component',
  templateUrl: './DatePicker.component.html',
  styles: [':host{ display: contents; }']
})

export class DatePickerComponent implements OnInit {
  @Input() searchPrefix: string = 'date-picker';
  name: string | null = null;
  value: string | null = null;
  locale: string | null = null;
  min: string | null = null;
  max: string | null = null;
  isRange: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const search = useComponentSearchParams(this.route.snapshot.queryParamMap, this.searchPrefix);
    this.name = search.get('name')
    this.value = search.get('value') ?? ''
    this.locale = search.get('locale')
    this.min = search.get('min')
    this.max = search.get('max')
    this.isRange = search.get('range') !== null
  }

  onChange(e: Event) {
    this.value = (e as CustomEvent).detail
    window.dispatchEvent(new CustomEvent('sinch-date-picker-change', {detail: (e as CustomEvent).detail}))
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-date-picker-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-date-picker-blur'))
  }
}
