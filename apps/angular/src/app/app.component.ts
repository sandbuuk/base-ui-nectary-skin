import { Component } from '@angular/core'
import '@saas/components/button'
import '@saas/components/input'

@Component({
  selector: '#app',
  templateUrl: './app.component.html',
})

export class AppComponent {
  bus!: BroadcastChannel
  firstName = ''
  lastName = ''

  ngOnInit() {
    this.bus = new BroadcastChannel('TEST_CHANNEL')

    this.bus.addEventListener('message', (e: MessageEvent) => {
      if (e.data.type === 'THIRD_STEP_DATA') {
        this.firstName = e.data.value.firstName
        this.lastName = e.data.value.lastName
      }
    })

    this.bus.postMessage({ type: 'THIRD_STEP_READY' })
  }

  ngOnDestroy() {
    this.bus.close()
  }

  handleOnClick() {
    this.bus.postMessage({ type: 'THIRD_STEP_DONE'})
  }
}
