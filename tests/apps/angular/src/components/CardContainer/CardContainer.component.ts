import { Component } from '@angular/core'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/title'
import '@sinch-engage/nectary/card-container'

@Component({
  selector: 'card-container-component',
  templateUrl: './CardContainer.component.html',
  styles: [`
    :host{ display: contents; }
    .content {
      display: flex;
      flex-direction: column;
      background-color: #F1F3F4;
      align-items: center;
      justify-content: center;
      min-height: 150px;
      height: 100%;
    }
  `]
})

export class CardContainerComponent {
  constructor() {
    const url = new URL(location.href)
  }
}
