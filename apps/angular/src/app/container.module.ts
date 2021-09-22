import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { createCustomElement } from '@angular/elements'
import { ContainerComponent } from './container.component'
import { AppModule } from './app.module'

@NgModule({
  declarations: [
    ContainerComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppModule
  ],
  providers: [],
  bootstrap: [],
})
export class ContainerModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(ContainerComponent, { injector: this.injector })

    customElements.define('sinch-angular-app', element)
  }
}
