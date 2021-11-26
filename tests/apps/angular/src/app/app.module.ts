import { CommonModule } from '@angular/common'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SelectComponent } from '../components/Select/Select.component'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  exports: [
    AppComponent,
    SelectComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
