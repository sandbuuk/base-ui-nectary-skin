import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './container.component.html',
  styleUrls: [
    './container.component.css'
  ]
})

export class ContainerComponent {
  @Input() firstName!: string
  @Input() lastName!: string
}
