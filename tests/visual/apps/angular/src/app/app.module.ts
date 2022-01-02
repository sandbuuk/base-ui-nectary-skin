import { CommonModule } from '@angular/common'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SelectComponent } from '../components/Select/Select.component'
import { RadioComponent } from '../components/Radio/Radio.component'
import { InputComponent } from '../components/Input/Input.component'
import { AlertComponent } from '../components/Alert/Alert.component'
import { CheckboxComponent } from '../components/Checkbox/Checkbox.component'
import { ButtonComponent } from '../components/Button/Button.component'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    SelectComponent,
    RadioComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
