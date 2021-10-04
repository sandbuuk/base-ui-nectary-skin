import { Component, Input } from '@angular/core'
import '@saas/components/button'
import '@saas/components/input'

@Component({
  selector: '#app',
  templateUrl: './app.component.html',
})

export class AppComponent {
  @Input() firstName!: string
  @Input() lastName!: string
  bus!: BroadcastChannel

  ngOnInit() {
    this.bus = new BroadcastChannel('TEST_CHANNEL')
  }

  ngOnDestroy() {
    this.bus.close()
  }

  handleOnClick() {
    this.bus.postMessage({ type: 'THIRD_STEP_DONE'})
  }
}
