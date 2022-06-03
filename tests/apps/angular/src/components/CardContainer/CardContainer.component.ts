import { Component } from '@angular/core'
import '@sinch-engage/nectary/card-container'

@Component({
  selector: 'card-container-component',
  templateUrl: './CardContainer.component.html',
  styleUrls: ['./CardContainer.component.css']
})

export class CardContainerComponent {
  constructor() {
    const url = new URL(location.href)
  }
}
